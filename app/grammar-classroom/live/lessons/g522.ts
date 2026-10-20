import type { LiveLesson } from '../types';

/**
 * Lesson 522 · C2 · Cortesía estratégica y amenaza a la imagen (course unit G222).
 * Builds on G164 (lesson 464: the request scale, ¿te importaría…?, quería, le agradecería que),
 * G191 (lesson 491: hedges such as en cierto modo, un poco, a lo mejor, igual, yo diría que) and
 * G198 (lesson 498: formal style, impersonality, institutional we). Those tools are NOT retaught:
 * here they are chosen strategically. C2 step (pragmatics, the face model as used in Spanish
 * pragmatics): positive face (to be valued) and negative face (freedom of action); acts that
 * threaten face (requests, refusals, criticism, disagreement, complaints) and their weight
 * (distance, power, imposition); the grammatical toolkit as a dose (conditional, imperfect,
 * question instead of order, impersonal se / habría que, plural of modesty and inclusive
 * plural, diminutive, ¿te importaría…?, a lo mejor / igual with careful regional note; anchor
 * «No estaría de más revisar la decisión»); refusals in steps (thanks + reason + alternative);
 * disagreement prefaces (entiendo tu postura, pero…; puede que + subj., aunque…; tienes razón
 * en que…, pero…); criticism in feedback (fact, not person; impersonal; proposal); face-saving
 * for the other (seguramente me expliqué mal); strategic intensification: hyperformality and
 * a sudden switch to usted to create distance or irony. Cultural variation only as tendencies.
 * Ampliación: cortesía valorizadora (intensifying politeness: compliments, insistent offers)
 * and ritual refusals. Scene: Guadalajara (Mexico), the fictional agency Altavista Eventos runs
 * a paediatrics congress. Project lead Valeria Ochoa, director Rodrigo Saldaña, client Dra.
 * Elena Carmona (organising committee), friend Paloma Reyes, AV supplier Héctor Lugo.
 * Escuchar: Rodrigo's voice message to Valeria (es-MX-JorgeNeural). Escribir: Valeria's email
 * to Héctor refusing an extra charge while keeping the relationship. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 522,
  level: 'C2',
  title: 'Cortesía estratégica y amenaza a la imagen',
  subtitle: 'Pedir, rechazar, discrepar y criticar dosificando la cortesía según la relación, y reparar una conversación que se tensa.',
  legend: [
    { tone: 'orange', label: 'ACTO QUE AMENAZA · no es posible, está mal, no estoy de acuerdo (the face-threatening act, said bare)' },
    { tone: 'blue', label: 'ATENUACIÓN GRAMATICAL · condicional, imperfecto, pregunta, se / habría que, a lo mejor (grammar that softens)' },
    { tone: 'teal', label: 'CUIDAR LA IMAGEN · gracias por…, entiendo tu postura, pero…, seguramente me expliqué mal (protecting the other person)' },
    { tone: 'violet', label: 'CORTESÍA ESTRATÉGICA · usted repentino, le agradezco enormemente, como ya le indiqué (politeness used to create distance)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que está en juego cuando hablamos', coach: 'No solo qué dices: a quién se lo haces. Not just what you say: what it does to them.',
      steps: [
        { title: 'Dos correos sobre la misma terraza · Two emails about the same terrace', blocks: [
          { kind: 'lead', text: 'Guadalajara, dos semanas antes del XII Congreso de Pediatría de Occidente. Valeria Ochoa coordina el proyecto en la agencia Altavista Eventos. La doctora Elena Carmona, presidenta del comité organizador, quiere pasar la cena de gala a la terraza del hotel, pero la terraza solo admite a cien personas y los invitados son trescientos. Valeria tiene que decir que **no**. Puede hacerlo de muchas maneras, y no todas terminan igual.', en: 'Two weeks before a medical congress, the project lead at an events agency has to turn down the client’s request to move the gala dinner to a terrace that holds only a hundred people. The content of the answer is fixed; what changes is how much it costs the relationship.' },
          { kind: 'guide', text: { teacher: 'Tú lees el primer correo y tu alumno lee el segundo. Después tu alumno dice cómo se sentiría la doctora con cada uno y por qué.', self: 'Lee los dos correos en voz alta. ¿Cómo se sentiría la doctora con cada uno? (How would the client feel after each one?)' } },
          { kind: 'compare', title: 'El mismo «no» · The same “no”', columns: [
            { tone: 'orange', label: 'CORREO A', sentence: 'Elena: [[no es posible|orange]]. La terraza tiene un aforo de cien personas y ustedes son trescientas.', idea: 'Informa bien, pero niega en seco y no deja nada a la clienta.', en: 'Accurate and short, but the refusal lands bare: the client’s idea is dismissed and she is left with nothing to offer her committee.' },
            { tone: 'teal', label: 'CORREO B', sentence: 'Elena: [[gracias por pensar en los ponentes|teal]]. [[Me temo que|blue]] no [[sería posible|blue]]: la terraza admite cien personas. [[¿Qué te parecería|blue]] servir allí el cóctel de bienvenida?', idea: 'El mismo «no», con agradecimiento, razón y alternativa: la clienta conserva algo.', en: 'The answer is still no, but it thanks her, gives the reason as an external fact and offers an alternative, so she keeps something to take back to her committee.' },
          ] },
          { kind: 'concept', tone: 'teal', label: 'LA IMAGEN · DOS NECESIDADES', question: '¿Qué protegemos cuando somos corteses?', en: 'Pragmatics describes politeness in terms of “face”: the public self-image everyone wants to keep in an interaction. Positive face is the wish to be liked, valued and approved of; negative face is the wish to keep one’s freedom of action and not be imposed upon. Politeness is the work we do to protect both, the other person’s and our own.', formula: ['imagen positiva: querer ser apreciado, aprobado, tenido en cuenta', 'imagen negativa: querer libertad de acción, no sentirse obligado ni invadido', 'la cortesía protege las dos: la del otro y la propia'],
            meaning: 'Cada interlocutor quiere **salir bien parado**. Una crítica daña sobre todo la **imagen positiva** (me valoran menos); una petición o una orden, la **negativa** (me quitan libertad). Por eso la cortesía no es decoración: es la forma de decir lo necesario **sin coste para la relación**.',
            examples: [
              { es: 'Tu propuesta de horarios tiene errores. → amenaza la imagen positiva de quien la hizo.', en: 'A criticism threatens positive face: the person feels less valued.' },
              { es: 'Mándame hoy la lista de ponentes. → amenaza la imagen negativa: impone una tarea y un plazo.', en: 'A request or order threatens negative face: it limits the other’s freedom.' },
              { es: 'Me equivoqué con las fechas. → amenaza la imagen de quien habla.', en: 'Admitting a mistake threatens the speaker’s own face, which is why apologies are often softened too.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué imagen amenaza sobre todo el correo A?', options: ['Solo la de Valeria.', 'La positiva de la doctora: su idea queda descartada sin reconocimiento.', 'Ninguna: es información objetiva.'], answer: 1, why: 'El dato es objetivo, pero el rechazo seco descarta la idea sin valorarla: afecta a la imagen positiva de la clienta.', en: 'Facts can be objective while the way they are delivered still hurts.' },
            { prompt: '«¿Te importaría revisar el contrato antes del lunes?». ¿Qué imagen protege la pregunta?', options: ['Ninguna: es una orden.', 'La negativa del otro: le deja la opción de decir que no.', 'La positiva de quien pregunta.'], answer: 1, why: 'Una petición limita la libertad del otro; la pregunta con condicional le deja, al menos formalmente, la salida.', en: 'A question leaves the other person a formal way out.' },
          ] },
        ] },
        { title: 'Cuánto pesa un acto · How heavy an act is', mascot: '/brand/mascot/studying.webp', coach: 'Relación, poder, tamaño. Distance, power, size.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ACTOS QUE AMENAZAN LA IMAGEN', question: '¿Cuánta cortesía necesita lo que vas a decir?', en: 'Some speech acts are threatening by nature: requests, orders, refusals, criticism, disagreement and complaints. How much repair they need depends on three things: the social distance between speakers, the relative power of each, and the size of the imposition. The heavier the act, the more strategies you combine.', formula: ['actos de riesgo: pedir, mandar, rechazar, criticar, discrepar, quejarse', 'peso = distancia social + poder del otro + tamaño de la imposición', 'más peso → más recursos combinados (atenuar + justificar + ofrecer salida)'],
            meaning: 'No hay una fórmula cortés para todo. Pedirle un bolígrafo a una amiga pesa poco; pedirle a una clienta que cambie el programa a dos semanas del congreso pesa mucho. **El peso decide la dosis**: con poco peso, la cortesía exagerada suena rara; con mucho, la sequedad ofende.',
            examples: [
              { es: '¿Me pasas el cargador? → poco peso: amiga, nada de poder, imposición mínima.', en: 'Low weight: a friend, no power gap, a tiny favour. A plain question is enough.' },
              { es: 'Quería pedirte un favor grande: ¿podrías quedarte el sábado para el montaje? Ya sé que es tu día libre. → mucho peso.', en: 'High weight: a big imposition on a colleague’s free day, so imperfect, conditional, question and acknowledgement are combined.' },
            ] },
          { kind: 'table', title: 'Cada acto y su riesgo · Each act and its risk', head: ['Acto', 'Imagen en riesgo', 'Reparación típica'], rows: [
            ['Pedir', 'negativa del otro', 'pregunta, condicional, «si no es molestia», razón'],
            ['Rechazar', 'positiva del otro', 'agradecer, dar una razón ajena, ofrecer alternativa'],
            ['Criticar', 'positiva del otro', 'hablar del hecho y no de la persona, impersonal, propuesta'],
            ['Discrepar', 'positiva del otro', 'conceder antes: «entiendo tu postura, pero…»'],
            ['Quejarse', 'positiva y negativa del otro', 'describir el problema, pedir una solución concreta'],
            ['Disculparse', 'la propia', 'asumir, sin humillarse; ofrecer reparación'],
          ], note: 'Un mismo enunciado puede amenazar varias imágenes a la vez: una queja critica (positiva) y además pide que el otro haga algo (negativa).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué petición pesa más?', options: ['Pedirle la hora a un desconocido.', 'Pedirle a un compañero que te pase un archivo.', 'Pedirle a tu directora que retrase una entrega que ella misma prometió al cliente.'], answer: 2, why: 'Más poder del otro y una imposición grande (le cuesta su propia imagen ante el cliente): es el acto de más peso.', en: 'Power and imposition both add weight.' },
            { prompt: 'Le dices a tu mejor amigo: «¿Sería usted tan amable de pasarme la sal?». ¿Qué pasa?', options: ['Es lo normal en una comida.', 'Suena a broma o a enfado: la cortesía no corresponde al peso del acto.', 'Es lo más cortés posible.'], answer: 1, why: 'Con poco peso y poca distancia, la fórmula hiperformal crea distancia: se interpreta como humor, ironía o enfado.', en: 'Too much politeness is also a message.' },
          ] },
        ] },
        { title: 'La caja de herramientas, en dosis · The toolkit, as a dose', mascot: '/brand/mascot/speaking.webp', coach: 'Ya las conoces: ahora elige. You know them: now choose.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ATENUACIÓN GRAMATICAL', question: '¿Con qué recursos gramaticales rebajas la fuerza de un acto?', en: 'You met these tools at B2 and C1; at C2 the skill is choosing and combining them. The conditional and the imperfect move the request away from the here and now; a question replaces an order; impersonal se and “habría que” remove the person being criticised; the plural of modesty spreads responsibility; diminutives and “a lo mejor / igual” make the act look smaller or less certain. The anchor “No estaría de más revisar la decisión” combines a negated conditional with an impersonal infinitive: a strong suggestion that sounds mild.', formula: ['tiempo: condicional (sería, podríamos) · imperfecto (quería, venía a)', 'modalidad: pregunta en vez de orden (¿podrías…?, ¿te importaría + inf.?)', 'persona: se impersonal, habría que + inf., plural de modestia (creemos, nos equivocamos)', 'tamaño y certeza: diminutivo (un momentito), a lo mejor / igual + indicativo, no estaría de más + inf.'],
            meaning: 'Cada recurso actúa sobre una parte del acto: el **tiempo** lo aleja, la **pregunta** deja salida, el **impersonal** quita a la persona del centro, el **diminutivo** y la **duda** reducen su tamaño. Combinar dos o tres basta casi siempre; más, y el mensaje se pierde.',
            examples: [
              { es: '[[No estaría de más|blue]] revisar la decisión.', en: 'It wouldn’t hurt to review the decision: a firm recommendation phrased as a mild one.' },
              { es: '[[Habría que|blue]] ajustar los horarios del segundo día.', en: 'The second day’s schedule needs adjusting: nobody is named as responsible.' },
              { es: 'Creo que [[nos equivocamos|blue]] con el número de mesas.', en: 'I think we got the number of tables wrong: the plural shares the blame, even if the mistake was one person’s.' },
              { es: '[[Quería|blue]] pedirte [[un favorcito|blue]]: ¿me revisas el programa antes de imprimirlo?', en: 'Imperfect plus diminutive: the request looks smaller and less abrupt (informal register).' },
            ],
            note: '**Igual** + indicativo, con el valor de ‘a lo mejor’, es coloquial y frecuente en España y en algunas zonas de América; su extensión varía. **A lo mejor** es general en el habla. En un correo formal, mejor **quizá** o **tal vez**.' },
          { kind: 'table', title: 'Una escala para medir · A scale to rate', head: ['Nivel', 'Petición a una clienta', 'Recursos'], rows: [
            ['0 · en seco', 'Mándeme la lista hoy.', 'imperativo'],
            ['1 · convencional', '¿Me manda la lista hoy?', 'pregunta'],
            ['2 · atenuada', '¿Podría mandarme la lista hoy?', 'pregunta + condicional'],
            ['3 · reforzada', 'Quería pedirle, si no es molestia, que me mandara la lista hoy: la imprenta cierra a las seis.', 'imperfecto + salida + razón'],
            ['4 · muy distante', 'Le rogaría tuviera a bien remitirnos la lista a la mayor brevedad.', 'fórmulas administrativas'],
          ], note: 'El nivel 4 es propio de textos muy formales; en un correo de trabajo entre personas que se tutean puede sonar **frío o irónico**. «Le rogaría tuviera a bien» (sin «que») es un uso administrativo tradicional.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No estaría de más revisar la decisión». ¿Qué hace realmente quien lo dice?', options: ['Dice que la revisión no tiene ninguna importancia.', 'Recomienda con firmeza revisarla, pero lo formula con suavidad.', 'Prohíbe revisar la decisión.'], answer: 1, why: 'La negación de «estar de más» con condicional es una recomendación atenuada: suena leve, pero pide la revisión.', en: 'Understated form, firm content.' },
            { prompt: '¿Qué recurso quita a la persona criticada del centro?', options: ['La pregunta.', 'El impersonal: «Habría que corregir el programa».', 'El diminutivo.'], answer: 1, why: '«Habría que» + infinitivo no nombra a quien se equivocó: la crítica recae sobre la tarea.', en: 'Impersonal forms shift the focus from the person to the task.' },
          ] },
        ] },
        { title: 'Rechazar, discrepar, criticar · Refuse, disagree, criticise', mascot: '/autoestudio/mascot/noting.webp', coach: 'Primero el puente, después el «no». Build the bridge, then say no.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ESTRATEGIAS POR PASOS', question: '¿Tienes que decir algo que el otro no quiere oír?', en: 'Heavy acts are rarely done in one move. A refusal usually comes in steps: thanks or appreciation, a reason (ideally one outside both speakers’ control), and an alternative. Disagreement is prefaced by a concession. Criticism in feedback names the fact rather than the person and turns into a proposal. And you can save the other person’s face by taking the blame yourself: “Seguramente me expliqué mal”.', formula: ['rechazo: agradecimiento + razón (mejor ajena) + alternativa', 'desacuerdo: concesión + pero / aunque: entiendo tu postura, pero… · puede que + subjuntivo, aunque…', 'crítica: el hecho, no la persona + propuesta: el segundo bloque queda largo; ¿y si lo partimos?', 'salvar la imagen del otro: seguramente me expliqué mal · quizá no quedó claro en mi correo'],
            meaning: 'Estas secuencias no esconden el mensaje: lo **preparan**. El «no», el desacuerdo o la crítica llegan enteros, pero el otro recibe antes algo que protege su imagen: reconocimiento, una razón que no le culpa, una salida.',
            examples: [
              { es: '[[Te lo agradezco mucho|teal]], de verdad, pero esa semana tengo el congreso. [[¿Y si lo vemos|blue]] el lunes siguiente?', en: 'A refusal in three steps: thanks, an external reason, an alternative.' },
              { es: '[[Entiendo tu postura, pero|teal]] con trescientos invitados la terraza no es viable.', en: 'The preface acknowledges the other view before the disagreement.' },
              { es: '[[Puede que tengas razón, aunque|teal]] yo esperaría a ver el presupuesto.', en: '“Puede que” takes the subjunctive; the concession makes the reservation easier to accept.' },
              { es: '[[Tienes razón en que|teal]] el hotel es caro, pero es el único con salas para trescientas personas.', en: '“Tener razón en que” + indicative concedes one specific point.' },
              { es: '[[Seguramente me expliqué mal|teal]]: el cóctel sí puede ser en la terraza.', en: 'Taking the blame for a misunderstanding spares the other person, even when the misunderstanding was theirs.' },
            ] },
          { kind: 'decide', title: 'Antes de enviar · Before you send it', steps: [
            { q: '¿Tu mensaje rechaza, critica, discrepa, pide algo grande o se queja?', yes: 'Hay riesgo para la imagen: sigue.', no: 'Sé claro y breve; no hace falta más.' },
            { q: '¿Hay distancia o diferencia de poder, o la imposición es grande?', yes: 'Combina dos o tres recursos: atenuación + razón + salida o alternativa.', no: 'Con un recurso suele bastar (una pregunta, un «gracias», un «¿te parece?»).' },
            { q: '¿El malentendido puede hacer quedar mal al otro?', yes: 'Asume tú una parte: «seguramente me expliqué mal», «quizá no lo dejé claro».', no: 'Ve al contenido.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo le pide a Valeria llevar otro congreso. ¿Qué respuesta sigue los tres pasos del rechazo?', options: ['Gracias por confiar en mí; ahora mismo no podría darle la atención que merece. ¿Te parece si lo lleva Julián y yo lo apoyo?', 'Bueno, si no hay más remedio…', 'No puedo, estoy saturada.'], answer: 0, why: 'Agradece, da una razón que protege el proyecto y ofrece una alternativa. «No puedo, estoy saturada» rechaza en seco; «Bueno, si no hay más remedio…» ni siquiera rechaza.', en: 'Thanks, reason, alternative.' },
            { prompt: '«Puede que ___ razón, aunque el aforo es el que es».', options: ['tengas', 'tendrás', 'tienes'], answer: 0, why: '«Puede que» expresa posibilidad y pide subjuntivo: «puede que tengas razón».', en: 'You may be right, although capacity is what it is.' },
          ] },
        ] },
        { title: 'Cortesía estratégica · Politeness as strategy', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Demasiado amable también es un mensaje. Too polite is a message too.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'INTENSIFICAR PARA ALEJARSE', question: '¿Por qué alguien que te tuteaba pasa de pronto a «Estimada señora»?', en: 'Politeness can be turned up on purpose. A sudden switch from tú to usted, a cold opening such as “Estimada Sra. Ochoa”, “Como ya le indiqué” or excessive thanks can mark distance, displeasure or irony: the forms are polite, the message is not. Recognising it lets you de-escalate instead of answering in kind. Irony as such is the topic of the next class.', formula: ['cambio de tú a usted en mitad de una relación: distancia, enfado', 'fórmulas frías: Estimada Sra. Ochoa · Quedo a la espera · Sin otro particular', 'recordatorios con reproche: como ya le indiqué · tal como consta en mi correo anterior', 'agradecimiento excesivo o fuera de lugar: le agradezco enormemente su rapidez (si no la hubo, ironía)'],
            meaning: 'Las mismas fórmulas que en una carta oficial son neutras, en una relación de confianza **marcan distancia**. Si alguien sube la cortesía de golpe, conviene leerlo como una señal de **malestar** y responder bajándola: volver al tú, nombrar el problema, ofrecer una solución.',
            examples: [
              { es: '[[Estimada Sra. Ochoa|violet]]: [[le agradezco enormemente|violet]] la rapidez con que ha descartado nuestra propuesta.', en: 'After weeks of “Hola, Valeria”, this cold, over-thankful opening signals displeasure and some irony.' },
              { es: '[[Como ya le indiqué|violet]], se trata de una petición del comité.', en: '“As I already told you”: the reminder implies the other person did not listen.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Tendencias, no estereotipos · Tendencies, not stereotypes', text: 'Los hablantes y las comunidades varían en cuánta atenuación esperan, cuándo se tutea o cuánto se insiste al invitar. Esas diferencias son **tendencias**, no reglas de país: dentro de cada país cambian con la edad, la empresa, la región y la relación. Lo fiable es **observar cómo escribe tu interlocutor** y ajustar tu registro al suyo.', en: 'Speech communities differ in how much softening they expect, but these are tendencies that vary with age, workplace, region and relationship, not national rules. The reliable strategy is to mirror the register your interlocutor uses.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La doctora, que siempre escribía «Hola, Valeria», pasa a «Estimada Sra. Ochoa». ¿Qué conviene hacer?', options: ['Leer el cambio como malestar y responder bajando la tensión: reconocer, aclarar, proponer.', 'Ignorar el cambio: es solo una fórmula.', 'Contestar igual de fría, con «Estimada Dra. Carmona».'], answer: 0, why: 'El cambio de registro es un mensaje. Responder con la misma frialdad lo agrava; reparar la relación lo desactiva.', en: 'A sudden shift in register signals displeasure.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Forma, dosis o estrategia? Form, dose or strategy?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: la forma, la dosis o la estrategia.', self: 'Lee cada frase y decide qué falla: ¿la forma, la dosis o la estrategia? Después mira la corrección. (Form, dose or strategy?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '¿Te importaría de revisar el presupuesto?', right: '¿Te importaría revisar el presupuesto?', why: '«Importar» lleva el infinitivo sin preposición. Con otra persona como sujeto: «¿Te importaría que lo revisara Julián?».' },
            { wrong: 'Entiendo tu postura, pero estás completamente equivocada.', right: 'Entiendo tu postura, aunque yo lo veo de otra manera.', why: 'El prefacio queda anulado si lo que sigue es un juicio sobre la persona. Discrepa de la idea, no de quien la tiene.' },
            { wrong: 'Seguramente te explicaste mal en tu correo.', right: 'Seguramente me expliqué mal en mi correo.', why: 'La fórmula salva la imagen del otro porque quien habla asume la culpa. Dirigida al otro, se convierte en reproche.' },
            { wrong: 'Bueno, no sé, igual a lo mejor podríamos quizá, si te parece, revisar un poquito el programa, ¿no?', right: '¿Te parece si revisamos el programa? Hay un par de horarios que no cuadran.', why: 'Exceso de atenuación: el mensaje se pierde y quien habla suena inseguro. Dos recursos y un dato concreto bastan.' },
            { wrong: 'A una clienta: «Hay un errorcito en su factura».', right: 'A una clienta: «Hay un pequeño error en la factura; se la reenvío corregida».', why: 'El diminutivo puede sonar condescendiente en un contexto profesional distante; «un pequeño error» atenúa sin ese riesgo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué falla en «Gracias por tu propuesta. No.»?', options: ['La gramática.', 'Falta el agradecimiento.', 'El agradecimiento queda vacío: falta la razón y una alternativa.'], answer: 2, why: 'Un rechazo de peso necesita algo más que una fórmula: la razón y la alternativa son las que protegen la relación.', en: 'A ritual thank-you on its own does not repair a refusal.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno recuerda un correo o mensaje que le sentó mal y dice qué imagen amenazaba y qué recurso habría cambiado el efecto.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Un hilo de correos que se tensa', coach: '¿Dónde se rompe y dónde se repara? Where does it break, where is it fixed?',
      steps: [
        { title: 'Asunto: cena de gala · Subject: gala dinner', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el hilo con papeles: tú eres la doctora Carmona y tu alumno es Valeria y Rodrigo. Después tu alumno toca cada expresión marcada y señala el correo en el que la conversación se tensa.', self: 'Lee el hilo en voz alta. Toca cada expresión marcada y busca el correo en el que todo se tensa. (Find the email where it turns.)' } },
          { kind: 'explore', title: 'Hilo: «Cena de gala, XII Congreso»', setting: 'Ocho correos en tres días entre la doctora Elena Carmona, presidenta del comité organizador, Valeria Ochoa, de Altavista Eventos, y, al final, Rodrigo Saldaña, director de la agencia. Hasta ahora se tuteaban.', lines: [
            { who: 'Elena · correo 1', text: 'Hola, Valeria: ¿[[te importaría|blue]] ver la opción de pasar la cena de gala a la terraza? [[Sería ideal|blue]] para los ponentes internacionales. ¡Mil gracias!', en: 'Hi Valeria, would you mind looking into moving the gala dinner to the terrace? It would be ideal for the international speakers. Thanks so much!' },
            { who: 'Valeria · correo 2', text: 'Hola, Elena: [[gracias por pensar en los ponentes|teal]]. [[Me temo que|blue]] a dos semanas no [[sería posible|blue]]: la terraza tiene permiso para cien personas. ¿Qué te parecería servir allí el cóctel de bienvenida?', en: 'Thanks for thinking of the speakers. I’m afraid it wouldn’t be possible two weeks out: the terrace is licensed for a hundred. How about serving the welcome drinks there?' },
            { who: 'Elena · correo 3', text: 'Valeria, [[entiendo lo del permiso, pero|teal]] [[a lo mejor|blue]] se podría pedir una ampliación. Para el comité es importante.', en: 'I understand about the licence, but perhaps an extension could be requested. It matters to the committee.' },
            { who: 'Valeria · correo 4', text: 'Elena: ya lo consulté. [[No es posible|orange]]. La terraza tiene un aforo de cien personas y ustedes son trescientas.', en: 'I’ve already checked. It’s not possible. The terrace holds a hundred, and there are three hundred of you.' },
            { who: 'Elena · correo 5', text: '[[Estimada Sra. Ochoa|violet]]: [[le agradezco enormemente|violet]] la rapidez con que ha descartado nuestra propuesta. [[Como ya le indiqué|violet]], se trata de una petición del comité.', en: 'Dear Ms Ochoa, thank you so very much for how quickly you have dismissed our proposal. As I already pointed out, this is a request from the committee.' },
            { who: 'Valeria · correo 6', text: '[[Estimada Dra. Carmona|violet]]: [[como bien sabe|violet]], el aforo no depende de nosotros. Quedo a la espera de sus indicaciones.', en: 'Dear Dr Carmona, as you well know, capacity does not depend on us. I await your instructions.' },
            { who: 'Rodrigo · correo 7', text: 'Elena, buenos días: soy Rodrigo. [[Seguramente no nos explicamos bien|teal]] en los correos anteriores, y te pido una disculpa.', en: 'Good morning, Elena, this is Rodrigo. We probably didn’t explain ourselves well in the previous emails, and I apologise.' },
            { who: 'Rodrigo · correo 7', text: '[[Tienes toda la razón en que|teal]] la terraza es el mejor espacio del hotel. [[Lo que podríamos hacer|blue]] es abrirla para el cóctel y los postres, por turnos. ¿[[Te parece si lo vemos|blue]] el jueves en una llamada?', en: 'You’re absolutely right that the terrace is the best space in the hotel. What we could do is open it for drinks and dessert, in shifts. Shall we discuss it on a call on Thursday?' },
            { who: 'Elena · correo 8', text: 'Rodrigo, gracias. [[Reconozco que|teal]] yo también me puse un poco seca. El jueves está perfecto.', en: 'Thanks, Rodrigo. I admit I was a bit curt too. Thursday is perfect.' },
            { who: 'Valeria · nota a Rodrigo', text: 'Gracias por rescatarlo. [[Seguramente yo me pasé|teal]] con el «no es posible».', en: 'Thanks for rescuing it. I probably went too far with that “not possible”.' },
          ], notes: {
            'te importaría': '**¿Te importaría + infinitivo?**: petición con pregunta y condicional. Deja a Valeria la salida formal de decir que no.',
            'Sería ideal': '**Condicional**: presenta el deseo como una posibilidad, no como una exigencia.',
            'gracias por pensar en los ponentes': 'Primer paso del rechazo: **reconocer la intención** de la clienta. Protege su imagen positiva antes del «no».',
            'Me temo que': 'Fórmula que presenta el «no» como algo que lamenta quien lo dice.',
            'sería posible': '**Condicional**: aleja el rechazo. Con la razón ajena (el permiso) y la alternativa (el cóctel), es un rechazo por pasos completo.',
            'entiendo lo del permiso, pero': '**Prefacio de desacuerdo**: concede antes de insistir. La doctora sigue siendo cortés.',
            'a lo mejor': '**A lo mejor + indicativo**: propone la ampliación como posibilidad, sin exigirla.',
            'No es posible': 'El **acto que amenaza**, en seco: sin agradecimiento, sin alternativa y con un dato que suena a reproche («ustedes son trescientas»). Aquí se tensa el hilo.',
            'Estimada Sra. Ochoa': '**Cambio de registro**: después de tutearse, el apellido y el usted marcan distancia y malestar.',
            'le agradezco enormemente': '**Agradecimiento excesivo** por algo que molestó: cortesía en la forma, ironía en el fondo.',
            'Como ya le indiqué': 'Recordatorio con reproche: insinúa que Valeria no escuchó.',
            'Estimada Dra. Carmona': 'Valeria **responde con la misma frialdad**: la escalada continúa.',
            'como bien sabe': 'Parece una concesión, pero aquí implica «ya debería saberlo»: otro reproche cortés.',
            'Seguramente no nos explicamos bien': '**Salvar la imagen del otro** con el **plural de modestia**: Rodrigo asume la culpa en nombre del equipo y vuelve al tú.',
            'Tienes toda la razón en que': '**Concesión concreta** (+ indicativo): reconoce lo que la clienta tiene de razón.',
            'Lo que podríamos hacer': '**Condicional** + alternativa: convierte el «no» en una propuesta.',
            'Te parece si lo vemos': 'Pregunta que deja la decisión a la clienta (**¿te parece si…?** + presente de indicativo).',
            'Reconozco que': 'La doctora **repara su propia imagen**: admite su parte, porque Rodrigo le dejó espacio.',
            'Seguramente yo me pasé': 'Valeria asume su parte ante su jefe: la disculpa también amenaza la imagen propia, por eso se atenúa con «seguramente».',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿En qué correo se tensa la conversación?', options: ['En el 7: interviene Rodrigo.', 'En el 2: Valeria rechaza la propuesta.', 'En el 4: Valeria repite el «no» en seco, sin alternativa.'], answer: 2, why: 'El correo 2 también rechaza, pero por pasos. El 4 niega en seco y añade un dato que suena a reproche.', en: 'Refusing is not the problem; refusing bare is.' },
            { prompt: '¿Qué indica el cambio a «Estimada Sra. Ochoa»?', options: ['Que la doctora quiere ser más profesional.', 'Que la doctora no recuerda el nombre de Valeria.', 'Que la doctora está molesta y marca distancia.'], answer: 2, why: 'En una relación de tuteo, el apellido y el usted repentinos son cortesía estratégica: señalan malestar.', en: 'A sudden rise in formality signals displeasure.' },
            { prompt: '¿Por qué funciona el correo de Rodrigo?', options: ['Porque usa usted.', 'Porque cambia la decisión y abre la terraza a todos.', 'Porque asume la culpa, concede un punto concreto y ofrece una alternativa.'], answer: 2, why: 'El «no» no cambia: la terraza sigue sin admitir trescientas personas. Cambia el trato a la imagen de la clienta.', en: 'The decision stays; the relationship is repaired.' },
          ] },
        ] },
        { title: 'El correo 4, reescrito · Email 4, rewritten', mascot: '/brand/mascot/seated.webp', coach: 'Mismo dato, otro efecto. Same fact, different effect.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Rodrigo y tu alumno es Valeria. En cada hueco, tu alumno elige y explica qué imagen protege la opción.', self: 'Rodrigo ayuda a Valeria a reescribir el correo 4. En cada hueco, elige la opción que protege la relación. (Pick the option that protects the relationship.)' } },
          { kind: 'chat-fill', title: 'Cómo debió ser el correo 4 · How email 4 should have read', lines: [
            { who: 'Rodrigo', text: 'A ver, Valeria, empieza reconociendo lo que pide la doctora.' },
            { who: 'Valeria', text: '«Elena: ___ que quieras darles lo mejor a los ponentes».', options: ['me sorprende', 'no entiendo', 'entiendo perfectamente'], answer: 2, why: 'Reconocer la intención protege su imagen positiva. «Me sorprende» y «no entiendo» que quieras… cuestionan su petición.' },
            { who: 'Rodrigo', text: 'Bien. Ahora el dato, sin que suene a culpa suya.' },
            { who: 'Valeria', text: '«___ solicitar la ampliación, pero protección civil no permite más de cien personas».', options: ['Ya te dije que intenté', 'Intenté', 'Hemos intentado'], answer: 2, why: 'El plural reparte el esfuerzo en el equipo y la razón queda fuera de las dos: es una norma, no una decisión de Valeria.' },
            { who: 'Valeria', text: '«___ abrir la terraza para el cóctel, por turnos?».', options: ['¿Y si probamos a', '¿Le parecería bien', 'Tienes que'], answer: 0, why: 'Una alternativa en forma de pregunta deja a la clienta decidir. «¿Le parecería bien…?» rompe el tuteo y suena distante.' },
            { who: 'Rodrigo', text: '¿Y para cerrar?' },
            { who: 'Valeria', text: '«___ en una llamada, si te viene mejor».', options: ['Lo podemos ver', 'Quedo a la espera de sus indicaciones', 'Sin otro particular'], answer: 0, why: 'Ofrecer una llamada mantiene el tono cercano. Las otras dos son fórmulas frías que marcan distancia.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Medir, elegir y reescribir', coach: 'La dosis justa para cada relación. The right dose for each relationship.',
      steps: [
        { title: 'Mide la atenuación · Rate the softening', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada petición y la clasifica. Tú preguntas: «¿Qué recursos ves?».', self: 'Clasifica cada petición según su grado de atenuación. (How softened is each request?)' } },
          { kind: 'classify', title: 'Tres niveles · Three levels', categories: [
            { id: 'seco', label: 'EN SECO · imperativo o necesidad', tone: 'orange' },
            { id: 'convencional', label: 'CONVENCIONAL · pregunta, con o sin condicional', tone: 'blue' },
            { id: 'reforzada', label: 'REFORZADA · varios recursos + razón o salida', tone: 'teal' },
          ], items: [
            { text: 'Mándame el programa hoy.', answer: 'seco', why: 'Imperativo sin más: orden directa.' },
            { text: 'Necesito el programa hoy.', answer: 'seco', why: 'Expresar la necesidad propia sin pregunta ni razón es una petición directa.' },
            { text: '¿Me mandas el programa hoy?', answer: 'convencional', why: 'Pregunta en presente: la petición cortés de todos los días.' },
            { text: '¿Podrías mandarme el programa hoy?', answer: 'convencional', why: 'Pregunta con condicional: atenuada, pero rutinaria.' },
            { text: 'Quería pedirte, si no es molestia, que me mandaras el programa hoy: la imprenta cierra a las seis.', answer: 'reforzada', why: 'Imperfecto, salida («si no es molestia») y razón ajena.' },
            { text: 'Ya sé que vas a tope, pero ¿te importaría mandarme el programa hoy? Es por la imprenta.', answer: 'reforzada', why: 'Reconoce la carga del otro, pregunta con condicional y da la razón.' },
          ] },
        ] },
        { title: '¿Qué estrategia? · Which strategy?', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Interpreta y elige · Interpret and choose', items: [
            { prompt: 'Un proveedor que tardó tres semanas recibe: «Te agradezco muchísimo que me hayas contestado tan pronto». ¿Qué hace quien escribe?', options: ['Usa la cortesía con ironía para marcar malestar.', 'Agradece de verdad la rapidez.', 'Se disculpa por insistir.'], answer: 0, why: 'El agradecimiento choca con los hechos (tres semanas): es cortesía estratégica con valor irónico.', en: 'Politeness that clashes with the facts reads as irony.' },
            { prompt: 'La clienta dice que no recibió el contrato, aunque se lo enviaste. ¿Qué respuesta salva su imagen?', options: ['Usted no lo ha mirado bien.', 'Se lo mandé el lunes; revise su correo.', 'Quizá se quedó en la carpeta de spam; se lo reenvío ahora mismo.'], answer: 2, why: 'Atribuye el problema a una causa neutra y resuelve. Las otras dos insinúan o afirman que la clienta se equivocó.', en: 'Blame the circumstances, not the person.' },
            { prompt: 'Una compañera presenta un plan con un error de cálculo. ¿Qué comentario critica el hecho y no a la persona?', options: ['Los números no te salen, como siempre.', 'Creo que en la tabla de costes falta el IVA; ¿lo revisamos juntas?', 'Te has equivocado en las cuentas.'], answer: 1, why: 'Nombra el dato concreto, lo presenta como opinión («creo») y propone una acción compartida.', en: 'Specific fact, opinion marker, shared proposal.' },
            { prompt: '¿Qué prefacio prepara mejor un desacuerdo con tu directora?', options: ['Te equivocas, pero…', 'Entiendo por qué lo planteas así, aunque yo veo un riesgo con el presupuesto.', 'Con todo respeto, eso no tiene sentido.'], answer: 1, why: 'Reconoce su razonamiento y presenta el desacuerdo como un riesgo concreto. «Con todo respeto» seguido de un juicio duro no repara nada.', en: '“With all due respect” followed by a harsh verdict is not a real preface.' },
            { prompt: 'Rodrigo escribe: «Creemos que el programa del segundo día es demasiado largo». ¿Qué valor tiene «creemos»?', options: ['Plural mayestático: Rodrigo impone su autoridad.', 'Plural de modestia: la opinión parece del equipo y pesa menos sobre una sola persona.', 'Un error: Rodrigo es solo uno.'], answer: 1, why: 'El plural reparte la responsabilidad de la crítica y rebaja su carga personal.', en: 'The plural spreads responsibility for the criticism.' },
          ] },
        ] },
        { title: 'Revisa los borradores · Check the drafts', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de borradores de Altavista Eventos. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica por qué.', self: 'Son frases de borradores de la agencia. ¿Están bien? Si no, elige la corrección. (Is each sentence right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: '¿Le importaría de enviarnos la lista de alergias?', ok: false, options: ['¿Le importaría en enviarnos la lista de alergias?', '¿Le importaría que nos envía la lista de alergias?', '¿Le importaría enviarnos la lista de alergias?'], answer: 2, why: '«Importar» va con infinitivo sin preposición; con «que» pediría subjuntivo (que nos enviara).' },
            { sentence: 'Puede que tienes razón, pero el aforo es el que es.', ok: false, options: ['Puede que tendrías razón, pero el aforo es el que es.', 'Puede que tuvieses razón, pero el aforo es el que es.', 'Puede que tengas razón, pero el aforo es el que es.'], answer: 2, why: '«Puede que» pide subjuntivo; para el presente, «tengas».' },
            { sentence: 'Le agradecería que me envía la factura corregida.', ok: false, options: ['Le agradecería que me envió la factura corregida.', 'Le agradecería que me enviara la factura corregida.', 'Le agradecería que me enviaría la factura corregida.'], answer: 1, why: '«Agradecer que» pide subjuntivo. Con el condicional, la correlación más general es el imperfecto de subjuntivo (enviara); el presente también se oye en muchas zonas.' },
            { sentence: 'Entiendo tu postura, pero tu idea es absurda.', ok: false, options: ['Entiendo tu postura, pero eres absurda.', 'Entiendo tu postura y por eso es absurda.', 'Entiendo tu postura, aunque veo un problema: el hotel no tiene permiso.'], answer: 2, why: 'El prefacio solo funciona si lo que sigue discute un hecho, no descalifica la idea ni a la persona.' },
            { sentence: 'Seguramente me expliqué mal: el cóctel sí puede ser en la terraza.', ok: true, why: 'Correcta: Valeria asume el malentendido y aclara sin hacer quedar mal a la clienta.' },
          ] },
        ] },
        { title: 'Con una amiga · With a friend', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Paloma llama a Valeria · Paloma calls Valeria', lines: [
            { who: 'Paloma', text: '¡Valeria! El sábado hago una cena en casa por mi cumpleaños. ¿Vienes?' },
            { who: 'Valeria', text: '___, pero ese sábado es la cena de gala del congreso.', options: ['¡Ay, qué pena, me encantaría!', 'No puedo', 'Le agradezco enormemente la invitación'], answer: 0, why: 'Con una amiga, el rechazo empieza con afecto y pena. La fórmula con usted sonaría fría o irónica; «No puedo» solo, seca.' },
            { who: 'Valeria', text: '___ el domingo y te llevo tu regalo?', options: ['¿Tendría usted a bien vernos', '¿Y si nos vemos', 'Nos vemos'], answer: 1, why: 'La alternativa en forma de pregunta completa el rechazo y deja decidir a Paloma.' },
            { who: 'Paloma', text: 'Va, el domingo. Oye, y lo del correo seco que me contaste… ¿no crees que la doctora tenía algo de razón?' },
            { who: 'Valeria', text: '___ algo de razón, aunque lo de la terraza era imposible.', options: ['No tenía', 'Puede que tuviera', 'Puede que tenía'], answer: 1, why: '«Puede que» + subjuntivo; en pasado, «tuviera». Conceder primero hace más aceptable el «aunque».' },
            { who: 'Paloma', text: '¿Y qué le dijiste a Rodrigo?' },
            { who: 'Valeria', text: 'Que ___ y que la próxima vez le paso los correos difíciles antes de mandarlos.', options: ['él tendría que haberlos revisado', 'la doctora se pasó de lista', 'seguramente me puse un poco seca'], answer: 2, why: 'Asumir su parte repara su propia imagen ante el jefe. Culpar a otros la empeora.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Entiendo', 'tu', 'postura,', 'aunque', 'yo', 'lo', 'veo', 'de', 'otra', 'manera.'], accept: ['Entiendo tu postura, aunque yo lo veo de otra manera.'], en: 'I understand your position, although I see it differently.' },
            { tiles: ['No', 'estaría', 'de', 'más', 'revisar', 'la', 'decisión.'], accept: ['No estaría de más revisar la decisión.'], en: 'It wouldn’t hurt to review the decision.' },
            { tiles: ['Seguramente', 'me', 'expliqué', 'mal', 'en', 'el', 'correo.'], accept: ['Seguramente me expliqué mal en el correo.'], en: 'I probably didn’t explain myself well in the email.' },
          ] },
        ] },
        { title: 'Para tu jefe, tu clienta y tu amiga · For your boss, your client and your friend', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada mensaje según la instrucción y lee las dos versiones en voz alta: ¿qué imagen protege la nueva?', self: 'Reescribe cada mensaje según la instrucción y compara las dos versiones: ¿qué imagen protege la nueva? (Whose face does the new version protect?)' } },
          { kind: 'rewrite', title: 'Tres destinatarios · Three recipients', items: [
            { prompt: 'Para Rodrigo, tu jefe: «No voy a llevar también el congreso de cardiología».', instruction: 'Rechaza por pasos: empieza por «Gracias por pensar en mí, pero» y cambia «no voy a llevar» por el condicional de «poder».', accept: ['Gracias por pensar en mí, pero no podría llevar también el congreso de cardiología'] },
            { prompt: 'Para Rodrigo, tu jefe: «Tu plan de horarios está mal».', instruction: 'Critica la tarea, no a la persona: usa «Habría que revisar» + el plan de horarios.', accept: ['Habría que revisar el plan de horarios', 'Creo que habría que revisar el plan de horarios'] },
            { prompt: 'Para la doctora Carmona (usted): «Mándeme la lista de ponentes hoy».', instruction: 'Pregunta con «¿Le importaría» + infinitivo.', accept: ['¿Le importaría mandarme la lista de ponentes hoy?', '¿Le importaría enviarme la lista de ponentes hoy?', '¿Le importaría mandarme hoy la lista de ponentes?', '¿Le importaría enviarme hoy la lista de ponentes?'] },
            { prompt: 'Para la doctora Carmona (usted): «Usted no leyó el contrato».', instruction: 'Salva su imagen: empieza por «Seguramente no quedó claro en» y termina con «el contrato».', accept: ['Seguramente no quedó claro en el contrato'] },
            { prompt: 'Para Paloma, tu amiga: «Tu idea del karaoke es malísima».', instruction: 'Discrepa con «Puede que + ser + divertida, aunque yo prefiero cenar tranquilas».', accept: ['Puede que sea divertida, aunque yo prefiero cenar tranquilas', 'Puede que sea divertido, aunque yo prefiero cenar tranquilas'] },
            { prompt: 'Para Paloma, tu amiga: «Préstame tu coche el sábado».', instruction: 'Atenúa con diminutivo y pregunta: empieza por «¿Me haces un favorcito?» y sigue con «¿me prestas…?».', accept: ['¿Me haces un favorcito? ¿Me prestas tu coche el sábado?', '¿Me haces un favorcito? ¿Me prestas el coche el sábado?'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige un mensaje real que haya enviado esta semana y lo reescribe para un destinatario con más distancia o más poder.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Rodrigo', coach: 'Escucha cómo dice que no y cómo critica. Hear how he says no and how he criticises.',
      steps: [
        { title: 'Nota de voz del director · The director’s voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cómo rechaza Rodrigo la petición de Valeria y cómo suaviza la crítica.', self: 'Escucha una vez para la idea general. En la segunda, anota cómo rechaza Rodrigo la petición de Valeria y cómo suaviza su crítica. Vas a oír «la cuenta» (the account, the client file) y «platicamos» (we’ll talk, frequent in Mexico).' } },
          { kind: 'listen', title: 'Rodrigo a Valeria', channel: 'ALTAVISTA EVENTOS · NOTA DE VOZ', src: '/audio/grammar-live/522.mp3',
            before: 'Valeria le pidió a Rodrigo que otro compañero llevara la cuenta del congreso. ¿Qué crees que le contesta, y cómo? (What will he answer, and how?)',
            gist: { prompt: '¿Qué hace Rodrigo? · What does Rodrigo do?', options: ['Regaña a Valeria por el correo.', 'Acepta pasar la cuenta a Julián.', 'Rechaza la petición de Valeria, le ofrece apoyo y le hace una crítica suave.'], answer: 2, why: 'Rechaza por pasos (reconoce, razona, ofrece alternativa) y critica el correo con varios atenuadores.', en: 'He refuses, offers support and softens a criticism.' },
            details: [
              { prompt: '¿Por qué no pasa la cuenta a Julián?', options: ['Porque Julián está de vacaciones.', 'Porque sería un mensaje raro para el cliente y Valeria conoce mejor el proyecto.', 'Porque la doctora lo ha prohibido.'], answer: 1, why: '«A estas alturas sería un mensaje raro para el cliente, y tú conoces el proyecto mejor que nadie».', en: 'What reason does he give?' },
              { prompt: '¿Qué alternativa propone?', options: ['Cambiar de cliente.', 'Llevar juntos las dos próximas llamadas.', 'Que Valeria se tome unos días.'], answer: 1, why: '«Lo que sí podríamos hacer es llevar juntos las próximas dos llamadas».', en: 'What does he offer instead?' },
              { prompt: '¿Cómo suaviza la crítica del correo seco?', options: ['Con un diminutivo y asumiendo que él habría escrito algo parecido.', 'No la menciona.', 'Dice que el correo fue un desastre.'], answer: 0, why: '«Quedó un poquito seco. Seguramente yo habría escrito algo parecido con el cansancio de esa semana».', en: 'Diminutive plus taking part of the blame.' },
              { prompt: '¿Qué le recomienda para la próxima vez?', options: ['Contestar más rápido.', 'Dejar reposar el correo una hora o pasárselo a él.', 'Llamar siempre en vez de escribir.'], answer: 1, why: '«No estaría de más que la próxima vez lo dejaras reposar una hora antes de mandarlo, o que me lo pasaras a mí».', en: 'His recommendation, phrased as a mild suggestion.' },
              { prompt: '¿Qué elogia Rodrigo?', options: ['La rapidez de sus respuestas.', 'Su relación con la doctora.', 'Cómo manejó el aforo: tenía razón y lo argumentó bien.'], answer: 2, why: '«El manejo del aforo fue impecable: tenías razón y lo argumentaste bien».', en: 'He ends with genuine praise, which protects her positive face.' },
            ],
            transcript: 'Valeria, hola, soy Rodrigo. Oye, primero, [[gracias por mandarme todo el hilo|teal]] con la doctora Carmona; se nota que le dedicaste tiempo. Ya hablé con ella y la llamada del jueves queda en pie. Sobre lo que me pediste, que pasemos la cuenta del congreso a Julián: [[entiendo perfectamente por qué lo propones|teal]], y en otra situación [[a lo mejor|blue]] lo haría. Pero a estas alturas [[sería|blue]] un mensaje raro para el cliente, y tú conoces el proyecto mejor que nadie. [[Lo que sí podríamos hacer|blue]] es llevar juntos las próximas dos llamadas, y así no te toca a ti sola. Y una cosa, sin ningún drama: el correo del «no es posible» quedó [[un poquito|blue]] seco. [[Seguramente yo habría escrito algo parecido|teal]] con el cansancio de esa semana. [[No estaría de más|blue]] que la próxima vez lo dejaras reposar una hora antes de mandarlo, o que me lo pasaras a mí. Fuera de eso, el manejo del aforo fue impecable: tenías razón y lo argumentaste bien. Mañana lo platicamos con calma, [[¿te parece?|blue]] Un abrazo.',
            reply: { teacher: 'Tú eres Valeria y respondes a Rodrigo con una nota de voz: aceptas su propuesta, reconoces lo del correo y le haces una petición pequeña. Tu alumno es Rodrigo y comenta qué recursos has usado.', self: 'Graba la respuesta de Valeria: acepta la alternativa, reconoce lo del correo sin humillarte y pide algo pequeño con una pregunta. (Accept, acknowledge, ask.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decir lo difícil sin romper nada', coach: 'Firme en el contenido, cuidadoso con la persona. Firm on content, careful with people.',
      steps: [
        { title: 'Situaciones de riesgo · Risky situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de interlocutor en cada tarjeta y tu alumno responde durante uno o dos minutos. Si responde en seco, tú reaccionas como lo haría la otra persona y tu alumno repara la situación.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Usa al menos un recurso de dos colores distintos. (Use tools of at least two colours.)' } },
          { kind: 'talk', cards: [
            { q: 'Tu directora te pide que lleves un proyecto más este mes. Recházalo sin cerrar la puerta. · Turn down an extra project from your boss.', followUps: ['¿Qué alternativa le ofreces?', '¿Y si ella insiste?'], phrases: ['[[Gracias por pensar en mí|teal]], pero…', 'Ahora mismo no [[podría|blue]]…', '[[¿Te parece si…?|blue]]'], hint: 'Agradece, da una razón que proteja el trabajo y ofrece una alternativa concreta.', example: 'Gracias por pensar en mí, de verdad. Ahora mismo no podría darle a ese proyecto la atención que merece, porque el congreso me ocupa hasta finales de mes. ¿Te parece si empiezo en noviembre, o si lo lleva Julián y yo lo apoyo en las reuniones con el cliente?' },
            { q: 'En una reunión, un cliente propone algo que va a salir caro y mal. Discrepa. · Disagree with a client in a meeting.', followUps: ['¿Qué le concedes?', '¿Cómo presentas el riesgo?'], phrases: ['[[Entiendo su postura, pero|teal]]…', '[[Tiene razón en que|teal]]…, aunque…', '[[No estaría de más|blue]]…'], hint: 'Concede un punto concreto y presenta tu desacuerdo como un riesgo para el objetivo del cliente.', example: 'Tiene razón en que una sede en la playa sería más atractiva, aunque me preocupa el transporte: casi la mitad de los asistentes llega en avión a la ciudad. No estaría de más comparar las dos opciones con números antes de decidir.' },
            { q: 'Un compañero te enseña una presentación con varios problemas. Haz tus comentarios con tacto. · Give feedback on a colleague’s slides.', followUps: ['¿Por dónde empiezas?', '¿Cómo cierras?'], phrases: ['Me gusta mucho…', '[[Habría que|blue]]…', '[[¿Y si…?|blue]]', '[[Yo quizá probaría|blue]]…'], hint: 'Empieza por algo concreto que funciona, nombra el problema como hecho y conviértelo en propuesta.', example: 'Me gusta mucho cómo abres con el dato de asistentes; engancha. Habría que aligerar las diapositivas del presupuesto, porque hay demasiadas cifras juntas. ¿Y si pasamos la tabla al anexo y dejamos solo tres números? Yo quizá probaría también a cerrar con una pregunta para el cliente.' },
            { q: 'Recibes un correo hiperformal de alguien que siempre te tuteaba. Responde para bajar la tensión. · Reply to a suddenly cold email.', followUps: ['¿Vuelves al tú?', '¿Qué reconoces?'], phrases: ['[[Seguramente no me expliqué bien|teal]]…', '[[Tienes razón en que|teal]]…', '[[Lo que podríamos hacer|blue]]…'], hint: 'No respondas con la misma frialdad: vuelve al registro de antes, asume una parte y propón algo.', example: 'Hola, Elena: seguramente no me expliqué bien en el correo anterior, y siento que sonara tan seco. Tienes razón en que la terraza es lo mejor del hotel. Lo que podríamos hacer es abrirla para el cóctel y los postres. ¿Lo vemos en una llamada?' },
            { q: 'Tienes que quejarte a un proveedor que ha fallado dos veces, pero quieres seguir trabajando con él. · Complain to a supplier you want to keep.', followUps: ['¿Qué solución concreta pides?', '¿Cómo terminas?'], phrases: ['[[Le agradezco|teal]]…, pero…', '[[Me temo que|blue]]…', '[[¿Le parecería bien…?|blue]]'], hint: 'Describe los hechos sin adjetivos sobre la persona, pide una solución concreta y deja clara la voluntad de seguir.', example: 'Le agradezco la rapidez con que nos mandó los equipos de repuesto, pero me temo que es la segunda vez que fallan los proyectores en un ensayo. ¿Le parecería bien que revisáramos juntos todo el material el día anterior? Queremos seguir trabajando con ustedes, y por eso prefiero decírselo ahora.' },
            { q: '¿Se puede hablar de «culturas más directas» y «menos directas» sin caer en estereotipos? · Can we talk about direct cultures without stereotyping?', followUps: ['¿Qué factores pesan más que el país?', '¿Cómo te adaptas a un interlocutor nuevo?'], phrases: ['[[Puede que|teal]]…, aunque…', 'Una cosa es… y otra…', 'Yo diría que depende de…'], hint: 'Habla de tendencias, no de reglas; menciona edad, sector, relación y región.', example: 'Puede que haya tendencias, aunque yo desconfío de las etiquetas por país. Una cosa es que en un sector se escriban correos más breves, y otra que todo un país sea «directo». Yo diría que pesan más la relación y la empresa. Por eso, con alguien nuevo, me fijo en cómo escribe y me adapto.', next: 'Ahora, el cambio de papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú das una respuesta en seco a una de las tarjetas y tu alumno, como interlocutor ofendido, contesta con cortesía estratégica. Después tú reparas la situación.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿el mensaje llega entero? ¿La relación sale intacta? (Does the message arrive, and does the relationship survive?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un «no» que conserva al proveedor', coach: 'Firme en el dinero, amable con la persona. Firm on money, kind to people.',
      steps: [
        { title: 'Correo a Héctor Lugo · Email to the supplier', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el correo en voz alta y tú, como Héctor, dices cómo te ha sentado cada párrafo.', self: 'Escribe el correo y toca «Revisar mi texto». Después léelo como si fueras Héctor: ¿te sentirías atacado? (Read it as the supplier would.)' } },
          { kind: 'write', title: 'Rechazar un cargo y mantener la relación · Refuse a charge, keep the relationship', situation: 'En el ensayo general fallaron dos de los cuatro proyectores alquilados. Héctor Lugo, el proveedor audiovisual, mandó repuestos en una hora, pero después facturó un cargo extra de «servicio urgente». El contrato incluye la sustitución de equipos defectuosos. Valeria quiere seguir trabajando con él el año próximo. Escribe su correo (usted). (Refuse the extra charge in a formal email while keeping the supplier.)', task: [
            'Abre agradeciendo algo concreto y real.',
            'Rechaza el cargo por pasos: razón objetiva y alternativa, con al menos un condicional de cortesía.',
            'Salva la imagen de Héctor o de su equipo ante el error de la factura.',
            'Haz una recomendación atenuada para el congreso (no estaría de más…, convendría…).',
            'Mantén el usted de principio a fin y cierra dejando clara la voluntad de seguir trabajando juntos.',
          ], starters: ['Estimado Héctor:', 'Antes que nada, gracias por…', 'Entiendo que…, pero me temo que…', 'Seguramente…', '¿Le parecería bien…?', 'Queremos seguir trabajando con ustedes…'],
            words: ['me temo que', 'no podríamos', 'entiendo que', 'seguramente', 'le parecería bien', 'si lo prefiere', 'no estaría de más', 'quedo atenta'],
            model: 'Estimado Héctor:\nAntes que nada, gracias por mandar los proyectores de repuesto tan rápido el viernes; sin su equipo, el ensayo no habría podido continuar. Le escribo por la factura adicional de «servicio urgente». Entiendo que el envío supuso un esfuerzo extra para ustedes, pero me temo que no podríamos aceptar ese cargo: la sustitución fue necesaria porque dos de los cuatro proyectores contratados no encendieron, y el contrato incluye el cambio de equipos defectuosos. Seguramente la persona que preparó la factura no tenía ese dato, porque se trata de una situación poco habitual. ¿Le parecería bien enviarnos una factura corregida esta semana? Si lo prefiere, podríamos revisarla juntos en una llamada breve. No estaría de más, además, que antes del congreso se probaran todos los equipos en la sala. Queremos seguir trabajando con ustedes el año próximo, y por eso me parecía importante aclararlo cuanto antes. Quedo atenta a sus comentarios.\nUn cordial saludo,\nValeria Ochoa',
            minWords: 150,
            checks: [
              { label: 'Un agradecimiento', pattern: '(?<!\\p{L})(?:gracias|agradezco|agradecemos|agradecería|agradeceríamos)(?!\\p{L})', tip: 'Abre con algo que agradecer de verdad: «gracias por mandar los repuestos tan rápido».' },
              { label: 'Un condicional de cortesía', pattern: '(?<!\\p{L})(?:podría|podríamos|podrían|sería|serían|parecería|gustaría|agradecería|agradeceríamos|convendría|estaría)(?!\\p{L})', tip: 'Aleja el rechazo o la petición: «no podríamos aceptar», «¿le parecería bien…?».' },
              { label: 'Una alternativa o salida', pattern: '(?<!\\p{L})(?:podríamos|si lo prefiere|qué le parece|le parecería|como alternativa|otra opción|lo que sí)(?!\\p{L})', tip: 'Ofrece algo: «Si lo prefiere, podríamos revisarla juntos».' },
              { label: 'Algo que salve la imagen del otro', pattern: '(?<!\\p{L})(?:seguramente|quizá|quizás|tal vez|entiendo que|es comprensible|es normal)(?!\\p{L})', tip: 'Atribuye el error a una causa neutra: «Seguramente la persona que preparó la factura no tenía ese dato».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:te|ti|contigo|tus)(?!\\p{L})', why: 'Parece que has pasado al tú: el correo es de usted de principio a fin.' },
              { pattern: '(?<!\\p{L})no es posible\\.', why: '«No es posible.» en seco es justo el correo que tensó el hilo: añade razón y alternativa.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'EL ACTO Y SU PESO', formula: 'pedir · rechazar · criticar · discrepar · quejarse · peso = distancia + poder + imposición', example: 'No es posible. (en seco, con mucho peso: la conversación se tensa)', caption: 'Cuanto más pesa el acto, más recursos combinas.', en: 'The heavier the act, the more strategies you combine.' },
            { tone: 'blue', label: 'ATENUACIÓN GRAMATICAL', formula: 'condicional · imperfecto · pregunta · se / habría que · plural de modestia · diminutivo · a lo mejor', example: 'No estaría de más revisar la decisión.', caption: 'Dos o tres recursos; más, y el mensaje se pierde.', en: 'Two or three tools; more and the message gets lost.' },
            { tone: 'teal', label: 'CUIDAR LA IMAGEN', formula: 'gracias + razón + alternativa · entiendo tu postura, pero… · seguramente me expliqué mal', example: 'Seguramente no nos explicamos bien; lo que podríamos hacer es…', caption: 'El mensaje llega entero; la persona sale bien parada.', en: 'The message gets through whole and the other person keeps face.' },
            { tone: 'violet', label: 'CORTESÍA ESTRATÉGICA', formula: 'usted repentino · Estimada Sra. … · como ya le indiqué · agradecimiento excesivo', example: 'Le agradezco enormemente la rapidez con que ha descartado nuestra propuesta.', caption: 'Más cortesía de la esperada = distancia o ironía. Respóndela bajando la tensión.', en: 'More politeness than expected signals distance or irony; answer it by lowering the tension.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Antes de enviar algo delicado, pregúntate: **¿qué imagen amenazo y cuánto pesa?** Después elige la dosis: un recurso para lo leve, una secuencia completa para lo grave. Y si el otro sube la cortesía de golpe, no le sigas: **bájala tú**.', en: 'Before sending anything delicate, ask whose face you threaten and how heavy the act is, then choose the dose. If the other person suddenly turns formal, don’t follow them up; bring it back down.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: '¿Qué rechazo está completo?', options: ['Gracias, pero no.', 'Te lo agradezco mucho; ese día tengo una entrega. ¿Lo dejamos para el viernes?', 'Imposible, lo siento.'], answer: 1, why: 'Agradecimiento, razón y alternativa.', en: 'Thanks, reason, alternative.' },
            { prompt: '¿Te importaría ___ la puerta?', options: ['de cerrar', 'cerrar', 'que cierras'], answer: 1, why: '«Importar» + infinitivo, sin preposición.', en: 'Would you mind closing the door?' },
            { prompt: 'Puede que ___ razón, pero no hay presupuesto.', options: ['tengas', 'tendrías', 'tienes'], answer: 0, why: '«Puede que» + subjuntivo.', en: 'You may be right, but there is no budget.' },
            { prompt: 'Un colega que te tutea escribe de repente «Estimado Sr. Ruiz: como ya le indiqué…». ¿Qué señala?', options: ['Malestar y distancia.', 'Más confianza.', 'Nada especial.'], answer: 0, why: 'El cambio de registro y el recordatorio son cortesía estratégica: marcan distancia.', en: 'A sudden switch to usted and a pointed reminder.' },
            { prompt: '¿Qué frase salva la imagen del otro?', options: ['Seguramente no lo dejé claro en mi correo.', 'Ya te lo expliqué en mi correo.', 'No entendiste mi correo.'], answer: 0, why: 'Quien habla asume el malentendido y el otro no queda mal.', en: 'The speaker takes the blame.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otra relación, la misma lógica. New relationship, same logic.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: la universidad. Tu alumno reescribe cada mensaje y explica qué imagen protege.', self: 'Ahora, en la universidad: reescribe cada mensaje según la instrucción. (University setting.)' } },
          { kind: 'rewrite', title: 'Mensajes en la facultad · Messages at university', items: [
            { prompt: 'A tu directora de tesis: «Necesito más tiempo para el capítulo tres».', instruction: 'Usa el imperfecto de cortesía: empieza por «Quería pedirle».', accept: ['Quería pedirle más tiempo para el capítulo tres'] },
            { prompt: 'A un compañero de grupo: «Tu parte del trabajo tiene errores».', instruction: 'Impersonaliza: «Habría que revisar» + la parte del trabajo.', accept: ['Habría que revisar tu parte del trabajo', 'Habría que revisar la parte del trabajo'] },
            { prompt: 'Al coordinador del máster: «Usted no puso la fecha del examen en el aviso».', instruction: 'Salva su imagen con «Quizá se me pasó» + «la fecha del examen en el aviso».', accept: ['Quizá se me pasó la fecha del examen en el aviso', 'Quizás se me pasó la fecha del examen en el aviso'] },
          ] },
        ] },
        { title: 'Ampliación · Cortesía que refuerza y rechazos rituales', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** No toda la cortesía atenúa: a veces **intensifica** para reforzar la imagen positiva del otro. Es la **cortesía valorizadora**: elogios («¡Qué idea tan buena!»), agradecimientos enfáticos, ofrecimientos insistentes («Quédate a cenar, de verdad, que hay de sobra»). **2.** En muchas comunidades hispanohablantes, una invitación o un ofrecimiento se rechazan primero por cortesía y se aceptan después de la insistencia: el primer «no» puede ser **ritual**. Es una tendencia, no una regla, y varía entre personas y situaciones; ante la duda, una segunda pregunta aclara. **3.** Por eso un elogio exagerado en el momento inadecuado puede leerse como **ironía**, el tema de la próxima clase.', en: 'For strong students or spare time. Politeness can also be intensified to boost the other person’s positive face: compliments, emphatic thanks, insistent offers. In many Spanish-speaking settings a first refusal of an invitation may be ritual, and insistence is part of the exchange; this is a tendency that varies by person and situation. When praise does not fit the context, it can tip into irony.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: 'Tu anfitriona insiste: «Llévate un poco de pastel, de verdad». Tú dices «No, gracias, no hace falta» y ella vuelve a insistir. ¿Qué está pasando?', options: ['Puede ser un intercambio ritual: la insistencia muestra generosidad y tu primer «no», modestia.', 'Tu anfitriona no te ha entendido.', 'Es una falta de respeto.'], answer: 0, why: 'La insistencia en un ofrecimiento es cortesía valorizadora; el primer rechazo puede ser ritual. El contexto decide.', en: 'Insistence as generosity; a first “no” as modesty.' },
            { prompt: '¿Qué frase es cortesía valorizadora y no atenuadora?', options: ['Habría que revisarlo.', '¿Podrías revisarlo?', '¡Qué presentación tan clara! Se nota el trabajo.'], answer: 2, why: 'El elogio refuerza la imagen positiva del otro; no suaviza ningún acto que amenace.', en: 'Praise strengthens face rather than softening a threat.' },
            { prompt: 'Tras un informe lleno de errores, un jefe dice: «¡Qué trabajo tan impecable!». ¿Qué ocurre?', options: ['Es un elogio sincero.', 'Es una pregunta.', 'El elogio choca con los hechos: se interpreta como ironía.'], answer: 2, why: 'La cortesía valorizadora fuera de lugar se vuelve irónica: lo verás en la clase siguiente.', en: 'Misplaced praise reads as irony.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta una situación en la que un «no» se entendió como «sí» o al revés, y la analiza con los conceptos de hoy.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 223 · Ironía, litotes y negación pragmática', text: 'Hoy has visto cómo la cortesía protege la imagen y cómo, llevada al extremo, se convierte en distancia o en ironía. En la clase 223 entras de lleno en ese terreno: la **ironía**, las **litotes** («No es precisamente un genio de la puntualidad») y la negación que dice más de lo que niega.', en: 'Today you saw how politeness protects face and how, pushed too far, it turns into distance or irony. Class 223 goes straight into that territory: irony, litotes and negation that says more than it denies.', href: '/gramatica/ironia-litotes-y-negacion-pragmatica', label: 'Ir a la clase 223' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué el correo 2 y el correo 4 dicen lo mismo y tienen efectos opuestos?». Respuesta esperada: los dos rechazan, pero el 2 agradece, razona y ofrece alternativa; el 4 niega en seco y suena a reproche. Tarea: el correo de Escribir.' },
        ] },
      ],
    },
  ],
};
