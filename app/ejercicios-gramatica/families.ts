/**
 * Exercise families that answer «ejercicios de …» searches: one page per rule.
 * Items are "sentence|correct|wrong[|wrong]" with one ___ gap. Neutral Spanish
 * with tú (no voseo, no vosotros) and never a first-person preterite.
 */
export type GapPage = { slug: string; name: string; level: string; rule: string; tip: string; items: string[] };
export type GapFamily = {
  key: string; path: string; label: string; h1: string; title: string; kicker: string; topic: string;
  intro: string; about: string[]; guides: { href: string; label: string }[];
  faq: { question: string; answer: string }[]; pages: GapPage[];
};

export const imperativo: GapFamily = {
  key: "imperativo", path: "/ejercicios-de-imperativo", label: "Ejercicios de imperativo", topic: "el imperativo",
  h1: "Ejercicios del imperativo en español", title: "Ejercicios del imperativo en español, con solución | SpanishCue", kicker: "Gramática · A2–B1",
  intro: "Tú afirmativo y negativo, los ocho irregulares, usted y ustedes, pronombres y reflexivos: cada regla con su ejercicio y corrección al instante.",
  about: ["ejercicios de imperativo", "imperativo en español", "imperativo afirmativo y negativo", "ELE"],
  guides: [
    { href: "/material-ele/imperativo", label: "Material para enseñar el imperativo" },
    { href: "/conjugacion/irregulares/imperativo", label: "Verbos irregulares en imperativo" },
    { href: "/conjugacion", label: "Conjugación de más de 1.200 verbos" },
  ],
  faq: [
    { question: "¿Cómo se forma el imperativo de tú?", answer: "En afirmativo es igual que la forma de él/ella en presente (habla, come, escribe), salvo ocho verbos: ten, haz, di, pon, sal, ven, ve y sé. En negativo se usa el presente de subjuntivo: no hables, no hagas." },
    { question: "¿Y el de usted y ustedes?", answer: "Siempre el presente de subjuntivo, en afirmativo y en negativo: hable, hablen; no hable, no hablen." },
    { question: "¿Dónde van los pronombres?", answer: "Detrás y unidos en afirmativo (dímelo, siéntate) y delante en negativo (no me lo digas, no te sientes)." },
  ],
  pages: [
    { slug: "tu-afirmativo", name: "Tú afirmativo con verbos regulares", level: "A2", rule: "El imperativo afirmativo de tú es igual que la forma de él/ella en presente: habla, come, escribe.", tip: "Los verbos con diptongo o cambio vocálico lo mantienen: piensa, vuelve, pide.", items: [
      "Por favor, ___ más despacio.|habla|hablas|hables", "Oye, ___ la ventana, que hace calor.|abre|abres|abras", "Si tienes hambre, ___ algo.|come|comes|comas", "Antes de entregar el examen, ___ las respuestas.|revisa|revisas|revises", "Para llegar al museo, ___ la segunda calle a la derecha.|toma|tomas|tomes", "Si no entiendes, ___ al profesor.|pregunta|preguntas|preguntes", "Si estás cansado, ___ un poco.|descansa|descansas|descanses", "Cuando llegues, ___ a tu madre.|llama|llamas|llames", "Antes de hablar, ___ bien lo que vas a decir.|piensa|pensa|pienses", "Si no sabes la respuesta, ___ ayuda.|pide|pedes|pidas"] },
    { slug: "tu-irregulares", name: "Tú irregulares (ten, haz, di, pon)", level: "A2", rule: "Ocho verbos tienen un imperativo de tú corto: tener → ten, hacer → haz, decir → di, poner → pon, salir → sal, venir → ven, ir → ve, ser → sé.", tip: "Los compuestos lo mantienen: mantener → mantén, deshacer → deshaz, proponer → propón.", items: [
      "Por favor, ___ la mesa, que vamos a comer.|pon|pone|pongas", "Mañana ___ a mi casa a cenar.|ven|viene|vengas", "Antes de salir, ___ los deberes.|haz|hace|hagas", "Por favor, ___ la verdad.|di|dice|digas", "Si estás aburrido, ___ a dar un paseo.|sal|sale|salgas", "Con los niños, ___ paciencia.|ten|tiene|tengas", "Si necesitas pan, ___ a la panadería.|ve|va|vayas", "Por favor, ___ bueno con tu hermano.|sé|es|seas"] },
    { slug: "tu-negativo", name: "Tú negativo (no hables, no hagas)", level: "A2", rule: "El imperativo negativo de tú usa el presente de subjuntivo: no hables, no comas, no hagas, no digas.", tip: "Nunca se dice «no habla» ni «no haz»: en negativo siempre va la forma del subjuntivo.", items: [
      "No ___ tan alto, que la niña duerme.|hables|habla|hablas", "No ___ eso, es peligroso.|toques|toca|tocas", "No ___ tarde, la película empieza a las ocho.|llegues|llega|llegas", "No ___ nada a nadie, es un secreto.|digas|di|dices", "No ___ ruido, por favor.|hagas|haz|haces", "No ___ sin abrigo, hace mucho frío.|salgas|sal|sales", "No ___ los pies en la mesa.|pongas|pon|pones", "No ___ más café, que luego no duermes.|bebas|bebe|bebes", "No ___ por esa calle, está cortada.|vayas|ve|vas", "No ___ miedo, el perro no muerde.|tengas|ten|tienes"] },
    { slug: "usted-y-ustedes", name: "Usted y ustedes", level: "A2", rule: "Usted y ustedes usan siempre el presente de subjuntivo, en afirmativo y en negativo: hable, hablen; no hable, no hablen.", tip: "Es la forma de las instrucciones formales, los carteles y la atención al público.", items: [
      "Pase, por favor, y ___ asiento.|tome|toma|toman", "Señora, ___ aquí su nombre, por favor.|escriba|escribe|escribas", "Disculpe, ___ un momento, por favor.|espere|espera|esperes", "Si tiene preguntas, ___ al número de atención al cliente.|llame|llama|llamas", "Por favor, no ___ en el museo.|fumen|fuman|fuma", "Chicos, ___ los libros en la página diez.|abran|abren|abre", "Señor, no ___ el coche aquí, está prohibido.|deje|deja|dejas", "Niños, ___ la boca al masticar.|cierren|cierran|cierra", "Mire, ___ esta pastilla cada ocho horas.|tome|toma|tomas", "Señores, ___ por la puerta de la derecha.|salgan|salen|sale"] },
    { slug: "con-pronombres", name: "Imperativo con pronombres", level: "B1", rule: "En afirmativo, los pronombres van detrás y unidos al verbo (dímelo, cómpralo); en negativo, van delante y separados (no me lo digas, no lo compres).", tip: "Al unir pronombres, muchas formas llevan tilde: compra + lo → cómpralo, di + me + lo → dímelo.", items: [
      "Si te gusta el libro, ___.|cómpralo|lo compra|compralo", "No ___ a nadie, es un secreto.|se lo digas|díselo|digas se lo", "¿Dónde pongo tus llaves? Pues ___ en la mesa.|déjalas|déjalos|déjales", "¿Le doy el regalo a Ana? Sí, ___ hoy.|dáselo|dálelo|dáselos", "La sopa está muy caliente: no ___ todavía.|la comas|cómela|la come", "Si ves a Pedro, ___ que me llame.|dile|le di|dícele", "No ___ ahora, la película casi termina.|te vayas|vete|te va", "Las fotos son preciosas: ___, por favor.|enséñamelas|enséñamelos|enseñamelas", "No ___ ese vestido, mejor el azul.|te pongas|ponte|te pone", "Si tienes dudas, ___ por correo.|escríbeme|me escribe|escribeme"] },
    { slug: "reflexivos", name: "Verbos reflexivos en imperativo", level: "B1", rule: "Con los verbos reflexivos, el pronombre se une al final en afirmativo (levántate, siéntese) y va delante en negativo (no te levantes).", tip: "Con nosotros, el verbo pierde la -s final: sentemos + nos → sentémonos.", items: [
      "Son las siete: ___, que llegas tarde.|levántate|levanta|levántese", "Pase, señora, ___, por favor.|siéntese|siéntase|siéntate", "No ___, todo va a salir bien.|te preocupes|preocúpate|te preocupa", "Niños, ___ las manos antes de comer.|lávense|lávanse|lávate", "Hace frío: ___ la chaqueta.|ponte|pónte|pónete", "No ___ tarde, mañana hay examen.|te acuestes|acuéstate|te acuesta", "Señor, ___ aquí un momento, por favor.|quédese|quédase|quedase", "Ya es hora: ___, que nos vamos.|vístete|vistete|vístate", "Chicos, no ___ a la piscina sin mirar.|se tiren|tírense|te tires", "Bueno, ___ y empezamos la reunión.|sentémonos|sentemosnos|sentemos"] },
  ],
};

