// Noche abierta · calle · Hospital y comisaría: luces blancas y frías, gente que espera, personal cansado y una ciudad que no duerme del todo.
const CORAZON = { A: "Usas el corazón.", B: "Usas el corazón.", C: "Usas el corazón." };

export default [
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
