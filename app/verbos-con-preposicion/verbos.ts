/**
 * Verbos con preposición (régimen preposicional): one page per verb + preposition.
 * Each sentence has one gap («___») for the preposition. No gap is followed by
 * «el», so «a/de + el» never has to contract to «al/del».
 * `wrong` is the preposition learners use by mistake (often an English calque).
 */
export const PREPOSICIONES = ["a", "de", "en", "con", "por"] as const;
export type Prep = (typeof PREPOSICIONES)[number];
export type VerboPrep = { v: string; p: Prep; wrong?: Prep; level: string; meaning: string; note: string; ex: string[] };

export const verbosPrep: VerboPrep[] = [
  // ── a ──
  { v: "empezar", p: "a", level: "A1", meaning: "comenzar una acción", note: "Empezar a va seguido de infinitivo. Funciona igual comenzar a y ponerse a.", ex: [
    "Empieza ___ llover.", "Los niños empiezan ___ leer a los seis años.", "¿Cuándo empiezas ___ trabajar?", "Mañana empezamos ___ estudiar para el examen.", "La película empezó ___ las nueve."] },
  { v: "aprender", p: "a", level: "A1", meaning: "adquirir una habilidad", note: "Aprender a + infinitivo: «aprender a nadar». Con un sustantivo no lleva preposición: «aprender inglés».", ex: [
    "Quiero aprender ___ tocar la guitarra.", "Ana aprendió ___ conducir a los dieciocho años.", "Los alumnos aprenden ___ escribir correos formales.", "¿Dónde aprendiste ___ cocinar así?", "Nunca es tarde para aprender ___ nadar."] },
  { v: "enseñar", p: "a", level: "A2", meaning: "mostrar a alguien cómo se hace algo", note: "Enseñar a alguien a hacer algo: la preposición a aparece dos veces, una para la persona y otra para el infinitivo.", ex: [
    "Mi abuela me enseñó ___ hacer pan.", "¿Me enseñas ___ usar esta aplicación?", "El profesor enseña ___ pronunciar la erre.", "Le enseñaron ___ montar en bicicleta.", "Esta clase te enseña ___ presentarte en español."] },
  { v: "ayudar", p: "a", level: "A2", meaning: "colaborar con alguien en una tarea", note: "Ayudar a + infinitivo: «me ayuda a estudiar». Con un sustantivo se dice «ayudar con los deberes».", ex: [
    "¿Me ayudas ___ mover la mesa?", "Su hermano le ayuda ___ hacer los deberes.", "La música ayuda ___ concentrarse.", "Los vecinos ayudaron ___ apagar el fuego.", "Este libro te ayuda ___ entender la gramática."] },
  { v: "invitar", p: "a", level: "A2", meaning: "ofrecer a alguien participar en algo", note: "Se invita a alguien a algo o a hacer algo: «te invito a cenar», «nos invitaron a la boda».", ex: [
    "Te invito ___ cenar esta noche.", "Nos invitaron ___ la boda de Laura.", "Marta invita ___ sus amigos a su casa.", "Me han invitado ___ dar una charla.", "¿Por qué no lo invitas ___ la fiesta?"] },
  { v: "volver", p: "a", level: "A2", meaning: "hacer algo otra vez", note: "Volver a + infinitivo significa «otra vez»: «vuelve a llamar» = «llama otra vez».", ex: [
    "Vuelve ___ llamar más tarde.", "No quiero volver ___ cometer ese error.", "El tren volvió ___ retrasarse.", "¿Puedes volver ___ explicarlo?", "Después de diez años, volvieron ___ verse."] },
  { v: "llegar", p: "a", wrong: "en", level: "A1", meaning: "alcanzar un lugar", note: "Se llega a un lugar, nunca «en» un lugar: «llegamos a Madrid», «llegó a casa».", ex: [
    "Llegamos ___ Madrid a las diez.", "¿A qué hora llegas ___ casa?", "El avión llega ___ Bogotá por la mañana.", "Cuando llegues ___ la estación, llámame.", "Los turistas llegaron ___ la playa muy temprano."] },
  { v: "asistir", p: "a", level: "B1", meaning: "estar presente en un acto", note: "Asistir a una clase o una reunión. Ojo: «atender» no significa asistir; es prestar atención o servir a alguien.", ex: [
    "Muchos alumnos asisten ___ la clase de los lunes.", "No pudo asistir ___ la reunión.", "¿Vas a asistir ___ la conferencia?", "Más de mil personas asistieron ___ la inauguración.", "Es obligatorio asistir ___ todas las prácticas."] },
  { v: "parecerse", p: "a", level: "B1", meaning: "tener rasgos parecidos a otra persona o cosa", note: "Parecerse a alguien: «se parece a su madre». Sin se, parecer no lleva a: «parece cansado».", ex: [
    "Lucía se parece mucho ___ su padre.", "Este café se parece ___ uno que venden en Colombia.", "¿A quién te pareces más?, ¿___ tu madre o a tu padre?", "Los dos hermanos no se parecen ___ nadie de la familia.", "Su estilo se parece ___ un pintor famoso."] },
  { v: "atreverse", p: "a", level: "B1", meaning: "tener el valor de hacer algo", note: "Atreverse a + infinitivo: «no se atreve a hablar». Es pronominal: me atrevo, te atreves…", ex: [
    "No se atreve ___ decirle la verdad.", "¿Te atreves ___ saltar desde ahí?", "Nadie se atrevió ___ preguntar.", "Por fin se atreven ___ hablar en público.", "Hay que atreverse ___ cometer errores para aprender."] },
  { v: "negarse", p: "a", level: "B1", meaning: "decir que no se va a hacer algo", note: "Negarse a + infinitivo: «se niega a pagar». Sin se, negar es transitivo: «niega los hechos».", ex: [
    "El cliente se niega ___ pagar la cuenta.", "Se negaron ___ firmar el contrato.", "¿Por qué te niegas ___ venir?", "El niño se niega ___ comer verduras.", "La empresa se negó ___ dar explicaciones."] },
  { v: "renunciar", p: "a", level: "B2", meaning: "dejar algo voluntariamente", note: "Se renuncia a algo: «renunció a su puesto». En el sentido de «dejar el trabajo», también se dice «renunciar» sin complemento.", ex: [
    "Renunció ___ su puesto después de veinte años.", "No pienso renunciar ___ mis vacaciones.", "Tuvieron que renunciar ___ la herencia.", "Renunciar ___ un sueño nunca es fácil.", "El candidato renunció ___ la presidencia del partido."] },
  { v: "pertenecer", p: "a", level: "B1", meaning: "ser parte o propiedad de alguien o algo", note: "Pertenecer a: «este libro pertenece a la biblioteca».", ex: [
    "Este libro pertenece ___ la biblioteca.", "Las islas pertenecen ___ España.", "Esta empresa pertenece ___ un grupo internacional.", "La casa perteneció ___ sus abuelos.", "Esos datos pertenecen ___ cada usuario."] },
  { v: "jugar", p: "a", level: "A1", meaning: "practicar un juego o un deporte", note: "En la mayor parte del mundo hispano se dice jugar a + artículo: «jugar al fútbol», «jugar a las cartas». En partes de América también se oye «jugar fútbol».", ex: [
    "Los niños juegan ___ las cartas.", "¿Juegas ___ los videojuegos los fines de semana?", "Les gusta jugar ___ las escondidas.", "Juegan ___ la pelota en el parque.", "Mi abuelo juega ___ las damas con sus amigos."] },

  // ── de ──
  { v: "depender", p: "de", wrong: "en", level: "A2", meaning: "estar condicionado por algo o alguien", note: "Se dice «depende de», nunca «depende en» (calco del inglés «depend on»).", ex: [
    "Depende ___ ti.", "El precio depende ___ la temporada.", "Todo depende ___ cómo lo digas.", "Muchas familias dependen ___ la pesca.", "Que salgamos o no depende ___ lo que diga el médico."] },
  { v: "acordarse", p: "de", level: "A2", meaning: "tener algo en la memoria", note: "Acordarse de algo. En cambio, recordar no lleva preposición: «recuerdo su nombre», «me acuerdo de su nombre».", ex: [
    "¿Te acuerdas ___ mí?", "No se acuerda ___ dónde dejó las llaves.", "Acuérdate ___ comprar pan.", "Siempre nos acordamos ___ ese viaje.", "Ellos no se acuerdan ___ nada."] },
  { v: "olvidarse", p: "de", level: "A2", meaning: "no recordar algo", note: "Olvidarse de algo; sin se, olvidar no lleva preposición: «olvidé las llaves» o «me olvidé de las llaves».", ex: [
    "No te olvides ___ llamar a tu madre.", "Se olvidó ___ su cumpleaños.", "Siempre se olvidan ___ cerrar la puerta.", "¿Te olvidaste ___ la reunión?", "Es fácil olvidarse ___ beber agua."] },
  { v: "enamorarse", p: "de", wrong: "con", level: "B1", meaning: "empezar a sentir amor por alguien", note: "Uno se enamora de alguien, no «con» alguien.", ex: [
    "Se enamoró ___ su compañera de clase.", "Es fácil enamorarse ___ esta ciudad.", "¿Te enamoraste ___ él a primera vista?", "Se enamoraron ___ la casa en cuanto la vieron.", "Nunca se había enamorado ___ nadie así."] },
  { v: "tratar", p: "de", level: "B1", meaning: "intentar algo o tener algo como tema", note: "Tratar de + infinitivo = intentar: «trata de dormir». Tratarse de = ser sobre algo: «el libro trata de una familia».", ex: [
    "Trata ___ dormir un poco.", "El libro trata ___ una familia de inmigrantes.", "Trataron ___ llegar a tiempo, pero no pudieron.", "¿De qué trata la película?, ¿___ la guerra?", "Siempre trata ___ ayudar a los demás."] },
  { v: "dejar", p: "de", level: "A2", meaning: "interrumpir o abandonar una acción", note: "Dejar de + infinitivo: «dejó de fumar». No dejar de = no olvidar: «no dejes de visitar el museo».", ex: [
    "Mi padre dejó ___ fumar hace años.", "¡Deja ___ gritar!", "No dejes ___ visitar el museo.", "Ha dejado ___ llover.", "Dejaron ___ verse después de la universidad."] },
  { v: "quejarse", p: "de", level: "B1", meaning: "expresar disgusto por algo", note: "Quejarse de algo o de alguien: «se queja del ruido» (de + el = del).", ex: [
    "Siempre se queja ___ todo.", "Los vecinos se quejan ___ la música alta.", "¿De qué te quejas?, ¿___ tu jefe?", "Los clientes se quejaron ___ la comida.", "No te quejes ___ los precios si no comparas."] },
  { v: "darse cuenta", p: "de", level: "B1", meaning: "notar o comprender algo", note: "Darse cuenta de algo y darse cuenta de que…: no se omite el de (es un error decir «me di cuenta que»).", ex: [
    "No se dio cuenta ___ la hora.", "¿Te das cuenta ___ lo que dices?", "Se dieron cuenta ___ que el tren no venía.", "Por fin se da cuenta ___ su error.", "Nadie se dio cuenta ___ nada."] },
  { v: "despedirse", p: "de", level: "A2", meaning: "decir adiós a alguien", note: "Despedirse de alguien: «se despidió de sus amigos».", ex: [
    "Se despidió ___ sus amigos en el aeropuerto.", "Despídete ___ la abuela antes de irte.", "Se despidieron ___ los profesores el último día.", "Se fue sin despedirse ___ nadie.", "¿Ya te despediste ___ todos?"] },
  { v: "reírse", p: "de", level: "B1", meaning: "burlarse de alguien o encontrar algo gracioso", note: "Reírse de alguien o de algo. También burlarse de.", ex: [
    "No te rías ___ mí.", "Se ríen ___ sus propios errores.", "Todos se rieron ___ la broma.", "Es bueno saber reírse ___ uno mismo.", "Los niños se reían ___ los payasos."] },
  { v: "arrepentirse", p: "de", level: "B2", meaning: "lamentar haber hecho algo", note: "Arrepentirse de algo o de haber hecho algo: «se arrepiente de no haber estudiado».", ex: [
    "Se arrepiente ___ no haber estudiado más.", "No me arrepiento ___ nada.", "¿Te arrepientes ___ esa decisión?", "Se arrepintieron ___ haber vendido la casa.", "Nunca es tarde para arrepentirse ___ un error."] },
  { v: "encargarse", p: "de", level: "B1", meaning: "hacerse responsable de algo", note: "Encargarse de algo: «yo me encargo de las bebidas».", ex: [
    "Yo me encargo ___ las bebidas.", "¿Quién se encarga ___ los niños hoy?", "Ella se encarga ___ la contabilidad.", "Se encargaron ___ organizar la fiesta.", "No te preocupes, nos encargamos ___ todo."] },
  { v: "alegrarse", p: "de", level: "B1", meaning: "sentir alegría por algo", note: "Alegrarse de algo y alegrarse de que + subjuntivo: «me alegro de que estés bien».", ex: [
    "Me alegro ___ verte.", "Se alegra ___ que estés bien.", "Nos alegramos mucho ___ la noticia.", "¿No te alegras ___ haber venido?", "Se alegraron ___ su éxito."] },

  // ── en ──
  { v: "pensar", p: "en", wrong: "de", level: "A2", meaning: "tener a alguien o algo en la mente", note: "Pensar en alguien o en algo: «pienso en ti». «Pensar de» solo se usa para pedir una opinión: «¿qué piensas de esto?».", ex: [
    "Siempre pienso ___ ti.", "¿En qué piensas?, ¿___ las vacaciones?", "Hay que pensar ___ las consecuencias.", "Piensa ___ lo que te dije.", "Ellos nunca piensan ___ los demás."] },
  { v: "consistir", p: "en", wrong: "de", level: "B1", meaning: "estar formado por algo; tener como base", note: "Se dice «consiste en», no «consiste de» (calco de «consist of»).", ex: [
    "El examen consiste ___ dos partes.", "¿En qué consiste el trabajo?, ¿___ atender a clientes?", "La dieta consiste ___ comer más verdura.", "El juego consiste ___ adivinar palabras.", "Su plan consistía ___ salir antes del amanecer."] },
  { v: "confiar", p: "en", level: "B1", meaning: "tener fe o seguridad en alguien", note: "Confiar en alguien o en algo: «confío en ti».", ex: [
    "Confío ___ ti.", "No confían ___ los bancos.", "Puedes confiar ___ ella.", "Hay que confiar ___ uno mismo.", "Confiamos ___ que todo saldrá bien."] },
  { v: "insistir", p: "en", level: "B1", meaning: "repetir una petición o una idea con firmeza", note: "Insistir en algo o en hacer algo: «insiste en pagar».", ex: [
    "Insiste ___ pagar la cena.", "El médico insistió ___ que descansara.", "¿Por qué insistes ___ ese tema?", "Insistieron ___ acompañarnos al aeropuerto.", "La profesora insiste ___ la pronunciación."] },
  { v: "fijarse", p: "en", level: "B1", meaning: "prestar atención a algo", note: "Fijarse en algo: «fíjate en el acento».", ex: [
    "Fíjate ___ la tilde de esta palabra.", "¿Te fijaste ___ su sombrero?", "Nadie se fija ___ esos detalles.", "Se fijó ___ ella en cuanto entró.", "Fíjense ___ los ejemplos antes de empezar."] },
  { v: "tardar", p: "en", level: "A2", meaning: "necesitar un tiempo para hacer algo", note: "Tardar + tiempo + en + infinitivo: «tarda una hora en llegar».", ex: [
    "Tarda una hora ___ llegar al trabajo.", "¿Cuánto tardas ___ prepararte?", "No tardes ___ volver.", "El paquete tardó tres días ___ llegar.", "Tardaron mucho ___ responder."] },
  { v: "quedar", p: "en", level: "B1", meaning: "ponerse de acuerdo en algo", note: "Quedar en algo o en hacer algo = acordar: «quedamos en vernos a las ocho».", ex: [
    "Quedaron ___ verse a las ocho.", "¿En qué quedaron?, ¿___ salir el sábado?", "Quedaron ___ llamarse al día siguiente.", "Habíamos quedado ___ que tú traías el postre.", "Siempre quedan ___ algo y luego no lo hacen."] },
  { v: "convertirse", p: "en", level: "B1", meaning: "pasar a ser otra cosa", note: "Convertirse en algo: «se convirtió en médico». También transformarse en.", ex: [
    "La oruga se convierte ___ mariposa.", "El pueblo se convirtió ___ una ciudad.", "Se convirtió ___ la mejor jugadora del equipo.", "Su sueño se convirtió ___ realidad.", "El agua se convierte ___ hielo a cero grados."] },
  { v: "basarse", p: "en", level: "B2", meaning: "tener algo como fundamento", note: "Basarse en algo: «la película se basa en hechos reales».", ex: [
    "La película se basa ___ hechos reales.", "¿En qué te basas para decir eso?, ¿___ los datos?", "El método se basa ___ la conversación.", "Su teoría se basa ___ años de estudio.", "Las notas se basan ___ los trabajos de clase."] },

  // ── con ──
  { v: "soñar", p: "con", wrong: "en", level: "A2", meaning: "ver algo en sueños; desear mucho algo", note: "Se sueña con algo o con alguien, no «en» (calco del inglés) ni «de».", ex: [
    "Anoche soñó ___ su abuela.", "Sueña ___ vivir junto al mar.", "¿Con qué soñaste?, ¿___ las vacaciones?", "Muchos niños sueñan ___ ser futbolistas.", "Llevan años soñando ___ ese viaje."] },
  { v: "casarse", p: "con", wrong: "a", level: "A2", meaning: "contraer matrimonio con alguien", note: "Uno se casa con alguien: «se casó con su novia de la universidad».", ex: [
    "Se casó ___ su novio de la universidad.", "¿Con quién se casa tu hermana?, ¿___ Pablo?", "Quiere casarse ___ alguien que la haga reír.", "Se casó ___ la mujer de su vida.", "Nunca pensó que se casaría ___ un actor."] },
  { v: "contar", p: "con", level: "B1", meaning: "confiar en la ayuda de alguien; disponer de algo", note: "Contar con alguien = poder confiar en esa persona: «cuenta conmigo».", ex: [
    "Puedes contar ___ nosotros.", "El hotel cuenta ___ piscina y gimnasio.", "No contaban ___ la lluvia.", "Siempre cuenta ___ la ayuda de su familia.", "La escuela cuenta ___ cien profesores."] },
  { v: "salir", p: "con", level: "A2", meaning: "tener una relación sentimental con alguien; ir a algún sitio con alguien", note: "Salir con alguien puede ser «tener una relación» o simplemente «quedar»: el contexto lo aclara.", ex: [
    "Sale ___ un chico de su clase.", "Esta noche salgo ___ mis amigas.", "¿Desde cuándo sales ___ ella?", "Salieron ___ sus primos al cine.", "No le gusta salir ___ gente que no conoce."] },
  { v: "encontrarse", p: "con", level: "B1", meaning: "ver a alguien sin haberlo planeado o quedar con alguien", note: "Encontrarse con alguien: «se encontró con Ana en el mercado».", ex: [
    "Se encontró ___ Ana en el mercado.", "¿Con quién te encontraste?, ¿___ tu jefe?", "Nos encontramos ___ unos amigos en la playa.", "Al abrir la puerta se encontraron ___ una sorpresa.", "Quedó en encontrarse ___ ellos a las seis."] },
  { v: "conformarse", p: "con", level: "B2", meaning: "aceptar algo aunque no sea lo ideal", note: "Conformarse con algo: «se conforma con poco».", ex: [
    "Se conforma ___ poco.", "No te conformes ___ un aprobado.", "Tuvieron que conformarse ___ un segundo puesto.", "Me conformo ___ que llegues a tiempo.", "Es ambicioso: nunca se conforma ___ lo que tiene."] },

  // ── por ──
  { v: "preocuparse", p: "por", level: "B1", meaning: "sentir inquietud por algo o alguien", note: "Preocuparse por algo o por alguien: «se preocupa por todo». También se oye «preocuparse de».", ex: [
    "No te preocupes ___ mí.", "Se preocupa ___ su salud.", "Los padres se preocupan ___ los hijos.", "¿Por qué te preocupas tanto ___ las notas?", "Se preocuparon ___ la tormenta."] },
  { v: "interesarse", p: "por", level: "B1", meaning: "mostrar interés por algo", note: "Interesarse por algo o por alguien: «se interesa por la historia». Pero: «estar interesado en».", ex: [
    "Se interesa mucho ___ la historia.", "Su médico se interesa ___ cada detalle.", "Desde pequeño se interesó ___ la música.", "Los clientes se interesan ___ los precios.", "Nadie se interesó ___ su propuesta."] },
  { v: "preguntar", p: "por", level: "A2", meaning: "pedir noticias de alguien o buscar a alguien", note: "Preguntar por alguien = querer saber de esa persona o buscarla: «preguntó por ti».", ex: [
    "Ayer alguien preguntó ___ ti.", "Pregunta ___ la directora cuando llegues.", "Siempre pregunta ___ tu familia.", "¿Por quién preguntaron?, ¿___ la profesora?", "Un señor ha venido a preguntar ___ la casa que se alquila."] },
  { v: "optar", p: "por", level: "B2", meaning: "elegir una opción entre varias", note: "Optar por algo: «optó por la opción más barata».", ex: [
    "Optó ___ la opción más barata.", "Muchas familias optan ___ la escuela pública.", "¿Por qué optaste ___ estudiar medicina?", "Al final optaron ___ quedarse en casa.", "La empresa optó ___ un nuevo diseño."] },
  { v: "luchar", p: "por", level: "B1", meaning: "esforzarse para conseguir algo", note: "Luchar por algo = para conseguirlo: «lucha por sus derechos». Luchar contra = para eliminarlo.", ex: [
    "Lucha ___ sus derechos.", "Hay que luchar ___ lo que uno quiere.", "Lucharon ___ la igualdad durante décadas.", "Seguimos luchando ___ un mundo mejor.", "Nunca dejó de luchar ___ su familia."] },
  { v: "disculparse", p: "por", level: "B1", meaning: "pedir perdón por algo", note: "Disculparse por algo: «se disculpó por el retraso». Pedir perdón por también lleva por.", ex: [
    "Se disculpó ___ la tardanza.", "Discúlpate ___ lo que dijiste.", "La empresa se disculpa ___ las molestias.", "Nos disculpamos ___ no haber avisado.", "¿Te disculpaste ___ lo que pasó?"] },
];

export const verboPrepSlug = (e: VerboPrep) => `${e.v.normalize("NFD").replace(/[́]/g, "").normalize("NFC").replace(/ /g, "-")}-${e.p}`;
