# «El taller de la greda» · B1 · Conversación (authored content, DRAFT)

- **Unit:** new board world, single level B1, PRO. Concept: [concepts/2026-11-16-boyaca-taller-de-la-greda.md](../concepts/2026-11-16-boyaca-taller-de-la-greda.md) (S1, selected 2 of 3).
- **Author:** Martin (CLRQO), 2026-11-23, Monday 3D routine, W48 plan item 1 (content half). **Builder:** Sofia, later slot. **G4 reviewer:** Alejandro or a fresh agent, never Martin.
- **Listening (Comprensión auditiva):** `app/escucha-3d/content/taller/b1.json`, one item per circle, same circle ids. This file is the **Conversación** mode of the same world: both modes live in the one 3D world and switch with the shared `ModeSwitch` (AGENTS.md, 3D-world rule).
- **LQG draft:** [docs/audits/taller-greda-b1-lqg-20261123.md](../../audits/taller-greda-b1-lqg-20261123.md).
- **Nothing here is built or shipped.** Sofia turns this file into `levels/b1.mjs` data in the Feria house style (`app/la-feria-de-villaluz/levels/a2.mjs`: `objective`, `related`, `exponents`, `beats` with `kind: contrast | stimulus`, `talk`, `words`, `teacher`). The shape below maps to those fields one to one.

## 0. World frame

**Setting.** «Taller La Greda», a fictional family pottery workshop in a pottery town in the Boyacá highlands of Colombia. The town is never named in the content (see §10). A restaurant in Bogotá orders tableware for its second branch. The order changes as it moves through the workshop, and the messages about it travel from person to person. The world is a business with a client, a deadline, an advance payment, a sample and transport. It is never "exotic craft": no folkloric décor, no costumes, no tourist framing.

