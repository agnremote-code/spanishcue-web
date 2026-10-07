// Noche abierta · calle · Hospital y comisaría: luces blancas y frías, gente que espera, personal cansado y una ciudad que no duerme del todo.
const CORAZON = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

const encounters = [
  // ───────────────────────────── ESCENA 1 ─────────────────────────────
  {
    id: "clinica-ambulancia",
    kind: "escena",
    district: "clinica",
    title: "Necesita una ambulancia",
    verb: "AYUDAR",
    goal: "Llamar a emergencias, describir síntomas, dar una dirección, seguir instrucciones y tranquilizar a una persona mayor.",
    cast: [
      {
        id: "rosa", name: "Rosa", role: "Hija nerviosa",
        age: "adult", body: "f", build: "average", height: 1.63,
        hair: "bob", hairColor: "#3a2a20", skin: "#d9a77c",
        top: "coat", topColor: "#7a2e3b", bottom: "jeans", bottomColor: "#2b3446",
        extras: ["bag", "scarf", "phone"], pose: "phone",
      },
      {
        id: "tito", name: "Don Tito", role: "Padre mareado",
        age: "old", body: "m", build: "slim", height: 1.68,
        hair: "bald", hairColor: "#cfcac2", skin: "#8d5a3b",
        top: "sweater", topColor: "#5f6b4a", bottom: "pants", bottomColor: "#4a3f35",
        extras: ["glasses", "hat"], pose: "sit", props: ["bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "rosa", mood: "scared",
        line: {
          A: "Una mujer corre hacia ti con el teléfono en la mano. Un señor está sentado en un banco, muy pálido. «¡Por favor! Mi papá está mal. ¿Puedes llamar tú? Yo no puedo hablar.»",
          B: "Junto al estacionamiento, una mujer te agarra del brazo. En el banco, un anciano respira rápido y está blanco como la pared. «Es mi papá, está mareado. Llama tú, por favor, que a mí me tiemblan las manos.»",
          C: "Una mujer te intercepta con el teléfono temblándole en la mano. Detrás, un anciano se sostiene del banco como si el mundo se inclinara. «Perdona, ¿puedes llamar tú? Cada vez que lo intento me quedo en blanco.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Sí, claro. Dame el teléfono. Llamo ahora.", B: "Claro, yo llamo. Tú quédate con tu papá, ¿de acuerdo?", C: "Dame el teléfono. Yo hablo; tú no te separes de él." },
            reply: { A: "Rosa te da el teléfono. «¡Gracias! Gracias.»", B: "Rosa te pasa el teléfono y suelta el aire. «Gracias. No sé qué me pasa, normalmente no soy así.»", C: "Rosa te entrega el teléfono como quien se quita un peso. «Gracias. En el trabajo hablo con cien personas, pero hoy…»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "sintomas",
            say: { A: "Un momento. ¿Qué le pasa exactamente?", B: "Antes de llamar, cuéntame qué le pasa. Así puedo explicarlo bien.", C: "Espera, necesito saber qué decir. ¿Qué le notaste exactamente?" },
            reply: { A: "Rosa señala a su papá. «Está mareado. Dice que todo da vueltas.»", B: "«Estábamos caminando y de repente se sentó. Dice que todo le da vueltas.»", C: "«Íbamos por el auto y, de repente, se sentó sin decir nada. Él nunca se sienta sin quejarse primero.»" },
            mood: "worried", next: "sintomas",
          },
          {
            id: "tito",
            act: { A: "Te agachas al lado del señor.", B: "Te agachas junto al banco.", C: "Te agachas junto al banco, a la altura de sus ojos." },
            say: { A: "Hola, señor. ¿Cómo se siente?", B: "Buenas noches, señor. ¿Me escucha bien? ¿Cómo se siente?", C: "Buenas noches. Soy alguien que pasaba por aquí. ¿Cómo se encuentra?" },
            reply: { A: "El señor te mira despacio. «Mareado… Todo da vueltas.»", B: "El anciano parpadea despacio. «Como en un barco… pero sin el mar.»", C: "El anciano intenta sonreír. «Como en un barco. Lo malo es que yo nunca quise ser marinero.»" },
            mood: "worried", next: "sintomas",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y buscas un papel.", C: "Sacas el lápiz: lo primero es tener la dirección a mano." },
            say: { A: "¿Cuál es la dirección? La escribo para la llamada.", B: "Dime la dirección exacta y la anoto. Así no me equivoco al llamar.", C: "Antes de llamar, dime dónde estamos exactamente. Lo apunto, por si los nervios me juegan una mala pasada." },
            reply: { A: "Rosa piensa. «Avenida del Puerto, número 210. Al lado de la clínica.»", B: "«Avenida del Puerto 210, frente al estacionamiento de la clínica. Qué buena idea.»", C: "«Avenida del Puerto 210», dice Rosa, más centrada. «Frente al estacionamiento. Ves, a ti los nervios no te ganan.»" },
            mood: "worried", next: "llamada",
          },
          libro: {
            act: { A: "Abres el libro y le haces aire al señor.", B: "Usas tu libro como abanico para darle aire.", C: "Improvisas un abanico con tu libro y le das aire a Don Tito." },
            say: { A: "Un poco de aire, señor. ¿Mejor?", B: "A ver si con un poco de aire se siente mejor.", C: "No es literatura de primeros auxilios, pero algo de aire da." },
            reply: { A: "El señor sonríe un poco. «Sí… Gracias. ¿Qué libro es?»", B: "Don Tito cierra los ojos. «Qué rico. ¿Y qué libro es? Parece aburrido, perfecto para dormir.»", C: "Don Tito entreabre un ojo. «Por el peso, debe de ser un clásico. Los clásicos siempre dan buen aire.»" },
            mood: "smile", next: "sintomas",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Te asustas y sacas el gas pimienta.", C: "La mujer viene demasiado rápido: por reflejo, sacas el gas pimienta." },
            say: { A: "¡Alto! ¿Qué quieres?", B: "¡Para! No te acerques tanto. ¿Qué quieres?", C: "¡Un momento! No sé quién eres. ¿Qué pasa?" },
            reply: { A: "Rosa grita. «¡No! ¡Solo quiero ayuda! ¡Mi papá está mal!»", B: "Rosa se para en seco, con las manos arriba. «¡Por favor, no! ¡Mi papá está enfermo, solo eso!»", C: "Rosa retrocede, al borde de las lágrimas. «¡Solo necesito que alguien llame! ¿Tan mala pinta tengo?»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Rosa ve tu granada.", B: "Al buscar tu teléfono, sacas la granada.", C: "Buscas tu teléfono en el bolsillo y, en su lugar, aparece la granada." },
            say: { A: "Perdón, un momento. ¿Qué número llamo?", B: "Perdona, eso no es el teléfono. ¿Qué número marco?", C: "Esto no es un teléfono, evidentemente. ¿Cuál era el número?" },
            reply: { A: "Rosa abre la boca. «¿Eso es… una granada? ¡Ay, no!»", B: "Rosa da dos pasos atrás. «¿Una granada? ¿Es en serio? ¡Hoy no, por favor!»", C: "«Lo que me faltaba esta noche», dice Rosa, pálida. «Mi papá mareado y un desconocido con una granada.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Rosa ve tu pistola.", B: "Al acercarte, Rosa ve la pistola en tu cinturón.", C: "Al inclinarte, la pistola asoma por tu chaqueta. Rosa la ve." },
            say: { A: "Hola. ¿Qué pasa? ¿Te ayudo?", B: "Tranquila, dime qué pasa. ¿En qué te ayudo?", C: "Tranquila, cuéntame qué necesitas." },
            reply: { A: "Rosa se pone delante de su papá. «¡No! ¡No nos hagas nada!»", B: "Rosa se pone delante del banco, temblando. «¡Por favor, no nos hagas nada! Él está enfermo.»", C: "Rosa se interpone entre tú y su padre. «Necesito ayuda, no… esto. Aléjate, por favor.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Ves una naranja en la bolsa de Rosa. Sacas el cuchillo.", B: "Ves una naranja en la bolsa de Rosa y sacas el cuchillo para pelarla.", C: "Te fijas en la naranja que asoma de la bolsa de Rosa y sacas el cuchillo." },
            say: { A: "¿Comió algo hoy? Le pelo la naranja.", B: "¿Tu papá comió algo hoy? A lo mejor le baja el azúcar. Le pelo la naranja.", C: "¿Cenó? A veces un mareo es solo azúcar baja. Le pelo esa naranja, si te parece." },
            reply: { A: "Rosa se asusta un poco, pero dice: «No comió nada. Bueno, pélala.»", B: "Rosa mira el cuchillo, insegura. «Pues… no, no cenó. Bueno, pélala, pero rápido.»", C: "Rosa duda un segundo. «No, no cenó: dijo que no tenía hambre. Pela, pela, pero sin hacer malabares.»" },
            mood: "worried", next: "sintomas",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Tranquila. Estoy aquí. Lo hacemos en equipo.", B: "Respira conmigo un segundo. No estás sola; lo hacemos entre tú y yo.", C: "Respira. Nadie te pide ser valiente ahora; para eso estoy yo, que no tengo nada que perder." },
            reply: { A: "Rosa respira. «Gracias. El teléfono me da miedo. Desde lo de mi mamá.»", B: "Rosa respira hondo. «Perdona. Hace dos años llamé por mi mamá y… desde entonces no puedo.»", C: "Los hombros de Rosa bajan. «La última vez que llamé a emergencias fue por mi mamá. Desde entonces el teléfono me paraliza.»" },
            mood: "love", next: "sintomas",
          },
        },
      },
      sintomas: {
        who: "tito", mood: "pain",
        line: {
          A: "Don Tito está muy pálido. «Tengo frío. Y la cabeza da vueltas.»",
          B: "Don Tito se frota los brazos. «Tengo frío y me zumban los oídos. Rosa exagera, ¿eh?»",
          C: "Don Tito se esfuerza por parecer entero. «Un poco de frío, un zumbido… Rosa es muy dramática, sale a su madre.»",
        },
        options: [
          {
            id: "pecho",
            say: { A: "¿Le duele el pecho o el brazo?", B: "¿Le duele el pecho? ¿Siente algo raro en el brazo?", C: "Una pregunta importante: ¿siente presión en el pecho o algo raro en el brazo izquierdo?" },
            reply: { A: "Don Tito niega. «No, el pecho no. Pero me siento muy débil.»", B: "«El pecho no, pero estoy flojo, como si no tuviera fuerza.»", C: "«El pecho, no. Es más bien como si alguien me hubiera quitado las pilas.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "pastillas",
            say: { A: "¿Toma medicinas? ¿Hoy tomó su pastilla?", B: "¿Toma alguna medicina? ¿Se acordó de tomarla hoy?", C: "¿Toma alguna medicación? Y, con sinceridad, ¿hoy se la tomó?" },
            reply: { A: "Don Tito mira a Rosa. «Eh… Hoy no. Se me olvidó.»", B: "Don Tito baja la mirada. «Para la presión. Hoy… bueno, se me pasó.»", C: "Don Tito carraspea. «Para la presión. Hoy hice una pausa… involuntaria.» Rosa lo mira sin poder creerlo." },
            mood: "sad", next: "llamada",
          },
          {
            id: "adentro",
            say: { A: "La clínica está ahí. Voy a buscar a un enfermero.", B: "La clínica está a treinta metros. Mejor entro y pido una silla de ruedas.", C: "Tenemos la clínica enfrente. Más rápido que una ambulancia es pedir una silla de ruedas en la puerta." },
            reply: { A: "Rosa dice que sí. «¡Es verdad! ¡Corre, por favor!»", B: "Rosa se lleva las manos a la cabeza. «¡Claro, la clínica! Con los nervios ni la vi. ¡Ve, ve!»", C: "«Tienes razón», dice Rosa, casi riéndose de los nervios. «La tengo delante y estaba buscando el número de emergencias.»" },
            mood: "surprised", end: "silla",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted es fuerte, señor. Pero hoy le ayudamos nosotros.", B: "Se nota que usted es fuerte, pero hoy deje que lo cuidemos un poco.", C: "Ya sé que usted es de los que nunca se quejan. Hoy haga una excepción, aunque sea por Rosa." },
            reply: { A: "Don Tito te toma la mano. «No tomé la pastilla. No le digas a Rosa.»", B: "Don Tito te aprieta la mano y susurra: «Hoy no tomé la pastilla de la presión. Que Rosa no se entere.»", C: "Don Tito baja la voz, cómplice. «Te confieso algo: hoy no tomé la pastilla. Si se entera Rosa, me mata antes que la presión.»" },
            mood: "love", next: "llamada",
          },
        },
      },
      llamada: {
        who: "rosa", mood: "worried",
        line: {
          A: "Llamas al número de emergencias. Contesta una mujer: «Emergencias, buenas noches. ¿Qué pasa?» Rosa te mira.",
          B: "Marcas el número de emergencias. Una voz tranquila contesta: «Emergencias, buenas noches. Dígame qué ocurre.» Rosa no te quita los ojos de encima.",
          C: "Marcas. Contesta una operadora con una calma casi envidiable: «Emergencias, buenas noches. Cuénteme qué ocurre.» Rosa te mira como si fueras su última esperanza.",
        },
        options: [
          {
            id: "describir",
            say: { A: "Hola. Un señor de 80 años está mareado. Está muy pálido.", B: "Buenas noches. Hay un señor de unos ochenta años muy mareado. Está pálido y tiene frío.", C: "Buenas noches. Llamo por un señor de unos ochenta años: mareo fuerte, palidez, frío. Está consciente y habla." },
            reply: { A: "La operadora pregunta: «¿Dónde están?» Rosa te dice la dirección.", B: "«Entendido. ¿Me da la dirección exacta?» Rosa te la susurra al oído.", C: "«Muy bien, gracias por la claridad. ¿Dirección exacta?» Rosa te la dicta en voz baja, ya más serena." },
            mood: "worried", next: "instrucciones",
          },
          {
            id: "direccion",
            say: { A: "Estamos en la Avenida del Puerto, 210. Al lado de la clínica.", B: "Estamos en la Avenida del Puerto 210, frente al estacionamiento de la clínica.", C: "Primero la dirección, por si se corta: Avenida del Puerto 210, frente al estacionamiento de la clínica." },
            reply: { A: "«Bien. ¿Qué le pasa al señor?» Explicas: está mareado y pálido.", B: "«Perfecto. ¿Y qué síntomas tiene?» Le explicas lo del mareo, el frío y la palidez.", C: "«Buena idea», dice la operadora. «¿Síntomas?» Le resumes el cuadro en tres frases." },
            mood: "worried", next: "instrucciones",
          },
          {
            id: "pasar",
            say: { A: "Rosa, es mejor si hablas tú. Tú sabes más. Yo estoy aquí.", B: "Rosa, tú conoces mejor a tu papá. Habla tú; yo no me muevo de aquí.", C: "Rosa, nadie sabe más de tu padre que tú. Habla tú; yo te sostengo el otro brazo." },
            reply: { A: "Rosa respira y toma el teléfono. «Bueno. Hola, sí…»", B: "Rosa duda, pero toma el teléfono. «Bueno… Hola, sí. Es mi papá, tiene ochenta y dos años…»", C: "Rosa toma el teléfono con las dos manos. «Hola… Sí. Es mi padre.» La voz le tiembla, pero no se rompe." },
            mood: "worried", end: "rosa-llama",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Rosa, dame la mano. Hablamos en equipo.", B: "Rosa, dame la mano mientras hablo. Tú me corriges si me equivoco.", C: "Ponte aquí, pegada a mí. Yo hablo y tú me soplas lo que me falte." },
            reply: { A: "Rosa te da la mano. Entre tú y ella, lo explican todo. «Ya vienen», dice la operadora.", B: "Rosa te aprieta la mano y te corrige dos veces. La operadora lo anota todo. «Ya va una ambulancia.»", C: "Entre Rosa y tú lo explican todo: tú hablas, Rosa matiza. «Equipo perfecto», dice la operadora. «La ambulancia ya sale.»" },
            mood: "love", next: "instrucciones",
          },
        },
      },
      instrucciones: {
        who: "tito", mood: "worried",
        line: {
          A: "La operadora dice: «La ambulancia llega en cinco minutos. El señor tiene que estar sentado. Hablen con él.»",
          B: "«La ambulancia llega en unos cinco minutos. Que no se levante, que no coma nada y que alguien le hable para que no se duerma.»",
          C: "«Cinco minutos. Manténganlo sentado, sin comer ni beber, y háblenle: que no se adormezca.» Don Tito, que lo ha oído todo, protesta: «Yo no me duermo ni en misa.»",
        },
        options: [
          {
            id: "juventud",
            say: { A: "Don Tito, ¿qué trabajo hacía antes?", B: "Don Tito, cuénteme algo. ¿A qué se dedicaba cuando era joven?", C: "Don Tito, tenemos cinco minutos. ¿Cuál es la mejor historia de su juventud?" },
            reply: { A: "Don Tito sonríe. «Era taxista. Cuarenta años. Conozco todas las calles.»", B: "«Fui taxista cuarenta años. Si me dices una calle, te digo cómo llegar.»", C: "«Taxista, cuarenta años. Una vez llevé a un mago que desapareció sin pagar. Literalmente.»" },
            mood: "smile", end: "ambulancia",
          },
          {
            id: "respirar",
            say: { A: "Vamos a respirar despacio. Uno, dos, tres…", B: "Respire conmigo, despacio. Así, muy bien. Ya casi están aquí.", C: "Hagamos algo útil mientras esperamos: respire conmigo, despacio, como si no hubiera ninguna prisa." },
            reply: { A: "Don Tito respira contigo. Rosa también. «Mejor», dice él.", B: "Don Tito respira contigo y, sin darse cuenta, Rosa también. «Me siento un poco mejor.»", C: "Los tres respiran al mismo ritmo. «Parece una clase de yoga», murmura Don Tito, «pero en un estacionamiento.»" },
            mood: "smile", end: "ambulancia",
          },
          {
            id: "broma",
            say: { A: "Don Tito, ¿le gustan las ambulancias? Es un taxi gratis.", B: "Mire el lado bueno: va a viajar en ambulancia gratis y sin tráfico.", C: "Piénselo así: es el único transporte de la ciudad que nunca se queda en un embotellamiento." },
            reply: { A: "Don Tito se ríe. «¡Ja! Un taxi con luces. Me gusta.»", B: "Don Tito se ríe flojito. «Sin tráfico y con sirena. Toda la vida quise manejar una de esas.»", C: "Don Tito suelta una risa débil. «Cuarenta años de taxista y por fin me llevan a mí. Justicia poética.»" },
            mood: "smile", end: "ambulancia",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Rosa lo quiere mucho, Don Tito. Se nota.", B: "Don Tito, su hija estaba asustadísima por usted. Se nota cuánto lo quiere.", C: "Su hija ha pasado más miedo que usted esta noche, ¿lo sabía? Eso solo pasa cuando se quiere mucho a alguien." },
            reply: { A: "Don Tito mira a Rosa. «Ven, hija.» Rosa lo abraza.", B: "Don Tito mira a Rosa con los ojos húmedos. «Ven aquí, mi niña.» Rosa se sienta y lo abraza.", C: "Don Tito tarda en contestar. «Lo sé. Y no se lo digo nunca.» Entonces se lo dice. Rosa llora y ríe a la vez." },
            mood: "love", end: "ambulancia",
          },
        },
      },
      calmar: {
        who: "rosa", mood: "scared",
        line: {
          A: "Rosa tiene mucho miedo. Está delante de su papá.",
          B: "Rosa no se mueve de delante del banco. Mira a todos lados, buscando ayuda.",
          C: "Rosa protege a su padre con el cuerpo y busca con la mirada la puerta de la comisaría, que está al otro lado de la calle.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Quiero ayudar a tu papá.", B: "Perdona, lo guardo ya. Fue un error. Déjame ayudar a tu papá.", C: "Perdona, de verdad. Ya está guardado. Ahora lo importante es tu padre." },
            reply: { A: "Rosa respira. «Bueno. Pero rápido, por favor.»", B: "Rosa duda, pero mira a su papá y cede. «Está bien. No hay tiempo para discutir.»", C: "«No tengo tiempo de desconfiar», dice Rosa. «Ayúdame y ya veremos.»" },
            mood: "worried", next: "sintomas",
          },
          {
            id: "explicar",
            say: { A: "No es de verdad. Es para una obra de teatro.", B: "No es lo que parece, en serio. Es de utilería, para una obra de teatro.", C: "Te juro que tiene explicación: es utilería de teatro. Ensayamos esta tarde." },
            reply: { A: "Rosa no te cree. Grita: «¡Policía!»", B: "Rosa no te escucha. Corre hacia la comisaría gritando: «¡Policía! ¡Ayuda!»", C: "«Pues que te aplauda la policía», dice Rosa, y corre hacia la comisaría pidiendo ayuda." },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Llama tú, por favor.", B: "Perdona el susto. Me voy, pero llama tú, ¿sí? Tú puedes.", C: "Te dejo tranquila. Pero llama tú: puedes hacerlo, aunque ahora no lo creas." },
            reply: { A: "Rosa toma el teléfono y marca.", B: "Rosa te mira irte y, con las manos temblando, marca el número.", C: "Rosa no contesta, pero cuando te alejas oyes su voz, firme: «Sí, buenas noches, es mi padre…»" },
            mood: "worried", end: "rosa-llama",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón por el susto. Tu papá me necesita. Confía en mí.", B: "Perdóname el susto. Sé que no tienes por qué, pero confía en mí cinco minutos.", C: "Mal comienzo, lo admito. Dame cinco minutos de confianza y te los devuelvo con intereses." },
            reply: { A: "Rosa te mira a los ojos. «Bueno. Tienes ojos buenos.»", B: "Rosa te observa un momento. «No sé por qué, pero te creo. Ven.»", C: "Rosa casi sonríe. «Con intereses, ¿eh? Trato hecho. Ven, rápido.»" },
            mood: "love", next: "sintomas",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "rosa", mood: "terror",
        line: {
          A: "Rosa corre hacia ti y ve el cuchillo en tu mano. Grita y se pone delante de su papá. «¡No! ¡Tiene un cuchillo! ¡Aléjate!»",
          B: "Rosa viene corriendo a pedir ayuda, ve el cuchillo y frena en seco. Se coloca delante del banco con los brazos abiertos. «¡Un cuchillo! ¿Estás loco? ¡No te acerques a mi papá!»",
          C: "Rosa llega corriendo con el teléfono en alto, ve el cuchillo y el pánico le cambia de dirección: ya no busca ayuda, se defiende. «¡Atrás! ¡Ni un paso más con eso en la mano!»",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquila. Lo guardo. Mira: ya está.", B: "Tranquila, tranquila. Lo guardo ahora mismo. ¿Ves? Ya está.", C: "Calma. Lo guardo y me quedo donde estoy. ¿Ves? Manos vacías." },
            reply: { A: "Rosa respira. «Bueno… ¿Qué quieres?» Su papá está muy pálido.", B: "Rosa no baja los brazos, pero respira. «Vale. ¿Y ahora qué quieres?» Detrás, su papá se tambalea.", C: "Rosa sigue en guardia, pero el grito se le convierte en voz. «Bien. ¿Qué quieres?» Detrás, su padre se sujeta al banco." },
            mood: "scared", next: "cuchillo-calma",
          },
          {
            id: "insistir",
            say: { A: "Es para la naranja. ¿Tu papá comió?", B: "Es solo para pelar una naranja. ¿Tu papá comió algo hoy?", C: "Es para la fruta. Una naranja, si tiene el azúcar baja. ¿Comió algo?" },
            reply: { A: "Rosa grita más fuerte: «¡Guardia! ¡Un cuchillo!» Un guardia sale de la clínica.", B: "Rosa no te escucha. Grita hacia la clínica: «¡Guardia! ¡Tiene un cuchillo!» Un guardia de seguridad sale corriendo.", C: "Rosa no distingue entre una naranja y una amenaza. «¡Guardia! ¡Tiene un cuchillo!» El guardia de la clínica ya cruza el estacionamiento." },
            mood: "terror", end: "cuchillo-guardia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Llama tú.", B: "Perdona, fue una tontería. Me voy. Llama tú, por favor.", C: "Tienes razón, esto sobra. Me retiro. Llama tú, que puedes." },
            reply: { A: "Rosa no te quita los ojos de encima. Marca el número con las manos temblando.", B: "Rosa te sigue con la mirada hasta que estás lejos. Solo entonces marca el número.", C: "Rosa espera a que estés a veinte metros. Luego marca, sin dejar de vigilarte." },
            mood: "scared", end: "cuchillo-sola",
          },
        ],
      },
      "cuchillo-calma": {
        who: "tito", mood: "pain",
        line: {
          A: "Don Tito habla desde el banco, muy débil. «Rosa, ya guardó el cuchillo. Tengo frío. Que llame alguien.»",
          B: "Don Tito levanta una mano desde el banco. «Rosa, hija, ya guardó el cuchillo. Yo tengo frío y me zumban los oídos. Que alguien llame.»",
          C: "Don Tito interviene desde el banco, con la voz de quien ha visto cosas peores. «Rosa, el cuchillo ya no está. Yo, en cambio, sigo mareado. ¿Alguien llama o seguimos gritando?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Yo llamo. Dame el teléfono, Rosa.", B: "Yo llamo. Rosa, dame el teléfono y quédate con él.", C: "Dame el teléfono, Rosa. Hablo yo; tú quédate con tu padre." },
            reply: { A: "Rosa duda, pero te da el teléfono. «Nada de cuchillos, ¿eh?»", B: "Rosa te pasa el teléfono con dos dedos. «Sin cuchillos, ¿de acuerdo?»", C: "Rosa te tiende el teléfono como si fuera una tregua. «Un trato: tú hablas, el cuchillo se queda en el bolsillo.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "disculpa",
            say: { A: "Perdón por el susto, señor. ¿Cómo se siente?", B: "Perdón por el susto, Don Tito. ¿Cómo se siente ahora?", C: "Le pido perdón por el susto. Dígame, ¿cómo se encuentra?" },
            reply: { A: "Don Tito sonríe. «Fui taxista cuarenta años. Un cuchillo no me asusta. El mareo sí.»", B: "Don Tito se ríe flojito. «Cuarenta años de taxista. He visto cuchillos más grandes. Esto del mareo es peor.»", C: "Don Tito sonríe con esfuerzo. «Cuarenta años de taxi nocturno. Tu cuchillo es el más pequeño de mi colección. El mareo, en cambio, es nuevo.»" },
            mood: "smile", end: "cuchillo-tito",
          },
          {
            id: "guardia",
            act: { A: "Ves al guardia de la clínica.", B: "Ves al guardia de seguridad en la puerta de la clínica.", C: "Ves al guardia de seguridad asomado a la puerta de la clínica." },
            say: { A: "¡Guardia! ¡Aquí! Un señor está mal.", B: "¡Guardia! ¡Venga, por favor! Hay un señor mareado.", C: "¡Guardia! ¡Aquí, por favor! Un señor con un mareo fuerte." },
            reply: { A: "El guardia viene corriendo. Ve tu cuchillo en el bolsillo. «¿Y eso?»", B: "El guardia llega corriendo y lo primero que ve es el mango del cuchillo en tu bolsillo. «Un momento. ¿Y eso?»", C: "El guardia llega en diez segundos. Mira a Don Tito un segundo y tu bolsillo durante tres. «¿Y eso qué es?»" },
            mood: "worried", end: "cuchillo-guardia",
          },
        ],
      },
      "pistola-inicio": {
        who: "rosa", mood: "terror",
        line: {
          A: "Rosa corre hacia ti, ve la pistola y levanta las manos. «¡No! ¡No, por favor! Mi papá está enfermo. ¡No tenemos nada!»",
          B: "Rosa viene a pedir ayuda, ve la pistola en tu cinturón y levanta las manos despacio. «No, por favor. Mi papá está enfermo. No llevamos nada, te lo juro.»",
          C: "Rosa llega corriendo, ve la pistola y las manos se le van solas hacia arriba. «Por favor. Mi padre está mal. No tenemos dinero, no tenemos nada. Solo vete.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Baja las manos. No es para ti. La guardo.", B: "Baja las manos, por favor. No es para ustedes. Ya la guardo.", C: "Baja las manos. Nadie te está apuntando. La guardo y hablamos." },
            reply: { A: "Rosa baja las manos muy despacio. «¿Entonces qué quieres?»", B: "Rosa baja las manos centímetro a centímetro. «¿Entonces… qué quieres de nosotros?»", C: "Rosa baja las manos sin dejar de mirar tu cinturón. «Entonces explícame qué hace alguien armado en un estacionamiento a esta hora.»" },
            mood: "scared", next: "pistola-calma",
          },
          {
            id: "mentir",
            say: { A: "Soy policía. Tranquila.", B: "Tranquila, soy policía de paisano. No pasa nada.", C: "Tranquila, soy policía de paisano. Es mi arma reglamentaria." },
            reply: { A: "Rosa grita hacia la comisaría: «¡Policía! ¡Aquí!» Un patrullero enciende las luces.", B: "Rosa no te cree. Grita hacia la comisaría de enfrente: «¡Policía! ¡Hay alguien armado!» Un patrullero enciende las luces.", C: "«Pues mira qué bien: la comisaría está enfrente», dice Rosa, y grita. Un patrullero enciende las luces y cruza la calle." },
            mood: "terror", end: "pistola-patrulla",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. Llama tú.", B: "Perdona el susto. Me voy. Llama tú, por favor.", C: "Perdona. Me voy ahora mismo. Llama tú, Rosa." },
            reply: { A: "Rosa espera a que te vayas. Después marca el número.", B: "Rosa no se mueve hasta que desapareces. Solo entonces marca.", C: "Rosa te sigue con la vista hasta la esquina. Luego marca, con las manos todavía temblando." },
            mood: "scared", end: "pistola-sola",
          },
        ],
      },
      "pistola-calma": {
        who: "tito", mood: "pain",
        line: {
          A: "Don Tito habla desde el banco. «Rosa, ya guardó la pistola. Tengo frío. ¿Alguien llama?»",
          B: "Don Tito levanta la cabeza desde el banco. «Rosa, la pistola ya no está. Yo sigo mareado. ¿Llama alguien o no?»",
          C: "Don Tito, pálido, pone orden desde el banco. «Rosa, ya guardó el arma. Yo, en cambio, sigo mareado. ¿Podemos volver a lo importante?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Yo llamo. Dame el teléfono.", B: "Yo llamo. Rosa, dame el teléfono.", C: "Yo llamo. Rosa, el teléfono, por favor." },
            reply: { A: "Rosa te da el teléfono, sin acercarse mucho. «Solo llama.»", B: "Rosa te alcanza el teléfono con el brazo estirado. «Solo llama. Nada más.»", C: "Rosa te pasa el teléfono manteniendo la distancia. «Llama. Y que esa cosa no salga más del cinturón.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "disculpa",
            say: { A: "Perdón por el susto, señor. ¿Cómo se siente?", B: "Perdón por el susto, Don Tito. ¿Cómo se siente?", C: "Le debo una disculpa por el susto. ¿Cómo se encuentra?" },
            reply: { A: "Don Tito sonríe. «Fui taxista. Me robaron tres veces con pistola. Tú no eres ladrón, se nota.»", B: "Don Tito sonríe un poco. «Fui taxista cuarenta años. Me atracaron tres veces a punta de pistola. Tú no tienes cara de eso.»", C: "Don Tito te estudia. «Cuarenta años de taxi: tres atracos con pistola. Sé reconocer a un ladrón, y tú no lo eres. Eres otra cosa, pero no eso.»" },
            mood: "smile", end: "pistola-tito",
          },
          {
            id: "banco",
            say: { A: "Rosa, la dejo en el banco. Lejos de mí. ¿Mejor?", B: "Rosa, dejo la pistola en el banco, lejos de mí. ¿Así estás más tranquila?", C: "Rosa, la dejo sobre el banco, fuera de mi alcance. ¿Eso te tranquiliza?" },
            reply: { A: "Rosa grita: «¡No! ¡Eso es peor!» Un policía sale de la comisaría.", B: "Rosa da un salto. «¡No! ¡Eso es mucho peor!» Un policía de la comisaría ya viene cruzando la calle.", C: "«¡¿Peor todavía?!», grita Rosa. Un agente sale de la comisaría de enfrente, alertado por el grito." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "rosa", mood: "terror",
        line: {
          A: "Rosa corre hacia ti, ve la granada y grita. Corre hacia la comisaría. «¡Una granada! ¡Socorro!» Don Tito se queda solo en el banco.",
          B: "Rosa llegaba a pedir ayuda. Ve la granada en tu mano, grita y corre hacia la comisaría de enfrente. «¡Una granada! ¡Policía!» Su papá se queda solo en el banco.",
          C: "Rosa buscaba un teléfono y se encuentra una granada. Grita con todo el cuerpo y sale corriendo hacia la comisaría. Don Tito, abandonado en el banco, suspira.",
        },
        options: [
          {
            id: "tito",
            say: { A: "Señor, tranquilo. Es de mentira. ¿Cómo se siente?", B: "Señor, tranquilo, es de utilería. ¿Cómo se siente?", C: "Señor, es de utilería, se lo prometo. ¿Cómo se encuentra?" },
            reply: { A: "Don Tito te mira. «Mareado. Y mi hija corre mucho. Siéntate.»", B: "Don Tito te mira con calma. «Mareado. Mi hija corre más que yo a su edad. Siéntate, anda.»", C: "Don Tito te observa sin pánico. «Mareado. Y mi hija corre como nunca. Siéntate; con granada o sin ella, necesito ayuda.»" },
            mood: "worried", next: "granada-tito",
          },
          {
            id: "suelo",
            say: { A: "¡Rosa! ¡La dejo en el suelo! ¡Mira!", B: "¡Rosa, espera! ¡La dejo en el suelo! ¡Mira!", C: "¡Rosa! ¡La dejo en el suelo, ahora mismo! ¡Mira!" },
            reply: { A: "Dejas la granada en el suelo. Salen tres policías de la comisaría. «¡Todos atrás!»", B: "Dejas la granada en el asfalto. De la comisaría salen tres agentes gritando: «¡Todo el mundo atrás! ¡Evacuen el estacionamiento!»", C: "Dejas la granada en el asfalto. Tres agentes salen de la comisaría y, en diez segundos, el estacionamiento es una zona de evacuación." },
            mood: "terror", end: "granada-evacuan",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. ¡Llama tú!", B: "Perdona, me voy. ¡Llama tú a la ambulancia!", C: "Me voy antes de empeorarlo. ¡Rosa, llama tú!" },
            reply: { A: "Rosa llama desde la puerta de la comisaría. Mira la granada todo el tiempo.", B: "Rosa llama desde la puerta de la comisaría, sin dejar de mirar la granada.", C: "Rosa marca desde la puerta de la comisaría, con un ojo en el teléfono y otro en tu granada." },
            mood: "scared", end: "granada-sola",
          },
        ],
      },
      "granada-tito": {
        who: "tito", mood: "pain",
        line: {
          A: "Don Tito respira rápido. «Tengo frío y todo da vueltas. Mi hija gritó “granada”. ¿Es verdad?»",
          B: "Don Tito respira rápido, pero mantiene la calma. «Tengo frío y me zumban los oídos. Oye, mi hija gritó “granada”. ¿Es de verdad?»",
          C: "Don Tito respira con dificultad, pero conserva el humor. «Frío, zumbido, y mi hija gritando “granada” por todo el barrio. ¿Es de verdad o solo lo parece?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Es de mentira. Ahora llamo a una ambulancia.", B: "Es de mentira, señor. Ahora llamo a una ambulancia con mi teléfono.", C: "Es de utilería. Y ahora mismo llamo a una ambulancia." },
            reply: { A: "Llamas. Llega la ambulancia… y un policía. Rosa viene con él.", B: "Llamas. Llega la ambulancia y, detrás, un policía con Rosa. «Esa es la granada», dice ella.", C: "Llamas. La ambulancia llega a la vez que un policía escoltado por Rosa. «Esa», dice ella. «La granada es esa.»" },
            mood: "worried", end: "granada-ambulancia",
          },
          {
            id: "sintomas",
            say: { A: "¿Le duele el pecho? ¿Toma pastillas?", B: "¿Le duele el pecho? ¿Toma alguna pastilla?", C: "¿Le duele el pecho? ¿Toma alguna medicación?" },
            reply: { A: "«El pecho no. Hoy no tomé la pastilla.» Llamas a emergencias.", B: "«El pecho no. La pastilla de la presión… hoy no.» Llamas a emergencias con tu teléfono.", C: "«El pecho, no. La pastilla de la presión, tampoco, hoy no.» Llamas a emergencias antes de que diga nada más." },
            mood: "worried", end: "granada-ambulancia",
          },
          {
            id: "broma",
            say: { A: "Es de mentira. Es un llavero.", B: "Es de mentira. Un llavero. Muy realista, eso sí.", C: "Es un llavero. Demasiado realista, por lo visto." },
            reply: { A: "Don Tito se ríe. Pero la comisaría ya evacúa el estacionamiento.", B: "Don Tito se ríe. Demasiado tarde: tres agentes ya evacúan el estacionamiento.", C: "Don Tito se ríe. Pero el chiste no llega a la comisaría: tres agentes ya evacúan el estacionamiento." },
            mood: "smile", end: "granada-evacuan",
          },
        ],
      },
      "gas-inicio": {
        who: "rosa", mood: "terror",
        line: {
          A: "Rosa corre hacia ti. Tú levantas el gas pimienta. Rosa frena con las manos arriba. «¡No! ¡Solo quiero ayuda! ¡Mi papá está mal!»",
          B: "Rosa viene corriendo y tú levantas el gas pimienta. Ella frena con las manos arriba. «¡No, no! ¡Solo quiero que alguien llame! ¡Mi papá está enfermo!»",
          C: "Rosa se lanza hacia ti y tú levantas el gas pimienta. Frena de golpe, con las manos abiertas. «¡Quieta! ¡Solo quiero ayuda! ¿Tan mala cara tengo?»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. ¿Qué pasa?", B: "Perdona, me asusté. Lo guardo. ¿Qué pasa?", C: "Perdona, corrías muy rápido. Lo guardo. ¿Qué ocurre?" },
            reply: { A: "Rosa baja las manos. «Mi papá. Está mareado. No puedo llamar.»", B: "Rosa baja las manos, temblando. «Es mi papá. Está mareado y yo no puedo hablar por teléfono.»", C: "Rosa baja las manos, todavía temblando. «Mi padre. Está mareado y a mí el teléfono me paraliza.»" },
            mood: "worried", next: "gas-calma",
          },
          {
            id: "mantener",
            say: { A: "Quédate ahí. ¿Qué quieres?", B: "No te acerques más. Dime desde ahí qué quieres.", C: "Quédate donde estás y habla. ¿Qué quieres?" },
            reply: { A: "Rosa señala el banco. «Mi papá. Mira, está pálido. Por favor.»", B: "Rosa señala el banco sin bajar las manos. «Mi papá. Mira, está blanco. Por favor, llama tú.»", C: "Rosa señala el banco con la barbilla. «Mi padre. Míralo: está blanco como la pared. Llama tú, por favor.»" },
            mood: "worried", next: "gas-calma",
          },
          {
            id: "rociar",
            act: { A: "Rosa se mueve. Aprietas el gas sin querer.", B: "Rosa hace un gesto brusco y aprietas el gas sin querer.", C: "Rosa hace un gesto brusco y el dedo se te va: el gas sale." },
            say: { A: "¡Ay, no! ¡Perdón!", B: "¡Ay, no! ¡Perdón, perdón!", C: "¡No! ¡Perdón, se me fue el dedo!" },
            reply: { A: "Rosa tose y llora. Dos enfermeros salen de la clínica corriendo.", B: "Rosa tose, llora y cae de rodillas. Dos enfermeros salen corriendo de la clínica.", C: "Rosa cae de rodillas, tosiendo y con los ojos cerrados. Dos enfermeros cruzan el estacionamiento a la carrera." },
            mood: "terror", end: "gas-rociada",
          },
        ],
      },
      "gas-calma": {
        who: "tito", mood: "pain",
        line: {
          A: "Don Tito habla desde el banco. «Es mi hija, no una ladrona. Tengo frío. ¿Alguien llama?»",
          B: "Don Tito levanta una mano desde el banco. «Es mi hija, no una ladrona. Guarda eso. Yo tengo frío y todo da vueltas.»",
          C: "Don Tito aclara desde el banco, con voz débil. «Es mi hija, no una atracadora. Guarda ese aerosol. Yo sigo mareado, por si a alguien le interesa.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Perdón. Yo llamo. Dame el teléfono, Rosa.", B: "Perdón. Yo llamo ahora. Rosa, el teléfono.", C: "Perdón por el recibimiento. Yo llamo. Rosa, dame el teléfono." },
            reply: { A: "Rosa te da el teléfono. «Y guarda bien eso, por favor.»", B: "Rosa te da el teléfono. «Gracias. Y ese gas, al fondo del bolso, por favor.»", C: "Rosa te pasa el teléfono. «Gracias. Y el gas, al fondo del bolso, lejos de mí.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "adentro",
            say: { A: "La clínica está ahí. Voy por un enfermero.", B: "La clínica está a treinta metros. Voy a buscar una silla de ruedas.", C: "Tenemos la clínica enfrente. Voy por una silla de ruedas." },
            reply: { A: "Rosa asiente. «Sí. Y perdón por correr así.»", B: "Rosa asiente. «Sí, por favor. Y perdona que te asustara, corría sin mirar.»", C: "Rosa asiente. «Ve. Y perdona el susto: corría sin pensar en cómo me vería la gente.»" },
            mood: "worried", end: "gas-silla",
          },
          {
            id: "regalo",
            say: { A: "Rosa, toma el gas. Para ti. Yo llamo.", B: "Rosa, quédate con el gas, por si acaso. Yo llamo.", C: "Rosa, quédate con el gas pimienta; en esta calle te hace más falta que a mí. Yo llamo." },
            reply: { A: "Rosa lo guarda en el bolso. «Gracias. Bueno… llama.»", B: "Rosa lo guarda en el bolso, sin saber si reír o llorar. «Gracias. Qué noche. Llama.»", C: "Rosa lo mete en el bolso. «La noche más rara de mi vida: casi me rocían y me regalan el aerosol. Llama.»" },
            mood: "worried", end: "gas-regalo",
          },
        ],
      },
      "lapiz-inicio": {
        who: "rosa", mood: "scared",
        line: {
          A: "Rosa corre hacia ti. Tú sacas el lápiz. «¿Un lápiz? ¡Necesito un teléfono! Mi papá está mal.»",
          B: "Rosa viene corriendo y tú ya tienes el lápiz en la mano. «¿Un lápiz? Yo necesito a alguien que llame. Mi papá está mareado.»",
          C: "Rosa te intercepta y lo primero que ve es tu lápiz. «¿Un lápiz? Necesito a alguien que hable con emergencias, no un dictado. Mi padre está mal.»",
        },
        options: [
          {
            id: "anotar",
            say: { A: "Primero la dirección. Dímela. La escribo.", B: "Primero la dirección exacta. Dímela y la anoto. Así no me equivoco.", C: "Antes de llamar, la dirección exacta. Dímela: la anoto para no fallar." },
            reply: { A: "Rosa piensa. «Avenida del Puerto, 210.» Escribes.", B: "Rosa respira. «Avenida del Puerto 210, frente a la clínica.» Lo escribes en un papel.", C: "Rosa se concentra. «Avenida del Puerto 210, frente al estacionamiento.» Lo apuntas; a ella, dictar la calma." },
            mood: "worried", next: "lapiz-nota",
          },
          {
            id: "mapa",
            act: { A: "Dibujas una flecha hacia la clínica.", B: "Dibujas una flecha grande hacia la puerta de la clínica.", C: "Dibujas una flecha enorme hacia la puerta de urgencias." },
            say: { A: "Mira: la clínica está ahí. Ve y pide ayuda.", B: "Mira: la clínica está a treinta metros. Ve con esta nota y pide una silla.", C: "Mira la flecha: urgencias está ahí mismo. Ve con la nota y pide una silla de ruedas." },
            reply: { A: "Rosa mira el papel. «¡Es verdad! ¡Voy!» Corre con la nota.", B: "Rosa mira el papel y se lleva la mano a la frente. «¡La tenía delante!» Corre con la nota.", C: "Rosa mira la flecha y casi se ríe. «Llevo cinco minutos buscando un número y la tengo enfrente.» Corre con la nota." },
            mood: "surprised", end: "lapiz-mapa",
          },
          {
            id: "tito",
            act: { A: "Le das el lápiz a Don Tito.", B: "Le pones el lápiz en la mano a Don Tito.", C: "Le colocas el lápiz en la mano a Don Tito." },
            say: { A: "Señor, apriete el lápiz. Fuerte. ¿Puede?", B: "Señor, apriete el lápiz con la mano. ¿Puede apretar fuerte?", C: "Señor, apriete el lápiz. Quiero ver la fuerza de esa mano." },
            reply: { A: "Don Tito aprieta. «Sí. Puedo.» Rosa respira.", B: "Don Tito aprieta el lápiz. «Puedo. Fuerte.» Rosa suelta el aire.", C: "Don Tito aprieta el lápiz con una mano firme. «Taxista cuarenta años. Puedo.» Rosa respira." },
            mood: "worried", next: "lapiz-nota",
          },
        ],
      },
      "lapiz-nota": {
        who: "rosa", mood: "worried",
        line: {
          A: "Rosa mira tu papel. «Dirección, edad, mareo… Es una lista. Me ayuda.»",
          B: "Rosa lee el papel por encima de tu hombro. «Dirección, edad, mareo, frío… Es como una lista. Así sí puedo pensar.»",
          C: "Rosa lee el papel. «Dirección, ochenta y dos años, mareo, frío. Una lista. Con esto delante hasta yo podría hablar.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Yo llamo con la lista. Dame el teléfono.", B: "Llamo yo con la lista delante. Dame el teléfono.", C: "Llamo yo, con la lista como guion. El teléfono, por favor." },
            reply: { A: "Rosa te da el teléfono. «Lee la lista. Gracias.»", B: "Rosa te pasa el teléfono. «Lee la lista y no te saltes nada.»", C: "Rosa te entrega el teléfono. «Lee la lista. Línea por línea. Gracias.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "rosa",
            say: { A: "Llama tú. Lee el papel. Yo estoy aquí.", B: "Llama tú y lee el papel. Yo me quedo a tu lado.", C: "Llama tú. Lee el papel, palabra por palabra. Yo no me muevo." },
            reply: { A: "Rosa toma el papel y marca. «Hola… Avenida del Puerto 210…»", B: "Rosa agarra el papel con las dos manos y marca. «Hola. Avenida del Puerto 210. Mi papá, ochenta y dos años…»", C: "Rosa sujeta el papel como un salvavidas y marca. «Buenas noches. Avenida del Puerto 210. Es mi padre, ochenta y dos años, mareo…»" },
            mood: "worried", end: "lapiz-rosa",
          },
          {
            id: "pastilla",
            say: { A: "¿Toma pastillas? Lo escribo también.", B: "¿Toma alguna medicina? Lo añado a la lista.", C: "¿Toma medicación? Lo añado: eso lo preguntan siempre." },
            reply: { A: "Don Tito: «La de la presión. Hoy no.» Lo escribes. Rosa corre a la clínica con la nota.", B: "Don Tito confiesa: «La de la presión. Hoy no.» Lo apuntas y Rosa sale corriendo a la clínica con la nota.", C: "Don Tito carraspea: «La de la presión. Hoy, por error, no.» Lo apuntas y Rosa corre a urgencias con la lista completa." },
            mood: "worried", end: "lapiz-mapa",
          },
        ],
      },
      "libro-inicio": {
        who: "rosa", mood: "angry",
        line: {
          A: "Rosa corre hacia ti. Tú tienes un libro en la mano. «¿Un libro? ¿Me vas a leer un cuento? ¡Mi papá está mal!» Don Tito se ríe desde el banco.",
          B: "Rosa viene corriendo y te encuentra con un libro abierto. «¿Un libro? ¿En serio? ¡Mi papá está mareado y tú lees!» Desde el banco, Don Tito se ríe flojito.",
          C: "Rosa te intercepta y descubre que llevas un libro abierto. «¿Un libro? ¿A esta hora, aquí? ¡Mi padre está mal!» Don Tito, desde el banco, se ríe sin fuerzas.",
        },
        options: [
          {
            id: "abanico",
            act: { A: "Vas al banco y le das aire al señor con el libro.", B: "Te acercas al banco y usas el libro de abanico.", C: "Te plantas junto al banco y conviertes el libro en abanico." },
            say: { A: "Un poco de aire, señor. ¿Mejor?", B: "Un poco de aire, señor. ¿Se siente mejor?", C: "Aire, señor. No es medicina, pero algo hace." },
            reply: { A: "Don Tito cierra los ojos. «Mejor. ¿Qué libro es?» Rosa se calla.", B: "Don Tito cierra los ojos. «Qué rico. ¿Qué libro es?» Rosa, sorprendida, se calla.", C: "Don Tito entreabre un ojo. «Por el peso, un clásico. Buen aire.» Rosa, por primera vez, se calla." },
            mood: "smile", next: "libro-aire",
          },
          {
            id: "numero",
            act: { A: "Abres la última página del libro.", B: "Abres la última página: ahí tienes anotado el número de emergencias.", C: "Vas a la última página, donde siempre apuntas los números importantes." },
            say: { A: "Aquí tengo el número de emergencias. Llamo ahora.", B: "Aquí tengo apuntado el número de emergencias. Llamo ahora mismo.", C: "Tengo el número de emergencias apuntado aquí. Llamo ya." },
            reply: { A: "Rosa te da su teléfono. «Bueno… el libro sirve.»", B: "Rosa te pasa su teléfono, un poco avergonzada. «Vale, el libro sirve para algo.»", C: "Rosa te tiende el teléfono. «Retiro lo del cuento. Marca.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "leer",
            act: { A: "Te sientas al lado de Don Tito y abres el libro.", B: "Te sientas junto a Don Tito y abres el libro.", C: "Te sientas junto a Don Tito y abres el libro por donde ibas." },
            say: { A: "Señor, le leo algo. Así no se duerme. Rosa, llama tú.", B: "Señor, le leo un poco para que no se duerma. Rosa, mientras, llama tú.", C: "Señor, le leo para mantenerlo despierto. Rosa, llama tú: la lectura la pongo yo." },
            reply: { A: "Don Tito escucha. Rosa, sin pensarlo, marca el número.", B: "Don Tito escucha con los ojos cerrados. Rosa, sin darse cuenta, ya está marcando.", C: "Don Tito escucha. Rosa, distraída por la escena, marca el número sin bloquearse." },
            mood: "smile", end: "libro-lectura",
          },
        ],
      },
      "libro-aire": {
        who: "tito", mood: "smile",
        line: {
          A: "Don Tito está un poco mejor. «¿De qué trata el libro? Yo era taxista. Leía en los semáforos.»",
          B: "Don Tito tiene algo más de color. «¿Y de qué va el libro? Cuando era taxista leía en los semáforos. Una página por semáforo.»",
          C: "Don Tito recupera algo de color. «¿De qué trata? De taxista leía en los semáforos: una página por luz roja. Me sé muchos finales a medias.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Es suyo. Para leer en la ambulancia. Rosa, llama.", B: "Se lo regalo. Para leerlo en la ambulancia. Rosa, llama tú ahora.", C: "Quédeselo. Para la ambulancia y la sala de espera. Rosa, llama." },
            reply: { A: "Don Tito abraza el libro. Rosa marca el número.", B: "Don Tito abraza el libro como un tesoro. Rosa marca, más tranquila.", C: "Don Tito aprieta el libro contra el pecho. Rosa marca sin que le tiemble la voz." },
            mood: "love", end: "libro-regalo",
          },
          {
            id: "leer",
            say: { A: "Le leo un poco. Rosa, ve a la clínica por un enfermero.", B: "Le leo un poco mientras Rosa va a la clínica a buscar un enfermero.", C: "Le leo mientras Rosa va a urgencias por una silla de ruedas." },
            reply: { A: "Rosa corre a la clínica. Don Tito escucha el primer capítulo.", B: "Rosa corre hacia la clínica. Don Tito escucha el primer capítulo con los ojos cerrados.", C: "Rosa sale disparada hacia urgencias. Don Tito escucha el primer capítulo como si fuera un semáforo largo." },
            mood: "smile", end: "libro-lectura",
          },
          {
            id: "llamar",
            say: { A: "Después le cuento. Ahora llamo. Rosa, el teléfono.", B: "Se lo cuento después. Ahora llamo. Rosa, el teléfono.", C: "Se lo cuento en la ambulancia. Ahora llamo. Rosa, el teléfono." },
            reply: { A: "Rosa te da el teléfono. «Gracias. Y gracias por el aire.»", B: "Rosa te pasa el teléfono. «Gracias. Por llamar y por el abanico.»", C: "Rosa te tiende el teléfono. «Gracias. Y perdona lo del cuento.»" },
            mood: "worried", next: "llamada",
          },
        ],
      },
      "corazon-inicio": {
        who: "rosa", mood: "love",
        line: {
          A: "Rosa corre hacia ti y, al verte, se calma de golpe. «Perdona… No sé por qué, pero contigo me siento tranquila. Mi papá está mal.»",
          B: "Rosa viene corriendo y, al llegar a ti, algo en ella se afloja. «No sé quién eres, pero me tranquilizas. Mi papá está mareado y yo no puedo llamar.»",
          C: "Rosa llega corriendo y, sin explicación, el pánico se le disuelve al verte. «No sé qué tienes, pero es lo primero que me calma en toda la noche. Mi padre está mal.»",
        },
        options: [
          {
            id: "juntos",
            say: { A: "Lo hacemos juntos. Dame la mano.", B: "Lo hacemos juntos. Dame la mano y respira.", C: "Lo hacemos en equipo. Dame la mano y respira conmigo." },
            reply: { A: "Rosa te da la mano. «Desde lo de mi mamá no puedo llamar.»", B: "Rosa te aprieta la mano. «Desde que llamé por mi mamá, hace dos años, no puedo.»", C: "Rosa te toma la mano con fuerza. «La última vez que llamé fue por mi madre. Desde entonces, nada.»" },
            mood: "love", next: "corazon-mano",
          },
          {
            id: "abrazar",
            act: { A: "Abrazas a Rosa.", B: "Abrazas a Rosa un segundo.", C: "Abrazas a Rosa, breve y firme." },
            say: { A: "Tranquila. Yo llamo ahora.", B: "Tranquila. Yo llamo ahora mismo.", C: "Tranquila. Llamo yo, ahora." },
            reply: { A: "Rosa llora un poco y te da el teléfono. Llamas. Don Tito sonríe.", B: "Rosa llora un segundo en tu hombro y te da el teléfono. Llamas. Don Tito sonríe desde el banco.", C: "Rosa se deshace un instante en tu hombro y te entrega el teléfono. Llamas. Don Tito observa, conmovido." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "tito",
            act: { A: "Te agachas junto a Don Tito.", B: "Te agachas junto al banco.", C: "Te agachas a la altura de Don Tito." },
            say: { A: "Señor, su hija lo quiere mucho. ¿Cómo se siente?", B: "Señor, su hija está muy asustada por usted. ¿Cómo se siente?", C: "Señor, su hija lleva un rato pasando miedo por usted. ¿Cómo se encuentra?" },
            reply: { A: "Don Tito te mira. «Mareado. Pero con ustedes, mejor.»", B: "Don Tito sonríe débil. «Mareado. Pero con ustedes dos aquí, menos.»", C: "Don Tito sonríe. «Mareado. Aunque con ustedes dos delante, el barco se mueve menos.»" },
            mood: "love", next: "corazon-mano",
          },
        ],
      },
      "corazon-mano": {
        who: "rosa", mood: "love",
        line: {
          A: "Rosa te mira a los ojos. «Contigo aquí creo que puedo. ¿Llamo yo?»",
          B: "Rosa no te suelta la mano. «No sé por qué, pero contigo al lado creo que puedo. ¿Llamo yo?»",
          C: "Rosa te mira, todavía con tu mano en la suya. «Es absurdo, pero contigo al lado creo que puedo. ¿Llamo yo?»",
        },
        options: [
          {
            id: "rosa",
            say: { A: "Sí. Llama tú. Yo te sostengo.", B: "Sí, llama tú. Yo no te suelto.", C: "Llama tú. Yo me quedo aquí, sin soltarte." },
            reply: { A: "Rosa marca. Habla despacio y bien. «Avenida del Puerto 210…»", B: "Rosa marca y habla despacio, clara. «Avenida del Puerto 210. Es mi papá…»", C: "Rosa marca y habla con una serenidad que no tenía hace un minuto. «Avenida del Puerto 210. Es mi padre…»" },
            mood: "love", end: "corazon-rosa",
          },
          {
            id: "yo",
            say: { A: "Hoy llamo yo. Tú quédate con él.", B: "Hoy llamo yo. Tú quédate con tu papá.", C: "Hoy llamo yo. Tú ocúpate de tu padre." },
            reply: { A: "Rosa te da el teléfono. «Gracias.» Se sienta con su papá.", B: "Rosa te pasa el teléfono con una sonrisa cansada. «Gracias.» Se sienta junto a su papá.", C: "Rosa te entrega el teléfono. «Gracias.» Se sienta junto a su padre y le toma la mano." },
            mood: "love", next: "llamada",
          },
          {
            id: "quedarse",
            say: { A: "Llamamos los dos. Tú hablas, yo te ayudo.", B: "Llamamos los dos. Tú hablas y yo te soplo lo que falte.", C: "Llamamos los dos: tú hablas, yo te apunto lo que falte." },
            reply: { A: "Rosa marca. Entre los dos explican todo. Don Tito sonríe.", B: "Rosa marca. Entre los dos lo explican todo. Don Tito mira la escena con una sonrisa.", C: "Rosa marca. Entre los dos lo cuentan todo. Don Tito observa como quien ve una película con final feliz." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      ambulancia: {
        text: { A: "La ambulancia llega con luces azules. Se llevan a Don Tito. Rosa te dice: «Gracias».", B: "La ambulancia llega en cinco minutos. Los paramédicos suben a Don Tito y Rosa va con él. Antes de irse, te da las gracias.", C: "La ambulancia entra en el estacionamiento con la sirena apagada. Don Tito saluda desde la camilla como un rey en carroza; Rosa te da las gracias sin palabras." },
        change: "ambulancia", recap: "Llamaste a una ambulancia para Don Tito.",
      },
      silla: {
        text: { A: "Un enfermero sale con una silla de ruedas. Don Tito entra en la clínica con Rosa.", B: "Sale un enfermero con una silla de ruedas. Don Tito protesta, pero se sienta, y Rosa lo acompaña adentro.", C: "Un enfermero llega con una silla de ruedas. Don Tito se sube protestando, pero con cierta elegancia, y entra a la clínica con Rosa." },
        change: "se-va", recap: "Buscaste a un enfermero para Don Tito.",
      },
      "rosa-llama": {
        text: { A: "Rosa habla por teléfono. Está nerviosa, pero lo hace muy bien.", B: "Rosa habla con emergencias. Le tiembla la voz, pero lo explica todo.", C: "Rosa se enfrenta al teléfono y gana. Cuando cuelga, parece más sorprendida que nadie." },
        change: "llama", recap: "Animaste a Rosa a llamar a emergencias.",
      },
      policia: {
        text: { A: "Llega la policía. Explicas todo. Llega también una ambulancia para Don Tito.", B: "Sale un policía de la comisaría. Explicas el malentendido y, de paso, él llama a una ambulancia.", C: "Un policía cruza la calle. Aclarar el malentendido te lleva un buen rato; por suerte, él llama a la ambulancia mientras tanto." },
        change: "policia", recap: "Un malentendido con Rosa terminó con la policía.",
      },
      "cuchillo-guardia": {
        text: { A: "El guardia te quita el cuchillo. Rosa llora. Un enfermero se lleva a Don Tito en silla de ruedas.", B: "El guardia te quita el cuchillo y te retiene en la puerta. Un enfermero se lleva a Don Tito; Rosa no te mira al pasar.", C: "El guardia te quita el cuchillo y te pide que esperes. Don Tito entra en silla de ruedas; Rosa pasa a tu lado sin mirarte, todavía temblando." },
        change: "policia", recap: "Tu cuchillo asustó a Rosa y el guardia de la clínica te retuvo.",
      },
      "cuchillo-sola": {
        text: { A: "Rosa llama sola. Habla rápido y mira hacia ti todo el tiempo.", B: "Rosa llama sola, vigilándote desde lejos. Lo hace bien, aunque con la voz rota por el susto.", C: "Rosa llama sola, sin perderte de vista. El miedo al cuchillo le pudo al miedo al teléfono." },
        change: "llama", recap: "Rosa llamó sola a emergencias después del susto del cuchillo.",
      },
      "cuchillo-tito": {
        text: { A: "Llega la ambulancia. Don Tito te dice: «Guarda ese cuchillo, muchacho.» Rosa casi sonríe.", B: "Llega la ambulancia. Don Tito te señala desde la camilla: «Y guarda ese cuchillo, que asustas a mi hija.» Rosa casi sonríe.", C: "Llega la ambulancia. Desde la camilla, Don Tito sentencia: «Y el cuchillo, en casa. Mi hija ya tiene bastante conmigo.» Rosa, por fin, sonríe." },
        change: "ambulancia", recap: "Don Tito te perdonó el susto del cuchillo antes de subir a la ambulancia.",
      },
      "pistola-patrulla": {
        text: { A: "Llega un patrullero. Te quitan la pistola y te hacen preguntas. Otra ambulancia se lleva a Don Tito.", B: "Un patrullero cruza la calle. Te quitan la pistola y te interrogan en la acera mientras una ambulancia se lleva a Don Tito.", C: "Un patrullero cruza la calle con las luces encendidas. Te quitan el arma y las preguntas duran más que el mareo de Don Tito, que ya va en ambulancia." },
        change: "policia", recap: "Tu pistola frente a la comisaría terminó con un patrullero y un interrogatorio.",
      },
      "pistola-sola": {
        text: { A: "Rosa llama sola. Te mira hasta que estás lejos.", B: "Rosa llama sola, sin dejar de mirar hacia donde te fuiste.", C: "Rosa llama sola. El miedo a tu pistola le quitó el miedo al teléfono." },
        change: "llama", recap: "Rosa llamó sola a emergencias después de ver tu pistola.",
      },
      "pistola-tito": {
        text: { A: "Llega la ambulancia. Don Tito te dice: «La pistola, en casa.» Rosa asiente, seria.", B: "Llega la ambulancia. Don Tito te señala desde la camilla: «Esa pistola, en casa, ¿eh?» Rosa asiente, todavía seria.", C: "Llega la ambulancia. Don Tito, desde la camilla, da su último consejo de taxista: «Esa pistola solo te va a traer problemas.» Rosa asiente sin sonreír." },
        change: "ambulancia", recap: "Don Tito, antes de subir a la ambulancia, te pidió dejar la pistola en casa.",
      },
      "granada-evacuan": {
        text: { A: "La policía evacúa el estacionamiento. Un helicóptero vuela sobre la clínica. Don Tito se va en ambulancia.", B: "La policía evacúa el estacionamiento y un helicóptero sobrevuela la clínica. Don Tito sale en ambulancia entre luces azules.", C: "Evacúan el estacionamiento, un helicóptero ilumina la clínica y Don Tito sale en ambulancia convertido en la persona más tranquila de la cuadra." },
        change: "helicoptero", recap: "Tu granada provocó una evacuación con helicóptero frente a la comisaría.",
      },
      "granada-sola": {
        text: { A: "Rosa llama desde la comisaría. La ambulancia llega. Tú te vas con la granada.", B: "Rosa llama desde la puerta de la comisaría. La ambulancia llega y tú te alejas con la granada en el bolsillo.", C: "Rosa llama desde la comisaría. La ambulancia llega; tú te alejas con la granada, convertido en la anécdota de su noche." },
        change: "llama", recap: "Rosa llamó a emergencias desde la comisaría, lejos de tu granada.",
      },
      "granada-ambulancia": {
        text: { A: "La ambulancia se lleva a Don Tito. El policía se queda con tu granada. «Es de plástico», dice.", B: "La ambulancia se lleva a Don Tito. El policía examina tu granada. «De plástico. Pero me la quedo.»", C: "La ambulancia se lleva a Don Tito. El policía gira tu granada entre los dedos. «De plástico. Me la quedo igual, por educación.»" },
        change: "ambulancia", recap: "Llamaste a la ambulancia para Don Tito y la policía se quedó tu granada.",
      },
      "gas-rociada": {
        text: { A: "Los enfermeros lavan los ojos de Rosa. Don Tito y ella entran juntos a la clínica.", B: "Los enfermeros le lavan los ojos a Rosa y se la llevan con su papá. Entran los dos a la clínica.", C: "Los enfermeros le lavan los ojos a Rosa y la meten en la clínica junto a su padre: dos pacientes por el precio de uno." },
        change: "ambulancia", recap: "Rociaste a Rosa con gas pimienta sin querer y entró con su papá a la clínica.",
      },
      "gas-silla": {
        text: { A: "Un enfermero trae una silla de ruedas. Rosa te mira: «Y guarda ese gas».", B: "Un enfermero sale con una silla de ruedas. Rosa te dice adiós con la mano: «Y guarda ese gas, por favor».", C: "Un enfermero llega con la silla de ruedas. Rosa se despide: «Gracias. Y ese gas, en casa.»" },
        change: "se-va", recap: "Después del susto del gas, buscaste una silla de ruedas para Don Tito.",
      },
      "gas-regalo": {
        text: { A: "Llamas a la ambulancia. Rosa guarda tu gas en el bolso.", B: "Llamas a la ambulancia. Rosa guarda tu gas pimienta en el bolso y se queda con su papá.", C: "Llamas a la ambulancia. Rosa, con tu gas en el bolso, se sienta junto a su padre: asustada, pero armada." },
        change: "llama", recap: "Le regalaste tu gas pimienta a Rosa y llamaste a la ambulancia.",
      },
      "lapiz-mapa": {
        text: { A: "Rosa entra a la clínica con tu nota. Sale un enfermero con una silla de ruedas.", B: "Rosa entra a la clínica con tu nota. Un minuto después sale un enfermero con una silla de ruedas.", C: "Rosa entra en urgencias con tu nota. Un minuto después sale un enfermero con una silla de ruedas y la nota en el bolsillo." },
        change: "se-va", recap: "Con una nota a lápiz, Rosa pidió ayuda en la clínica.",
      },
      "lapiz-rosa": {
        text: { A: "Rosa lee tu lista y habla. Lo hace bien. La ambulancia ya viene.", B: "Rosa lee tu lista al teléfono y lo explica todo. La ambulancia ya está en camino.", C: "Rosa lee tu lista al teléfono, línea por línea, y cuelga sorprendida de sí misma. La ambulancia ya viene." },
        change: "llama", recap: "Rosa llamó a emergencias leyendo la lista que escribiste con el lápiz.",
      },
      "libro-regalo": {
        text: { A: "Llega la ambulancia. Don Tito sube con tu libro. «Lo termino en el hospital.»", B: "Llega la ambulancia. Don Tito sube a la camilla con tu libro. «Lo termino en el hospital, sin semáforos.»", C: "Llega la ambulancia. Don Tito sube con tu libro bajo el brazo. «Por fin voy a terminar uno sin que cambie la luz.»" },
        change: "ambulancia", recap: "Don Tito se fue en ambulancia con tu libro.",
      },
      "libro-lectura": {
        text: { A: "Un enfermero llega con una silla. Don Tito pregunta: «¿Y cómo termina?»", B: "Un enfermero llega con una silla de ruedas. Don Tito protesta: «¡Un capítulo más!»", C: "Un enfermero llega con la silla de ruedas en mitad del capítulo. Don Tito protesta: «¡Justo ahora!»" },
        change: "se-va", recap: "Le leíste a Don Tito mientras llegaba la ayuda.",
      },
      "corazon-abrazo": {
        text: { A: "Llega la ambulancia. Rosa te abraza. «Gracias por calmarme.»", B: "Llega la ambulancia. Antes de subir, Rosa te abraza. «No sé qué hiciste, pero gracias.»", C: "Llega la ambulancia. Rosa te abraza antes de subir. «No sé qué tienes, pero esta noche me salvaste a mí también.»" },
        change: "abraza", recap: "Rosa te abrazó antes de subir a la ambulancia.",
      },
      "corazon-rosa": {
        text: { A: "Rosa cuelga. Está sorprendida. «¡Lo hice!» Te toma la mano otra vez.", B: "Rosa cuelga y se queda mirando el teléfono. «Lo hice.» Te aprieta la mano.", C: "Rosa cuelga y se queda mirando el teléfono como un enemigo vencido. «Lo hice.» Te aprieta la mano sin decir más." },
        change: "llama", recap: "De tu mano, Rosa volvió a llamar a emergencias por primera vez en dos años.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si una persona tiene miedo de ti?", B: "¿Alguna vez un malentendido hizo que alguien te viera como un peligro?", C: "¿Cómo se repara la confianza en los segundos que siguen a un susto injustificado?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de las armas?", B: "¿Qué harías si vieras a una persona armada en la calle?", C: "¿Hasta qué punto la presencia de un arma cambia lo que estamos dispuestos a decir?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué haces cuando hay pánico?", B: "¿Cuál fue la situación más absurda que viviste en una emergencia?", C: "¿Por qué el pánico colectivo se contagia más rápido que la calma?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Llevas algo para defenderte?", B: "¿Alguna vez te defendiste de alguien que solo quería ayudarte?", C: "¿Dónde está la frontera entre la prudencia y la paranoia cuando alguien corre hacia ti de noche?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes listas cuando estás nervioso?", B: "¿Qué cosas prefieres tener por escrito antes de hablar?", C: "¿En qué medida poner algo por escrito te ayuda a pensar con claridad bajo presión?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro regalas a una persona enferma?", B: "¿Qué libro te acompañó en una sala de espera?", C: "¿Qué puede hacer la lectura por alguien en un momento de miedo?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Quién te calma cuando tienes miedo?", B: "¿Qué persona consigue calmarte solo con estar a tu lado?", C: "¿Qué tiene la presencia de ciertas personas que nos devuelve la capacidad de actuar?" } },
    },
    speak: {
      A1: "¿Cuál es el número de emergencias en tu país?",
      A2: "¿Cuándo fue la última vez que fuiste al médico?",
      B1: "¿Cómo te sientes cuando tienes que hablar por teléfono en otro idioma?",
      B2: "¿Qué harías si un familiar se sintiera mal en la calle?",
      C1: "¿En qué situaciones te bloqueas aunque sepas perfectamente qué hacer?",
      C2: "¿Qué dice de una persona la forma en que reacciona cuando alguien querido está en peligro?",
    },
  },

  // ───────────────────────────── ESCENA 2 ─────────────────────────────
  {
    id: "clinica-telefono",
    kind: "escena",
    district: "clinica",
    title: "Perdió el teléfono",
    verb: "AYUDAR",
    goal: "Reconstruir lo que pasó, describir un objeto, sugerir soluciones y reaccionar con humor ante una sorpresa.",
    cast: [
      {
        id: "lucas", name: "Lucas", role: "Chico sin teléfono",
        age: "young", body: "m", build: "slim", height: 1.85,
        hair: "curly", hairColor: "#1a1410", skin: "#6b4630",
        top: "jacket", topColor: "#3f7d5c", bottom: "pants", bottomColor: "#c9b48a",
        extras: ["headphones", "backpack"], pose: "stand", props: ["police-door"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "lucas", mood: "worried",
        line: {
          A: "En la puerta de la comisaría, un chico busca en todos sus bolsillos. «No encuentro mi teléfono. ¿Me ayudas?»",
          B: "Frente a la comisaría, un chico se toca los bolsillos por tercera vez. «Se me perdió el teléfono. Iba a entrar a denunciarlo, pero no sé ni por dónde empezar.»",
          C: "Un chico da vueltas frente a la comisaría, palpándose los bolsillos como si el teléfono pudiera reaparecer por insistencia. «Dime que esto no me está pasando. Sin teléfono no sé ni qué hora es.»",
        },
        options: [
          {
            id: "pasos",
            say: { A: "Tranquilo. ¿Dónde estuviste esta noche?", B: "Tranquilo. Vamos por partes: ¿dónde estuviste esta noche?", C: "A ver, reconstruyamos la escena del crimen. ¿Por dónde anduviste?" },
            reply: { A: "Lucas piensa. «Fui a un bar de tacos. Después tomé el autobús.»", B: "«Cené en un bar de tacos, después tomé el autobús y pasé por la farmacia.»", C: "Lucas cuenta con los dedos. «Bar de tacos, autobús, farmacia. Un recorrido muy glamoroso, ya ves.»" },
            mood: "worried", next: "pasos",
          },
          {
            id: "describir",
            say: { A: "¿Cómo es tu teléfono?", B: "Descríbemelo. ¿Cómo es? ¿Tiene funda o algo especial?", C: "Para empezar, ¿cómo es? Lo que lo distingue de los otros cien millones." },
            reply: { A: "«Es negro. Tiene la pantalla rota y un gato en la funda.»", B: "«Negro, con la pantalla rota y una funda con un gato astronauta. Inconfundible.»", C: "«Negro, pantalla rota en diagonal y una funda con un gato astronauta. Muy discreto, como yo.»" },
            mood: "neutral", next: "describir",
          },
          {
            id: "llamar",
            say: { A: "¿Quieres llamar a tu número con mi teléfono?", B: "¿Y si llamamos a tu número desde mi teléfono? A lo mejor alguien contesta.", C: "Lo más básico primero: ¿probamos a llamarte? Igual alguien honrado contesta." },
            reply: { A: "Lucas dice que sí. «¡Buena idea! Es el 555 2040.»", B: "«¡Claro! ¿Cómo no lo pensé? Es el 555 2040.»", C: "Lucas se golpea la frente. «Obvio. El 555 2040. Si contesta un ladrón, sé amable.»" },
            mood: "surprised", next: "llamada",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y un papel para tomar nota.", C: "Sacas el lápiz con aire de detective." },
            say: { A: "Vamos a escribir cómo es tu teléfono.", B: "Te ayudo a escribir la descripción. Así la denuncia es más fácil.", C: "Hagamos una ficha: descripción, últimos lugares, sospechosos. Lo de los sospechosos es broma." },
            reply: { A: "Lucas sonríe. «Bien. Es negro y tiene un gato.»", B: "Lucas se acerca al papel. «Bueno. Escribe: negro, pantalla rota, funda con un gato astronauta.»", C: "«Sospechoso principal: yo mismo», dice Lucas. «Bueno, apunta: negro, pantalla rota, gato astronauta.»" },
            mood: "smile", next: "describir",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Sacas tu libro para buscar un papel dentro.", C: "Abres tu libro buscando el marcapáginas, que es en realidad un ticket de autobús." },
            say: { A: "Mira, un boleto de autobús. ¿Tomaste el autobús?", B: "Mira, uso un boleto de autobús como marcapáginas. ¿Tú fuiste en autobús?", C: "Mira, mi marcapáginas es un boleto de autobús. ¿Te dice algo esto?" },
            reply: { A: "Lucas abre los ojos. «¡Sí! Fui en el autobús 12.»", B: "«¡El autobús! Sí, el 12. Iba mirando videos en el teléfono.»", C: "Lucas se queda quieto. «El 12. Iba viendo videos. Después de eso… niebla total.»" },
            mood: "surprised", next: "pasos",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Desconfías y sacas el gas pimienta.", C: "Por si es un truco para robarte, sacas el gas pimienta." },
            say: { A: "No te acerques. ¿Quieres mi teléfono?", B: "No te acerques mucho. ¿Esto es un truco para quitarme el teléfono?", C: "Perdona, pero eso de «se me perdió el teléfono» suena a truco viejo." },
            reply: { A: "Lucas levanta las manos. «¡No! ¡Estamos en la comisaría!»", B: "Lucas da un salto atrás. «¿Un truco? ¡Estoy en la puerta de la comisaría! Sería el ladrón más tonto del mundo.»", C: "«¿Robar en la puerta de la comisaría?», dice Lucas, con las manos arriba. «Sería el peor plan de la historia.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Lucas ve tu granada.", B: "Al buscar tu teléfono, sacas la granada.", C: "Buscas tu teléfono para prestárselo y sacas, sin querer, la granada." },
            say: { A: "Perdón, no. Este no es mi teléfono.", B: "Uy, perdón, esto no es el teléfono.", C: "Ups. Esto tiene menos batería y más problemas." },
            reply: { A: "Lucas grita: «¡Una granada! ¡Delante de la comisaría!»", B: "Lucas se queda blanco. «¿Una granada? ¿Aquí? ¿En la puerta de la comisaría?»", C: "«Vaya», susurra Lucas. «Vine a denunciar un teléfono y voy a terminar de testigo.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Lucas ve tu pistola.", B: "Lucas ve la pistola en tu cinturón.", C: "Al levantar el brazo, la pistola queda a la vista de Lucas." },
            say: { A: "Hola. ¿Qué te pasa?", B: "Hola, ¿qué te pasa? Pareces preocupado.", C: "¿Todo bien? Tienes cara de haber perdido algo importante." },
            reply: { A: "Lucas mira la pistola. «Eh… Nada. ¡No me pasa nada!»", B: "Lucas retrocede hacia la puerta. «Nada, nada. Ya no tengo teléfono, ¿eh? ¡No tengo nada!»", C: "«Lo único que tenía ya lo perdieron por mí», dice Lucas, pegado a la pared. «No queda nada que robar.»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo. La mochila de Lucas no abre.", B: "El cierre de la mochila de Lucas está trabado. Sacas el cuchillo para abrirlo.", C: "La cremallera de la mochila de Lucas está atascada. Sacas el cuchillo con cuidado." },
            say: { A: "¿Abro tu mochila? A lo mejor está ahí.", B: "¿Quieres que intente abrir el cierre? A lo mejor está dentro.", C: "¿Me dejas? Con la punta se destraba. Igual el teléfono está ahí, riéndose de ti." },
            reply: { A: "Lucas duda. «Bueno, con cuidado.» No está ahí.", B: "Lucas se pone tenso, pero acepta. Abres el cierre: solo hay un cargador. «Pues no está.»", C: "Lucas aguanta la respiración. El cierre se abre: un cargador, un chicle y cero teléfonos. «Muy útil el cargador, sí.»" },
            mood: "sad", next: "describir",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Tranquilo. Es solo un teléfono. Lo vamos a encontrar.", B: "Tranquilo, respira. Seguro que tiene solución. ¿Qué es lo que más te preocupa?", C: "Respira. Los teléfonos se reemplazan. ¿Qué es lo que de verdad te tiene así?" },
            reply: { A: "Lucas sonríe. «Hoy conocí a una chica. Su número está en el teléfono.»", B: "Lucas se sonroja. «Es que hoy conocí a alguien en el autobús. Su número está ahí y en ningún otro sitio.»", C: "Lucas se ríe, avergonzado. «Me da igual el teléfono. Hoy alguien me dio su número en el autobús. Y no lo tengo apuntado en ningún otro lado.»" },
            mood: "love", next: "pasos",
          },
        },
      },
      pasos: {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas piensa. «Bar de tacos, autobús 12 y la farmacia. ¿Dónde lo dejé?»",
          B: "Lucas repasa la noche. «En el bar lo tenía, en el autobús también… y en la farmacia pagué con dinero, así que no sé.»",
          C: "Lucas se concentra. «En el bar lo tenía. En el autobús, seguro. En la farmacia… ahí empieza el misterio.»",
        },
        options: [
          {
            id: "farmacia",
            say: { A: "Vamos a la farmacia. Está aquí al lado.", B: "La farmacia está aquí al lado. ¿Por qué no preguntamos primero ahí?", C: "La farmacia queda a veinte pasos. Antes de burocracias, preguntemos allí." },
            reply: { A: "Lucas dice que sí. «¡Vamos!»", B: "«Tienes razón. Si alguien lo encontró, a lo mejor lo dejó ahí.»", C: "«Primero la vía rápida», dice Lucas. «Me gusta cómo piensas.»" },
            mood: "smile", end: "farmacia",
          },
          {
            id: "denuncia",
            say: { A: "Es mejor hacer una denuncia aquí. Te acompaño.", B: "Yo haría la denuncia ahora, por si alguien lo usa. Te acompaño adentro.", C: "Ya que estamos en la puerta, haz la denuncia. Te acompaño y te ayudo con los detalles." },
            reply: { A: "Lucas respira. «Bueno. Vamos adentro.»", B: "Lucas asiente. «Sí, mejor. Y si lo encuentran, por lo menos me llaman… a ningún teléfono.»", C: "«Buena idea», dice Lucas. «Aunque me van a llamar a un teléfono que no tengo. Detalles.»" },
            mood: "neutral", end: "denuncia",
          },
          {
            id: "llamar2",
            say: { A: "¿Y si llamamos a tu número?", B: "Antes de todo eso, ¿por qué no llamamos a tu número?", C: "Una idea revolucionaria: llamar a tu número." },
            reply: { A: "Lucas dice: «¡Sí! Es el 555 2040.»", B: "«¡Obvio! ¿Cómo no lo pensé? Marca el 555 2040.»", C: "Lucas te mira, ofendido por no haberlo pensado él. «El 555 2040. Marca.»" },
            mood: "surprised", next: "llamada",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tranquilo. Tienes una buena noche igual. Llamamos.", B: "Oye, pase lo que pase, conociste a alguien hoy. Vamos a llamar a tu número.", C: "Mira el lado bueno: tienes una historia para contarle a esa persona. Pero antes, llamemos." },
            reply: { A: "Lucas se ríe. «Es verdad. Bueno, ¡llama!»", B: "Lucas sonríe de oreja a oreja. «Tienes razón. Va, marca el 555 2040.»", C: "«Una historia, sí», dice Lucas, más animado. «Que tenga final feliz, por favor. Marca el 555 2040.»" },
            mood: "love", next: "llamada",
          },
        },
      },
      describir: {
        who: "lucas", mood: "neutral",
        line: {
          A: "Lucas describe su teléfono. «Es negro, con la pantalla rota. Y la funda tiene un gato astronauta.»",
          B: "«Negro, pantalla rota y una funda con un gato astronauta», repite Lucas. «Si alguien lo ve, lo reconoce seguro.»",
          C: "«Un gato astronauta», insiste Lucas. «Cualquiera que lo encuentre sabrá que el dueño tiene un gusto… especial.»",
        },
        options: [
          {
            id: "denuncia2",
            say: { A: "Con esa descripción, puedes hacer la denuncia.", B: "Con esa descripción, la denuncia va a ser fácil. Entremos.", C: "Con un gato astronauta, la policía lo tiene fácil. Entremos a hacer la denuncia." },
            reply: { A: "«Bueno. Vamos adentro.»", B: "«Sí, entremos. Por lo menos que conste en algún sitio.»", C: "«Ojalá haya un agente amante de los gatos», dice Lucas, empujando la puerta." },
            mood: "neutral", end: "denuncia",
          },
          {
            id: "llamar3",
            say: { A: "Primero llamamos a tu número, ¿sí?", B: "Antes de entrar, probemos a llamar a tu número.", C: "Antes de la burocracia, la tecnología: te llamo." },
            reply: { A: "«¡Sí! El 555 2040.»", B: "«¡Buena idea! Marca el 555 2040.»", C: "«Viva la tecnología», dice Lucas. «El 555 2040.»" },
            mood: "surprised", next: "llamada",
          },
          {
            id: "gracioso",
            say: { A: "¿Un gato astronauta? ¡Qué funda tan bonita!", B: "¿Un gato astronauta? Bueno, por lo menos es fácil de encontrar.", C: "Con esa funda, quien lo encuentre te lo devuelve por pura curiosidad." },
            reply: { A: "Lucas se ríe. «¡Gracias! Es mi favorita. ¿Llamamos a mi número?»", B: "Lucas se ríe. «Me la regaló mi abuela. Oye, ¿y si llamamos a mi número?»", C: "«Es arte», dice Lucas, digno. «Oye, ¿y si me llamas? Igual el gato contesta.»" },
            mood: "smile", next: "llamada",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tu funda es muy bonita. Es como tú: diferente.", B: "Me encanta tu funda. Seguro que tú eres igual de original.", C: "Alguien con una funda así no puede ser mala persona. El universo te lo va a devolver." },
            reply: { A: "Lucas se pone rojo. «Gracias. Me la regaló mi abuela. ¿Llamamos?»", B: "Lucas sonríe. «Me la hizo mi abuela con una foto de su gato. Por eso me importa. ¿Llamamos?»", C: "«Mi abuela la hizo con la foto de su gato», confiesa Lucas. «Así que, universo, devuélvemelo. Llamemos.»" },
            mood: "love", next: "llamada",
          },
        },
      },
      llamada: {
        who: "lucas", mood: "surprised",
        line: {
          A: "Llamas al número de Lucas. Algo suena… muy cerca. Es la chaqueta de Lucas.",
          B: "Marcas el número. Se oye una música… muy cerca. Lucas se queda quieto: la música sale de su propia chaqueta.",
          C: "Marcas. Suena una canción pop, cerquísima. Lucas mira su chaqueta con incredulidad: el sonido viene del forro.",
        },
        options: [
          {
            id: "forro",
            say: { A: "¡Lucas! ¡Está en tu chaqueta!", B: "¡Lucas, el teléfono está en tu chaqueta! Mira, hay un agujero en el bolsillo.", C: "Lucas, te presento al ladrón: el agujero de tu bolsillo." },
            reply: { A: "Lucas busca y lo saca. «¡No puede ser! ¡Aquí está!»", B: "Lucas mete la mano por el agujero y saca el teléfono del forro. «¡No lo puedo creer!»", C: "Lucas rescata el teléfono del forro como quien saca un conejo de un sombrero. «Caso cerrado. Qué vergüenza.»" },
            mood: "surprised", end: "forro",
          },
          {
            id: "reir",
            say: { A: "¡Ja, ja! Lucas, el teléfono te quiere mucho.", B: "¡No puede ser! Tu teléfono no se fue a ningún lado: te estaba abrazando.", C: "Pues el teléfono nunca se fue. Llevas toda la noche denunciándote a ti mismo." },
            reply: { A: "Lucas se ríe mucho y saca el teléfono. ¡Baila de alegría!", B: "Lucas saca el teléfono del forro y se pone a bailar en la acera.", C: "Lucas saca el teléfono y, sin ningún pudor, se pone a bailar la canción del tono de llamada." },
            mood: "smile", end: "baila",
          },
          {
            id: "serio",
            say: { A: "Bueno, ahora no necesitas la denuncia.", B: "Bueno, problema resuelto. Ya no hace falta la denuncia, ¿no?", C: "Me temo que la denuncia se ha quedado sin caso." },
            reply: { A: "Lucas saca el teléfono. «¡Uf! Gracias. Me salvaste la noche.»", B: "Lucas saca el teléfono del forro, aliviado. «Me salvaste la noche. Y la vergüenza delante de la policía.»", C: "«Y yo sin dignidad», dice Lucas, sacando el teléfono. «Pero con teléfono, que es lo importante.»" },
            mood: "smile", end: "forro",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "¡Qué bien! Ahora puedes escribirle a la chica.", B: "¡Ahora ya puedes escribirle a la persona del autobús!", C: "Bueno, ya no hay excusa: escríbele a la persona del autobús." },
            reply: { A: "Lucas te abraza. «¡Gracias! ¡Le escribo ahora mismo!»", B: "Lucas te da un abrazo enorme. «¡Le escribo ya! Le voy a contar que me ayudó un desconocido.»", C: "Lucas te abraza con fuerza. «Le escribo ya. Y le cuento esto. Si sale bien, eres el padrino de algo.»" },
            mood: "love", end: "abrazo",
          },
        },
      },
      calmar: {
        who: "lucas", mood: "scared",
        line: {
          A: "Lucas tiene miedo. Mira la puerta de la comisaría.",
          B: "Lucas está pegado a la puerta de la comisaría, con una mano en el picaporte.",
          C: "Lucas calcula si le da tiempo a entrar a la comisaría antes de que tú hagas algo raro.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Solo quiero ayudarte.", B: "Perdona, lo guardo. Fue una tontería. Solo quería ayudarte.", C: "Perdona, pésima entrada. Lo guardo y empezamos de nuevo, ¿sí?" },
            reply: { A: "Lucas respira. «Bueno… Fue un susto.»", B: "Lucas respira hondo. «Bueno. Qué susto. Bueno, ayúdame a recordar dónde estuve.»", C: "«Empezar de nuevo, perfecto», dice Lucas, aún tenso. «Ayúdame a recordar mi noche.»" },
            mood: "worried", next: "pasos",
          },
          {
            id: "explicar",
            say: { A: "No es de verdad. Es un juguete.", B: "No es de verdad, en serio. Es un juguete de mi sobrino.", C: "Te juro que es de juguete. Mi sobrino me lo dejó en el bolsillo." },
            reply: { A: "Lucas no te cree. Abre la puerta y llama a un policía.", B: "Lucas no se arriesga. Abre la puerta y grita: «¡Agente! ¡Aquí afuera!»", C: "«Que lo compruebe un experto», dice Lucas, y abre la puerta de la comisaría. «¡Agente!»" },
            mood: "scared", end: "policia",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy. Suerte con el teléfono.", C: "Te dejo tranquilo. Ojalá aparezca el teléfono." },
            reply: { A: "Lucas no dice nada. Entra en la comisaría.", B: "Lucas asiente sin hablar y entra rápido en la comisaría.", C: "Lucas asiente, muy serio, y desaparece dentro de la comisaría." },
            mood: "worried", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón por el susto. Soy buena persona. ¿Cómo es tu teléfono?", B: "Perdona el susto, de verdad. Quiero ayudarte. ¿Cómo es tu teléfono?", C: "Perdón, empecé fatal. Déjame compensarlo: ¿cómo es ese teléfono?" },
            reply: { A: "Lucas sonríe un poco. «Bueno… Es negro, con un gato.»", B: "Lucas se relaja. «Bueno, tienes cara de buena gente. Es negro, con un gato en la funda.»", C: "Lucas suelta una risa nerviosa. «Me caes bien, no sé por qué. Es negro y tiene un gato astronauta.»" },
            mood: "love", next: "describir",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "lucas", mood: "scared",
        line: {
          A: "Lucas ve tu cuchillo. Da un paso atrás y saca una navaja de la mochila. «¡Eh! ¡Yo también tengo! ¡No te acerques!» Están los dos frente a la comisaría.",
          B: "Lucas ve el cuchillo en tu mano y, en un segundo, saca una navaja de la mochila. «¡Quieto! ¡Yo también tengo!» Los dos, con el filo fuera, a tres metros de la puerta de la comisaría.",
          C: "Lucas ve tu cuchillo y responde con una navaja que saca de la mochila sin pensarlo. «¡Ni un paso!» Dos personas con un filo en la mano, frente a la comisaría. La noche más tonta de la ciudad.",
        },
        options: [
          {
            id: "bajar",
            say: { A: "Tranquilo. Lo bajo. Baja tú también.", B: "Tranquilo. Yo bajo el mío si tú bajas el tuyo.", C: "Calma. Bajo el mío a la vez que tú el tuyo. A la de tres." },
            reply: { A: "Los dos bajan el cuchillo despacio. Lucas respira. «Qué susto.»", B: "Bajan los dos a la vez, muy despacio. Lucas suelta el aire. «Qué susto. ¿Qué haces con eso?»", C: "Bajan los dos a la vez, como en un duelo mal ensayado. Lucas respira. «¿Se puede saber qué haces con eso?»" },
            mood: "worried", next: "cuchillo-tregua",
          },
          {
            id: "reir",
            say: { A: "¿Los dos con cuchillo en la puerta de la policía? Qué tontos.", B: "¿En serio? ¿Dos personas con cuchillo en la puerta de la comisaría? Somos muy tontos.", C: "Míranos: dos cuchillos y una comisaría a tres metros. Si nos ven, nos dan un premio a la estupidez." },
            reply: { A: "Lucas mira la puerta y se ríe. Guarda la navaja. «Es verdad.»", B: "Lucas mira la puerta, luego su navaja, y se ríe. La guarda. «Tienes razón. Qué ridículo.»", C: "Lucas mira la puerta de la comisaría y se le escapa la risa. Guarda la navaja. «Retirada con dignidad, por favor.»" },
            mood: "smile", next: "cuchillo-tregua",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy. Guarda eso.", B: "Mejor me voy. Guarda eso, por favor.", C: "Me retiro. Guarda esa navaja antes de que salga alguien." },
            reply: { A: "Te vas rápido. Lucas entra en la comisaría con la navaja en la mano.", B: "Te alejas a paso rápido. Lucas entra en la comisaría, con la navaja todavía en la mano.", C: "Te alejas sin correr, pero casi. Lucas entra en la comisaría con la navaja en la mano, lo cual no es buena idea." },
            mood: "scared", end: "cuchillo-huida",
          },
        ],
      },
      "cuchillo-tregua": {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas guarda la navaja. «Perdón. Es que me robaron el teléfono. O se me perdió. Y vi tu cuchillo y…»",
          B: "Lucas guarda la navaja en la mochila. «Perdona. Creo que me robaron el teléfono, o se me perdió, no sé. Y al ver tu cuchillo pensé que querían el resto.»",
          C: "Lucas guarda la navaja. «Perdona. Llevo una hora pensando que me robaron el teléfono, y al ver tu cuchillo pensé que volvían a por el resto.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Te ayudo. Llamamos a tu número con mi teléfono.", B: "Te ayudo, sin cuchillos. Llamamos a tu número desde mi teléfono.", C: "Pues ayudémonos, ya sin filos. Llamamos a tu número desde mi teléfono." },
            reply: { A: "Lucas sonríe un poco. «Bueno. Es el 555 2040.»", B: "Lucas sonríe, todavía nervioso. «Vale. Es el 555 2040. Sin cuchillos, ¿eh?»", C: "Lucas asiente, aliviado. «555 2040. Y los cuchillos, guardados los dos.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "mochila",
            say: { A: "Tu mochila no abre. Con el cuchillo la abro.", B: "El cierre de tu mochila está trabado. Con el cuchillo lo abro en un segundo.", C: "Tu mochila tiene el cierre trabado. Con el cuchillo lo abro, con permiso." },
            reply: { A: "Lucas duda y acepta. Abres el forro… ¡y ahí está el teléfono!", B: "Lucas duda, pero acepta. Cortas un hilo del forro y… el teléfono cae al suelo. «¡No puede ser!»", C: "Lucas acepta con cara de duda. Abres el forro con la punta y el teléfono cae al suelo, intacto. «Estaba dentro de la mochila. Todo el tiempo.»" },
            mood: "surprised", end: "cuchillo-mochila",
          },
          {
            id: "agente",
            say: { A: "Un policía nos vio. Mira la puerta.", B: "Creo que un policía nos vio con los cuchillos. Mira la puerta.", C: "Me temo que un agente vio nuestro pequeño duelo. Mira la puerta." },
            reply: { A: "Un agente sale. «Los dos. Los cuchillos. Ahora.»", B: "Un agente sale de la comisaría. «Ustedes dos. Los cuchillos, encima de la mesa. Ahora.»", C: "Un agente sale con cara de haber visto todo por la ventana. «Ustedes dos. Los cuchillos, ya. Y después hablamos del teléfono.»" },
            mood: "scared", end: "cuchillo-agente",
          },
        ],
      },
      "pistola-inicio": {
        who: "lucas", mood: "terror",
        line: {
          A: "Lucas ve tu pistola y levanta las manos. Se pega a la puerta de la comisaría. «¡No! ¡No tengo nada! ¡Ya me robaron el teléfono!»",
          B: "Lucas ve la pistola en tu cinturón y levanta las manos despacio, pegado a la puerta de la comisaría. «No, por favor. No tengo nada. ¡Ya no tengo ni teléfono!»",
          C: "Lucas ve la pistola y las manos se le van arriba solas. Se pega a la puerta de la comisaría como si fuera a atravesarla. «Lo único que tenía ya me lo quitaron. No queda nada.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Baja las manos. No es para ti. La guardo.", B: "Baja las manos, no es para ti. Mira, la guardo.", C: "Baja las manos. No te estoy apuntando. La guardo y hablamos." },
            reply: { A: "Lucas baja las manos despacio. «¿Por qué llevas eso?»", B: "Lucas baja las manos centímetro a centímetro. «¿Y por qué llevas eso? ¿Delante de la comisaría?»", C: "Lucas baja las manos sin despegarse de la puerta. «¿Por qué llevas un arma a la puerta de una comisaría? ¿Es una apuesta?»" },
            mood: "scared", next: "pistola-calma",
          },
          {
            id: "ignorar",
            say: { A: "Tranquilo. ¿Qué te pasa? ¿Perdiste algo?", B: "Tranquilo, hombre. ¿Qué te pasa? ¿Perdiste algo?", C: "Tranquilo. Solo pregunto: ¿qué te pasa? Tienes cara de haber perdido algo." },
            reply: { A: "Lucas golpea la puerta. «¡Agente! ¡Hay alguien con pistola!»", B: "Lucas golpea la puerta de la comisaría sin bajar las manos. «¡Agente! ¡Hay alguien armado aquí afuera!»", C: "Lucas golpea la puerta con el codo, las manos todavía arriba. «¡Agente! ¡Hay una persona armada preguntándome cosas!»" },
            mood: "terror", end: "pistola-agente",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdona el susto. Me voy.", C: "Perdona. Me voy antes de empeorarlo." },
            reply: { A: "Lucas no se mueve hasta que estás lejos. Después entra en la comisaría.", B: "Lucas no baja las manos hasta que desapareces. Luego entra en la comisaría, temblando.", C: "Lucas mantiene las manos arriba hasta que doblas la esquina. Luego entra en la comisaría, con una denuncia más que hacer." },
            mood: "scared", end: "pistola-solo",
          },
        ],
      },
      "pistola-calma": {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas respira. «Bueno. Se me perdió el teléfono. Y tú tienes una pistola. Esta noche es muy rara.»",
          B: "Lucas respira hondo, sin despegarse de la puerta. «Vale. A mí se me perdió el teléfono y tú llevas una pistola. Es la noche más rara de mi vida.»",
          C: "Lucas respira, sin alejarse de la puerta. «Resumen de la noche: yo sin teléfono y tú con pistola, frente a una comisaría. Nadie me va a creer.»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Te ayudo. Llamo a tu número con mi teléfono.", B: "Te ayudo con lo del teléfono. Llamo a tu número desde el mío.", C: "Déjame compensar el susto: llamo a tu número desde mi teléfono." },
            reply: { A: "Lucas duda, pero dice: «Bueno. 555 2040.»", B: "Lucas lo piensa un segundo. «Bueno… 555 2040. Pero la pistola, quieta.»", C: "Lucas lo piensa. «555 2040. Y la pistola donde está, por favor.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "bolsillos",
            say: { A: "Busca otra vez en la chaqueta. Despacio.", B: "Busca otra vez en la chaqueta. Despacio, sin nervios.", C: "Revisa la chaqueta otra vez. Despacio: el miedo no ayuda a buscar." },
            reply: { A: "Lucas busca, nervioso. Toca algo en el forro. «¡Está aquí! ¡En el forro!»", B: "Lucas se palpa la chaqueta con manos temblorosas y nota algo duro en el forro. «¡Aquí! ¡Está en el forro!»", C: "Lucas se registra la chaqueta con las manos aún temblando y nota un bulto en el forro. «Aquí. Estaba en el forro. Casi me da algo.»" },
            mood: "surprised", end: "pistola-forro",
          },
          {
            id: "agente",
            say: { A: "Mejor entramos. La policía te ayuda.", B: "Mejor entramos. La policía te ayuda con la denuncia.", C: "Mejor entramos y lo dejas en manos de la policía." },
            reply: { A: "Lucas abre la puerta. El agente ve tu pistola primero.", B: "Lucas abre la puerta. El agente de guardia ve la pistola antes que a ti.", C: "Lucas abre la puerta. El agente de guardia ve tu pistola antes de verte la cara." },
            mood: "scared", end: "pistola-agente",
          },
        ],
      },
      "granada-inicio": {
        who: "lucas", mood: "terror",
        line: {
          A: "Lucas ve tu granada y corre dentro de la comisaría. Después asoma la cabeza por la puerta. «¿Eso es una granada? ¡Aquí!»",
          B: "Lucas ve la granada y entra corriendo en la comisaría. Un segundo después asoma la cabeza por la puerta. «¿Es una granada? ¿En la puerta de la comisaría? ¿Estás loco?»",
          C: "Lucas ve la granada y desaparece dentro de la comisaría. Al momento asoma la cabeza por la puerta, como un vecino cotilla. «¿Una granada? ¿Aquí? ¿Es un reto o una despedida?»",
        },
        options: [
          {
            id: "juguete",
            say: { A: "Es de juguete. Mira, es de plástico.", B: "Es de juguete, en serio. Es de plástico. Mira.", C: "Es de utilería. Plástico puro. Mira, la golpeo contra la pared." },
            reply: { A: "Lucas sale despacio. «¿De plástico? Casi me muero.»", B: "Lucas sale despacio, sin convencerse del todo. «¿De plástico? Pues parece muy real.»", C: "Lucas sale despacio. «¿Plástico? Tiene un acabado muy convincente. Casi me entrego a la policía por puro reflejo.»" },
            mood: "scared", next: "granada-puerta",
          },
          {
            id: "suelo",
            say: { A: "¡La dejo en el suelo! ¡Mira!", B: "¡Tranquilo! ¡La dejo en el suelo!", C: "¡La dejo en el suelo, mira, ya está!" },
            reply: { A: "Salen tres policías. «¡Atrás! ¡Todos atrás!»", B: "De la comisaría salen tres agentes. «¡Atrás! ¡Evacuen la calle!»", C: "Tres agentes salen en tromba. «¡Todo el mundo atrás! ¡Despejen la calle!»" },
            mood: "terror", end: "granada-evacuan",
          },
          {
            id: "correr",
            say: { A: "Perdón. ¡Me voy!", B: "Perdona, perdona. ¡Me voy!", C: "Esto fue un error. ¡Me voy!" },
            reply: { A: "Corres con la granada. Lucas grita: «¡Agente!»", B: "Sales corriendo con la granada en la mano. Detrás, Lucas grita: «¡Agente! ¡Se escapa!»", C: "Corres con la granada bajo el brazo. Lucas, desde la puerta, grita tu descripción a un agente." },
            mood: "terror", end: "granada-corre",
          },
        ],
      },
      "granada-puerta": {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas mira la granada. «Bueno. Se me perdió el teléfono. Y tú tienes una granada. ¿Me ayudas igual?»",
          B: "Lucas no quita los ojos de la granada. «Vale. A mí se me perdió el teléfono y tú paseas con una granada de plástico. ¿Me ayudas de todas formas?»",
          C: "Lucas sigue vigilando la granada de reojo. «Bien. Yo sin teléfono y tú con una granada de atrezo. ¿Me ayudas o me entrego?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Te ayudo. Llamo a tu número.", B: "Claro que te ayudo. Llamo a tu número desde mi teléfono.", C: "Te ayudo, por supuesto. Llamo a tu número desde el mío." },
            reply: { A: "Lucas respira. «Gracias. 555 2040. Y guarda eso.»", B: "Lucas respira. «Gracias. 555 2040. Y guarda eso en el fondo de la mochila.»", C: "Lucas asiente. «555 2040. Y la granada, al fondo de la mochila, por favor.»" },
            mood: "worried", next: "llamada",
          },
          {
            id: "broma",
            say: { A: "Es un llavero. ¿Tú también pierdes llaves?", B: "Es un llavero. Así nunca pierdo las llaves. ¿Tú pierdes todo?", C: "Es un llavero: con esto nadie pierde las llaves. Tú deberías tener uno para el teléfono." },
            reply: { A: "Lucas se ríe mucho. Salta. Y algo suena en su chaqueta: ¡el teléfono!", B: "Lucas se ríe tanto que da un salto. Algo vibra en su chaqueta. «¡El teléfono! ¡Estaba aquí!»", C: "Lucas se ríe a carcajadas y, al moverse, algo vibra en el forro de su chaqueta. «No. No me digas. Estaba aquí.»" },
            mood: "smile", end: "granada-baila",
          },
          {
            id: "agente",
            say: { A: "Entremos. Explico lo de la granada al policía.", B: "Entremos. Le explico lo de la granada al agente y tú haces la denuncia.", C: "Entremos: yo explico la granada, tú denuncias el teléfono. Dos trámites." },
            reply: { A: "El agente ve la granada. «¡Todos afuera! ¡Evacuación!»", B: "El agente ve la granada y no espera explicaciones. «¡Todos afuera! ¡Evacuen!»", C: "El agente ve la granada y tu explicación llega tarde. «¡Todos fuera! ¡Evacuación!»" },
            mood: "scared", end: "granada-evacuan",
          },
        ],
      },
      "gas-inicio": {
        who: "lucas", mood: "scared",
        line: {
          A: "Lucas ve tu gas pimienta. Levanta las manos. «¡Eh, eh! ¡Estamos en la comisaría! ¡Solo se me perdió el teléfono!»",
          B: "Lucas ve el gas pimienta en tu mano y levanta las manos. «¡Eh! ¡Que estamos en la puerta de la comisaría! Solo se me perdió el teléfono, no soy un ladrón.»",
          C: "Lucas ve el gas pimienta y levanta las manos con fastidio. «¿En serio? ¿Gas pimienta en la puerta de una comisaría? Solo se me perdió el teléfono, no te quiero robar.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. ¿Qué te pasa?", B: "Perdona, me asustaste. Lo guardo. ¿Qué te pasa?", C: "Perdona, reflejo nocturno. Lo guardo. ¿Qué te pasa?" },
            reply: { A: "Lucas baja las manos. «Se me perdió el teléfono. Iba a denunciarlo.»", B: "Lucas baja las manos. «Se me perdió el teléfono. Iba a entrar a denunciarlo, pero no sé ni por dónde empezar.»", C: "Lucas baja las manos. «Se me perdió el teléfono. Iba a denunciarlo, pero sin teléfono no sé ni la hora.»" },
            mood: "worried", next: "gas-calma",
          },
          {
            id: "mantener",
            say: { A: "Quédate ahí. ¿Qué quieres?", B: "No te muevas. Dime qué quieres desde ahí.", C: "Quédate donde estás y habla. ¿Qué quieres?" },
            reply: { A: "Lucas señala la puerta. «¡Nada! Solo iba a entrar. Se me perdió el teléfono.»", B: "Lucas señala la puerta con la barbilla. «¡Nada! Solo iba a entrar a denunciar un teléfono perdido.»", C: "Lucas señala la puerta sin bajar las manos. «Nada. Iba a entrar a denunciar un teléfono. Lo más peligroso que llevo es un chicle.»" },
            mood: "worried", next: "gas-calma",
          },
          {
            id: "rociar",
            act: { A: "Lucas se mueve. Aprietas sin querer.", B: "Lucas hace un gesto brusco y aprietas sin querer.", C: "Lucas se mueve de golpe y el dedo se te va." },
            say: { A: "¡Ay, no! ¡Perdón!", B: "¡No! ¡Perdón, perdón!", C: "¡No! ¡Perdona, se me fue el dedo!" },
            reply: { A: "Lucas tose y cae al suelo. Un policía sale de la comisaría.", B: "Lucas tose, se tapa los ojos y cae de rodillas. Un policía sale corriendo de la comisaría.", C: "Lucas cae de rodillas tosiendo, con los ojos cerrados. La puerta de la comisaría se abre de golpe." },
            mood: "terror", end: "gas-rociado",
          },
        ],
      },
      "gas-calma": {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas respira. «Qué susto. Bueno. ¿Me ayudas con el teléfono? Sin gas, por favor.»",
          B: "Lucas respira hondo. «Qué susto. Bueno, ¿me ayudas con lo del teléfono? Sin gas, si puede ser.»",
          C: "Lucas respira. «Bien. Ahora que nadie va a rociar a nadie, ¿me ayudas con el teléfono?»",
        },
        options: [
          {
            id: "llamar",
            say: { A: "Sí. Llamamos a tu número con mi teléfono.", B: "Claro. Llamamos a tu número desde mi teléfono.", C: "Por supuesto. Llamamos a tu número desde el mío." },
            reply: { A: "Lucas sonríe. «Buena idea. 555 2040.»", B: "Lucas sonríe por primera vez. «Buena idea. 555 2040.»", C: "Lucas sonríe, aliviado. «555 2040. Y gracias por no rociarme.»" },
            mood: "smile", next: "llamada",
          },
          {
            id: "regalo",
            say: { A: "Toma el gas. Tú lo necesitas más. Te robaron.", B: "Quédate con el gas. Si te robaron, lo necesitas más que yo.", C: "Quédate con el gas pimienta. Entre los dos, el que acaba de perder algo eres tú." },
            reply: { A: "Lucas lo mira. «¿En serio? Gracias. Qué noche.»", B: "Lucas lo guarda, sin entender nada. «¿En serio? Gracias. Primero casi me rocías y luego me lo regalas.»", C: "Lucas lo acepta, perplejo. «Primero me apuntas con él y luego me lo regalas. Esta ciudad es rarísima.»" },
            mood: "smile", end: "gas-regalo",
          },
          {
            id: "denuncia",
            say: { A: "Entra y haz la denuncia. Te acompaño.", B: "Entra y haz la denuncia. Te acompaño, sin gas.", C: "Entra a hacer la denuncia. Te acompaño, con el gas bien guardado." },
            reply: { A: "Lucas asiente. «Vamos.»", B: "Lucas asiente. «Vamos. Y el gas, en el bolsillo.»", C: "Lucas asiente. «Vamos. Pero el gas no entra contigo a la comisaría, por favor.»" },
            mood: "neutral", end: "denuncia",
          },
        ],
      },
      "lapiz-inicio": {
        who: "lucas", mood: "surprised",
        line: {
          A: "Lucas ve tu lápiz y abre los ojos. «¡Un lápiz! ¡Perfecto! Tengo que escribir un número antes de olvidarlo. ¿Tienes papel?»",
          B: "Lucas ve tu lápiz y casi te lo quita de la mano. «¡Un lápiz! Justo lo que necesito. Hay un número que tengo que apuntar antes de que se me borre. ¿Tienes papel?»",
          C: "Lucas ve tu lápiz como quien ve agua en el desierto. «¡Un lápiz! Tengo un número en la cabeza que se me va a borrar en cualquier momento. ¿Papel? Lo que sea.»",
        },
        options: [
          {
            id: "ficha",
            act: { A: "Sacas un papel.", B: "Sacas un papel del bolsillo.", C: "Sacas un papel arrugado del bolsillo." },
            say: { A: "Toma. ¿Qué número es?", B: "Toma, escribe. ¿Qué número es tan importante?", C: "Aquí tienes. ¿Qué número vale tanto?" },
            reply: { A: "Lucas escribe rápido. «El de una chica del autobús. Estaba en mi teléfono. Y se me perdió el teléfono.»", B: "Lucas escribe a toda velocidad. «Es el número de una chica que conocí hoy en el autobús. Estaba en el teléfono y se me perdió el teléfono.»", C: "Lucas escribe como si se le escapara. «Una chica del autobús. Me dio su número, lo guardé en el teléfono y se me perdió el teléfono. Todo en dos horas.»" },
            mood: "smile", next: "lapiz-ficha",
          },
          {
            id: "cartel",
            say: { A: "¿Perdiste el teléfono? Hacemos un cartel: SE BUSCA.", B: "¿Perdiste el teléfono? Hagamos un cartel de SE BUSCA para la puerta de la comisaría.", C: "¿Teléfono perdido? Hagamos un cartel de SE BUSCA, con dibujo y recompensa." },
            reply: { A: "Lucas se ríe. «Sí. Negro, pantalla rota, gato astronauta.» Dibujas un gato.", B: "Lucas se ríe. «Vale: negro, pantalla rota, funda con gato astronauta.» Dibujas el gato con mucho detalle.", C: "Lucas se ríe. «Negro, pantalla rota, gato astronauta en la funda.» Tu gato astronauta queda sorprendentemente bien." },
            mood: "smile", end: "lapiz-cartel",
          },
          {
            id: "llamar",
            say: { A: "Primero llamamos a tu número. Después escribes.", B: "Primero llamamos a tu número desde mi teléfono. Después escribes lo que quieras.", C: "Antes de escribir nada: te llamo desde mi teléfono. Luego apuntas lo que haga falta." },
            reply: { A: "Lucas asiente. «Bueno. 555 2040. Pero dame el lápiz después.»", B: "Lucas asiente. «Vale, 555 2040. Pero el lápiz no se va, ¿eh?»", C: "Lucas asiente. «555 2040. Y el lápiz se queda a la vista, por favor.»" },
            mood: "worried", next: "llamada",
          },
        ],
      },
      "lapiz-ficha": {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas mira el papel. «555 2… no. 555 3… No me acuerdo. ¡Qué horror!»",
          B: "Lucas mira el papel con el lápiz en el aire. «555 2… no. 555 3… ¿o era 4? No me acuerdo. Qué horror.»",
          C: "Lucas se queda con el lápiz suspendido sobre el papel. «555 2… ¿o 3? Lo tenía hace un segundo. Esto es peor que perder el teléfono.»",
        },
        options: [
          {
            id: "calma",
            say: { A: "Cierra los ojos. Piensa en el autobús. ¿Qué dijo ella?", B: "Cierra los ojos y vuelve al autobús. ¿Qué te dijo ella mientras lo apuntabas?", C: "Cierra los ojos y reconstruye el momento: el autobús, su voz, los números." },
            reply: { A: "Lucas cierra los ojos. «555… 3420. ¡Sí! ¡3420!» Escribe rápido.", B: "Lucas cierra los ojos. «Ella dijo: “es fácil, 3420”. ¡Sí! ¡555 3420!» Lo escribe antes de olvidarlo.", C: "Lucas cierra los ojos. «Dijo: “fácil, 3420, como el año”. ¡555 3420!» Lo escribe con una fuerza que casi rompe el papel." },
            mood: "smile", end: "lapiz-numero",
          },
          {
            id: "denuncia",
            say: { A: "Escribe la descripción del teléfono. Para la denuncia.", B: "Escribe la descripción del teléfono: así la denuncia es más rápida.", C: "Apunta la descripción del teléfono. La denuncia será más rápida con todo por escrito." },
            reply: { A: "Lucas escribe: «negro, pantalla rota, gato». Entra en la comisaría.", B: "Lucas escribe: «negro, pantalla rota, funda con gato astronauta». Entra con el papel en la mano.", C: "Lucas escribe la ficha completa, gato astronauta incluido, y entra en la comisaría con el papel como un escudo." },
            mood: "neutral", end: "denuncia",
          },
          {
            id: "llamar",
            say: { A: "Llamamos a tu número. A lo mejor contesta alguien.", B: "Llamemos a tu número. A lo mejor alguien lo encontró.", C: "Llamemos a tu número: quizá lo tiene alguien honrado." },
            reply: { A: "Lucas se golpea la frente. «¡Claro! 555 2040.»", B: "Lucas se golpea la frente. «Obvio. Ese sí me lo sé: 555 2040.»", C: "Lucas se golpea la frente. «Mi número sí me lo sé: 555 2040. Es el otro el que se borra.»" },
            mood: "surprised", next: "llamada",
          },
        ],
      },
      "libro-inicio": {
        who: "lucas", mood: "laugh",
        line: {
          A: "Lucas ve tu libro y se ríe. «¿Un libro? ¿En la puerta de la comisaría a esta hora? A mí se me perdió el teléfono y tú paseas con un libro.»",
          B: "Lucas ve tu libro y se ríe sin querer. «¿Un libro? ¿A estas horas, delante de la comisaría? Yo pierdo el teléfono y tú sales a leer. Qué noche.»",
          C: "Lucas ve tu libro y suelta una carcajada nerviosa. «¿Un libro? ¿En la puerta de una comisaría, de madrugada? Uno pierde el teléfono y otro sale de paseo con literatura.»",
        },
        options: [
          {
            id: "boleto",
            act: { A: "Abres el libro: tu marcapáginas es un boleto de autobús.", B: "Abres el libro y muestras tu marcapáginas: un boleto de autobús.", C: "Abres el libro: el marcapáginas es un boleto de autobús." },
            say: { A: "Mira. ¿Tú fuiste en autobús hoy?", B: "Mira mi marcapáginas. ¿Tú tomaste el autobús esta noche?", C: "Mira mi marcapáginas. ¿Te suena? ¿Tomaste el autobús hoy?" },
            reply: { A: "Lucas abre los ojos. «¡Sí! El 12. Iba mirando videos.»", B: "Lucas se queda quieto. «¡El 12! Iba viendo videos en el teléfono…»", C: "Lucas se queda quieto. «El 12. Iba viendo videos. Y después, niebla.»" },
            mood: "surprised", next: "pasos",
          },
          {
            id: "papel",
            act: { A: "Abres el libro en una página en blanco.", B: "Abres el libro por la última página, en blanco.", C: "Abres el libro por la guarda, en blanco." },
            say: { A: "¿Necesitas escribir algo? Aquí hay espacio.", B: "Tienes cara de necesitar apuntar algo. Aquí hay una página en blanco.", C: "Tienes cara de llevar algo en la cabeza que se te va a escapar. Escríbelo aquí." },
            reply: { A: "Lucas se pone rojo. «Sí. El número de una chica del autobús. Estaba en el teléfono.»", B: "Lucas se sonroja. «Sí… el número de una chica que conocí en el autobús. Estaba en el teléfono. Solo ahí.»", C: "Lucas se sonroja hasta las orejas. «Un número. De una chica del autobús. Guardado en el teléfono y en ningún otro sitio.»" },
            mood: "smile", next: "libro-papel",
          },
          {
            id: "regalar",
            say: { A: "Toma el libro. Sin teléfono, vas a tener tiempo.", B: "Toma, te lo regalo. Sin teléfono vas a tener mucho tiempo libre.", C: "Quédatelo. Sin teléfono vas a descubrir cuánto dura una noche." },
            reply: { A: "Lucas lo toma, sorprendido. «¿En serio? Gracias. Hace años que no leo.»", B: "Lucas lo acepta, sorprendido. «¿En serio? Gracias. Hace años que no termino un libro.»", C: "Lucas lo acepta como si fuera un objeto extraterrestre. «Gracias. Hace años que no leo nada sin batería.»" },
            mood: "smile", end: "libro-regalo",
          },
        ],
      },
      "libro-papel": {
        who: "lucas", mood: "worried",
        line: {
          A: "Lucas escribe en tu libro. «555 3420. ¡Lo recuerdo! Pero ahora el número está en tu libro.»",
          B: "Lucas escribe en la última página de tu libro. «555 3420. ¡Me acuerdo! Pero ahora el número vive en tu libro.»",
          C: "Lucas escribe en la guarda de tu libro. «555 3420. Lo tengo. Lo malo es que ahora el único sitio donde existe es tu libro.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Quédate con el libro. El número y el libro.", B: "Quédate con el libro. Así tienes el número y algo que leer.", C: "Quédate con el libro: viene con número de teléfono incluido." },
            reply: { A: "Lucas abraza el libro. «¡Gracias! Es el mejor regalo de la noche.»", B: "Lucas aprieta el libro contra el pecho. «Gracias. El mejor libro que me han regalado, y no lo he leído.»", C: "Lucas abraza el libro. «No sé de qué trata, pero ya es mi favorito.»" },
            mood: "love", end: "libro-numero",
          },
          {
            id: "copiar",
            say: { A: "Copia el número en tu mano. Por si acaso.", B: "Cópialo también en la mano. Por si pierdes el libro.", C: "Cópiatelo en la mano: tienes talento para perder cosas." },
            reply: { A: "Lucas se escribe el número en la mano. «Ahora sí. Dos copias.»", B: "Lucas se escribe el número en la palma. «Dos copias. Eso ya es casi un sistema.»", C: "Lucas se escribe el número en la palma. «Libro y mano. Mi primera copia de seguridad.»" },
            mood: "smile", end: "libro-numero",
          },
          {
            id: "llamar",
            say: { A: "Y ahora llamamos a tu número. Con mi teléfono.", B: "Y ahora, llamemos a tu número desde mi teléfono.", C: "Y ahora, lo básico: te llamo desde mi teléfono." },
            reply: { A: "Lucas asiente. «Sí. 555 2040. Y el libro, cuidado.»", B: "Lucas asiente. «555 2040. Y cuida el libro, que lleva un tesoro.»", C: "Lucas asiente. «555 2040. Y ese libro ahora es un documento oficial.»" },
            mood: "worried", next: "llamada",
          },
        ],
      },
      "corazon-inicio": {
        who: "lucas", mood: "love",
        line: {
          A: "Lucas te ve y, de repente, sonríe. «Perdona… tienes algo que calma. Se me perdió el teléfono. Pero lo peor es otra cosa.»",
          B: "Lucas te mira y, sin saber por qué, deja de buscar en los bolsillos. «No sé qué tienes, pero me calmas. Se me perdió el teléfono. Y lo peor no es el teléfono.»",
          C: "Lucas te ve y los hombros se le relajan solos. «No sé qué tienes, pero es lo primero que me tranquiliza en una hora. Se me perdió el teléfono. Lo peor es lo que había dentro.»",
        },
        options: [
          {
            id: "contar",
            say: { A: "Cuéntame. ¿Qué es lo peor?", B: "Cuéntame. ¿Qué había dentro que importa tanto?", C: "Cuéntamelo. ¿Qué había en ese teléfono que pesa más que el teléfono?" },
            reply: { A: "Lucas se pone rojo. «El número de una chica. La conocí hoy en el autobús.»", B: "Lucas se sonroja. «El número de una chica. La conocí hoy en el autobús y solo está ahí.»", C: "Lucas se sonroja. «Un número. De una chica del autobús. Dos horas de conversación y un número guardado en un solo sitio.»" },
            mood: "love", next: "corazon-chica",
          },
          {
            id: "llamar",
            say: { A: "Primero lo fácil: llamamos a tu número.", B: "Primero lo fácil: llamamos a tu número desde mi teléfono.", C: "Empecemos por lo sencillo: te llamo desde mi teléfono." },
            reply: { A: "Lucas sonríe. «Contigo todo parece fácil. 555 2040.»", B: "Lucas sonríe. «Contigo hasta esto parece fácil. 555 2040.»", C: "Lucas sonríe. «Lo dices y suena fácil. 555 2040.»" },
            mood: "love", next: "llamada",
          },
          {
            id: "abrazo",
            act: { A: "Le pones una mano en el hombro.", B: "Le pones una mano en el hombro.", C: "Le apoyas una mano en el hombro." },
            say: { A: "Tranquilo. Lo que importa no se pierde.", B: "Tranquilo. Lo que de verdad importa no se pierde tan fácil.", C: "Tranquilo. Lo que importa de verdad no cabe en un teléfono." },
            reply: { A: "Lucas te abraza. Y algo suena en su chaqueta. «¡El teléfono!»", B: "Lucas te abraza de golpe. Al apretarte, algo vibra en su chaqueta. «¿Qué…? ¡El teléfono!»", C: "Lucas te abraza y, al apretar, algo vibra en el forro de su chaqueta. «No. No puede ser. ¡El teléfono!»" },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-chica": {
        who: "lucas", mood: "smitten",
        line: {
          A: "Lucas sonríe al recordar. «Se llama Inés. Se baja en la parada de la clínica. Pero sin el número, ¿cómo la encuentro?»",
          B: "Lucas sonríe como un tonto. «Se llama Inés. Se bajó en la parada de la clínica, aquí al lado. Pero sin el número no sé cómo volver a verla.»",
          C: "Lucas sonríe con cara de enamorado. «Inés. Se bajó en la parada de la clínica, a cien metros. Y yo, sin número, como en el siglo pasado.»",
        },
        options: [
          {
            id: "parada",
            say: { A: "Mañana ve a la misma parada, a la misma hora.", B: "Mañana vuelve a la misma parada, a la misma hora. Así se hacía antes.", C: "Mañana, misma parada, misma hora. Así funcionaba el amor antes de los teléfonos." },
            reply: { A: "Lucas abre los ojos. «¡Claro! ¡Como en las películas!»", B: "Lucas abre los ojos. «¡Claro! ¡Como en las películas viejas! Mañana a las ocho.»", C: "Lucas se ilumina. «Como en las películas de mi abuela. Mañana a las ocho, parada de la clínica.»" },
            mood: "love", end: "corazon-parada",
          },
          {
            id: "bolsillos",
            say: { A: "Busca otra vez. Despacio. Con calma.", B: "Busca otra vez en la chaqueta, despacio, con calma.", C: "Revisa la chaqueta una vez más. Despacio. Con la calma que ahora tienes." },
            reply: { A: "Lucas busca despacio. Toca algo en el forro. «¡Está aquí!» Te abraza.", B: "Lucas se palpa la chaqueta sin prisa y nota un bulto en el forro. «¡Está aquí!» Te abraza.", C: "Lucas se registra la chaqueta con calma y nota el bulto en el forro. «Estaba aquí. Todo el tiempo.» Te abraza." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "llamar",
            say: { A: "Llamamos a tu número. Quizá Inés contesta.", B: "Llamemos a tu número. Quién sabe, quizá contesta Inés.", C: "Llamemos a tu número. Con tu suerte, igual contesta Inés." },
            reply: { A: "Lucas se ríe. «Ojalá. 555 2040.»", B: "Lucas se ríe. «Ojalá contestara ella. 555 2040.»", C: "Lucas se ríe. «Sería la mejor noche de mi vida. 555 2040.»" },
            mood: "love", next: "llamada",
          },
        ],
      },
    },
    ends: {
      farmacia: {
        text: { A: "Vas con Lucas a la farmacia. No está ahí, pero la farmacéutica lo llama y… suena en su chaqueta.", B: "En la farmacia no hay ningún teléfono. La farmacéutica llama al número y la música sale de la chaqueta de Lucas.", C: "En la farmacia, la farmacéutica marca el número sin esperanza. La música sale de la chaqueta de Lucas; ella enciende la luz para verle bien la cara de vergüenza." },
        change: "luz", recap: "Fuiste con Lucas a la farmacia a buscar su teléfono.",
      },
      denuncia: {
        text: { A: "Lucas entra en la comisaría para hacer la denuncia. Te dice adiós.", B: "Lucas entra a hacer la denuncia. Dentro, un agente le pide que vacíe los bolsillos… y aparece el teléfono.", C: "Lucas entra a denunciar. Diez minutos después sale con el teléfono en la mano y cara de no querer hablar del tema." },
        change: "se-va", recap: "Acompañaste a Lucas a hacer una denuncia.",
      },
      forro: {
        text: { A: "Lucas tiene su teléfono. Está muy contento.", B: "Lucas guarda el teléfono en el otro bolsillo, el que no tiene agujero.", C: "Lucas guarda el teléfono en un bolsillo sin agujero y promete coser el otro. Nadie se lo cree." },
        change: "sonrie", recap: "Encontraste el teléfono de Lucas en su chaqueta.",
      },
      baila: {
        text: { A: "Lucas baila en la acera. Un policía mira y se ríe.", B: "Lucas baila en la acera. El policía de la puerta lo mira y, al final, se ríe.", C: "Lucas celebra con un baile que nadie pidió. El policía de la puerta finge no verlo, sin mucho éxito." },
        change: "baila", recap: "Ayudaste a Lucas y terminó bailando en la acera.",
      },
      abrazo: {
        text: { A: "Lucas escribe un mensaje. Después te abraza otra vez.", B: "Lucas escribe un mensaje y, al recibir respuesta, te da otro abrazo.", C: "Lucas escribe, borra y reescribe el mensaje. Cuando llega la respuesta, te abraza como si hubieran ganado un mundial." },
        change: "abraza", recap: "Ayudaste a Lucas a recuperar un número importante.",
      },
      policia: {
        text: { A: "Sale un policía. Explicas todo. Tarda un poco, pero todos se calman.", B: "Sale un agente de la comisaría. Te cuesta un buen rato aclarar el malentendido.", C: "Sale un agente. Explicar el malentendido en la puerta de una comisaría resulta tan incómodo como suena." },
        change: "policia", recap: "Un malentendido con Lucas terminó con la policía.",
      },
      solo: {
        text: { A: "Lucas entra solo en la comisaría.", B: "Lucas entra solo. Desde la acera, lo ves hablar con un agente.", C: "Lucas entra solo. Por la ventana lo ves gesticular frente a un agente con cara de sueño." },
        change: "se-va", recap: "Te alejaste de Lucas.",
      },
      "cuchillo-huida": {
        text: { A: "Corres por la calle. Detrás, un policía sale de la comisaría y mira hacia ti.", B: "Te alejas corriendo. Detrás, un agente sale de la comisaría, mira la navaja de Lucas y luego mira hacia ti.", C: "Te alejas a la carrera. Detrás, un agente sale, ve la navaja de Lucas y entiende la mitad de la historia; la otra mitad eres tú, doblando la esquina." },
        change: "corre", recap: "Lucas y tú sacaron un cuchillo frente a la comisaría y te fuiste corriendo.",
      },
      "cuchillo-mochila": {
        text: { A: "Lucas tiene su teléfono. «Gracias por el cuchillo… digo, por la ayuda.» Los dos se ríen.", B: "Lucas guarda el teléfono. «Gracias por el cuchillo. Nunca pensé decir eso delante de una comisaría.»", C: "Lucas guarda el teléfono. «Gracias por el cuchillo», dice, y mira la comisaría. «Frase que no repetiré en ningún otro lugar.»" },
        change: "sonrie", recap: "Con tu cuchillo abriste la mochila de Lucas y apareció el teléfono.",
      },
      "cuchillo-agente": {
        text: { A: "El agente se queda con los dos cuchillos. Escribe un informe. Lucas, sin querer, encuentra el teléfono en el forro.", B: "El agente guarda los dos cuchillos en una bolsa y escribe un informe. Mientras vacía los bolsillos, Lucas encuentra el teléfono en el forro.", C: "El agente confisca los dos cuchillos y redacta un informe. Al vaciar los bolsillos para el registro, Lucas descubre el teléfono en el forro. Nadie se ríe. Bueno, el agente un poco." },
        change: "policia", recap: "Un agente confiscó tu cuchillo y la navaja de Lucas, y el teléfono apareció en el registro.",
      },
      "pistola-agente": {
        text: { A: "Sale un policía. Te quita la pistola y te hace muchas preguntas. Lucas espera adentro.", B: "Sale un agente, te quita la pistola y las preguntas duran media hora. Lucas hace su denuncia adentro y te observa por la ventana.", C: "Sale un agente, te desarma y te interroga en la acera. Lucas presenta su denuncia adentro y, por la ventana, te mira con lástima y alivio a partes iguales." },
        change: "policia", recap: "Tu pistola frente a la comisaría terminó con un interrogatorio.",
      },
      "pistola-solo": {
        text: { A: "Lucas entra en la comisaría. Ahora tiene dos cosas que contar.", B: "Lucas entra en la comisaría con dos denuncias: un teléfono perdido y una persona armada.", C: "Lucas entra en la comisaría con material de sobra: un teléfono perdido y una persona armada en la puerta." },
        change: "se-va", recap: "Lucas entró en la comisaría a contar lo del teléfono y lo de tu pistola.",
      },
      "pistola-forro": {
        text: { A: "Lucas saca el teléfono del forro. «Gracias. Y guarda esa pistola, por favor.»", B: "Lucas saca el teléfono del forro, aliviado. «Gracias. Y, en serio, guarda esa pistola.»", C: "Lucas rescata el teléfono del forro. «Gracias. Y esa pistola, en casa. No todos tienen mi sangre fría.» No la tiene." },
        change: "sonrie", recap: "Después del susto de la pistola, Lucas encontró el teléfono en el forro.",
      },
      "granada-evacuan": {
        text: { A: "La policía evacúa la calle. Un helicóptero vuela sobre la comisaría. Tu granada es de plástico.", B: "La policía evacúa la cuadra y un helicóptero sobrevuela la comisaría. Veinte minutos después alguien confirma que la granada es de plástico.", C: "Evacúan la cuadra, un helicóptero ilumina la comisaría y, veinte minutos después, un artificiero anuncia que la granada es de plástico. Lucas, desde lejos, aplaude." },
        change: "helicoptero", recap: "Tu granada frente a la comisaría provocó una evacuación con helicóptero.",
      },
      "granada-corre": {
        text: { A: "Corres con la granada. Un patrullero enciende la sirena detrás de ti.", B: "Corres con la granada en la mano. Detrás, un patrullero enciende la sirena.", C: "Corres con la granada bajo el brazo. Detrás, una sirena te explica que la noche no ha terminado." },
        change: "huye", recap: "Huiste de la comisaría con la granada y una sirena detrás.",
      },
      "granada-baila": {
        text: { A: "Lucas saca el teléfono y baila. «¡Una granada me devolvió el teléfono!»", B: "Lucas saca el teléfono del forro y baila en la acera. «¡Una granada de plástico me devolvió el teléfono!»", C: "Lucas saca el teléfono y baila en la acera. «Una granada de plástico me devolvió el teléfono. Eso no se lo cuento a nadie.»" },
        change: "baila", recap: "Lucas encontró el teléfono riéndose de tu granada.",
      },
      "gas-rociado": {
        text: { A: "Un policía le lava los ojos a Lucas. Tú explicas. Mucho rato.", B: "Un agente le lava los ojos a Lucas con agua y te pide explicaciones. Tardan.", C: "Un agente le lava los ojos a Lucas y luego te dedica una mirada que vale por un informe. Las explicaciones llevan un buen rato." },
        change: "policia", recap: "Rociaste a Lucas con gas pimienta sin querer frente a la comisaría.",
      },
      "gas-regalo": {
        text: { A: "Lucas guarda tu gas pimienta. «Gracias. Ahora busco mi teléfono.» Entra en la comisaría.", B: "Lucas guarda tu gas pimienta en la mochila y entra a hacer la denuncia, más protegido.", C: "Lucas guarda tu gas pimienta en la mochila y entra en la comisaría con una denuncia pendiente y un arma de defensa nueva." },
        change: "sonrie", recap: "Le regalaste tu gas pimienta a Lucas después del susto.",
      },
      "lapiz-cartel": {
        text: { A: "Pegan el cartel en la puerta de la comisaría. Un policía lo mira y se ríe del gato.", B: "Pegan el cartel de SE BUSCA en la puerta de la comisaría. El agente de guardia lo lee y se ríe del gato astronauta.", C: "Pegan el cartel en la puerta de la comisaría. El agente de guardia lo lee dos veces y se queda con el gato astronauta de fondo de pantalla mental." },
        change: "sonrie", recap: "Dibujaste un cartel de SE BUSCA para el teléfono de Lucas.",
      },
      "lapiz-numero": {
        text: { A: "Lucas guarda el papel con el número. «Esto es lo importante. El teléfono, después.»", B: "Lucas guarda el papel con el número en el bolsillo bueno. «Esto es lo que importaba. Lo del teléfono, mañana.»", C: "Lucas guarda el papel con el número como un documento oficial. «Esto era lo urgente. El teléfono puede esperar hasta mañana.»" },
        change: "sonrie", recap: "Con tu lápiz, Lucas recuperó un número que vale más que su teléfono.",
      },
      "libro-regalo": {
        text: { A: "Lucas se va con tu libro. Lo abre en la primera página. Sonríe.", B: "Lucas se aleja con tu libro bajo el brazo y lo abre bajo la primera farola.", C: "Lucas se aleja con tu libro, lo abre bajo una farola y, por primera vez en la noche, no busca nada en los bolsillos." },
        change: "sonrie", recap: "Le regalaste tu libro a Lucas para una noche sin teléfono.",
      },
      "libro-numero": {
        text: { A: "Lucas tiene el número en tu libro. Está feliz. «Mañana la llamo.»", B: "Lucas guarda el libro con el número dentro. «Mañana la llamo. Desde un teléfono prestado, pero la llamo.»", C: "Lucas se va con el libro y el número de Inés dentro. «Mañana la llamo. Desde el teléfono de mi madre, pero la llamo.»" },
        change: "sonrie", recap: "El número que Lucas no quería perder quedó escrito en tu libro.",
      },
      "corazon-abrazo": {
        text: { A: "Lucas te abraza otra vez, con el teléfono en la mano. «Gracias. Por calmarme.»", B: "Lucas te abraza de nuevo, teléfono en mano. «Gracias. Lo encontré porque dejé de temblar.»", C: "Lucas te abraza con el teléfono apretado en la mano. «Lo encontré porque conseguiste que dejara de temblar. Eso no lo hace un teléfono.»" },
        change: "abraza", recap: "Lucas se calmó contigo y encontró el teléfono en su chaqueta.",
      },
      "corazon-parada": {
        text: { A: "Lucas se va hacia la parada de la clínica. «Mañana a las ocho. Como en las películas.»", B: "Lucas se aleja hacia la parada de la clínica, ensayando qué decirle a Inés mañana.", C: "Lucas se aleja hacia la parada, ensayando en voz baja una frase para Inés. La cambia tres veces antes de la esquina." },
        change: "sonrie", recap: "Lucas decidió buscar a Inés mañana en la parada, sin teléfono.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces si una persona saca un cuchillo?", B: "¿Alguna vez reaccionaste a una amenaza con otra amenaza?", C: "¿Por qué dos personas asustadas se amenazan en vez de hablar?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces si alguien te roba?", B: "¿Cómo reaccionarías si alguien armado te hablara con calma?", C: "¿Qué peso tiene el miedo en lo que decimos cuando alguien tiene el control?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Dónde te escondes si tienes miedo?", B: "¿Cuál fue la broma más absurda que te hicieron en la calle?", C: "¿Cuánto tarda el pánico en convertirse en risa, y de qué depende?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Desconfías de las personas en la calle de noche?", B: "¿Alguna vez desconfiaste de alguien que solo pedía ayuda?", C: "¿La desconfianza nos protege o nos aísla cuando alguien nos aborda de noche?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué números sabes de memoria?", B: "¿Qué cosas importantes guardas solo en el teléfono?", C: "¿Qué se pierde cuando dejamos de memorizar lo que nos importa?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Lees en el autobús?", B: "¿Qué haces en el transporte cuando no tienes teléfono?", C: "¿Qué papel tenían los libros en tu vida antes de los teléfonos, y cuál tienen hoy?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿A quién conociste en un autobús o un tren?", B: "¿Qué harías para volver a ver a alguien si perdieras su número?", C: "¿Qué encuentros casuales cambiaron el rumbo de tu vida?" } },
    },
    speak: {
      A1: "¿Qué cosas llevas siempre en los bolsillos?",
      A2: "¿Qué perdiste alguna vez y cómo lo encontraste?",
      B1: "¿Cómo te organizas para no olvidar tus cosas importantes?",
      B2: "¿Qué pasaría en tu vida si no tuvieras teléfono durante una semana?",
      C1: "¿En qué se diferencia perder un objeto de perder lo que ese objeto guarda?",
      C2: "¿Qué parte de tu memoria has delegado en tus dispositivos sin darte cuenta?",
    },
  },

  // ───────────────────────────── ESCENA 3 ─────────────────────────────
  {
    id: "clinica-ruben",
    kind: "escena",
    district: "clinica",
    title: "Rubén te da las gracias",
    verb: "SALUDAR",
    requires: "ruben-ayudado",
    goal: "Recibir agradecimiento, quitar importancia, hablar de la familia y los estudios, aceptar o rechazar un regalo con amabilidad.",
    cast: [
      {
        id: "ruben", name: "Rubén", role: "Repartidor con el tobillo vendado",
        age: "adult", body: "m", build: "heavy", height: 1.72,
        hair: "short", hairColor: "#2b211a", skin: "#b88462",
        top: "jacket", topColor: "#d8562b", bottom: "jeans", bottomColor: "#2f3b52",
        extras: ["helmet", "mustache", "bandage"], pose: "sit", props: ["bench", "crutch"],
      },
      {
        id: "nadia", name: "Nadia", role: "Hija de Rubén, estudiante de medicina",
        age: "young", body: "f", build: "athletic", height: 1.66,
        hair: "ponytail", hairColor: "#2b211a", skin: "#a8744f",
        top: "scrubs", topColor: "#4fa3a5", bottom: "pants", bottomColor: "#4fa3a5",
        extras: ["glasses"], pose: "walk",
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ruben", mood: "smile",
        line: {
          A: "En la entrada de la clínica, Rubén está sentado con el pie vendado. Te ve y levanta los brazos. «¡Eh! ¡Eres tú! ¡Gracias por lo de antes!»",
          B: "Rubén está sentado junto a la entrada, con el tobillo vendado y una muleta. Al verte, se le ilumina la cara. «¡Mi salvador! Ven, ven, que te tengo que dar las gracias como corresponde.»",
          C: "Rubén, con el tobillo vendado como una momia, te saluda con la muleta desde la entrada. «¡El héroe de la noche! Ven, que aquí todos creen que me lo invento.»",
        },
        options: [
          {
            id: "tobillo",
            say: { A: "¡Hola, Rubén! ¿Cómo está tu pie?", B: "¡Rubén! ¿Qué te dijeron del tobillo? ¿Es grave?", C: "¿Y el veredicto? ¿Tobillo heroico o solo torcido?" },
            reply: { A: "«Es un esguince. Dos semanas sin bici. Y me vendó mi hija. ¡Trabaja aquí!»", B: "«Esguince. Dos semanas de reposo. ¿Y sabes quién me vendó? Mi hija, que hace prácticas aquí.»", C: "«Esguince de segundo grado, con todos los honores. Y me lo vendó mi propia hija, que está de guardia aquí. El mundo es un pañuelo.»" },
            mood: "smile", next: "hija",
          },
          {
            id: "modesto",
            say: { A: "No fue nada, de verdad.", B: "No hace falta, de verdad. Cualquiera habría hecho lo mismo.", C: "No me des las gracias, que solo estaba en el sitio justo. O en el injusto, según se mire." },
            reply: { A: "Rubén niega con la cabeza. «Sí fue algo. Quiero darte algo.»", B: "«¿Cualquiera? Pasaron diez personas antes que tú.» Rubén busca en su mochila. «Quiero darte algo.»", C: "«Cualquiera no: pasaron diez y ninguno paró», dice Rubén. «Así que no discutas. Te quiero regalar algo.»" },
            mood: "smile", next: "favor",
          },
          {
            id: "pizza",
            say: { A: "¿Y la pizza? ¿Llegó bien?", B: "¿Y qué pasó con el pedido? ¿Se enojó tu jefe?", C: "Pregunta importante: ¿la aplicación te perdonó?" },
            reply: { A: "Rubén se ríe. «El jefe no está enojado. ¡Mi hija sí! Mira, aquí viene.»", B: "«Mi jefe lo entendió. La que está furiosa es mi hija, que trabaja aquí. Mírala, ahí viene.»", C: "«La aplicación, no sé. Mi hija, en cambio, no me perdona. Ahí viene, con cara de diagnóstico.»" },
            mood: "smile", next: "hija",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y señalas la venda.", C: "Sacas el lápiz y miras la venda blanca, tan tentadora." },
            say: { A: "¿Puedo escribir algo en tu venda?", B: "¿Te firmo la venda? Como cuando éramos niños y alguien se rompía un brazo.", C: "¿Me dejas firmar la venda? Una venda sin dedicatorias es una oportunidad perdida." },
            reply: { A: "Rubén se ríe. «¡Sí! Escribe tu nombre. ¡Mira, mi hija!»", B: "«¡Claro! Pon algo bonito.» Mientras escribes, sale su hija. «Papá, eso no es un yeso…»", C: "Rubén te ofrece el pie, encantado. Su hija aparece en la puerta. «Papá, es una venda, no un cuaderno de autógrafos.»" },
            mood: "smile", next: "hija",
          },
          libro: {
            act: { A: "Le das tu libro a Rubén.", B: "Le ofreces tu libro a Rubén.", C: "Le tiendes tu libro a Rubén: dos semanas de reposo dan para mucho." },
            say: { A: "Toma. Para las dos semanas en casa.", B: "Toma, para que no te aburras estas dos semanas.", C: "Para tu convalecencia. Y no me digas que no lees, que tienes tiempo de sobra." },
            reply: { A: "Rubén lo mira. «¿Una novela? Hace años que no leo. Gracias.»", B: "Rubén mira la tapa. «Hace veinte años que no leo una novela. Bueno, ya no tengo excusa.»", C: "«La última novela que leí fue en el colegio», confiesa Rubén. «Si me gusta, la culpa es tuya.»" },
            mood: "smile", next: "favor",
          },
          gas: {
            act: { A: "Sacas el gas pimienta.", B: "Ves a alguien moverse detrás de Rubén y sacas el gas pimienta.", C: "Una sombra se mueve detrás de Rubén y, por reflejo, sacas el gas pimienta." },
            say: { A: "¡Cuidado, Rubén! ¿Quién es esa persona?", B: "¡Cuidado, Rubén! Hay alguien detrás de ti.", C: "Rubén, no te muevas: hay alguien detrás." },
            reply: { A: "Una chica con uniforme grita: «¡Ey! ¡Soy su hija!»", B: "La sombra es una chica en uniforme sanitario, que levanta las manos. «¡Ey, ey! ¡Que soy su hija!»", C: "La sombra resulta ser una estudiante en uniforme, con las manos en alto. «Soy su hija. Y vengo a cambiarle la venda, no a robarlo.»" },
            mood: "scared", next: "calmar",
          },
          granada: {
            act: { A: "Rubén ve tu granada.", B: "Al abrir la mochila para saludar, Rubén ve la granada.", C: "Al buscar algo en la mochila, la granada se asoma. Rubén la ve." },
            say: { A: "Hola, Rubén. ¿Cómo estás?", B: "¡Rubén! ¿Cómo va ese tobillo?", C: "¿Cómo sigue el tobillo más famoso de la ciudad?" },
            reply: { A: "Rubén se pone blanco. «¿Una granada? ¿Aquí, en la clínica?»", B: "Rubén deja de sonreír. «¿Eso es una granada? Oye, que esto es una clínica…»", C: "«Mi tobillo, bien», dice Rubén, mirando la granada. «Mi corazón, ahora mismo, no tanto.»" },
            mood: "scared", next: "calmar",
          },
          pistola: {
            act: { A: "Rubén ve tu pistola.", B: "Al sentarte a su lado, Rubén ve la pistola.", C: "Al sentarte junto a él, la pistola asoma y Rubén se tensa." },
            say: { A: "¿Cómo estás, Rubén?", B: "¿Qué tal, Rubén? ¿Cómo te fue con el médico?", C: "Bueno, cuéntamelo todo. ¿Qué te dijeron?" },
            reply: { A: "Rubén se asusta. «¿Por qué tienes eso?»", B: "Rubén mira la pistola y se le borra la sonrisa. «Eh… ¿Y eso? ¿Por qué llevas eso?»", C: "«Que me lo cuentes tú», dice Rubén, con la vista fija en la pistola. «¿Qué haces con eso?»" },
            mood: "scared", next: "calmar",
          },
          cuchillo: {
            act: { A: "Rubén tiene una manzana. Sacas el cuchillo.", B: "Rubén intenta morder una manzana enorme. Sacas el cuchillo.", C: "Rubén lucha con una manzana descomunal. Sacas el cuchillo para echarle una mano." },
            say: { A: "¿Te corto la manzana?", B: "¿Quieres que te corte la manzana en trozos?", C: "Déjame partírtela, que tal como va, te vas a torcer también la mandíbula." },
            reply: { A: "Rubén se ríe. «¡Sí, gracias! Mi hija me la dio.»", B: "«¡Sí, por favor! Me la dio mi hija. Dice que es más sana que las papas fritas.»", C: "«Sí, gracias», ríe Rubén. «Me la trajo mi hija. Dice que es mi nueva dieta. Ahí viene, a vigilarme.»" },
            mood: "smile", next: "hija",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Me alegra mucho verte, Rubén.", B: "Qué alegría verte, Rubén. Estaba pensando en ti.", C: "Rubén, no sabes cuánto me alegra verte de una pieza. Bueno, casi de una pieza." },
            reply: { A: "Rubén se emociona. «Gracias. Esta noche lloré un poco. Por el dolor… y por ti.»", B: "Rubén se emociona. «¿Sabes qué? En la ambulancia pensé que la gente ya no ayuda. Y luego me acordé de ti.»", C: "Rubén se queda callado y se le humedecen los ojos. «Llevo quince años repartiendo y nadie se había parado nunca. Hasta hoy.»" },
            mood: "love", next: "hija",
          },
        },
      },
      hija: {
        who: "nadia", mood: "smile",
        line: {
          A: "Una chica en uniforme sale de la clínica. «Hola. Soy Nadia, la hija de Rubén. ¿Tú lo ayudaste?»",
          B: "Sale una joven en uniforme sanitario, con ojeras y una sonrisa. «Hola, soy Nadia. ¿Tú eres quien ayudó a mi papá? Gracias. No se deja ayudar por nadie.»",
          C: "Sale una estudiante en uniforme, con cara de llevar doce horas de guardia. «Soy Nadia. Así que tú eres la persona que consiguió que mi padre entrara en una clínica. Eso es casi un milagro.»",
        },
        options: [
          {
            id: "estudios",
            say: { A: "¡Hola, Nadia! ¿Estudias medicina?", B: "¡Mucho gusto, Nadia! Tu papá me contó que estudias medicina. ¿Qué te gusta más?", C: "Así que tú eres la famosa estudiante de medicina. ¿Qué especialidad quieres hacer?" },
            reply: { A: "«Sí. Estoy en cuarto año. Me gustan las urgencias.»", B: "«Sí, cuarto año. Me encantan las urgencias, aunque duermo poquísimo.»", C: "«Urgencias, si sobrevivo a la carrera», dice Nadia. «Lo de dormir lo dejo para la jubilación.»" },
            mood: "smile", next: "favor",
          },
          {
            id: "regañar",
            say: { A: "Tu papá no quería ir al médico.", B: "Te cuento un secreto: tu papá no quería venir a la clínica.", C: "No quiero meter a nadie en problemas, pero tu padre quería seguir repartiendo con el tobillo así." },
            reply: { A: "Nadia mira a Rubén. «¡Papá!» Rubén mira al cielo.", B: "Nadia se cruza de brazos. «¿Cómo que no quería?» Rubén de repente está muy interesado en una paloma.", C: "Nadia mira a su padre por encima de las gafas. Rubén, de repente, descubre algo fascinante en el techo del estacionamiento." },
            mood: "angry", next: "favor",
          },
          {
            id: "despedirse",
            say: { A: "Mucho gusto, Nadia. Bueno, los dejo. ¡Cuídate, Rubén!", B: "Un placer, Nadia. Los dejo tranquilos, que tienes que trabajar. ¡Cuídate, Rubén!", C: "Un placer. No te robo más tiempo de guardia. Rubén, obedece a tu médica." },
            reply: { A: "Nadia sonríe. «Gracias. ¡Adiós!» Rubén te dice adiós con la mano.", B: "«Gracias de verdad», dice Nadia. Rubén te saluda con la muleta.", C: "«Eso intento que haga desde hace años», dice Nadia. Rubén levanta la muleta a modo de despedida." },
            mood: "smile", end: "despedida",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tu papá está muy orgulloso de ti. Habla mucho de ti.", B: "Que sepas que tu papá no paró de hablar de ti. Está orgullosísimo.", C: "No sé si te lo dice, pero tu padre habla de ti como si hubieras inventado la medicina." },
            reply: { A: "Nadia mira a su papá. «¿En serio? Él nunca me lo dice.»", B: "Nadia mira a su padre, sorprendida. «¿De verdad? A mí nunca me lo dice. Solo me pregunta si como bien.»", C: "Nadia se queda sin palabras. Rubén carraspea. «Bueno, es que… es verdad, hija.» Ella lo abraza, con venda y todo." },
            mood: "love", next: "favor",
          },
        },
      },
      favor: {
        who: "ruben", mood: "smile",
        line: {
          A: "Rubén saca una tarjeta. «Te debo una. ¿Quieres una pizza gratis? Trabajo en Pizzería Vesubio.»",
          B: "Rubén saca una tarjeta arrugada. «Te debo un favor. Pizza gratis en Vesubio, cuando quieras. O te llevo en bici, cuando pueda pedalear.»",
          C: "Rubén te tiende una tarjeta con una mancha de salsa sospechosa. «Pizza gratis en Vesubio, de por vida. Bueno, de por vida no. Un mes. Pero con extra de queso.»",
        },
        options: [
          {
            id: "aceptar",
            say: { A: "¡Sí, gracias! Me gusta mucho la pizza.", B: "¡Acepto, claro! Pero con una condición: me la traes tú cuando estés bien.", C: "Acepto, pero solo si la entregas tú, con el tobillo curado y sin acrobacias." },
            reply: { A: "Rubén se ríe. «¡Perfecto! La mejor pizza para ti.»", B: "«¡Trato hecho! La primera entrega cuando me quiten esto. Sin caídas, prometido.»", C: "«Trato», dice Rubén, solemne. «La pizza llegará entera. La dignidad, ya veremos.»" },
            mood: "smile", end: "pizza",
          },
          {
            id: "rechazar",
            say: { A: "No, gracias. No me debes nada.", B: "Gracias, pero de verdad no me debes nada. Guárdala para tu hija.", C: "Te lo agradezco, pero los favores no se cobran. Invita tú a Nadia, que se lo merece más." },
            reply: { A: "Rubén insiste, pero al final sonríe. «Eres buena persona.»", B: "Rubén mira a Nadia y sonríe. «Bueno. Entonces, la pizza es para ella. Pero te debo una igual.»", C: "Rubén se rasca el bigote. «Pues entonces te debo una sin fecha de vencimiento. Esas son las peligrosas.»" },
            mood: "love", end: "abrazo",
          },
          {
            id: "cafe",
            say: { A: "Mejor un café. Cuando estés bien, tomamos un café.", B: "Prefiero otra cosa: cuando estés bien, me invitas un café y me cuentas tus historias de repartidor.", C: "Cámbiamelo por un café y tus mejores anécdotas de repartidor. Seguro que tienes material." },
            reply: { A: "«¡Sí! Tengo muchas historias. Un café, prometido.»", B: "«¡Hecho! Tengo historias para diez cafés. Una vez entregué una tarta a un perro.»", C: "«Material me sobra», dice Rubén. «Una vez entregué una tarta de cumpleaños… a un perro. Pero eso, con el café.»" },
            mood: "smile", end: "cafe",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "El mejor regalo es verte bien, Rubén.", B: "Mi regalo es verte aquí, con tu hija y con el pie vendado. En serio.", C: "Ya me diste lo mejor: saber que llegaste aquí y que tienes a alguien que te cuida." },
            reply: { A: "Rubén te abraza fuerte. Nadia se ríe. «¡Papá, el pie!»", B: "Rubén se levanta a medias para abrazarte. «¡Papá, el pie!», protesta Nadia, riendo.", C: "Rubén se pone de pie, olvidando el esguince, y te abraza. «¡El pie, papá!», grita Nadia, entre la risa y el pánico." },
            mood: "love", end: "abrazo",
          },
        },
      },
      calmar: {
        who: "ruben", mood: "scared",
        line: {
          A: "Rubén te mira raro. Nadia está a su lado, seria.",
          B: "Rubén ya no sonríe. Nadia se pone a su lado, con la mano en el teléfono.",
          C: "Rubén te mira como si dudara de su propio recuerdo de esta noche. Nadia, a su lado, ya tiene el teléfono en la mano.",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Perdón. Lo guardo. Fue un error.", B: "Perdón, lo guardo. Fue una tontería; no quería asustarlos.", C: "Perdón, eso sobraba completamente. Ya está guardado." },
            reply: { A: "Rubén respira. «Bueno. Te presento a mi hija, Nadia.»", B: "Rubén suelta el aire. «Vaya susto. Bueno, te presento a mi hija, Nadia.»", C: "«Sobraba, sí», dice Rubén, todavía tenso. «Bueno, empecemos bien: esta es Nadia, mi hija.»" },
            mood: "worried", next: "hija",
          },
          {
            id: "explicar",
            say: { A: "No es de verdad. Es para una obra de teatro.", B: "Tranquilos, no es de verdad. Es de utilería, de una obra de teatro.", C: "Es de utilería, lo juro: hago de villano en una obra. Muy mal, por lo visto." },
            reply: { A: "Rubén se ríe un poco. «¡Ah, teatro! Qué susto.»", B: "Rubén mira, se acerca y se ríe. «¡Es de plástico! Casi me rompo el otro tobillo del susto.»", C: "Rubén suelta una carcajada nerviosa. «Haces muy bien de villano. Demasiado bien. Me debes un susto.»" },
            mood: "smile", next: "favor",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy. ¡Cuídate!", B: "Perdonen el susto. Mejor me voy. Cuídate, Rubén.", C: "Creo que ya tuviste bastantes emociones por hoy. Me voy. Cuídate." },
            reply: { A: "Rubén no dice nada. Está triste.", B: "Rubén te ve irte, confundido y un poco triste.", C: "Rubén asiente, con una mezcla de alivio y decepción." },
            mood: "sad", end: "triste",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Perdón, Rubén. Soy yo, la persona de antes. Quiero darte las gracias.", B: "Rubén, perdón. Soy la misma persona de antes. Solo vine a ver cómo estabas.", C: "Rubén, soy yo: la pizza con forma de mapa, ¿te acuerdas? Perdona el susto; vine en son de paz." },
            reply: { A: "Rubén sonríe otra vez. «¡Sí, eres tú! Ven, te presento a mi hija.»", B: "Rubén se relaja y se ríe. «¡Claro que eres tú! Ven, que te presento a mi hija.»", C: "«La pizza con forma de mapa», ríe Rubén. «Imposible olvidarte. Ven, te presento a mi hija.»" },
            mood: "love", next: "hija",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "ruben", mood: "scared",
        line: {
          A: "Rubén levanta los brazos para saludarte… y ve el cuchillo. Se echa atrás en el banco. «¡Eh, eh! ¿Y ese cuchillo? ¡Que yo te di las gracias!»",
          B: "Rubén abre los brazos para saludarte y entonces ve el cuchillo en tu mano. Se encoge en el banco, con la muleta por delante. «¿Qué haces con eso? ¡Si soy yo, Rubén! ¡El de la pizza!»",
          C: "Rubén empieza a saludarte con la muleta y se queda a medias: ha visto el cuchillo. Se echa atrás y pone la muleta entre los dos. «¿Un cuchillo? ¿A mí? ¡Si te debo la vida y una pizza!»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "¡Perdón, Rubén! Lo guardo. Es para la fruta.", B: "¡Perdona, Rubén! Lo guardo ahora mismo. Es para la fruta, nada más.", C: "¡Perdona, Rubén! Guardado. Es para la fruta, aunque reconozco el mal momento." },
            reply: { A: "Rubén respira. Detrás, una chica en uniforme lo ha visto todo. «¿Papá?»", B: "Rubén suelta el aire. Detrás, en la puerta, una chica en uniforme lo ha visto todo. «Papá, ¿quién es?»", C: "Rubén baja la muleta. En la puerta, una estudiante en uniforme ha visto el cuchillo y la muleta. «Papá, ¿qué está pasando?»" },
            mood: "worried", next: "cuchillo-nadia",
          },
          {
            id: "manzana",
            say: { A: "Es para tu manzana. ¿La corto?", B: "Es para tu manzana, hombre. ¿Te la corto en trozos?", C: "Es para la manzana que llevas en la mano. ¿Te la parto?" },
            reply: { A: "Rubén levanta la muleta. «¡Ni te acerques!» Los dos quietos. Sale su hija: «¡Papá!»", B: "Rubén levanta la muleta como una espada. «¡Ni un paso!» Se quedan quietos, cuchillo contra muleta, hasta que sale su hija: «¡Papá! ¡Baja eso!»", C: "Rubén blande la muleta como un florete. «¡Ni te acerques!» Un segundo de duelo absurdo, cuchillo contra muleta, y sale su hija: «¡Papá! ¿Qué haces?»" },
            mood: "scared", next: "cuchillo-nadia",
          },
          {
            id: "irse",
            say: { A: "Perdón, Rubén. Me voy. Cuídate.", B: "Perdona, Rubén. Mejor me voy. Cuídate el tobillo.", C: "Perdona, Rubén. Me voy antes de empeorarlo. Cuídate." },
            reply: { A: "Rubén te ve irte, triste. «¿Y la pizza?»", B: "Rubén te mira irte, confundido y triste. «Pero… ¿y la pizza?»", C: "Rubén te ve irte con la tarjeta de la pizzería en la mano. «¿Y la pizza? Era gratis…»" },
            mood: "sad", end: "cuchillo-triste",
          },
        ],
      },
      "cuchillo-nadia": {
        who: "nadia", mood: "angry",
        line: {
          A: "La chica se pone delante de Rubén. «Soy Nadia, su hija. ¿Un cuchillo en la puerta de una clínica? ¿Estás loco?»",
          B: "La chica se planta delante del banco, con los brazos cruzados. «Soy Nadia, su hija. Trabajo aquí. ¿Un cuchillo en la puerta de urgencias? ¿Estás loco?»",
          C: "La estudiante se coloca entre tú y el banco. «Nadia, su hija. Hago prácticas aquí. ¿Un cuchillo en la puerta de urgencias? Ahórrame el trabajo, por favor.»",
        },
        options: [
          {
            id: "disculpa",
            say: { A: "Perdón, Nadia. Fue un error. Yo ayudé a tu papá antes.", B: "Perdona, Nadia. Fue una tontería. Soy quien ayudó a tu papá esta noche.", C: "Perdona, Nadia. Fue torpe. Soy la persona que trajo a tu padre hasta aquí." },
            reply: { A: "Nadia mira a Rubén. Él asiente. «Bueno. Entonces, gracias. Pero guarda eso.»", B: "Nadia mira a su papá, que asiente. «Entonces gracias. Pero ese cuchillo no lo quiero ver más.» Rubén saca una tarjeta.", C: "Nadia consulta a su padre con la mirada; él asiente. «Entonces, gracias. Y el cuchillo, desaparecido.» Rubén, aliviado, busca una tarjeta." },
            mood: "worried", next: "favor",
          },
          {
            id: "explicar",
            say: { A: "Es para cortar fruta. No es peligroso.", B: "Es solo para cortar fruta. No es peligroso, de verdad.", C: "Es para la fruta. Lo peligroso aquí es la muleta de tu padre." },
            reply: { A: "Nadia llama al guardia. «Aquí, por favor. Un cuchillo.»", B: "Nadia no se ríe. Levanta la mano hacia el guardia de la puerta. «Aquí, por favor. Un cuchillo.»", C: "Nadia no aprecia la broma. Hace una seña al guardia de seguridad. «Aquí, por favor. Hay un cuchillo.»" },
            mood: "angry", end: "cuchillo-guardia",
          },
          {
            id: "regalar",
            say: { A: "Toma, Nadia. Para ti. Para cortar vendas.", B: "Toma, Nadia. Te lo regalo. Para cortar vendas, que te hará más falta.", C: "Quédatelo, Nadia. Para las vendas. En tus manos tiene más sentido que en las mías." },
            reply: { A: "Nadia lo toma, sorprendida. «Bueno… gracias. Sí sirve.»", B: "Nadia lo toma con dos dedos y luego sonríe. «Pues sí sirve, la verdad. Gracias.»", C: "Nadia lo examina y, muy a su pesar, sonríe. «Corta mejor que las tijeras de la clínica. Gracias.»" },
            mood: "smile", end: "cuchillo-venda",
          },
        ],
      },
      "pistola-inicio": {
        who: "ruben", mood: "terror",
        line: {
          A: "Rubén te ve, sonríe… y ve la pistola. Levanta las manos y la muleta. «¡No! ¡Yo no te hice nada! ¡Te di las gracias!»",
          B: "Rubén empieza a sonreír y entonces ve la pistola en tu cinturón. Levanta las manos, muleta incluida. «¡No, no! ¿Qué pasa? ¡Si te iba a regalar una pizza!»",
          C: "Rubén te reconoce, sonríe, y la sonrisa se le cae al ver la pistola. Levanta las manos con la muleta en alto. «¿Qué es esto? ¿Vienes a cobrar la pizza con intereses?»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "Baja las manos, Rubén. La guardo. No pasa nada.", B: "Baja las manos, Rubén. La guardo ahora mismo. No pasa nada.", C: "Baja las manos, Rubén. Guardada. No tiene nada que ver contigo." },
            reply: { A: "Rubén baja las manos. Su hija sale de la clínica, seria.", B: "Rubén baja las manos despacio. En la puerta, su hija lo ha visto todo y viene muy seria.", C: "Rubén baja las manos. En la puerta, una estudiante en uniforme ha visto la pistola y cruza la entrada con cara de pocos amigos." },
            mood: "scared", next: "pistola-nadia",
          },
          {
            id: "trabajo",
            say: { A: "Es por mi trabajo. Tranquilo.", B: "Es por mi trabajo, Rubén. Tranquilo.", C: "Es por mi trabajo, Rubén. No preguntes." },
            reply: { A: "Rubén no baja las manos. «¿Qué trabajo?» Su hija sale de la clínica.", B: "Rubén no baja las manos. «¿Qué trabajo? ¿Repartes pizzas armado?» Su hija sale de la clínica.", C: "Rubén no baja las manos. «¿Qué trabajo requiere eso a estas horas?» Su hija sale de la clínica con el teléfono en la mano." },
            mood: "scared", next: "pistola-nadia",
          },
          {
            id: "irse",
            say: { A: "Perdón, Rubén. Me voy.", B: "Perdona, Rubén. Mejor me voy.", C: "Perdona, Rubén. Me voy; esto no era para ti." },
            reply: { A: "Rubén te ve irte con las manos todavía arriba.", B: "Rubén te ve irte sin bajar las manos del todo.", C: "Rubén te ve irte con las manos a media altura, sin saber si bajarlas." },
            mood: "sad", end: "pistola-triste",
          },
        ],
      },
      "pistola-nadia": {
        who: "nadia", mood: "angry",
        line: {
          A: "La chica se pone delante de su papá. «Soy Nadia, su hija. ¿Una pistola aquí? El guardia ya viene.»",
          B: "La chica se planta delante del banco. «Soy Nadia, su hija. ¿Una pistola en la puerta de urgencias? El guardia ya viene hacia aquí.»",
          C: "La estudiante se coloca entre tú y su padre. «Nadia. Su hija. ¿Una pistola en la entrada de urgencias? El guardia ya viene, así que elige bien tus palabras.»",
        },
        options: [
          {
            id: "explicar",
            say: { A: "Es legal. Tengo permiso. Se lo muestro al guardia.", B: "Es legal, tengo permiso. Se lo enseño al guardia si quiere.", C: "Es legal y tengo permiso. Se lo muestro al guardia con mucho gusto." },
            reply: { A: "El guardia llega. «Permiso, por favor. Y el arma, en el suelo.»", B: "El guardia llega. «Permiso, por favor. Y el arma, al suelo, hasta que lo comprobemos.»", C: "El guardia llega. «Permiso, por favor. Y el arma, en el suelo, mientras hago una llamada.»" },
            mood: "worried", end: "pistola-guardia",
          },
          {
            id: "disculpa",
            say: { A: "Perdón, Nadia. Yo ayudé a tu papá antes. No quería asustar.", B: "Perdona, Nadia. Soy quien ayudó a tu papá esta noche. No quería asustar a nadie.", C: "Perdona, Nadia. Soy quien trajo a tu padre. Asustarlo era lo último que quería." },
            reply: { A: "Nadia mira a Rubén. Él asiente. «Gracias. Pero no quiero ver esa pistola.» Rubén busca su tarjeta.", B: "Nadia mira a su papá, que asiente. «Entonces gracias. Pero esa pistola no vuelve a salir.» Rubén, aliviado, busca su tarjeta.", C: "Nadia consulta a su padre, que asiente despacio. «Gracias, entonces. Y la pistola, invisible.» Rubén busca su tarjeta con manos temblorosas." },
            mood: "worried", next: "favor",
          },
          {
            id: "ruben",
            say: { A: "Rubén, perdón. ¿Estás bien?", B: "Rubén, perdóname. ¿Estás bien?", C: "Rubén, te pido perdón. ¿Estás bien?" },
            reply: { A: "Rubén respira. «Casi me caigo del banco. Pero sí. Guarda eso y hablamos.»", B: "Rubén respira hondo. «Casi me rompo el otro tobillo del susto. Pero sí. Guarda eso.»", C: "Rubén se toca el pecho. «Casi me rompo el otro tobillo. Pero sí. Guarda eso y no lo saques nunca más delante de mí.»" },
            mood: "worried", end: "pistola-perdon",
          },
        ],
      },
      "granada-inicio": {
        who: "ruben", mood: "terror",
        line: {
          A: "Rubén te saluda… y ve la granada. Grita. «¡Una granada! ¡Nadia! ¡Todos adentro!» Su hija sale corriendo de la clínica.",
          B: "Rubén levanta los brazos para saludarte, ve la granada y grita. «¡Una granada! ¡Nadia! ¡Cierren la puerta!» Su hija sale corriendo y empieza a evacuar la entrada.",
          C: "Rubén empieza a saludarte, ve la granada y el saludo se convierte en alarma. «¡Granada! ¡Nadia, evacúa la entrada!» Su hija sale como un rayo y empieza a mover gente.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Rubén, es de plástico!", B: "¡Tranquilos, es de juguete! ¡Rubén, mírala, es de plástico!", C: "¡Es de utilería! ¡Rubén, es plástico, lo juro!" },
            reply: { A: "Rubén deja de gritar. Nadia vuelve, furiosa. «¿De plástico? ¿En una clínica?»", B: "Rubén deja de gritar. Nadia vuelve, furiosa. «¿De plástico? Acabo de sacar a tres pacientes a la calle.»", C: "Rubén deja de gritar. Nadia regresa, furiosa. «¿De plástico? Acabo de evacuar la sala de espera por tu juguete.»" },
            mood: "worried", next: "granada-calma",
          },
          {
            id: "suelo",
            say: { A: "¡La dejo en el suelo! ¡Tranquilos!", B: "¡La dejo en el suelo! ¡No pasa nada!", C: "¡La dejo en el suelo, mirad, ya está!" },
            reply: { A: "El guardia llama a la policía. Un helicóptero llega en minutos.", B: "El guardia llama a la policía. En cinco minutos hay un helicóptero sobre la clínica.", C: "El guardia llama a la policía y, en cinco minutos, un helicóptero ilumina la entrada de urgencias." },
            mood: "terror", end: "granada-evacuan",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, perdón! ¡Me voy!", C: "¡Error mío! ¡Me voy!" },
            reply: { A: "Corres. Rubén grita: «¡Y la pizza, olvídala!»", B: "Sales corriendo. Rubén grita detrás: «¡Olvídate de la pizza!»", C: "Corres. Rubén grita a tu espalda: «¡La pizza queda cancelada!»" },
            mood: "terror", end: "granada-corre",
          },
        ],
      },
      "granada-calma": {
        who: "nadia", mood: "angry",
        line: {
          A: "Nadia te mira muy seria. «Soy la hija de Rubén. Dime que no vuelves a traer eso aquí.»",
          B: "Nadia cruza los brazos. «Soy Nadia, la hija de Rubén. Trabajo aquí. Dime que esa cosa no vuelve a entrar en esta clínica.»",
          C: "Nadia cruza los brazos, con la bata todavía desordenada por la evacuación. «Nadia, la hija. Hago guardia aquí. Prométeme que esa cosa no vuelve a pisar esta entrada.»",
        },
        options: [
          {
            id: "llavero",
            say: { A: "Es un llavero. Mira. Lo siento mucho.", B: "Es un llavero, mira. Lo siento muchísimo.", C: "Es un llavero. Mira. Pido perdón a la sala de espera entera." },
            reply: { A: "Nadia lo mira y, al final, se ríe. Rubén también. «¡Un llavero!»", B: "Nadia lo examina y, muy a su pesar, se ríe. Rubén se ríe más. «¡Un llavero! Casi me da un infarto por un llavero.»", C: "Nadia lo examina y se le escapa la risa. Rubén ya llora de risa. «Un llavero. Evacuaron la clínica por un llavero.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "pizza",
            say: { A: "Perdón. Yo ayudé a tu papá antes. Él me debe una pizza.", B: "Perdona. Soy quien ayudó a tu papá esta noche. Él dice que me debe una pizza.", C: "Perdona. Soy quien trajo a tu padre hasta aquí. Según él, me debe una pizza." },
            reply: { A: "Nadia mira a Rubén. «¿Es verdad?» Rubén asiente y saca la tarjeta.", B: "Nadia mira a su papá. «¿Esta persona?» Rubén asiente y saca la tarjeta de la pizzería.", C: "Nadia mira a su padre. «¿Tu salvador lleva granadas?» Rubén asiente y saca la tarjeta, resignado." },
            mood: "worried", next: "favor",
          },
          {
            id: "guardia",
            say: { A: "Lo explico al guardia. Es de plástico.", B: "Se lo explico al guardia. Es de plástico, lo va a ver.", C: "Se lo explico al guardia; es plástico, se verá enseguida." },
            reply: { A: "El guardia ya llamó. Llega la policía y un helicóptero.", B: "Demasiado tarde: el guardia ya llamó. Llega la policía y, encima, un helicóptero.", C: "Tarde: el guardia ya ha llamado. Llega la policía y un helicóptero que nadie pidió." },
            mood: "scared", end: "granada-evacuan",
          },
        ],
      },
      "gas-inicio": {
        who: "nadia", mood: "scared",
        line: {
          A: "Una sombra se mueve detrás de Rubén. Levantas el gas pimienta. La sombra es una chica en uniforme, con las manos arriba. «¡No! ¡Soy su hija!»",
          B: "Algo se mueve detrás de Rubén y tú levantas el gas pimienta. La sombra resulta ser una chica en uniforme sanitario, con las manos arriba. «¡Ey, ey! ¡Soy su hija! ¡Vengo a cambiarle la venda!»",
          C: "Una sombra se acerca por detrás de Rubén y tú apuntas con el gas pimienta. La sombra es una estudiante en uniforme, manos en alto. «¡Soy su hija! Vengo a cambiarle la venda, no a robarlo.»",
        },
        options: [
          {
            id: "guardar",
            say: { A: "¡Perdón! Lo guardo. No te vi bien.", B: "¡Perdona! Lo guardo. No te vi bien con esta luz.", C: "¡Perdona! Guardado. Con esta luz solo vi una sombra." },
            reply: { A: "Nadia baja las manos. «Qué susto. Papá, ¿quién es?» Rubén se ríe.", B: "Nadia baja las manos. «Vaya susto. Papá, ¿quién es tu amistad?» Rubén se ríe.", C: "Nadia baja las manos. «Papá, ¿tus amistades siempre vienen armadas?» Rubén se ríe." },
            mood: "worried", next: "gas-nadia",
          },
          {
            id: "mantener",
            say: { A: "¿Su hija? Rubén, ¿es verdad?", B: "¿Su hija? Rubén, ¿es verdad eso?", C: "¿Su hija? Rubén, confírmamelo antes de que baje esto." },
            reply: { A: "Rubén se ríe. «¡Sí! Es Nadia. Baja eso.»", B: "Rubén se ríe. «¡Sí, es Nadia, mi hija! Baja eso, que trabaja aquí.»", C: "Rubén se ríe. «Es Nadia, mi hija, y hace guardia aquí. Baja eso antes de que te ponga una inyección.»" },
            mood: "worried", next: "gas-nadia",
          },
          {
            id: "rociar",
            act: { A: "Nadia se mueve. Aprietas sin querer.", B: "Nadia da un paso y aprietas sin querer.", C: "Nadia da un paso adelante y el dedo se te va." },
            say: { A: "¡Ay, no! ¡Perdón!", B: "¡No! ¡Perdón, perdón!", C: "¡No! ¡Se me fue el dedo!" },
            reply: { A: "Nadia tose. Rubén grita. Dos enfermeros salen corriendo.", B: "Nadia tose y se tapa los ojos. Rubén grita. Dos enfermeros salen corriendo de la clínica.", C: "Nadia tose con los ojos cerrados. Rubén grita su nombre. Dos compañeros de Nadia salen corriendo." },
            mood: "terror", end: "gas-rociada",
          },
        ],
      },
      "gas-nadia": {
        who: "nadia", mood: "worried",
        line: {
          A: "Nadia mira el gas pimienta. «Soy enfermera. Si rocías a alguien, hay que lavar los ojos con agua. ¿Lo sabías?»",
          B: "Nadia mira el gas pimienta con ojo clínico. «Estudio medicina. Si algún día rocías a alguien, agua, mucha agua en los ojos. ¿Lo sabías?»",
          C: "Nadia señala el gas con la barbilla. «Cuarto de medicina. Por si algún día lo usas: agua abundante en los ojos y nada de frotar. ¿Lo sabías?»",
        },
        options: [
          {
            id: "clase",
            say: { A: "No lo sabía. ¿Qué más hago?", B: "No lo sabía. Cuéntame, ¿qué más hay que hacer?", C: "No lo sabía. Dame la clase completa, por favor." },
            reply: { A: "Nadia te explica todo. Rubén aplaude. «¡Mi hija, la doctora!»", B: "Nadia te da una clase de tres minutos. Rubén aplaude al final. «¡Mi hija, la doctora!»", C: "Nadia te da una clase breve y precisa. Rubén aplaude. «Mi hija, la doctora. Y yo, el paciente.»" },
            mood: "smile", end: "gas-clase",
          },
          {
            id: "disculpa",
            say: { A: "Perdón otra vez. Yo ayudé a tu papá antes.", B: "Perdona otra vez el susto. Soy quien ayudó a tu papá esta noche.", C: "Perdona el recibimiento. Soy la persona que trajo a tu padre." },
            reply: { A: "Nadia sonríe. «Entonces gracias. Pero guarda eso.» Rubén saca una tarjeta.", B: "Nadia sonríe por fin. «Entonces, gracias. Pero el gas, guardado.» Rubén busca su tarjeta.", C: "Nadia sonríe. «Pues gracias. Y el gas, al fondo del bolso.» Rubén saca una tarjeta con mancha de salsa." },
            mood: "smile", next: "favor",
          },
          {
            id: "regalar",
            say: { A: "Toma. Para ti. Sales de noche del trabajo.", B: "Quédatelo. Sales de noche del hospital; te hace más falta que a mí.", C: "Quédatelo. Sales de guardia de madrugada; en tus manos tiene más sentido." },
            reply: { A: "Nadia lo guarda. «Gracias. Y ya sé cómo curar a quien rocíe.»", B: "Nadia lo guarda en el bolsillo de la bata. «Gracias. Y si rocío a alguien, ya sé cómo curarlo.»", C: "Nadia lo guarda en la bata. «Gracias. Soy la única persona de la ciudad que puede rociar y curar en el mismo turno.»" },
            mood: "smile", end: "gas-clase",
          },
        ],
      },
      "lapiz-inicio": {
        who: "ruben", mood: "smile",
        line: {
          A: "Rubén ve tu lápiz y levanta el pie vendado. «¡Un lápiz! ¡Fírmame la venda! Eres el primero.»",
          B: "Rubén ve tu lápiz y te ofrece el pie vendado como un trofeo. «¡Un lápiz! Fírmame la venda. Nadie me la ha firmado todavía.»",
          C: "Rubén ve el lápiz y te planta el pie vendado delante. «¡Un lápiz! Fírmame la venda. Una venda sin dedicatorias es una venda triste.»",
        },
        options: [
          {
            id: "firmar",
            act: { A: "Firmas la venda.", B: "Firmas la venda con letra grande.", C: "Firmas la venda con tu mejor letra." },
            say: { A: "Listo. «Cuídate, Rubén.»", B: "Listo: «Cuídate, Rubén. Sin acrobacias.»", C: "Listo: «Para Rubén, el repartidor que voló. Sin repetir.»" },
            reply: { A: "Rubén se ríe. Sale su hija de la clínica. «Papá, ¡es una venda, no un cuaderno!»", B: "Rubén se ríe a carcajadas. En ese momento sale su hija de la clínica. «Papá, eso es una venda, no un cuaderno de autógrafos.»", C: "Rubén lee la dedicatoria y se ríe. Sale su hija en uniforme. «Papá, es una venda estéril, no un libro de visitas.»" },
            mood: "smile", next: "lapiz-nadia",
          },
          {
            id: "dibujar",
            act: { A: "Dibujas una pizza en la venda.", B: "Dibujas una pizza enorme en la venda.", C: "Dibujas una pizza con mucho queso en la venda." },
            say: { A: "Una pizza. Para que no te olvides.", B: "Una pizza, para que no te olvides de lo que me debes.", C: "Una pizza, como recordatorio de la deuda." },
            reply: { A: "Rubén aplaude. Sale su hija. «Papá, ¿qué es eso?»", B: "Rubén aplaude. En la puerta aparece su hija. «Papá, ¿por qué tienes una pizza en el pie?»", C: "Rubén aplaude. Su hija aparece en la puerta. «Papá, ¿por qué tienes una pizza dibujada en una venda que cambié hace una hora?»" },
            mood: "smile", next: "lapiz-nadia",
          },
          {
            id: "tarjeta",
            say: { A: "Mejor escribe tu número. Para la pizza gratis.", B: "Mejor dame tu número. Para reclamar esa pizza gratis.", C: "Mejor apunta tu número. Para cobrar la pizza prometida." },
            reply: { A: "Rubén escribe su número en tu mano. «Pizza gratis. Con tu lápiz.»", B: "Rubén te escribe su número en la palma. «Pizza gratis. Firmado con tu propio lápiz.»", C: "Rubén te escribe su número en la mano. «Contrato de pizza. Firmado con tu lápiz: no hay vuelta atrás.»" },
            mood: "smile", end: "lapiz-tarjeta",
          },
        ],
      },
      "lapiz-nadia": {
        who: "nadia", mood: "smile",
        line: {
          A: "La chica sonríe. «Soy Nadia, su hija. Esa venda la cambio yo mañana. Pero gracias por ayudarlo.»",
          B: "La chica se cruza de brazos, pero sonríe. «Soy Nadia, su hija. Mañana cambio esa venda y se pierde tu obra. Pero gracias por traerlo.»",
          C: "La estudiante sonríe a su pesar. «Nadia, su hija. Mañana esa venda va a la basura, arte incluido. Pero gracias por traer a este cabezota.»",
        },
        options: [
          {
            id: "retrato",
            say: { A: "Déjame dibujarte. En un papel, no en la venda.", B: "¿Te dibujo? En un papel, no en la venda.", C: "¿Me dejas hacerte un retrato? En papel, no en material sanitario." },
            reply: { A: "Nadia se ríe y posa. Rubén dice: «¡Sácala guapa!»", B: "Nadia se ríe y posa un segundo. Rubén grita: «¡Sácala guapa, que es mi hija!»", C: "Nadia se ríe y posa con los brazos cruzados. Rubén supervisa: «Más guapa. Más. Así.»" },
            mood: "smile", end: "lapiz-retrato",
          },
          {
            id: "favor",
            say: { A: "Rubén dice que me debe algo. ¿Es verdad?", B: "Tu papá dice que me debe un favor. ¿Me lo creo?", C: "Tu padre dice que me debe un favor. ¿Es de fiar en estos temas?" },
            reply: { A: "Nadia se ríe. «Siempre paga. Con pizza.» Rubén saca una tarjeta.", B: "Nadia se ríe. «Siempre paga sus deudas. En pizza.» Rubén saca una tarjeta arrugada.", C: "Nadia se ríe. «Paga todas sus deudas, siempre en pizza.» Rubén ya está sacando la tarjeta." },
            mood: "smile", next: "favor",
          },
          {
            id: "firma",
            say: { A: "Fírmala tú también, Nadia. Como doctora.", B: "Fírmala tú también, Nadia. Como su doctora.", C: "Pon tu firma tú también, Nadia. Como facultativa responsable." },
            reply: { A: "Nadia firma: «Reposo. Dra. Nadia». Rubén está feliz.", B: "Nadia toma el lápiz y firma: «Reposo absoluto. Dra. Nadia». Rubén está orgulloso.", C: "Nadia toma el lápiz y escribe: «Reposo absoluto. Firmado: su médica y su hija». Rubén no cabe en sí." },
            mood: "smile", end: "lapiz-tarjeta",
          },
        ],
      },
      "libro-inicio": {
        who: "ruben", mood: "surprised",
        line: {
          A: "Rubén ve tu libro. «¿Un libro? ¿Es para mí? Tengo dos semanas de reposo. ¡Qué casualidad!»",
          B: "Rubén ve el libro bajo tu brazo. «¿Un libro? ¿Para mí? Me acaban de mandar dos semanas de reposo. Es una señal.»",
          C: "Rubén repara en tu libro. «¿Un libro? Justo hoy me mandan dos semanas de reposo. Si es para mí, el universo tiene sentido del humor.»",
        },
        options: [
          {
            id: "regalar",
            say: { A: "Sí, es para ti. Para las dos semanas.", B: "Sí, es para ti. Para esas dos semanas en el sofá.", C: "Es para ti. Dos semanas de sofá merecen una novela." },
            reply: { A: "Rubén lo abraza. Sale su hija. «¿Un libro? ¡Papá no lee!»", B: "Rubén lo abraza como un trofeo. Sale su hija de la clínica. «¿Un libro? ¡Si papá no lee ni las recetas!»", C: "Rubén lo abraza. Su hija aparece en la puerta. «¿Un libro? Papá no lee ni los mensajes que le mando.»" },
            mood: "smile", next: "libro-nadia",
          },
          {
            id: "leer",
            act: { A: "Abres el libro y lees el principio en voz alta.", B: "Abres el libro y le lees el primer párrafo.", C: "Abres el libro y le lees el arranque en voz alta." },
            say: { A: "Escucha el principio. ¿Te gusta?", B: "Escucha cómo empieza. ¿Te engancha?", C: "Escucha el primer párrafo. ¿Te atrapa o te duerme?" },
            reply: { A: "Rubén escucha. «¡Sigue!» Sale su hija. «¿Papá escuchando un libro?»", B: "Rubén escucha con la boca abierta. «¡Sigue, sigue!» Su hija sale de la clínica. «¿Papá escuchando un libro? Esto lo grabo.»", C: "Rubén escucha, hipnotizado. «¡No pares!» Su hija aparece. «¿Mi padre escuchando literatura? Necesito un testigo.»" },
            mood: "smile", next: "libro-nadia",
          },
          {
            id: "prestar",
            say: { A: "Te lo presto. Me lo devuelves con la pizza.", B: "Te lo presto. Me lo devuelves cuando traigas la pizza.", C: "Te lo presto. Lo devuelves con la pizza prometida, en mano." },
            reply: { A: "Rubén se ríe. «¡Trato! Libro y pizza.»", B: "Rubén se ríe. «¡Trato hecho! Libro y pizza, el mismo día.»", C: "Rubén se ríe. «Trato: libro devuelto y pizza entregada, misma visita.»" },
            mood: "smile", end: "libro-prestamo",
          },
        ],
      },
      "libro-nadia": {
        who: "nadia", mood: "smile",
        line: {
          A: "Nadia mira el libro. «Soy Nadia, su hija. Si papá termina ese libro, yo apruebo medicina mañana.»",
          B: "Nadia mira el libro con incredulidad. «Soy Nadia, su hija. Si mi papá termina ese libro, yo me saco la carrera en un día.»",
          C: "Nadia examina el libro como un síntoma raro. «Nadia, su hija. Si este hombre termina una novela, yo me gradúo mañana por la tarde.»",
        },
        options: [
          {
            id: "apuesta",
            say: { A: "Apuesta. Si lo termina, él gana una pizza.", B: "Hagamos una apuesta: si lo termina, le invitas tú la pizza.", C: "Apostemos: si lo termina, la pizza la pagas tú." },
            reply: { A: "Nadia acepta. Rubén: «¡Lo termino esta semana!»", B: "Nadia acepta, riendo. Rubén levanta la muleta. «¡Esta semana lo termino!»", C: "Nadia acepta, segura de ganar. Rubén alza la muleta. «¡Esta semana! ¡Y con examen!»" },
            mood: "smile", end: "libro-apuesta",
          },
          {
            id: "dedicatoria",
            act: { A: "Escribes una dedicatoria en el libro.", B: "Escribes una dedicatoria en la primera página.", C: "Escribes una dedicatoria en la primera página." },
            say: { A: "«Para Rubén, que voló y aterrizó.»", B: "«Para Rubén, que voló, aterrizó y sigue sonriendo.»", C: "«Para Rubén, que voló, aterrizó y todavía reparte sonrisas.»" },
            reply: { A: "Rubén lee y se emociona. Nadia sonríe.", B: "Rubén lee la dedicatoria y se le humedecen los ojos. Nadia sonríe sin decir nada.", C: "Rubén lee la dedicatoria dos veces y carraspea. Nadia, por una vez, no dice nada." },
            mood: "love", end: "libro-prestamo",
          },
          {
            id: "pizza",
            say: { A: "Rubén dice que me debe una pizza. ¿Es verdad?", B: "Tu papá dice que me debe una pizza. ¿Es de fiar?", C: "Tu padre asegura que me debe una pizza. ¿Cumple sus promesas?" },
            reply: { A: "Nadia se ríe. «Siempre cumple.» Rubén saca su tarjeta.", B: "Nadia se ríe. «En pizzas, siempre cumple.» Rubén saca su tarjeta.", C: "Nadia se ríe. «En materia de pizza es un hombre de palabra.» Rubén ya saca la tarjeta." },
            mood: "smile", next: "favor",
          },
        ],
      },
      "corazon-inicio": {
        who: "ruben", mood: "love",
        line: {
          A: "Rubén te ve y se le llenan los ojos de lágrimas. Se levanta con la muleta y te abraza. «¡Eres tú! Gracias, gracias.»",
          B: "Rubén te ve y, sin decir nada, se levanta con la muleta y te abraza con fuerza. «Eres tú. No sabes lo que significa para mí.»",
          C: "Rubén te ve, se le quiebra la cara y se levanta como puede para abrazarte, muleta y todo. «Eres tú. Llevo toda la noche contando lo que hiciste.»",
        },
        options: [
          {
            id: "abrazar",
            act: { A: "Lo abrazas con cuidado.", B: "Lo abrazas con cuidado, sin pisar el pie malo.", C: "Lo abrazas con cuidado de no tocar el tobillo." },
            say: { A: "Me alegro mucho de verte, Rubén.", B: "Qué alegría verte bien, Rubén.", C: "Qué alegría verte de una pieza, Rubén. Casi de una pieza." },
            reply: { A: "Rubén llora un poco. Una chica en uniforme sale. «¡Papá, el pie!» Pero sonríe.", B: "Rubén llora sin vergüenza. Una chica en uniforme sale de la clínica. «¡Papá, el pie!» Pero sonríe al verlos.", C: "Rubén llora abiertamente. Una estudiante en uniforme sale de la clínica. «¡Papá, el tobillo!» Y se queda mirando la escena, conmovida." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "hija",
            say: { A: "¿Y esa chica? ¿Es tu hija?", B: "¿Y esa chica de la puerta? ¿Es tu hija?", C: "¿Y la chica de la puerta que nos mira? ¿Es tu hija?" },
            reply: { A: "Rubén se gira. «¡Nadia! Ven. Es la persona que me ayudó.»", B: "Rubén se gira, orgulloso. «¡Nadia! Ven. Es quien me ayudó esta noche.»", C: "Rubén se gira sin soltarte. «¡Nadia! Ven aquí. Esta es la persona de la que te hablé.»" },
            mood: "love", next: "corazon-nadia",
          },
          {
            id: "tobillo",
            say: { A: "¿Cómo está el tobillo?", B: "Cuéntame, ¿cómo está ese tobillo?", C: "Dime, ¿qué veredicto tiene el tobillo?" },
            reply: { A: "«Esguince. Me vendó mi hija. ¡Nadia, ven!»", B: "«Esguince. Dos semanas. Y me lo vendó mi hija, que hace prácticas aquí. ¡Nadia, ven!»", C: "«Esguince de segundo grado, vendado por mi propia hija. ¡Nadia, ven a conocer a mi salvador!»" },
            mood: "love", next: "corazon-nadia",
          },
        ],
      },
      "corazon-nadia": {
        who: "nadia", mood: "love",
        line: {
          A: "Nadia se acerca con los ojos brillantes. «Gracias. Mi papá no se deja ayudar por nadie. Por ti, sí.»",
          B: "Nadia se acerca y te toma las manos. «Gracias. Mi papá no se deja ayudar por nadie. Contigo fue distinto, no sé por qué.»",
          C: "Nadia se acerca con los ojos húmedos y te toma las manos. «Gracias. Mi padre no acepta ayuda ni de mí. Contigo, por alguna razón, sí.»",
        },
        options: [
          {
            id: "familia",
            say: { A: "Tu papá habla mucho de ti. Está orgulloso.", B: "Tu papá no paró de hablar de ti. Está muy orgulloso.", C: "Tu padre habla de ti como si hubieras inventado la medicina." },
            reply: { A: "Nadia mira a Rubén. «¿En serio?» Él asiente. Los tres se abrazan.", B: "Nadia mira a su papá. «¿De verdad?» Rubén asiente, sin palabras. Terminan los tres en un abrazo.", C: "Nadia mira a su padre. «¿Eso dices?» Rubén asiente, incapaz de hablar. Los tres acaban en un abrazo torpe, con muleta." },
            mood: "love", end: "corazon-familia",
          },
          {
            id: "cafe",
            say: { A: "Cuando esté bien, tomamos un café los tres.", B: "Cuando esté bien del tobillo, un café los tres.", C: "Cuando el tobillo lo permita, un café los tres. Invito yo." },
            reply: { A: "Nadia sonríe. «Trato.» Rubén: «¡Y pizza!»", B: "Nadia sonríe. «Trato hecho.» Rubén añade: «¡Y pizza!»", C: "Nadia sonríe. «Hecho.» Rubén corrige: «Café y pizza. No se negocia.»" },
            mood: "love", end: "corazon-cafe",
          },
          {
            id: "favor",
            say: { A: "No fue nada. Él me ayudó a mí también.", B: "No fue nada. Él también me ayudó a mí esta noche.", C: "No fue nada. Esta noche tu padre me ayudó a mí tanto como yo a él." },
            reply: { A: "Rubén saca una tarjeta. «Igual te debo algo.»", B: "Rubén saca una tarjeta arrugada. «Da igual lo que digas: te debo algo.»", C: "Rubén saca una tarjeta con una mancha de salsa. «Digas lo que digas, hay una deuda.»" },
            mood: "love", next: "favor",
          },
        ],
      },
    },
    ends: {
      pizza: {
        text: { A: "Rubén te da la tarjeta. «¡Pizza gratis!» Nadia y tú se ríen.", B: "Guardas la tarjeta de pizza gratis. Rubén y Nadia te saludan desde la entrada.", C: "Guardas la tarjeta, mancha incluida. Rubén y Nadia te despiden desde la entrada como si fueras de la familia." },
        change: "sonrie", recap: "Rubén te regaló una pizza gratis.",
      },
      abrazo: {
        text: { A: "Rubén te abraza. Nadia también. Son una familia muy bonita.", B: "Rubén te abraza y Nadia se suma. Por un momento, la entrada de la clínica parece una fiesta.", C: "Terminan los tres en un abrazo torpe, con muleta incluida. Un guardia de seguridad aparta la vista, discretamente emocionado." },
        change: "abraza", recap: "Te despediste de Rubén y Nadia con un abrazo.",
      },
      cafe: {
        text: { A: "Rubén escribe tu nombre en su teléfono. «Un café. Prometido.»", B: "Rubén apunta tu nombre en el teléfono. «Café pendiente», dice. «Y diez historias.»", C: "Rubén te guarda en el teléfono como «Café pendiente (héroe)». Nadia lo ve y pone los ojos en blanco." },
        change: "sonrie", recap: "Quedaste en tomar un café con Rubén.",
      },
      despedida: {
        text: { A: "Te vas. Rubén y Nadia hablan y se ríen en la entrada.", B: "Te alejas. Detrás, Nadia le cambia la venda a Rubén mientras él protesta.", C: "Te alejas. Detrás oyes a Nadia dar instrucciones médicas y a Rubén negociarlas una por una." },
        change: "sigue", recap: "Conociste a Nadia, la hija de Rubén.",
      },
      triste: {
        text: { A: "Te vas. Rubén está un poco triste.", B: "Te vas. Rubén se queda mirando la calle, un poco triste.", C: "Te vas. Rubén se queda con la tarjeta de pizza en la mano y una pregunta en la cara." },
        change: "triste", recap: "Asustaste a Rubén sin querer y te fuiste.",
      },
      "cuchillo-triste": {
        text: { A: "Te vas. Rubén se queda con la tarjeta de pizza en la mano, muy triste.", B: "Te vas. Rubén se queda mirando la calle con la tarjeta de la pizzería en la mano, sin entender nada.", C: "Te vas. Rubén se queda con la tarjeta de la pizzería y una pregunta sin respuesta: por qué un cuchillo en vez de un «de nada»." },
        change: "triste", recap: "Asustaste a Rubén con un cuchillo y te fuiste sin la pizza.",
      },
      "cuchillo-guardia": {
        text: { A: "El guardia te quita el cuchillo. Nadia llora de rabia. Rubén no dice nada.", B: "El guardia te quita el cuchillo y te pide los datos. Nadia respira con rabia; Rubén, con la muleta en las rodillas, no dice nada.", C: "El guardia te desarma de un cuchillo de fruta y te pide los datos. Nadia aprieta los dientes; Rubén mira al suelo, decepcionado de haberte dado las gracias." },
        change: "policia", recap: "Tu cuchillo asustó a Rubén y a Nadia, y el guardia de la clínica te retuvo.",
      },
      "cuchillo-venda": {
        text: { A: "Nadia usa tu cuchillo para cortar una venda nueva. Rubén se ríe. Todos hacen las paces.", B: "Nadia corta una venda nueva con tu cuchillo. Rubén se ríe aliviado y, entre los tres, hacen las paces.", C: "Nadia corta una venda con tu cuchillo, con una eficacia que nadie esperaba. Rubén se ríe aliviado; el duelo inicial queda en anécdota." },
        change: "sonrie", recap: "Después del susto del cuchillo, Nadia lo usó para cortar la venda de Rubén.",
      },
      "pistola-triste": {
        text: { A: "Te vas. Rubén baja las manos despacio. Está muy asustado.", B: "Te vas. Rubén baja las manos despacio y se queda temblando en el banco, con la tarjeta de pizza sin entregar.", C: "Te vas. Rubén baja las manos cuando doblas la esquina y se queda con una tarjeta de pizza que ya no sabe a quién dar." },
        change: "manos-arriba", recap: "Asustaste a Rubén con tu pistola y te fuiste.",
      },
      "pistola-guardia": {
        text: { A: "El guardia llama a la policía. Llega un patrullero. Revisan tu permiso. Rubén espera con Nadia.", B: "El guardia llama a la policía. Llega un patrullero y revisan tu permiso mientras Rubén y Nadia miran desde el banco.", C: "El guardia llama a la policía. Llega un patrullero que revisa tu permiso con lentitud burocrática mientras Rubén y Nadia comentan la noche más absurda de la clínica." },
        change: "policia", recap: "Tu pistola frente a la clínica terminó con la policía revisando tu permiso.",
      },
      "pistola-perdon": {
        text: { A: "Guardas la pistola. Rubén te perdona. Nadia no. Te vas sin pizza.", B: "Guardas la pistola. Rubén te perdona con un gesto; Nadia, no tanto. Te vas sin pizza.", C: "Guardas la pistola. Rubén te perdona con un cabeceo; Nadia, con una mirada que dice «ya veremos». Te vas sin pizza y con la lección aprendida." },
        change: "sigue", recap: "Pediste perdón a Rubén por la pistola y te fuiste.",
      },
      "granada-evacuan": {
        text: { A: "La policía evacúa la clínica. Un helicóptero vuela sobre la entrada. Rubén se va en silla de ruedas.", B: "La policía evacúa la entrada de la clínica y un helicóptero sobrevuela el estacionamiento. Rubén se va en silla de ruedas, quejándose de que su noche era mejor antes.", C: "Evacúan la entrada, un helicóptero ilumina el estacionamiento y Rubén sale en silla de ruedas, comentando que su esguince ya no es la peor noticia de la noche." },
        change: "helicoptero", recap: "Tu granada frente a la clínica provocó una evacuación con helicóptero.",
      },
      "granada-corre": {
        text: { A: "Corres con la granada. Rubén grita «¡La pizza, cancelada!» Nadie te sigue.", B: "Corres con la granada en la mano. Detrás, Rubén grita «¡La pizza queda cancelada!» Nadie te sigue, pero el guardia toma nota.", C: "Corres con la granada bajo el brazo. Detrás, Rubén anuncia la cancelación de la pizza; el guardia apunta tu descripción en una libreta." },
        change: "huye", recap: "Huiste de la clínica con la granada y perdiste la pizza.",
      },
      "granada-risa": {
        text: { A: "Rubén y Nadia se ríen mucho. Rubén dice: «¡Pizza gratis!» Todos se abrazan.", B: "Rubén y Nadia se ríen sin parar. Rubén anuncia pizza gratis por el susto y los tres terminan abrazados.", C: "Rubén y Nadia ríen hasta las lágrimas. Rubén anuncia pizza gratis por el infarto evitado; los tres terminan abrazados como supervivientes." },
        change: "abraza", recap: "Tu granada era un llavero y terminó en risas y pizza gratis con Rubén y Nadia.",
      },
      "gas-rociada": {
        text: { A: "Los enfermeros lavan los ojos de Nadia. Rubén espera, muy enojado. Te vas con la cabeza baja.", B: "Los enfermeros le lavan los ojos a Nadia mientras Rubén te mira, furioso, desde el banco. Te vas con la cabeza baja.", C: "Los enfermeros lavan los ojos de Nadia con agua abundante; Rubén te dedica una mirada que ya es un informe. Te vas con la cabeza baja." },
        change: "enojado", recap: "Rociaste a Nadia con gas pimienta sin querer frente a la clínica.",
      },
      "gas-clase": {
        text: { A: "Nadia te explica cómo lavar los ojos con agua. Rubén aplaude. Todos se ríen.", B: "Nadia te da una clase de primeros auxilios y Rubén aplaude. Terminan riéndose los tres, con el gas guardado.", C: "Nadia te da una clase breve sobre exposición a irritantes y Rubén aplaude como en un congreso. El gas pimienta, por fin, sirve para algo educativo." },
        change: "sonrie", recap: "Nadia te enseñó qué hacer si alguien recibe gas pimienta.",
      },
      "lapiz-tarjeta": {
        text: { A: "Tienes el número de Rubén en la mano. La pizza es tuya. Nadia firma la venda.", B: "Tienes el número de Rubén en la palma y una pizza gratis pendiente. En la venda, tu firma y la de Nadia.", C: "Tienes el número de Rubén en la palma y una pizza gratis pendiente. En la venda, dos firmas: la tuya y la de su médica." },
        change: "sonrie", recap: "Firmaste la venda de Rubén y quedaste en cobrar una pizza.",
      },
      "lapiz-retrato": {
        text: { A: "Dibujas a Nadia. Ella se lo queda. Rubén dice: «¡Qué bonita!»", B: "Dibujas a Nadia en un papel y ella se lo queda. Rubén lo enmarcaría ahora mismo.", C: "Dibujas a Nadia con unos pocos trazos. Ella se lo guarda en la bata; Rubén ya está buscando un marco." },
        change: "sonrie", recap: "Dibujaste un retrato de Nadia con tu lápiz.",
      },
      "libro-prestamo": {
        text: { A: "Rubén guarda el libro. «Me lo leo en dos semanas.» Nadia no lo cree.", B: "Rubén guarda el libro en la mochila. «Dos semanas, y lo termino.» Nadia levanta una ceja, escéptica.", C: "Rubén guarda el libro en la mochila con solemnidad. «Dos semanas.» Nadia levanta una ceja: conoce a su padre." },
        change: "sonrie", recap: "Le prestaste tu libro a Rubén para sus dos semanas de reposo.",
      },
      "libro-apuesta": {
        text: { A: "Nadia y tú apuestan una pizza. Rubén promete leer el libro entero.", B: "Nadia y tú cierran la apuesta con un apretón de manos. Rubén jura leer el libro entero antes de que le quiten la venda.", C: "Nadia y tú cierran la apuesta con un apretón de manos solemne. Rubén jura terminar el libro antes de que le quiten la venda; nadie confía en él." },
        change: "sonrie", recap: "Apostaste una pizza a que Rubén terminaría tu libro.",
      },
      "corazon-abrazo": {
        text: { A: "Rubén te abraza muy fuerte. Nadia se suma. Es un abrazo largo y torpe, con muleta.", B: "Rubén te abraza con todas sus fuerzas y Nadia se suma. Los tres, en la entrada de la clínica, con la muleta atrapada en medio.", C: "Rubén te abraza con la fuerza de quien ha aprendido que ayudar existe. Nadia se suma, y los tres quedan trabados con la muleta en medio." },
        change: "abraza", recap: "Rubén te abrazó emocionado al encontrarte en la clínica.",
      },
      "corazon-familia": {
        text: { A: "Nadia abraza a su papá. Rubén llora. Tú sonríes. La noche acaba bien.", B: "Nadia abraza a su papá y Rubén llora sin disimulo. Tú te quedas un paso atrás, sonriendo. La noche acaba bien.", C: "Nadia abraza a su padre y Rubén llora sin pudor. Tú das un paso atrás: la escena ya no te necesita, y eso es buena señal." },
        change: "abraza", recap: "Rubén y Nadia se reconciliaron con un abrazo gracias a ti.",
      },
      "corazon-cafe": {
        text: { A: "Rubén apunta tu número. «Café y pizza. Prometido.» Nadia sonríe.", B: "Rubén apunta tu número en el teléfono. «Café y pizza, el mismo día.» Nadia sonríe, por fin tranquila.", C: "Rubén te guarda como «Café y pizza pendientes (el héroe)». Nadia sonríe, por fin tranquila, y le quita el teléfono para corregir el nombre." },
        change: "sonrie", recap: "Quedaste con Rubén y Nadia para un café y una pizza.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces si alguien te asusta sin querer?", B: "¿Cuándo un malentendido arruinó un buen momento para ti?", C: "¿Qué hace falta para reparar un gesto torpe justo después de un agradecimiento?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Cómo reaccionas si ves una pistola?", B: "¿Qué harías si alguien a quien ayudaste te recibiera con miedo?", C: "¿Cuánto cuesta recuperar la confianza de alguien que te ha visto con un arma?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Cuándo gritas de miedo?", B: "¿Cuál fue la evacuación más absurda que viviste?", C: "¿Por qué un susto compartido acaba uniendo más que una larga conversación?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Tienes primeros auxilios en casa?", B: "¿Qué harías si rociaras a alguien sin querer?", C: "¿Qué responsabilidad tenemos cuando nuestra desconfianza hace daño a un inocente?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Escribes tu nombre en cosas de otras personas?", B: "¿Qué dedicatoria te gustaría recibir en una venda, un libro o una pared?", C: "¿Qué valor tienen las firmas improvisadas en los momentos de vulnerabilidad?" } },
      libro: { start: "libro-inicio", fx: "curioso", speak: { A: "¿Cuándo lees más: en casa o en la calle?", B: "¿Qué libro le regalarías a alguien que no suele leer?", C: "¿Qué hace que alguien que dice no leer acepte una novela a regañadientes?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Quién te abraza cuando estás muy emocionado?", B: "¿Cuándo fue la última vez que alguien te dio las gracias llorando?", C: "¿Qué dice de una persona su manera de agradecer una ayuda recibida?" } },
    },
    speak: {
      A1: "¿A quién ayudas en tu familia?",
      A2: "¿Qué favor te hizo alguien la semana pasada?",
      B1: "¿Cómo das las gracias cuando alguien te ayuda mucho?",
      B2: "¿Qué profesión elegirías si tuvieras que trabajar de noche?",
      C1: "¿Por qué a algunas personas les cuesta tanto aceptar un regalo o un favor?",
      C2: "¿Qué deudas, sin ser de dinero, crees que nunca terminamos de pagar?",
    },
  },

  // ───────────────────────────── ESCENA 4 ─────────────────────────────
  {
    id: "clinica-control",
    kind: "escena",
    district: "clinica",
    title: "Un policía te para",
    verb: "HABLAR",
    goal: "Responder con usted a una autoridad, explicar lo que uno lleva, pedir explicaciones con respeto y aclarar un malentendido con calma.",
    cast: [
      {
        id: "ferreyra", name: "Agente Ferreyra", role: "Policía de guardia",
        age: "adult", body: "f", build: "athletic", height: 1.74,
        hair: "bun", hairColor: "#141210", skin: "#7a4b2e",
        top: "uniform", topColor: "#1f3a6b", bottom: "pants", bottomColor: "#1f2a44",
        extras: ["hat"], pose: "arms", props: ["police-car", "blue-lamp"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "ferreyra", mood: "neutral",
        line: {
          A: "Una policía te para. «Buenas noches. Una persona sospechosa camina por aquí. ¿Qué lleva usted?»",
          B: "Una agente se pone delante de ti, bajo la lámpara azul de la comisaría. «Buenas noches. Nos avisaron de una persona sospechosa en la zona. ¿Me muestra qué lleva, por favor?»",
          C: "Una agente te corta el paso con una cortesía impecable. «Buenas noches. Hemos recibido un aviso sobre una persona sospechosa. ¿Le importa enseñarme qué lleva encima?»",
        },
        options: [
          {
            id: "cooperar",
            say: { A: "Claro. Llevo mis llaves y mi teléfono.", B: "Claro, sin problema. Solo llevo las llaves, el teléfono y la cartera.", C: "Por supuesto. Aunque le advierto que mi bolso es bastante decepcionante." },
            reply: { A: "Ferreyra mira y asiente. «Bien. ¿Adónde va?»", B: "La agente Ferreyra echa un vistazo y asiente. «Muy bien. Y dígame, ¿adónde se dirige?»", C: "Ferreyra mira el bolso y casi sonríe. «Decepcionante, confirmo. ¿Y adónde va, si no es indiscreción?»" },
            mood: "neutral", next: "preguntas",
          },
          {
            id: "porque",
            say: { A: "¿Por qué me para? ¿Pasó algo?", B: "Perdone, ¿por qué me para a mí? ¿Ha pasado algo?", C: "Con todo respeto, ¿puedo saber qué tengo yo de sospechoso?" },
            reply: { A: "Ferreyra explica: «Una vecina dice que alguien camina en círculos.»", B: "«Una vecina llamó: dice que alguien camina en círculos por la zona desde hace rato.»", C: "«Según una vecina, alguien lleva un buen rato caminando en círculos», dice Ferreyra. «Y usted encaja bastante.»" },
            mood: "neutral", next: "preguntas",
          },
          {
            id: "protestar",
            say: { A: "No hice nada. ¿Tengo que mostrar mis cosas?", B: "Perdone, pero no he hecho nada. ¿Es obligatorio mostrarle mis cosas?", C: "Entiendo que hace su trabajo, pero me gustaría saber si esto es obligatorio o una sugerencia." },
            reply: { A: "Ferreyra habla con calma. «No es obligatorio. Pero me ayuda mucho.»", B: "Ferreyra no se altera. «Es un control voluntario. Pero si colabora, terminamos en un minuto.»", C: "«Es una petición amable», dice Ferreyra. «Las sugerencias las dejo para los restaurantes.»" },
            mood: "neutral", next: "preguntas",
          },
        ],
        items: {
          lapiz: {
            act: { A: "Le muestras tu lápiz.", B: "Le enseñas lo único que llevas: un lápiz.", C: "Con toda solemnidad, le entregas tu lápiz." },
            say: { A: "Solo tengo un lápiz. ¿Es peligroso?", B: "Solo llevo un lápiz. Bueno, está bastante afilado.", C: "Este es todo mi arsenal. Confieso que está recién afilado." },
            reply: { A: "Ferreyra se ríe. «No, no es peligroso. ¿Usted escribe?»", B: "Ferreyra se relaja y se ríe. «Muy afilado, sí. ¿Usted escribe o algo así?»", C: "Ferreyra examina el lápiz con fingida seriedad. «Arma blanca de grafito. ¿Escribe usted, o solo amenaza a los cuadernos?»" },
            mood: "smile", next: "charla",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Sacas tu libro y se lo enseñas.", C: "Le enseñas tu libro, lo único sospechoso que llevas." },
            say: { A: "Solo tengo un libro.", B: "Solo llevo un libro. ¿Lo conoce?", C: "Mi único delito es este libro. Y no lo he terminado, así que todavía no sé si es culpable." },
            reply: { A: "Ferreyra mira el libro. «¡Yo leí este libro! Es muy bueno.»", B: "Ferreyra mira la tapa y se le ilumina la cara. «¡Lo leí el verano pasado! ¿Por qué parte va?»", C: "Ferreyra lee el título y baja la guardia. «Lo terminé el mes pasado. No le digo el final. Bueno, puede que sí.»" },
            mood: "smile", next: "charla",
          },
          gas: {
            act: { A: "Le muestras el gas pimienta.", B: "Le enseñas el gas pimienta, despacio.", C: "Sacas el gas pimienta con dos dedos, muy despacio." },
            say: { A: "Tengo esto. Es gas pimienta.", B: "Llevo esto: es gas pimienta. Se lo digo antes de que lo vea.", C: "Prefiero ser transparente: llevo gas pimienta." },
            reply: { A: "Ferreyra se pone seria. «¿Gas pimienta? ¿Por qué lo lleva?»", B: "Ferreyra levanta una ceja. «Gracias por decírmelo. ¿Y por qué lo lleva?»", C: "Ferreyra aprecia la franqueza, pero se cruza de brazos. «Le agradezco la transparencia. Ahora explíqueme el porqué.»" },
            mood: "worried", next: "gas",
          },
          granada: {
            act: { A: "Ferreyra ve tu granada.", B: "Abres el bolso y Ferreyra ve una granada.", C: "Abres el bolso y, entre las llaves, asoma una granada." },
            say: { A: "Eh… Esto no es lo que parece.", B: "Espere, puedo explicarlo. No es lo que parece.", C: "Antes de que diga nada: esto tiene una explicación muy aburrida." },
            reply: { A: "Ferreyra da un paso atrás. «¿Una granada? ¡No se mueva!»", B: "Ferreyra da un paso atrás, muy seria. «No se mueva. ¿Eso es una granada?»", C: "Ferreyra retrocede sin perder la calma. «Dígame que es de juguete. Y dígamelo muy despacio.»" },
            mood: "scared", next: "tension",
          },
          pistola: {
            act: { A: "Ferreyra ve tu pistola.", B: "Al abrir la chaqueta, Ferreyra ve la pistola.", C: "Al abrir la chaqueta, la pistola queda a la vista de la agente." },
            say: { A: "Perdón. Puedo explicarlo.", B: "Perdone, sé que se ve mal. Puedo explicarlo.", C: "Sé exactamente lo que parece. Le pido un minuto para explicarlo." },
            reply: { A: "Ferreyra levanta la mano. «Tranquilidad. Las manos donde yo las veo.»", B: "Ferreyra levanta una mano, firme. «Con calma. Manos donde yo pueda verlas, por favor.»", C: "Ferreyra no pierde la compostura. «Tendrá su minuto. Pero primero, manos a la vista.»" },
            mood: "scared", next: "tension",
          },
          cuchillo: {
            act: { A: "Ferreyra ve tu cuchillo.", B: "En el bolso, Ferreyra ve un cuchillo.", C: "Abres el bolso y el cuchillo brilla bajo la luz fría de la comisaría." },
            say: { A: "Es para cortar fruta. De verdad.", B: "Es para cortar fruta, de verdad. Siempre llevo una manzana.", C: "Es para la fruta, aunque reconozco que la manzana ya no está." },
            reply: { A: "Ferreyra se pone seria. «¿Para fruta? Deje el bolso en el suelo, por favor.»", B: "Ferreyra no sonríe. «¿Y dónde está la fruta? Deje el bolso en el suelo, por favor.»", C: "«La manzana desaparecida», dice Ferreyra, seria. «Deje el bolso en el suelo y hablamos.»" },
            mood: "worried", next: "tension",
          },
          corazon: {
            act: CORAZON,
            say: { A: "Buenas noches. Usted parece cansada. ¿Una noche larga?", B: "Buenas noches. Parece cansada. ¿Larga la noche?", C: "Buenas noches. Perdone, pero tiene cara de turno eterno." },
            reply: { A: "Ferreyra se ríe. «Muy larga. Y muy aburrida. Por eso lo paré, la verdad.»", B: "Ferreyra suelta una carcajada. «¿Se nota? Le confieso algo: estoy tan aburrida que paro a cualquiera.»", C: "Ferreyra se ríe, desarmada. «¿Tanto se me nota? Se lo confieso: el aviso es dudoso y yo me aburro mortalmente.»" },
            mood: "love", next: "charla",
          },
        },
      },
      preguntas: {
        who: "ferreyra", mood: "neutral",
        line: {
          A: "Ferreyra pregunta: «¿Adónde va? ¿Por qué camina en círculos?»",
          B: "«Dígame, ¿qué hace por aquí a esta hora? Según la vecina, lleva un rato dando vueltas.»",
          C: "«A ver si lo entiendo», dice Ferreyra. «Son las tantas, usted da vueltas por un estacionamiento y no lleva nada interesante. ¿Me lo explica?»",
        },
        options: [
          {
            id: "pasear",
            say: { A: "Estoy de paseo. Me gusta la ciudad de noche.", B: "Estoy conociendo la ciudad. De noche es muy diferente y me gusta caminar.", C: "Estoy explorando. La ciudad de noche cuenta cosas que de día no dice." },
            reply: { A: "Ferreyra asiente. «Bien. Pero tenga cuidado, ¿sí?»", B: "«Me parece bien. Pero vaya por calles iluminadas, ¿de acuerdo?»", C: "«Qué poético», dice Ferreyra. «Explore, pero por calles con luz, que la poesía a oscuras se tropieza.»" },
            mood: "smile", end: "camino",
          },
          {
            id: "perdida",
            say: { A: "La verdad, no sé dónde estoy. ¿Me ayuda?", B: "Si le digo la verdad, no sé dónde estoy. Por eso doy vueltas. ¿Me puede ayudar?", C: "Para ser honestos: no doy vueltas por gusto. Llevo media hora sin saber dónde estoy." },
            reply: { A: "Ferreyra sonríe. «Ah, ¡por eso! Venga conmigo.»", B: "Ferreyra sonríe, aliviada. «¡Misterio resuelto! Venga, le muestro el camino a la avenida.»", C: "«Ahí está la persona sospechosa», dice Ferreyra. «Desorientación. Caso cerrado. Venga conmigo.»" },
            mood: "smile", end: "acompana",
          },
          {
            id: "circulos",
            say: { A: "Busco círculos blancos en el suelo. Es un juego.", B: "Es que busco unos círculos blancos en el suelo. Es como un juego.", C: "Busco círculos blancos en el suelo. Ya sé cómo suena." },
            reply: { A: "Ferreyra mira el suelo. «¿Círculos? Ah… sí, hay uno aquí.»", B: "Ferreyra mira el suelo, desconcertada. «¿Círculos? Pues… ahora que lo dice, hay uno justo aquí.»", C: "Ferreyra mira hacia abajo. Hay un círculo blanco a sus pies. «Vaya. Llevo seis horas aquí y nunca lo había visto.»" },
            mood: "surprised", next: "charla",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Gracias por cuidar el barrio. Es un trabajo difícil.", B: "Le agradezco que cuide el barrio. No debe de ser fácil trabajar de noche.", C: "Supongo que nadie le da las gracias por estar aquí toda la noche. Pues gracias." },
            reply: { A: "Ferreyra sonríe. «Gracias. Nadie me dice eso.»", B: "Ferreyra se queda un segundo callada. «Gracias. No me lo dicen casi nunca.»", C: "Ferreyra tarda en contestar. «Pues no, nadie. Me ha alegrado la noche, y eso que la noche era larga.»" },
            mood: "love", next: "charla",
          },
        },
      },
      charla: {
        who: "ferreyra", mood: "smile",
        line: {
          A: "Ferreyra está más tranquila. «Esta noche no pasa nada. Solo un gato en un techo.»",
          B: "Ferreyra se apoya en el coche patrulla. «Doce horas de turno y lo más emocionante fue un gato en un techo. Hasta que llegó usted.»",
          C: "Ferreyra se apoya en el patrullero, ya sin protocolo. «Doce horas de guardia. Hoy rescaté un gato y ahora investigo a una persona que busca círculos. Una carrera brillante.»",
        },
        options: [
          {
            id: "trabajo",
            say: { A: "¿Le gusta su trabajo?", B: "¿Y por qué decidió ser policía?", C: "Pregunta indiscreta: ¿esto es lo que imaginaba cuando entró en la policía?" },
            reply: { A: "«Sí. Me gusta ayudar. Pero de noche es aburrido.»", B: "«Por mi abuelo, que era policía. Me gusta ayudar, aunque de noche esto es muy aburrido.»", C: "«Imaginaba persecuciones», confiesa. «Tengo gatos, llaves perdidas y un señor que canta tangos a las cuatro.»" },
            mood: "smile", end: "camino",
          },
          {
            id: "recomendar",
            act: { A: "Señalas la máquina de café de la clínica.", B: "Señalas la máquina de café de la clínica.", C: "Señalas la máquina de café de la clínica, al otro lado." },
            say: { A: "Hay café en la clínica. ¿Quiere uno? Yo invito.", B: "¿Quiere que le traiga un café de la máquina? Invito yo.", C: "¿Me permite invitarle a un café de máquina? No es bueno, pero es caliente." },
            reply: { A: "Ferreyra sonríe. «Gracias. Con mucha azúcar.»", B: "«No debería… pero sí, gracias. Con mucha azúcar, que el turno es largo.»", C: "«Técnicamente no debería aceptar nada», dice Ferreyra. «Pero técnicamente tampoco debería aburrirme tanto. Con azúcar.»" },
            mood: "smile", end: "camino",
          },
          {
            id: "acompaname",
            say: { A: "¿Me acompaña a la avenida? No conozco bien la zona.", B: "¿Me acompañaría hasta la avenida? No conozco bien la zona.", C: "Ya que está aburrida, ¿me escolta hasta la avenida? Así hace algo emocionante." },
            reply: { A: "«Sí, claro. Vamos.»", B: "«Claro que sí. Así estiro las piernas.»", C: "«Una escolta oficial», dice Ferreyra, ajustándose la gorra. «Lo más emocionante de mi semana.»" },
            mood: "smile", end: "acompana",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted es muy simpática. ¿Quiere caminar un poco conmigo?", B: "Es usted muy simpática. Si quiere, camino un rato con usted y le hago compañía.", C: "Le propongo un trato: yo le hago compañía cinco minutos y usted me cuenta lo del señor del tango." },
            reply: { A: "Ferreyra se ríe. «¡Sí! Vamos. Le cuento cosas del barrio.»", B: "«Encantada», dice Ferreyra. «Le cuento los secretos del barrio. Bueno, los que puedo contar.»", C: "Ferreyra se ríe de verdad. «Trato hecho. El señor del tango merece una novela. Venga.»" },
            mood: "love", end: "acompana",
          },
        },
      },
      gas: {
        who: "ferreyra", mood: "worried",
        line: {
          A: "Ferreyra mira el gas pimienta. «¿Por qué lleva esto?»",
          B: "Ferreyra sostiene el gas pimienta y lo mira. «Necesito que me explique por qué lo lleva.»",
          C: "Ferreyra gira el gas pimienta entre los dedos. «Le escucho. ¿Por qué una persona que pasea lleva esto?»",
        },
        options: [
          {
            id: "defensa",
            say: { A: "Camino sola de noche. Tengo miedo a veces.", B: "Camino mucho sola de noche y a veces tengo miedo. Es para defenderme, nada más.", C: "Porque camino sola de noche y prefiero no depender de la suerte. Es defensivo, nada más." },
            reply: { A: "Ferreyra lo entiende. «Bien. Pero úselo solo en peligro, ¿sí?»", B: "Ferreyra asiente despacio. «Lo entiendo. Pero úselo solo si de verdad está en peligro.»", C: "«Lo entiendo perfectamente», dice Ferreyra. «Solo recuerde: es para escapar, no para discutir.»" },
            mood: "neutral", end: "camino",
          },
          {
            id: "legal",
            say: { A: "¿Es legal? No sé.", B: "¿Es legal llevarlo? Sinceramente, no lo sé.", C: "Le pregunto de buena fe: ¿es legal llevarlo aquí?" },
            reply: { A: "Ferreyra anota algo. «Aquí sí, con límites. Le explico.»", B: "Ferreyra saca una libreta. «Aquí está permitido, con condiciones. Le explico cuáles y lo anoto.»", C: "«Depende del tamaño y del uso», dice Ferreyra, sacando la libreta. «Le explico y dejo constancia.»" },
            mood: "neutral", end: "informe",
          },
          {
            id: "entregar",
            say: { A: "Si quiere, se lo doy.", B: "Si le preocupa, se lo entrego. No pasa nada.", C: "Si le incomoda, se lo quedo de recuerdo. Bueno, se lo queda usted." },
            reply: { A: "Ferreyra lo guarda. «Gracias. Escribo un informe.»", B: "Ferreyra lo guarda en una bolsa. «Gracias por colaborar. Tengo que hacer un pequeño informe.»", C: "Ferreyra lo mete en una bolsa. «Muy amable. Ahora viene la parte que nadie envidia: el informe.»" },
            mood: "neutral", end: "informe",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Una vez tuve mucho miedo en la calle. Desde ese día lo llevo.", B: "Hace un año alguien me siguió por la calle. Desde entonces lo llevo y salgo con menos miedo.", C: "Una noche me siguieron tres cuadras. No pasó nada, pero desde entonces lo llevo." },
            reply: { A: "Ferreyra le devuelve el gas. «Lo entiendo. A mí también me pasó.»", B: "Ferreyra le devuelve el gas con suavidad. «Lo entiendo. A mí me pasó algo parecido antes de ser policía.»", C: "Ferreyra le devuelve el gas. «Lo entiendo mejor de lo que cree. Por eso, en parte, llevo este uniforme.»" },
            mood: "love", next: "charla",
          },
        },
      },
      tension: {
        who: "ferreyra", mood: "scared",
        line: {
          A: "Ferreyra está muy seria. «Despacio. Ponga eso en el suelo.»",
          B: "Ferreyra mantiene la distancia y habla muy despacio. «Despacio. Deje eso en el suelo y dé un paso atrás.»",
          C: "Ferreyra no levanta la voz, lo cual es peor. «Muy despacio. Déjelo en el suelo y dé un paso atrás. Y luego hablamos.»",
        },
        options: [
          {
            id: "obedecer",
            act: { A: "Lo dejas en el suelo, despacio.", B: "Lo dejas en el suelo muy despacio y das un paso atrás.", C: "Lo depositas en el suelo con la delicadeza de quien deja un pastel de bodas." },
            say: { A: "Ya está. Es un juguete. Mírelo, por favor.", B: "Ya está en el suelo. Es un juguete, se lo prometo. Puede comprobarlo.", C: "Listo. Compruébelo usted misma: el único peligro es para mi reputación." },
            reply: { A: "Ferreyra lo mira. «Es de plástico. Bueno… tengo que escribir un informe.»", B: "Ferreyra lo examina. «De plástico. Bueno, menos mal. Igual tengo que hacer un informe.»", C: "Ferreyra lo examina y suspira. «Plástico. Su reputación sobrevivirá. Mi papeleo, no tanto.»" },
            mood: "neutral", end: "informe",
          },
          {
            id: "teatro",
            say: { A: "Es para una obra de teatro. El teatro está aquí cerca.", B: "Es utilería de teatro. Ensayamos en la sala de la esquina. Si quiere, la acompaño y lo comprueba.", C: "Es utilería: ensayamos en el teatro de la esquina. Le propongo que me escolte y lo compruebe con sus propios ojos." },
            reply: { A: "Ferreyra piensa. «Bueno. Vamos al teatro.»", B: "Ferreyra lo piensa. «De acuerdo. Usted delante, yo detrás. Y el objeto, lo llevo yo.»", C: "«Me parece razonable», dice Ferreyra. «Usted delante, el objeto conmigo y, si es verdad, me quedo al ensayo.»" },
            mood: "worried", end: "acompana",
          },
          {
            id: "nervios",
            say: { A: "Perdón, tengo muchos nervios. ¿Qué hago?", B: "Perdone, tengo muchos nervios. Dígame qué tengo que hacer y lo hago.", C: "Le pido disculpas, estoy temblando. Usted me dice qué hacer y yo obedezco." },
            reply: { A: "Ferreyra habla por la radio. «Pido un auto, por favor.»", B: "Ferreyra habla por la radio sin quitarte los ojos de encima. «Necesito un móvil en la comisaría, por favor.»", C: "«No se mueva y todo irá bien», dice Ferreyra, y habla por la radio. «Pido apoyo. Nada urgente, pero pido apoyo.»" },
            mood: "worried", end: "refuerzos",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Lo siento mucho. Es un juguete. No quiero problemas.", B: "Lo siento muchísimo. Es un juguete, de verdad. Lo último que quiero es asustarla.", C: "Le pido perdón. Es de juguete, y entiendo perfectamente el susto que le acabo de dar." },
            reply: { A: "Ferreyra lo mira y se ríe. «Es de plástico. ¡Mi hijo tiene uno igual!»", B: "Ferreyra lo examina y se le escapa la risa. «De plástico. Mi hijo tiene uno igual. Casi me da algo.»", C: "Ferreyra lo comprueba y suelta el aire. «Mi hijo tiene uno idéntico. Le juro que me ha quitado un año de vida.»" },
            mood: "love", next: "charla",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "ferreyra", mood: "furious",
        line: {
          A: "Ferreyra ve el cuchillo y da un paso atrás. Su mano va a la pistola. «¡Suelte eso! ¡Ahora! ¿Está loco?»",
          B: "Ferreyra ve el cuchillo y retrocede un paso. Su mano baja hacia la cartuchera. «¡Suelte eso ahora mismo! ¿Qué hace con un cuchillo delante de una comisaría?»",
          C: "Ferreyra ve brillar el cuchillo bajo la lámpara azul y su cortesía desaparece de golpe. «Suéltelo. Despacio. ¿Qué pretende con eso a veinte metros de una comisaría?»",
        },
        options: [
          {
            id: "soltar",
            act: { A: "Dejas el cuchillo en el suelo, despacio.", B: "Dejas el cuchillo en el suelo y levantas las manos.", C: "Depositas el cuchillo en el suelo y levantas las manos con teatralidad." },
            say: { A: "Ya está. Es para la fruta.", B: "Ya está en el suelo. Es para pelar fruta, lo juro.", C: "Ya está en el suelo. Es para la fruta; el único delito aquí es el mío." },
            reply: { A: "Ferreyra lo aparta con el pie. «Bien. Ahora hablamos.»", B: "Ferreyra lo aparta con el pie sin quitarte los ojos de encima. «Bien. Ahora, con calma, hablamos.»", C: "Ferreyra aparta el cuchillo con la bota. «Una decisión inteligente. Ahora hablamos, y usted explica.»" },
            mood: "worried", next: "cuchillo-suelo",
          },
          {
            id: "calmar",
            say: { A: "Tranquila. No quiero hacer daño a nadie.", B: "Tranquila, agente. No voy a hacer daño a nadie. Mire, bajo la mano.", C: "Calma, agente. Nadie va a salir herido. Voy a bajar el brazo muy despacio." },
            reply: { A: "Ferreyra grita: «¡Al suelo, ya!» Llega un compañero.", B: "Ferreyra no se fía. Grita: «¡Al suelo, ahora!» Otro agente sale corriendo de la comisaría.", C: "Ferreyra no baja la guardia. «¡Al suelo, ya!» Un segundo agente sale de la comisaría a toda prisa." },
            mood: "terror", end: "cuchillo-reduccion",
          },
          {
            id: "huir",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón! ¡Fue un error! ¡Me voy!", C: "¡Error mío! ¡Me retiro!" },
            reply: { A: "Corres. Ferreyra grita: «¡Alto!» y suena una sirena.", B: "Echas a correr. Ferreyra grita «¡Alto!» y detrás suena una sirena.", C: "Echas a correr, lo cual es la peor idea posible. Ferreyra grita «¡Alto!» y una sirena arranca a tus espaldas." },
            mood: "terror", end: "cuchillo-persecucion",
          },
        ],
      },
      "cuchillo-suelo": {
        who: "ferreyra", mood: "worried",
        line: {
          A: "Ferreyra mira el cuchillo en el suelo. «Es un cuchillo de cocina. ¿Por qué lo lleva en la calle?»",
          B: "Ferreyra se agacha sin quitarte la vista de encima. «Es un cuchillo de cocina. ¿Por qué lo lleva encima, a estas horas, en la calle?»",
          C: "Ferreyra examina el cuchillo sin tocarlo. «Hoja de veinte centímetros, mango de cocina. Dígame por qué lo lleva en un bolso, de noche, junto a una comisaría.»",
        },
        options: [
          {
            id: "fruta",
            say: { A: "Es para fruta. Mi cena es una manzana.", B: "Es para la fruta. Mi cena de hoy era una manzana, la que me falta.", C: "Es para la fruta. Mi cena era una manzana. Lo del cuchillo, un exceso de cocinero." },
            reply: { A: "Ferreyra casi sonríe. «Bueno. Lo guardo. Un informe, nada más.»", B: "Ferreyra casi sonríe. «Una cena triste. Me quedo el cuchillo y hago un informe. Se lo devuelven mañana.»", C: "Ferreyra aguanta la sonrisa. «Cena triste, explicación pobre. Me quedo el cuchillo y redacto un informe. Mañana se lo devuelven.»" },
            mood: "neutral", end: "cuchillo-informe",
          },
          {
            id: "miedo",
            say: { A: "Tengo miedo de noche. Lo llevo por eso.", B: "Salgo sola de noche y tengo miedo. Lo llevo por eso, nada más.", C: "Camino sola de noche y prefiero no depender de la suerte. Lo llevo por eso." },
            reply: { A: "Ferreyra suspira. «Hay otras formas. Venga conmigo.»", B: "Ferreyra suspira y baja la voz. «Entiendo el miedo, pero un cuchillo no es la solución. Venga conmigo y hablamos de otras opciones.»", C: "Ferreyra baja la voz. «El miedo es legítimo; el método, no. Venga conmigo: hay maneras mejores de volver a casa.»" },
            mood: "neutral", end: "cuchillo-acompana",
          },
          {
            id: "otro",
            say: { A: "Un hombre me siguió. Tuve miedo.", B: "Un hombre me estaba siguiendo. Saqué el cuchillo por reflejo. Está allí.", C: "Un hombre me seguía desde hace tres cuadras. Saqué el cuchillo por puro reflejo. Mire, allí." },
            reply: { A: "Ferreyra mira. Hay un hombre con otro cuchillo. «¡Policía!»", B: "Ferreyra se gira. A diez metros hay un hombre con otro cuchillo en la mano. «¡Policía! ¡Suelte eso!»", C: "Ferreyra se gira. A diez metros hay, efectivamente, un hombre con otro cuchillo. «¡Policía! ¡Suéltelo!» Por una vez, tu historia es cierta." },
            mood: "scared", end: "cuchillo-duelo",
          },
        ],
      },
      "pistola-inicio": {
        who: "ferreyra", mood: "furious",
        line: {
          A: "Ferreyra ve la pistola y saca la suya. «¡Alto! ¡Las manos arriba! ¡Ahora!»",
          B: "Ferreyra ve la pistola y desenfunda la suya. «¡Policía! ¡Las manos donde pueda verlas! ¡Ya!»",
          C: "Ferreyra ve la pistola y, en un segundo, la suya está en su mano. «¡Policía! ¡Manos a la vista y no se mueva! ¡Ahora!»",
        },
        options: [
          {
            id: "manos",
            act: { A: "Levantas las manos.", B: "Levantas las manos muy despacio.", C: "Levantas las manos, con el corazón en la garganta." },
            say: { A: "No disparo. Es de juguete.", B: "No voy a hacer nada. Es de juguete, se lo juro.", C: "No voy a moverme. Es de utilería; compruébelo cuando quiera." },
            reply: { A: "Ferreyra se acerca. «Quieto. La saco yo.» La examina.", B: "Ferreyra se acerca sin bajar el arma. «Quieto. La saco yo.» La examina con cuidado.", C: "Ferreyra avanza paso a paso. «Quieto. La retiro yo.» La examina bajo la lámpara azul, sin apartar el dedo del gatillo de la suya." },
            mood: "terror", next: "pistola-registro",
          },
          {
            id: "permiso",
            say: { A: "Soy policía también. Mi placa está en el bolsillo.", B: "Soy policía de paisano. Mi placa está en el bolsillo interior.", C: "Soy agente de paisano. Mi placa está en el bolsillo interior, si me permite sacarla." },
            reply: { A: "Ferreyra duda. «No se mueva. La saco yo.»", B: "Ferreyra duda un segundo. «No se mueva. Yo saco la placa.» Busca en tu bolsillo.", C: "Ferreyra duda un segundo. «No se mueva. Yo busco la placa.» Registra tu bolsillo con una mano, sin bajar el arma." },
            mood: "terror", next: "pistola-registro",
          },
          {
            id: "huir",
            say: { A: "¡No dispare! ¡Me voy!", B: "¡No dispare! ¡Me voy, me voy!", C: "¡No dispare! ¡Me retiro ahora mismo!" },
            reply: { A: "Corres. Ferreyra grita: «¡Alto!» y llama refuerzos.", B: "Echas a correr. Ferreyra grita «¡Alto!» y llama refuerzos por la radio.", C: "Echas a correr, decisión pésima. Ferreyra grita «¡Alto, policía!» y pide refuerzos por la radio." },
            mood: "terror", end: "pistola-persecucion",
          },
        ],
      },
      "pistola-registro": {
        who: "ferreyra", mood: "worried",
        line: {
          A: "Ferreyra mira la pistola. «Es de plástico. Pero casi me da algo. ¿Por qué la lleva?»",
          B: "Ferreyra examina la pistola. «De plástico. Pero casi me da un infarto. ¿Por qué diablos la lleva encima?»",
          C: "Ferreyra gira la pistola entre los dedos. «Plástico. Muy buen acabado, por cierto. Casi le dedico una bala por puro nervio. ¿Qué hace con esto?»",
        },
        options: [
          {
            id: "teatro",
            say: { A: "Es de una obra de teatro. Lo siento.", B: "Es de una obra de teatro. Ensayamos en la esquina. Lo siento muchísimo.", C: "Es de una obra de teatro. Ensayamos aquí cerca. Le pido mil disculpas." },
            reply: { A: "Ferreyra guarda su arma. «Un informe. Y no la saque más.»", B: "Ferreyra guarda su arma con alivio. «Un informe, y nunca más la saca en la calle, ¿entendido?»", C: "Ferreyra enfunda su arma y suspira. «Informe, advertencia y una promesa: no vuelva a pasearse así. Esta noche tuvo suerte.»" },
            mood: "neutral", end: "pistola-informe",
          },
          {
            id: "culpa",
            say: { A: "Fue una tontería. Perdón.", B: "Fue una tontería muy grande. Perdón, agente.", C: "Fue una imprudencia mayúscula. Le pido perdón, agente." },
            reply: { A: "Ferreyra respira. «Venga conmigo. Hablamos en la comisaría.»", B: "Ferreyra respira hondo. «Venga conmigo. Lo hablamos en la comisaría, con un café.»", C: "Ferreyra respira. «Venga conmigo. Lo aclaramos en la comisaría, y con suerte con un café que no sea de máquina.»" },
            mood: "neutral", end: "pistola-comisaria",
          },
          {
            id: "broma",
            say: { A: "¿Se asustó mucho? Yo también.", B: "¿Se asustó mucho? Yo también me asusté, créame.", C: "¿Se asustó mucho? Le aseguro que yo más." },
            reply: { A: "Ferreyra no se ríe. «Mucho. Llamo un auto.»", B: "Ferreyra no se ríe. «Muchísimo. Voy a pedir un coche patrulla.»", C: "Ferreyra no se ríe, pero tampoco te corrige. «Bastante. Pido un patrullero, por protocolo.»" },
            mood: "angry", end: "refuerzos",
          },
        ],
      },
      "granada-inicio": {
        who: "ferreyra", mood: "terror",
        line: {
          A: "Ferreyra ve la granada y grita. «¡Granada! ¡Todos atrás! ¡Evacuen la calle!» Corre hacia la comisaría.",
          B: "Ferreyra ve la granada y grita por la radio. «¡Granada en la vía pública! ¡Evacuen la zona!» Retrocede hacia la comisaría sin darte la espalda.",
          C: "Ferreyra ve la granada y su voz profesional sube dos octavas. «¡Granada! ¡Todas las unidades! ¡Evacuación inmediata!» Retrocede hacia la comisaría sin dejar de apuntarte.",
        },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Es de plástico!", B: "¡Espere! ¡Es de juguete, de plástico! ¡No pasa nada!", C: "¡Espere! Es de utilería. Plástico. Puede comprobarlo." },
            reply: { A: "Ferreyra duda. «¡Déjela en el suelo! ¡Lejos!»", B: "Ferreyra duda un segundo. «Déjela en el suelo y aléjese. ¡Despacio!»", C: "Ferreyra no se fía. «La deja en el suelo y se aleja. Despacio. El artificiero decidirá si es utilería.»" },
            mood: "terror", next: "granada-artificiero",
          },
          {
            id: "suelo",
            act: { A: "Dejas la granada en el suelo.", B: "Dejas la granada en el suelo y retrocedes.", C: "Depositas la granada en el suelo y retrocedes con las manos abiertas." },
            say: { A: "Ya está. No me muevo.", B: "Ya está en el suelo. No me muevo.", C: "Ya está en el suelo. No me muevo ni parpadeo." },
            reply: { A: "Ferreyra grita por la radio. Sale toda la comisaría.", B: "Ferreyra pide apoyo por la radio. De la comisaría sale medio turno de agentes.", C: "Ferreyra pide apoyo por la radio. De la comisaría sale medio turno, y a ti ya te rodean seis uniformes." },
            mood: "terror", next: "granada-artificiero",
          },
          {
            id: "huir",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón! ¡Fue un error! ¡Me voy!", C: "¡Error mío! ¡Me retiro!" },
            reply: { A: "Corres. Ferreyra grita: «¡Alto, policía!» Arranca un helicóptero.", B: "Echas a correr. Ferreyra grita «¡Alto, policía!» y un helicóptero ilumina la calle.", C: "Echas a correr con una granada en la mano, otra decisión brillante. Ferreyra grita «¡Alto!» y un helicóptero te encuentra enseguida." },
            mood: "terror", end: "granada-helicoptero",
          },
        ],
      },
      "granada-artificiero": {
        who: "ferreyra", mood: "furious",
        line: {
          A: "Llega el equipo de bombas. Ferreyra no te quita el ojo. «Si es de verdad, lo sabremos ahora. ¿Por qué la lleva?»",
          B: "Llega el equipo de artificieros con un traje enorme. Ferreyra no te quita el ojo. «Si es de verdad, lo sabremos en un minuto. ¿Por qué la lleva encima?»",
          C: "Llega un artificiero con un traje de astronauta. Ferreyra no te quita el ojo de encima. «En un minuto sabremos si es real. Mientras tanto, explíqueme por qué la lleva.»",
        },
        options: [
          {
            id: "broma",
            say: { A: "Era una broma. Una tontería.", B: "Era una broma. Una tontería enorme, lo reconozco.", C: "Era una broma. Una de las peores ideas de mi vida, y lo digo con conocimiento de causa." },
            reply: { A: "Ferreyra aprieta la mandíbula. «Una broma. Muy cara.»", B: "Ferreyra aprieta la mandíbula. «Una broma. Con helicóptero y todo: va a salir muy cara.»", C: "Ferreyra respira por la nariz. «Una broma. Con helicóptero, evacuación y dos patrullas. La más cara del trimestre.»" },
            mood: "furious", end: "granada-helicoptero",
          },
          {
            id: "artificio",
            say: { A: "Es plástico. El experto lo va a confirmar.", B: "Es de plástico. Su experto lo va a confirmar enseguida.", C: "Es plástico puro. Su experto lo confirmará en cuestión de segundos." },
            reply: { A: "El artificiero la mira y asiente. «Plástico.» Ferreyra suspira.", B: "El artificiero la examina y asiente. «Plástico, jefa.» Ferreyra suspira muy despacio.", C: "El artificiero la examina y dice con voz amortiguada: «Plástico.» Ferreyra cierra los ojos un segundo. Un segundo largo." },
            mood: "neutral", end: "granada-informe",
          },
          {
            id: "disculpa",
            say: { A: "Perdón. No quería asustar a nadie.", B: "Le pido perdón. No quería asustar a nadie.", C: "Le pido perdón, agente. Asustar a toda una cuadra no entraba en mis planes." },
            reply: { A: "Ferreyra relaja los hombros. «Ahora, el informe.»", B: "Ferreyra relaja los hombros, apenas. «Ahora viene el informe. Largo.»", C: "Ferreyra relaja los hombros, apenas. «Aprecio la disculpa. Ahora, el informe: va a ser largo.»" },
            mood: "neutral", end: "granada-informe",
          },
        ],
      },
      "gas-inicio": {
        who: "ferreyra", mood: "surprised",
        line: {
          A: "Ferreyra ve el gas pimienta. «Ah. ¿Gas pimienta? Muchas personas lo llevan. ¿Por qué lo lleva usted?»",
          B: "Ferreyra mira el gas pimienta con curiosidad. «Gas pimienta. Es legal con límites, y mucha gente lo lleva de noche. ¿Es su caso?»",
          C: "Ferreyra mira el gas pimienta con cierta resignación profesional. «Gas pimienta. Legal con límites, y casi un accesorio de la ciudad. ¿Es su caso?»",
        },
        options: [
          {
            id: "defensa",
            say: { A: "Sí. Camino sola de noche.", B: "Sí. Camino mucho sola de noche y me siento más segura.", C: "Sí. Camino sola de noche y prefiero no depender de la suerte." },
            reply: { A: "Ferreyra asiente. «Es razonable. Solo para escapar.»", B: "Ferreyra asiente. «Es razonable. Pero úselo para escapar, nunca para discutir.»", C: "Ferreyra asiente. «Razonable. Una cosa: es para escapar, no para discutir.»" },
            mood: "neutral", next: "gas-consejo",
          },
          {
            id: "ladron",
            say: { A: "Alguien me siguió ayer. Tengo miedo.", B: "Alguien me siguió ayer por esta zona. Todavía tengo miedo.", C: "Alguien me siguió ayer por esta misma zona. Desde entonces llevo esto y no duermo bien." },
            reply: { A: "Ferreyra anota. «Dígame cómo era. Voy a revisar cámaras.»", B: "Ferreyra saca la libreta. «Cuénteme cómo era esa persona. Revisaré las cámaras de la zona.»", C: "Ferreyra saca la libreta. «Cuénteme todo lo que recuerde. Las cámaras de esta zona pueden ayudar.»" },
            mood: "worried", next: "gas-consejo",
          },
          {
            id: "amenaza",
            say: { A: "Es para quien se me acerque.", B: "Es para quien se me acerque demasiado. Y usted está muy cerca.", C: "Es para quien se acerque demasiado, agente. Y usted, con respeto, está muy cerca." },
            reply: { A: "Ferreyra levanta una ceja. «Cuidado con eso. Se lo quito.»", B: "Ferreyra levanta una ceja y da un paso atrás. «Cuidado con lo que dice. Voy a quedarme el aerosol.»", C: "Ferreyra levanta una ceja. «Cuidado con el tono, que está hablando con una policía. Me quedo el aerosol.»" },
            mood: "angry", end: "gas-confisca",
          },
        ],
      },
      "gas-consejo": {
        who: "ferreyra", mood: "smile",
        line: {
          A: "Ferreyra se relaja. «Le doy un consejo: camine por calles con luz. Y si alguien la sigue, venga a la comisaría.»",
          B: "Ferreyra se relaja. «Un consejo: camine por calles con luz y, si alguien la sigue, entre en la comisaría. Las puertas están abiertas toda la noche.»",
          C: "Ferreyra se relaja y se apoya en el patrullero. «Un consejo de colega nocturna: calles con luz, teléfono a mano y, ante la duda, esta puerta. Está abierta toda la noche.»",
        },
        options: [
          {
            id: "gracias",
            say: { A: "Gracias. Me siento más tranquila.", B: "Muchas gracias. Me siento mucho más tranquila.", C: "Gracias, de verdad. Hacía tiempo que nadie me tranquilizaba tanto." },
            reply: { A: "Ferreyra sonríe. «Para eso estamos. Buenas noches.»", B: "Ferreyra sonríe. «Para eso estamos. Vaya con cuidado y buenas noches.»", C: "Ferreyra sonríe. «Para eso estamos, aunque nadie lo recuerde hasta que hace falta. Buenas noches.»" },
            mood: "smile", end: "gas-camino",
          },
          {
            id: "entregar",
            say: { A: "Mejor se lo doy. Con usted me siento segura.", B: "Mejor se lo entrego. Con usted cerca me siento segura.", C: "Mejor se lo entrego. Con la policía a veinte metros, el aerosol me sobra." },
            reply: { A: "Ferreyra lo guarda. «Gracias. Le acompaño a la avenida.»", B: "Ferreyra lo guarda en una bolsa. «Gracias. Si quiere, la acompaño hasta la avenida.»", C: "Ferreyra lo guarda en una bolsa. «Un gesto cívico. Permítame, al menos, acompañarla hasta la avenida.»" },
            mood: "smile", end: "acompana",
          },
          {
            id: "demostracion",
            say: { A: "¿Me enseña cómo usarlo bien?", B: "¿Me enseña a usarlo bien? No quiero equivocarme.", C: "¿Me da una clase breve de uso? Prefiero aprender de una profesional." },
            reply: { A: "Ferreyra sonríe. «Claro. Atenta: viento a favor, distancia dos metros.»", B: "Ferreyra sonríe, encantada de tener alumna. «Atenta: viento a favor, dos metros de distancia, y apunte a los ojos.»", C: "Ferreyra sonríe, encantada. «Tres reglas: viento a favor, dos metros de distancia, y salir corriendo después. Repítalas.»" },
            mood: "smile", end: "gas-camino",
          },
        ],
      },
      "lapiz-inicio": {
        who: "ferreyra", mood: "smile",
        line: {
          A: "Ferreyra ve el lápiz y se ríe. «Un lápiz. ¿Eso es todo? Me ahorra el trabajo. ¿Qué hace con él a esta hora?»",
          B: "Ferreyra ve tu lápiz y se le escapa una risa. «Un lápiz. Es la primera vez que me enseñan un lápiz en un control. ¿Para qué lo lleva?»",
          C: "Ferreyra ve tu lápiz y no puede evitar sonreír. «Un lápiz. En diez años de servicio, el arma más modesta que he visto. ¿Qué escribe a estas horas?»",
        },
        options: [
          {
            id: "dibujo",
            say: { A: "Dibujo. Me gusta dibujar la ciudad de noche.", B: "Dibujo. Me gusta dibujar la ciudad de noche, sobre todo las luces azules.", C: "Dibujo la ciudad de noche. Hoy iba a por sus luces azules, que son fotogénicas." },
            reply: { A: "Ferreyra mira la lámpara. «¿Me dibuja? Soy fotogénica.»", B: "Ferreyra mira la lámpara azul y sonríe. «¿Me dibuja a mí? Dicen que soy fotogénica.»", C: "Ferreyra se pone firme con la gorra recta. «¿Me incluye en el dibujo? Dicen que soy fotogénica, aunque lo dicen mis compañeros.»" },
            mood: "smile", next: "lapiz-retrato",
          },
          {
            id: "mapa",
            say: { A: "Estoy perdida. ¿Puede dibujarme el camino?", B: "Estoy perdida. ¿Puede dibujarme el camino a la avenida?", C: "Estoy perdida. ¿Puede dibujarme un mapa hasta la avenida? Mi sentido de la orientación es un mito." },
            reply: { A: "Ferreyra toma el lápiz. «Claro. Mire: esto es la comisaría.»", B: "Ferreyra toma el lápiz con gusto. «Claro. Mire: aquí la comisaría, aquí la avenida.»", C: "Ferreyra toma el lápiz con gusto. «Con placer. Aquí la comisaría, aquí la avenida; le marco la ruta con luz.»" },
            mood: "smile", end: "lapiz-mapa",
          },
          {
            id: "denuncia",
            say: { A: "Escribo para una denuncia. ¿La recibe?", B: "Estaba escribiendo una denuncia. ¿Me la recibe usted?", C: "Estaba redactando una denuncia. ¿Puedo presentársela directamente?" },
            reply: { A: "Ferreyra saca su libreta. «Dígame qué pasó.»", B: "Ferreyra saca su libreta, ahora seria. «Cuénteme qué pasó.»", C: "Ferreyra saca su libreta y cambia el tono. «Adelante. ¿Qué ha ocurrido?»" },
            mood: "worried", next: "lapiz-retrato",
          },
        ],
      },
      "lapiz-retrato": {
        who: "ferreyra", mood: "smile",
        line: {
          A: "Ferreyra mira tu papel. «Dibuja bien. ¿Y escribe un informe de su dibujo?»",
          B: "Ferreyra se inclina sobre tu papel. «Dibuja mejor que yo escribo mis informes. ¿Me firma el dibujo?»",
          C: "Ferreyra examina tu papel con ojo clínico. «Mejor trazo que el mío en los informes. ¿Me lo firma? Lo pondré en el tablón de la comisaría.»",
        },
        options: [
          {
            id: "firmar",
            act: { A: "Firmas el dibujo.", B: "Firmas el dibujo con una floritura.", C: "Firmas el dibujo con una floritura de artista." },
            say: { A: "Tome. Para usted.", B: "Tome, agente. Para su tablón.", C: "Tome, agente. Primer cuadro de su colección." },
            reply: { A: "Ferreyra lo guarda. «Gracias. Venga cuando quiera.»", B: "Ferreyra lo guarda en el bolsillo del uniforme. «Gracias. Venga cuando quiera: aquí siempre hay café.»", C: "Ferreyra lo guarda con cuidado. «Gracias. La puerta siempre está abierta; el café es otra historia.»" },
            mood: "smile", end: "lapiz-regalo",
          },
          {
            id: "informe",
            say: { A: "¿Puedo ayudarla con un informe? Yo escribo.", B: "¿Quiere que le ayude con el informe de hoy? Yo escribo bastante bien.", C: "Si quiere, le redacto el informe de hoy: escribo mejor de lo que dibujo." },
            reply: { A: "Ferreyra se ríe. «No puedo. Pero gracias.»", B: "Ferreyra se ríe. «Tentador. No puedo, pero se lo agradezco.»", C: "Ferreyra se ríe. «Tentador, de verdad. El reglamento lo prohíbe, mi cansancio lo aplaude.»" },
            mood: "smile", end: "camino",
          },
          {
            id: "acompana",
            say: { A: "¿Me acompaña a la avenida? Dibujo mejor con compañía.", B: "¿Me acompaña hasta la avenida? Dibujo mejor con compañía.", C: "¿Me acompaña hasta la avenida? Dibujo mejor cuando alguien me vigila." },
            reply: { A: "Ferreyra sonríe. «Vamos.»", B: "Ferreyra sonríe. «Vamos. Me viene bien estirar las piernas.»", C: "Ferreyra sonríe. «Vamos. Será la primera escolta con modelo incluido.»" },
            mood: "smile", end: "acompana",
          },
        ],
      },
      "libro-inicio": {
        who: "ferreyra", mood: "surprised",
        line: {
          A: "Ferreyra ve el libro y se le abren los ojos. «¡Un libro! ¿Usted lee a estas horas? Yo también leo en el turno.»",
          B: "Ferreyra ve el libro y se le ilumina la cara. «¡Un libro! ¿Lee usted de noche? Yo leo en los turnos, cuando no hay emergencias. O sea, siempre.»",
          C: "Ferreyra ve el libro y su gesto profesional se rinde. «Un libro. En un control, de noche. Debo de ser la única policía que lee en el turno; ¿usted también?»",
        },
        options: [
          {
            id: "recomendar",
            say: { A: "Sí, mucho. Este es muy bueno.", B: "Sí, mucho. Este es buenísimo, se lo recomiendo.", C: "Sí, mucho. Este se lo recomiendo: tiene un policía que sospecha de todo." },
            reply: { A: "Ferreyra lo mira. «Me lo apunto. ¿Me lo presta?»", B: "Ferreyra lee la portada. «Me lo apunto. ¿Me lo presta unos días?»", C: "Ferreyra lee la portada. «Me lo apunto. Un policía que sospecha de todo me suena familiar. ¿Me lo presta?»" },
            mood: "smile", next: "libro-charla",
          },
          {
            id: "excusa",
            say: { A: "Estoy perdida. Leo para no pensar.", B: "Estaba perdida y leía mientras buscaba el camino.", C: "Estaba perdida y leía mientras buscaba el camino, lo que, admito, no es el método más eficaz." },
            reply: { A: "Ferreyra se ríe. «Perdida y leyendo. Venga, la acompaño.»", B: "Ferreyra se ríe. «Perdida y leyendo a la vez. Venga, la acompaño hasta la avenida.»", C: "Ferreyra se ríe. «Perdida, leyendo y sospechosa. Un tríptico perfecto. Venga, la acompaño.»" },
            mood: "smile", end: "acompana",
          },
          {
            id: "regalar",
            say: { A: "Se lo regalo. Para sus turnos.", B: "Se lo regalo. Para sus turnos de noche.", C: "Se lo regalo. Para sus turnos largos y emociones escasas." },
            reply: { A: "Ferreyra duda. «No puedo aceptar regalos.» Pero lo acepta.", B: "Ferreyra duda. «No puedo aceptar regalos en servicio.» Lo mira un segundo más y lo guarda en la guantera del patrullero.", C: "Ferreyra duda. «Los regalos están prohibidos en servicio.» Mira el libro, mira la calle vacía y lo guarda en el patrullero." },
            mood: "smile", end: "libro-regalo",
          },
        ],
      },
      "libro-charla": {
        who: "ferreyra", mood: "smile",
        line: {
          A: "Ferreyra mira la calle vacía. «Leer en la comisaría es mi secreto. ¿Y usted? ¿Qué le gusta leer?»",
          B: "Ferreyra mira la calle vacía y baja la voz. «Leer en el turno es mi secreto. Mis compañeros se ríen. ¿Y usted? ¿Qué le gusta leer?»",
          C: "Ferreyra mira la calle vacía y baja la voz. «Leer en turno es mi secreto mejor guardado; los compañeros se ríen. ¿Y a usted, qué tipo de lector la define?»",
        },
        options: [
          {
            id: "novela",
            say: { A: "Me gustan las novelas de misterio.", B: "Me gustan las novelas de misterio. Los policías me parecen fascinantes.", C: "Las novelas de misterio. Los policías de las novelas siempre tienen más suerte que los reales." },
            reply: { A: "Ferreyra sonríe. «A mí también. ¡Vamos a la comisaría! Tengo uno.»", B: "Ferreyra sonríe. «A mí también. Vengan a la comisaría: tengo uno que le va a encantar.»", C: "Ferreyra sonríe. «Cierto, ellos sí cierran sus casos. Venga a la comisaría; le presto uno de mi estantería.»" },
            mood: "smile", end: "libro-comisaria",
          },
          {
            id: "terminar",
            say: { A: "Todavía no termino este. ¿Quiere leerlo?", B: "Todavía no termino este. ¿Lo leemos juntos un capítulo?", C: "Todavía no lo termino. ¿Leemos juntos un capítulo, aquí, bajo la lámpara azul?" },
            reply: { A: "Ferreyra se sienta en el patrullero. «Un capítulo. Pero si hay una emergencia, lo dejo.»", B: "Ferreyra se sienta en el patrullero. «Un capítulo. Si hay una emergencia, lo dejo y usted corre.»", C: "Ferreyra se sienta en el capó. «Un capítulo. Si hay una emergencia, usted guarda el sitio.»" },
            mood: "smile", end: "libro-comisaria",
          },
          {
            id: "gracias",
            say: { A: "Gracias por la charla. Me voy.", B: "Gracias por la charla, agente. Me voy a casa.", C: "Gracias por la conversación, agente. Es lo más civilizado que me ha pasado en un control." },
            reply: { A: "Ferreyra levanta la mano. «Buenas noches. Y siga leyendo.»", B: "Ferreyra levanta la mano. «Buenas noches. Y siga leyendo, que es lo mejor que se puede hacer de noche.»", C: "Ferreyra se toca la gorra. «Buenas noches. Y siga leyendo; es lo único que no requiere informe.»" },
            mood: "smile", end: "camino",
          },
        ],
      },
      "corazon-inicio": {
        who: "ferreyra", mood: "love",
        line: {
          A: "Ferreyra te mira y su cara dura se rompe. Sonríe. «Perdone. Hoy ha sido un día muy duro. Usted tiene algo que calma.»",
          B: "Ferreyra te mira y la cara de autoridad se le descompone en una sonrisa. «Perdone la expresión. Llevo doce horas de turno y usted es lo primero amable que veo.»",
          C: "Ferreyra te mira y, contra todo protocolo, se le escapa una sonrisa genuina. «Disculpe. Doce horas de turno, un gato en un techo y usted: lo único amable de la noche.»",
        },
        options: [
          {
            id: "cafe",
            say: { A: "¿Quiere un café? Hay una máquina allí.", B: "¿Le traigo un café de la máquina? Invito yo.", C: "¿Le traigo un café de la máquina de la clínica? Es malo, pero reconforta." },
            reply: { A: "Ferreyra casi llora. «Sí. Con mucha azúcar. Gracias.»", B: "Ferreyra casi se emociona. «Sí, por favor. Con mucha azúcar. Nadie me ofrece nada en el turno.»", C: "Ferreyra casi se emociona. «Sí. Con azúcar. Nadie me ofrece nada en el turno de noche. Es usted un ángel con mala máquina.»" },
            mood: "love", next: "corazon-turno",
          },
          {
            id: "abrazo",
            act: { A: "Le das un abrazo corto.", B: "Le das un abrazo corto, sin decir nada.", C: "Le das un abrazo breve; no hace falta decir nada." },
            say: { A: "Gracias por cuidarnos.", B: "Gracias por cuidar el barrio de noche.", C: "Gracias por estar aquí cuando nadie más está." },
            reply: { A: "Ferreyra se queda quieta. Luego te abraza fuerte. Un compañero silba.", B: "Ferreyra se queda inmóvil, sorprendida. Luego te abraza fuerte. Desde la puerta de la comisaría, un compañero silba.", C: "Ferreyra se queda un segundo petrificada. Luego te devuelve el abrazo. Desde la puerta de la comisaría, un compañero silba y alguien aplaude." },
            mood: "love", end: "corazon-abrazo",
          },
          {
            id: "hablar",
            say: { A: "Cuénteme. ¿Qué pasó hoy?", B: "Cuénteme. ¿Qué ha sido lo peor de hoy?", C: "Cuénteme. ¿Qué fue lo peor de la noche, aparte de mí?" },
            reply: { A: "Ferreyra baja la voz. «Una niña perdida. La encontramos.»", B: "Ferreyra baja la voz. «Una niña perdida. La encontramos, pero me sigue pesando.»", C: "Ferreyra baja la voz. «Una niña perdida durante dos horas. La encontramos. Pero esas dos horas no se me van.»" },
            mood: "love", next: "corazon-turno",
          },
        ],
      },
      "corazon-turno": {
        who: "ferreyra", mood: "smitten",
        line: {
          A: "Ferreyra se apoya en el patrullero. «No sé por qué le cuento esto. Hoy me siento mejor. ¿Cómo se llama?»",
          B: "Ferreyra se apoya en el patrullero y respira hondo. «No sé por qué le cuento todo esto. Me siento mucho mejor. ¿Cómo se llama?»",
          C: "Ferreyra se apoya en el patrullero y exhala. «No sé por qué le cuento todo esto a una desconocida, pero me siento más ligera. ¿Cómo se llama?»",
        },
        options: [
          {
            id: "nombre",
            say: { A: "Llámeme como quiera. Venga, vamos a pasear.", B: "Puede llamarme como quiera. ¿Damos un paseo hasta la avenida?", C: "Llámeme como prefiera. ¿Damos un paseo hasta la avenida? Así se estira las piernas." },
            reply: { A: "Ferreyra se ríe. «Vamos. Le cuento del señor del tango.»", B: "Ferreyra se ríe de verdad. «Vamos. Le cuento la historia del señor del tango.»", C: "Ferreyra se ríe de verdad. «Vamos. Le cuento la historia completa del señor del tango; es mejor que cualquier novela.»" },
            mood: "love", end: "acompana",
          },
          {
            id: "beso",
            act: { A: "Le das un beso en la mejilla.", B: "Le das un beso en la mejilla, rápido.", C: "Le das un beso fugaz en la mejilla." },
            say: { A: "Por el café. Y por la charla.", B: "Por el café pendiente y por la charla.", C: "Por el café pendiente y por la mejor charla de la noche." },
            reply: { A: "Ferreyra se pone roja. «Esto no está en el reglamento.» Sonríe.", B: "Ferreyra se pone roja hasta la gorra. «Eso no está en el reglamento.» Sonríe como una adolescente.", C: "Ferreyra enrojece hasta las orejas. «Eso no figura en ningún reglamento.» Sonríe como una adolescente en su primera cita." },
            mood: "smitten", end: "corazon-beso",
          },
          {
            id: "gracias",
            say: { A: "Me alegra ayudar. Nos vemos.", B: "Me alegra haber ayudado. Hasta la próxima.", C: "Me alegra haber servido de algo. Hasta la próxima ronda." },
            reply: { A: "Ferreyra levanta la mano. «Gracias. Vuelva cuando quiera.»", B: "Ferreyra levanta la mano. «Gracias de verdad. Vuelva cuando quiera: siempre hay café.»", C: "Ferreyra se toca la gorra. «Gracias de verdad. Vuelva cuando quiera: aquí, el café es malo, pero la compañía mejora.»" },
            mood: "love", end: "camino",
          },
        ],
      },
    },
    ends: {
      camino: {
        text: { A: "Ferreyra te dice adiós. Sigues tu camino por la avenida.", B: "Ferreyra te desea buenas noches y sigues tu camino. La lámpara azul brilla detrás de ti.", C: "Ferreyra se despide con un gesto de la gorra. Sigues tu camino con la extraña sensación de haber hecho una amiga en la comisaría." },
        change: "sonrie", recap: "Hablaste con la agente Ferreyra y seguiste tu camino.",
      },
      acompana: {
        text: { A: "Ferreyra camina contigo. Te habla del barrio.", B: "Ferreyra te acompaña unas cuadras y te cuenta historias del barrio.", C: "Ferreyra te escolta hasta la avenida. Por el camino te cuenta la historia completa del señor del tango." },
        change: "se-va", recap: "La agente Ferreyra te acompañó por el barrio.",
      },
      informe: {
        text: { A: "Ferreyra escribe un informe. Después te dice: «Puede irse».", B: "Ferreyra escribe un informe breve, te pide el nombre y te deja ir.", C: "Ferreyra rellena un informe con letra impecable. «Puede irse», dice. «Y la próxima vez, deje los misterios en casa.»" },
        change: "llama", recap: "La agente Ferreyra escribió un informe sobre ti.",
      },
      refuerzos: {
        text: { A: "Llega un auto de policía. Explicas todo. Al final, todo está bien.", B: "Llega un coche patrulla. Entre todos aclaran el malentendido y te dejan ir.", C: "Llega un patrullero con dos agentes adormilados. Aclarar el malentendido lleva media hora y una buena dosis de paciencia." },
        change: "policia", recap: "Un malentendido con la agente Ferreyra terminó con otro coche de policía.",
      },
      "cuchillo-reduccion": {
        text: { A: "Dos agentes te ponen en el suelo y te quitan el cuchillo. Llega un patrullero. Te llevan a la comisaría.", B: "Dos agentes te inmovilizan en el suelo con mucha profesionalidad y poca delicadeza. Te quitan el cuchillo y te llevan a la comisaría, a veinte metros.", C: "Dos agentes te reducen en el suelo con eficacia de manual. Te quitan el cuchillo y te acompañan a la comisaría, a veinte metros, que es el trayecto más corto de tu vida." },
        change: "policia", recap: "Sacaste un cuchillo frente a una comisaría y terminaste detenido.",
      },
      "cuchillo-persecucion": {
        text: { A: "Corres. Un patrullero te corta el paso. Te detienen en dos minutos.", B: "Corres tres calles. Un patrullero te corta el paso en la esquina y te detienen en dos minutos.", C: "Corres tres calles con una sirena pegada a la nuca. Un patrullero te corta el paso en la esquina: dos minutos de fuga y una vida de papeleo." },
        change: "corre", recap: "Huiste de la agente Ferreyra con un cuchillo y no llegaste lejos.",
      },
      "cuchillo-informe": {
        text: { A: "Ferreyra se queda con el cuchillo y escribe un informe. Después te deja ir.", B: "Ferreyra se queda con el cuchillo, escribe un informe corto y te deja ir con una advertencia.", C: "Ferreyra se queda con el cuchillo, redacta un informe cortés y te deja ir con una advertencia que sonó a consejo de hermana mayor." },
        change: "llama", recap: "Ferreyra confiscó tu cuchillo y escribió un informe.",
      },
      "cuchillo-acompana": {
        text: { A: "Ferreyra se lleva el cuchillo y camina contigo hasta la avenida. Hablan del miedo.", B: "Ferreyra se lleva el cuchillo y te acompaña hasta la avenida, hablando de cómo volver a casa sin miedo.", C: "Ferreyra se lleva el cuchillo y te acompaña hasta la avenida, repasando contigo las maneras de volver a casa sin hacer pagar el miedo a otros." },
        change: "se-va", recap: "Ferreyra te quitó el cuchillo y te acompañó hasta la avenida.",
      },
      "cuchillo-duelo": {
        text: { A: "Ferreyra detiene al otro hombre. Los dos cuchillos quedan en una bolsa. «Gracias por avisar.»", B: "Ferreyra y otro agente reducen al hombre del otro cuchillo. Los dos cuchillos acaban en la misma bolsa. «Gracias por avisar», dice Ferreyra.", C: "Ferreyra y un compañero reducen al hombre del segundo cuchillo en un baile coreografiado de segundos. Los dos filos acaban en la misma bolsa. «Gracias por avisar. Y por llegar tarde a soltar el suyo.»" },
        change: "pelea", recap: "Otro hombre sacó un cuchillo frente a la comisaría y Ferreyra lo detuvo.",
      },
      "pistola-persecucion": {
        text: { A: "Corres. Dos patrulleros te rodean. Terminas en el suelo, con las manos atrás.", B: "Corres media calle. Dos patrulleros te cierran el paso y terminas en el suelo con las manos a la espalda.", C: "Corres media calle hasta que dos patrulleros te cierran el paso. Terminas en el suelo, con las manos a la espalda y una perspectiva nueva del asfalto." },
        change: "huye", recap: "Huiste con una pistola frente a una comisaría y te detuvieron.",
      },
      "pistola-informe": {
        text: { A: "Ferreyra se queda con la pistola de plástico y escribe un informe. Te deja ir con una advertencia.", B: "Ferreyra se queda con la pistola de plástico y escribe un informe largo. Te deja ir con una advertencia muy seria.", C: "Ferreyra confisca la pistola de plástico y escribe un informe de tres páginas. Te deja ir con una advertencia que dura más que el informe." },
        change: "llama", recap: "Ferreyra confiscó tu pistola de juguete y escribió un informe.",
      },
      "pistola-comisaria": {
        text: { A: "Ferreyra te lleva a la comisaría. Te da un café y escribe todo. Después te deja ir.", B: "Ferreyra te lleva a la comisaría, te sirve un café y escribe tu declaración. Después te deja ir.", C: "Ferreyra te lleva a la comisaría, te sirve un café de máquina y toma tu declaración con paciencia. Al final te deja ir, con una taza vacía y un susto en el cuerpo." },
        change: "se-va", recap: "Ferreyra te llevó a la comisaría por la pistola de juguete y te dejó ir.",
      },
      "granada-helicoptero": {
        text: { A: "Un helicóptero vuela sobre la calle. La policía evacúa dos cuadras. La granada es de plástico.", B: "Un helicóptero sobrevuela la calle mientras la policía evacúa dos cuadras. Al final alguien confirma que la granada es de plástico.", C: "Un helicóptero ilumina la calle mientras evacúan dos cuadras. Veinte minutos después, un artificiero confirma que la granada es de plástico y que tu broma ha costado más que un coche." },
        change: "helicoptero", recap: "Tu granada provocó una evacuación con helicóptero frente a la comisaría.",
      },
      "granada-informe": {
        text: { A: "El experto confirma: es de plástico. Ferreyra escribe un informe larguísimo.", B: "El artificiero confirma que es de plástico. Ferreyra escribe un informe larguísimo y te lo lee en voz alta.", C: "El artificiero confirma que es de plástico. Ferreyra redacta un informe interminable y te lo lee en voz alta, adjetivo a adjetivo." },
        change: "llama", recap: "Tu granada era de plástico, pero Ferreyra escribió un informe largo.",
      },
      "gas-confisca": {
        text: { A: "Ferreyra se queda con el gas y te da un papel. «Lo recoges mañana.»", B: "Ferreyra se queda con el aerosol y te da un papel. «Puede recogerlo mañana, con su documento.»", C: "Ferreyra confisca el aerosol y te entrega un recibo. «Puede recogerlo mañana, con su documento y un tono mejor.»" },
        change: "llama", recap: "Ferreyra te quitó el gas pimienta por una respuesta mal dicha.",
      },
      "gas-camino": {
        text: { A: "Ferreyra te desea buenas noches. Sigues tu camino por una calle con luz.", B: "Ferreyra te desea buenas noches. Sigues por una calle con luz, más tranquila y con el gas bien guardado.", C: "Ferreyra se despide con un gesto. Sigues por una calle bien iluminada, con el gas en el bolso y tres reglas nuevas en la cabeza." },
        change: "sonrie", recap: "Ferreyra aprobó tu gas pimienta y te dio consejos para volver a casa.",
      },
      "lapiz-mapa": {
        text: { A: "Ferreyra te dibuja un mapa con tu lápiz. Sigues el camino hasta la avenida.", B: "Ferreyra te dibuja un mapa con tu lápiz, con estrellitas en las calles bien iluminadas. Llegas a la avenida sin perderte.", C: "Ferreyra te dibuja un mapa con tu lápiz y marca con estrellas las calles con luz. Llegas a la avenida sin perderte y con un recuerdo policial." },
        change: "sigue", recap: "La agente Ferreyra te dibujó un mapa con tu lápiz.",
      },
      "lapiz-regalo": {
        text: { A: "Ferreyra se queda con tu dibujo y lo pega en el tablón de la comisaría. Sonríe.", B: "Ferreyra se queda con tu dibujo y lo cuelga en el tablón de la comisaría. Sonríe cada vez que pasa.", C: "Ferreyra cuelga tu dibujo en el tablón de la comisaría, entre avisos de personas desaparecidas y turnos de limpieza. Es lo más bonito del tablón." },
        change: "sonrie", recap: "Ferreyra colgó tu dibujo en la comisaría.",
      },
      "libro-regalo": {
        text: { A: "Ferreyra guarda tu libro en el patrullero. «Lo leeré en el turno.»", B: "Ferreyra guarda tu libro en la guantera del patrullero. «Lo leeré en el turno. Gracias.»", C: "Ferreyra guarda tu libro en la guantera del patrullero. «Lo leeré entre aviso y aviso. Es la primera vez que me regalan literatura en un control.»" },
        change: "sonrie", recap: "Le regalaste tu libro a la agente Ferreyra.",
      },
      "libro-comisaria": {
        text: { A: "Entran en la comisaría. Ferreyra te presta un libro y te hace un café. Hablan hasta tarde.", B: "Entran en la comisaría. Ferreyra te presta un libro de su estantería y te hace un café. Hablan hasta casi el amanecer.", C: "Entran en la comisaría, donde Ferreyra te presta un libro de su estantería secreta y te hace un café. Hablan de novelas hasta que el turno se acaba." },
        change: "se-sienta", recap: "Hablaste de libros con la agente Ferreyra en la comisaría.",
      },
      "corazon-abrazo": {
        text: { A: "Ferreyra te abraza. Un compañero aplaude. Ella se ríe y se pone roja.", B: "Ferreyra te abraza. Desde la puerta, un compañero aplaude. Ella se ríe y se pone roja hasta la gorra.", C: "Ferreyra te abraza, desarmada. Desde la puerta de la comisaría un compañero aplaude y otro graba. Ella se ríe y se pone roja hasta la gorra." },
        change: "abraza", recap: "Ferreyra te abrazó tras un turno muy largo.",
      },
      "corazon-beso": {
        text: { A: "Ferreyra se toca la mejilla y sonríe. «Esto no pasó.» Pero sí pasó.", B: "Ferreyra se toca la mejilla y sonríe. «Esto no pasó nunca.» Pero sí pasó, y lo sabe toda la comisaría.", C: "Ferreyra se toca la mejilla y sonríe. «Esto no ha pasado.» Ha pasado, y los tres compañeros de la ventana lo van a recordar mucho tiempo." },
        change: "beso", recap: "Le diste un beso en la mejilla a la agente Ferreyra.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué haces cuando alguien te grita?", B: "¿Cómo reaccionas cuando una autoridad te habla con miedo?", C: "¿Hasta qué punto el pánico ajeno nos hace sospechosos, aunque no lo seamos?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de la policía?", B: "¿Cómo obedecerías una orden dada a gritos?", C: "¿Qué cambia en nosotros cuando alguien con poder nos apunta con un arma?" } },
      granada: { start: "granada-inicio", fx: "helicoptero", speak: { A: "¿Cuál fue tu peor broma?", B: "¿Cuál fue la broma que más se te fue de las manos?", C: "¿Cómo se mide la gracia de una broma cuando todo un barrio paga las consecuencias?" } },
      gas: { start: "gas-inicio", fx: "defensa", speak: { A: "¿Qué haces para sentirte seguro de noche?", B: "¿Qué medidas de prevención tomas cuando caminas solo de noche?", C: "¿Dónde termina la prudencia razonable y empieza la paranoia nocturna?" } },
      lapiz: { start: "lapiz-inicio", fx: "curioso", speak: { A: "¿Qué dibujas cuando te aburres?", B: "¿Qué dibujo o nota guardas porque te hizo sonreír?", C: "¿Por qué un dibujo desarma más que cualquier explicación formal?" } },
      libro: { start: "libro-inicio", fx: "risa", speak: { A: "¿Qué libro lees ahora?", B: "¿Qué libro le regalarías a alguien con un trabajo nocturno?", C: "¿Qué dice de nosotros el hecho de leer en lugares donde nadie lo espera?" } },
      corazon: { start: "corazon-inicio", fx: "calma", speak: { A: "¿Cuándo fue tu último día muy largo?", B: "¿Quién te ha hecho sonreír después de un turno agotador?", C: "¿Qué detalle amable de un desconocido te cambió una noche difícil?" } },
    },
    speak: {
      A1: "¿Qué llevas en tu mochila hoy?",
      A2: "¿Qué hiciste la última vez que alguien te pidió ayuda en la calle?",
      B1: "¿Cómo te sientes cuando una autoridad te hace preguntas?",
      B2: "¿Qué cambiarías en la forma en que tu ciudad cuida a la gente de noche?",
      C1: "¿Cuál es la diferencia entre ser prudente y ser desconfiado?",
      C2: "¿Por qué las apariencias pesan tanto en cómo juzgamos a un desconocido?",
    },
  },

  // ───────────────────────────── RINCONES ─────────────────────────────
  {
    id: "clinica-farmacia",
    kind: "rincon",
    district: "clinica",
    title: "La farmacia de guardia",
    verb: "PREGUNTAR",
    goal: "Pedir algo en una farmacia, describir un malestar y entender consejos sencillos.",
    cast: [
      {
        id: "amalia", name: "Amalia", role: "Farmacéutica de guardia",
        age: "old", body: "f", build: "heavy", height: 1.55,
        hair: "curly", hairColor: "#a9a6a0", skin: "#f0c8a0",
        top: "coat", topColor: "#f2f2ee", bottom: "skirt", bottomColor: "#3b3b48",
        extras: ["glasses", "earrings"], pose: "window", props: ["pharmacy-window"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "amalia", mood: "sleepy",
        line: {
          A: "Una señora abre la ventanilla de la farmacia. «Buenas noches, corazón. ¿Qué necesitas?»",
          B: "La ventanilla de la farmacia se abre con un chirrido. Una señora con gafas bosteza. «Buenas noches, corazón. ¿Qué te trae por aquí a estas horas?»",
          C: "La ventanilla se abre y aparece una farmacéutica con gafas en la punta de la nariz. «Buenas noches, corazón. A estas horas solo vienen tres tipos de clientes. ¿Cuál eres tú?»",
        },
        options: [
          {
            id: "cabeza",
            say: { A: "Me duele la cabeza. ¿Tiene algo?", B: "Me duele mucho la cabeza. ¿Me puede dar algo?", C: "Tengo un dolor de cabeza de esos que no te dejan pensar. ¿Qué me recomienda?" },
            reply: { A: "Amalia te mira. «¿Desde cuándo te duele?»", B: "Amalia se acerca a la ventanilla. «Antes de darte nada: ¿desde cuándo te duele?»", C: "«El tercer tipo, entonces», dice Amalia. «Antes de recetarte nada, cuéntame: ¿desde cuándo?»" },
            mood: "neutral", next: "consejo",
          },
          {
            id: "charlar",
            say: { A: "Nada, gracias. ¿Usted trabaja toda la noche?", B: "Nada, solo pasaba. ¿Trabaja toda la noche sola?", C: "Nada, la verdad. Me intrigaba quién vive detrás de esta ventanilla." },
            reply: { A: "Amalia sonríe. «Sí, toda la noche. Con mi radio y mi té.»", B: "«Toda la noche, sí. Mi radio, mi té y algún que otro cliente perdido.»", C: "«Una farmacéutica, una radio y un té que se enfría cada media hora», dice Amalia. «Una vida emocionante.»" },
            mood: "smile", end: "charla",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted es muy amable. Trabaja mucho.", B: "Qué amable es usted, a estas horas y con una sonrisa.", C: "Es usted la persona más amable que he visto a las tres de la mañana." },
            reply: { A: "Amalia se ríe. «Gracias, corazón. Toma un caramelo. Es de miel.»", B: "Amalia se ríe y te pasa un caramelo. «De miel. Mi secreto para las noches largas. No se lo digas a nadie.»", C: "Amalia te pasa un caramelo por la ventanilla. «De miel, receta mía. Cuarenta años de guardia y sigo sin saber dormir de día.»" },
            mood: "love", end: "charla",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Le enseñas tu libro por la ventanilla.", C: "Apoyas tu libro en la ventanilla." },
            say: { A: "Leí mucho hoy. ¿Por eso me duele la cabeza?", B: "Llevo horas leyendo esto. ¿Puede ser por eso el dolor de cabeza?", C: "Sospecho que el culpable es este libro. ¿Existe la jaqueca literaria?" },
            reply: { A: "Amalia se ríe. «¡Puede ser! Descansa los ojos.»", B: "«Puede ser, sí», dice Amalia. «Descansa los ojos y lee con más luz.»", C: "«Existe y es muy común», dice Amalia, divertida. «Se cura cerrando el libro un rato. O cambiando de autor.»" },
            mood: "smile", end: "agua",
          },
        },
      },
      consejo: {
        who: "amalia", mood: "neutral",
        line: {
          A: "Amalia pregunta: «¿Tomaste agua? ¿Dormiste bien? ¿Comiste algo?»",
          B: "«Te pregunto lo de siempre», dice Amalia. «¿Tomaste agua hoy? ¿Dormiste? ¿Cenaste?»",
          C: "«Interrogatorio de rigor», anuncia Amalia. «Agua, sueño y comida. ¿Cuántas de las tres has cumplido hoy?»",
        },
        options: [
          {
            id: "pastilla",
            say: { A: "Poca agua. Y casi no duermo. ¿Me da una pastilla?", B: "La verdad, poca agua y casi nada de sueño. ¿Me da algo suave?", C: "Ninguna de las tres, para ser honestos. ¿Algo suave, por favor?" },
            reply: { A: "Amalia te da una caja. «Una pastilla y mucha agua. Y a dormir.»", B: "Amalia te pasa una caja pequeña. «Una ahora, con un vaso de agua grande. Y a dormir, ¿eh?»", C: "Amalia te pasa una caja y una mirada de abuela. «Una, con mucha agua. Y la próxima vez, cumple al menos dos de las tres.»" },
            mood: "smile", end: "pastilla",
          },
          {
            id: "natural",
            say: { A: "No quiero pastillas. ¿Qué puedo hacer?", B: "Prefiero no tomar pastillas. ¿Qué me recomienda?", C: "Si se puede evitar la pastilla, mejor. ¿Algún remedio de farmacéutica sabia?" },
            reply: { A: "«Agua, un poco de aire y a dormir temprano.»", B: "«Bebe agua, apaga el teléfono y duerme. Si mañana sigue, vuelve.»", C: "«El remedio más caro del mundo», dice Amalia, «y el que nadie toma: agua, oscuridad y ocho horas sin pantalla.»" },
            mood: "smile", end: "agua",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted me cuida como mi abuela.", B: "Me cuida igual que mi abuela. Ella también preguntaba eso.", C: "Me ha hecho exactamente las mismas preguntas que me hacía mi abuela." },
            reply: { A: "Amalia sonríe. «Tengo seis nietos. Toma agua, y una pastilla si la necesitas.»", B: "«Tengo seis nietos y ninguno me hace caso», ríe Amalia. «Toma: agua y una pastilla, por si acaso.»", C: "«Seis nietos y ni uno me escucha», suspira Amalia, encantada. «Tú sí. Toma una botella de agua; invita la casa.»" },
            mood: "love", end: "pastilla",
          },
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz para apuntar.", C: "Sacas el lápiz para tomar nota del consejo." },
            say: { A: "¿Puede escribir el nombre del remedio?", B: "¿Me escribe el nombre del remedio y cuántas tomo?", C: "¿Me lo apunta? A estas horas, no me fío de mi memoria." },
            reply: { A: "Amalia escribe: «Una pastilla. Agua. Dormir.»", B: "Amalia escribe con letra de médico: «1 pastilla, 2 vasos de agua, 8 horas de sueño.»", C: "Amalia escribe una receta perfecta y añade al final: «Y deja de trasnochar.»" },
            mood: "smile", end: "pastilla",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "amalia", mood: "terror",
        line: { A: "Amalia ve el cuchillo, cierra la ventanilla de golpe y grita desde dentro. «¡Voy a llamar a la policía!»", B: "Amalia ve el cuchillo en tu mano, da un salto y cierra la ventanilla de un golpe. Desde dentro grita: «¡Estoy llamando a la policía! ¡Lárgate!»", C: "Amalia ve brillar el cuchillo bajo la cruz verde y la ventanilla se cierra con un estruendo. Su voz llega amortiguada: «¡Cuarenta años de guardia y nunca me habían amenazado! ¡Llamo a la policía!»" },
        options: [
          {
            id: "fruta",
            say: { A: "¡No! Es para la fruta. Perdón.", B: "¡Espere! Es para pelar una manzana, se lo juro. Perdone el susto.", C: "¡Un momento! Es un cuchillo de fruta; mi cena, no su ruina. Le pido perdón." },
            reply: { A: "La ventanilla se abre un dedo. «¿Fruta? ¿A las tres de la mañana?»", B: "La ventanilla se abre unos centímetros. «¿Fruta? ¿A las tres de la mañana? Enséñame las manos.»", C: "La ventanilla se entreabre. «¿Fruta a las tres de la mañana? Muéstrame las manos. Las dos.»" },
            mood: "scared", next: "cuchillo-timbre",
          },
          {
            id: "irse",
            say: { A: "Perdón. Me voy.", B: "Perdón, me voy ya.", C: "Disculpe. Me retiro antes de empeorarlo." },
            reply: { A: "Corres. Oyes la voz de Amalia al teléfono: «¡Un hombre con un cuchillo!»", B: "Te alejas rápido. Detrás oyes a Amalia al teléfono dando tu descripción.", C: "Te alejas con paso rápido. Detrás, Amalia describe tu ropa por teléfono con una precisión que no le conocías." },
            mood: "terror", end: "cuchillo-cierra",
          },
        ],
      },
      "cuchillo-timbre": {
        who: "amalia", mood: "worried",
        line: { A: "Amalia te mira por el cristal. Tiene el teléfono en una mano y el botón de alarma bajo el dedo. «Deja eso en el suelo.»", B: "Amalia te observa por el cristal, con el teléfono en una mano y un dedo sobre el botón de alarma. «Deja el cuchillo en el suelo, despacio.»", C: "Amalia te estudia a través del cristal: teléfono en una mano, dedo sobre el botón de alarma. «Deja el cuchillo en el suelo. Despacio. Y después me cuentas lo de la manzana.»" },
        options: [
          {
            id: "soltar",
            say: { A: "Ya está en el suelo. Mira.", B: "Ya está en el suelo. Mira, tengo las manos vacías.", C: "Ya está en el suelo. Manos vacías, como ve." },
            reply: { A: "Amalia suspira. «Bien. Ahora dime qué necesitas.» Abre un poco más.", B: "Amalia suspira. «Así sí. Ahora dime qué necesitas, sin cuchillos.» Abre un poco más.", C: "Amalia suspira y abre del todo. «Eso está mejor. Ahora dime qué necesitas, que ya me ha subido la presión sin ayuda.»" },
            mood: "worried", end: "cuchillo-calma",
          },
          {
            id: "cabeza",
            say: { A: "Me duele la cabeza. Por eso estoy nervioso.", B: "Me duele mucho la cabeza y los nervios hicieron el resto. Lo siento.", C: "Me duele la cabeza desde hace horas y he llegado con los nervios a flor de piel. Disculpe." },
            reply: { A: "Amalia aprieta el botón. «Eso lo cuentas a la policía.» Una sirena se acerca.", B: "Amalia aprieta el botón de alarma. «Eso se lo cuentas a la policía.» Una sirena se acerca por la avenida.", C: "Amalia aprieta el botón sin pestañear. «Eso se lo cuentas a la policía, que escucha mejor.» Una sirena se acerca por la avenida." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "amalia", mood: "terror",
        line: { A: "Amalia ve la pistola y se queda inmóvil. Levanta las manos tras el cristal. «Por favor… La caja está aquí. Tómala.»", B: "Amalia ve la pistola y levanta las manos tras el cristal, despacio. «Por favor. La caja registradora está aquí. Llévatela y vete.»", C: "Amalia ve la pistola y, con una calma que cuesta cuarenta años, levanta las manos tras el cristal. «La caja está a tu izquierda. Llévatela. Nadie tiene por qué salir herido.»" },
        options: [
          {
            id: "nada",
            say: { A: "No quiero dinero. Quiero una pastilla.", B: "No quiero dinero, señora. Solo una pastilla para el dolor de cabeza.", C: "No he venido a robar. Necesito una pastilla para el dolor de cabeza." },
            reply: { A: "Amalia parpadea. «¿Una pastilla? ¿Con pistola?»", B: "Amalia parpadea. «¿Una pastilla? ¿Con una pistola?»", C: "Amalia parpadea. «¿Una pastilla? ¿Armado? Esta noche me superan.»" },
            mood: "surprised", next: "pistola-timbre",
          },
          {
            id: "guardar",
            say: { A: "Perdón. La guardo. Perdón.", B: "Perdón, perdón. La guardo ahora mismo.", C: "Disculpe, la guardo ahora mismo. No era mi intención." },
            reply: { A: "Amalia no baja las manos. Aprieta el botón de alarma. «¡Policía!»", B: "Amalia no baja las manos. Con el codo aprieta el botón de alarma. «¡Policía!»", C: "Amalia mantiene las manos arriba y aprieta la alarma con el codo, con la serenidad de quien ya ha ensayado esto." },
            mood: "terror", end: "pistola-alarma",
          },
        ],
      },
      "pistola-timbre": {
        who: "amalia", mood: "worried",
        line: { A: "Amalia respira hondo. «Guarda eso. Te doy la pastilla, pero guarda eso.»", B: "Amalia respira hondo. «Guarda esa cosa y te doy la pastilla. No tengo nada que perder, pero tú sí.»", C: "Amalia respira hondo y recupera la voz de farmacéutica. «Guarda esa cosa y te despacho la pastilla. Cuarenta años de guardia me han enseñado a no discutir con nadie armado.»" },
        options: [
          {
            id: "guardar",
            say: { A: "Ya está. Guardada. Perdón.", B: "Guardada. Perdone el susto.", C: "Guardada. Le pido disculpas por esta entrada tan poco ortodoxa." },
            reply: { A: "Amalia te pasa una pastilla con mano temblorosa. «Y no vuelvas con eso.»", B: "Amalia te pasa la pastilla con mano temblorosa. «Y no vuelvas con eso, corazón.»", C: "Amalia te pasa la caja con mano temblorosa. «Y no vuelvas con eso, corazón. Mi corazón ya no está para estos sustos.»" },
            mood: "worried", end: "pistola-pastilla",
          },
          {
            id: "amenazar",
            say: { A: "Dame también agua. Rápido.", B: "Dame también el agua. Rápido, que tengo prisa.", C: "Y el agua también. Rápido, que mi paciencia es corta." },
            reply: { A: "Amalia asiente y aprieta el botón bajo el mostrador. Llegan luces azules.", B: "Amalia asiente, sumisa, y pisa el botón bajo el mostrador. En un minuto llegan luces azules.", C: "Amalia asiente con una mansedumbre sospechosa y pisa el botón bajo el mostrador. En un minuto, luces azules en la ventanilla." },
            mood: "scared", end: "pistola-alarma",
          },
        ],
      },
      "granada-inicio": {
        who: "amalia", mood: "terror",
        line: { A: "Amalia ve la granada y suelta la taza. «¡Ay, Dios mío! ¡Una granada!» Se esconde bajo el mostrador.", B: "Amalia ve la granada, suelta la taza de té y se agacha tras el mostrador. «¡Una granada! ¡Dios mío, una granada en mi farmacia!»", C: "Amalia ve la granada, suelta la taza y desaparece tras el mostrador con una agilidad que nadie sospechaba. Su voz sale desde el suelo: «¡Cuarenta años de guardia y ahora esto!»" },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡De plástico!", B: "¡Es de juguete, de plástico! ¡Salga, señora!", C: "¡Es de utilería! ¡Plástico! ¡Salga de ahí, por favor!" },
            reply: { A: "Amalia asoma los ojos. «¿Plástico? ¡Enséñamela!»", B: "Amalia asoma los ojos por el borde del mostrador. «¿De plástico? Enséñamela despacio.»", C: "Amalia asoma apenas los ojos. «¿Plástico? Demuéstramelo con mucha calma y a distancia.»" },
            mood: "scared", next: "granada-timbre",
          },
          {
            id: "irse",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, me voy!", C: "¡Error mío! ¡Me retiro!" },
            reply: { A: "Corres. Desde el suelo, Amalia grita: «¡Policía! ¡Evacuación!»", B: "Echas a correr. Desde el suelo, Amalia grita por teléfono: «¡Policía! ¡Que evacuen la calle!»", C: "Echas a correr. Desde detrás del mostrador, Amalia pide evacuación con una dicción impecable." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "granada-timbre": {
        who: "amalia", mood: "worried",
        line: { A: "Amalia sale despacio. Mira la granada. «Si es de plástico, ¿por qué la llevas?»", B: "Amalia sale despacio de detrás del mostrador, sin quitar los ojos de la granada. «Si es de plástico, ¿se puede saber por qué la llevas?»", C: "Amalia emerge de detrás del mostrador con la dignidad de una farmacéutica ofendida. «Si es de plástico, quiero una explicación y quiero que sea buena.»" },
        options: [
          {
            id: "broma",
            say: { A: "Era una broma. Perdón.", B: "Era una broma. Una broma muy mala. Perdón.", C: "Era una broma. De muy mal gusto, lo reconozco." },
            reply: { A: "Amalia se ríe nerviosa. «Casi me da un infarto. Toma, una pastilla, la tuya.»", B: "Amalia se ríe, nerviosa. «Casi me da un infarto. Toma una pastilla, y la próxima vez avisa.»", C: "Amalia se ríe, por puro alivio. «Casi me da un infarto, y soy farmacéutica. Toma una pastilla para tu dolor y otra para mis nervios.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "regalar",
            say: { A: "Se la regalo. Para su ventanilla.", B: "Se la regalo. Quedará bien en su ventanilla.", C: "Se la regalo. Como pisapapeles, para su ventanilla." },
            reply: { A: "Amalia la toma con dos dedos. «Pues sí que pesa.» Una sirena suena en la avenida.", B: "Amalia la toma con dos dedos, desconfiada. «Pues sí que pesa.» De pronto, una sirena en la avenida.", C: "Amalia la toma con dos dedos, desconfiada. «Pesa más de lo que debería.» Y entonces suena una sirena, con una puntualidad irritante." },
            mood: "scared", end: "granada-evacuan",
          },
        ],
      },
      "corazon-inicio": {
        who: "amalia", mood: "love",
        line: { A: "Amalia te mira por la ventanilla y su cara cansada se ilumina. «Ay, corazón. Qué cara más buena tienes. ¿Qué te pasa?»", B: "Amalia te mira por la ventanilla y se le ilumina la cara cansada. «Ay, corazón. Tienes una cara muy buena, ¿sabes? ¿Qué te trae por aquí?»", C: "Amalia te mira y la cara de guardia se le llena de ternura. «Ay, corazón. Qué cara tan buena. Si todos mis clientes de las tres de la mañana fueran así, no me jubilaba nunca.»" },
        options: [
          {
            id: "cabeza",
            say: { A: "Me duele la cabeza. Pero hablar con usted me hace bien.", B: "Me duele la cabeza, pero hablar con usted me hace bien.", C: "Me duele la cabeza, aunque hablar con usted ya me está aliviando más que cualquier pastilla." },
            reply: { A: "Amalia sonríe. «Entra. Te hago un té.» Abre la puerta.", B: "Amalia sonríe. «Pasa, corazón. Te preparo un té de mi termo.» Abre la puerta lateral.", C: "Amalia sonríe y abre la puerta lateral. «Pasa, corazón. Un té de mi termo vale más que cualquier pastilla.»" },
            mood: "love", next: "corazon-te",
          },
          {
            id: "abuela",
            say: { A: "Usted se parece a mi abuela.", B: "Se parece muchísimo a mi abuela.", C: "Me recuerda a mi abuela de una manera casi dolorosa." },
            reply: { A: "Amalia se emociona. «Toma un caramelo de miel.» Te lo da con un abrazo por la ventanilla.", B: "Amalia se emociona y te pasa un caramelo de miel. Estira los brazos por la ventanilla y te abraza.", C: "Amalia se emociona, te pasa un caramelo de miel y estira los brazos por la ventanilla para abrazarte. Es el abrazo más raro y más cálido de la noche." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-te": {
        who: "amalia", mood: "smitten",
        line: { A: "Amalia te sirve un té. «Siéntate. Cuéntame de tu abuela. Tengo seis nietos y ninguno viene.»", B: "Amalia te sirve un té caliente y se sienta a tu lado. «Cuéntame de tu abuela. Yo tengo seis nietos y ninguno me visita.»", C: "Amalia te sirve un té y se sienta a tu lado, con el aire de quien lleva años esperando una charla así. «Cuéntame de tu abuela. Yo tengo seis nietos y ninguno viene a la farmacia de guardia.»" },
        options: [
          {
            id: "abuela",
            say: { A: "Mi abuela hacía caramelos. Sabían a miel.", B: "Mi abuela hacía caramelos de miel. Su casa olía igual que este caramelo.", C: "Mi abuela hacía caramelos de miel. Su cocina olía exactamente como este caramelo." },
            reply: { A: "Amalia se emociona. «Entonces somos primas.» Te regala una bolsa de caramelos.", B: "Amalia se emociona. «Entonces somos casi familia.» Te regala una bolsita de caramelos.", C: "Amalia se seca una lágrima. «Entonces somos casi familia.» Te regala una bolsita de caramelos para el camino." },
            mood: "love", end: "corazon-te",
          },
          {
            id: "visita",
            say: { A: "Yo voy a visitarla mañana.", B: "Mañana voy a visitarla. Se lo prometo.", C: "Mañana mismo voy a visitarla; quiero oírle contar sus noches de guardia." },
            reply: { A: "Amalia sonríe. «Qué amable. Aquí tienes mi dirección.» Te la escribe en una receta.", B: "Amalia sonríe, emocionada. «Qué amable. Aquí tienes mi dirección.» Te la escribe en una receta vieja.", C: "Amalia sonríe, emocionada. «Qué amable. Apunta mi dirección.» Te la escribe en el reverso de una receta, con letra de médico." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      pastilla: {
        text: { A: "Pagas y Amalia cierra la ventanilla. La luz verde de la farmacia sigue encendida.", B: "Pagas y Amalia cierra la ventanilla con un «cuídate». La cruz verde parpadea.", C: "Pagas. Amalia cierra la ventanilla y vuelve a su té frío. La cruz verde parpadea como un guiño." },
        change: "luz", recap: "Compraste algo para el dolor de cabeza en la farmacia.",
      },
      agua: {
        text: { A: "Amalia te da un vaso de agua. «Gratis, corazón.»", B: "Amalia te pasa un vaso de agua por la ventanilla. «Esto no se cobra.»", C: "Amalia te pasa un vaso de agua. «El único medicamento sin receta que de verdad recomiendo.»" },
        change: "sonrie", recap: "Amalia, la farmacéutica, te dio un buen consejo.",
      },
      charla: {
        text: { A: "Hablas un rato con Amalia. Ella pone música en su radio.", B: "Charlas un rato con Amalia. Ella sube el volumen de su radio: suena un bolero.", C: "Te quedas un rato en la ventanilla. Amalia sube la radio y tararea un bolero sin acertar la letra." },
        change: "sonrie", recap: "Charlaste con Amalia en la farmacia de guardia.",
      },
      "cuchillo-cierra": {
        text: { A: "Amalia cierra la ventanilla. Llega un patrullero. Explicas todo en la acera. Tarda un poco.", B: "Amalia cierra la ventanilla con llave. Llega un patrullero y explicas lo ocurrido en la acera, con las manos a la vista.", C: "Amalia echa el cerrojo. Llega un patrullero y tu explicación dura más que el dolor de cabeza que no llegaste a tratar." },
        change: "policia", recap: "Asustaste a Amalia con un cuchillo y llegó la policía.",
      },
      "cuchillo-calma": {
        text: { A: "Amalia te vende una pastilla sin sonreír. «Y guarda ese cuchillo, corazón.»", B: "Amalia te da una pastilla sin sonreír. «Y guarda ese cuchillo, corazón. Aquí solo se cortan cosas con receta.»", C: "Amalia te entrega una caja con cara de guardia. «Y el cuchillo, guardado, corazón. En esta farmacia lo único que se corta son las pastillas.»" },
        change: "luz", recap: "Calmaste a Amalia después del susto del cuchillo.",
      },
      "cuchillo-policia": {
        text: { A: "Llega un patrullero. Un agente te quita el cuchillo y te hace preguntas. Amalia mira desde la ventanilla.", B: "Llega un patrullero. Un agente te quita el cuchillo y te hace preguntas mientras Amalia mira desde la ventanilla, tomando té.", C: "Llega un patrullero. Un agente te desarma y te interroga en la acera mientras Amalia, tras el cristal, vuelve a su té frío." },
        change: "policia", recap: "Tu cuchillo en la farmacia terminó con la policía.",
      },
      "pistola-alarma": {
        text: { A: "Llega un patrullero con las luces azules. Un agente te dice: «Manos arriba». Te llevan.", B: "Llega un patrullero con luces azules. Dos agentes te ordenan poner las manos en la cabeza y te llevan a la comisaría.", C: "Llega un patrullero en silencio y con las luces azules. Dos agentes te piden, con mucha cortesía, que pongas las manos en la cabeza. Te llevan." },
        change: "policia", recap: "Entraste a la farmacia con una pistola y terminaste con la policía.",
      },
      "pistola-pastilla": {
        text: { A: "Pagas la pastilla. Amalia cierra la ventanilla con llave. Ya no sonríe.", B: "Pagas la pastilla. Amalia cierra la ventanilla con llave y baja la persiana. Esta noche ya no habrá charla.", C: "Pagas la pastilla. Amalia cierra con llave, baja la persiana y apaga la radio. La cruz verde parpadea con cierta frialdad." },
        change: "luz", recap: "Compraste una pastilla en la farmacia después de asustar a Amalia con una pistola.",
      },
      "granada-evacuan": {
        text: { A: "Llegan tres patrulleros y un helicóptero. Evacúan la calle. La granada es de plástico.", B: "Llegan tres patrulleros y un helicóptero sobrevuela la farmacia. Evacúan la calle. Veinte minutos después, la granada resulta ser de plástico.", C: "Llegan tres patrulleros, un helicóptero y un artificiero con traje de astronauta. Evacúan la calle y, tras veinte minutos, confirman que la granada es de plástico. Amalia pide un té." },
        change: "helicoptero", recap: "Tu granada en la farmacia provocó una evacuación con helicóptero.",
      },
      "granada-risa": {
        text: { A: "Amalia te da la pastilla y se ríe. Pone un bolero en la radio. Todo está bien.", B: "Amalia te da la pastilla y se sigue riendo. Sube la radio: suena un bolero. La noche vuelve a ser tranquila.", C: "Amalia te da la pastilla, aún riéndose, y pone un bolero en la radio. Esta noche tiene una anécdota que contará en cuarenta años más de guardia." },
        change: "sonrie", recap: "Tu granada de plástico acabó en risas en la farmacia.",
      },
      "corazon-abrazo": {
        text: { A: "Amalia te abraza por la ventanilla. Te da un caramelo. Es un abrazo largo.", B: "Amalia te abraza por la ventanilla y te da un caramelo. Es el abrazo más largo de su turno.", C: "Amalia te abraza por la ventanilla, te da un caramelo de miel y suspira. Es el primer abrazo que recibe en una guardia en diez años." },
        change: "abraza", recap: "Amalia, la farmacéutica, te abrazó por la ventanilla.",
      },
      "corazon-te": {
        text: { A: "Tomas té con Amalia. Ella pone un bolero. Te vas con una bolsa de caramelos.", B: "Tomas té con Amalia mientras suena un bolero. Te vas con una bolsa de caramelos y el dolor de cabeza olvidado.", C: "Tomas té con Amalia mientras suena un bolero de la radio. Sales con una bolsa de caramelos y el dolor de cabeza desvanecido por motivos que no son farmacológicos." },
        change: "sonrie", recap: "Tomaste té con Amalia en la farmacia de guardia.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "grita", speak: { A: "¿Qué haces si alguien te amenaza?", B: "¿Cuál fue la última vez que alguien te tuvo miedo sin motivo?", C: "¿Qué se siente al ser tomado por una amenaza solo por llevar algo en la mano?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué harías si te amenazaran en tu trabajo?", B: "¿Cómo mantendrías la calma si alguien armado te pidiera algo?", C: "¿Qué te enseña el miedo sobre cómo tratamos a quienes trabajan de noche?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué haces si hay pánico a tu alrededor?", B: "¿Cuál fue la broma más pesada que te hicieron?", C: "¿Cuándo una broma deja de tener gracia y empieza a tener consecuencias?" } },
      corazon: { start: "corazon-inicio", fx: "corazon", speak: { A: "¿Quién te prepara un té cuando estás mal?", B: "¿Qué recuerdo de tu abuela o de una persona mayor te hace sonreír?", C: "¿Qué gestos pequeños de ternura te han reconciliado con una mala noche?" } },
    },
    speak: {
      A1: "¿Qué haces cuando te duele la cabeza?",
      A2: "¿Cuándo fuiste a una farmacia por última vez?",
      B1: "¿Qué remedios caseros usan en tu familia?",
      B2: "¿Qué trabajos nocturnos te parecen más importantes para una ciudad?",
      C1: "¿Cómo distingues un consejo útil de uno que solo suena bien?",
      C2: "¿Qué papel juegan los pequeños rituales de cuidado en la manera en que nos sentimos protegidos?",
    },
  },

  {
    id: "clinica-espera",
    kind: "rincon",
    district: "clinica",
    title: "Esperando noticias",
    verb: "ACERCARME",
    goal: "Tranquilizar a alguien nervioso, preguntar por una situación personal y dar ánimos.",
    cast: [
      {
        id: "fermin", name: "Fermín", role: "Futuro papá nervioso",
        age: "adult", body: "m", build: "slim", height: 1.8,
        hair: "buzz", hairColor: "#4a3a2a", skin: "#c68e65",
        top: "shirt", topColor: "#e8d9b5", bottom: "pants", bottomColor: "#3d3d3d",
        extras: ["bag", "beard"], pose: "walk", props: ["bench"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "fermin", mood: "worried",
        line: {
          A: "Un hombre camina de un lado a otro frente a la clínica. «Mi mujer está en el parto. ¡Y no me dicen nada!»",
          B: "Un hombre con una bolsa de hospital camina de un lado a otro. «Mi mujer está de parto desde hace cuatro horas. Me mandaron afuera porque, según ellos, los ponía nerviosos.»",
          C: "Un hombre recorre la acera como un león enjaulado. «Me echaron de la sala de partos. Por lo visto, mis ejercicios de respiración ponían nerviosa a la matrona.»",
        },
        options: [
          {
            id: "tranquilizar",
            say: { A: "Tranquilo. Todo va a salir bien.", B: "Tranquilo, seguro que todo va bien. Si hubiera un problema, te avisarían.", C: "Respira. Que no te digan nada suele ser buena señal: las malas noticias corren." },
            reply: { A: "Fermín respira. «¿Tú crees? Gracias.»", B: "Fermín se detiene. «¿Tú crees? Sí… tiene sentido.» Por fin se sienta.", C: "Fermín se para en seco. «No lo había pensado así.» Se sienta en el banco, por primera vez en una hora." },
            mood: "neutral", end: "sienta",
          },
          {
            id: "nombre",
            say: { A: "¿Es niño o niña? ¿Ya tienen nombre?", B: "¡Felicidades! ¿Ya saben si es niño o niña? ¿Y el nombre?", C: "¡Enhorabuena anticipada! ¿Y el nombre? ¿Ya está decidido o hay negociaciones abiertas?" },
            reply: { A: "Fermín se ríe. «Es niña. Pero no tenemos nombre.»", B: "«Es niña. ¿El nombre? Llevamos nueve meses discutiendo.»", C: "«Niña», dice Fermín. «El nombre está en plena negociación internacional. Ella quiere Olivia, yo quiero Olivia no.»" },
            mood: "smile", next: "nombre",
          },
          {
            id: "distraer",
            say: { A: "¿Quieres un café? Hay una máquina allí.", B: "¿Te traigo un café de la máquina? Te va a venir bien distraerte.", C: "¿Un café de máquina? Es malísimo, pero al menos tendrás algo en las manos." },
            reply: { A: "Fermín dice que sí. «Sí, por favor. Sin azúcar.»", B: "«Sí, por favor. Sin azúcar. Ya tengo bastante energía.»", C: "«Sí, gracias. Sin azúcar», dice Fermín. «Si tomo azúcar, me vuelven a echar, esta vez de la calle.»" },
            mood: "smile", end: "sienta",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Vas a ser un buen papá. Se nota.", B: "Se nota que vas a ser un papá estupendo. Estás aquí, preocupado por ellas.", C: "Alguien que se pone así de nervioso por su hija ya es un buen padre, aunque todavía no la conozca." },
            reply: { A: "Fermín se emociona. «Gracias. Mi papá no estaba nunca. Yo quiero estar.»", B: "Fermín se emociona. «Mi padre nunca estuvo. Por eso tengo tanto miedo de hacerlo mal.»", C: "A Fermín se le quiebra la voz. «Mi padre no estuvo nunca. Llevo nueve meses aprendiendo a ser lo que él no fue.»" },
            mood: "love", end: "noticia",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y un papel.", B: "Sacas el lápiz y un papel.", C: "Sacas el lápiz y un papel: hora de la diplomacia." },
            say: { A: "Escribimos nombres para la niña. ¿Te ayudo?", B: "¿Hacemos una lista de nombres? Así le llevas propuestas a tu mujer.", C: "Hagamos una lista de nombres. Una buena negociación necesita propuestas por escrito." },
            reply: { A: "Fermín sonríe. «¡Sí! Escribe: Luna, Sara, Olivia…»", B: "Fermín se anima. «¡Buena idea! Luna, Sara… y Olivia, pero al final, que no gane.»", C: "Fermín dicta, animado. «Luna, Sara, Inés… Olivia en letra pequeñita, que no destaque.»" },
            mood: "smile", next: "nombre",
          },
        },
      },
      nombre: {
        who: "fermin", mood: "smile",
        line: {
          A: "Fermín piensa. «A mí me gusta Luna. A ella, Olivia. ¿A ti cuál te gusta?»",
          B: "«A mí me encanta Luna, pero ella quiere Olivia», dice Fermín. «¿Tú qué opinas?»",
          C: "«Luna contra Olivia», resume Fermín. «Tú eres neutral. Desempata, por favor.»",
        },
        options: [
          {
            id: "luna",
            say: { A: "Me gusta Luna. Es bonito y corto.", B: "Yo elegiría Luna. Es corto, bonito y queda bien en cualquier idioma.", C: "Luna. Es breve, luminoso y nadie lo pronuncia mal." },
            reply: { A: "Fermín levanta los brazos. «¡Sí! ¡Luna!»", B: "«¡Lo sabía!», grita Fermín. «Voy a decirle que una persona neutral eligió Luna.»", C: "«¡Un voto independiente!», celebra Fermín. «Esto lo cambia todo.»" },
            mood: "smile", end: "noticia",
          },
          {
            id: "olivia",
            say: { A: "A mí me gusta Olivia. Es muy bonito.", B: "Perdona, pero yo prefiero Olivia. Además, ella hace el trabajo difícil esta noche.", C: "Lo siento, Fermín: Olivia. Y, siendo honestos, esta noche ella tiene derecho a veto." },
            reply: { A: "Fermín se ríe. «Bueno… Olivia también es bonito.»", B: "Fermín suspira y se ríe. «Tienes razón. Esta noche, ella decide todo.»", C: "Fermín levanta las manos. «Derecho a veto. Me parece justo. Olivia, entonces.»" },
            mood: "smile", end: "noticia",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Los dos nombres son bonitos. ¿Y Luna Olivia?", B: "¿Y si ponen los dos? Luna Olivia suena precioso.", C: "Propuesta de paz: Luna Olivia. Nadie pierde y la niña tiene nombre de poema." },
            reply: { A: "Fermín te abraza. «¡Luna Olivia! ¡Perfecto!»", B: "Fermín te abraza sin pensarlo. «¡Luna Olivia! ¡Eres un genio!»", C: "Fermín te abraza como si hubieras firmado un tratado de paz. «¡Luna Olivia! Se lo propongo ahora mismo.»" },
            mood: "love", end: "noticia",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "fermin", mood: "terror",
        line: { A: "Fermín ve el cuchillo y retrocede hasta la pared. «¡Eh! ¡Aquí hay un hospital! ¡Guardia!»", B: "Fermín ve el cuchillo, retrocede hasta chocar con la pared y grita hacia la puerta de la clínica. «¡Guardia! ¡Hay alguien con un cuchillo!»", C: "Fermín ve el cuchillo y su ansiedad de futuro padre encuentra por fin un objetivo. Retrocede y grita: «¡Guardia! ¡Un cuchillo, a la puerta de una maternidad!»" },
        options: [
          {
            id: "calmar",
            say: { A: "Tranquilo. Es para la fruta. Lo guardo.", B: "Tranquilo, hombre. Es para pelar fruta. Lo guardo ahora mismo.", C: "Calma, por favor. Es un cuchillo de fruta. Lo guardo ahora mismo y me quedo donde estoy." },
            reply: { A: "El guardia sale corriendo. Fermín lo detiene: «Espera. Dice que es fruta.»", B: "El guardia sale corriendo, pero Fermín lo detiene con la mano. «Espera, dice que es para fruta.»", C: "El guardia sale en tromba. Fermín levanta la mano: «Espera, espera. Dice que es para fruta.» Los tres se miran en un silencio muy largo." },
            mood: "worried", next: "cuchillo-guardia",
          },
          {
            id: "huir",
            say: { A: "Perdón. Me voy.", B: "Perdón, perdón. Me voy.", C: "Me voy antes de empeorarlo." },
            reply: { A: "Te alejas. Fermín se sienta en el banco, temblando más que antes.", B: "Te alejas deprisa. Fermín se sienta en el banco, temblando más que antes de verte.", C: "Te alejas deprisa. Fermín se deja caer en el banco, con una ansiedad nueva que añadir a la anterior." },
            mood: "scared", end: "cuchillo-sustos",
          },
        ],
      },
      "cuchillo-guardia": {
        who: "fermin", mood: "worried",
        line: { A: "El guardia mira el cuchillo, a ti y a Fermín. «¿Qué pasa aquí?»", B: "El guardia de seguridad mira el cuchillo, luego a ti, luego a Fermín. «¿Alguien me explica qué pasa aquí?»", C: "El guardia mira el cuchillo, después a ti, después a Fermín. «¿Alguien quiere explicarme por qué hay un cuchillo en la puerta de una maternidad?»" },
        options: [
          {
            id: "manzana",
            say: { A: "Es para la manzana de este señor. Mire.", B: "Es para pelarle una manzana a este señor. Quería distraerlo.", C: "Es para pelarle una manzana al señor y distraerlo. Reconozco que el método ha sido torpe." },
            reply: { A: "Fermín se ríe nervioso. «Es verdad. Me ofreció una manzana.» El guardia se relaja.", B: "Fermín se ríe nervioso. «Es verdad, me ofreció una manzana. Pero con el susto se me ha pasado el hambre.» El guardia se relaja.", C: "Fermín se ríe, histérico. «Es cierto, me iba a ofrecer fruta. A mi edad, nadie me pela una manzana sin que me dé un infarto.» El guardia se relaja." },
            mood: "smile", end: "cuchillo-manzana",
          },
          {
            id: "entregar",
            say: { A: "Tome. Se lo doy.", B: "Tome el cuchillo, agente. Se lo entrego.", C: "Tome, se lo entrego. Y me retiro sin hacer ruido." },
            reply: { A: "El guardia se queda con el cuchillo y te acompaña a la salida. Fermín suspira.", B: "El guardia se queda con el cuchillo y te acompaña hasta la salida. Fermín suspira, aliviado.", C: "El guardia confisca el cuchillo y te acompaña hasta la salida con educación gélida. Fermín suspira y vuelve a mirar la puerta de la sala de partos." },
            mood: "neutral", end: "cuchillo-sustos",
          },
        ],
      },
      "pistola-inicio": {
        who: "fermin", mood: "terror",
        line: { A: "Fermín ve la pistola y levanta las manos. «¡No! ¡Mi mujer está de parto! ¡Por favor!»", B: "Fermín ve la pistola y levanta las manos, con la bolsa colgando. «¡Por favor! ¡Mi mujer está de parto! ¡No tengo nada!»", C: "Fermín ve la pistola y levanta las manos, con la bolsa de hospital colgando del brazo. «Mi mujer está de parto. Llévese lo que quiera, pero déjeme entrar a conocer a mi hija.»" },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. No es para ti. Perdón.", B: "La guardo. No es para ti, de verdad. Perdón.", C: "La guardo ahora mismo. No es para ti. Pido disculpas." },
            reply: { A: "Fermín baja las manos. «¿Entonces por qué la llevas? Estoy muy nervioso.»", B: "Fermín baja las manos, sin dejar de temblar. «¿Entonces por qué la llevas? Ya estoy bastante nervioso.»", C: "Fermín baja las manos con cuidado. «¿Y entonces por qué la llevas? Ya tenía bastante con la espera.»" },
            mood: "scared", next: "pistola-guardia",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón! ¡Me voy ya!", C: "¡Me retiro! ¡Perdón!" },
            reply: { A: "Corres. Fermín grita: «¡Guardia!» Un patrullero llega enseguida.", B: "Echas a correr. Fermín grita «¡Guardia!» y, en un minuto, un patrullero dobla la esquina.", C: "Echas a correr. Fermín grita «¡Policía!» con la voz más fuerte que le has oído y, en un minuto, un patrullero dobla la esquina." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-guardia": {
        who: "fermin", mood: "worried",
        line: { A: "Fermín mira la pistola en tu cinturón. «Soy un hombre pacífico. Hoy nace mi hija. No quiero problemas.»", B: "Fermín no aparta la vista de la pistola. «Soy un hombre pacífico. Hoy nace mi hija y no quiero problemas con nadie.»", C: "Fermín no aparta la vista de la pistola. «Soy un hombre pacífico. Hoy nace mi hija, y lo último que necesito es convertirme en una anécdota policial.»" },
        options: [
          {
            id: "calma",
            say: { A: "Yo tampoco. Siéntate. Estoy aquí para ayudar.", B: "Yo tampoco. Siéntate, por favor. Solo quiero ayudar.", C: "Yo tampoco quiero problemas. Siéntate y respira; estoy aquí para ayudar, no para otra cosa." },
            reply: { A: "Fermín se sienta con cuidado. «Mi hija nace esta noche. Gracias por no… Bueno, gracias.»", B: "Fermín se sienta con mucho cuidado. «Mi hija nace esta noche. Gracias por no… bueno, gracias.»", C: "Fermín se sienta como quien se acomoda junto a un desactivador. «Mi hija nace esta noche. Gracias por no… bueno, por todo.»" },
            mood: "worried", end: "pistola-sienta",
          },
          {
            id: "reglas",
            say: { A: "Tengo permiso. Soy guardia de seguridad.", B: "Tengo permiso. Soy guardia de seguridad de otro local.", C: "Tengo permiso: soy guardia de seguridad en otro turno, y el hábito de no soltarla me delata." },
            reply: { A: "Fermín te mira dudoso. «Perdona, pero prefiero llamar a alguien de la clínica.»", B: "Fermín te mira sin fiarse. «Perdona, pero prefiero que lo confirme alguien de la clínica.»", C: "Fermín te mira sin fiarse. «Con todo respeto, prefiero que lo confirme el guardia de la clínica. Hoy he aprendido a desconfiar.»" },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "fermin", mood: "terror",
        line: { A: "Fermín ve la granada, grita y corre hacia la clínica. «¡Granada! ¡Hay una granada afuera!»", B: "Fermín ve la granada, suelta la bolsa y corre gritando hacia la clínica. «¡Granada! ¡Hay una granada en la puerta!»", C: "Fermín ve la granada y sale disparado hacia la clínica, gritando «¡Granada!» con una voz que sorprende hasta a los celadores. La bolsa de hospital queda abandonada en el banco." },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Vuelve!", B: "¡Es de juguete! ¡Fermín, vuelve!", C: "¡Es de utilería! ¡Vuelve, hombre, es de plástico!" },
            reply: { A: "Fermín se detiene en la puerta. «¿De juguete? ¡Qué susto!» Pero ya salen enfermeros.", B: "Fermín se detiene en la puerta. «¿De juguete?» Demasiado tarde: ya salen dos enfermeros y un guardia.", C: "Fermín se detiene en la puerta. «¿De juguete?» Tarde: tres enfermeros y un guardia ya cruzan el vestíbulo en tu dirección." },
            mood: "scared", next: "granada-evacuan",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, me voy!", C: "¡Me retiro! ¡Fue un error!" },
            reply: { A: "Corres. Detrás, alguien grita «¡Evacuen!» y suena una sirena.", B: "Corres. Detrás oyes «¡Evacuen la entrada!» y una sirena empieza a sonar.", C: "Corres con la granada en la mano. Detrás, un megáfono ordena evacuar la entrada de la clínica, y una sirena añade su opinión." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "granada-evacuan": {
        who: "fermin", mood: "worried",
        line: { A: "Un enfermero te mira. «¿Eso es una granada?» Fermín espera, pálido, en la puerta.", B: "Un enfermero te mira, serio. «¿Eso es una granada de verdad?» Fermín, pálido, se asoma desde la puerta.", C: "Un enfermero se planta ante ti. «¿Eso es una granada de verdad, o es la peor idea de la noche?» Fermín, pálido, asoma la cabeza desde la puerta." },
        options: [
          {
            id: "broma",
            say: { A: "Es una broma. Es de plástico. Perdón.", B: "Es una broma de mal gusto. Es de plástico. Perdón.", C: "Es una broma de pésimo gusto, y de plástico. Pido disculpas a todos." },
            reply: { A: "El enfermero resopla. Fermín se ríe: «Estoy tan nervioso que ya nada me asusta.»", B: "El enfermero resopla. Fermín se ríe, histérico: «Estoy tan nervioso que ya nada me asusta.»", C: "El enfermero resopla. Fermín se ríe: «Después de nueve meses y cuatro horas de parto, ya nada me asusta.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "regalar",
            say: { A: "Tome. Quédese con ella.", B: "Tome. Quédese con ella para que no pase nada.", C: "Tome, quédese con ella, y la noche vuelve a ser aburrida." },
            reply: { A: "El enfermero la toma con un trapo, como si quemara. Llama a seguridad. Llega un helicóptero.", B: "El enfermero la toma con un trapo, como si quemara. Llama a seguridad y, poco después, un helicóptero sobrevuela la clínica.", C: "El enfermero la toma con un trapo, como si ardiera. Llama a seguridad y, ante la duda, alguien avisa a un helicóptero que sobrevuela la clínica." },
            mood: "scared", end: "granada-evacuan2",
          },
        ],
      },
      "corazon-inicio": {
        who: "fermin", mood: "love",
        line: { A: "Fermín te ve y se queda quieto. Se acerca y te abraza sin decir nada. «No sé por qué, pero necesito esto.»", B: "Fermín te ve y se queda quieto un segundo. Luego se acerca y te abraza. «No sé por qué, pero necesitaba un abrazo. Gracias.»", C: "Fermín te ve, deja de caminar y te abraza sin mediar palabra. «Perdona. No sé quién eres, pero llevo cuatro horas necesitando esto.»" },
        options: [
          {
            id: "tranquilo",
            say: { A: "Estoy contigo. Respira.", B: "Estoy contigo. Respira hondo, Fermín.", C: "Estoy aquí contigo. Respira hondo; lo peor ya pasó." },
            reply: { A: "Fermín respira. «Mi padre no estuvo cuando nací yo. Quiero estar. Pero tengo miedo.»", B: "Fermín respira hondo. «Mi padre nunca estuvo. Quiero estar yo, pero me da miedo hacerlo mal.»", C: "Fermín respira hondo. «Mi padre nunca estuvo. Quiero estar yo, pero me aterra repetir lo que no quiero repetir.»" },
            mood: "love", next: "corazon-padre",
          },
          {
            id: "nombre",
            say: { A: "¿Cómo se llama tu hija?", B: "¿Y el nombre de tu hija? ¿Ya lo decidieron?", C: "¿Y el nombre de tu hija? ¿Cómo va la negociación?" },
            reply: { A: "Fermín sonríe. «Luna Olivia, creo. Ven, siéntate.» Te lleva al banco.", B: "Fermín sonríe. «Luna Olivia, creo, aunque lo estamos negociando.» Te lleva al banco.", C: "Fermín sonríe. «Luna Olivia, aunque aún hay conversaciones diplomáticas.» Te lleva del brazo al banco." },
            mood: "love", end: "corazon-sienta",
          },
        ],
      },
      "corazon-padre": {
        who: "fermin", mood: "smitten",
        line: { A: "Fermín se sienta contigo. «Tú tienes algo que calma. ¿Tienes hijos?»", B: "Fermín se sienta contigo en el banco. «Tienes algo que tranquiliza, ¿sabes? ¿Tú tienes hijos?»", C: "Fermín se sienta a tu lado. «Tienes un don para calmar a la gente. ¿Tienes hijos? Necesito un consejo de alguien que haya sobrevivido a esto.»" },
        options: [
          {
            id: "consejo",
            say: { A: "No tengo. Pero estar presente es lo más importante.", B: "No tengo. Pero estar presente lo es todo, creo.", C: "No tengo hijos, pero me parece que estar presente es el consejo principal y casi el único." },
            reply: { A: "Fermín llora un poco. «Gracias.» Suena el teléfono: ¡ya nació! Te abraza.", B: "Fermín llora un poco. «Gracias.» En ese instante suena su teléfono: «¡Ya nació!» Te abraza otra vez.", C: "Fermín llora y ríe a la vez. «Gracias.» Suena su teléfono: «¡Ya nació!» Y te abraza como al padrino de la criatura." },
            mood: "love", end: "corazon-nace",
          },
          {
            id: "acompañar",
            say: { A: "Voy contigo hasta la puerta.", B: "Si quieres, te acompaño hasta la puerta de la sala.", C: "Si quieres, te acompaño hasta la puerta de la sala. No entro, pero me quedo." },
            reply: { A: "Fermín se levanta. «Sí, por favor.» Caminan juntos hasta la puerta. Una enfermera sonríe.", B: "Fermín se levanta. «Sí, por favor.» Caminan juntos hasta la puerta de la sala y una enfermera le hace una seña: ya puede pasar.", C: "Fermín se levanta con las piernas flojas. «Sí, por favor.» Caminan hasta la sala; una enfermera aparece y le hace una seña: es su turno." },
            mood: "love", end: "corazon-nace",
          },
        ],
      },
    },
    ends: {
      sienta: {
        text: { A: "Fermín se sienta en el banco. Está más tranquilo.", B: "Fermín se sienta en el banco y, por fin, deja de mirar la puerta cada segundo.", C: "Fermín se sienta y respira. La puerta de la clínica sigue cerrada, pero él ya no la vigila como un portero." },
        change: "se-sienta", recap: "Tranquilizaste a Fermín mientras esperaba.",
      },
      noticia: {
        text: { A: "Suena el teléfono de Fermín. «¡Es una niña! ¡Ya nació!» Te abraza.", B: "Suena el teléfono. Fermín grita: «¡Ya nació! ¡Las dos están bien!» Y te abraza sin pedir permiso.", C: "Suena el teléfono. Fermín escucha, se tapa la boca y luego grita: «¡Ya nació!» Te abraza a ti, al guardia y a una farola." },
        change: "abraza", recap: "Estabas con Fermín cuando nació su hija.",
      },
      "cuchillo-sustos": {
        text: { A: "Fermín tiembla en el banco. Ya tiene un susto más esta noche. El cuchillo no vuelve a salir.", B: "Fermín tiembla en el banco: esta noche ya acumula dos sustos. Tu cuchillo no vuelve a salir.", C: "Fermín se deja caer en el banco, con dos sustos acumulados en la misma noche. Tu cuchillo, al menos, no vuelve a salir." },
        change: "huye", recap: "Asustaste a Fermín con un cuchillo mientras esperaba noticias.",
      },
      "cuchillo-manzana": {
        text: { A: "Cortas la manzana. Fermín se la come. Suena su teléfono: ¡nació su hija!", B: "Cortas la manzana en trozos y Fermín se come uno. Suena su teléfono: «¡Ya nació!»", C: "Cortas la manzana en gajos, y Fermín apenas ha mordido uno cuando suena el teléfono. «¡Ya nació!» El cuchillo, por una vez, acompaña buenas noticias." },
        change: "abraza", recap: "Estabas con Fermín cuando nació su hija, después del susto del cuchillo.",
      },
      "pistola-patrulla": {
        text: { A: "Llega un patrullero. Te quitan la pistola y te hacen preguntas. Fermín mira el teléfono: aún nada.", B: "Llega un patrullero. Te quitan la pistola y te interrogan en la acera. Fermín mira el teléfono: todavía no hay noticias.", C: "Llega un patrullero. Te desarman, te interrogan en la acera y, a lo lejos, Fermín mira el teléfono con una impaciencia que ya no es solo suya." },
        change: "policia", recap: "Tu pistola frente a la clínica terminó con la policía mientras Fermín esperaba.",
      },
      "pistola-sienta": {
        text: { A: "Fermín se sienta contigo. Respiran juntos. Pronto suena su teléfono: ¡es una niña!", B: "Fermín se sienta contigo y respiran juntos. Poco después suena su teléfono: «¡Es una niña!»", C: "Fermín se sienta a tu lado y respiran al mismo ritmo, él con miedo, tú con tu pistola. Cuando suena el teléfono («¡Es una niña!»), nadie recuerda quién tenía qué." },
        change: "se-sienta", recap: "Calmaste a Fermín después del susto de tu pistola y estuviste con él cuando nació su hija.",
      },
      "granada-evacuan": {
        text: { A: "Evacúan la entrada. Un helicóptero ilumina el edificio. Fermín mira el teléfono: aún nada.", B: "Evacúan la entrada de la clínica y un helicóptero ilumina el edificio. Fermín mira el teléfono: todavía nada.", C: "Evacúan la entrada, un helicóptero ilumina la fachada y, entre tanta luz, Fermín mira el teléfono con una impaciencia que ya nadie le discute." },
        change: "helicoptero", recap: "Tu granada frente a la clínica provocó una evacuación con helicóptero.",
      },
      "granada-evacuan2": {
        text: { A: "Evacúan la clínica entera. Fermín entra a ver a su hija en brazos de un enfermero. Qué noche.", B: "Evacúan la clínica entera. Entre empujones, Fermín conoce a su hija en brazos de un enfermero. Qué noche.", C: "Evacúan media clínica. En medio del caos, Fermín conoce a su hija en brazos de un enfermero, la noche más ruidosa y feliz de su vida." },
        change: "helicoptero", recap: "Tu granada provocó una evacuación justo cuando nació la hija de Fermín.",
      },
      "granada-risa": {
        text: { A: "Fermín suelta una risa nerviosa. Tu granada de plástico le quita el miedo. Suena el teléfono: ¡ya nació!", B: "Fermín suelta una risa nerviosa. Tu granada de plástico le quita el miedo de golpe. Suena su teléfono: «¡Ya nació!»", C: "Fermín ríe a carcajadas por puro agotamiento. Tu granada de plástico le ha devuelto el humor. Suena el teléfono: «¡Ya nació!» Y se abraza al enfermero." },
        change: "abraza", recap: "Tu granada de plástico hizo reír a Fermín justo antes de que naciera su hija.",
      },
      "corazon-sienta": {
        text: { A: "Se sientan juntos en el banco. Fermín se calma. Pronto suena el teléfono: ¡es una niña!", B: "Se sientan juntos en el banco y Fermín se calma poco a poco. Poco después suena su teléfono: «¡Es una niña!»", C: "Se sientan en el banco y Fermín deja de contar los minutos. Cuando suena el teléfono («¡Es una niña!»), ya está lo bastante sereno para llorar con alegría." },
        change: "se-sienta", recap: "Abrazaste a Fermín y esperaron juntos el nacimiento de su hija.",
      },
      "corazon-nace": {
        text: { A: "Fermín entra a la sala. Sale llorando de felicidad. Te abraza otra vez.", B: "Fermín entra a la sala y sale a los diez minutos, llorando de felicidad. Te abraza otra vez.", C: "Fermín entra en la sala y sale con los ojos rojos y una sonrisa enorme. Te abraza por tercera vez esta noche, y nadie lleva la cuenta." },
        change: "abraza", recap: "Acompañaste a Fermín hasta el nacimiento de su hija.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando te asustas sin querer?", B: "¿Alguna vez un susto cambió por completo tu noche?", C: "¿Cómo se enfrenta un miedo cuando ya estás ocupado con otro más grande?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué te da más miedo: esperar o enfrentarte a un peligro?", B: "¿Cómo reaccionarías si te asustaran en un momento de mucha tensión?", C: "¿Qué prioridades se revelan cuando nos amenazan en un día importante?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Cómo reaccionas cuando alguien grita?", B: "¿Qué es lo más absurdo que te pasó esperando una noticia?", C: "¿Cómo se mezclan el pánico y la risa en los días que más recordamos?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Quién te abraza cuando estás nervioso?", B: "¿Qué consejo le darías a alguien que va a ser padre o madre?", C: "¿Qué le dirías a alguien que teme repetir los errores de sus padres?" } },
    },
    speak: {
      A1: "¿Cómo se llaman las personas de tu familia?",
      A2: "¿Quién eligió tu nombre y por qué?",
      B1: "¿Qué haces para calmarte cuando esperas una noticia importante?",
      B2: "¿Qué nombre le pondrías a un hijo y por qué?",
      C1: "¿En qué momentos de tu vida la espera fue peor que la noticia?",
      C2: "¿Qué heredamos sin querer de nuestros padres, y qué decidimos conscientemente no repetir?",
    },
  },

  {
    id: "clinica-maquina",
    kind: "rincon",
    district: "clinica",
    title: "La máquina que se come monedas",
    verb: "AYUDAR",
    goal: "Ofrecer ayuda, proponer soluciones prácticas y bromear sobre un pequeño problema.",
    cast: [
      {
        id: "dario", name: "Darío", role: "Enfermero de guardia",
        age: "adult", body: "m", build: "average", height: 1.7,
        hair: "afro", hairColor: "#1c1c1c", skin: "#4a2c1d",
        top: "scrubs", topColor: "#7b5ea7", bottom: "pants", bottomColor: "#7b5ea7",
        extras: ["headphones"], pose: "lean", props: ["vending-machine"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "dario", mood: "angry",
        line: {
          A: "Un enfermero golpea una máquina de comida. «¡Se comió mi moneda! Es mi última moneda.»",
          B: "Un enfermero apoya la frente en la máquina expendedora. «Mi última moneda. Mi única cena. Y esta máquina se la comió.»",
          C: "Un enfermero mira la máquina expendedora como a un enemigo íntimo. «Catorce horas de turno, una moneda, una galleta. Y la máquina decide que hoy no.»",
        },
        options: [
          {
            id: "golpe",
            say: { A: "Déjame probar. A veces funciona un golpe aquí.", B: "Déjame a mí. Mi abuelo decía que estas máquinas se arreglan con un golpe en el costado.", C: "Permíteme. Tengo un máster en máquinas rebeldes: golpe seco, lateral izquierdo." },
            reply: { A: "Das un golpe. ¡Caen dos galletas! Darío se ríe.", B: "Das un golpe en el costado. La máquina tiembla y caen… dos galletas. Darío no lo puede creer.", C: "Golpe seco. La máquina reflexiona y suelta dos galletas. «Tu abuelo era un sabio», dice Darío." },
            mood: "surprised", end: "galletas",
          },
          {
            id: "moneda",
            say: { A: "Toma, tengo una moneda. Te invito.", B: "No te preocupes, yo tengo una moneda. Te invito a cenar… más o menos.", C: "Toma, invito yo. No es una cena de lujo, pero al menos es una cena." },
            reply: { A: "Darío sonríe. «¡Gracias! Te debo una galleta.»", B: "«¿En serio? Gracias. La primera cena que me invitan en meses, y es en una máquina.»", C: "Darío acepta la moneda con dramatismo. «Mi primera cita en meses. Romántica, con luz fluorescente.»" },
            mood: "smile", end: "luz",
          },
          {
            id: "broma",
            say: { A: "Esta máquina tiene más hambre que tú.", B: "Creo que la máquina tiene más hambre que tú.", C: "Mira el lado bueno: al menos alguien cena esta noche en la clínica." },
            reply: { A: "Darío se ríe. «¡Es verdad! Bueno, voy a buscar otra moneda.»", B: "Darío se ríe a pesar de todo. «Pues que le aproveche. Voy a buscar en los bolsillos de mis compañeros.»", C: "Darío suelta una carcajada. «Ella cena y yo no. La historia de mi vida.» Se va a buscar suerte en otro lado." },
            mood: "smile", end: "nada",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Trabajas mucho. Te mereces una cena de verdad.", B: "Con el trabajo que haces, te mereces algo mejor que una galleta de máquina.", C: "Alguien que cuida a desconocidos toda la noche merece algo mejor que una galleta y una máquina caprichosa." },
            reply: { A: "Darío sonríe. «Gracias. Mi mamá me hizo comida, pero la dejé en casa.»", B: "Darío se ablanda. «Gracias. Mi mamá me preparó un táper, ¿sabes? Y lo dejé en la mesa de casa.»", C: "Darío se ríe con tristeza. «Mi madre me preparó un guiso. Se quedó en casa, al lado de mis llaves. Bueno, gracias.»" },
            mood: "love", end: "luz",
          },
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz y miras la ranura.", C: "Sacas el lápiz y estudias la ranura como un cirujano." },
            say: { A: "La moneda está ahí. ¿La empujo con el lápiz?", B: "Veo la moneda atascada. ¿Pruebo a empujarla con el lápiz?", C: "Se ve la moneda. Una intervención mínimamente invasiva y la recuperamos." },
            reply: { A: "Empujas la moneda. ¡Cae! Darío aplaude.", B: "Empujas con cuidado y la moneda cae. Darío aplaude. «¡Operación con éxito!»", C: "La moneda cae con un tintineo. «Paciente estable», dice Darío, solemne. «Buen pulso.»" },
            mood: "smile", end: "galletas",
          },
          cuchillo: {
            act: { A: "Sacas el cuchillo.", B: "Sacas el cuchillo para sacar la moneda.", C: "Sacas el cuchillo y apuntas a la ranura de las monedas." },
            say: { A: "Puedo sacar la moneda con esto.", B: "Con la punta puedo sacar la moneda, creo.", C: "Con la punta la saco. Confía en mí." },
            reply: { A: "Darío se asusta. «¡Eh! No, no. Mejor no.»", B: "Darío da un paso atrás. «Uy, no, no. Que soy enfermero, pero esta noche no quiero más trabajo.»", C: "Darío levanta las manos. «Admiro tu iniciativa, pero no quiero coser a nadie esta noche. Ni a la máquina.»" },
            mood: "scared", end: "nada",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "dario", mood: "terror",
        line: { A: "Darío ve el cuchillo y se pega a la máquina. «¡Eh! ¿Qué haces con eso? ¡Soy enfermero, no tengo dinero!»", B: "Darío ve el cuchillo y se pega a la máquina expendedora, con las manos abiertas. «¿Qué haces con eso? ¡Soy enfermero, aquí no hay nada que robar!»", C: "Darío ve el cuchillo y retrocede hasta chocar con la máquina. «Catorce horas de turno y ahora un cuchillo. Soy enfermero: puedo coserte, pero no me obligues.»" },
        options: [
          {
            id: "fruta",
            say: { A: "Es para pelar fruta. Perdón.", B: "Es solo para pelar fruta. Perdón, no quise asustarte.", C: "Es para pelar fruta. Perdón; no he medido bien el efecto de sacarlo." },
            reply: { A: "Darío respira. «¿Fruta? Aquí solo hay galletas.» Mira el cuchillo con desconfianza.", B: "Darío respira. «¿Fruta? Aquí solo hay galletas, compañero.» Mira el cuchillo con desconfianza.", C: "Darío respira. «¿Fruta? Aquí lo más parecido a una fruta es una galleta de manzana.» No quita ojo al cuchillo." },
            mood: "scared", next: "cuchillo-guarda",
          },
          {
            id: "huir",
            say: { A: "Perdón. Me voy.", B: "Perdón, me voy ya.", C: "Disculpa. Me voy antes de empeorarlo." },
            reply: { A: "Te vas. Darío llama a seguridad por el walkie. Al rato, dos guardias te paran.", B: "Te vas. Darío llama a seguridad por el walkie y, a los dos minutos, dos guardias te cierran el paso.", C: "Te vas. Darío informa por el walkie con voz serena y, a los dos minutos, dos guardias te cierran el paso en el pasillo." },
            mood: "scared", end: "cuchillo-guardias",
          },
        ],
      },
      "cuchillo-guarda": {
        who: "dario", mood: "worried",
        line: { A: "Darío no se mueve. «Guarda eso. Y después, si quieres, te ayudo con la máquina.»", B: "Darío no se mueve de la máquina. «Guarda eso, por favor. Y si quieres, después te ayudo con la moneda.»", C: "Darío sigue pegado a la máquina. «Guarda eso, por favor. Después hablamos de monedas y de por qué hay un cuchillo en un pasillo de urgencias.»" },
        options: [
          {
            id: "guardar",
            say: { A: "Ya está. Guardado.", B: "Ya está. Guardado en el bolsillo.", C: "Ya está. Guardado y olvidado." },
            reply: { A: "Darío suelta el aire. «Bien. A ver esa moneda.» Con un golpe, caen galletas.", B: "Darío suelta el aire. «Así mejor. A ver esa moneda.» Con un golpe seco, caen dos galletas.", C: "Darío suelta el aire con un temblor. «Mucho mejor. A ver esa moneda.» Un golpe seco y la máquina, avergonzada, suelta dos galletas." },
            mood: "worried", end: "cuchillo-galletas",
          },
          {
            id: "regalar",
            say: { A: "Toma. Quédate con el cuchillo.", B: "Toma, quédate con él. Para cortar galletas.", C: "Toma, quédate con él. Algo cortará esta noche, aunque sea una galleta." },
            reply: { A: "Darío lo toma con dos dedos. «Gracias… supongo.» Llama a seguridad por si acaso.", B: "Darío lo toma con dos dedos. «Gracias… supongo.» Por si acaso, llama a seguridad.", C: "Darío lo toma con dos dedos. «Gracias, creo.» Por prudencia, llama a seguridad antes de que acabe la frase." },
            mood: "scared", end: "cuchillo-guardias",
          },
        ],
      },
      "pistola-inicio": {
        who: "dario", mood: "terror",
        line: { A: "Darío ve la pistola y levanta las manos despacio. «Tranquilo… No tengo nada. Solo quería una galleta.»", B: "Darío ve la pistola y levanta las manos despacio. «Tranquilo, tranquilo. No tengo nada. Solo quería una galleta de la máquina.»", C: "Darío ve la pistola y levanta las manos con lentitud profesional. «Tranquilo. Soy enfermero y hoy no tengo ni dinero ni cena. Lo único que quería era una galleta.»" },
        options: [
          {
            id: "guardar",
            say: { A: "No es para ti. La guardo.", B: "No es para ti, tranquilo. La guardo ahora.", C: "No es para ti. La guardo ahora mismo; perdona el mal momento." },
            reply: { A: "Darío baja las manos. «¿Entonces para qué la llevas?»", B: "Darío baja las manos despacio. «¿Y entonces para qué la llevas en un hospital?»", C: "Darío baja las manos sin relajarse. «¿Y para qué llevas una pistola en un hospital, si se puede saber?»" },
            mood: "scared", next: "pistola-guarda",
          },
          {
            id: "amenazar",
            say: { A: "Dame las galletas.", B: "Dame las galletas, rápido.", C: "Dame las galletas. Y no me mires así." },
            reply: { A: "Darío no se mueve. Pulsa el botón del walkie. «Seguridad, urgente.»", B: "Darío no se mueve. Pulsa el botón del walkie. «Seguridad, planta baja, urgente.»", C: "Darío no se mueve ni un milímetro. Pulsa el walkie con el pulgar: «Seguridad, planta baja, urgente. Y que alguien avise a la comisaría.»" },
            mood: "terror", end: "pistola-policia",
          },
        ],
      },
      "pistola-guarda": {
        who: "dario", mood: "worried",
        line: { A: "Darío te mira a los ojos. «Dime la verdad. ¿Estás bien? Hay gente que viene aquí con eso por miedo.»", B: "Darío te mira con calma de enfermero. «Dime la verdad: ¿estás bien? Mucha gente viene aquí con eso por miedo, no por maldad.»", C: "Darío cambia de golpe: de víctima a profesional. «Dime la verdad: ¿estás bien? Mucha gente carga con una pistola por miedo, no por maldad, y de eso sí sé algo.»" },
        options: [
          {
            id: "miedo",
            say: { A: "Tengo miedo de noche. Por eso la llevo.", B: "Tengo miedo cuando camino de noche. Por eso la llevo.", C: "Camino de noche, tengo miedo y la llevo por pura inseguridad." },
            reply: { A: "Darío asiente. «Lo entiendo. Dámela, la guardo yo en seguridad. Te la devuelven mañana.»", B: "Darío asiente despacio. «Lo entiendo. Dámela y la dejo en seguridad; mañana te la devuelven.»", C: "Darío asiente. «Lo entiendo, pero así no. Dámela, la dejo en seguridad, y mañana te la devuelven con un papel firmado.»" },
            mood: "neutral", end: "pistola-seguridad",
          },
          {
            id: "broma",
            say: { A: "Es de juguete. Era una broma.", B: "Es de juguete. Una broma pesada, lo siento.", C: "Es de juguete. Una broma de pésimo gusto, y encima en un hospital." },
            reply: { A: "Darío se ríe, nervioso. «Casi me desmayo. Toma, una galleta, por el susto.»", B: "Darío se ríe, nervioso. «Casi me desmayo. Toma, una galleta: te la has ganado por el susto.»", C: "Darío se ríe, aliviado. «Casi me desmayo. Toma una galleta, por el susto que me has dado y por la risa que me ha entrado.»" },
            mood: "smile", end: "pistola-galleta",
          },
        ],
      },
      "granada-inicio": {
        who: "dario", mood: "terror",
        line: { A: "Darío ve la granada y grita. Huye por el pasillo. «¡Granada! ¡Todos fuera!»", B: "Darío ve la granada, grita y echa a correr por el pasillo. «¡Granada! ¡Todos fuera del pasillo!»", C: "Darío ve la granada, abandona su última moneda y sale corriendo por el pasillo, gritando «¡Granada, todos fuera!» con una autoridad que no sabía que tenía." },
        options: [
          {
            id: "juguete",
            say: { A: "¡Es de juguete! ¡Vuelve, Darío!", B: "¡Es de juguete! ¡Darío, vuelve!", C: "¡Es de utilería! ¡Darío, vuelve, que es de plástico!" },
            reply: { A: "Darío se detiene y vuelve despacio. «¿De plástico? ¿Seguro?» Ya hay gente asomada.", B: "Darío se detiene y vuelve, despacio. «¿De plástico? ¿Seguro?» Ya hay enfermeras asomadas a la puerta.", C: "Darío se detiene en seco y vuelve con cautela. «¿Plástico? ¿Seguro?» Para entonces, medio pasillo ya asoma la cabeza." },
            mood: "scared", next: "granada-alarma",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, me voy!", C: "¡Me retiro! ¡Fue un error!" },
            reply: { A: "Corres. Suena la alarma de la clínica. Alguien grita «¡Evacuación!».", B: "Corres. Suena la alarma de la clínica y alguien grita «¡Evacuación general!».", C: "Corres. La alarma de la clínica empieza a sonar y un altavoz anuncia con voz tranquila «Evacuación general», que es lo menos tranquilizador del mundo." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "granada-alarma": {
        who: "dario", mood: "worried",
        line: { A: "Una enfermera llega corriendo. «¿Dónde está la granada?» Darío te señala a ti.", B: "Una enfermera llega corriendo con el teléfono en la mano. «¿Dónde está la granada?» Darío te señala sin dudar.", C: "Una enfermera llega corriendo, ya con el teléfono en la mano. «¿Dónde está esa granada?» Darío, sin remordimientos, te señala a ti." },
        options: [
          {
            id: "explicar",
            say: { A: "Es una broma. Es de plástico. Perdón.", B: "Es una broma de mal gusto. Es de plástico. Perdón.", C: "Es una broma de pésimo gusto. Plástico puro. Pido disculpas al pasillo entero." },
            reply: { A: "La enfermera mira la granada. «Plástico.» Darío ríe: «Casi me da un infarto.»", B: "La enfermera mira la granada y resopla. «Plástico.» Darío ríe: «Casi me da un infarto, y soy enfermero.»", C: "La enfermera examina la granada y resopla. «Plástico.» Darío ríe sin aliento: «Casi me da un infarto, y yo ya sé qué hacer en esos casos.»" },
            mood: "smile", end: "granada-risa",
          },
          {
            id: "huir",
            say: { A: "Mejor me voy.", B: "Mejor me voy antes de que llegue alguien.", C: "Mejor me retiro antes de que esto se complique." },
            reply: { A: "Corres. Suena la alarma y un altavoz grita «¡Evacuación!».", B: "Echas a correr. Suena la alarma de la clínica y un altavoz anuncia «¡Evacuación!».", C: "Echas a correr. Suena la alarma de la clínica y un altavoz anuncia una evacuación que ya se veía venir." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "corazon-inicio": {
        who: "dario", mood: "love",
        line: { A: "Darío te mira y se le baja el enojo. Sonríe. «Perdón por gritarle a la máquina. Tú tienes ojos buenos.»", B: "Darío te mira y se le va el enojo de golpe. Sonríe cansado. «Perdona por golpear la máquina. Tienes una cara que da paz.»", C: "Darío te mira y se le disuelve el enojo. Sonríe, agotado. «Perdona el espectáculo con la máquina. Tienes esa cara que da paz, y la necesito ahora mismo.»" },
        options: [
          {
            id: "cenar",
            say: { A: "Ven. Te invito a cenar de verdad.", B: "Ven conmigo. Te invito a cenar algo de verdad.", C: "Ven conmigo. Te invito a cenar algo que no venga en envoltorio, y sin máquina de por medio." },
            reply: { A: "Darío sonríe. «Mi turno acaba en una hora, pero acepto.» Te mira con ternura.", B: "Darío sonríe, emocionado. «Mi turno acaba en una hora, pero acepto. Hace meses que nadie me invita.»", C: "Darío sonríe con ternura. «Mi turno acaba en una hora, pero acepto. Hace meses que nadie me invita a nada que no sea una guardia.»" },
            mood: "love", next: "corazon-mama",
          },
          {
            id: "galleta",
            say: { A: "Toma mi galleta. Es tuya.", B: "Toma mi galleta. Te la has ganado.", C: "Toma mi galleta. Te la has ganado, después de catorce horas." },
            reply: { A: "Darío se ríe y te abraza. «Qué buena persona eres.» Comen juntos.", B: "Darío se ríe y te da un abrazo corto. «Eres buena gente.» Comen juntos la galleta.", C: "Darío se ríe y te abraza con las pocas fuerzas que le quedan. «Eres buena gente.» Parten la galleta y la comen junto a la máquina." },
            mood: "love", end: "corazon-galleta",
          },
        ],
      },
      "corazon-mama": {
        who: "dario", mood: "smitten",
        line: { A: "Darío piensa. «Mi madre cocina el mejor guiso. Está en casa. ¿Quieres venir cuando salga?»", B: "Darío piensa un momento. «Mi madre hace el mejor guiso del mundo y me lo dejó en casa. ¿Vienes a probarlo cuando salga de turno?»", C: "Darío piensa, ya medio enamorado de la idea. «Mi madre hace el mejor guiso de la ciudad, y me lo dejó en casa. ¿Vienes a probarlo cuando salga de turno? Te advierto que ella pregunta mucho.»" },
        options: [
          {
            id: "aceptar",
            say: { A: "¡Sí! Me encantaría.", B: "¡Sí! Me encantaría probarlo.", C: "Con muchísimo gusto. Me encantan las madres que preguntan mucho." },
            reply: { A: "Darío sonríe. «Perfecto. Te escribo la dirección.» Te la escribe en el brazo.", B: "Darío sonríe. «Perfecto. Te anoto la dirección.» Te la escribe en el brazo con un bolígrafo.", C: "Darío sonríe, aliviado. «Perfecto. Te anoto la dirección.» Te la escribe en el brazo con un bolígrafo, porque la noche no da para más." },
            mood: "love", end: "corazon-guiso",
          },
          {
            id: "hoy",
            say: { A: "Mejor otro día. Hoy estoy cansado.", B: "Mejor otro día. Hoy estoy muy cansado.", C: "Mejor otro día, de verdad. Hoy el cansancio gana." },
            reply: { A: "Darío asiente. «Entiendo. Pero la invitación sigue.» Te da un abrazo.", B: "Darío asiente. «Lo entiendo. La invitación sigue en pie.» Te da un abrazo corto.", C: "Darío asiente. «Lo entiendo perfectamente. La invitación no caduca.» Te da un abrazo corto, de colega." },
            mood: "love", end: "corazon-galleta",
          },
        ],
      },
    },
    ends: {
      galletas: {
        text: { A: "Darío te da una galleta. Comen juntos al lado de la máquina.", B: "Darío comparte las galletas contigo. Por un momento, parece la mejor cena del mundo.", C: "Darío te ofrece una galleta. Cenan de pie junto a la máquina, en silencio solemne." },
        change: "sonrie", recap: "Ayudaste a Darío con la máquina de galletas.",
      },
      luz: {
        text: { A: "La máquina se enciende. Darío tiene su galleta y está feliz.", B: "La máquina se ilumina y suelta la galleta. Darío la levanta como un trofeo.", C: "La máquina se ilumina, generosa de repente. Darío levanta la galleta como si fuera un trofeo olímpico." },
        change: "luz", recap: "Le diste la cena a Darío, el enfermero.",
      },
      nada: {
        text: { A: "Darío vuelve a la clínica. La máquina no hace nada.", B: "Darío se va a buscar monedas. La máquina se queda quieta, satisfecha.", C: "Darío se aleja por el pasillo. La máquina zumba, satisfecha, con la moneda en el estómago." },
        change: "se-va", recap: "La máquina ganó, y Darío siguió buscando.",
      },
      "cuchillo-guardias": {
        text: { A: "Dos guardias te quitan el cuchillo y te sacan de la clínica. Darío mira la máquina, aún sin cena.", B: "Dos guardias te quitan el cuchillo y te acompañan fuera de la clínica. Darío vuelve a mirar la máquina, todavía sin cena.", C: "Dos guardias te quitan el cuchillo y te escoltan hasta la salida. Darío se queda frente a la máquina: sin cena y con una anécdota nueva." },
        change: "policia", recap: "Tu cuchillo asustó a Darío y los guardias de la clínica te sacaron.",
      },
      "cuchillo-galletas": {
        text: { A: "Darío te da una galleta. «Y guarda siempre eso.» Comen en silencio frente a la máquina.", B: "Darío te da una galleta. «Y ese cuchillo, siempre guardado.» Comen en silencio frente a la máquina.", C: "Darío te da una galleta. «Y el cuchillo, a salvo.» Comen de pie frente a la máquina, en un silencio con mucho que contar." },
        change: "sonrie", recap: "Después del susto del cuchillo, Darío y tú compartieron galletas.",
      },
      "pistola-policia": {
        text: { A: "Llegan dos policías y la seguridad. Te quitan la pistola. Darío mira la máquina y suspira.", B: "Llegan dos policías y los guardias. Te quitan la pistola. Darío mira la máquina, suspira y se come la última galleta.", C: "Llegan dos policías con los guardias. Te desarman en el pasillo. Darío mira la máquina, suspira y por fin cena: las galletas, que cayeron en el barullo." },
        change: "policia", recap: "Tu pistola en la clínica terminó con la policía y Darío sin cena.",
      },
      "pistola-seguridad": {
        text: { A: "Darío te acompaña a seguridad. Dejas la pistola. Te dan un papel y un café.", B: "Darío te acompaña a seguridad. Dejas la pistola, te dan un recibo y un café de verdad.", C: "Darío te lleva a seguridad. Dejas la pistola, firmas un recibo y te sirven un café de verdad, no de máquina." },
        change: "se-va", recap: "Dejaste tu pistola en seguridad de la clínica con ayuda de Darío.",
      },
      "pistola-galleta": {
        text: { A: "Darío y tú comparten las galletas en el pasillo. Se ríen del susto.", B: "Darío y tú comparten las galletas en el pasillo y se ríen del susto como dos supervivientes.", C: "Darío y tú comparten las galletas en el pasillo y se ríen del susto como supervivientes de algo mucho más grave." },
        change: "sonrie", recap: "Tu pistola de juguete acabó en risas y galletas con Darío.",
      },
      "granada-evacuan": {
        text: { A: "Evacúan la clínica. Llegan la policía y un helicóptero. La granada es de plástico.", B: "Evacúan la clínica. Llegan la policía y un helicóptero. Al final alguien confirma que la granada es de plástico.", C: "Evacúan la clínica entera. Llegan la policía y un helicóptero. Tres horas después, un artificiero confirma que la granada es de plástico. Darío cena por fin, en un parque." },
        change: "helicoptero", recap: "Tu granada provocó la evacuación de la clínica con helicóptero.",
      },
      "granada-risa": {
        text: { A: "Todos se ríen. Darío te invita a una galleta. Es su cena. Es la mejor anécdota del turno.", B: "Todos se ríen de la granada de plástico. Darío te invita a una galleta: es su cena y la mejor anécdota del turno.", C: "Todos se ríen de la granada de plástico. Darío te ofrece media galleta, con solemnidad: es su cena, y será la mejor anécdota de su turno." },
        change: "sonrie", recap: "Tu granada de plástico acabó en risas con Darío y las enfermeras.",
      },
      "corazon-galleta": {
        text: { A: "Comen la galleta juntos. Darío te abraza. Mañana vuelve a trabajar con una sonrisa.", B: "Comen la galleta juntos junto a la máquina. Darío te abraza y vuelve al trabajo con una sonrisa.", C: "Parten la galleta junto a la máquina. Darío te abraza y vuelve a su guardia con una sonrisa que dura hasta el amanecer." },
        change: "abraza", recap: "Compartiste una galleta con Darío en la clínica y te abrazó.",
      },
      "corazon-guiso": {
        text: { A: "Darío te escribe su dirección. Mañana comerán el guiso de su mamá. Te despides con un beso en la mejilla.", B: "Darío te escribe su dirección. Mañana comerán el guiso de su madre. Te despides con un beso en la mejilla.", C: "Darío te anota su dirección. Mañana comerán el guiso de su madre, que ya tiene preguntas preparadas. Te despides con un beso en la mejilla." },
        change: "beso", recap: "Darío te invitó a cenar el guiso de su madre.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando alguien se asusta de ti?", B: "¿Cuándo un objeto cotidiano te causó un malentendido?", C: "¿Cómo se pide perdón por un susto sin quitarle gravedad al susto?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Qué haces cuando alguien te amenaza con algo?", B: "¿Qué le dirías a alguien que lleva un arma por miedo?", C: "¿De qué manera el miedo nos lleva a defendernos con cosas que nos hacen más peligrosos?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué haces cuando oyes una alarma?", B: "¿Cuál fue la evacuación más absurda que viviste?", C: "¿Qué dice de nosotros la forma en que reaccionamos ante el primer aviso de peligro?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Quién cocina mejor en tu familia?", B: "¿A quién invitarías a cenar después de un día muy duro?", C: "¿Qué importancia tiene compartir comida en los días en que estamos más cansados?" } },
    },
    speak: {
      A1: "¿Qué comes cuando tienes prisa?",
      A2: "¿Qué máquina te dio problemas la semana pasada?",
      B1: "¿Cómo reaccionas cuando algo pequeño sale mal en un día difícil?",
      B2: "¿Qué harías si un aparato importante dejara de funcionar en el peor momento?",
      C1: "¿Por qué a veces nos enojamos más con una máquina que con una persona?",
      C2: "¿Qué revelan las pequeñas frustraciones cotidianas sobre nuestro cansancio acumulado?",
    },
  },

  {
    id: "centro-diarios",
    kind: "rincon",
    district: "centro",
    title: "El quiosco de diarios",
    verb: "HABLAR",
    goal: "Conversar sobre noticias, reaccionar con sorpresa y ofrecer ayuda a una persona mayor.",
    cast: [
      {
        id: "amadeo", name: "Don Amadeo", role: "Dueño del quiosco",
        age: "old", body: "m", build: "average", height: 1.65,
        hair: "short", hairColor: "#e8e4dc", skin: "#d4a382",
        top: "coat", topColor: "#6b5a3e", bottom: "pants", bottomColor: "#2c2c2c",
        extras: ["hat", "scarf", "glasses"], pose: "carry", props: ["kiosk", "newspapers"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "amadeo", mood: "smile",
        line: {
          A: "Un señor cierra su quiosco de diarios. «¡Buenas noches! ¿Leíste las noticias de hoy? ¡Son increíbles!»",
          B: "Junto a la plaza, un anciano apila diarios para cerrar su quiosco. «Buenas noches. ¿Ya te enteraste de la noticia del día? Nadie habla de otra cosa.»",
          C: "Un anciano baja la persiana de su quiosco con ceremonia. «Buenas noches. Cincuenta años vendiendo diarios y hoy, por fin, una noticia digna de primera plana.»",
        },
        options: [
          {
            id: "noticia",
            say: { A: "No. ¿Qué pasó hoy?", B: "No, no me enteré. ¿Qué pasó?", C: "Me tiene intrigada. ¿Qué ha pasado?" },
            reply: { A: "Don Amadeo muestra un diario. «¡La fuente de la plaza funciona otra vez! Después de diez años.»", B: "Don Amadeo te enseña la portada. «¡Arreglaron la fuente de la plaza! Diez años seca. Y esta mañana, agua.»", C: "Don Amadeo despliega la portada. «La fuente de la plaza. Diez años muda y esta mañana, de repente, chorros. Hubo gente que lloró.»" },
            mood: "smile", next: "fuente",
          },
          {
            id: "ayudar",
            say: { A: "¿Le ayudo con los diarios?", B: "¿Quiere que le ayude a guardar los diarios?", C: "Esa pila parece pesada. ¿Le echo una mano?" },
            reply: { A: "«¡Ay, gracias! Estos diarios pesan mucho.»", B: "«Qué amable. Las rodillas ya no me ayudan como antes.»", C: "«Se agradece», dice Don Amadeo. «Las noticias pesan cada día más. Literal y figuradamente.»" },
            mood: "smile", end: "persiana",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Me gusta su quiosco. Es muy bonito.", B: "Qué bonito su quiosco. Ya casi no quedan como este.", C: "Su quiosco es de las pocas cosas de esta plaza que no han cambiado. Ojalá no cambie." },
            reply: { A: "Don Amadeo sonríe. «Gracias. Mañana es el último día. Me jubilo.»", B: "Don Amadeo se queda callado. «Gracias. Te cuento un secreto: mañana lo cierro para siempre. Me jubilo.»", C: "Don Amadeo se quita el sombrero. «Pues va a cambiar mañana: me jubilo. Eres la primera persona a la que se lo digo.»" },
            mood: "love", end: "regalo",
          },
          libro: {
            act: { A: "Le muestras tu libro.", B: "Le enseñas el libro que llevas.", C: "Sacas tu libro y se lo enseñas al experto." },
            say: { A: "Yo prefiero los libros. ¿Usted lee libros?", B: "Yo soy más de libros que de diarios. ¿Usted lee novelas?", C: "Yo soy más de libros. ¿Se puede ser vendedor de diarios y lector de novelas?" },
            reply: { A: "«¡Sí! Leo una novela por semana. ¿Me la prestas?»", B: "«¡Claro! Los diarios son para el día; los libros, para la noche. ¿Me lo prestas?»", C: "«Los diarios cuentan lo que pasó; las novelas, lo que debería haber pasado», dice Don Amadeo. «¿Cambiamos?»" },
            mood: "smile", end: "regalo",
          },
        },
      },
      fuente: {
        who: "amadeo", mood: "smile",
        line: {
          A: "Don Amadeo está contento. «Y hay más: un loro dice “buenos días” en tres idiomas.»",
          B: "«Y en la página cinco», sigue Don Amadeo, «un loro del zoo aprendió a decir “buenos días” en tres idiomas. Este diario es una joya.»",
          C: "«Y no acaba ahí», añade Don Amadeo. «Página cinco: un loro políglota. Saluda en tres idiomas y se niega a hacerlo en el cuarto.»",
        },
        options: [
          {
            id: "comprar",
            say: { A: "¡Qué divertido! Quiero comprar un diario.", B: "¡Qué noticias tan buenas! Deme un diario, por favor.", C: "Con esas noticias, no puedo irme sin un ejemplar." },
            reply: { A: "Don Amadeo te da el diario. «El último del día.»", B: "Don Amadeo te da el último ejemplar. «Guárdalo. Días como este no hay muchos.»", C: "«El último ejemplar», dice Don Amadeo, entregándolo como un diploma. «Una pieza de coleccionista.»" },
            mood: "smile", end: "regalo",
          },
          {
            id: "opinar",
            say: { A: "Me gustan las noticias buenas.", B: "Ojalá todos los días hubiera noticias así.", C: "Es raro leer noticias que alegran. Uno ya no sabe qué hacer con ellas." },
            reply: { A: "«A mí también. Por eso las vendo con una sonrisa.»", B: "«Ojalá», dice Don Amadeo. «Pero por eso hay que celebrar las buenas cuando llegan.»", C: "Don Amadeo se ríe. «Se celebran, se recortan y se pegan en la nevera. Así se hace.»" },
            mood: "smile", end: "persiana",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Usted cuenta las noticias muy bien.", B: "Qué bien cuenta las noticias. Debería tener un programa de radio.", C: "Usted no vende diarios: los cuenta. Es otra cosa." },
            reply: { A: "Don Amadeo se emociona. «Gracias. Mi esposa decía lo mismo.»", B: "Don Amadeo sonríe, emocionado. «Mi esposa me decía eso. Ella me leía los diarios en voz alta.»", C: "Don Amadeo se queda mirando la fuente. «Eso decía mi mujer. Le leía la portada cada mañana. Hoy la habría hecho llorar.»" },
            mood: "love", end: "regalo",
          },
          lapiz: {
            act: { A: "Sacas el lápiz.", B: "Sacas el lápiz.", C: "Sacas el lápiz con una idea." },
            say: { A: "¿Puedo hacer el crucigrama del diario?", B: "¿Hacemos el crucigrama del diario juntos?", C: "¿Me reta con el crucigrama del día?" },
            reply: { A: "«¡Sí! Yo siempre lo hago. Cuatro letras: “pájaro que habla”.»", B: "«¡Encantado! Cuatro letras, “pájaro que habla”… ¡Muy fácil hoy!»", C: "«Acepto el reto», dice Don Amadeo. «Primera definición: “pájaro que saluda en tres idiomas”. Cuatro letras.»" },
            mood: "smile", end: "persiana",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "amadeo", mood: "terror",
        line: { A: "Don Amadeo ve el cuchillo, deja caer los diarios y levanta las manos. «¡Llévese el dinero! ¡No me haga daño!»", B: "Don Amadeo ve el cuchillo y los diarios se le caen de las manos. Levanta los brazos, temblando. «¡Llévese la caja, pero no me haga daño, que soy un anciano!»", C: "Don Amadeo ve el cuchillo y suelta la pila de diarios, que se desparrama por la acera. Levanta las manos con una dignidad temblorosa. «Cincuenta años sin un robo y me toca esta noche. La caja está dentro; no me haga daño.»" },
        options: [
          {
            id: "cuerda",
            say: { A: "No quiero dinero. Es para cortar la cuerda de los diarios.", B: "No quiero su dinero, señor. Es para cortar la cuerda de los paquetes de diarios.", C: "No quiero su dinero. Solo ofrecía cortar la cuerda de los paquetes, que tiene pinta de ser un nudo imposible." },
            reply: { A: "Don Amadeo baja los brazos despacio. «¿La cuerda? ¿Con ese cuchillo?» Suspira, aliviado.", B: "Don Amadeo baja los brazos poco a poco. «¿La cuerda? ¿Con ese cuchillo tan grande?» Suspira, aliviado.", C: "Don Amadeo baja los brazos y deja escapar el aire. «¿La cuerda? ¿Con ese cuchillo? Qué manera de ofrecer ayuda.»" },
            mood: "scared", next: "cuchillo-diarios",
          },
          {
            id: "huir",
            say: { A: "Perdón. Me voy.", B: "Perdón, señor. Me voy.", C: "Disculpe. Me voy antes de empeorarlo." },
            reply: { A: "Te vas rápido. Don Amadeo toca el silbato del quiosco. Llega un policía en dos minutos.", B: "Te alejas rápido. Don Amadeo toca el silbato del quiosco y, en dos minutos, aparece un policía.", C: "Te alejas rápido. Don Amadeo hace sonar el silbato del quiosco, y en dos minutos un policía recorre la plaza buscando una descripción." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-diarios": {
        who: "amadeo", mood: "worried",
        line: { A: "Don Amadeo recoge los diarios del suelo. «Ayúdame. Pero el cuchillo, bien lejos.»", B: "Don Amadeo se agacha a recoger los diarios. «Ayúdame con esto, pero el cuchillo, bien lejos de mí.»", C: "Don Amadeo recoge los diarios esparcidos por la acera. «Ayúdame, ya que has sido tú. Pero ese cuchillo, en el bolsillo y lejos de mi vista.»" },
        options: [
          {
            id: "cortar",
            say: { A: "Primero corto la cuerda. Mire.", B: "Primero corto la cuerda, con mucho cuidado. Mire.", C: "Primero corto la cuerda con cuidado. Verá que sirve para algo bueno." },
            reply: { A: "Cortas la cuerda. Los diarios se abren. Don Amadeo sonríe. «Mi aprendiz.»", B: "Cortas la cuerda de un tajo limpio y los diarios se abren. Don Amadeo sonríe a pesar de todo. «Eres un buen aprendiz.»", C: "Cortas la cuerda de un tajo limpio. Los paquetes se abren y Don Amadeo sonríe con alivio. «Con este aprendiz no necesito ni tijeras.»" },
            mood: "smile", end: "cuchillo-diarios",
          },
          {
            id: "guardar",
            say: { A: "Lo guardo. Perdón por el susto.", B: "Lo guardo ahora mismo. Perdón por el susto.", C: "Lo guardo y le pido disculpas por el susto. Se me ha ido de las manos." },
            reply: { A: "Don Amadeo respira. «No pasa nada. Pero vete, que me tiemblan las piernas.»", B: "Don Amadeo respira hondo. «No pasa nada, hijo. Pero ahora vete, que me tiemblan las piernas.»", C: "Don Amadeo respira hondo y se apoya en el quiosco. «Se perdona, pero vete: las piernas me tiemblan más que la persiana.»" },
            mood: "worried", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "amadeo", mood: "terror",
        line: { A: "Don Amadeo ve la pistola y se queda blanco. Levanta las manos. «No, por favor. Tengo setenta y ocho años. La caja está dentro.»", B: "Don Amadeo ve la pistola y se queda blanco. Levanta las manos con esfuerzo. «No, por favor. Tengo setenta y ocho años. La caja está dentro del quiosco.»", C: "Don Amadeo ve la pistola y palidece bajo el sombrero. Levanta las manos con lentitud. «Tengo setenta y ocho años y mañana me jubilo. No me haga esto esta noche.»" },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. No quiero su dinero.", B: "La guardo ya. No quiero su dinero, señor.", C: "La guardo ahora mismo. No es lo que parece, de verdad." },
            reply: { A: "Don Amadeo baja las manos. «¿Entonces qué quieres? ¿Un diario?»", B: "Don Amadeo baja las manos despacio. «¿Entonces qué quieres? ¿Un diario a esta hora?»", C: "Don Amadeo baja las manos sin relajarse del todo. «¿Y qué quiere, entonces? ¿Un diario? ¿Un obituario?»" },
            mood: "scared", next: "pistola-mentira",
          },
          {
            id: "exigir",
            say: { A: "Dame todo el dinero. Rápido.", B: "Dame todo el dinero de la caja. Rápido.", C: "Dame la caja. Y que nadie se mueva." },
            reply: { A: "Don Amadeo toca el silbato. «¡Policía!» Un patrullero llega enseguida.", B: "Don Amadeo hace sonar el silbato del quiosco. «¡Policía!» Un patrullero llega en dos minutos.", C: "Don Amadeo hace sonar el silbato con una firmeza inesperada. «¡Policía!» En dos minutos, un patrullero ya cruza la plaza." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-mentira": {
        who: "amadeo", mood: "worried",
        line: { A: "Don Amadeo te observa. «Llevas una pistola. Y quieres un diario. Explícame eso.»", B: "Don Amadeo te observa por encima de las gafas. «Llevas una pistola y dices que quieres un diario. Explícame eso, hijo.»", C: "Don Amadeo te observa con ojo de cincuenta años de oficio. «Una pistola y un diario. Hay combinaciones que ni en la sección de sucesos.»" },
        options: [
          {
            id: "sinceridad",
            say: { A: "Tengo miedo de noche. Por eso la llevo.", B: "Tengo miedo cuando camino de noche. Por eso la llevo, nada más.", C: "Camino de noche, tengo miedo y la llevo por pura inseguridad. Es la verdad." },
            reply: { A: "Don Amadeo suspira. «El miedo mal llevado es peor que el peligro. Toma, un diario.»", B: "Don Amadeo suspira. «El miedo mal llevado es peor que cualquier peligro. Toma un diario, anda.»", C: "Don Amadeo suspira. «Un miedo mal llevado es más peligroso que cualquier ladrón. Toma un diario; esta noche es la primera plana la que te hace falta.»" },
            mood: "neutral", end: "pistola-diario",
          },
          {
            id: "huir",
            say: { A: "Mejor me voy.", B: "Mejor me voy ahora mismo.", C: "Mejor me retiro, antes de que esto empeore." },
            reply: { A: "Te alejas. Don Amadeo toca el silbato. Un patrullero te sigue.", B: "Te alejas rápido. Don Amadeo hace sonar el silbato y un patrullero te sigue por la plaza.", C: "Te alejas con paso rápido. Don Amadeo hace sonar el silbato y un patrullero te sigue lentamente, sin prisa y sin perderte." },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "amadeo", mood: "terror",
        line: { A: "Don Amadeo ve la granada, se agarra el pecho y se sienta en la acera. «¡Ay, mi corazón!»", B: "Don Amadeo ve la granada, se agarra el pecho y se deja caer sentado en la acera. «¡Ay, mi corazón! ¡Una granada en mi plaza!»", C: "Don Amadeo ve la granada y se deja caer en la acera con la mano en el pecho. «Cincuenta años vendiendo noticias y la mía va a ser la primera plana de mañana.»" },
        options: [
          {
            id: "ayudar",
            say: { A: "¡Señor! ¡Respire! Es de juguete.", B: "¡Señor, respire! Es de juguete, de plástico.", C: "¡Señor, respire, por favor! Es de utilería, es plástico, mire." },
            reply: { A: "Don Amadeo respira. «De juguete… Qué susto.» La gente de la plaza ya corre.", B: "Don Amadeo respira hondo. «De juguete… Qué susto.» Pero la gente de la plaza ya ha empezado a correr.", C: "Don Amadeo respira, pálido. «De utilería… Dios mío.» Pero media plaza ya corre en todas direcciones." },
            mood: "scared", next: "granada-plaza",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón, me voy!", C: "¡Me retiro! ¡Fue un error!" },
            reply: { A: "Corres. Don Amadeo grita «¡Granada!» y la plaza entera se vacía.", B: "Echas a correr. Don Amadeo grita «¡Granada!» y la plaza entera se vacía en un minuto.", C: "Echas a correr. Don Amadeo anuncia «¡Granada!» y la plaza entera se vacía con una eficiencia admirable." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "granada-plaza": {
        who: "amadeo", mood: "worried",
        line: { A: "Un policía corre hacia la plaza. «¿Quién tiene la granada?» Don Amadeo te señala.", B: "Un policía corre hacia la plaza con la mano en el arma. «¿Quién tiene la granada?» Don Amadeo, desde el suelo, te señala.", C: "Un policía irrumpe en la plaza. «¿Quién tiene una granada?» Don Amadeo, aún sentado, extiende un dedo acusador hacia ti." },
        options: [
          {
            id: "juguete",
            say: { A: "Es de plástico. Mírela.", B: "Es de plástico, agente. Mírela, por favor.", C: "Es de plástico, agente. Compruébelo a distancia, si quiere." },
            reply: { A: "El policía la toma con cuidado. «Plástico.» Don Amadeo se ríe, aliviado.", B: "El policía la toma con cuidado y la examina. «Plástico.» Don Amadeo se ríe, aliviado, desde el suelo.", C: "El policía la examina con guantes. «Plástico.» Don Amadeo se ríe, aliviado, desde el suelo: «Sale mañana en el diario.»" },
            mood: "smile", end: "granada-diario",
          },
          {
            id: "huir",
            say: { A: "Mejor me voy.", B: "Mejor me voy antes de que esto empeore.", C: "Mejor me retiro antes de que alguien traiga un helicóptero." },
            reply: { A: "Corres. Arranca un helicóptero que te sigue por la plaza.", B: "Corres. Un helicóptero arranca de algún lugar y te sigue sobre los tejados de la plaza.", C: "Corres. De algún lugar surge un helicóptero que te sigue sobre los tejados, como si fueras la noticia del día." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "corazon-inicio": {
        who: "amadeo", mood: "love",
        line: { A: "Don Amadeo te mira y se emociona. Se quita el sombrero. «Hace años que nadie me mira así. Gracias.»", B: "Don Amadeo te mira y se emociona. Se quita el sombrero despacio. «Hace años que nadie me mira así a estas horas. Gracias, hijo.»", C: "Don Amadeo te mira y se le humedecen los ojos. Se quita el sombrero. «Cincuenta años vendiendo noticias, y nadie me había mirado así. Gracias, de verdad.»" },
        options: [
          {
            id: "jubilacion",
            say: { A: "Cuénteme. ¿Se jubila mañana?", B: "Cuénteme, Don Amadeo. ¿Es verdad que mañana se jubila?", C: "Cuénteme, Don Amadeo. ¿Es cierto que mañana cierra el quiosco para siempre?" },
            reply: { A: "Don Amadeo asiente. «Sí. Mi esposa murió hace cinco años. Este quiosco era de los dos.»", B: "Don Amadeo asiente. «Sí. Mi esposa murió hace cinco años. El quiosco era de los dos, y sin ella ya no es lo mismo.»", C: "Don Amadeo asiente. «Mañana. Mi mujer murió hace cinco años, y este quiosco era de los dos. Sin ella, la persiana pesa más.»" },
            mood: "love", next: "corazon-esposa",
          },
          {
            id: "abrazar",
            say: { A: "Venga aquí. Un abrazo.", B: "Venga, Don Amadeo. Un abrazo.", C: "Venga aquí, Don Amadeo. Un abrazo de despedida anticipada." },
            reply: { A: "Don Amadeo te abraza fuerte. «Gracias, hijo.» Te da un diario.", B: "Don Amadeo te abraza fuerte. «Gracias, hijo. Qué noche.» Luego te da un diario.", C: "Don Amadeo te abraza con una fuerza que no esperabas. «Gracias, hijo. Esta noche me llevo algo mejor que la jubilación.» Te da un diario." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-esposa": {
        who: "amadeo", mood: "smitten",
        line: { A: "Don Amadeo mira la fuente de la plaza. «Ella leía el diario en voz alta. Yo escuchaba. ¿Tú lees en voz alta?»", B: "Don Amadeo mira la fuente de la plaza. «Mi mujer me leía el diario en voz alta cada mañana. ¿Tú lees en voz alta?»", C: "Don Amadeo mira la fuente de la plaza. «Mi mujer me leía el diario en voz alta cada mañana, con las voces de los políticos. ¿Tú sabrías hacerlo?»" },
        options: [
          {
            id: "leer",
            say: { A: "Sí. Léame el diario. Yo escucho.", B: "Léame hoy el diario. Yo escucho, como ella.", C: "Hágame ese favor: léame hoy el diario. Yo hago de su esposa, sin voces." },
            reply: { A: "Don Amadeo abre el diario y lee con voz grave. Se ríe. Es muy feliz.", B: "Don Amadeo abre el diario y lee con voz grave la noticia de la fuente. Se ríe y se emociona a la vez.", C: "Don Amadeo abre el diario y lee con voz de locutor la noticia de la fuente. A mitad, se le quiebra la voz y se ríe de sí mismo." },
            mood: "love", end: "corazon-lectura",
          },
          {
            id: "quedar",
            say: { A: "Vendré mañana a despedirme.", B: "Mañana vendré a despedirme, se lo prometo.", C: "Mañana vendré a despedirme, con un diario nuevo para cerrar el quiosco como se merece." },
            reply: { A: "Don Amadeo sonríe. «Te espero con el último diario.» Te estrecha la mano.", B: "Don Amadeo sonríe. «Te espero con el último diario guardado.» Te estrecha la mano con fuerza.", C: "Don Amadeo sonríe. «Te guardaré el último diario del último día.» Te estrecha la mano como se sella un pacto." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      persiana: {
        text: { A: "Cierran el quiosco juntos. Don Amadeo te dice: «Hasta mañana».", B: "Entre los dos bajan la persiana. Don Amadeo se despide con el sombrero.", C: "La persiana baja con un estruendo metálico. Don Amadeo se despide tocándose el sombrero, como en las películas antiguas." },
        change: "se-va", recap: "Hablaste de las noticias del día con Don Amadeo.",
      },
      regalo: {
        text: { A: "Don Amadeo te regala un diario. Sonríe mucho.", B: "Don Amadeo te regala el último diario del día con una dedicatoria en la portada.", C: "Don Amadeo te regala el último ejemplar, con una dedicatoria temblorosa en la portada: «Para que te acuerdes de un día bueno»." },
        change: "sonrie", recap: "Don Amadeo te regaló el diario del día.",
      },
      "cuchillo-policia": {
        text: { A: "Llega un policía. Te pide el cuchillo y tus datos. Don Amadeo mira desde el quiosco.", B: "Llega un policía, te pide el cuchillo y tus datos. Don Amadeo mira desde el quiosco, todavía pálido.", C: "Llega un policía. Te pide el cuchillo, tus datos y una explicación coherente. Don Amadeo observa desde el quiosco, con una pálida compostura." },
        change: "policia", recap: "Tu cuchillo asustó a Don Amadeo y llegó la policía.",
      },
      "cuchillo-diarios": {
        text: { A: "Los diarios quedan apilados. Don Amadeo te da uno. «Para que te acuerdes de esta noche.»", B: "Los diarios quedan bien apilados. Don Amadeo te regala uno. «Para que te acuerdes de esta noche tan rara.»", C: "Los diarios quedan apilados con precisión. Don Amadeo te regala uno de la primera plana. «Para que recuerdes la noche en que casi me asaltan con una cuerda.»" },
        change: "sonrie", recap: "Con tu cuchillo cortaste la cuerda de los diarios de Don Amadeo.",
      },
      "pistola-patrulla": {
        text: { A: "Un patrullero te alcanza. Te quitan la pistola. Don Amadeo mira, con las manos temblando.", B: "Un patrullero te alcanza. Te quitan la pistola y te interrogan en la acera. Don Amadeo mira, con las manos todavía temblando.", C: "Un patrullero te alcanza en la plaza. Te desarman y te interrogan frente al quiosco, bajo la mirada de Don Amadeo, quien no ha soltado el silbato." },
        change: "policia", recap: "Tu pistola frente al quiosco terminó con un patrullero.",
      },
      "pistola-diario": {
        text: { A: "Don Amadeo te regala un diario. «Lee algo bueno para variar.» Guardas la pistola en el bolso.", B: "Don Amadeo te regala un diario. «Lee algo bueno para variar, hijo.» Guardas la pistola en el bolso y te vas.", C: "Don Amadeo te regala el diario del día. «Lee algo bueno para variar.» Guardas la pistola en el fondo del bolso y te vas con las orejas rojas." },
        change: "sigue", recap: "Don Amadeo te regaló un diario después del susto de la pistola.",
      },
      "granada-evacuan": {
        text: { A: "La policía evacúa la plaza. Un helicóptero vuela sobre el quiosco. La granada es de plástico.", B: "La policía evacúa la plaza y un helicóptero sobrevuela el quiosco. Al final alguien confirma que la granada es de plástico.", C: "La policía evacúa la plaza, un helicóptero ilumina el quiosco y, al amanecer, un artificiero confirma que la granada es de plástico. Don Amadeo, de hecho, escribe la noticia." },
        change: "helicoptero", recap: "Tu granada en la plaza provocó una evacuación con helicóptero.",
      },
      "granada-diario": {
        text: { A: "Don Amadeo te regala un diario. «Mañana sales tú en primera plana. Con la granada.»", B: "Don Amadeo te regala un diario. «Mañana sales tú en primera plana, con tu granada de plástico.»", C: "Don Amadeo te regala un diario y sonríe: «Mañana sales en primera plana, con tu granada de plástico. Qué manera de cerrar una carrera.»" },
        change: "sonrie", recap: "Tu granada de plástico acabó siendo noticia en el quiosco de Don Amadeo.",
      },
      "corazon-abrazo": {
        text: { A: "Don Amadeo te abraza. Te da un diario con una dedicatoria. Mañana cierra el quiosco.", B: "Don Amadeo te abraza y te regala el diario del día con una dedicatoria. Mañana cierra el quiosco.", C: "Don Amadeo te abraza, te regala el diario del día con una dedicatoria temblorosa y, antes de bajar la persiana, te mira como a un nieto recuperado." },
        change: "abraza", recap: "Abrazaste a Don Amadeo la noche antes de su jubilación.",
      },
      "corazon-lectura": {
        text: { A: "Don Amadeo lee hasta la última página. La fuente suena. Es una noche perfecta.", B: "Don Amadeo lee hasta la última página mientras la fuente suena. Es una noche perfecta para despedirse.", C: "Don Amadeo lee el diario entero a la luz de una farola, con la fuente de fondo. Para él, es la despedida más bonita posible." },
        change: "sonrie", recap: "Escuchaste a Don Amadeo leer el diario la noche antes de jubilarse.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "manos-arriba", speak: { A: "¿Qué harías si alguien se asustara de ti sin motivo?", B: "¿Qué malentendido de tu vida empezó con un susto?", C: "¿Cómo se gana la confianza de alguien al que acabas de asustar?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Tienes miedo de salir de noche?", B: "¿Cómo calmarías a una persona mayor que acaba de asustarse?", C: "¿Qué cambia en nuestra forma de hablar cuando alguien ha sentido miedo de nosotros?" } },
      granada: { start: "granada-inicio", fx: "grita", speak: { A: "¿Qué noticia absurda leíste esta semana?", B: "¿Cuándo fue la última vez que una noticia te dio un susto?", C: "¿Por qué las noticias más absurdas son las que más recordamos?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Quién te lee en voz alta o te cuenta historias?", B: "¿Qué gesto de cariño recuerdas de una persona mayor?", C: "¿Qué se pierde y qué se conserva cuando un oficio de toda la vida termina?" } },
    },
    speak: {
      A1: "¿Dónde lees las noticias?",
      A2: "¿Qué noticia buena escuchaste esta semana?",
      B1: "¿Qué tipo de noticias te interesan más y por qué?",
      B2: "¿Cómo crees que serán los quioscos de diarios dentro de veinte años?",
      C1: "¿Qué diferencia hay entre estar informado y estar saturado de información?",
      C2: "¿Por qué nos atraen más las malas noticias que las buenas, y qué dice eso de nosotros?",
    },
  },

  {
    id: "centro-cine",
    kind: "rincon",
    district: "centro",
    title: "Un cartel muy raro",
    verb: "MIRAR",
    goal: "Describir una imagen, hacer hipótesis sobre una historia y dar una opinión.",
    cast: [
      {
        id: "abril", name: "Abril", role: "Estudiante de cine",
        age: "young", body: "f", build: "slim", height: 1.6,
        hair: "braids", hairColor: "#2d1b12", skin: "#c4906a",
        top: "dress", topColor: "#2a6f6b", bottom: "skirt", bottomColor: "#1b1b1b",
        extras: ["backpack", "earrings"], pose: "stand", props: ["poster"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "abril", mood: "surprised",
        line: {
          A: "Una chica mira un cartel de cine. Hay un pulpo gigante en un autobús. «Hola. ¿De qué crees que trata esta película?»",
          B: "Frente al cine, una chica estudia un cartel: un pulpo enorme conduce un autobús por una ciudad de noche. «Perdona, ¿tú de qué crees que va? Es para un trabajo de la universidad.»",
          C: "Una chica observa un cartel desconcertante: un pulpo con gorra de chofer conduce un autobús nocturno. El título: «Última parada». «Disculpa, ¿me das tu teoría? Estudio cine y la mía no me convence.»",
        },
        options: [
          {
            id: "comedia",
            say: { A: "Es una comedia. El pulpo es chofer y todos ríen.", B: "Creo que es una comedia: un pulpo consigue trabajo de chofer y nadie se da cuenta.", C: "Comedia absurda, sin duda: un pulpo se hace pasar por chofer y nadie se atreve a decirle nada." },
            reply: { A: "Abril se ríe. «¡Me gusta! Tiene ocho brazos para el volante.»", B: "Abril se ríe. «¡Ja! Con ocho brazos, seguro que maneja mejor que nadie.»", C: "«Y conduce con ocho brazos y ninguna licencia», dice Abril, apuntándolo. «Me encanta.»" },
            mood: "smile", next: "teoria",
          },
          {
            id: "terror",
            say: { A: "Es de miedo. El autobús no para nunca.", B: "Yo creo que es de terror: el autobús nunca llega a la última parada.", C: "Me huele a terror psicológico: un autobús nocturno del que nadie se baja nunca." },
            reply: { A: "Abril abre los ojos. «¡Uy! Me da miedo. ¡Me gusta!»", B: "«Qué inquietante», dice Abril. «Y los pasajeros no saben que el chofer es un pulpo…»", C: "Abril se queda pensando. «Y cada pasajero tiene un motivo para no querer bajarse. Eso sí que da miedo.»" },
            mood: "scared", next: "teoria",
          },
          {
            id: "nose",
            say: { A: "No sé. Es muy raro. ¿Y tú qué piensas?", B: "Ni idea, la verdad. ¿Tú qué crees?", C: "Confieso que me desconcierta. ¿Cuál es tu teoría?" },
            reply: { A: "Abril dice: «Yo creo que es una historia de amor.»", B: "«Yo creo que es una historia de amor», dice Abril. «Pero mi profesor dice que soy muy romántica.»", C: "«Para mí es una historia de amor», dice Abril. «Mi profesor dice que veo romance hasta en los documentales de pesca.»" },
            mood: "smile", next: "teoria",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Creo que es una historia de amor. Como la tuya, ¿no?", B: "Yo diría que es una historia de amor. ¿Tú también eres romántica?", C: "Diría que es una historia de amor disfrazada de rareza. Como casi todas las buenas." },
            reply: { A: "Abril se ríe. «¡Sí! Quiero hacer una película de amor. Mi primera película.»", B: "Abril se sonroja. «¿Tanto se me nota? Estoy escribiendo mi primera película… y es de amor, claro.»", C: "Abril te mira sorprendida. «Es exactamente lo que intento hacer en mi primer guion. Nadie lo había entendido.»" },
            mood: "love", end: "estreno",
          },
          libro: {
            act: { A: "Abres tu libro.", B: "Abres tu libro y lo comparas con el cartel.", C: "Hojeas tu libro, por si las musas ayudan." },
            say: { A: "Mi libro también es raro. Es sobre un hombre que vive en un tren.", B: "Mi libro va de un hombre que vive en un tren. A lo mejor la película es algo así.", C: "Mi libro es sobre alguien que vive en un tren. Quizá el autobús sea una metáfora parecida." },
            reply: { A: "«¡Qué interesante! ¿Me prestas tu libro?»", B: "Abril apunta el título. «Un hombre que vive en un tren… Me lo voy a leer.»", C: "«Una metáfora sobre no saber dónde bajarse», dice Abril, entusiasmada. «Me lo apunto.»" },
            mood: "smile", next: "teoria",
          },
        },
      },
      teoria: {
        who: "abril", mood: "smile",
        line: {
          A: "Abril escribe en su cuaderno. «Gracias. ¿Quieres ver la película el sábado?»",
          B: "Abril toma notas a toda velocidad. «El sábado es el estreno. Tengo dos entradas y mi amiga no puede venir. ¿Te interesa?»",
          C: "Abril cierra el cuaderno. «Tu teoría va directa a mi trabajo. El sábado es el estreno y me sobra una entrada. ¿Te animas?»",
        },
        options: [
          {
            id: "si",
            say: { A: "¡Sí! Me encanta el cine.", B: "¡Claro que sí! Así descubrimos quién tenía razón.", C: "Con mucho gusto. Y el que pierda la apuesta invita las palomitas." },
            reply: { A: "Abril aplaude. «¡Genial! El sábado a las diez.»", B: "«¡Perfecto! El sábado a las diez. Si gana mi teoría, invitas tú.»", C: "«Trato hecho», dice Abril. «Ve preparando dinero para las palomitas grandes.»" },
            mood: "smile", end: "estreno",
          },
          {
            id: "no",
            say: { A: "Gracias, pero no puedo. ¡Suerte con tu trabajo!", B: "Me encantaría, pero el sábado no puedo. ¡Suerte con el trabajo!", C: "Qué pena, el sábado lo tengo ocupado. Pero quiero saber el final." },
            reply: { A: "Abril sonríe. «No pasa nada. ¡Gracias por tu idea!»", B: "«No pasa nada», dice Abril. «Gracias por la idea. Te voy a citar en el trabajo.»", C: "«Te mando el spoiler», dice Abril, guiñándote un ojo. «Y te cito en el trabajo.»" },
            mood: "smile", end: "idea",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tú vas a hacer películas muy buenas.", B: "Seguro que algún día voy a ver una película tuya en este cine.", C: "Algún día habrá un cartel tuyo en esta pared. Y será igual de raro." },
            reply: { A: "Abril se emociona. «¡Gracias! Mi familia no cree en mí.»", B: "Abril se emociona. «Gracias. Mi familia quiere que estudie algo “serio”. Me ayuda oír eso.»", C: "Abril se queda callada. «Mi familia cree que esto es un capricho. Me lo guardo para los días malos.»" },
            mood: "love", end: "estreno",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "abril", mood: "terror",
        line: { A: "Abril ve el cuchillo y da un grito. Se esconde detrás del cartel. «¡Aléjate! ¡Voy a llamar a la policía!»", B: "Abril ve el cuchillo y suelta un grito que se oye en toda la plaza. Se esconde tras el cartel de la película. «¡No te acerques! ¡Estoy llamando a la policía!»", C: "Abril ve el cuchillo y grita con un dramatismo digno de su carrera. Se parapeta detrás del cartel. «¡No des un paso más! ¡Estoy marcando el número de la policía!»" },
        options: [
          {
            id: "cartel",
            say: { A: "Es para cortar el cartel. Perdón.", B: "Es para despegar el cartel, perdona. Está pegado con mucho pegamento.", C: "Es para despegar una esquina del cartel. Me pareció que querías mirarlo mejor." },
            reply: { A: "Abril asoma la cabeza. «¿Para el cartel? ¿Tú crees que soy tonta?»", B: "Abril asoma la cabeza con desconfianza. «¿Para el cartel? ¿Crees que me lo voy a creer?»", C: "Abril asoma la cabeza, escéptica. «¿Para despegar el cartel? Esa explicación la he visto en tres películas, y siempre miente el que la dice.»" },
            mood: "scared", next: "cuchillo-cartel",
          },
          {
            id: "huir",
            say: { A: "Perdón. Me voy.", B: "Perdón, me voy.", C: "Disculpa, me retiro antes de arruinar tu tesis." },
            reply: { A: "Te vas. Abril marca en el teléfono. Un patrullero llega en un minuto.", B: "Te alejas. Abril sigue marcando con las manos temblando y, en un minuto, un patrullero pasa por la plaza.", C: "Te alejas con prisa. Abril sigue gritando tu descripción por teléfono y, en un minuto, un patrullero ya patrulla la plaza." },
            mood: "scared", end: "cuchillo-policia",
          },
        ],
      },
      "cuchillo-cartel": {
        who: "abril", mood: "worried",
        line: { A: "Abril sigue lejos. «Deja el cuchillo en el suelo y después hablamos del cartel.»", B: "Abril mantiene la distancia. «Deja el cuchillo en el suelo y después hablamos del cartel y de lo que quieras.»", C: "Abril mantiene la distancia, con el teléfono en alto como un escudo. «Deja el cuchillo en el suelo y después debatimos sobre el cartel, la película y tu salud mental.»" },
        options: [
          {
            id: "suelo",
            say: { A: "Ya está en el suelo. Mira.", B: "Ya está en el suelo. Mira, tengo las manos vacías.", C: "Ya está en el suelo. Manos vacías y conciencia tranquila." },
            reply: { A: "Abril se acerca despacio. «Vale. Entonces dime: ¿de qué crees que trata la película?»", B: "Abril se acerca despacio. «Vale. Entonces dime en serio: ¿de qué crees que trata la película?»", C: "Abril se acerca por fin. «Vale. Entonces, sin cuchillos: ¿cuál es tu teoría sobre la película del pulpo?»" },
            mood: "worried", end: "cuchillo-teoria",
          },
          {
            id: "pulpo",
            say: { A: "Creo que el pulpo es el cuchillo de la película.", B: "Creo que el pulpo es una metáfora del cuchillo: todos lo temen y nadie sabe qué quiere.", C: "Mi teoría: el pulpo es la amenaza que nos persigue sin querer hacernos daño, como yo esta noche." },
            reply: { A: "Abril abre la boca. «Eso es… raro. Pero no está mal.» Llama a la policía igual.", B: "Abril te mira. «Eso es raro. Pero no está mal.» Aun así, marca el número de la policía.", C: "Abril se queda pensando. «Eso tiene sentido, inquietantemente.» Aun así, marca el número de la policía, por prudencia." },
            mood: "surprised", end: "cuchillo-policia",
          },
        ],
      },
      "pistola-inicio": {
        who: "abril", mood: "terror",
        line: { A: "Abril ve la pistola y levanta las manos. El cuaderno cae al suelo. «¡No! ¡No tengo nada!»", B: "Abril ve la pistola, levanta las manos y el cuaderno se le cae al suelo. «¡No, por favor! ¡No tengo nada de valor!»", C: "Abril ve la pistola y levanta las manos con tanto ímpetu que el cuaderno sale volando. «¡No, por favor! Solo llevo apuntes y un bocadillo. ¡Llévese el bocadillo!»" },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. Perdón. No es para ti.", B: "La guardo ya. Perdona, no es para ti.", C: "La guardo ahora mismo. Perdona, no tenía intención de convertir tu noche en un thriller." },
            reply: { A: "Abril baja las manos. «¿Entonces para qué la llevas?»", B: "Abril baja las manos, temblando. «¿Entonces para qué la llevas en la calle?»", C: "Abril baja las manos sin relajarse. «¿Y para qué la llevas por la calle, si se puede saber?»" },
            mood: "scared", next: "pistola-cartel",
          },
          {
            id: "exigir",
            say: { A: "Dame el bocadillo y el cuaderno.", B: "Dame el bocadillo y el cuaderno. Rápido.", C: "Dame el bocadillo. Y el cuaderno, que parece lo más valioso." },
            reply: { A: "Abril grita y corre hacia el cine. «¡Seguridad!» Dos policías salen de un coche.", B: "Abril grita y corre hacia la puerta del cine. «¡Seguridad!» Dos policías salen de un coche cercano.", C: "Abril grita y corre hacia la taquilla del cine. «¡Seguridad! ¡Hay un asalto!» Dos policías, que pasaban por casualidad, bajan del coche." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-cartel": {
        who: "abril", mood: "worried",
        line: { A: "Abril te mira. «Es un cartel de cine. ¿Eres actor? ¿Es de la película?»", B: "Abril te mira de arriba abajo. «Estás delante del cartel de una película. ¿Eres actor? ¿Es de utilería?»", C: "Abril te mira y su mente de cineasta intenta recomponer la escena. «Un cartel, una pistola, de noche. ¿Eres actor? ¿Es utilería?»" },
        options: [
          {
            id: "actor",
            say: { A: "Sí. Soy actor. Es de utilería.", B: "Sí, soy actor. Es de utilería, claro.", C: "Sí, soy actor. Es de utilería, por supuesto; hasta me han dado un papel de villano." },
            reply: { A: "Abril se ríe, nerviosa. «¡Ay, qué susto! Pero esto ayuda a mi trabajo.» Te hace una entrevista.", B: "Abril se ríe, nerviosa. «¡Qué susto! Aunque esto le va de maravilla a mi trabajo.» Saca el cuaderno.", C: "Abril respira, entre aliviada y entusiasmada. «Menudo susto. Aunque, para mi trabajo, es oro.» Saca el cuaderno y te entrevista." },
            mood: "surprised", end: "pistola-entrevista",
          },
          {
            id: "mentir",
            say: { A: "No. Es de verdad. Pero no es para ti.", B: "No, no soy actor. Es de verdad, pero no es para ti.", C: "No soy actor. Es de verdad, y no sé por qué te lo he confesado." },
            reply: { A: "Abril grita y llama a la policía. Un patrullero llega enseguida.", B: "Abril retrocede, grita y llama a la policía. En un minuto, un patrullero ya está aquí.", C: "Abril retrocede, mira a su alrededor y marca. Un patrullero llega en un minuto, como si lo hubieran encargado." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "abril", mood: "terror",
        line: { A: "Abril ve la granada y empieza a grabar con el teléfono. «¡No me lo puedo creer! ¡Esto es increíble!»", B: "Abril ve la granada y, en lugar de huir, saca el teléfono y empieza a grabar. «¡No me lo puedo creer! ¡Esto es de película!»", C: "Abril ve la granada y su instinto de cineasta vence al de supervivencia: saca el teléfono y empieza a grabar. «¡Dios mío! Plano secuencia perfecto, no te muevas.»" },
        options: [
          {
            id: "juguete",
            say: { A: "Es de plástico. Para, no grabes.", B: "Es de plástico. Para, no grabes, por favor.", C: "Es de utilería. Por favor, apaga eso, que esto es un malentendido." },
            reply: { A: "Abril sigue grabando. «¡Es oro!» Pero alguien ya ha llamado a la policía.", B: "Abril sigue grabando. «¡Es oro puro!» Pero alguien de la plaza ya ha llamado a la policía.", C: "Abril sigue grabando, entusiasmada. «¡Es oro puro!» Por desgracia, alguien de la plaza ha llamado a la policía." },
            mood: "surprised", next: "granada-set",
          },
          {
            id: "correr",
            say: { A: "¡Perdón! ¡Me voy!", B: "¡Perdón! ¡Me voy ya!", C: "¡Me retiro! ¡No publiques eso!" },
            reply: { A: "Corres. Abril grita «¡Granada!» y alguien llama a la policía. Un helicóptero llega.", B: "Corres. Abril grita «¡Granada!» a su teléfono y alguien llama a la policía. Poco después, un helicóptero sobrevuela la plaza.", C: "Corres con la granada. Abril, aún grabando, retransmite la huida con un entusiasmo preocupante. Un helicóptero llega a los dos minutos." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "granada-set": {
        who: "abril", mood: "worried",
        line: { A: "Llega la policía. Abril baja el teléfono. «Es de plástico, agente. Es parte de mi proyecto.»", B: "Llega la policía. Abril baja el teléfono y se acerca al agente. «Es de plástico, agente. Es parte de mi proyecto de cine.»", C: "Llega la policía. Abril baja el teléfono y se adelanta al agente con una improvisación fulgurante. «Es de plástico, agente. Estamos rodando un proyecto universitario.»" },
        options: [
          {
            id: "seguir",
            say: { A: "Sí. Es una película. Perdón.", B: "Sí, es una película. Perdón por las molestias.", C: "Sí, estamos rodando. Pido disculpas por no haber avisado a la ciudad entera." },
            reply: { A: "El agente suspira. «Que sea la última vez. Sin permiso no se rueda.» Abril ríe.", B: "El agente suspira. «Que sea la última vez. Sin permiso no se rueda.» Abril ríe, aliviada.", C: "El agente cierra los ojos un segundo. «Sin permiso de rodaje, nada de granadas. Ni de plástico.» Abril ríe, aliviada." },
            mood: "smile", end: "granada-rodaje",
          },
          {
            id: "confesar",
            say: { A: "No es una película. Es una broma.", B: "No es una película, agente. Es una broma mía, y Abril me está cubriendo.", C: "No es una película, agente. Es una broma mía de muy mal gusto, y Abril me está encubriendo con generosidad." },
            reply: { A: "Abril pone cara de horror. El agente toma nota. Llega un helicóptero.", B: "Abril pone cara de horror y el agente toma nota. Poco después, un helicóptero sobrevuela la plaza.", C: "Abril pone cara de «quería salvarte» y el agente toma nota de todo. Poco después llega un helicóptero, que no ayuda." },
            mood: "worried", end: "granada-evacuan",
          },
        ],
      },
      "corazon-inicio": {
        who: "abril", mood: "love",
        line: { A: "Abril te mira y sonríe. «Tienes ojos de personaje de película. Déjame decirte una cosa: tengo un papel para ti.»", B: "Abril te mira y se le ilumina la cara. «Tienes la cara de un personaje de película. Tengo un papel para ti, en serio.»", C: "Abril te mira con ojos de directora. «Tienes la cara de un personaje que el público quiere. Tengo un papel para ti en mi cortometraje, si te animas.»" },
        options: [
          {
            id: "aceptar",
            say: { A: "¡Sí! ¿De qué trata?", B: "¡Claro! ¿De qué trata el corto?", C: "Acepto sin leer el guion. ¿Cuándo empezamos a rodar?" },
            reply: { A: "Abril sonríe. «Un pulpo se enamora de un chofer. Tú eres el chofer.»", B: "Abril sonríe, emocionada. «Un pulpo se enamora de un chofer de autobús nocturno. Tú serías el chofer.»", C: "Abril sonríe, emocionada. «Un pulpo se enamora de un chofer de autobús nocturno. Tú serías el chofer, y tendrías que actuar enamorado.»" },
            mood: "love", next: "corazon-guion",
          },
          {
            id: "beso",
            say: { A: "¡Qué ilusión! Gracias.", B: "Qué ilusión me haces, Abril. Gracias.", C: "Qué ilusión. Es la mejor oferta de trabajo que he recibido esta noche." },
            reply: { A: "Abril se ríe y te da un beso en la mejilla. «Hecho. Anota mi número.»", B: "Abril se ríe y te da un beso en la mejilla. «Hecho. Apunta mi número.»", C: "Abril se ríe, te da un beso en la mejilla y te escribe su número en la mano. «Hecho. Mañana ensayamos.»" },
            mood: "smitten", end: "corazon-beso",
          },
        ],
      },
      "corazon-guion": {
        who: "abril", mood: "smitten",
        line: { A: "Abril te enseña unas páginas. «Aquí está la escena de amor. Léela conmigo.»", B: "Abril saca unas hojas del cuaderno. «Aquí está la escena de amor entre el chofer y el pulpo. Léela conmigo, ahora.»", C: "Abril saca unas páginas arrugadas del cuaderno. «La escena de amor entre el chofer y el pulpo. Léela conmigo ahora; tu voz es exactamente la que imaginaba.»" },
        options: [
          {
            id: "leer",
            say: { A: "Leo contigo.", B: "Leo contigo. Tú eres el pulpo.", C: "Leo contigo, y tú eres el pulpo. No me mires así." },
            reply: { A: "Leen la escena. Abril ríe. De repente, se acerca y te mira a los ojos. «Perfecto.»", B: "Leen la escena a media voz. Abril ríe, y de repente se acerca y te mira a los ojos. «Perfecto. Justo así.»", C: "Leen la escena a media voz bajo la luz del cartel. A mitad, Abril deja de leer y te mira a los ojos. «Perfecto. Justo así, no cambies nada.»" },
            mood: "love", end: "corazon-beso",
          },
          {
            id: "corregir",
            say: { A: "Cambiaría el final. Que se besen.", B: "Cambiaría el final. Que el chofer y el pulpo se besen.", C: "Cambiaría el final: que el chofer y el pulpo se besen, aunque técnicamente sea difícil." },
            reply: { A: "Abril se ríe a carcajadas. «¡Lo apunto!» Escribe con letra grande y te abraza.", B: "Abril se ríe a carcajadas. «¡Lo apunto!» Escribe el cambio con letra grande y te abraza.", C: "Abril se ríe a carcajadas. «Lo apunto: tu nombre en los créditos como coguionista.» Te abraza con el cuaderno entre los dos." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      estreno: {
        text: { A: "Abril te da una entrada para el sábado. Está muy contenta.", B: "Abril te da una entrada para el estreno y se despide saltando.", C: "Abril te entrega una entrada para el estreno. Se va dando saltitos, con el cuaderno lleno de ideas." },
        change: "sonrie", recap: "Abril te invitó al estreno de una película muy rara.",
      },
      idea: {
        text: { A: "Abril escribe tu idea en su cuaderno y se va.", B: "Abril apunta tu teoría y se va hacia el metro, pensativa.", C: "Abril se aleja escribiendo mientras camina. Tu teoría ya forma parte de un trabajo universitario." },
        change: "se-va", recap: "Le diste a Abril una idea para su trabajo de cine.",
      },
      "cuchillo-policia": {
        text: { A: "Llega un patrullero. Un agente te quita el cuchillo. Abril anota todo en su cuaderno.", B: "Llega un patrullero. Un agente te quita el cuchillo y te hace preguntas. Abril anota todo en su cuaderno.", C: "Llega un patrullero. Un agente te desarma y te interroga. Abril, por supuesto, anota todo en su cuaderno: material para un guion." },
        change: "policia", recap: "Tu cuchillo asustó a Abril y llegó un patrullero.",
      },
      "cuchillo-teoria": {
        text: { A: "Abril guarda tu teoría en su cuaderno. Se despide con una sonrisa nerviosa.", B: "Abril anota tu teoría en su cuaderno y se despide con una sonrisa nerviosa. Recoges el cuchillo y lo guardas bien.", C: "Abril anota tu teoría en el cuaderno y se despide con una sonrisa cautelosa. Guardas el cuchillo en el fondo del bolso y prometes mejores entradas." },
        change: "sigue", recap: "Después del susto del cuchillo, le diste a Abril una teoría para su trabajo.",
      },
      "pistola-patrulla": {
        text: { A: "Llega un patrullero. Te quitan la pistola. Abril mira, con los ojos muy abiertos.", B: "Llega un patrullero. Te quitan la pistola y te interrogan. Abril mira, con los ojos muy abiertos y el cuaderno otra vez en la mano.", C: "Llega un patrullero. Te quitan la pistola y te interrogan. Abril lo observa todo con los ojos muy abiertos y, ya, un título posible: «Última parada, comisaría»." },
        change: "policia", recap: "Tu pistola frente al cine terminó con un patrullero.",
      },
      "pistola-entrevista": {
        text: { A: "Abril te entrevista como actor. Te cita en su trabajo. Guardas la pistola de plástico.", B: "Abril te hace una entrevista breve como «actor» y te cita en su trabajo. Guardas la pistola de plástico.", C: "Abril te entrevista como actor y te cita en su trabajo universitario. Guardas la pistola de utilería, con la sensación de haber interpretado el papel de tu vida." },
        change: "sonrie", recap: "Abril te entrevistó como actor tras el susto de la pistola.",
      },
      "granada-evacuan": {
        text: { A: "La policía evacúa la plaza. Un helicóptero vuela sobre el cine. La granada es de plástico.", B: "La policía evacúa la plaza y un helicóptero sobrevuela el cine. Al final, alguien confirma que la granada es de plástico.", C: "La policía evacúa la plaza, un helicóptero ilumina la fachada del cine y un artificiero confirma que la granada es de plástico. Abril, por supuesto, lo ha grabado todo." },
        change: "helicoptero", recap: "Tu granada frente al cine provocó una evacuación con helicóptero.",
      },
      "granada-rodaje": {
        text: { A: "Abril y tú se ríen. Ella dice: «¡Un rodaje sin permiso! ¡Qué escena!» Te invita a un café.", B: "Abril y tú se ríen. Ella dice: «¡Un rodaje sin permiso! Qué escena.» Te invita a un café.", C: "Abril y tú ríen cuando el agente se va. «Un rodaje improvisado, un helicóptero casi, una granada de plástico. Esto es oro.» Te invita a un café para escribirlo." },
        change: "sonrie", recap: "Tu granada se convirtió en un rodaje improvisado con Abril.",
      },
      "corazon-beso": {
        text: { A: "Abril te besa en la mejilla. Te da su número. «Mañana, ensayo.»", B: "Abril te besa en la mejilla y te da su número. «Mañana, ensayo.» Se aleja riéndose.", C: "Abril te besa en la mejilla, te da su número y se aleja riéndose bajo la luz del cartel. Mañana hay ensayo, y alguna otra cosa." },
        change: "beso", recap: "Abril te besó en la mejilla y te invitó a su corto.",
      },
      "corazon-abrazo": {
        text: { A: "Abril te abraza. «Eres mi coguionista.» Se va saltando.", B: "Abril te abraza con el cuaderno entre los dos. «Eres mi coguionista.» Se va saltando.", C: "Abril te abraza con el cuaderno entre los dos. «Eres oficialmente mi coguionista.» Se aleja saltando, con tu final bajo el brazo." },
        change: "abraza", recap: "Te convertiste en coguionista del corto de Abril.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "retrocede", speak: { A: "¿Qué haces cuando alguien se asusta de ti?", B: "¿Qué escena de película te daría miedo vivir de verdad?", C: "¿Por qué nos asusta más lo que no entendemos que lo que sí sabemos que es peligroso?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿Te asustan las películas de miedo?", B: "¿Qué película te dio más miedo de pequeño?", C: "¿Qué diferencia hay entre el miedo en el cine y el miedo cuando el peligro es real?" } },
      granada: { start: "granada-inicio", fx: "evacuacion", speak: { A: "¿Qué harías si todos corrieran y tú estuvieras grabando?", B: "¿Qué escena de película te gustaría ver rodada en tu ciudad?", C: "¿Hasta dónde llega la curiosidad cuando lo absurdo se convierte en material creativo?" } },
      corazon: { start: "corazon-inicio", fx: "beso", speak: { A: "¿Con quién escribirías una historia de amor?", B: "¿Qué papel de película te gustaría interpretar por una noche?", C: "¿Qué tiene de seductora la gente que cree en una historia improbable?" } },
    },
    speak: {
      A1: "¿Qué películas te gustan?",
      A2: "¿Qué película viste hace poco?",
      B1: "¿Qué película recomiendas siempre a tus amigos y por qué?",
      B2: "¿Qué historia de tu vida te gustaría ver en el cine?",
      C1: "¿Cómo cambia una película cuando sabes algo de quien la hizo?",
      C2: "¿Por qué a veces nos atraen más las historias que no entendemos del todo?",
    },
  },

  {
    id: "centro-patineta",
    kind: "rincon",
    district: "centro",
    title: "Grábame el truco",
    verb: "AYUDAR",
    goal: "Aceptar una petición, dar ánimos, dar instrucciones y reaccionar ante un éxito o un fracaso.",
    cast: [
      {
        id: "kevin", name: "Kevin", role: "Chico con patineta",
        age: "young", body: "m", build: "athletic", height: 1.76,
        hair: "cap", hairColor: "#3b2a1a", skin: "#e6b998",
        top: "hoodie", topColor: "#9bd13a", bottom: "jeans", bottomColor: "#6a8bb5",
        extras: ["earrings"], pose: "crouch", props: ["skateboard"],
      },
    ],
    start: "inicio",
    nodes: {
      inicio: {
        who: "kevin", mood: "smile",
        line: {
          A: "Un chico con una patineta te llama. «¡Hola! ¿Me grabas con mi teléfono? Voy a hacer un truco.»",
          B: "En la plaza, un chico ajusta las ruedas de su patineta. «¡Oye! ¿Me haces un favor? Grábame este truco. Llevo toda la semana practicándolo.»",
          C: "Un chico de diecinueve años te interrumpe el paseo con el teléfono en alto. «¿Me grabas? Es un truco histórico. Bueno, histórico para mí.»",
        },
        options: [
          {
            id: "grabar",
            say: { A: "¡Claro! Dame el teléfono.", B: "¡Claro! ¿Desde dónde te grabo?", C: "Con mucho gusto. ¿Plano general o primer plano heroico?" },
            reply: { A: "Kevin te da el teléfono. «¡Gracias! Graba desde aquí.»", B: "«Desde ahí, al lado del banco. ¡Que se vea bien el salto!»", C: "«Heroico, obvio», dice Kevin. «Desde el banco, y que se vea el salto completo.»" },
            mood: "smile", next: "truco",
          },
          {
            id: "peligro",
            say: { A: "¿Es peligroso? ¿Tienes casco?", B: "¿No es peligroso de noche? ¿Por qué no llevas casco?", C: "Antes de grabar tu hazaña: ¿el casco lo dejaste en casa a propósito?" },
            reply: { A: "Kevin se ríe. «No tengo casco. Pero tengo cuidado.»", B: "«El casco me queda feo», dice Kevin. Luego lo piensa. «Bueno… mañana me compro uno.»", C: "«El casco arruina la estética», dice Kevin. Lo piensa un segundo. «Pero la estética no arregla dientes. Mañana me compro uno.»" },
            mood: "neutral", next: "truco",
          },
          {
            id: "prisa",
            say: { A: "Lo siento, tengo prisa. ¡Suerte!", B: "Perdona, ahora no puedo. ¡Suerte con el truco!", C: "Hoy no puedo, lo siento. Pero que no se te escape la gloria." },
            reply: { A: "Kevin dice: «Bueno, no pasa nada. ¡Adiós!»", B: "«Bueno, no pasa nada. Ya pediré a otra persona.»", C: "«La gloria esperará», dice Kevin, encogiéndose de hombros." },
            mood: "sad", end: "solo",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "¡Te grabo! Vas a hacerlo muy bien.", B: "Te grabo con mucho gusto. Se nota que practicas mucho.", C: "Te grabo, pero que sepas que ya me pareces un campeón." },
            reply: { A: "Kevin sonríe. «Gracias. El video es para mi hermano. Está en el hospital.»", B: "Kevin se pone serio un segundo. «Gracias. El video es para mi hermano; está en el hospital y no puede venir a verme.»", C: "Kevin baja la voz. «Es para mi hermano. Está ingresado y siempre me pregunta si ya lo logré. Hoy quiero decirle que sí.»" },
            mood: "love", next: "truco",
          },
          lapiz: {
            act: { A: "Sacas el lápiz y dibujas en un papel.", B: "Sacas el lápiz y dibujas el salto.", C: "Sacas el lápiz y haces un croquis del truco." },
            say: { A: "Mira, salta desde aquí. Es mejor.", B: "¿Y si saltas desde aquí? Hay más espacio.", C: "Desde aquí tienes más carrera y menos farola en la trayectoria." },
            reply: { A: "Kevin mira el dibujo. «¡Tienes razón!»", B: "Kevin mira el dibujo. «¡Buena idea! Así no choco con el banco.»", C: "«Menos farola es siempre una buena política», dice Kevin, estudiando el dibujo." },
            mood: "smile", next: "truco",
          },
        },
      },
      truco: {
        who: "kevin", mood: "worried",
        line: {
          A: "Kevin respira. Está nervioso. «Bueno… ¿Grabas? Uno, dos…»",
          B: "Kevin se coloca, se seca las manos en los pantalones y te mira. «¿Estás grabando? Bueno… allá voy.»",
          C: "Kevin se concentra como un atleta antes de una final olímpica. «¿Grabando? Bien. Si sale mal, borras el video y nunca pasó.»",
        },
        options: [
          {
            id: "animar",
            say: { A: "¡Sí! ¡Tú puedes, Kevin!", B: "¡Grabando! ¡Vamos, Kevin, tú puedes!", C: "Grabando. Respira, y que la plaza sea testigo." },
            reply: { A: "Kevin salta… ¡y cae perfecto! «¡Sí! ¡Lo hice!»", B: "Kevin salta, gira la patineta… y cae perfecto. «¡Sí! ¡Por fin!»", C: "Kevin salta, la patineta gira en el aire y aterriza limpia. Kevin grita como si hubiera ganado un mundial." },
            mood: "smile", end: "baila",
          },
          {
            id: "consejo",
            say: { A: "Espera. ¿Y si doblas más las rodillas?", B: "Espera, yo doblaría un poco más las rodillas.", C: "Un consejo de alguien que no sabe nada de patinetas: dobla las rodillas." },
            reply: { A: "Kevin dobla las rodillas, salta… y se cae. Se ríe. «¡Otra vez!»", B: "Kevin lo intenta así, salta… y se cae de espaldas. Se ríe en el suelo. «Bueno, casi.»", C: "Kevin sigue tu consejo con fe ciega y termina sentado en el suelo, riéndose. «Tu consejo era malísimo.»" },
            mood: "smile", end: "caida",
          },
        ],
        items: {
          corazon: {
            act: CORAZON,
            say: { A: "Tu hermano va a estar muy feliz. ¡Vamos!", B: "Tu hermano va a estar orgullosísimo. ¡Vamos!", C: "Piensa en la cara de tu hermano cuando vea esto. Vamos." },
            reply: { A: "Kevin salta. ¡Perfecto! «¡Esto es para ti, hermano!»", B: "Kevin salta y aterriza perfecto. Mira a la cámara. «¡Esto es para ti, hermano!»", C: "Kevin salta, aterriza y se gira a la cámara con los ojos brillantes. «Te lo dije, hermano. Te lo dije.»" },
            mood: "love", end: "baila",
          },
        },
      },
      // ── variantes por objeto ──
      "cuchillo-inicio": {
        who: "kevin", mood: "terror",
        line: { A: "Kevin ve el cuchillo y se sube a la patineta para huir. «¡Eh, tranquilo! ¡Yo no te hice nada!»", B: "Kevin ve el cuchillo, se sube de un salto a la patineta y se aleja unos metros. «¡Eh, eh! ¡Tranquilo! ¡Yo no te hice nada!»", C: "Kevin ve el cuchillo y, por puro instinto, se sube a la patineta y se aleja rodando. «¡Tranquilo, hermano! Yo solo quería un video, no un drama de acción.»" },
        options: [
          {
            id: "grabar",
            say: { A: "Tranquilo. Grábame tú a mí con el cuchillo.", B: "Tranquilo. Es para cortar la cinta de tu casco, mira.", C: "Tranquilo. Es para cortar la cinta adhesiva de tu casco nuevo, no para lo que piensas." },
            reply: { A: "Kevin vuelve despacio. «¿La cinta? Qué susto.» Pero mira el cuchillo de reojo.", B: "Kevin vuelve despacio. «¿La cinta del casco? Qué susto.» No le quita ojo al cuchillo.", C: "Kevin vuelve rodando con precaución. «¿La cinta del casco? Qué susto.» No le quita ojo al cuchillo." },
            mood: "scared", next: "cuchillo-casco",
          },
          {
            id: "huir",
            say: { A: "Perdón. Me voy.", B: "Perdón, me voy ya.", C: "Disculpa, me retiro antes de arruinarte la noche." },
            reply: { A: "Te vas. Kevin llama a un amigo, que grita desde la esquina: «¡Cuchillo!» Llega un patrullero.", B: "Te alejas. Kevin llama a un amigo, que grita desde la esquina «¡Cuchillo!». Llega un patrullero.", C: "Te alejas. Kevin, al teléfono, relata la escena con detalles cinematográficos. Un patrullero aparece por la esquina." },
            mood: "scared", end: "cuchillo-patrulla",
          },
        ],
      },
      "cuchillo-casco": {
        who: "kevin", mood: "worried",
        line: { A: "Kevin te mira. «Mi casco no tiene cinta. No tengo casco.»", B: "Kevin te mira, con la ceja levantada. «Mi casco no tiene cinta. En realidad no tengo casco, ¿sabes?»", C: "Kevin te mira con la ceja levantada. «Mi casco no tiene cinta. En realidad no tengo casco. Acabas de inventar una excusa pésima.»" },
        options: [
          {
            id: "confesar",
            say: { A: "Es verdad. Fue un error. Perdón.", B: "Tienes razón. Fue un error, perdón.", C: "Tienes razón: era una excusa pésima. Te pido perdón." },
            reply: { A: "Kevin se ríe nervioso. «Eres un desastre.» Guardas el cuchillo y te graba haciendo una pirueta.", B: "Kevin se ríe, nervioso. «Eres un desastre.» Guardas el cuchillo y le propones grabar algo bueno.", C: "Kevin se ríe, nervioso. «Eres un desastre.» Guardas el cuchillo y él, por una vez, se calma del todo." },
            mood: "smile", end: "cuchillo-truco",
          },
          {
            id: "duelo",
            say: { A: "Es para cortar tu video.", B: "Es para cortar tu video, si sale mal.", C: "Es para cortar el video si el truco sale mal, no a las personas." },
            reply: { A: "Kevin saca una navaja pequeña. «¿Tú con cuchillo y yo con navaja?» Los dos se quedan quietos.", B: "Kevin saca una navaja pequeña de la mochila. «¿Tú con cuchillo y yo con navaja?» Los dos se quedan quietos, en un silencio ridículo.", C: "Kevin saca una navaja de la mochila, para cortar cordones. «Tú con cuchillo y yo con navaja: el tráiler perfecto.» Se quedan quietos, ridículos." },
            mood: "surprised", end: "cuchillo-patrulla",
          },
        ],
      },
      "pistola-inicio": {
        who: "kevin", mood: "terror",
        line: { A: "Kevin ve la pistola y levanta las manos. «¡No me dispares! ¡Solo quería un video!»", B: "Kevin ve la pistola, levanta las manos y la patineta rueda sola. «¡No dispares! ¡Solo quería que me grabaras un video!»", C: "Kevin ve la pistola y levanta las manos. Su patineta se aleja rodando sola, sin dueño. «¡No, no! Solo quería un video para mi hermano, nada más.»" },
        options: [
          {
            id: "guardar",
            say: { A: "La guardo. No es para ti.", B: "La guardo. No es para ti, tranquilo.", C: "La guardo. No es para ti, ni para nadie esta noche." },
            reply: { A: "Kevin baja las manos. «¿Por qué la llevas?» Va a buscar su patineta.", B: "Kevin baja las manos despacio. «¿Y por qué la llevas?» Camina hacia su patineta sin darte la espalda.", C: "Kevin baja las manos con cuidado. «¿Y por qué la llevas?» Recupera su patineta caminando de lado, sin darte la espalda." },
            mood: "scared", next: "pistola-hermano",
          },
          {
            id: "exigir",
            say: { A: "Dame tu teléfono.", B: "Dame tu teléfono y la patineta.", C: "Dame el teléfono. Y no hagas ninguna tontería." },
            reply: { A: "Kevin grita. Un vecino mira por la ventana. «¡Policía!» Una patrulla llega rápido.", B: "Kevin grita y un vecino asoma por la ventana. «¡Llamo a la policía!» Una patrulla llega en minutos.", C: "Kevin grita y un vecino asoma a la ventana con el teléfono ya en la oreja. Una patrulla llega a los pocos minutos, que se te hacen eternos." },
            mood: "terror", end: "pistola-patrulla",
          },
        ],
      },
      "pistola-hermano": {
        who: "kevin", mood: "worried",
        line: { A: "Kevin mira el suelo. «Mi hermano está en el hospital. Quería mandarle un truco. No quiero problemas.»", B: "Kevin mira el suelo, con la patineta bajo el brazo. «Mi hermano está en el hospital. Quería grabar un truco para él. No quiero problemas, en serio.»", C: "Kevin mira el suelo. «Mi hermano está en el hospital, y yo solo quería mandarle un truco para que sonriera. No quiero problemas con nadie esta noche.»" },
        options: [
          {
            id: "grabar",
            say: { A: "Yo te grabo. Con tu teléfono. Sin pistola.", B: "Yo te grabo con tu teléfono. La guardo bien lejos.", C: "Yo te grabo. La pistola se queda guardada, y tú saltas. Te lo prometo." },
            reply: { A: "Kevin duda. «¿En serio?» Salta, cae perfecto. Te mira. «Gracias.»", B: "Kevin duda un segundo. «¿En serio?» Salta y cae perfecto. «Gracias. Mi hermano se va a reír mucho.»", C: "Kevin duda. «¿En serio?» Salta, cae perfecto, y mira a cámara: «Esto es para ti, hermano.» Luego te mira, serio. «Gracias.»" },
            mood: "worried", end: "pistola-truco",
          },
          {
            id: "irse",
            say: { A: "Mejor me voy.", B: "Mejor me voy y te dejo tranquilo.", C: "Mejor me retiro y te dejo en paz con tu truco." },
            reply: { A: "Te vas. Kevin llama a su hermano. Un patrullero pasa y te mira.", B: "Te alejas. Kevin se sienta en el suelo. Un patrullero pasa lento y te sigue con la vista.", C: "Te alejas. Kevin se sienta en el bordillo, agotado. Un patrullero pasa despacio y te acompaña con la mirada." },
            mood: "scared", end: "pistola-patrulla",
          },
        ],
      },
      "granada-inicio": {
        who: "kevin", mood: "smile",
        line: { A: "Kevin ve la granada y abre los ojos. «¡Qué locura! ¿Es de verdad? ¡Grábame con ella!»", B: "Kevin ve la granada y se le ilumina la cara. «¡Qué locura! ¿Es de verdad? ¡Grábame saltando con ella en la mano!»", C: "Kevin ve la granada y reacciona con un entusiasmo que debería preocuparte. «¡Qué locura! ¿Es de verdad? Grábame saltando con ella; será el video del siglo.»" },
        options: [
          {
            id: "grabar",
            say: { A: "¡No! ¡Es peligroso!", B: "¡No, Kevin! Es peligroso, ni de broma.", C: "No, ni hablar. La broma ya fue demasiado lejos." },
            reply: { A: "Kevin se ríe. «Es una broma, ¿no?» Pero la gente de la plaza ya está corriendo.", B: "Kevin se ríe. «Es una broma, ¿verdad?» Pero medio parque ya está corriendo, gritando.", C: "Kevin se ríe. «Es una broma, ¿no?» No le contestas a tiempo: medio parque ya huye a gritos." },
            mood: "surprised", next: "granada-plaza",
          },
          {
            id: "juguete",
            say: { A: "Es de plástico. Hagamos el video.", B: "Es de plástico. Salta con ella y te grabo.", C: "Es de plástico. Hagamos el video, pero con cuidado." },
            reply: { A: "Kevin sube a la patineta con la granada. Salta… ¡y la granada vuela por los aires! La gente grita.", B: "Kevin salta con la granada en la mano, y esta se le escapa y rueda por el suelo. La gente grita y huye.", C: "Kevin salta con la granada en la mano. Aterriza, la suelta sin querer y esta rueda hasta los pies de una pareja, que sale volando." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "granada-plaza": {
        who: "kevin", mood: "surprised",
        line: { A: "La plaza se vacía. Una pareja grita. Suenan sirenas. Kevin se quita el casco: «Ups.»", B: "La plaza se vacía en segundos. Una pareja grita, suenan sirenas. Kevin se rasca la cabeza, sin casco: «Ups. Esto no estaba en el plan.»", C: "La plaza se vacía en segundos. Una pareja chilla, las sirenas se acercan. Kevin, sin casco, murmura: «Ups. Mi video del año se ha convertido en un telediario.»" },
        options: [
          {
            id: "explicar",
            say: { A: "Es de plástico. Voy a decirlo.", B: "Es de plástico. Voy a explicarlo a la policía.", C: "Es de utilería. Voy a explicárselo a la policía antes de que lleguen los helicópteros." },
            reply: { A: "Un policía llega. Mira la granada. «Plástico.» Kevin se ríe, aliviado. «¡Ya está!»", B: "Un policía llega, examina la granada y dice «Plástico.» Kevin se ríe, aliviado. «¡Menos mal!»", C: "Un policía llega, examina la granada con guantes y dice «Plástico.» Kevin se ríe, aliviado, y empieza a editar el video mentalmente." },
            mood: "smile", end: "granada-video",
          },
          {
            id: "huir",
            say: { A: "Mejor nos vamos.", B: "Mejor nos vamos de aquí. Rápido.", C: "Mejor nos vamos de aquí, Kevin, y mañana lo contamos." },
            reply: { A: "Corren. Kevin en la patineta, tú detrás. Un helicóptero los sigue desde el aire.", B: "Corren: Kevin sobre la patineta, tú detrás. Un helicóptero los sigue desde el aire, iluminando la plaza.", C: "Corren, Kevin sobre la patineta y tú tras él. Un helicóptero los sigue desde el aire, con un foco que los convierte en estrellas involuntarias." },
            mood: "terror", end: "granada-evacuan",
          },
        ],
      },
      "corazon-inicio": {
        who: "kevin", mood: "love",
        line: { A: "Kevin te mira y se queda en silencio. Baja la patineta. «No sé por qué, pero quiero contarte algo.»", B: "Kevin te mira, baja la patineta y se sienta en el bordillo. «No sé por qué, pero quiero contarte algo. Mi hermano está en el hospital.»", C: "Kevin te mira, deja caer la patineta y se sienta en el bordillo. «No sé qué tienes, pero quiero contarte algo que no le he dicho a nadie. Mi hermano está ingresado.»" },
        options: [
          {
            id: "escuchar",
            say: { A: "Cuéntame. Estoy aquí.", B: "Cuéntame, Kevin. Estoy aquí, sin prisa.", C: "Cuéntame, Kevin. Aquí tienes a alguien con toda la noche por delante." },
            reply: { A: "Kevin respira hondo. «Le prometí que haría este truco. Hoy es su cumpleaños.»", B: "Kevin respira hondo. «Le prometí que haría este truco antes de su cumpleaños. Es hoy, y no pude ir a verlo.»", C: "Kevin respira hondo. «Le prometí que haría este truco antes de su cumpleaños. Es hoy, no puede salir del hospital, y yo no he conseguido el truco.»" },
            mood: "love", next: "corazon-hermano",
          },
          {
            id: "abrazar",
            say: { A: "Ven aquí. Un abrazo.", B: "Ven, Kevin. Un abrazo.", C: "Ven aquí. A veces un abrazo dice más que cualquier truco." },
            reply: { A: "Kevin te abraza fuerte. Llora un poco. «Gracias.» Luego se levanta y salta.", B: "Kevin te abraza fuerte y llora un poco. «Gracias.» Luego se levanta, se seca la cara y se sube a la patineta.", C: "Kevin te abraza con fuerza y llora un poco. «Gracias.» Se seca la cara con la manga y, de pronto, sube a la patineta con una decisión nueva." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
      "corazon-hermano": {
        who: "kevin", mood: "smitten",
        line: { A: "Kevin mira el teléfono. «Es su cumpleaños. Si lo grabas, se lo mando ahora. ¿Lo hacemos?»", B: "Kevin mira el teléfono. «Si me grabas, se lo mando ahora mismo. Es su cumpleaños. ¿Lo hacemos juntos?»", C: "Kevin te tiende el teléfono. «Si me grabas, se lo mando ahora mismo, antes de que acabe su cumpleaños. ¿Lo hacemos juntos, tú y yo?»" },
        options: [
          {
            id: "grabar",
            say: { A: "Sí. Vamos. Tú puedes.", B: "Sí, claro. Vamos. Tú puedes, Kevin.", C: "Por supuesto. Prepárate, que esta toma vale por todas las del año." },
            reply: { A: "Kevin salta… y cae perfecto. Se gira a la cámara. «¡Feliz cumpleaños, hermano!»", B: "Kevin salta, gira la patineta y cae perfecto. Se gira hacia la cámara. «¡Feliz cumpleaños, hermano!»", C: "Kevin salta, gira la patineta y aterriza limpio. Se gira hacia la cámara, con los ojos brillantes. «Feliz cumpleaños, hermano. Lo conseguí.»" },
            mood: "love", end: "corazon-video",
          },
          {
            id: "hospital",
            say: { A: "Vamos al hospital. Se lo enseñamos en persona.", B: "Mejor vamos al hospital. Se lo haces en persona.", C: "Mejor vamos al hospital y se lo haces en persona. Eso no tiene precio." },
            reply: { A: "Kevin sonríe, con lágrimas. «¿En serio?» Caminan juntos hacia la clínica, con la patineta bajo el brazo.", B: "Kevin sonríe, con lágrimas en los ojos. «¿En serio?» Caminan juntos hacia la clínica, con la patineta bajo el brazo.", C: "Kevin sonríe entre lágrimas. «¿De verdad?» Caminan juntos hacia la clínica, y la patineta va bajo su brazo como un trofeo." },
            mood: "love", end: "corazon-abrazo",
          },
        ],
      },
    },
    ends: {
      baila: {
        text: { A: "Kevin baila en la plaza. Mira el video una y otra vez.", B: "Kevin baila por la plaza con la patineta en alto. Ve el video diez veces seguidas.", C: "Kevin celebra con un baile espantoso y feliz. Mira el video en bucle, como si fuera una final de mundial." },
        change: "baila", recap: "Grabaste el mejor truco de Kevin.",
      },
      caida: {
        text: { A: "Kevin está en el suelo, pero se ríe. «¡Mañana otra vez!»", B: "Kevin se sienta en el suelo, riéndose. «Mañana lo intento otra vez. Sin tus consejos.»", C: "Kevin se queda sentado en el suelo, riéndose. «Guarda ese video. Algún día será el “antes” de mi documental.»" },
        change: "se-sienta", recap: "Grabaste una caída muy graciosa de Kevin.",
      },
      solo: {
        text: { A: "Te vas. Kevin practica solo en la plaza.", B: "Te vas. Detrás, oyes la patineta de Kevin golpear el suelo una y otra vez.", C: "Te alejas. Detrás, el ruido de la patineta de Kevin marca el ritmo de la plaza." },
        change: "sigue", recap: "No grabaste a Kevin porque tenías prisa.",
      },
      "cuchillo-patrulla": {
        text: { A: "Llega un patrullero. Un policía mira el cuchillo y la navaja. Kevin sonríe, nervioso.", B: "Llega un patrullero. Un policía mira el cuchillo y la navaja de Kevin. Los dos explican lo ocurrido.", C: "Llega un patrullero. Un agente mira el cuchillo, mira la navaja de Kevin y suspira. Los dos explican lo ocurrido con una cortesía que no engaña a nadie." },
        change: "policia", recap: "Tu cuchillo y la navaja de Kevin provocaron la llegada de un patrullero.",
      },
      "cuchillo-truco": {
        text: { A: "Kevin salta y cae perfecto. Tú lo grabas con una mano. «¡Sí!» Los dos se ríen del susto.", B: "Kevin salta y cae perfecto mientras lo grabas. «¡Sí!» Los dos se ríen del susto inicial.", C: "Kevin salta, cae perfecto y se gira hacia la cámara con una sonrisa enorme. «¡Sí!» Los dos terminan riéndose del cuchillo que casi arruina su noche." },
        change: "baila", recap: "Después del susto del cuchillo, grabaste el truco de Kevin.",
      },
      "pistola-patrulla": {
        text: { A: "Llega un patrullero. Te quitan la pistola. Kevin mira, con la patineta bajo el brazo.", B: "Llega un patrullero. Te quitan la pistola. Kevin mira desde lejos, con la patineta bajo el brazo, sin atreverse a respirar.", C: "Llega un patrullero que te desarma en medio de la plaza. Kevin mira desde lejos, con la patineta bajo el brazo, y decide que mañana practica en un garaje." },
        change: "policia", recap: "Tu pistola en la plaza terminó con un patrullero.",
      },
      "pistola-truco": {
        text: { A: "Kevin envía el video a su hermano. Le contesta con mil emojis. Kevin te abraza, aunque dude.", B: "Kevin envía el video a su hermano. Él responde con mil emojis. Kevin te da un abrazo, dudando.", C: "Kevin envía el video a su hermano, que responde con una avalancha de emojis. Kevin te abraza con una mezcla de miedo y gratitud, sin soltar la patineta." },
        change: "abraza", recap: "Grabaste el truco de Kevin para su hermano, pese al susto de la pistola.",
      },
      "granada-evacuan": {
        text: { A: "La policía evacúa la plaza. Un helicóptero vuela sobre ustedes. La granada es de plástico.", B: "La policía evacúa la plaza y un helicóptero sobrevuela. Al final, alguien confirma que la granada es de plástico.", C: "La policía evacúa la plaza, un helicóptero ilumina el suelo y, tras media hora, un artificiero confirma que la granada es de plástico. Kevin, por supuesto, lo ha grabado." },
        change: "helicoptero", recap: "Tu granada en la plaza provocó una evacuación con helicóptero.",
      },
      "granada-video": {
        text: { A: "Kevin y tú ven el video: sale la granada, la gente huyendo y la policía. Es viral.", B: "Kevin y tú ven el video: la granada, la gente huyendo, la policía. Se hace viral en una hora.", C: "Kevin y tú ven el video: la granada, el pánico, la policía llegando. En una hora tiene un millón de visitas y una citación pendiente." },
        change: "baila", recap: "Tu granada de plástico acabó en un video viral con Kevin.",
      },
      "corazon-video": {
        text: { A: "Kevin manda el video. Su hermano responde con un corazón. Kevin te abraza, llorando de alegría.", B: "Kevin manda el video a su hermano, que responde con un corazón enorme. Kevin te abraza, llorando de alegría.", C: "Kevin manda el video; su hermano responde en segundos con un corazón enorme y un «Eres un crack». Kevin te abraza, llorando y riendo a la vez." },
        change: "abraza", recap: "Grabaste el truco de Kevin para el cumpleaños de su hermano.",
      },
      "corazon-abrazo": {
        text: { A: "Kevin te da un abrazo largo. Se sube a la patineta y se va hacia la clínica, sonriendo.", B: "Kevin te da un abrazo largo, se sube a la patineta y se va hacia la clínica, sonriendo por fin.", C: "Kevin te da un abrazo largo, se sube a la patineta y se desliza hacia la clínica con la determinación de quien ha recibido lo que necesitaba." },
        change: "abraza", recap: "Abrazaste a Kevin y se fue a ver a su hermano al hospital.",
      },
    },
    variants: {
      cuchillo: { start: "cuchillo-inicio", fx: "duelo-cuchillo", speak: { A: "¿Qué excusa mala inventaste alguna vez?", B: "¿Cuándo una mentira pequeña empeoró una situación?", C: "¿Qué tiene la torpeza de sacar una excusa en el peor momento posible?" } },
      pistola: { start: "pistola-inicio", fx: "manos-arriba", speak: { A: "¿A quién le mandarías un video para hacerle sonreír?", B: "¿Cómo mantienes la calma cuando alguien te apunta con algo?", C: "¿Qué te dice la reacción de una persona asustada sobre lo que realmente valora?" } },
      granada: { start: "granada-inicio", fx: "huye", speak: { A: "¿Qué es lo más viral que has visto?", B: "¿Cuál fue la locura más grande que hiciste por un video?", C: "¿Qué precio estamos dispuestos a pagar por un momento memorable que otros verán?" } },
      corazon: { start: "corazon-inicio", fx: "abrazo", speak: { A: "¿Qué le prometiste a alguien y todavía no cumples?", B: "¿Cómo celebras un cumpleaños cuando no puedes estar con alguien?", C: "¿Qué papel juegan las promesas pequeñas en la forma en que cuidamos a quienes queremos?" } },
    },
    speak: {
      A1: "¿Qué deporte haces?",
      A2: "¿Qué aprendiste a hacer el año pasado?",
      B1: "¿Qué cosa practicaste muchas veces hasta conseguirla?",
      B2: "¿Qué te gustaría aprender si no tuvieras miedo a hacer el ridículo?",
      C1: "¿Qué diferencia hay entre hacer algo para ti y hacerlo para que otros lo vean?",
      C2: "¿Qué lugar ocupa el fracaso en tu manera de aprender algo nuevo?",
    },
  },
];
export default encounters;
