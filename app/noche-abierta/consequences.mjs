// Authored branches for each formerly open story. Museum branches are imagined
// endings, never presented as historical facts. Stable ids keep choices on revisit.
const stories = {
  'cafe-alla': ['Nico está en la terraza. ¿Qué haces ahora?', 'Pides la dirección y vas.', 'Nico manda la dirección. Llegas a la terraza y encuentras al grupo.', 'Esperas en el café y le avisas.', 'Nico vuelve al café. Se encuentran, pero llegan tarde a la fiesta.', '¿Qué es más importante: llegar rápido o tener un plan claro?'],
  'cafe-equivocado': ['Vale espera tu respuesta. ¿Cómo cuidas la sorpresa?', 'Le dices que hay un plan, sin detalles.', 'Vale sabe que se acuerdan de su cumpleaños. Lu puede preparar la sorpresa.', 'Le muestras el mensaje de Lu.', 'Vale descubre el regalo antes de la fiesta. Lu se enoja contigo.', '¿Está bien guardar una sorpresa cuando alguien está triste?'],
  'cafe-grupo': ['Vale quiere su fiesta en la terraza. ¿Qué propones?', 'Van a la terraza y después cada uno decide.', 'Vale festeja con todos. Sergio vuelve temprano y Nico sigue la noche.', 'Cambian al bar de música.', 'Lu consigue su plan, pero Martín pierde la entrada y Vale se siente ignorada.', '¿Quién debe decidir el plan en un cumpleaños?'],
  'depto-un-minuto': ['Leo necesita dormir para su examen. ¿Qué organizas?', 'La previa termina temprano.', 'Leo puede estudiar. Los invitados van a la terraza antes de lo previsto.', 'La previa sigue en el departamento.', 'Leo no puede descansar. Les pide que salgan y Vale tiene que cambiar el plan.', '¿Cómo cuidas a las personas con las que compartes una casa?'],
  'depto-timbre': ['Tomi y Sergio ya están subiendo. ¿Qué haces en la puerta?', 'Esperas a Vale para confirmar la invitación.', 'Tomi espera con Sergio. Vale confirma que pueden entrar y agradece la torta.', 'Los dejas entrar sin consultar.', 'Tomi entra con la torta. Vale se sorprende: no sabía que él venía.', '¿Quién puede invitar a alguien a una casa ajena?'],
  pablo: ['Pablo todavía espera. ¿Qué le aconsejas?', 'Se va y manda un mensaje.', 'El amigo llega después. Lee el mensaje y llama a Pablo para pedir disculpas.', 'Espera diez minutos más.', 'El amigo llega en esos diez minutos. Pablo pierde parte de la noche, pero pueden hablar.', '¿Cuánto tiempo de tu noche quieres dar a alguien que llega tarde?'],
  ines: ['Inés quiere conocer gente. ¿Qué le propones?', 'Ir juntos al recital de la plaza.', 'Inés conoce a dos vecinos en el recital. Al día siguiente tiene un nuevo plan.', 'Buscar un grupo del barrio por internet.', 'Inés encuentra una caminata para el domingo. Esta noche todavía sale sola.', '¿Qué te ayuda a sentirte parte de un lugar nuevo?'],
  pareja: ['Ana quiere bailar y Diego está cansado. ¿Qué propones?', 'Comen juntos y después deciden.', 'Diego descansa durante la comida. Ana acepta ir a bailar un rato después.', 'Cada uno hace su plan.', 'Ana va a bailar y Diego vuelve a casa. Disfrutan sus planes, pero no pasan la noche juntos.', '¿Tener planes distintos es un problema para una pareja?'],
  ramiro: ['Ramiro tiene poca batería y vive lejos. ¿Qué le aconsejas?', 'Reserva un taxi y comparte el viaje.', 'Ramiro llega a casa. Gasta más de lo previsto, pero su familia sabe dónde está.', 'Llama a un amigo que vive cerca.', 'El amigo le ofrece un sillón. Ramiro ahorra el taxi, pero vuelve a casa mañana.', '¿Cómo decides entre ahorrar dinero y volver tranquilo?'],
  marta: ['Marta quiere festejar su jubilación. ¿Qué le propones?', 'Invitar a una amiga a la fiesta.', 'La amiga viene. Marta celebra acompañada, aunque deben esperar antes de salir.', 'Ir sola al bar de música.', 'Marta escucha música y conoce gente nueva. Sus compañeros se pierden el festejo.', '¿Qué quieres cambiar en tu vida cuando tienes más tiempo libre?'],
  kenji: ['Kenji quiere conocer el barrio. ¿Adónde lo mandas?', 'Al café de los vecinos.', 'Kenji charla con los vecinos. El menú no tiene traducción y necesita pedir ayuda.', 'Al restaurante con menú traducido.', 'Kenji pide sin dificultad. Come bien, pero conoce a pocos vecinos.', '¿Qué buscas en un viaje: comodidad o contacto con la gente?'],
  sofia: ['Sofía te invita al bar de jazz. ¿Qué decides?', 'Vas y avisas a tus amigos.', 'Tus amigos saben dónde estás. Disfrutas el jazz, pero llegas tarde a la terraza.', 'No vas y propones otro día.', 'Sofía acepta verse mañana. Llegas a la fiesta de Vale a tiempo.', '¿Cómo cuidas tus planes cuando aparece una invitación nueva?'],
  fuerte: ['El hombre sigue con su llamada. ¿Cómo resuelves el ruido?', 'Le pides que termine la llamada afuera.', 'Sale a terminar la llamada. Tu amiga puede escucharte, pero él vuelve molesto.', 'Se cambian a una mesa más lejos.', 'Pueden hablar mejor. Dejan la barra y tienen que esperar para pedir otra bebida.', '¿Cuándo prefieres hablar de un problema y cuándo cambiar de lugar?'],
  quedarse: ['Leo tiene un examen a las ocho. ¿Qué haces?', 'Lo acompañas al taxi ahora.', 'Leo llega a casa y duerme. El grupo sigue la fiesta sin él.', 'Le propones quedarse una ronda más.', 'Leo acepta y se va una hora después. Mañana tendrá menos tiempo para descansar.', '¿Cómo respetas un límite cuando quieres que alguien se quede?'],
  billetera: ['Martín no tiene la billetera. ¿Cómo pagan esta vez?', 'Pagas y acuerdan cuándo te devuelve.', 'Martín acepta devolverte el dinero mañana. Hoy tú gastas más de lo previsto.', 'Le pides que pague con el celular.', 'Martín puede transferir al bar. Tardan unos minutos, pero nadie tiene que prestarle.', '¿Cómo hablas de dinero sin dañar una amistad?'],
  fila: ['Las chicas dicen que les guardaron lugar. ¿Qué propones?', 'Le preguntan al empleado quién sigue.', 'El empleado respeta el orden. Pides primero, pero las chicas se molestan.', 'Las dejas pasar esta vez.', 'Las chicas piden antes. Evitas la discusión, pero esperas otros diez minutos.', '¿Ser amable significa aceptar todo lo que te piden?'],
  caro: ['Vale invita la primera bebida. ¿Qué decides?', 'Vas, pero explicas tu límite de gasto.', 'Vale entiende. Compartes una bebida con el grupo y después vuelves a casa.', 'Propones un lugar más barato.', 'Parte del grupo va contigo. Vale se queda en el bar caro con otros amigos.', '¿Cómo festejas con alguien sin gastar más de lo que puedes?'],
  cancelo: ['Nico canceló otra vez. ¿Qué le respondes?', 'Le cuentas que te molesta y propones hablar mañana.', 'Nico reconoce el problema. Esta noche sigues sin él, pero acuerdan conversar.', 'Le dices que está todo bien.', 'Nico no sabe que estás molesto. No cambian nada para el próximo plan.', '¿Qué puede pasar cuando ocultas algo que te molesta?'],
  invitacion: ['Sergio viene de traje. ¿Cómo lo recibes?', 'Le explicas el error y lo invitas a quedarse.', 'Sergio se relaja y entrega el regalo. Se queda aunque todos visten distinto.', 'Haces una broma sobre su ropa.', 'Algunos se ríen. Sergio sonríe, pero se siente incómodo y se va temprano.', '¿Cómo sabes si una broma también le gusta a la otra persona?'],
  'auto-aeropuerto': ['Carla necesita llegar al aeropuerto. ¿Qué plan eliges?', 'Pide un taxi y deja el auto para el taller.', 'Carla guarda batería para el taxi. Llega al aeropuerto, pero debe pagar el viaje y el taller.', 'Va al taller antes de que cierre.', 'El mecánico recibe el auto. Carla tarda en salir y necesita un taxi urgente al aeropuerto.', '¿Qué es lo primero que cuidas cuando el tiempo es poco?'],
  'auto-gasolina': ['Julio tiene un bidón y le duele la espalda. ¿Cómo siguen?', 'Buscas gasolina y Julio avisa a Vale.', 'Vuelves antes del cierre. Julio puede conducir y Vale sabe que van a llegar tarde.', 'Dejan el auto y van en taxi.', 'Llegan antes a la fiesta. Julio debe volver por el auto mañana.', '¿Cuándo conviene cambiar de plan en vez de resolver todo ahora?'],
  foto: ['Imagina el final: alguien quiere buscar a las personas de la foto. ¿Qué hace?', 'Pregunta en la estación.', 'En tu relato, un empleado recuerda la valija. La búsqueda empieza con una pista nueva.', 'Guarda la foto y no busca a nadie.', 'En tu relato, la foto queda en una caja. Nadie puede explicar quién tapa su cara.', '¿Qué perdemos cuando nadie cuenta una historia familiar?'],
  telefono: ['Imagina qué hace la mujer después de la llamada. ¿Qué final eliges?', 'Busca a la persona que llamó.', 'En tu relato, vuelve a hablar con esa persona. Descubre por qué nadie atendió esa noche.', 'Decide no volver a llamar.', 'En tu relato, sigue con su vida. La frase de la llamada queda sin explicación.', '¿Una conversación puede cambiar lo que decides hacer?'],
  boleto: ['Imagina que el pasajero todavía quiere viajar. ¿Qué hace?', 'Busca otro transporte.', 'En tu relato, llega a Mendoza al día siguiente. Gasta más, pero consigue hacer el viaje.', 'Vuelve a su casa.', 'En tu relato, no llega a Mendoza. La persona que lo espera tiene que cambiar su plan.', '¿Cuándo cambias el camino y cuándo cambias el objetivo?'],
  carta: ['Imagina qué hace la mujer con esa carta de hace veinte años.', 'Busca a quien la escribió.', 'En tu relato, encuentra una dirección. Puede preguntar qué pasó, aunque ya pasaron veinte años.', 'Decide guardar la carta.', 'En tu relato, conserva el recuerdo. Sigue sin saber por qué esa persona no volvió en marzo.', '¿Necesitas conocer todas las respuestas para seguir con tu vida?'],
  valija: ['Imagina que alguien encuentra una dirección en la valija. ¿Qué hace?', 'Intenta contactar a la dueña.', 'En tu relato, la dueña responde. Cuenta por qué dejó el vestido y nunca hizo el viaje.', 'Entrega todo al museo sin buscarla.', 'En tu relato, la valija se conserva. Los visitantes inventan historias porque nadie conoce a su dueña.', '¿Quién tiene derecho a contar una historia personal?'],
  televisor: ['Imagina qué hace la familia al notar que el hijo se fue.', 'Lo buscan esa misma noche.', 'En tu relato, lo encuentran en la estación. Pueden hablar antes de que viaje.', 'Esperan hasta la mañana.', 'En tu relato, el tren ya salió. Solo pueden escribirle para saber cómo está.', '¿Cómo respetas una decisión y al mismo tiempo cuidas a alguien?'],
  bicicleta: ['Imagina que la última carta invita al cartero a viajar. ¿Qué hace?', 'Acepta y se va de viaje.', 'En tu relato, descubre un lugar nuevo. Sus compañeros se preocupan porque no avisó.', 'Vuelve al correo para avisar primero.', 'En tu relato, sus compañeros entienden. Pierde ese transporte y debe esperar al siguiente.', '¿Qué responsabilidad tienes cuando empiezas una vida nueva?'],
  habitacion: ['Imagina que la estudiante ya decidió irse. ¿Cómo sale?', 'Deja un mensaje con su destino.', 'En tu relato, alguien lee el mensaje. Sabe dónde buscarla si necesita ayuda.', 'Se va sin explicar nada.', 'En tu relato, puede empezar sola. Quienes viven con ella no saben dónde está.', '¿Qué significa irse de un lugar sin despedirse?'],
  caja: ['La canción de la caja suena también en el bar. Imagina cómo sigue la búsqueda.', 'Preguntan a los músicos del bar.', 'En tu relato, un músico reconoce la canción. Su respuesta conecta la caja con una familia del barrio.', 'La exhiben sin preguntar.', 'En tu relato, la caja funciona otra vez. La identidad de quien la dejó sigue siendo un misterio.', '¿Qué cambia cuando conoces la historia detrás de un objeto?'],
  'tienda-enchufe': ['El alargue no sirve para tu cargador. ¿Qué haces?', 'Muestras el cargador y pides probar la conexión.', 'El empleado encuentra la pieza correcta. Puedes cargar el celular antes de que se apague.', 'Compras el alargue sin probar.', 'El cargador tampoco entra en el alargue. Gastas dinero y el celular se apaga.', '¿Cómo confirmas que alguien entendió lo que necesitas?'],
  'tienda-hielo': ['El empleado ofrece un balde. ¿Cómo llevas el hielo?', 'Pides un recipiente con tapa que mantenga el hielo.', 'El empleado encuentra uno. Cuesta más, pero el hielo llega entero a la previa.', 'Aceptas el balde y el diario.', 'El hielo se derrite en el camino. Vale tiene menos hielo para las bebidas.', '¿Cuándo una solución barata termina costando más?'],
  'tienda-regalo': ['El empleado ofrece el destapador con forma de pez. ¿Qué eliges?', 'Pides algo para las bebidas calientes de Vale.', 'Encuentras una taza. Vale la usa todos los días, aunque el regalo no es una sorpresa original.', 'Compras el destapador.', 'Vale se ríe al abrirlo. Le gusta la broma, pero casi nunca lo usa.', '¿Qué hace especial un regalo: su uso o lo que significa?'],
  'terraza-cierre': ['Lu necesita compañía para tomar un taxi. ¿Cómo termina la noche?', 'Acuerdas acompañarla y volver después.', 'Lu se queda una hora. Luego toma el taxi y tú pierdes parte del baile al acompañarla.', 'Cada uno sigue su plan ahora.', 'Lu se va antes y llama a alguien para acompañarla. El grupo termina la noche separado.', '¿Cómo haces un acuerdo sin prometer algo que no vas a cumplir?'],
  'terraza-foto': ['La jefa de Sergio sigue a Vale. ¿Qué hacen con la foto?', 'Suben otra foto sin Sergio, con permiso.', 'Vale comparte el cumpleaños. Sergio no aparece y la jefa no lo ve en la foto.', 'Suben la foto de todos sin consultar.', 'La jefa ve a Sergio y le pide una explicación. Sergio se enoja con Vale.', '¿Quién decide qué fotos tuyas pueden ver otras personas?'],
};