export const gustar: GapFamily = {
  key: "gustar", path: "/ejercicios-de-gustar", label: "Ejercicios de gustar", topic: "gustar y los verbos como gustar",
  h1: "Ejercicios con el verbo gustar y verbos como gustar", title: "Ejercicios de gustar y verbos como gustar | SpanishCue", kicker: "Gramática · A1–B1",
  intro: "Gusta o gustan, me, te, le, nos, les, y los verbos que funcionan igual: encantar, doler, interesar, faltar, quedar, molestar, importar y parecer.",
  about: ["ejercicios con el verbo gustar", "verbos como gustar", "gusta o gustan", "ELE"],
  guides: [
    { href: "/material-ele/gustar", label: "Material para enseñar gustar" },
    { href: "/conjugacion/gustar", label: "Conjugación del verbo gustar" },
    { href: "/ser-o-estar", label: "¿Ser o estar? Usos y ejercicios" },
  ],
  faq: [
    { question: "¿Se dice «me gusta» o «me gustan»?", answer: "Depende de lo que gusta: «me gusta el café» (singular) y «me gustan los gatos» (plural). Con un infinitivo, siempre singular: «me gusta bailar»." },
    { question: "¿Qué verbos funcionan como gustar?", answer: "Encantar, doler, interesar, faltar, quedar, molestar, importar, parecer (para opinar), apetecer y preocupar, entre otros." },
    { question: "¿Por qué se dice «a Ana le gusta»?", answer: "Porque el pronombre (le) es obligatorio y «a Ana» lo aclara o lo destaca. Decir «a Ana gusta» es incorrecto." },
  ],
  pages: [
    { slug: "gusta-o-gustan", name: "¿Gusta o gustan?", level: "A1", rule: "El verbo concuerda con lo que gusta, no con la persona: «me gusta el café», «me gustan los gatos». Con un infinitivo, siempre singular: «me gusta bailar».", tip: "Con varios infinitivos también va en singular: «me gusta leer y escribir».", items: [
      "Me ___ mucho el chocolate.|gusta|gustan", "A Juan le ___ los coches antiguos.|gustan|gusta", "¿Te ___ bailar?|gusta|gustan", "A mis padres les ___ viajar en tren.|gusta|gustan", "No nos ___ las películas de miedo.|gustan|gusta", "¿Les ___ la comida picante?|gusta|gustan", "Me ___ leer y escuchar música.|gusta|gustan", "A los niños les ___ los dibujos animados.|gustan|gusta", "¿A usted le ___ el fútbol?|gusta|gustan", "A mi hermana no le ___ nada las verduras.|gustan|gusta"] },
    { slug: "me-te-le-nos-les", name: "Me, te, le, nos, les", level: "A1", rule: "El pronombre indica a quién le gusta algo: me, te, le, nos, les. Con «a + nombre» el pronombre se mantiene: «a Ana le gusta».", tip: "Nunca se dice «a Ana gusta» ni «yo gusto el café».", items: [
      "A mí ___ gusta el mar.|me|le|mi", "¿A ti ___ gustan los perros?|te|le|ti", "A mi abuela ___ encanta cocinar.|le|la|les", "A nosotros ___ gusta mucho esta ciudad.|nos|les|nosotros", "A mis amigos ___ gusta el cine.|les|le|los", "A usted ___ interesa este curso, ¿verdad?|le|lo|les", "¿A ustedes ___ gusta la música latina?|les|le|los", "A Pedro y a María ___ gustan los museos.|les|le|los", "A mí no ___ gusta madrugar.|me|mi|yo", "A Laura ___ duele la cabeza.|le|la|les"] },
    { slug: "encantar", name: "Encantar", level: "A1", rule: "Encantar funciona como gustar y significa «gustar mucho»: «me encanta el verano», «me encantan las playas».", tip: "No se dice «me encanta mucho»: es redundante. Se dice «me encanta» o «me gusta mucho».", items: [
      "Me ___ las playas del Caribe.|encantan|encanta", "A mi madre le ___ el teatro.|encanta|encantan", "Nos ___ ir a conciertos.|encanta|encantan", "¿Te ___ los tacos?|encantan|encanta", "A los niños les ___ jugar en la nieve.|encanta|encantan", "A Marta le ___ los libros de misterio.|encantan|encanta", "Les ___ esta canción.|encanta|encantan", "Me ___ cocinar para mis amigos.|encanta|encantan"] },
    { slug: "doler", name: "Doler", level: "A2", rule: "Doler funciona como gustar: concuerda con la parte del cuerpo y lleva me, te, le…: «me duele la cabeza», «me duelen los pies».", tip: "Con las partes del cuerpo se usa el artículo, no el posesivo: «me duele la espalda», no «me duele mi espalda».", items: [
      "Me ___ la cabeza.|duele|duelen", "A Luis le ___ los pies después de correr.|duelen|duele", "¿Te ___ la garganta?|duele|duelen", "Después del gimnasio nos ___ las piernas.|duelen|duele", "A mi abuelo le ___ la espalda.|duele|duelen", "¿Le ___ los oídos, señora?|duelen|duele", "A la niña le ___ los dientes nuevos.|duelen|duele", "Me duele ___ espalda.|la|mi", "A Ana le duelen ___ muelas.|las|sus"] },
    { slug: "interesar", name: "Interesar", level: "A2", rule: "Interesar funciona como gustar: «me interesa la historia», «nos interesan los idiomas».", tip: "«Estar interesado en» también existe, pero «me interesa» es más natural en la conversación.", items: [
      "Me ___ mucho la política.|interesa|interesan", "A mi hijo le ___ los dinosaurios.|interesan|interesa", "¿Te ___ aprender a programar?|interesa|interesan", "No nos ___ las noticias de famosos.|interesan|interesa", "A los alumnos les ___ este tema.|interesa|interesan", "¿Le ___ nuestras ofertas, señor?|interesan|interesa", "A Carmen le ___ el arte moderno.|interesa|interesan", "Les ___ conocer otras culturas.|interesa|interesan"] },
    { slug: "faltar-y-quedar", name: "Faltar y quedar", level: "B1", rule: "Faltar (no tener algo necesario) y quedar (tener todavía algo) funcionan como gustar: «me faltan dos euros», «nos queda una hora».", tip: "«Esa camisa te queda bien» también se construye así.", items: [
      "Me ___ dos euros para el billete.|faltan|falta", "Nos ___ una hora para el examen.|queda|quedan", "A esta sopa le ___ sal.|falta|faltan", "¿Cuántos días te ___ de vacaciones?|quedan|queda", "Hoy a la clase le ___ tres alumnos.|faltan|falta", "Esa camisa te ___ muy bien.|queda|quedan", "Esos pantalones te ___ pequeños.|quedan|queda", "Solo nos ___ leche para el desayuno.|queda|quedan"] },
    { slug: "molestar-e-importar", name: "Molestar e importar", level: "B1", rule: "Molestar e importar funcionan como gustar. Con un infinitivo o con «que» + subjuntivo, van en singular: «me molesta esperar», «¿te importa que abra la ventana?».", tip: "«¿Te importa…?» es una forma cortés de pedir permiso.", items: [
      "Me ___ los ruidos por la noche.|molestan|molesta", "¿Te ___ que abra la ventana?|importa|importan", "A mi padre le ___ esperar.|molesta|molestan", "No nos ___ los detalles, solo el resultado.|importan|importa", "¿Le ___ si me siento aquí?|importa|importan", "A los vecinos les ___ el humo.|molesta|molestan", "A ella no le ___ las críticas.|importan|importa", "¿Les ___ hablar un poco más bajo?|importa|importan"] },
    { slug: "parecer", name: "Parecer para opinar", level: "B1", rule: "Para opinar, parecer funciona como gustar: «me parece interesante», «¿qué te parecen estas fotos?».", tip: "Sin pronombre, parecer significa otra cosa: «parece cansado» (tiene aspecto de estar cansado).", items: [
      "¿Qué te ___ la película?|pareció|parecieron", "Me ___ muy caros estos zapatos.|parecen|parece", "A Juan le ___ buena idea.|parece|parecen", "¿Qué les ___ las nuevas normas?|parecen|parece", "Nos ___ un poco tarde para salir.|parece|parecen", "¿Le ___ bien el martes, señora?|parece|parecen", "A mis padres les ___ simpáticos tus amigos.|parecen|parece", "Me ___ que va a llover.|parece|parecen"] },
  ],
};