**Main mechanic: «El recado viaja».** In each circle a character gives the student (the workshop's new helper) a message for someone at another station. The student walks it there and relays it. The contrast beat at the receiving circle asks the class to choose the faithful report. A correctly delivered message moves the physical order one station along the line: clay → wheel → drying room → kiln → glaze → office → crate. The prop states are Sofia's (concept §5.4: about 5 toggles).

**Student role.** «Eres la persona nueva del taller. Ayudas en todo y llevas los recados.» The student is addressed with **tú** by everyone in the workshop. Valentina and Andrés (clients) speak **usted** to Marina and to the student; the class answers them in usted.

**Cast** (one voice per character for the whole world; voices are identity only, audio is Emma for women and Florian for men since 2026-11-13, so no accent is claimed):

| Key | Name | Role | Voice id | Country | Gender | Listening clips |
|---|---|---|---|---|---|---|
| marina | Marina | dueña del taller, ceramista | es-CO-SalomeNeural | Colombia | f | greda, horno, oficina, patio |
| gonzalo | Gonzalo | tornero, hermano de Marina | es-CO-GonzaloNeural | Colombia | m | mostrador, torno |
| paola | Paola | aprendiz de segundo año, esmaltes | es-VE-PaolaNeural | Venezuela | f | torno, esmaltes |
| emilio | Emilio | encargado del secadero y del horno | es-DO-EmilioNeural | República Dominicana | m | secadero, horno, esmaltes |
| valentina | Valentina | dueña del restaurante de Bogotá (clienta) | es-UY-ValentinaNeural | Uruguay | f | mostrador |
| andres | Andrés | chef del restaurante de Valentina | es-GT-AndresNeural | Guatemala | m | oficina |
| roberto | Roberto | transportista | es-PA-RobertoNeural | Panamá | m | patio |

Six countries (concept condition §6.1: the two es-CO voices stay, and the chef Andrés is the added seventh character). Nationality is incidental and never a theme: Paola, Emilio, Valentina, Andrés and Roberto simply live and work in Colombia.

**Objectives (G1).** One primary per circle, every id VERIFIED by grep in `app/autoestudio/curriculum/objectives/b1.ts` (line numbers on main at branch base):

| # | Circle id | Primary objective | b1.ts line |
|---|---|---|---|
| 1 | mostrador | `b1.fun.w07-pedir-requisitos` | 79 |
| 2 | greda | `b1.voc.w16-taller-artesania` | 167 |
| 3 | torno | `b1.gram.g118` | 165 |
| 4 | secadero | `b1.gram.g119` | 166 |
| 5 | horno | `b1.spk.w16-contar-conversacion` | 172 |
| 6 | esmaltes | `b1.lis.w16-encargo-taller` | 169 |
| 7 | oficina | `b1.wri.w16-correo-reunion` | 171 |
| 8 | patio (closing) | `b1.fun.w16-transmitir-mensajes` (**world primary**) | 173 |

Related ids used below, all VERIFIED: `b1.disc.w16-voces-y-procesos` (174), `b1.read.w16-como-se-hace` (170), `b1.pron.w16-pregunta-referida` (168), `b1.gram.g099` (71), `b1.gram.g100` (72).

**Where the forbidden contrasts live (concept §5.3, §6.4; BOARD-DECISION-006 §3.3).** The g118 contrasts that turn on one sound (mood in reported speech: «dice que lo trae / dice que lo traiga»; tense backshift on one vowel; «preguntó si» against a direct question, which is intonation) are **never** listening items. They are produced and labelled here, as written text the class reads and chooses. Every beat below is labelled «Contraste lingüístico» (with its exponent) or «Estímulo de conversación» (BOARD-DECISION-001 N1).

**`b1.pron.w16-pregunta-referida` is related only, never claimed.** The mode is text: nothing in it scores intonation. Circle 3 has a teacher-led choral moment for it (marked as such); no metadata or guide may claim the world practises that pronunciation objective.

**Language.** Neutral international Spanish, tú. No voseo (Valentina is Uruguayan by voice only). No regional particles in any line that is voiced (R4). Regional words appear only as taught exemplars in teacher notes (§10). First-person preterites that the neutral guard flags (pedí, decidí, entendí…) are avoided in the student's lines.

---

## 1. `mostrador` · «Un recado para Marina»

- **Place:** el mostrador del taller, con el teléfono fijo y un cuaderno de pedidos.
- **Characters:** Gonzalo (on stage), Valentina (on the phone, speaker).
- **Primary:** `b1.fun.w07-pedir-requisitos`. Related: `b1.gram.g100`, `b1.gram.g099`.
- **Exponents (G1, 4):**
  - `busco-que`: «Busco / necesito + algo que + subjuntivo» (requisito de algo que todavía no existe): «necesito platos que aguanten el lavaplatos».
  - `para-que`: «para que + subjuntivo» (finalidad con otro sujeto): «para que usted vea el color».
  - `que-sean`: «Que sean / que tengan…» (requisito abreviado al teléfono).
  - `apuntar-recado`: «¿Le dejo algún recado? / Le doy el mensaje apenas llegue».
- **Communicative task:** Marina no está. Tú contestas el teléfono con Gonzalo, anotas qué quiere la clienta y para qué, y después le dejas el recado a Marina por escrito.
- **Scene line:** «Es lunes, ocho de la mañana. Marina salió temprano al mercado. Suena el teléfono del taller y Gonzalo, con las manos llenas de barro, te pide que contestes tú.»
- **Dialogue (shown before the beats):**
  - gonzalo: «Contesta tú, porfa, que yo tengo las manos así. Y apunta todo, que Marina luego pregunta.»
  - valentina: «Buenos días. Tengo un restaurante en Bogotá y vamos a abrir otro local. Necesito una vajilla completa.»
  - gonzalo (bajito): «Pregúntale cómo la quiere. Y para cuándo.»

**Beats**

1. **`requisito` · Contraste lingüístico · exponent `busco-que`** · who: valentina
   - context: «Valentina explica lo que busca. Tú lo repites para confirmarlo.»
   - prompt: «Confirma el requisito más importante de la clienta.»
   - options:
     - ✔ «Entonces usted necesita platos que aguanten el lavaplatos, ¿verdad?» → feedback: «Bien: los platos todavía no existen, por eso "que aguanten", en subjuntivo.»
     - ✘ «Entonces usted necesita platos que aguantan el lavaplatos, ¿verdad?» · feature: *modo en la relativa* → «Modo en la relativa: "que aguantan" habla de unos platos que ya conoces. Estos todavía hay que hacerlos: "que aguanten".»
     - ✘ «Entonces usted necesita platos para aguantar el lavaplatos, ¿verdad?» · feature: *requisito o finalidad* → «Requisito o finalidad: "para aguantar" dice para qué los quiere ella, no cómo tienen que ser los platos.»
   - after: «Valentina: "Exacto. En la cocina no hay tiempo para lavar a mano."»
2. **`muestra` · Contraste lingüístico · exponent `para-que`** · who: valentina
   - context: «Gonzalo te dice al oído: "Dile que primero mandamos una muestra."»
   - prompt: «Explícale a la clienta para qué sirve la muestra.»
   - options:
     - ✘ «Primero le mandamos una muestra para ver usted el color.» · feature: *sujeto distinto* → «Sujeto distinto: mandas tú y mira ella. Con dos sujetos va "para que" + subjuntivo.»
     - ✔ «Primero le mandamos una muestra para que usted vea el color y el peso.» → «Bien: "para que usted vea", otro sujeto, subjuntivo.»
     - ✘ «Primero le mandamos una muestra para que usted ve el color y el peso.» · feature: *modo después de "para que"* → «Modo: después de "para que" siempre va subjuntivo: "vea", no "ve".»
   - after: «Valentina: "Perfecto. Que me la manden esta semana, si se puede."»
3. **`valentina` · Estímulo de conversación** · who: valentina
   - ask: «Valentina pregunta: "¿Y ustedes hacen piezas con el nombre del restaurante?"» (Marina no lo sabe todavía; tú decides qué contestar.)
   - options (say / reply / end):
     - say «No lo sé, pero se lo pregunto a Marina y la llamamos.» · reply «Muy bien, mejor así.» · end «Anotas la pregunta en el cuaderno, con un signo de interrogación grande.»
     - say «Sí, claro, hacemos de todo.» · reply «¡Qué bien! Entonces quiero el logo en cada taza.» · end «Gonzalo te mira con cara de "¿y ahora quién hace cuarenta logos?".»
     - say «Creo que no, pero ¿para qué lo necesita?» · reply «Para que los clientes se acuerden del lugar.» · end «Anotas la idea para Marina: no prometiste nada.»
   - teacher: «No hay respuesta correcta. Pregunta a la clase cuál es la opción más profesional y por qué: prometer algo que no depende de ti tiene consecuencias.»
- **Hand-off (El recado viaja):** Gonzalo: «Llévale el cuaderno a Paola, a la mesa de la greda. Marina le va a mandar un audio.» Prop: the order book moves to the clay table.
- **Talk (5):**
  1. «¿Qué es lo más importante para ti cuando compras algo para tu casa?»
  2. «¿Alguna vez encargaste algo hecho a medida? ¿Cómo explicaste lo que querías?»
  3. «¿Prefieres hablar por teléfono o escribir cuando haces un pedido? ¿Por qué?»
  4. «¿Qué haces cuando contestas un teléfono que no es tuyo?»
  5. «Si tuvieras un restaurante, ¿qué tipo de platos buscarías?»
- **Words (6):** la vajilla, el recado, la muestra, aguantar, el lavaplatos (o lavavajillas), color tierra.
- **Scaffolding (B1):** on the board before the circle: «Necesito algo **que** + subjuntivo» / «Lo mando **para que** usted + subjuntivo». A frame card for the recado: «Llamó ___. Dijo que ___. Quiere que ___.»
- **Teacher note:** «Antes de empezar, pregunta: ¿qué datos anotas cuando tomas un recado? (quién, qué, para qué, para cuándo, cómo contactarla). Después del círculo, cada pareja escribe el recado para Marina en tres líneas con el marco de la tarjeta. Es el primer recado del mundo: no corrijas todavía los tiempos del estilo indirecto, solo que esté completo.»
- **Listening of this circle:** phone call Valentina + Gonzalo (stimulus for the whole world's order).

## 2. `greda` · «Un audio desde la carretera»

- **Place:** la mesa de la greda, con sacos, una mesa de amasar y un rincón con piezas tapadas con plástico.
- **Characters:** Paola (on stage); Marina by voice note.
- **Primary:** `b1.voc.w16-taller-artesania`. Related: `b1.read.w16-como-se-hace`.
- **Exponents (G1, 5):** `greda-barro` (la greda, el barro), `amasar`, `torno`, `muestra-anticipo` (la muestra, el anticipo), `plazo-envio` (el plazo de entrega, el envío).
- **Communicative task:** Paola y tú escuchan el audio de Marina y ordenan las tareas de la tarde. Usan el vocabulario del taller para explicar qué hay que hacer y en qué orden.
- **Scene line:** «Paola tiene el teléfono en la mano: "Escucha esto conmigo, que Marina habla rapidísimo."»

**Beats**

1. **`palabra` · Contraste lingüístico · exponent `greda-barro`** · who: paola
   - context: «Paola: "¿Cómo le explico a la gente de Bogotá qué es la greda?"»
   - prompt: «Elige la mejor explicación.»
   - options:
     - ✔ «Es la tierra arcillosa con la que hacemos las piezas: el barro antes de trabajarlo.» → «Bien: explicas una palabra local con palabras generales.»
     - ✘ «Es la pintura brillante que se pone al final.» · feature: *significado* → «Significado: eso es el esmalte. La greda es la materia prima.»
     - ✘ «Es la máquina que gira para dar forma.» · feature: *significado* → «Significado: eso es el torno.»
2. **`orden` · Contraste lingüístico · exponent `amasar`** · who: paola
   - context: «Paola anota las tareas en un papel, pero se equivoca de orden.»
   - prompt: «Elige el orden correcto del trabajo con la greda.»
   - options:
     - ✘ «Primero se lleva al torno, después se amasa y al final se moja.» · feature: *secuencia del proceso* → «Secuencia: la greda no se tornea sin amasar. Primero se revisa la humedad y se amasa.»
     - ✘ «Primero se esmalta, después se amasa y al final se tornea.» · feature: *secuencia del proceso* → «Secuencia: el esmalte va al final, sobre la pieza ya quemada una vez.»
     - ✔ «Primero se revisa que no esté seca, después se amasa y al final se hacen bolas para el torno.» → «Bien: humedad, amasado, bolas para el torno.»
3. **`paola` · Estímulo de conversación** · who: paola
   - ask: «Paola: "Llevo dos años aquí y todavía me cuesta el torno. ¿Tú qué preferirías aprender primero?"»
   - frames (open reply): «Preferiría aprender ___ porque ___.» / «A mí me daría miedo ___.» / «Yo empezaría por ___.»
   - teacher: «Respuesta libre. Pide una razón con "porque" y una palabra del taller.»
- **Hand-off:** Paola: «Llévale estas seis bolas a Gonzalo y pregúntale qué dijo exactamente la clienta. Marina me dejó con dudas.» Prop: clay balls move to the wheel.
- **Talk (5):**
  1. «¿Mandas audios largos o cortos? ¿Qué te molesta de los audios de otras personas?»
  2. «¿Hay en tu ciudad un oficio artesanal conocido? ¿Cuál?»
  3. «¿Qué cosas de tu casa están hechas a mano?»
  4. «¿Qué es más difícil para ti: seguir instrucciones orales o escritas?»
  5. «¿Te gustaría trabajar con las manos? ¿En qué?»
- **Words (6):** la greda, el barro, amasar, el torno, el horno, el plástico.
- **Scaffolding:** a picture strip of the process (greda → amasar → torno → secadero → horno → esmalte → horno) without words; the class labels it. Glossary from the listening.
- **Teacher note:** «"Greda" es la palabra que usa el taller; "arcilla" y "barro" son las generales. En Colombia también se oye "greda" fuera del taller (HYPOTHESIS de uso, ver §10). Ojo: "torno" y "horno" se parecen mucho al oído; pide que los pronuncien con la mano en la garganta (la t no vibra). Esa pareja no se usa nunca como respuesta en la escucha.»
- **Listening:** Marina's voice note (single voice; it is the seed clip of the STT gate).

## 3. `torno` · «¿Qué dijo exactamente?»

- **Place:** el torno de Gonzalo, con platos frescos en una tabla.
- **Characters:** Gonzalo (on stage), Paola (arrives).
- **Primary:** `b1.gram.g118`. Related: `b1.pron.w16-pregunta-referida` (teacher-led only), `b1.disc.w16-voces-y-procesos`.
- **Exponents (G1, 5):**
  - `dijo-que-imperfecto`: «dijo que + imperfecto» (presente → imperfecto): «quiero» → «dijo que quería».
  - `dijo-que-pluscuamperfecto`: «dijo que + pluscuamperfecto» (pasado → pluscuamperfecto): «vi su página» → «dijo que había visto».
  - `pregunto-si`: «preguntó si…» (pregunta sí/no) frente a «preguntó cuándo / cuánto…».
  - `pidio-que-subjuntivo`: «pidió que + imperfecto de subjuntivo»: «mándenme» → «pidió que le mandáramos».
  - `dice-que-modo`: «dice que + indicativo» (información) frente a «dice que + subjuntivo» (petición).
- **Communicative task:** Gonzalo cuenta la llamada de la mañana. Tú le haces preguntas y después le cuentas a Paola, sin cambiar el sentido, lo que dijo, preguntó y pidió la clienta.
- **Scene line:** «Gonzalo no para el torno mientras habla. Paola llega con el cuaderno del mostrador.»
- **Dialogue:**
  - gonzalo: «La señora habló como diez minutos. Lo importante: platos hondos, planos y tazas, color tierra.»
  - paola: «¿Y qué preguntó? Marina va a querer saberlo todo.»

**Beats** (the core contrast circle of the world)

1. **`informa-o-pide` · Contraste lingüístico · exponent `dice-que-modo`** · who: gonzalo
   - context: «La clienta, por teléfono: "Les traigo yo las fotos del local." Paola pregunta: "¿Qué dice?"»
   - prompt: «Cuéntale a Paola lo que dice la clienta.»
   - options:
     - ✔ «Dice que nos trae ella las fotos del local.» → «Bien: es una información, por eso indicativo: "trae".»
     - ✘ «Dice que le traigamos las fotos del local.» · feature: *información o petición* → «Información o petición: "que le traigamos" sería una petición, y ella no pidió nada: ofreció traerlas.»
     - ✘ «Dice que nos traiga ella las fotos del local.» · feature: *modo en el estilo indirecto* → «Modo: "decir que" + subjuntivo convierte la frase en una orden. Ella informa: "trae".»
   - after: «Paola: "Ah, bueno, entonces no hay que pedírselas."»
2. **`pidio-que` · Contraste lingüístico · exponent `pidio-que-subjuntivo`** · who: gonzalo
   - context: «Esta vez la clienta dijo: "Mándenme una muestra esta semana, por favor."»
   - prompt: «Cuéntale a Paola, en pasado, lo que pidió la clienta.»
   - options:
     - ✘ «Pidió que le mandamos una muestra esta semana.» · feature: *modo después de "pedir que"* → «Modo: "pedir que" siempre lleva subjuntivo. En pasado: "que le mandáramos".»
     - ✘ «Pidió que le mandemos una muestra la semana pasada.» · feature: *referencia de tiempo* → «Referencia de tiempo: "esta semana" no se vuelve "la semana pasada". Si lo cuentas el mismo día, sigue siendo "esta semana".»
     - ✔ «Pidió que le mandáramos una muestra esta semana.» → «Bien: "pidió que" + imperfecto de subjuntivo. Y "esta semana" no cambia porque lo cuentas la misma semana.»
   - after: «Paola: "Esta semana… Uy. El horno grande está lleno."»
3. **`pregunto-si` · Contraste lingüístico · exponent `pregunto-si`** · who: paola
   - context: «La clienta preguntó: "¿Pueden entregar todo antes de la inauguración?"»
   - prompt: «Cuéntale a Paola la pregunta de la clienta.»
   - options:
     - ✘ «Preguntó que podemos entregar todo antes de la inauguración.» · feature: *pregunta sí/no contada* → «Pregunta sí/no: se cuenta con "si", no con "que".»
     - ✔ «Preguntó si podíamos entregar todo antes de la inauguración.» → «Bien: "preguntó si" + imperfecto ("podemos" → "podíamos").»
     - ✘ «Preguntó cuándo podíamos entregar todo antes de la inauguración.» · feature: *tipo de pregunta* → «Tipo de pregunta: ella no preguntó "cuándo"; preguntó sí o no. "Cuándo" cambia la pregunta.»
   - after: «Gonzalo: "Eso. Y yo le dije que eso lo decide Marina."»
   - teacher (choral, not scored): «Momento de pronunciación guiado por ti (`b1.pron.w16-pregunta-referida`, relacionado, no evaluado por la aplicación): la clase dice la pregunta directa con el tono que sube y la contada con el tono que baja. La aplicación no puede comprobarlo.»
4. **`dijo-que` · Contraste lingüístico · exponent `dijo-que-imperfecto`, `dijo-que-pluscuamperfecto`** · who: gonzalo
   - context: «La clienta dijo: "Vi sus platos en una feria y me encantaron."»
   - prompt: «Cuéntaselo a Paola.»
   - options:
     - ✔ «Dijo que había visto nuestros platos en una feria y que le habían encantado.» → «Bien: pasado → pluscuamperfecto, y "sus platos" → "nuestros platos" porque ahora habla alguien del taller.»
     - ✘ «Dijo que había visto sus platos en una feria y que le habían encantado.» · feature: *cambio de persona* → «Cambio de persona: "sus platos" era la clienta hablándole al taller. Contado desde el taller son "nuestros platos".»
     - ✘ «Dijo que verá nuestros platos en una feria y que le encantarán.» · feature: *tiempo verbal* → «Tiempo: ella habló del pasado ("vi"). En el relato va pluscuamperfecto, no futuro.»
5. **`gonzalo` · Estímulo de conversación** · who: gonzalo
   - ask: «Gonzalo: "Yo solo hago platos. ¿A ti te gusta llevar recados o te pone nervioso?"»
   - options:
     - say «Me gusta, pero siempre lo apunto, porque se me olvidan los detalles.» · reply «Eso hacía yo de joven. Ahora Marina me lo apunta a mí.» · end «Gonzalo se ríe y casi deforma un plato.» · mood laugh
     - say «Me pone nervioso cambiar algo sin querer.» · reply «Por eso hay que preguntar: "¿Qué dijo exactamente?"» · end «Gonzalo te enseña su truco: repetir el recado antes de irse.» · mood surprised
     - say «Prefiero que la gente se hable directamente.» · reply «Ojalá. Aquí nadie contesta el teléfono.» · end «Suena el teléfono del mostrador. Nadie lo contesta.» · mood laugh
   - teacher: «No hay respuesta correcta.»
- **Hand-off:** Paola: «Llévale esta tabla de platos a Emilio, al secadero, y pregúntale si nos deja espacio en el horno pequeño.» Prop: plates move to the drying room.
- **Talk (5):**
  1. «Cuenta un recado que alguien te dejó y que llegó cambiado. ¿Qué cambió?»
  2. «¿Qué te preguntó alguien esta semana? Cuéntalo con "me preguntó si…" o "me preguntó qué…".»
  3. «¿Qué te pidió tu familia o tu jefe la última vez? Cuéntalo con "me pidió que…".»
  4. «¿Qué palabras cambian cuando cuentas lo que dijo otra persona? Da un ejemplo.»
  5. «¿Es fácil para ti repetir un mensaje sin cambiar el sentido? ¿Por qué?»
- **Words (6):** dijo que…, preguntó si…, pidió que…, la inauguración, exactamente, el sentido.
- **Scaffolding:** a backshift table on the board (presente → imperfecto; pasado → pluscuamperfecto; futuro → condicional; imperativo → «pidió que» + imperfecto de subjuntivo) and a deixis row (aquí → allí; esta semana → esa semana, *only if told later*; yo → él / ella; mi / su → su / nuestro).
- **Teacher note:** «Este es el círculo de gramática del mundo (g118). Los cuatro contrastes van de lo más frecuente a lo más difícil: informar o pedir, pedir que + subjuntivo, preguntar si, y el pluscuamperfecto con cambio de persona. Si la clase falla el primero, para y haz tres ejemplos orales: "Dice que viene" / "Dice que vengas". En la escucha de este círculo no hay ninguna pregunta que dependa del modo ni de la entonación: esas diferencias se practican aquí, por escrito.»
- **Listening:** Gonzalo + Paola (cross-gender); item 4 is the only who-said-what item of the file.

## 4. `secadero` · «Despacio, que se raja»

- **Place:** el secadero, con estantes de madera, piezas tapadas y una caja de piezas con grietas.
- **Characters:** Emilio.
- **Primary:** `b1.gram.g119`. Related: `b1.read.w16-como-se-hace`, `b1.disc.w16-voces-y-procesos`.
- **Exponents (G1, 4):**
  - `se-pasiva-plural`: «se + verbo en plural con cosa plural»: «se dejan las piezas».
  - `se-pasiva-singular`: «se + verbo en singular con cosa singular»: «se revisa cada plato».
  - `se-impersonal`: «se + verbo en singular sin cosa»: «aquí no se entra con comida».
  - `uno-dicen`: alternativas «uno» / «dicen que».
- **Communicative task:** Emilio te explica cómo se secan las piezas. Después tú le explicas el proceso a una persona que visita el taller, sin decir quién hace cada cosa.
- **Scene line:** «Huele a tierra mojada. Emilio levanta un plástico con cuidado: "Aquí nada se apura."»

**Beats**

1. **`concordancia` · Contraste lingüístico · exponent `se-pasiva-plural`** · who: emilio
   - context: «Una visitante pregunta: "¿Y cuánto tiempo están aquí las piezas?"»
   - prompt: «Explícale el primer paso.»
   - options:
     - ✘ «Se deja las piezas unos días lejos de la ventana.» · feature: *concordancia con "se"* → «Concordancia: la cosa es plural ("las piezas"), así que el verbo va en plural: "se dejan".»
     - ✔ «Se dejan las piezas unos días lejos de la ventana.» → «Bien: "se dejan las piezas", el verbo concuerda con la cosa.»
     - ✘ «Se dejan a las piezas unos días lejos de la ventana.» · feature: *"a" con cosas* → «"a" con cosas: "se + verbo + a" se usa con personas concretas ("se busca a los dueños"), no con piezas.»
2. **`impersonal` · Contraste lingüístico · exponent `se-impersonal`** · who: emilio
   - context: «La visitante quiere entrar con un café.»
   - prompt: «Dile la regla del secadero sin decir quién la puso.»
   - options:
     - ✔ «Perdón, aquí no se entra con comida ni bebida.» → «Bien: "se entra", impersonal, en singular porque no hay cosa.»
     - ✘ «Perdón, aquí no se entran con comida ni bebida.» · feature: *singular sin cosa* → «Singular: no hay una cosa que concuerde; con "se" impersonal el verbo va en singular.»
     - ✘ «Perdón, aquí usted no entra con comida ni bebida.» · feature: *proceso o persona* → «Proceso o persona: es correcto, pero suena a orden personal. La regla es para todos: "no se entra".»
3. **`uno` · Contraste lingüístico · exponent `uno-dicen`** · who: emilio
   - context: «Emilio: "Dile cómo se sabe que una pieza está seca, como lo diría cualquiera."»
   - prompt: «Elige la frase con el mismo sentido que "se sabe que está seca cuando cambia de color".»
   - options:
     - ✘ «Uno sabes que está seca cuando cambia de color.» · feature: *persona con "uno"* → «Persona: "uno" va con el verbo en tercera persona: "uno sabe".»
     - ✘ «Dice que está seca cuando cambia de color.» · feature: *"dice" o "dicen"* → «"dice" habla de una persona concreta; la idea general es "dicen" o "uno sabe".»
     - ✔ «Uno sabe que está seca cuando cambia de color.» → «Bien: "uno" + tercera persona es otra forma de hablar en general.»
4. **`emilio` · Estímulo de conversación** · who: emilio
   - ask: «Emilio: "En mi trabajo lo más importante es la paciencia. ¿Y en el tuyo?"»
   - frames: «En mi trabajo lo más importante es ___.» / «En mi trabajo no se puede ___.» / «Allí se ___ todos los días.»
   - teacher: «Respuesta libre. Pide al menos una frase con "se".»
- **Hand-off:** Emilio: «Dile a Marina que la muestra entra en el horno pequeño el jueves. Ella está en la oficina.» (The student relays it in circle 5's opening frame.)
- **Talk (5):**
  1. «¿Cómo se prepara un plato típico de tu país? Explícalo con "se".»
  2. «¿Qué no se puede hacer en tu trabajo o en tu escuela?»
  3. «¿Qué se dice en tu país cuando alguien tiene mucha prisa?»
  4. «¿Qué cosa se hace mejor despacio?»
  5. «¿Qué se recicla en tu ciudad y qué no?»
- **Words (6):** el secadero, rajarse, la grieta, la quema, se deja / se dejan, se prohíbe.
- **Scaffolding:** two columns on the board: «quién lo hace» (Emilio deja las piezas) / «se hace» (se dejan las piezas). The class turns three of Emilio's sentences from one column to the other.
- **Teacher note:** «Este círculo es de proceso, no de recado: sirve de descanso y prepara el texto de la semana 16 (`b1.read.w16-como-se-hace`). Insiste en la concordancia: "se seca la pieza / se secan las piezas". El error "se deja las piezas" es muy común también entre hablantes nativos; acéptalo en la charla libre y corrígelo solo en el contraste.»
- **Listening:** Emilio alone (single voice; procesos con «se»).

## 5. `horno` · «La muestra sale del horno»

- **Place:** el horno pequeño, con la muestra recién sacada en una mesa: platos y una taza con el asa rajada.
- **Characters:** Emilio, Marina.
- **Primary:** `b1.spk.w16-contar-conversacion`. Related: `b1.gram.g118`.
- **Exponents (G1, 4):** `quien-dijo` («fue Marina la que dijo que…»), `aclarar` («no, no lo dijo ella, lo preguntó Valentina»), `prometer-pasado` («le prometió que se los mandaría»: futuro → condicional), `por-telefono` («lo hablaron por teléfono: ella dijo que prefería…»).
- **Communicative task:** Emilio no estuvo en la llamada entre Marina y Valentina. Tú se la cuentas durante dos minutos y respondes a sus preguntas, aclarando quién dijo cada cosa.
- **Scene line:** «Diez días después. Emilio abre el horno pequeño. Los platos salieron perfectos; una taza, no.»
- **Opening frame (relay from circle 4):** the student tells Marina: «Emilio dice que…» (no score; the class says it aloud).

**Beats**

1. **`promesa` · Contraste lingüístico · exponent `prometer-pasado`** · who: emilio
   - context: «Marina le dijo a Valentina por teléfono: "Le mando los platos el lunes." Emilio pregunta: "¿Qué le prometió?"»
   - prompt: «Cuéntale a Emilio la promesa, en pasado.»
   - options:
     - ✔ «Le prometió que le mandaría los platos el lunes.» → «Bien: el presente con valor de futuro pasa a condicional, "mandaría". También es correcto "le mandaba".»
     - ✘ «Le prometió que le mandara los platos el lunes.» · feature: *prometer no es pedir* → «Prometer no es pedir: "que le mandara" sería una petición. Prometer lleva indicativo o condicional.»
     - ✘ «Le prometió que le había mandado los platos el lunes.» · feature: *orden de los hechos* → «Orden de los hechos: el envío es posterior a la promesa; el pluscuamperfecto lo pone antes.»
2. **`aclarar` · Contraste lingüístico · exponent `aclarar`** · who: emilio
   - context: «Emilio: "Entonces fue Marina la que pidió el esmalte sin plomo, ¿no?" En realidad lo pidió Valentina, por seguridad.»
   - prompt: «Corrige a Emilio con amabilidad.»
   - options:
     - ✘ «No, Marina dijo que era seguro.» · feature: *quién lo dijo* → «Quién lo dijo: sigues atribuyéndoselo a Marina. Fue la clienta.»
     - ✔ «No exactamente: fue Valentina la que pidió que fuera sin plomo, por seguridad.» → «Bien: corriges quién habló y mantienes "pidió que" + subjuntivo.»
     - ✘ «No exactamente: fue Valentina la que pidió que es sin plomo.» · feature: *modo después de "pedir que"* → «Modo: "pidió que fuera", subjuntivo.»
3. **`emilio-marina` · Estímulo de conversación** · who: marina
   - ask: «Marina: "Una taza rajada. ¿Se lo digo hoy a Valentina o espero a tener la nueva?"»
   - options:
     - say «Hoy. Es mejor que lo sepa por usted y no por la caja.» · reply «Tienes razón. La llamo ahora.» · end «Marina marca el número. Emilio levanta el pulgar.» · mood love
     - say «Espere a tener la nueva; así le da una solución, no un problema.» · reply «Mmm. Es verdad, pero no me gusta esconder cosas.» · end «Marina escribe un mensaje corto y honesto: "Una taza salió mal; la repetimos."» · mood surprised
     - say «Mándele una foto de los platos primero, que salieron preciosos.» · reply «Buena idea: primero lo bueno.» · end «La foto sale con la taza rajada en una esquina. Ya no hay secretos.» · mood laugh
   - teacher: «No hay respuesta correcta. Abre una discusión breve: ¿se dan las malas noticias enseguida?»
- **Production task (the circle's speaking objective):** «Cuéntale a Emilio, en dos minutos, la conversación de Marina con Valentina: qué dijo cada una, qué preguntó Valentina y qué le prometió Marina. Emilio te interrumpe dos veces.» Interruptions on screen (the partner reads them): «Espera, ¿eso lo dijo Marina o Valentina?» / «¿Y le preguntó algo del precio?» Facts on a card: the plates are fine; one cup cracked at the handle; Marina promised the plates for Monday; Valentina prefers to pay more for the lead-free glaze.
- **Hand-off:** Emilio: «Avísale a Paola que prepare el esmalte sin plomo.» Prop: glaze bucket lights at the glaze bench.
- **Talk (5):**
  1. «Cuenta una conversación importante que tuviste este mes. ¿Quién dijo qué?»
  2. «¿Prefieres dar una mala noticia en persona, por teléfono o por mensaje?»
  3. «¿Qué haces cuando alguien cuenta mal lo que dijiste?»
  4. «¿Pagarías más por algo hecho de forma más segura o más ecológica?»
  5. «¿Qué promesa de trabajo es difícil de cumplir?»
- **Words (6):** el asa, rajarse, el esmalte, sin plomo, prometer, aclarar.
- **Scaffolding:** a «who said what» card with two columns (Marina / Valentina) and arrows for «dijo / preguntó / pidió / prometió».
- **Teacher note:** «Organiza parejas: A cuenta, B es Emilio y lee las interrupciones. Después cambian. Escucha sobre todo si aclaran quién habló ("fue Valentina la que…"). El esmalte sin plomo es una cuestión real de seguridad en la cerámica para comida (HYPOTHESIS sobre la práctica en la región, ver §10); no lo presentes como algo exótico ni como un reproche al oficio.»
- **Listening:** Emilio + Marina (cross-gender).

## 6. `esmaltes` · «Lo que dijo, lo que preguntó y lo que pidió»

- **Place:** la mesa de los esmaltes, con baldes, pinceles y la jarra de prueba.
- **Characters:** Paola, Emilio.
- **Primary:** `b1.lis.w16-encargo-taller` (the curriculum's own scene: «una aprendiz cuenta lo que dijo, preguntó y pidió una clienta»). Related: `b1.gram.g118`, `b1.gram.g119`.
- **Exponents (G1, 4):** `le-encantaron` (opinión contada: «dijo que le encantaban / habían encantado»), `pregunto-si-wh` («preguntó si… / preguntó qué…»), `pidio-que` (repaso), `como-se-hara` («se hará así: se esmaltan…»).
- **Communicative task:** Paola contestó una llamada de Valentina. Tú la ayudas a ordenar la información en tres listas (dijo, preguntó, pidió) y después explicas cómo se va a hacer el pedido.
- **Scene line:** «Paola tiene tres papelitos de colores pegados en la mesa: verde "dijo", amarillo "preguntó", rojo "pidió".»

**Beats**

1. **`clasificar` · Contraste lingüístico · exponent `pregunto-si-wh`** · who: paola
   - context: «Valentina preguntó: "¿Qué esmalte usan?"»
   - prompt: «Escribe el papelito amarillo.»
   - options:
     - ✘ «Preguntó si qué esmalte usábamos.» · feature: *"si" con pregunta abierta* → «"si" solo va con preguntas de sí o no. Con "qué" la palabra interrogativa se queda sola.»
     - ✔ «Preguntó qué esmalte usábamos.» → «Bien: pregunta abierta contada con la misma palabra interrogativa, "qué".»
     - ✘ «Preguntó que usábamos un esmalte.» · feature: *pregunta o afirmación* → «Pregunta o afirmación: "preguntó que usábamos" convierte la pregunta en un dato.»
2. **`opinion` · Contraste lingüístico · exponent `le-encantaron`** · who: paola
   - context: «Valentina: "Me encantan los platos. Son justo lo que busco."»
   - prompt: «Escribe el papelito verde, contado por la tarde.»
   - options:
     - ✔ «Dijo que le encantaban los platos y que eran justo lo que buscaba.» → «Bien: presente → imperfecto en los tres verbos.»
     - ✘ «Dijo que le encantaban los platos y que son justo lo que buscara.» · feature: *mezcla de tiempos y modo* → «Mezcla: "son" no retrocede y "buscara" es subjuntivo sin razón. Va "eran… buscaba".»
     - ✘ «Dijo que te encantaban los platos y que eran justo lo que buscabas.» · feature: *cambio de persona* → «Persona: a quien le encantan es a ella: "le encantaban… buscaba".»
3. **`proceso` · Contraste lingüístico · exponent `como-se-hara`** · who: emilio
   - context: «Emilio: "Bueno, ¿y cómo se hace la jarra que pidió?"»
   - prompt: «Explícale el proceso sin decir quién hace cada paso.»
   - options:
     - ✘ «Primero se tornea la jarra, después se pegan el asa y al final se esmalta.» · feature: *concordancia con "se"* → «Concordancia: "el asa" es singular: "se pega el asa".»
     - ✘ «Primero tornea la jarra, después pega el asa y al final esmalta.» · feature: *proceso sin persona* → «Sin persona: así parece que lo hace alguien concreto. Para un proceso, "se tornea, se pega, se esmalta".»
     - ✔ «Primero se tornea la jarra, después se pega el asa y al final se esmalta.» → «Bien: cada verbo concuerda con su cosa.»
4. **`paola-emilio` · Estímulo de conversación** · who: paola
   - ask: «Paola: "Valentina no se molestó por la taza. ¿Tú te habrías molestado?"»
   - frames: «Yo sí / no me habría molestado, porque ___.» / «Depende de ___.»
   - teacher: «Respuesta libre; acepta "me molestaría" si no sale el condicional compuesto.»
- **Hand-off:** Paola: «Valentina dijo que su chef iba a llamar a Marina. Ve a la oficina, por si acaso.» Prop: the glazed jug goes to the office shelf.
- **Talk (5):**
  1. «Cuenta qué te dijo, qué te preguntó y qué te pidió alguien hoy.»
  2. «¿Qué haces para no olvidar lo que te dicen por teléfono?»
  3. «¿Tienes una taza o un plato especial? ¿De dónde es?»
  4. «¿Qué preguntas haces antes de comprar algo para comer o beber en ello?»
  5. «¿Te gustaría tener una vajilla hecha a mano? ¿Por qué?»
- **Words (6):** el esmalte, la jarra, el asa, molestarse, el encargo, preguntó qué / si.
- **Scaffolding:** the three coloured slips as a physical prop; the class writes one sentence per slip before the listening.
- **Teacher note:** «Este círculo copia la situación del objetivo de escucha de la semana 16 (`b1.lis.w16-encargo-taller`). Haz la escucha primero si quieres comprobar comprensión, o la conversación primero si quieres preparar el vocabulario. El contraste "preguntó si / preguntó qué" se practica aquí, por escrito; en la escucha las preguntas son de contenido.»
- **Listening:** Paola + Emilio (cross-gender).

## 7. `oficina` · «El recado del chef»

- **Place:** la oficina del taller: un escritorio, el cuaderno de pedidos, el computador y la jarra de prueba en un estante.
- **Characters:** Marina, Andrés (by phone).
- **Primary:** `b1.wri.w16-correo-reunion`. Related: `b1.disc.w16-voces-y-procesos`, `b1.fun.w16-transmitir-mensajes`.
- **Exponents (G1, 5):** `me-pidio-que-le-dijera` (recado de recado: «me pidió que le dijera que…»), `se-adelanto` («la inauguración se adelantó una semana»), `se-va-a-organizar` («se va a organizar así:…»), `anticipo-saldo` (el anticipo, el saldo, transferir), `cierre-correo` («Quedo atenta / Un saludo cordial»).
- **Communicative task:** Marina habló con Andrés y prometió confirmarlo todo por escrito. Tú escribes con ella el correo para Valentina: qué se dijo, qué se preguntó, qué se pidió y cómo se va a organizar lo decidido.
- **Scene line:** «Marina cuelga y suspira: "¿Me ayudas con el correo? Si no lo escribo ahora, mañana no me acuerdo de nada."»

**Beats**

1. **`recado-de-recado` · Contraste lingüístico · exponent `me-pidio-que-le-dijera`** · who: marina
   - context: «Andrés dijo: "Valentina me pidió que la llamara a usted."»
   - prompt: «Escribe la primera frase del correo, dirigida a Valentina.»
   - options:
     - ✔ «Ayer me llamó Andrés de su parte, como usted le pidió.» → «Bien: cambias la perspectiva: ahora le escribes a Valentina, así que "usted le pidió".»
     - ✘ «Ayer me llamó Andrés y me dijo que Valentina le pidió que la llamara.» · feature: *destinatario* → «Destinatario: le escribes a Valentina; no hables de ella en tercera persona.»
     - ✘ «Ayer me llamó Andrés, como usted le pide.» · feature: *tiempo verbal* → «Tiempo: la petición fue antes de la llamada; va en pasado: "le pidió".»
2. **`organizar` · Contraste lingüístico · exponent `se-va-a-organizar`** · who: marina
   - context: «Marina: "Ahora explícale cómo lo vamos a hacer, sin decir quién hace cada cosa."»
   - prompt: «Elige la frase del correo.»
   - options:
     - ✘ «Se va a entregar los platos el jueves por la mañana.» · feature: *concordancia con "se"* → «Concordancia: "los platos" es plural: "se van a entregar".»
     - ✔ «Los platos se van a entregar el jueves por la mañana, y el saldo se paga a la entrega.» → «Bien: dos procesos con "se", cada uno concuerda con su cosa.»
     - ✘ «Los platos van a entregar el jueves por la mañana.» · feature: *falta "se"* → «Falta "se": sin "se", parece que los platos entregan algo.»
3. **`registro` · Contraste lingüístico · exponent `cierre-correo`** · who: marina
   - context: «Falta cerrar el correo. Valentina es una clienta nueva.»
   - prompt: «Elige el cierre más adecuado.»
   - options:
     - ✘ «Chao, besos.» · feature: *registro* → «Registro: demasiado informal para una clienta nueva.»
     - ✘ «Atentamente le saluda la que suscribe.» · feature: *registro* → «Registro: demasiado formal y antiguo para un correo.»
     - ✔ «Quedo atenta a cualquier duda. Un saludo cordial, Marina.» → «Bien: cordial y profesional.»
4. **`marina` · Estímulo de conversación** · who: marina
   - ask: «Marina: "Ahora tenemos una semana menos. ¿Qué harías tú: pedir más gente o trabajar el fin de semana?"»
   - frames: «Yo pediría ___ porque ___.» / «Mejor trabajar ___, siempre que ___.»
   - teacher: «Respuesta libre.»
- **Production task (writing objective):** «Escribe con Marina el correo para Valentina (unas 120–150 palabras): saludo; qué te contó Andrés de su parte (la inauguración se adelantó una semana); qué preguntó (el anticipo y la cuenta) y la respuesta (la mitad del total, los datos van abajo); qué pidió (entrega un jueves); cómo se va a organizar (entrega el jueves por la mañana, el saldo se transfiere al recibir todo); cierre.» Model text (shown after the class writes; the teacher can hide it):
  > Estimada Valentina:
  >
  > Ayer me llamó Andrés de su parte, como usted le pidió. Me contó que la inauguración se adelantó una semana y que necesitan el pedido completo para esa fecha. No hay problema: vamos a organizarnos para llegar a tiempo.
  >
  > Andrés también me preguntó cuánto era el anticipo y a qué cuenta podían transferirlo. El anticipo es la mitad del total; le dejo los datos de la cuenta al final de este correo.
  >
  > Además, me dijo que usted prefería recibir el pedido un jueves, porque ese día la cocina está más tranquila. Así lo haremos: las cajas se entregan el jueves por la mañana y el saldo se transfiere cuando usted reciba todo.
  >
  > Quedo atenta a cualquier duda.
  >
  > Un saludo cordial,
  > Marina
  (Model: 123 words, counted by the author with a letter-run regex; inside the 120–150 target.)
- **Hand-off:** Marina: «Ahora ve al patio. Roberto viene por las cajas y hay que darle las indicaciones de la clienta.»
- **Talk (5):**
  1. «¿Escribes correos formales en tu trabajo o en tus estudios? ¿Cómo los empiezas?»
  2. «¿Te han cambiado alguna vez una fecha importante? ¿Qué pasó?»
  3. «¿En tu país es normal pagar un anticipo? ¿Cuándo?»
  4. «¿Qué es más claro para ti: un audio o un correo?»
  5. «¿Cómo cuentas por escrito una reunión a alguien que no estuvo?»
- **Words (6):** el anticipo, el saldo, transferir, adelantarse, de parte de, por escrito.
- **Scaffolding:** an email skeleton with five boxes (saludo / me contó / me preguntó / me pidió / se va a organizar / cierre). Model text hidden by default.
- **Teacher note:** «Si falta tiempo, que cada pareja escriba solo dos párrafos (lo que se dijo y cómo se va a organizar) y que termine el resto de tarea: es el texto de la semana 16 (`b1.wri.w16-correo-reunion`). Corrige primero la perspectiva (le escribes a Valentina: "usted"), después los tiempos.»
- **Listening:** Andrés + Marina (cross-gender).

## 8. `patio` · «Todo listo para Bogotá» (closing)

- **Place:** el patio de despacho: doce cajas, el camión de Roberto, la factura en una tablilla.
- **Characters:** Roberto, Marina, and the whole cast at the end.
- **Primary (world primary):** `b1.fun.w16-transmitir-mensajes`. Related: `b1.gram.g118`, `b1.spk.w16-contar-conversacion`.
- **Exponents (G1, 5):** `la-duena-me-pidio` («la dueña me pidió que entregaras…»), `dice-que-informa` (información: «dice que el chef revisa las cajas»), `dice-que-pide` (petición: «dice que le mandes una foto»), `sin-cambiar-sentido` (reformular sin cambiar el sentido), `que-te-dijo` («¿qué te dijo exactamente?»).
- **Communicative task (closing):** el último recado. Marina tiene que irse y tú le das a Roberto todas las indicaciones de la clienta y del chef sin cambiar su sentido. Después, toda la clase reconstruye la cadena de recados del pedido.
- **Scene line:** «Las cajas ya están en el patio. A Marina la llaman del banco. "Dale tú las indicaciones a Roberto, que yo vuelvo en un rato."»

**Beats**

1. **`entregar` · Contraste lingüístico · exponent `la-duena-me-pidio`** · who: roberto
   - context: «Indicación de Valentina (por escrito): "Que el transportista entregue el jueves antes de las diez, por la puerta de atrás."»
   - prompt: «Dile a Roberto qué pidió la dueña.»
   - options:
     - ✔ «La dueña pidió que entregaras el jueves antes de las diez, por la puerta de atrás.» → «Bien: petición → "pidió que" + subjuntivo, y "el transportista" → "tú" porque ahora le hablas a él.»
     - ✘ «La dueña dijo que entregabas el jueves antes de las diez, por la puerta de atrás.» · feature: *petición o información* → «Petición o información: "dijo que entregabas" suena a un dato sobre lo que haces normalmente. Ella lo pidió: "que entregaras".»
     - ✘ «La dueña pidió que el transportista entregue el jueves antes de las diez.» · feature: *persona* → «Persona: el transportista eres tú, Roberto. Le hablas a él: "que entregaras".»
2. **`informa-o-pide-2` · Contraste lingüístico · exponents `dice-que-informa`, `dice-que-pide`** · who: roberto
   - context: «Dos notas de Andrés: (1) "El chef revisa caja por caja." (2) "Manden una foto de la factura firmada."»
   - prompt: «Elige la versión que mantiene el sentido de las dos notas.»
   - options:
     - ✘ «Dice que revise caja por caja y que mandas una foto de la factura.» · feature: *se cruzan información y petición* → «Se cruzan: la primera nota es información (indicativo) y la segunda es una petición (subjuntivo). Aquí están al revés.»
     - ✔ «Dice que el chef revisa caja por caja y que le mandes una foto de la factura firmada.» → «Bien: información con indicativo, petición con subjuntivo.»
     - ✘ «Dice que el chef revisa caja por caja y que le mandas una foto de la factura firmada.» · feature: *petición con indicativo* → «Petición: "que le mandas" informa de algo que ya haces. Andrés lo pide: "que le mandes".»
3. **`sentido` · Contraste lingüístico · exponent `sin-cambiar-sentido`** · who: roberto
   - context: «Roberto: "¿Y el saldo? ¿Lo cobro yo?" Marina dejó escrito: "El saldo lo transfiere ella cuando reciba todo."»
   - prompt: «Contéstale a Roberto sin cambiar el sentido.»
   - options:
     - ✔ «No, Marina dice que el saldo lo transfiere la clienta cuando reciba todo.» → «Bien: mismo sentido, y "ella" se aclara: "la clienta".»
     - ✘ «Sí, Marina dice que lo cobres cuando entregues todo.» · feature: *sentido cambiado* → «Sentido cambiado: Marina no pidió que cobraras; dijo que la clienta transfiere.»
     - ✘ «No, Marina dice que el saldo lo transfiere ella cuando reciba todo.» · feature: *referencia ambigua* → «Referencia ambigua: contado por ti, "ella" puede ser Marina o la clienta. Aclara: "la clienta".»
   - after: «Roberto: "Clarísimo. Salgo el miércoles por la noche."»
4. **Closing round · Estímulo de conversación · «La cadena del recado»** · who: all
   - ask: «Todos los personajes salen al patio. Marina: "A ver, ¿cómo llegó este pedido hasta aquí? Cuéntenlo desde la primera llamada."»
   - frames (one per circle, shown in walking order): «El lunes llamó ___ y dijo que ___.» / «Gonzalo le contó a Paola que ___.» / «Marina le pidió a Paola que ___.» / «Emilio explicó que en el secadero se ___.» / «En el horno, Emilio y Marina vieron que ___.» / «Paola le contó a Emilio que la clienta había preguntado si ___.» / «Andrés llamó de parte de Valentina y dijo que ___.» / «Y Roberto va a entregar el pedido ___.»
   - teacher: «No hay respuesta correcta. Cada pareja reconstruye una frase en el orden del recorrido; la clase escucha si cambió el sentido de algún recado y lo corrige con "no exactamente: dijo que…".»
- **Closing production (E1 "Terminar"):** «Recado final, por escrito (130–170 palabras): Marina está de viaje mañana. Déjale a Paola un mensaje que le cuente lo que pidió la dueña del restaurante, lo que dijo el chef, lo que preguntó Roberto y cómo se va a hacer la entrega. Usa al menos un "dijo que", un "preguntó si", un "pidió que" y un "se" de proceso.» Success criteria shown to the class: (1) no instruction changes its meaning; (2) it is clear who said what; (3) requests use subjunctive, information uses indicative.
- **Talk (5):**
  1. «¿Qué recado importante tuviste que transmitir alguna vez? ¿Salió bien?»
  2. «¿Por qué crees que los mensajes cambian cuando pasan por muchas personas?»
  3. «¿Qué haces cuando no entiendes bien un mensaje que tienes que transmitir?»
  4. «¿Prefieres recibir instrucciones de la persona que decide o de alguien que las transmite?»
  5. «Si trabajaras en este taller, ¿qué puesto elegirías? ¿Por qué?»
- **Words (6):** el transportista, el saldo, la factura firmada, la puerta de atrás, entregar, sin cambiar el sentido.
- **Scaffolding:** the full chain on the board as eight arrows with names (Valentina → Gonzalo → Paola → … → Roberto); the class fills one arrow each.
- **Teacher note:** «Es el cierre del mundo y su objetivo principal (`b1.fun.w16-transmitir-mensajes`). Deja al menos 8 minutos para la ronda de la cadena. El mensaje escrito puede quedar de tarea; en clase basta con que cada pareja lea en voz alta su primera frase. Para la ficha de progreso: "Terminar" marca el cierre de la lección, no que la clase haya aprendido (N4).»
- **Listening:** Roberto + Marina (cross-gender).

---

## 9. Teacher route (about 45 minutes)

| Min | Step | What happens |
|---|---|---|
| 0–4 | Warm-up | «¿Alguna vez llevaste un recado y llegó cambiado?» Two or three short stories. Board: «dijo que / preguntó si / pidió que». |
| 4–10 | Circle 1 mostrador | Beats 1–2 and the recado frame card. (Listening of circle 1 optional: it sets up the order.) |
| 10–13 | Circle 2 greda | Beat 1 (vocabulary) only; glossary on the board. |
| 13–21 | Circle 3 torno | All four contrast beats. This is the grammar core: do not skip it. |
| 21–24 | Circle 4 secadero | Beats 1–2 (se pasivo / impersonal). |
| 24–30 | Circle 6 esmaltes | **Listening mode** (listen twice, multiple choice, gaps) then beat 1 in conversation mode. |
| 30–35 | Circle 5 horno *or* 7 oficina | Choose one: the 2-minute spoken retelling (5) or the email skeleton (7). |
| 35–45 | Circle 8 patio (closing) | Beats 1–3, then «La cadena del recado». The written message (130–170 words) is homework if time runs out. |

- **Extensions (a second lesson or self-study):** every listening (8 items), the circle 5 and 7 production tasks not chosen, the remaining beats of circles 2 and 4, the talk questions.
- **Mode switching:** every circle has its own listening; the teacher can switch at any circle without leaving the world. The route above uses one listening in class (circle 6, the curriculum's listening scene) to stay within 45 minutes; the timing is the author's estimate, **HYPOTHESIS until a class trial**.

## 10. Cultural check (concept §6.5)

| Claim used in the content | Status | Evidence / note |
|---|---|---|
| Boyacá has pottery towns with a long tradition | **VERIFIED (web, this run)** | Ráquira (Boyacá) is described by the Ministerio de Cultura as the "capital artesanal de Colombia", with pottery taught across generations: [Los Cuadernos del Barro. Ráquira](https://mng.mincultura.gov.co/areas/patrimonio/publicaciones/Documents/Los%20Cuadernos%20del%20Barro.%20R%C3%A1quira.pdf). The town is still **not named** in the content: the workshop is fictional, and naming the town would attach a real place to an invented business. |
| Wheel, moulds and kilns are all part of current practice there | **VERIFIED in part (web summary, this run)** | A Tadeo Lozano thesis (index: moulds, firing, a gas beehive kiln) and an anthropology article (traditional firing in wood kilns), via a search summary; I did not read the full texts. The content only says «torno», «horno grande / pequeño», «secadero»; it never names a fuel or claims a traditional technique. |
| «Greda» as the workshop's word for clay | **HYPOTHESIS** | «greda» is a standard dictionary word for sandy clay (author's knowledge, not checked against the DLE in this run). Its local frequency in Boyacá workshops was not verified. Glossed in every place it is used. |
| Lead-free glaze as a food-safety concern | **HYPOTHESIS** | A general ceramics fact (author's knowledge). Framed as a client's question and a workshop's choice, never as a claim about the region's practice. |
| A Bogotá restaurant ordering handmade tableware, with sample, advance (half) and balance on delivery | **HYPOTHESIS** (plausible business practice) | Not verified with a workshop. The 50 % advance is a plausible convention, stated by Marina as her own rule. |
| «sumercé» (term of address associated with Boyacá and Cundinamarca) | **Taught exemplar only, HYPOTHESIS** | Never in any voiced line (R4). The teacher may mention it in circle 1 as a regional form of address; I did not verify its current distribution in this run. |
| No folkloric décor, no "exotic craft" framing | Authoring rule | The props are a working workshop: sacks, shelves, kiln, buckets, boxes, a truck. Sofia's build must keep it so (G5 visual check). |

## 11. Beat labelling summary (N1)

- Contrast beats (each names its exponent): circle 1: 2; circle 2: 2; circle 3: 4; circle 4: 3; circle 5: 2; circle 6: 3; circle 7: 3; circle 8: 3. **Total 22 contrast beats.**
- Stimulus beats: one per circle (8), plus the circle 8 closing round. Production tasks: circle 5 (speaking), circle 7 (writing), circle 8 (closing written message).
- g118 contrasts produced and labelled here: `dice-que-modo` (3.1, 8.2), `pidio-que-subjuntivo` (3.2, 5.2, 8.1), `pregunto-si` / `pregunto-si-wh` (3.3, 6.1), backshift and person change (3.4, 5.1, 6.2, 7.1), reference resolution (8.3). g119: 4.1–4.3, 6.3, 7.2.
- **No goal or metadata may claim that the listening mode practises these contrasts.** The listening practises understanding of content words in relayed messages (BOARD-DECISION-006 §3.2).