// A1 closes with a concrete present-tense question, not an abstract debate.
const firstReflections = {
  'cafe-alla': '¿Prefieres esperar o ir a buscar a tu amigo? ¿Por qué?',
  'cafe-equivocado': '¿Te gustan las sorpresas? ¿Por qué?',
  'cafe-grupo': '¿Qué quiere Vale? ¿Tu plan es bueno para ella?',
  'depto-un-minuto': '¿Qué necesitas en casa para dormir bien?',
  'depto-timbre': '¿A quién le preguntas antes de abrir la puerta?',
  pablo: '¿Te gusta esperar a tus amigos? ¿Cuánto tiempo?',
  ines: '¿Dónde puedes conocer gente en tu barrio?',
  pareja: '¿Está bien tener planes diferentes? ¿Por qué?',
  ramiro: '¿Cómo vuelves a casa de noche? ¿Por qué?',
  marta: '¿Con quién te gusta festejar?',
  kenji: '¿Te gusta hablar con la gente cuando viajas?',
  sofia: '¿Prefieres un plan nuevo o tu plan de antes?',
  fuerte: '¿Qué lugar eliges para hablar tranquilo?',
  quedarse: '¿Qué necesita Leo? ¿Cómo puedes ayudarlo?',
  billetera: '¿Te gusta prestar dinero a tus amigos? ¿Por qué?',
  fila: '¿Es justo esperar más porque llega otra persona?',
  caro: '¿Cómo dices que un lugar es caro para ti?',
  cancelo: '¿Tu amigo sabe cómo te sientes? ¿Por qué?',
  invitacion: '¿Cómo ayudas a Sergio a estar cómodo?',
  'auto-aeropuerto': '¿Qué es más importante para Carla: el auto o el avión?',
  'auto-gasolina': '¿Qué plan ayuda más a Julio? ¿Por qué?',
  foto: '¿Te gusta mirar fotos de tu familia? ¿Por qué?',
  telefono: '¿A quién llamas cuando estás triste?',
  boleto: '¿Qué haces si no puedes viajar hoy?',
  carta: '¿Prefieres preguntar o guardar la carta?',
  valija: '¿Está bien contar la historia de otra persona?',
  televisor: '¿Cómo avisas a tu familia cuando sales?',
  bicicleta: '¿A quién avisas antes de un viaje?',
  habitacion: '¿Por qué es bueno decir adónde vas?',
  caja: '¿Quieres saber de quién es la caja? ¿Por qué?',
  'tienda-enchufe': '¿Cómo sabes si lo que compras funciona?',
  'tienda-hielo': '¿Prefieres pagar menos o llevar bien el hielo?',
  'tienda-regalo': '¿Qué regalo te gusta recibir? ¿Por qué?',
  'terraza-cierre': '¿Puedes hacer lo que prometes a Lu?',
  'terraza-foto': '¿Te gusta que otros suban tus fotos? ¿Por qué?',
};