export const pronombres: GapFamily = {
  key: "pronombres", path: "/ejercicios-de-pronombres", label: "Ejercicios de pronombres", topic: "los pronombres de objeto directo e indirecto",
  h1: "Ejercicios de pronombres de objeto directo e indirecto", title: "Ejercicios de objeto directo e indirecto (lo, le, se lo) | SpanishCue", kicker: "Gramática · A2–B1",
  intro: "Lo, la, los, las; le, les; se lo cuando van juntos; y dónde se colocan con infinitivo y gerundio. Cada regla con su ejercicio.",
  about: ["ejercicios de objeto directo e indirecto", "pronombres de objeto directo", "pronombres de objeto indirecto", "ELE"],
  guides: [
    { href: "/material-ele/pronombres-de-objeto", label: "Material para enseñar los pronombres de objeto" },
    { href: "/ejercicios-de-imperativo/con-pronombres", label: "Imperativo con pronombres: dímelo, no me lo digas" },
    { href: "/ejercicios-de-gustar/me-te-le-nos-les", label: "Me, te, le, nos, les con gustar" },
  ],
  faq: [
    { question: "¿Cuál es la diferencia entre lo y le?", answer: "Lo, la, los y las sustituyen al objeto directo (lo que se ve, se compra, se tiene); le y les, al indirecto (a quién se da, se dice o se hace algo)." },
    { question: "¿Por qué se dice «se lo» y no «le lo»?", answer: "Cuando le o les van delante de lo, la, los o las, se convierten en se: «le doy el libro» → «se lo doy»." },
    { question: "¿Dónde se pone el pronombre con infinitivo?", answer: "Delante del verbo conjugado o unido al infinitivo: «lo quiero ver» o «quiero verlo». Nunca en medio." },
  ],
  pages: [
    { slug: "lo-la-los-las", name: "Objeto directo (lo, la, los, las)", level: "A2", rule: "Lo, la, los y las sustituyen al objeto directo y concuerdan con él en género y número: «¿Tienes el libro? Sí, lo tengo».", tip: "Van delante del verbo conjugado: «la veo», «no los conozco».", items: [
      "¿Tienes las llaves? Sí, ___ tengo.|las|los|les", "¿Conoces a Marta? No, no ___ conozco.|la|le|lo", "¿Compró Juan el pan? Sí, ___ compró.|lo|la|le", "¿Ves a los niños? Sí, ___ veo en el parque.|los|les|las", "Esta película es buena: ___ recomiendo.|la|lo|le", "¿Dónde están mis gafas? No ___ encuentro.|las|los|les", "¿Lees el periódico? Sí, ___ leo cada mañana.|lo|le|la", "¿Las entradas? Ana ___ tiene.|las|les|la", "Me encanta esta canción: ___ escucho todo el día.|la|le|lo", "¿Y los libros? Ya ___ devolvió tu hermano.|los|les|lo"] },
    { slug: "le-les", name: "Objeto indirecto (le, les)", level: "A2", rule: "Le y les indican a quién se le da, se le dice o se le hace algo: «le escribo a mi madre».", tip: "Es muy frecuente repetir el objeto: «le doy el regalo a Ana»; el pronombre aparece aunque esté «a Ana».", items: [
      "¿Qué ___ regalas a tu hermano?|le|lo|les", "Siempre ___ cuento cuentos a mis hijos.|les|los|le", "Mañana ___ escribo a la profesora.|le|la|les", "¿Ya ___ dijiste la verdad a tus padres?|les|los|le", "El camarero ___ trae la cuenta al cliente.|le|lo|les", "Hoy ___ pregunto a Luis por el examen.|le|lo|les", "El médico ___ recetó unas pastillas a la abuela.|le|la|les", "Los alumnos ___ hacen preguntas al profesor.|le|lo|les", "¿Qué ___ pasa a los niños? Están muy callados.|les|los|le", "Siempre ___ mando flores a mi madre en su cumpleaños.|le|la|les"] },
    { slug: "se-lo", name: "Se lo y se la (dos pronombres juntos)", level: "B1", rule: "Cuando le o les van delante de lo, la, los o las, se convierten en se: «le doy el libro» → «se lo doy».", tip: "Nunca se dice «le lo» ni «les los»: siempre «se lo», «se los».", items: [
      "¿Le dio Juan el regalo a Ana? Sí, ya ___ dio.|se lo|le lo|lo le", "¿Les explicas el ejercicio a los alumnos? Sí, ahora ___ explico.|se lo|les lo|lo se", "¿Me prestas el coche? Lo siento, hoy ___ presto a mi hermano.|se lo|le lo|lo le", "¿Las flores para la abuela? Pedro ___ compra.|se las|le las|las le", "¿Le devolvió Ana los libros a Marta? Sí, ___ devolvió ayer.|se los|le los|les los", "Si tu hermano quiere la bici, ___ dejo mañana.|se la|le la|la le", "¿Les mandas las fotos a tus padres? Sí, esta noche ___ mando.|se las|les las|las les", "Si el cliente pide la cuenta, ___ llevas tú.|se la|le la|la le"] },
    { slug: "posicion", name: "Posición del pronombre con infinitivo", level: "B1", rule: "Con infinitivo o gerundio, el pronombre va delante del verbo conjugado o unido al final: «lo quiero ver» o «quiero verlo», «la estoy leyendo» o «estoy leyéndola».", tip: "Nunca va en medio: «quiero lo ver» es incorrecto.", items: [
      "La película es buena: quiero ___.|verla|la ver|ver la", "¿El libro? Estoy ___ ahora.|leyéndolo|leyendolo|lo leyendo", "Es un secreto: no puedo ___.|contártelo|te lo contar|contar te lo", "Las cartas están aquí; tengo que ___ hoy.|enviarlas|las enviar|enviar las", "¿La comida? Ya ___ estamos preparando.|la|le|lo", "Ese ejercicio es difícil; ¿puedes ___?|explicármelo|me lo explicar|explicar me lo", "¿Los deberes? Voy a ___ después de cenar.|hacerlos|los hacer|hacer los", "Mis abuelos viven lejos, pero ___ voy a visitar en verano.|los|les|las"] },
  ],
};

export const gapFamilies = [imperativo, gustar, pronombres];
