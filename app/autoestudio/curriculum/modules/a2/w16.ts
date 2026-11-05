import type { Module } from "../../types";

export const a2w16: Module = {
  id: "a2-16",
  level: "a2",
  week: 16,
  kind: "core",
  title: "Primero se remojan los frijoles, así que todo empieza la noche antes",
  subtitle: "Repaso del se impersonal para recetas, normas y carteles, y de los conectores para contar en orden y explicar causas y consecuencias.",
  stop: { place: "Managua", country: "Nicaragua" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g076",
    "a2.gram.g077",
    "a2.voc.w16-cocina-receta",
    "a2.pron.w16-pausa-conectores",
    "a2.lis.w16-taller-gallo-pinto",
    "a2.read.w16-blog-curso-cocina",
    "a2.wri.w16-receta-con-historia",
    "a2.spk.w16-explicar-receta",
    "a2.fun.w16-dar-instrucciones",
    "a2.disc.w16-ordenar-explicar",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes explicar cómo se prepara un plato o qué no se puede hacer en un lugar sin decir quién lo hace, y contar en orden lo que pasó un día, con sus causas y sus consecuencias.",
    steps: [
      "Repasa por qué un cartel dice `se vende` o `se venden`.",
      "Explica normas con `no se puede` + infinitivo.",
      "Ordena una historia con `primero`, `luego`, `entonces`, `al final`.",
      "Explica causas con `porque` y `como`, y consecuencias con `por eso` y `así que`.",
      "Escucha una clase de cocina en Managua y lee el blog de una alumna.",
      "Escribe y graba una receta con su pequeña historia.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que se usan mucho juntas cuando cuentas o explicas algo: el **se impersonal** (_se corta, se cortan, no se puede_), para instrucciones y normas que valen para todos, y los **conectores** (_primero, luego, como, por eso, así que, al final_), para ordenar los hechos y explicar por qué pasan. La situación: un curso de cocina nicaragüense en Managua.",
    parts: [
      {
        heading: "Se + verbo: lo importante es qué se hace",
        body: [
          "En recetas, carteles, manuales y normas no importa **quién** hace la acción: es información para cualquiera. Por eso usamos **se + verbo en tercera persona**: _se pela el plátano_, _aquí se habla inglés_, _¿cómo se escribe tu apellido?_",
          "El verbo **concuerda con la cosa**: una cosa o algo que no se cuenta → singular (_se lava **el arroz**_); varias cosas → plural (_se lavan **los frijoles**_). La cosa puede ir antes o después: _las ollas se guardan aquí_ = _aquí se guardan las ollas_.",
          "Si no hay cosa, el verbo va en **singular**: _en esta casa se come temprano_, _en el mercado se regatea_.",
        ],
        support: [
          "Use _se_ + 3rd-person verb when the person doesn't matter: recipes, signs, rules. The verb agrees with the thing: _se lava el arroz_ / _se lavan los frijoles_. With no thing, singular: _aquí se come temprano_.",
        ],
        table: {
          caption: "Una cosa, varias cosas o ninguna",
          head: ["Qué se hace", "Singular", "Plural"],
          rows: [
            ["en una receta", "se pica la cebolla", "se pican los chiles"],
            ["en un cartel", "se vende casa", "se venden muebles"],
            ["en un manual", "se aprieta el botón", "se aprietan los dos botones"],
            ["sin cosa", "aquí se trabaja mucho", "—"],
          ],
        },
        examples: [
          { es: "En Nicaragua el gallo pinto se come con tortilla y queso.", en: "In Nicaragua, gallo pinto is eaten with tortilla and cheese." },
          { es: "Las mesas se limpian después de cada grupo.", en: "The tables are cleaned after each group." },
          { es: "¿Cómo se dice «spoon» en español?", en: "How do you say “spoon” in Spanish?" },
        ],
        mistakes: [
          { wrong: "Se pica los tomates.", right: "Se pican los tomates.", why: "_Los tomates_ es plural: **se pican**." },
          { wrong: "Aquí se hablan español.", right: "Aquí se habla español.", why: "_Español_ es una cosa: **se habla**." },
        ],
      },
      {
        heading: "Normas: se puede, no se puede, y quién es quién",
        body: [
          "Para permisos y prohibiciones usas **se puede / no se puede + infinitivo**. El verbo _poder_ va siempre en **singular**, porque lo que sigue es un infinitivo: _no se puede entrar con sandalias_, _se puede pagar con tarjeta_.",
          "Compara tres frases distintas: _Se corta el pan_ (instrucción para todos), _Marcos, corta el pan_ (imperativo a una persona concreta) y _Marcos corta el pan_ (cuentas lo que hace Marcos).",
          "No lo confundas con el **se reflexivo**: _Marcos se lava las manos_ (él mismo). En el se impersonal no hay persona: _primero se lavan las manos_ (todos, cualquiera).",
        ],
        support: [
          "Rules: _(no) se puede_ + infinitive, always singular. Compare an instruction for anyone (_se corta el pan_), an order to one person (_Marcos, corta el pan_) and a fact about one person (_Marcos corta el pan_).",
        ],
        examples: [
          { es: "En la cocina no se puede usar el celular.", en: "You can't use your phone in the kitchen." },
          { es: "¿Se puede probar la salsa?", en: "Can we taste the sauce?" },
          { es: "Doña Rosa, ¿cómo se prende este horno?", en: "Doña Rosa, how do you turn this oven on?" },
        ],
        mistakes: [
          { wrong: "No se pueden tocar.", right: "No se puede tocar.", why: "Con infinitivo, _poder_ en singular: **no se puede**." },
          { wrong: "Aquí habla español. (en un cartel)", right: "Aquí se habla español.", why: "Sin _se_, la frase habla de una persona concreta (él o ella)." },
        ],
        tip: "Antes de escribir, busca la cosa: ¿una o varias? Si después del verbo viene un infinitivo, el verbo va en singular.",
      },
      {
        heading: "Contar en orden: primero, luego, al final",
        body: [
          "Para que una historia o unas instrucciones se entiendan, marca el orden: **primero** → **luego / después** → **entonces** → **al final** o **por último**.",
          "**Al final** dice cómo terminó la historia (_al final comimos todos juntos_). **Por último** presenta el último paso de una lista (_por último, se sirve caliente_).",
          "**Después** va solo o con **de + infinitivo**: _después, lavamos todo_; _después de lavar todo, nos fuimos_. Nunca _después de, llegó_. Y **entonces** tiene dos usos: _en ese momento_ (_entonces sonó el teléfono_) o _por eso_ (_no había gas, entonces cocinamos con leña_).",
        ],
        support: [
          "Sequence: _primero → luego / después → entonces → al final / por último_. _Al final_ = in the end (the outcome); _por último_ = lastly (the last item). _Entonces_ = then, or so.",
        ],
        table: {
          caption: "Conectores de orden",
          head: ["Momento", "Conector", "Ejemplo"],
          rows: [
            ["el comienzo", "primero", "Primero fuimos al mercado Roberto Huembes."],
            ["el siguiente paso", "luego / después", "Luego compramos queso y plátanos."],
            ["en ese momento", "entonces", "Entonces empezó a llover."],
            ["el resultado", "al final", "Al final llegamos a casa empapados."],
            ["el último punto", "por último", "Por último, se apaga el fuego."],
          ],
        },
        examples: [
          { es: "Primero se calienta el aceite y luego se echa la cebolla.", en: "First you heat the oil and then you add the onion." },
          { es: "Al final la sopa nos salió riquísima.", en: "In the end the soup turned out delicious." },
        ],
        mistakes: [
          { wrong: "En el final, comimos en el patio.", right: "Al final, comimos en el patio.", why: "La expresión es **al final**." },
          { wrong: "Después de, fuimos al mercado.", right: "Después, fuimos al mercado.", why: "_Después de_ necesita un infinitivo o un nombre: _después de comer_." },
        ],
      },
      {
        heading: "Explicar por qué: porque, como, por eso, así que, es decir",
        body: [
          "Para la **causa**: **porque** va después de lo que pasó (_llegué tarde porque no había buses_); **como** va al principio, antes de lo que pasó (_como no había buses, llegué tarde_).",
          "Para la **consecuencia**: **por eso** y **así que** van después de la causa (_no había buses, **por eso** llegué tarde_; _tenía hambre, **así que** compré un vigorón_). La dirección importa: primero la causa, luego el resultado.",
          "Para **aclarar** o decir lo mismo con otras palabras: **es decir** (y en conversación, **o sea**): _el frijol se remoja, es decir, se deja en agua toda la noche_.",
        ],
        support: [
          "Cause: _porque_ after the result, _como_ at the start. Consequence: _por eso_ / _así que_ after the cause. Rephrase with _es decir_ (spoken: _o sea_).",
        ],
        examples: [
          { es: "Como el horno no funcionaba, hicimos las rosquillas en la sartén.", en: "As the oven wasn't working, we made the rosquillas in the frying pan." },
          { es: "Se me olvidó la sal, así que el arroz salió sin sabor.", en: "I forgot the salt, so the rice came out tasteless." },
          { es: "El vigorón es un plato frío, es decir, no se cocina en el momento.", en: "Vigorón is a cold dish, that is, it isn't cooked on the spot." },
        ],
        mistakes: [
          { wrong: "No fui a clase como estaba enfermo.", right: "Como estaba enfermo, no fui a clase.", why: "**Como** de causa va al principio. Para poner la causa detrás, usa **porque**." },
          { wrong: "Comimos en la calle, por eso no había mesas.", right: "No había mesas, por eso comimos en la calle.", why: "**Por eso** va después de la causa: primero _no había mesas_." },
        ],
        tip: "Pregúntate: ¿qué fue antes, la causa o el resultado? Causa al principio → _como_. Resultado al principio → _porque_. Causa y luego resultado → _por eso_ o _así que_.",
      },
    ],
  },
  grammar: {
    intro: "Primero el se impersonal en recetas y normas; después los conectores de orden, causa y consecuencia.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "La receta del gallo pinto",
        prompt: "Completa con **se** + el verbo en presente, en singular o plural.",
        items: [
          { q: "La noche antes, ___ ___ los frijoles rojos en agua. (remojar)", answers: [["se"], ["remojan"]], why: "_Los frijoles_, plural: **se remojan**." },
          { q: "Al día siguiente ___ ___ la cebolla muy fina. (picar)", answers: [["se"], ["pica"]], why: "_La cebolla_, una: **se pica**." },
          { q: "Después ___ ___ el arroz con un poco de aceite. (freír)", answers: [["se"], ["fríe"]], why: "_El arroz_: **se fríe**, con tilde en la í." },
          { q: "El arroz y los frijoles ___ ___ en la misma sartén. (mezclar)", answers: [["se"], ["mezclan"]], why: "Dos cosas juntas: **se mezclan**." },
          { q: "En muchas casas el gallo pinto ___ ___ en el desayuno. (servir)", answers: [["se"], ["sirve"]], why: "_El gallo pinto_: **se sirve**." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "Carteles y normas",
        prompt: "Elige la forma correcta para cada cartel.",
        items: [
          { q: "Cartel en una ventana: «___ cuartos para estudiantes».", options: ["Se alquila", "Se alquilan", "Alquilan se"], answer: 1, why: "_Cuartos_, plural: **se alquilan**." },
          { q: "Cartel en la puerta del museo: «No ___ hacer fotos con flash».", options: ["se puede", "se pueden", "puede se"], answer: 0, why: "Con infinitivo: **se puede**, singular." },
          { q: "Cartel en una tienda de Granada: «Aquí ___ portugués».", options: ["se hablan", "habla", "se habla"], answer: 2, why: "_Portugués_, un idioma: **se habla**." },
          { q: "Cartel en la cocina: «Los platos ___ antes de las nueve».", options: ["se lava", "se lavan", "lavan"], answer: 1, why: "_Los platos_: **se lavan**." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "Antes, después, al final",
        prompt: "Completa con **primero, luego, entonces, al final** o **por último**. Usa cada uno una vez.",
        items: [
          { q: "___ fuimos al mercado a comprar los ingredientes.", answers: [["Primero"]], why: "El comienzo: **primero**." },
          { q: "___ volvimos a casa en taxi porque llevábamos muchas bolsas.", answers: [["Luego", "Después"]], why: "El paso siguiente: **luego**." },
          { q: "Estábamos cocinando y ___ se fue la luz.", answers: [["entonces"]], why: "En ese momento: **entonces**." },
          { q: "Para terminar la receta: ___, se adorna con perejil.", answers: [["por último"]], why: "El último paso de una lista: **por último**." },
          { q: "Hubo muchos problemas, pero ___ la cena salió perfecta.", answers: [["al final"]], why: "El resultado de la historia: **al final**." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Cambia el conector",
        prompt: "Escribe la misma idea con el conector que se indica.",
        items: [
          { source: "No compré tortillas porque la tienda estaba cerrada.", instruction: "Empieza con **Como**.", answers: ["Como la tienda estaba cerrada, no compré tortillas."], why: "**Como** + causa al principio." },
          { source: "Había mucho tráfico en la rotonda, así que llegamos tarde.", instruction: "Usa **por eso**.", answers: ["Había mucho tráfico en la rotonda, por eso llegamos tarde."], why: "Causa + **por eso** + resultado." },
          { source: "Como el mango estaba verde, no hicimos el jugo.", instruction: "Usa **porque**.", answers: ["No hicimos el jugo porque el mango estaba verde."], why: "Resultado + **porque** + causa." },
          { source: "Se me quemó el arroz porque me olvidé de la olla.", instruction: "Usa **así que**.", answers: ["Me olvidé de la olla, así que se me quemó el arroz."], why: "Causa primero, después **así que** + resultado." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para seguir una receta en una cocina nicaragüense y contar cómo salió.",
    groups: [
      {
        title: "Ingredientes",
        items: [
          { es: "los frijoles rojos", en: "red beans" },
          { es: "el plátano maduro", en: "ripe plantain" },
          { es: "la yuca", en: "cassava" },
          { es: "el chicharrón", en: "pork crackling" },
          { es: "el repollo", en: "cabbage" },
          { es: "la cuajada", en: "fresh curd cheese" },
        ],
      },
      {
        title: "Utensilios",
        items: [
          { es: "la olla", en: "the pot" },
          { es: "la sartén", en: "the frying pan" },
          { es: "el cuchillo", en: "the knife" },
          { es: "la tabla de cortar", en: "the chopping board" },
          { es: "el colador", en: "the strainer" },
        ],
      },
      {
        title: "Acciones de cocina",
        items: [
          { es: "remojar", en: "to soak" },
          { es: "pelar", en: "to peel" },
          { es: "picar", en: "to chop finely" },
          { es: "freír", en: "to fry" },
          { es: "hervir", en: "to boil" },
          { es: "escurrir", en: "to drain" },
          { es: "probar", en: "to taste" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Con qué se hace?",
        prompt: "Une cada acción con el utensilio que se usa.",
        pairs: [
          { left: "Se pica el repollo.", right: "el cuchillo y la tabla de cortar" },
          { left: "Se hierve la yuca.", right: "la olla con agua" },
          { left: "Se fríen los plátanos.", right: "la sartén con aceite" },
          { left: "Se escurre la pasta.", right: "el colador" },
        ],
        why: "Cada frase usa **se** + verbo y concuerda con la cosa: _se fríen los plátanos_.",
      },
      {
        id: "v2",
        type: "context",
        title: "En la cocina",
        prompt: "Lee la situación y elige la palabra que falta.",
        items: [
          { context: "La yuca tiene piel marrón y dura.", q: "Antes de cocinarla, se tiene que…", options: ["pelar", "probar", "remojar"], answer: 0, why: "La piel se quita: **pelar**." },
          { context: "Los frijoles están duros y secos.", q: "La noche antes se dejan en agua, es decir, se…", options: ["fríen", "remojan", "escurren"], answer: 1, why: "Dejar en agua = **remojar**." },
          { context: "La sopa está lista, pero no sabes si tiene sal.", q: "Antes de servirla, la…", options: ["pelas", "picas", "pruebas"], answer: 2, why: "Para saber el sabor: **probar**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La pausa después del conector",
    explanation: [
      "Los conectores son señales para quien escucha: _primero, luego, entonces, como, así que_. Si los dices rápido y sin pausa, la historia suena como una sola frase larga.",
      "Después de un conector de orden (_primero, luego, al final, por último_) haz una **pausa corta** y deja el tono **un poco arriba**: _Primero ↗ | se lava el arroz_. La pausa en la escritura es la coma.",
      "Con **como** de causa, la voz sube al final de la causa y baja al final del resultado: _Como no había gas ↗ | cocinamos con leña ↘_. Con **así que** y **por eso**, la pausa va antes: _no había gas | así que cocinamos con leña_.",
    ],
    support: [
      "Pause briefly after sequence connectors and keep the pitch slightly up. With _como_, the voice rises at the end of the cause and falls at the end of the result. Pause before _así que_ and _por eso_.",
    ],
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Dónde está la pausa?",
      prompt: "Escucha y elige dónde se oye la pausa.",
      items: [
        { q: "¿Dónde está la pausa?", audio: "Primero, se pela la yuca.", options: ["después de «primero»", "después de «pela»"], answer: 0 },
        { q: "¿Dónde está la pausa?", audio: "Como llovía, no salimos.", options: ["después de «como»", "después de «llovía»"], answer: 1 },
        { q: "¿Dónde está la pausa?", audio: "Estaba cansada, así que me dormí.", options: ["antes de «así que»", "después de «así»"], answer: 0 },
        { q: "¿Dónde está la pausa?", audio: "Al final, todo salió bien.", options: ["después de «todo»", "después de «al final»"], answer: 1 },
      ],
    },
    produce: [
      { text: "Primero, se remojan los frijoles; luego, se cocinan.", tip: "Pausa después de _primero_ y de _luego_, con el tono arriba." },
      { text: "Como no había gas, cocinamos con leña.", tip: "Sube en _gas_, baja en _leña_." },
      { text: "Se me olvidó la sal, así que el arroz salió soso.", tip: "Pausa antes de _así que_." },
      { text: "Por último, se sirve con cuajada.", tip: "_Por último_ y una pausa: el oyente sabe que es el final." },
    ],
    spelling: "En la escritura, la pausa es una **coma**: después de _primero, luego, al final, por último_ y después de la causa con _como_ (_Como llovía, …_). Antes de _así que_ y _por eso_ también se suele poner coma.",
  },
  listening: {
    title: "Clase de gallo pinto",
    context: "En un centro cultural de Managua, doña Rosa da una clase de cocina nicaragüense. Hoy enseña a hacer gallo pinto. Una alumna, Valeria, llegó un poco tarde y otro alumno, Iván, hace preguntas.",
    speakers: [
      { id: "rosa", name: "Doña Rosa", voice: "es-MX-f", role: "profesora de cocina" },
      { id: "valeria", name: "Valeria", voice: "es-CO-f", role: "alumna" },
      { id: "ivan", name: "Iván", voice: "es-PE-m", role: "alumno" },
    ],
    script: [
      { speaker: "rosa", text: "Buenos días. Antes de empezar, una norma: en esta cocina no se puede entrar sin delantal, y las manos se lavan siempre en ese lavabo." },
      { speaker: "valeria", text: "Perdón por el retraso. Como el bus no pasaba, vine caminando desde la rotonda." },
      { speaker: "rosa", text: "Tranquila, todavía no empezamos. Bueno, primero se remojan los frijoles la noche antes. Luego se cocinan con un poco de sal, es decir, se hierven hasta que están suaves." },
      { speaker: "ivan", text: "¿Y el arroz se cocina aparte?" },
      { speaker: "rosa", text: "Sí. El arroz se hace el día anterior, porque así queda más seco. Entonces, en la sartén se fríe la cebolla, después se echan los frijoles y por último se añade el arroz." },
      { speaker: "ivan", text: "Ayer lo intenté en casa, pero usé arroz recién hecho, así que me salió una masa pegajosa." },
      { speaker: "rosa", text: "Por eso se usa arroz del día anterior. Y otra cosa: se mezcla poco, para no romper los frijoles." },
      { speaker: "valeria", text: "¿Se puede comer con huevo?" },
      { speaker: "rosa", text: "Claro. Aquí se come con huevo, con queso frito o con crema. Al final cada uno lo sirve a su gusto." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez y busca la idea general.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿Qué enseña doña Rosa?", options: ["a hacer gallo pinto", "a hacer tortillas", "a preparar un postre"], answer: 0 },
            { q: "¿Por qué llegó tarde Valeria?", options: ["Se quedó dormida.", "El bus no pasaba.", "Se perdió en el mercado."], answer: 1 },
            { q: "¿Qué problema tuvo Iván en casa?", options: ["Se le quemaron los frijoles.", "No tenía sartén.", "El gallo pinto le salió pegajoso."], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención al orden de los pasos y a las normas.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Qué se hace con los frijoles la noche antes?", options: ["Se fríen.", "Se remojan.", "Se mezclan con el arroz."], answer: 1 },
            { q: "¿Qué se fríe primero en la sartén?", options: ["la cebolla", "el arroz", "los frijoles"], answer: 0 },
            { q: "¿Por qué se usa arroz del día anterior?", options: ["porque es más barato", "porque se cocina más rápido", "porque queda más seco"], answer: 2 },
            { q: "¿Con qué se come el gallo pinto, según doña Rosa?", options: ["con huevo, queso frito o crema", "solo con tortilla", "con sopa y ensalada"], answer: 0 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en el se impersonal y en los conectores.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hay en cada frase?",
          categories: ["se impersonal (instrucción o norma)", "conector de causa o consecuencia"],
          items: [
            { text: "no se puede entrar sin delantal", cat: 0, why: "Norma con **no se puede** + infinitivo." },
            { text: "Como el bus no pasaba, vine caminando", cat: 1, why: "**Como** + causa al principio." },
            { text: "las manos se lavan siempre en ese lavabo", cat: 0, why: "_Las manos_, plural: **se lavan**." },
            { text: "así que me salió una masa pegajosa", cat: 1 },
            { text: "Por eso se usa arroz del día anterior.", cat: 1, why: "**Por eso** introduce la consecuencia de lo que dijo Iván." },
            { text: "en la sartén se fríe la cebolla", cat: 0 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Mi primer día en la cocina de doña Rosa",
    genre: "Entrada de blog de viaje",
    frame: "Valeria escribe en su blog sobre el curso de cocina que hace en Managua.",
    text: [
      "Hoy empecé el curso de cocina nicaragüense y fue un día muy completo. Primero tuve un pequeño problema: como el bus no pasaba, caminé veinte minutos bajo el sol, así que llegué sudando y un poco tarde. Por suerte, doña Rosa todavía estaba preparando las mesas.",
      "En la cocina de doña Rosa hay reglas claras. No se puede usar el celular, el delantal se pone antes de entrar y los cuchillos se guardan siempre en el mismo cajón. Al principio me pareció exagerado, pero luego entendí por qué: en una cocina pequeña se trabaja mejor con orden.",
      "Hicimos gallo pinto. El secreto, según doña Rosa, es el arroz del día anterior, es decir, un arroz frío y seco. Primero se fríe la cebolla, después se echan los frijoles con un poco de su caldo y por último se añade el arroz. Se mezcla con calma, porque si no, los frijoles se rompen.",
      "Al final comimos todos juntos en el patio, con queso frito y café. Mañana se hace vigorón, así que voy a salir de casa más temprano.",
    ],
    glossary: [
      { es: "sudando", en: "sweating" },
      { es: "el cajón", en: "the drawer" },
      { es: "exagerado", en: "over the top" },
      { es: "el caldo", en: "the cooking liquid / broth" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee la entrada y responde.",
        items: [
          { q: "¿Por qué llegó Valeria sudando?", options: ["Porque corrió en el mercado.", "Porque caminó bajo el sol.", "Porque la cocina hacía calor."], answer: 1 },
          { q: "¿Dónde se guardan los cuchillos?", options: ["en una caja en el patio", "en la mesa de la profesora", "siempre en el mismo cajón"], answer: 2 },
          { q: "¿Cuál es el secreto del gallo pinto según doña Rosa?", options: ["usar arroz del día anterior", "freír mucho los frijoles", "cocinar el arroz con caldo"], answer: 0 },
          { q: "¿Qué va a hacer Valeria mañana?", options: ["No va a ir al curso.", "Va a salir más temprano.", "Va a cocinar en casa."], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Para qué sirve cada conector en el texto?",
        categories: ["ordenar los hechos", "dar una causa", "dar una consecuencia o aclarar"],
        items: [
          { text: "Primero tuve un pequeño problema", cat: 0 },
          { text: "como el bus no pasaba", cat: 1, why: "**Como** al principio presenta la causa." },
          { text: "así que llegué sudando", cat: 2, why: "**Así que**: el resultado de caminar bajo el sol." },
          { text: "es decir, un arroz frío y seco", cat: 2, why: "**Es decir** aclara qué es _arroz del día anterior_." },
          { text: "porque si no, los frijoles se rompen", cat: 1 },
          { text: "Al final comimos todos juntos", cat: 0 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del blog para ver qué gramática hay dentro.",
      items: [
        { quote: "No se puede usar el celular", note: "Norma: **no se puede** + infinitivo, siempre singular." },
        { quote: "los cuchillos se guardan siempre en el mismo cajón", note: "_Los cuchillos_ va delante y es plural: **se guardan**." },
        { quote: "en una cocina pequeña se trabaja mejor", note: "Sin cosa: **se trabaja**, singular." },
        { quote: "como el bus no pasaba, caminé veinte minutos", note: "**Como** + causa, al principio de la frase." },
        { quote: "Mañana se hace vigorón, así que voy a salir de casa más temprano", note: "Se impersonal y después **así que** + consecuencia." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: instrucciones con se y conectores para contar y explicar.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige el recetario",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Para el vigorón se pela la yuca y se corta los chicharrones.", answers: ["Para el vigorón se pela la yuca y se cortan los chicharrones."], why: "_Los chicharrones_, plural: **se cortan**." },
          { sentence: "En esta cocina no se pueden entrar con sandalias.", answers: ["En esta cocina no se puede entrar con sandalias."], why: "Con infinitivo: **no se puede**." },
          { sentence: "Llegamos tarde a la clase, por eso había un accidente en la carretera.", answers: ["Había un accidente en la carretera, por eso llegamos tarde a la clase.", "Llegamos tarde a la clase porque había un accidente en la carretera."], why: "**Por eso** va después de la causa: primero el accidente, después el retraso." },
          { sentence: "Después de, se sirve con repollo y tomate.", answers: ["Después, se sirve con repollo y tomate."], why: "Solo, sin infinitivo: **después**." },
          { sentence: "Salimos tarde como había mucha gente en el mercado.", answers: ["Como había mucha gente en el mercado, salimos tarde.", "Salimos tarde porque había mucha gente en el mercado."], why: "**Como** de causa va al principio; detrás del resultado, **porque**." },
        ],
      },
      {
        id: "x2",
        type: "order",
        title: "Frases de cocina",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["Primero,", "se", "pelan", "los", "plátanos", "maduros."], en: "First, the ripe plantains are peeled." },
          { words: ["Como", "no", "teníamos", "horno,", "usamos", "la", "sartén."], en: "As we didn't have an oven, we used the frying pan." },
          { words: ["¿Se", "puede", "pagar", "con", "tarjeta", "aquí?"], en: "Can you pay by card here?" },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Explicas a un turista una costumbre de tu ciudad.", q: "Dices:", options: ["En mi ciudad se cena muy tarde.", "En mi ciudad cenan se muy tarde.", "En mi ciudad se cenan muy tarde."], answer: 0, why: "Sin cosa: **se cena**, singular." },
          { context: "Cuentas por qué no fuiste a la fiesta: estabas muy cansado.", q: "Dices:", options: ["No fui, por eso estaba muy cansado.", "Estaba muy cansado, así que no fui.", "Como no fui, estaba muy cansado."], answer: 1, why: "Causa primero (_estaba cansado_) y después **así que** + resultado." },
          { context: "Quieres saber una palabra que no conoces.", q: "Preguntas a tu profesora:", options: ["¿Cómo dice «oven»?", "¿Cómo se dicen «oven»?", "¿Cómo se dice «oven» en español?"], answer: 2, why: "Pregunta general: **¿cómo se dice…?**" },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases sobre tu vida. Después compara con el modelo.",
        items: [
          {
            prompt: "Explica en cuatro pasos cómo se prepara una bebida o un desayuno típico de tu país.",
            model: "Para hacer una limonada con hierbabuena, primero se lavan los limones. Luego se exprimen y se mezcla el jugo con agua fría. Después se añaden azúcar y unas hojas de hierbabuena. Por último, se sirve con mucho hielo.",
            checklist: ["Usas **se** + verbo, singular o plural según la cosa", "Ordenas con _primero, luego, después, por último_", "Hay al menos un verbo en plural (_se lavan_)"],
          },
          {
            prompt: "Escribe tres normas de un lugar que conoces (tu trabajo, un gimnasio, una biblioteca).",
            model: "En mi gimnasio no se puede entrar sin toalla. Las máquinas se limpian después de usarlas y las clases se reservan por la aplicación.",
            checklist: ["Usas **no se puede** + infinitivo", "Usas **se** + verbo en plural al menos una vez"],
          },
          {
            prompt: "Cuenta un día en que algo salió mal en la cocina. Usa una causa con _como_ y una consecuencia con _así que_ o _por eso_.",
            model: "El domingo quería hacer un pastel para mi madre. Como no tenía balanza, calculé la harina a ojo, así que la masa salió muy dura. Al final compramos un pastel en la panadería.",
            checklist: ["**Como** + causa al principio", "**Así que** o **por eso** después de la causa", "Cierras con **al final**"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe la receta de un plato que te gusta y cuenta en orden una vez que lo cocinaste.",
    context: "Un blog de cocina pide a sus lectores «recetas con historia»: cómo se prepara un plato y qué pasó un día que lo hiciste.",
    steps: [
      "Presenta el plato en una frase: qué es y cuándo se come.",
      "Explica los pasos con **se** + verbo (singular o plural) y conectores de orden.",
      "Cuenta en orden un día que lo cocinaste: qué pasó primero, luego y al final.",
      "Explica una causa con **como** o **porque** y una consecuencia con **así que** o **por eso**.",
      "Revisa: ¿cada **se** concuerda con la cosa? ¿Pusiste **como** al principio de la frase?",
    ],
    useLanguage: ["Se come…", "Primero se…, luego se…", "Por último, se sirve…", "Como…, …", "…, así que…", "Al final…"],
    model: [
      "Los nacatamales son el plato de los domingos en mi familia. Primero se prepara la masa de maíz. Luego se pone la carne con arroz y papas encima, y después todo se envuelve en hojas de plátano. Por último, se cocinan en una olla grande durante cinco horas. El año pasado los hice yo solo por primera vez. Como no tenía hojas suficientes, usé papel de aluminio, así que no quedaron tan bonitos. Al final mi abuela dijo que estaban riquísimos.",
    ],
    checklist: [
      "Usas **se** + verbo en singular y en plural según la cosa.",
      "Ordenas los pasos con _primero, luego, después, por último_.",
      "Usas **como** o **porque** para una causa.",
      "Usas **así que** o **por eso** para una consecuencia y **al final** para el resultado.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer y con pausas después de los conectores.",
    tasks: [
      {
        title: "Así se hace",
        prompt: "Explica a un amigo extranjero cómo se prepara un plato fácil de tu país, paso a paso.",
        prep: ["Primero se…", "Luego se…", "Después se…", "Por último, se sirve con…"],
        seconds: 70,
        model: "Te explico cómo se hacen las arepas. Primero se mezcla la harina de maíz con agua tibia y un poco de sal. Luego se amasa bien y se hacen bolitas. Después se aplastan con las manos y se cocinan en una sartén sin aceite. Por último, se abren y se rellenan con queso o con lo que quieras.",
        selfCheck: ["Uso **se** + verbo en singular y en plural.", "Hago una pausa después de cada conector."],
      },
      {
        title: "Las normas de mi casa",
        prompt: "Un amigo va a quedarse en tu casa una semana. Explícale las normas: qué se puede hacer y qué no.",
        prep: ["En mi casa se…", "No se puede…", "Los zapatos se dejan…", "La basura se saca…"],
        seconds: 55,
        selfCheck: ["Uso **(no) se puede** + infinitivo en singular.", "Uso al menos una norma en plural."],
      },
      {
        title: "Un día complicado",
        prompt: "Cuenta un día en que todo salió al revés: qué pasó primero, por qué y cómo terminó.",
        prep: ["Primero…", "Como…, …", "…, así que…", "Entonces…", "Al final…"],
        seconds: 60,
        selfCheck: ["La causa con **como** va al principio.", "Termino con **al final**."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Explica una receta", task: "Explica en cuatro pasos un plato de tu país y pide a tu profesor que lo repita en el orden correcto.", phrases: ["Primero se…", "Por último, se sirve…"] },
      { move: "Pregunta palabras", task: "Cuando no sepas una palabra, pregúntala con la forma impersonal.", phrases: ["¿Cómo se dice…?", "¿Cómo se escribe…?"] },
      { move: "Justifica un retraso", task: "Si llegas tarde o te falta algo, explica la causa con como o porque.", phrases: ["Como…, …", "…, por eso…"] },
      { move: "Compara normas", task: "Cuenta dos normas de tu trabajo o de tu escuela y pregunta cómo es en el país de tu profesor.", phrases: ["En mi trabajo no se puede…", "¿Y en tu país se…?"] },
    ],
    bring: "Trae una receta corta escrita con se y prepárate para contar qué pasó la última vez que la cocinaste.",
  },
  quiz: {
    items: [
      { type: "gap", q: "En la panadería del barrio ___ ___ rosquillas todos los días. (vender)", answers: [["se"], ["venden"]], why: "_Rosquillas_, plural: **se venden**." },
      { type: "choice", q: "En el cartel de la piscina dice: «No ___ correr».", options: ["se pueden", "se puede", "pueden"], answer: 1, why: "Con infinitivo: **se puede**, singular." },
      { type: "gap", q: "___ no tenía paraguas, me quedé en el café hasta que paró la lluvia.", answers: [["Como"]], why: "Causa al principio: **Como**." },
      { type: "transform", source: "Perdí el último bus, así que tomé un taxi.", instruction: "Escribe la misma idea con **porque**.", answers: ["Tomé un taxi porque perdí el último bus."], why: "Resultado + **porque** + causa." },
      { type: "error", sentence: "En esta biblioteca se prestan libros y se presta películas.", answers: ["En esta biblioteca se prestan libros y se prestan películas."], why: "_Películas_, plural: **se prestan**." },
      { type: "error", sentence: "En el final, la fiesta fue un éxito.", answers: ["Al final, la fiesta fue un éxito."], why: "La expresión es **al final**." },
      { type: "listen", q: "¿Qué conector oyes en la frase sobre el horno?", audio: "El horno no funcionaba, así que pedimos pizza.", options: ["por eso", "así que", "como"], answer: 1 },
      { type: "order", words: ["Por", "último,", "se", "sirve", "el", "plato", "bien", "caliente."] },
      { type: "choice", q: "¿Qué frase da la causa antes del resultado?", options: ["Llegué tarde porque llovía.", "Como llovía, llegué tarde.", "Llegué tarde, es decir, llovía."], answer: 1, why: "**Como** + causa va primero; después, el resultado." },
      { type: "open", prompt: "Escribe tres frases: una instrucción con se en plural, una norma con no se puede y una historia corta con como y al final.", model: "Primero se lavan las verduras. En el autobús no se puede comer. Como hacía calor, fuimos a la playa y al final nos quedamos hasta la noche.", checklist: ["Se + verbo en plural", "No se puede + infinitivo", "Como + causa y al final"] },
    ],
  },
  complete: {
    canNow: [
      "Explicar recetas, carteles y costumbres con **se** + verbo, en singular o plural según la cosa.",
      "Decir qué se puede y qué no se puede hacer en un lugar.",
      "Distinguir una instrucción general (_se corta_) de una orden a una persona (_corta_).",
      "Contar en orden con _primero, luego, entonces, al final, por último_.",
      "Explicar causas con **porque** y **como**, y consecuencias con **por eso** y **así que**.",
      "Aclarar una idea con _es decir_.",
    ],
    review: ["Se lava el arroz / se lavan los frijoles / no se puede fumar.", "Como llovía, no salí = No salí porque llovía.", "Al final (el resultado) / por último (el último paso)."],
  },
  related: [
    { path: "/gramatica/se-impersonal-introductorio-instrucciones", label: "Clase: Se impersonal introductorio: instrucciones" },
    { path: "/gramatica/conectores-de-secuencia-y-explicacion", label: "Clase: Conectores de secuencia y explicación" },
  ],
};