const follow = {
  A1: '¿Qué pasa ahora? ¿Te gusta el resultado? Di una razón.',
  A2: '¿Qué cambió por tu decisión? Explica qué vas a hacer ahora.',
  B1: 'Explica la consecuencia de tu elección y propón cómo seguir.',
  B2: '¿Qué ventaja y qué costo tiene tu elección? Propón una alternativa.',
  C1: '¿Qué consecuencia no habías previsto y cómo reformularías tu propuesta?',
  C2: '¿Qué revela la reacción de los demás sobre tu decisión? Distingue intención, efecto y responsabilidad.',
};
const reflect = {
  A1: '', A2: 'Cuenta un ejemplo simple.', B1: 'Relaciona tu respuesta con lo que pasó en esta historia.',
  B2: '¿En qué circunstancias cambiarías tu respuesta?', C1: 'Considera también la perspectiva de la persona afectada.',
  C2: '¿Qué supuesto de tu respuesta discutiría alguien con otros valores? Defiende o revisa ese supuesto.',
};
export function consequenceFor(id, level = 'B1') {
  const row = stories[id];
  if (!row) throw new Error(`Missing consequence story: ${id}`);
  const [prompt, first, result1, second, result2, reflection] = row;
  return {
    prompt,
    options: [{ id: 'plan-a', label: first, result: result1, ask: follow[level] }, { id: 'plan-b', label: second, result: result2, ask: follow[level] }],
    reflection: level === "A1" ? firstReflections[id] : `${reflection} ${reflect[level]}`.trim(),
  };
}
