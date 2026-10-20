import type { LiveLesson } from '../types';

/**
 * Lesson 438 · B2 · A pesar de que, por mucho que, por más que (course unit G138).
 * Builds on G101 (aunque + indicativo, a pesar de + nombre / infinitivo, aun así)
 * and G137 (lesson 220: aunque + indicativo / subjuntivo, three intentions).
 * One scene runs through the class: Lola Robles runs the family bakery her
 * father opened forty years ago. A chain of coffee shops wants to buy it; her son
 * Rubén, who keeps the accounts, thinks they should consider it. Nieves Prado,
 * their accountant, advises them (usted with Lola). Explorar: Lola and Rubén at
 * closing time. Escuchar: Nieves's voicemail to Lola (es-MX-DaliaNeural).
 * Escribir: Lola's formal email turning down the offer.
 * Content: a pesar de que + indicativo (fact asserted) / + subjuntivo (possibility
 * or known fact played down, as with aunque); por mucho que / por más que +
 * subjuntivo (intensive concession: «no matter how much»), + indicativo for a real
 * fact, usually repeated or past (Por más que lo intento, no me sale); por mucho/a/
 * os/as + nombre + que, por más + nombre + que; por muy (por más) + adjetivo /
 * adverbio + que + subjuntivo; si bien + indicativo (formal); aun cuando +
 * subjuntivo (= incluso si) / + indicativo (= aunque), formal; aun + gerundio
 * (aun sabiéndolo); position (front with comma / after the main clause) and
 * register; pese a que only receptively. Ampliación: así + subjuntivo (literary or
 * emphatic; also spoken in parts of Latin America), mal que me pese.
 * Productive demand stays within the present / perfect / imperfect subjunctive and
 * the conditional already covered (G128–G131).
 */
export const lesson: LiveLesson = {
  id: 438,
  level: 'B2',
  title: 'A pesar de que, por mucho que, por más que',
  subtitle: 'Mantener una decisión frente a la insistencia con a pesar de que, por mucho que, por muy… que, si bien y aun cuando.',
  legend: [
    { tone: 'blue', label: 'INDICATIVO · un hecho real que afirmas (a pesar de que han bajado, por más que lo intento)' },
    { tone: 'orange', label: 'SUBJUNTIVO · posibilidad o dato al que quitas peso (por mucho que insistas)' },
    { tone: 'teal', label: 'INTENSIDAD · por mucho/a + nombre + que, por muy + adjetivo + que' },
    { tone: 'violet', label: 'REGISTRO FORMAL · si bien, aun cuando, aun + gerundio' },
  ],
  optionNotes: {
    'aún': '«Aún» con tilde significa «todavía». Delante de un gerundio con el sentido de «incluso», se escribe sin tilde: «aun sabiendo», «aun teniendo».',
    'aunque': '«Aunque» va con un verbo conjugado («aunque sabe», «aunque tiene»), no con un gerundio. Con gerundio, «aun»: «aun sabiendo».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Conceder con más fuerza', coach: 'Acepto el obstáculo y no cambio de idea. I accept the obstacle and stand firm.',
      steps: [
        { title: 'Una oferta difícil · A tough offer', blocks: [
          { kind: 'lead', text: 'Lola Robles tiene la panadería que abrió su padre hace cuarenta años. Una cadena de cafeterías quiere comprarla, y su hijo Rubén, que lleva las cuentas, cree que deberían pensarlo. Lola lo tiene claro: «**Por mucho que insistas**, no vendo». En la clase 137 concediste con «aunque»; hoy aprendes conectores que conceden **con más fuerza** o **en otro registro**: a pesar de que, por mucho que, por más que, por muy… que, si bien, aun cuando y aun + gerundio.', en: 'Lola Robles runs the bakery her father opened forty years ago. A coffee-shop chain wants to buy it, and her son Rubén, who keeps the accounts, thinks they should consider it. Lola is clear: “No matter how much you insist, I’m not selling.” In class 137 you conceded with “aunque”; today you learn connectors that concede more forcefully or in a different register.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Lola y Rubén. Tu alumno dice en cuál se informa de un hecho, en cuál «da igual cuánto» y en cuál «da igual cómo de…».', self: 'Lee las tres frases en voz alta. ¿Cuál informa de un hecho? ¿Cuál dice «da igual cuánto»? ¿Cuál dice «da igual cómo de bueno»? (Which one states a fact, which one means “no matter how much”, which one “no matter how good”?)' } },
          { kind: 'compare', title: 'Tres maneras de mantener el plan · Three ways to hold your ground', columns: [
            { tone: 'blue', label: 'UN HECHO', sentence: '[[A pesar de que las ventas han bajado|blue]], la panadería da beneficios.', idea: 'Rubén informa: las ventas han bajado de verdad. El negocio sigue siendo rentable.', en: 'A fact presented as information: sales really have fallen, yet the business still makes a profit.' },
            { tone: 'orange', label: 'DA IGUAL CUÁNTO', sentence: '[[Por mucho que nos ofrezcan|orange]], no vendemos.', idea: 'Lola no sabe cuánto ofrecerán. Cualquier cantidad: la respuesta es no.', en: 'No matter how much they offer: any amount, still no. The concession is pushed to the maximum.' },
            { tone: 'teal', label: 'DA IGUAL CÓMO DE…', sentence: '[[Por muy buena que sea la oferta|teal]], no la acepto.', idea: 'La intensidad recae en un adjetivo: aunque la oferta sea buenísima.', en: 'However good the offer is: the intensity falls on an adjective.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Por mucho que insistas, no vendo». ¿Qué comunica Lola?', options: ['Que Rubén ha insistido muy poco.', 'Que venderá si Rubén insiste bastante.', 'Que ninguna cantidad de insistencia va a cambiar su decisión.'], answer: 2, why: '«Por mucho que» lleva la concesión al máximo: insistas lo que insistas, la decisión no cambia.', en: 'Lola means that no amount of insisting will change her mind.' },
            { prompt: '¿Qué frase presenta el obstáculo como un hecho que se afirma?', options: ['Por muy buena que sea la oferta, no la acepto.', 'A pesar de que las ventas han bajado, la panadería da beneficios.', 'Por mucho que nos ofrezcan, no vendemos.'], answer: 1, why: '«Han bajado» está en indicativo: Rubén afirma un dato real.', en: 'Which sentence states the obstacle as a fact?' },
          ] },
        ] },
        { title: 'A pesar de que: como «aunque» · Like aunque', mascot: '/brand/mascot/studying.webp', coach: '¿Lo afirmas o le quitas peso? Do you state it or play it down?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'A PESAR DE QUE + INDICATIVO', question: '¿Presentas el obstáculo como un hecho que afirmas?', en: '“A pesar de que” works like “aunque” but sounds a little more emphatic: it stresses that the obstacle exists and still does not stop the result. With the indicative you put the obstacle on the table as a fact.', formula: ['a pesar de que + indicativo, resultado', 'resultado, a pesar de que + indicativo'],
            meaning: 'Funciona como **aunque**, con un tono algo más marcado: subraya que el obstáculo existe y, aun así, no impide el resultado. Con **indicativo** el hablante **afirma** el obstáculo: lo cuenta como información.',
            examples: [
              { es: '[[A pesar de que la cadena tiene veinte locales|blue]], quiere el nuestro.', en: 'Although the chain has twenty shops, it wants ours.' },
              { es: '[[A pesar de que abrimos a las seis|blue]], siempre hay alguien esperando.', en: 'Even though we open at six, there is always someone waiting.' },
              { es: 'Lola siguió amasando a mano, [[a pesar de que su padre le había regalado una máquina|blue]].', en: 'Lola kept kneading by hand, even though her father had given her a machine.' },
            ] },
          { kind: 'compare', title: 'Con subjuntivo: los dos usos que ya conoces · With the subjunctive: two uses you know', columns: [
            { tone: 'orange', label: 'POSIBILIDAD', sentence: '[[A pesar de que la harina suba en invierno|orange]], mantendremos los precios.', idea: 'Nadie sabe si subirá. En cualquier caso, los precios no cambian.', en: 'A possibility: nobody knows whether flour will go up; either way, prices stay the same. “Aunque” is more frequent here, but this is correct.' },
            { tone: 'orange', label: 'DATO QUE NO CUENTA', sentence: '[[A pesar de que la oferta sea buena|orange]], no quiero vender.', idea: 'Rubén ya lo ha dicho. Lola no lo niega: le quita importancia.', en: 'A fact already on the table: Lola does not deny it, she just treats it as irrelevant to her decision.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Sin «que» y en registro formal · Without “que” and in formal texts', text: 'Sin «que», **a pesar de** va con un nombre («a pesar de la crisis») o con un infinitivo si el sujeto es el mismo («a pesar de trabajar doce horas, no llegamos»). En textos formales verás también **pese a que**, con el mismo valor: «Pese a que el local es pequeño, tiene mucha luz».', en: 'Without “que”, “a pesar de” takes a noun or, with the same subject, an infinitive. In formal writing you will also see “pese a que”, which means the same as “a pesar de que”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Rubén le cuenta a Nieves un dato que ella no conocía.', prompt: 'A pesar de que la cadena ya ___ dos cafeterías en el barrio, quiere también la panadería.', options: ['tenga', 'tendría', 'tiene'], answer: 2, why: 'Es información nueva que Rubén afirma: a pesar de que + indicativo.', en: 'Although the chain already has two coffee shops in the area, it also wants the bakery.' },
            { context: 'Nadie sabe qué pasará con el precio de la luz.', prompt: 'A pesar de que la luz ___ más cara el año que viene, no vamos a cerrar.', options: ['es', 'sería', 'sea'], answer: 2, why: 'Una posibilidad futura que nadie conoce: a pesar de que + subjuntivo, igual que «aunque sea». «Es» la presentaría como un hecho actual.', en: 'Even if electricity gets more expensive next year, we are not closing.' },
          ] },
        ] },
        { title: 'Por mucho que, por más que · No matter how much', mascot: '/brand/mascot/speaking.webp', coach: 'Da igual cuánto. No matter how much.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONCESIVAS INTENSIVAS', question: '¿Quieres decir que ninguna cantidad cambia el resultado?', en: 'These are intensive concessions: “however much…, it makes no difference”. The subjunctive is the usual choice, both for a possibility and for a known fact you dismiss. The indicative appears when you report a real fact, typically something repeated or past: “Por más que lo intento, no me sale” (however hard I try — and I do — it doesn’t work).', formula: ['por mucho que / por más que + subjuntivo, resultado que no cambia', 'por más que / por mucho que + indicativo → un hecho real, repetido o pasado'],
            meaning: 'Equivalen a «**da igual cuánto**…». Lo normal es el **subjuntivo**, tanto para una posibilidad («por mucho que insistas» = insistas lo que insistas) como para un hecho conocido al que quitas valor. El **indicativo** aparece cuando cuentas un hecho **real y comprobado**, sobre todo repetido o pasado.',
            examples: [
              { es: '[[Por mucho que me lo pidas|orange]], no voy a firmar.', en: 'However many times you ask me, I am not signing.' },
              { es: 'No cambiaremos la receta, [[por más que la cadena insista|orange]].', en: 'We won’t change the recipe, however much the chain insists.' },
              { es: '[[Por más que lo intento|blue]], no consigo levantarme a las cuatro sin despertador.', en: 'Try as I might (and I really do), I can’t get up at four without an alarm.' },
              { es: '[[Por mucho que le insistieron|blue]], mi padre nunca quiso cambiar el horno.', en: 'However much they pressed him, my father never agreed to replace the oven: a real past fact.' },
            ],
            note: '«Mucho» y «más» no cambian cuando van con un verbo: «por mucho que **insistan**», «por más que **insistan**». Las dos formas significan lo mismo; «por más que» es muy frecuente en el habla de muchos países.' },
          { kind: 'table', title: 'Las piezas de la estructura · The building blocks', head: ['Estructura', 'Ejemplo', 'Ojo'], rows: [
            ['por mucho que + verbo', '**Por mucho que** insistas, no vendo.', '«mucho» invariable'],
            ['por más que + verbo', '**Por más que** lo pienso, no lo veo claro.', 'indicativo: lo pienso de verdad'],
            ['por mucho / mucha / muchos / muchas + nombre + que', '[[Por muchas horas que trabajemos|teal]], no llegamos.', 'concuerda con el nombre'],
            ['por más + nombre + que', '[[Por más clientes que vengan|teal]], no cambiamos la receta.', '«más» no cambia'],
            ['por muy + adjetivo / adverbio + que', '[[Por muy cansada que esté|teal]], Lola abre a las seis.', 'casi siempre con subjuntivo'],
            ['por más + adjetivo / adverbio + que', '[[Por más caro que sea|teal]], lo compro.', 'igual que «por muy»'],
          ], note: 'Con un adjetivo o un adverbio va **muy** (no «mucho»): *por mucho cansado → **por muy cansado**. El adjetivo concuerda: por muy cansad**a**, por muy barat**os**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Por ___ harina que pidamos, en diciembre siempre nos falta.', options: ['muy', 'mucha', 'mucho'], answer: 1, why: 'Delante de un nombre, «mucho» concuerda: la harina → por mucha harina que.', en: 'However much flour we order, we always run short in December.' },
            { prompt: 'Por ___ temprano que se levante Rubén, su madre ya está amasando.', options: ['mucha', 'muy', 'mucho'], answer: 1, why: '«Temprano» es un adverbio: por muy + adverbio + que.', en: 'However early Rubén gets up, his mother is already kneading.' },
            { context: 'Lola describe algo que le pasa de verdad todos los días.', prompt: 'Por más que ___ la masa, no me sale como la de mi padre.', options: ['amasaré', 'amasaría', 'amaso'], answer: 2, why: 'Un hecho real y repetido: por más que + indicativo (amaso). Ni el futuro ni el condicional sirven aquí.', en: 'However much I knead the dough, it never turns out like my father’s.' },
          ] },
        ] },
        { title: 'Registro formal: si bien, aun cuando, aun + gerundio · Formal register', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para informes, correos y discursos. For reports, emails and speeches.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONCESIVAS DE REGISTRO CUIDADO', question: '¿Escribes un informe, un correo formal o hablas en público?', en: '“Si bien” concedes a real fact, always with the indicative, typical of reports and formal emails. “Aun cuando” is a formal “even if” with the subjunctive, or a formal “even though” with the indicative. “Aun + gerund” compresses a concession into one phrase: “aun sabiéndolo” = even though he knew it.', formula: ['si bien + indicativo', 'aun cuando + subjuntivo (= incluso si) · + indicativo (= aunque)', 'aun + gerundio (= incluso + gerundio)'],
            meaning: '**Si bien** concede un hecho real, siempre con **indicativo**; es propio de informes y correos formales. **Aun cuando** es un «incluso si» formal con **subjuntivo**, o un «aunque» formal con **indicativo**. **Aun + gerundio** resume la concesión en pocas palabras: «aun sabiéndolo» = aunque lo sabía.',
            examples: [
              { es: '[[Si bien el local es pequeño|violet]], la panadería tiene una clientela fiel.', en: 'While the premises are small, the bakery has loyal customers.' },
              { es: '[[Aun cuando la cadena mejore la oferta|violet]], la respuesta será la misma.', en: 'Even if the chain improves its offer, the answer will be the same.' },
              { es: '[[Aun cuando las ventas bajaron en marzo|violet]], el trimestre cerró con beneficios.', en: 'Even though sales fell in March, the quarter closed in profit (a real fact: indicative).' },
              { es: '[[Aun sabiendo|violet]] que el horno era viejo, Lola no quiso cambiarlo.', en: 'Even though she knew the oven was old, Lola refused to replace it.' },
            ],
            note: '**Aun** sin tilde significa «incluso» (aun sabiendo, aun cuando, aun así). **Aún** con tilde significa «todavía»: «Aún no hemos decidido».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si bien el horno ___ cuarenta años, todavía funciona.', options: ['tenga', 'tuviera', 'tiene'], answer: 2, why: '«Si bien» concede un hecho real y va siempre con indicativo.', en: 'Although the oven is forty years old, it still works.' },
            { context: 'Todavía no saben si la cadena aceptará su propuesta.', prompt: 'Aun cuando la cadena ___ nuestra propuesta, seguiremos vendiendo en la tienda.', options: ['rechazará', 'rechace', 'rechaza'], answer: 1, why: 'No saben qué pasará: aun cuando + subjuntivo = incluso si la rechaza.', en: 'Even if the chain rejects our proposal, we will keep selling in the shop.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Modo, intensidad y registro. Mood, intensity and register.', blocks: [
          { kind: 'table', title: 'Mapa de conectores · Connector map', head: ['Conector', 'Modo', 'Registro'], rows: [
            ['a pesar de que', '[[indicativo|blue]] (hecho) / [[subjuntivo|orange]] (posibilidad, dato sin peso)', 'neutro'],
            ['por mucho que · por más que', '[[subjuntivo|orange]] casi siempre; [[indicativo|blue]] para un hecho real', 'neutro, enfático'],
            ['por mucho/a + nombre + que · por muy + adjetivo + que', '[[subjuntivo|orange]] casi siempre', 'neutro, enfático'],
            ['si bien', 'solo [[indicativo|blue]]', 'formal'],
            ['aun cuando', '[[subjuntivo|orange]] (incluso si) / [[indicativo|blue]] (aunque)', 'formal'],
            ['aun + gerundio', 'sin verbo conjugado', 'formal o escrito'],
          ], note: 'Todos se construyen como «aunque»: la concesión delante (con coma) o detrás de la idea principal.' },
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿El obstáculo es un hecho que afirmas o comunicas?', yes: 'Indicativo: **a pesar de que** o, en un texto formal, **si bien**. «[[Si bien el local es pequeño|violet]], tiene mucha luz».', no: 'next' },
            { q: '¿Quieres decir «da igual cuánto» o «da igual cómo de…»?', yes: '**Por mucho que / por más que** + subjuntivo; con nombre, **por mucho/a + nombre + que**; con adjetivo, **por muy + adjetivo + que**: «[[Por muy caro que sea|teal]], lo compro».', no: 'Es una posibilidad o un dato al que quitas importancia: **a pesar de que** o **aun cuando** + subjuntivo. «[[Aun cuando suban los precios|violet]], seguiremos».' },
          ] },
          { kind: 'tip', icon: '↔', title: 'Delante o detrás · Before or after', text: 'Delante y con coma, la concesión prepara el resultado: «Por mucho que insistas, no vendo». Detrás, suena a réplica o reserva añadida: «No vendo, por mucho que insistas». El resultado **nunca** lleva «pero»: *«Por mucho que insistas, pero no vendo».', en: 'In front, with a comma, the concession sets up the result. After the main clause it sounds like a comeback or an afterthought. Never add “pero” before the result.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rubén escribe un informe para el banco. ¿Qué frase encaja mejor?', options: ['Si bien la facturación haya bajado, el negocio es rentable.', 'Si bien la facturación ha bajado, el negocio es rentable.', 'Por mucho que la facturación ha bajado, el negocio es rentable.'], answer: 1, why: '«Si bien» + indicativo es formal y correcto. «Si bien» no admite subjuntivo, y «por mucho que» suena enfático y coloquial para un informe.', en: 'Rubén is writing a report for the bank: which sentence fits best?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Muy o mucho? ¿Indicativo o subjuntivo? Muy or mucho?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿la palabra (muy / mucho), el modo o el conector?', self: 'Lee cada frase y piensa qué falla: ¿muy o mucho, el modo o el conector? Después toca para ver la corrección. (What’s wrong: muy/mucho, the mood or the connector?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Por mucho cansada que estés, tienes que venir.', right: 'Por muy cansada que estés, tienes que venir.', why: 'Con un adjetivo va «muy». «Mucho» va con verbos y nombres. (Adjectives take “muy”.)' },
            { wrong: 'Por muy dinero que nos ofrezcan, no vendemos.', right: 'Por mucho dinero (por más dinero) que nos ofrezcan, no vendemos.', why: 'Con un nombre va «mucho/a/os/as» o «más», nunca «muy».' },
            { wrong: 'Por mucho paciencia que tengas, este horno te agota.', right: 'Por mucha paciencia que tengas, este horno te agota.', why: '«Mucho» concuerda con el nombre: la paciencia → mucha.' },
            { wrong: 'Por mucho que me insistes mañana, no firmaré.', right: 'Por mucho que me insistas mañana, no firmaré.', why: 'Es una posibilidad futura: subjuntivo. El indicativo solo encaja con un hecho real.' },
            { wrong: 'Si bien la oferta sea buena, no la acepto.', right: 'Si bien la oferta es buena, no la acepto.', why: '«Si bien» va siempre con indicativo.' },
            { wrong: 'Por más que insistas, pero no vendo.', right: 'Por más que insistas, no vendo.', why: 'Como con «aunque», el resultado no lleva «pero».' },
            { wrong: 'A pesar que trabajamos mucho, ganamos poco.', right: 'A pesar de que trabajamos mucho, ganamos poco.', why: '«A pesar que» se oye en muchas zonas, pero la norma culta pide «a pesar de que».' },
            { wrong: 'Aún sabiéndolo, no dijo nada.', right: 'Aun sabiéndolo, no dijo nada.', why: '«Aun» = incluso, sin tilde. «Aún» con tilde = todavía.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Por muy ___ que sean los cruasanes de la cadena, no saben como los nuestros.', options: ['baratos', 'baratas', 'mucho baratos'], answer: 0, why: 'Por muy + adjetivo, y el adjetivo concuerda con «los cruasanes»: baratos.', en: 'However cheap the chain’s croissants are, they don’t taste like ours.' },
            { prompt: 'Lola sigue amasando a mano, ___ sabiendo que la máquina es más rápida.', options: ['aunque', 'aun', 'aún'], answer: 1, why: 'Aun + gerundio = incluso sabiendo. Sin tilde, porque significa «incluso».', en: 'Lola still kneads by hand, even though she knows the machine is faster.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una cosa que no haría por mucho dinero que le ofrecieran y una costumbre que mantiene por muy cansado que esté.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'A la hora de cerrar', coach: 'Toca cada concesión marcada. Tap each marked concession.',
      steps: [
        { title: 'En la panadería · At the bakery', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rubén y tu alumno es Lola. Después tu alumno toca cada expresión marcada y explica el modo del verbo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa: ¿hecho afirmado, posibilidad, intensidad o registro formal? (Tap each marked phrase and think about why it is used.)' } },
          { kind: 'explore', title: 'La oferta sube otra vez', setting: 'Son las ocho de la tarde. Lola y Rubén limpian la panadería después de cerrar. Se tratan de tú. (Eight in the evening: Lola and her son Rubén clean up after closing.)', lines: [
            { who: 'Rubén', text: 'Mamá, ha vuelto a llamar el señor de la cadena. Suben la oferta otra vez.', en: 'Mum, the man from the chain called again. They’re raising their offer once more.' },
            { who: 'Lola', text: '[[Por mucho que la suban|orange]], no vendo. Esta panadería la abrió tu abuelo.', en: 'However much they raise it, I’m not selling. Your grandfather opened this bakery.' },
            { who: 'Rubén', text: 'Ya lo sé. Pero [[a pesar de que trabajamos doce horas al día|blue]], este año hemos ganado menos.', en: 'I know. But even though we work twelve hours a day, we’ve earned less this year.' },
            { who: 'Lola', text: '[[Si bien hemos ganado menos|violet]], no hemos perdido dinero. Lo dijo Nieves.', en: 'Granted, we’ve earned less, but we haven’t lost money. Nieves said so.' },
            { who: 'Rubén', text: '¿Y el horno? [[Por más que lo arreglamos|blue]], se estropea cada dos meses.', en: 'And the oven? No matter how often we fix it, it breaks down every two months.' },
            { who: 'Lola', text: '[[Por muy viejo que sea|teal]], ese horno hace el mejor pan del barrio.', en: 'Old as it may be, that oven makes the best bread in the neighbourhood.' },
            { who: 'Rubén', text: 'Mamá, [[por mucha nostalgia que tengas|teal]], los números son los números.', en: 'Mum, however nostalgic you feel, numbers are numbers.' },
            { who: 'Lola', text: 'Pues yo quiero seguir, [[aun sabiendo|violet]] lo que nos cuesta. ¿No hay otra salida?', en: 'Well, I want to carry on, even knowing what it costs us. Isn’t there another way out?' },
            { who: 'Rubén', text: 'Quizá sí: no les vendemos la panadería, pero les vendemos pan cada mañana. [[Aun cuando nos paguen poco por barra|violet]], es un ingreso fijo.', en: 'Maybe: we don’t sell them the bakery, but we sell them bread every morning. Even if they pay us little per loaf, it’s a steady income.' },
            { who: 'Lola', text: 'Eso ya me gusta más. [[A pesar de que sean una cadena|orange]], si respetan nuestra receta, lo hablamos.', en: 'Now that I like better. Chain or no chain, if they respect our recipe, we can talk.' },
            { who: 'Rubén', text: 'Mañana llamo a Nieves. Y el horno nuevo lo pedimos este año, [[por más que te cueste despedirte del viejo|orange]].', en: 'I’ll call Nieves tomorrow. And we order the new oven this year, however hard it is for you to say goodbye to the old one.' },
            { who: 'Lola', text: 'Del viejo no me despido: lo pongo en el escaparate.', en: 'I’m not saying goodbye to the old one: I’ll put it in the shop window.' },
          ], notes: {
            'Por mucho que la suban': 'Concesiva intensiva con subjuntivo: Lola no sabe cuánto subirán la oferta. Cualquier cantidad: no vende. «La» = la oferta.',
            'a pesar de que trabajamos doce horas al día': 'Indicativo: Rubén afirma un hecho real que su madre vive cada día. Lo pone sobre la mesa como argumento.',
            'Si bien hemos ganado menos': '«Si bien» + indicativo: Lola concede el dato de Rubén (es verdad) y pasa a lo importante. Suena algo más cuidado, como si citara a la asesora.',
            'Por más que lo arreglamos': 'Indicativo tras «por más que»: un hecho real y repetido. Lo han arreglado varias veces de verdad, y el horno se sigue estropeando.',
            'Por muy viejo que sea': 'Por muy + adjetivo + que + subjuntivo. Lola no niega que el horno es viejo: le quita importancia. El adjetivo concuerda con «horno».',
            'por mucha nostalgia que tengas': 'Por mucho + nombre + que: «mucha» concuerda con «la nostalgia». Subjuntivo: Rubén resta valor al sentimiento de su madre.',
            'aun sabiendo': 'Aun + gerundio = incluso sabiendo, aunque sé. «Aun» sin tilde, porque significa «incluso». Aquí va detrás de la idea principal.',
            'Aun cuando nos paguen poco por barra': 'Aun cuando + subjuntivo = incluso si. Todavía no hay precio: es una posibilidad.',
            'A pesar de que sean una cadena': 'Subjuntivo con un dato conocido: Lola sabe que son una cadena, pero en este momento no le da peso. Con «son» lo volvería a afirmar.',
            'por más que te cueste despedirte del viejo': 'Concesiva detrás de la idea principal, como réplica: la decisión primero y, después, el obstáculo que se acepta. Subjuntivo: Rubén reconoce lo que le cuesta a su madre y le quita peso.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no quiere vender Lola?', options: ['Porque la panadería la abrió su padre y quiere seguir.', 'Porque la oferta es muy baja.', 'Porque Nieves le ha prohibido vender.'], answer: 0, why: '«Esta panadería la abrió tu abuelo» y «yo quiero seguir, aun sabiendo lo que nos cuesta».', en: 'Why doesn’t Lola want to sell?' },
            { prompt: '¿Qué problema tiene el horno?', options: ['Hace un pan malo.', 'Se estropea cada dos meses.', 'Es demasiado pequeño.'], answer: 1, why: '«Por más que lo arreglamos, se estropea cada dos meses».', en: 'What is wrong with the oven?' },
            { prompt: '¿Qué solución propone Rubén?', options: ['Vender pan a la cadena cada mañana sin vender la panadería.', 'Vender la panadería y abrir otra.', 'Cerrar los fines de semana.'], answer: 0, why: '«No les vendemos la panadería, pero les vendemos pan cada mañana».', en: 'What solution does Rubén suggest?' },
          ] },
        ] },
        { title: 'Rubén escribe a Nieves · Rubén texts Nieves', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Chat de la noche · Evening chat', lines: [
            { who: 'Rubén', text: 'Nieves, mi madre no vende. ___ le enseñé los números, no cambió de idea.', options: ['Por más que', 'Por muy', 'Si bien que'], answer: 0, why: 'Con un verbo va «por más que»; aquí con indicativo, porque Rubén cuenta un hecho real: se los enseñó.' },
            { who: 'Nieves', text: 'Lo entiendo. ___ la oferta es generosa, el contrato tiene letra pequeña.', options: ['Por muy', 'Aun', 'Si bien'], answer: 2, why: '«Si bien» + indicativo concede un hecho real («es generosa») en un tono profesional.' },
            { who: 'Rubén', text: 'Y el horno… por muy viejo que ___, ella no quiere cambiarlo.', options: ['es', 'será', 'sea'], answer: 2, why: 'Por muy + adjetivo + que va casi siempre con subjuntivo.' },
            { who: 'Nieves', text: 'Quizá haya que pedir un préstamo, no lo sé. Pero aun cuando ___ que pedirlo, el horno nuevo se paga solo en tres años.', options: ['haya', 'hay', 'habría'], answer: 0, why: 'Nieves no sabe si harán falta: aun cuando + subjuntivo = incluso si.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué no venderías tú, por mucho que te ofrecieran?». Tu alumno responde con una frase completa y una razón.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Modo, intensidad y registro. Mood, intensity and register.',
      steps: [
        { title: 'La semana en la panadería · The week at the bakery', blocks: [
          { kind: 'choice', items: [
            { context: 'Nadie sabe si la harina subirá el mes que viene.', prompt: 'Por mucho que ___ la harina, no subiremos el pan este mes.', options: ['sube', 'subirá', 'suba'], answer: 2, why: 'Posibilidad no confirmada: por mucho que + subjuntivo. El futuro la afirmaría.', en: 'However much flour goes up, we won’t raise the price of bread this month.' },
            { context: 'Rubén describe el local en un correo a un cliente.', prompt: 'Si bien el local ___ pequeño, cabe una mesa para desayunar.', options: ['es', 'sea', 'fuera'], answer: 0, why: '«Si bien» solo admite indicativo: concede un hecho real.', en: 'Although the shop is small, there is room for a breakfast table.' },
            { prompt: 'Por ___ temprano que abramos, siempre hay cola en la puerta.', options: ['muy', 'mucho', 'tan'], answer: 0, why: '«Temprano» es un adverbio: por muy + adverbio + que. «Tan» no forma esta estructura.', en: 'However early we open, there is always a queue at the door.' },
            { prompt: 'Por ___ ofertas que nos manden, la receta no se vende.', options: ['mucho', 'muy', 'muchas'], answer: 2, why: 'Con un nombre en plural femenino: por muchas ofertas que.', en: 'However many offers they send us, the recipe is not for sale.' },
            { context: 'Rubén lo escribe en un informe para el banco.', prompt: '___ el local necesita reformas, la panadería tiene una clientela fiel.', options: ['Por mucho que', 'Por muy', 'Si bien'], answer: 2, why: 'Un informe pide registro formal y el dato es real: si bien + indicativo. «Por mucho que» pediría otra intención («da igual cuánto»).', en: 'While the premises need refurbishing, the bakery has loyal customers.' },
          ] },
        ] },
        { title: '¿Muy, mucho o mucha? · Muy, mucho or mucha?', blocks: [
          { kind: 'classify', title: '¿Qué palabra completa la frase? · Which word completes the sentence?', categories: [
            { id: 'adj', label: 'MUY · adjetivo o adverbio (por muy lejos que…)', tone: 'teal' },
            { id: 'noun', label: 'MUCHO/A/OS/AS · nombre (por mucha harina que…)', tone: 'orange' },
            { id: 'verb', label: 'MUCHO · verbo (por mucho que madrugue…)', tone: 'blue' },
          ], items: [
            { text: 'Por ___ lejos que viva, la señora Paz viene cada domingo a por pan.', answer: 'adj', why: '«Lejos» es un adverbio: por muy lejos que.' },
            { text: 'Por ___ que madrugue, Rubén nunca llega antes que su madre.', answer: 'verb', why: 'Va directamente con el verbo: por mucho que madrugue.' },
            { text: 'Por ___ clientes nuevos que lleguen, no cambiamos la receta.', answer: 'noun', why: 'Nombre masculino plural: por muchos clientes que.' },
            { text: 'Por ___ amable que sea el comprador, Lola no se fía.', answer: 'adj', why: '«Amable» es un adjetivo: por muy amable que.' },
            { text: 'Por ___ que les expliquemos el truco, no les saldrá igual.', answer: 'verb', why: 'Va con el verbo «expliquemos»: por mucho que.' },
            { text: 'Por ___ prisa que tenga el cliente, el pan necesita sus horas.', answer: 'noun', why: 'Nombre femenino: por mucha prisa que.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si bien el horno funcione, gasta demasiada luz.', ok: false, options: ['Si bien el horno funcionará, gasta demasiada luz.', 'Si bien el horno funcionaría, gasta demasiada luz.', 'Si bien el horno funciona, gasta demasiada luz.'], answer: 2, why: '«Si bien» concede un hecho real: indicativo presente, funciona.' },
            { sentence: 'Por mucho que nos insistan, no firmaremos este mes.', ok: true, why: 'Correcta: posibilidad futura con por mucho que + subjuntivo.' },
            { sentence: 'A pesar que la cadena es grande, la panadería tiene clientes fieles.', ok: false, options: ['Pese la cadena es grande, la panadería tiene clientes fieles.', 'A pesar de que la cadena es grande, la panadería tiene clientes fieles.', 'A pesar de la cadena es grande, la panadería tiene clientes fieles.'], answer: 1, why: 'La forma normativa es «a pesar de que» + verbo conjugado. «A pesar de» sin «que» solo va con nombre o infinitivo.' },
            { sentence: 'Por mucho barata que sea la masa industrial, no sabe igual.', ok: false, options: ['Por muy barata que es la masa industrial, pero no sabe igual.', 'Por muy barata que sea la masa industrial, no sabe igual.', 'Por mucha barata que sea la masa industrial, no sabe igual.'], answer: 1, why: '«Barata» es un adjetivo: por muy + adjetivo + que + subjuntivo, sin «pero».' },
            { sentence: 'Aun cuando nos ofrecieran el doble, Lola no vendería.', ok: true, why: 'Correcta: aun cuando + imperfecto de subjuntivo con condicional, una hipótesis poco probable (como en la clase 131).' },
            { sentence: 'Por más que se lo explicamos, el comprador no entendió lo de la masa madre.', ok: true, why: 'Correcta: un hecho real y pasado (se lo explicaron), así que el indicativo es posible tras «por más que».' },
          ] },
        ] },
        { title: 'Mensajes con la cadena · Messages with the chain', blocks: [
          { kind: 'chat-fill', title: 'Correo y respuesta · Email and reply', lines: [
            { who: 'Sr. Ibarra', text: 'Señora Robles, ___ entendemos su apego a la panadería, nuestra oferta es la mejor del mercado.', options: ['por mucho', 'aun', 'si bien'], answer: 2, why: 'Concesión formal de un hecho real («entendemos»): si bien + indicativo.' },
            { who: 'Lola', text: 'Se lo agradezco, pero por mucho que ___ la oferta, la receta no está en venta.', options: ['mejorarían', 'mejoren', 'mejoran'], answer: 1, why: 'Una posibilidad: por mucho que + subjuntivo.' },
            { who: 'Sr. Ibarra', text: '¿Y si mantenemos el nombre? Por muy ___ que sea su marca, la podemos cuidar.', options: ['mucho especial', 'especiales', 'especial'], answer: 2, why: 'Por muy + adjetivo; «especial» concuerda con «su marca» (singular).' },
            { who: 'Lola', text: 'Prefiero venderles pan cada mañana, ___ ganemos un poco menos.', options: ['si bien', 'por muy', 'aun cuando'], answer: 2, why: '«Ganemos» es subjuntivo y habla de una posibilidad: aun cuando = incluso si. «Si bien» pediría indicativo.' },
            { who: 'Sr. Ibarra', text: 'Lo consultaré. ___ no es lo que buscábamos, la idea me parece interesante.', options: ['A pesar de que', 'Por mucho que', 'Aun'], answer: 0, why: 'Un hecho que afirma («no es lo que buscábamos»): a pesar de que + indicativo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Lola', 'abre', 'a', 'las', 'seis,', 'por', 'muy', 'cansada', 'que', 'esté'], accept: ['Lola abre a las seis, por muy cansada que esté'], en: 'Lola opens at six, however tired she is.' },
            { tiles: ['Por', 'más', 'dinero', 'que', 'nos', 'ofrezcan,', 'no', 'vendemos'], accept: ['Por más dinero que nos ofrezcan, no vendemos'], en: 'However much money they offer us, we are not selling.' },
            { tiles: ['Si', 'bien', 'el', 'horno', 'es', 'viejo,', 'el', 'pan', 'sale', 'perfecto'], accept: ['Si bien el horno es viejo, el pan sale perfecto'], en: 'Although the oven is old, the bread comes out perfect.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Del «aunque» a otros conectores · From aunque to other connectors', items: [
            { prompt: 'Aunque insistas mucho, no voy a cambiar la receta.', instruction: 'Empieza con «Por mucho que…».', accept: ['Por mucho que insistas, no voy a cambiar la receta', 'Por mucho que insistas, no cambiaré la receta'] },
            { prompt: 'Aunque la oferta sea muy buena, no la aceptamos.', instruction: 'Empieza con «Por muy…».', accept: ['Por muy buena que sea la oferta, no la aceptamos', 'Por muy buena que sea, no aceptamos la oferta'] },
            { prompt: 'Las ventas han bajado. Aun así, la panadería da beneficios.', instruction: 'Une las dos ideas en una frase formal con «Si bien».', accept: ['Si bien las ventas han bajado, la panadería da beneficios', 'La panadería da beneficios, si bien las ventas han bajado'] },
            { prompt: 'Rubén sabía que su madre diría que no. Aun así, se lo preguntó.', instruction: 'Una sola frase. Empieza con «Aun sabiendo…».', accept: ['Aun sabiendo que su madre diría que no, Rubén se lo preguntó', 'Aun sabiendo que su madre iba a decir que no, Rubén se lo preguntó', 'Aun sabiendo que su madre diría que no, se lo preguntó'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta algo que no le sale por más que lo intenta y algo que hace siempre, por muy ocupado que esté.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de la asesora', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El buzón de voz de Lola · Lola’s voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada concesión y dice si es formal, intensiva o neutra. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada concesión: ¿formal, intensiva o neutra? Vas a oír «cláusula» (clause, in a contract). (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Nieves', channel: 'BUZÓN DE VOZ · DE NIEVES PRADO PARA LOLA', src: '/audio/grammar-live/438.mp3',
            before: 'Nieves, la asesora, ha revisado los números de la panadería y el contrato de la cadena. Le deja un mensaje a Lola. ¿Qué crees que le recomienda: vender, no vender, esperar…? (Nieves, the accountant, leaves Lola a message. What do you think she recommends?)',
            gist: { prompt: '¿Para qué llama Nieves? · Why does Nieves call?', options: ['Para pedirle a Lola que venda la panadería.', 'Para cancelar una reunión con la cadena.', 'Para darle su opinión sobre la oferta, el contrato y el horno.'], answer: 2, why: 'Resume los números, critica una cláusula, apoya la idea de vender pan y habla del horno.', en: 'She gives Lola her professional view on the offer, the contract and the oven.' },
            details: [
              { prompt: '¿Cómo va económicamente la panadería?', options: ['Gana más que nunca.', 'Las ventas bajaron un poco, pero sigue dando beneficios.', 'Pierde dinero desde hace un año.'], answer: 1, why: '«Si bien las ventas bajaron un poco este año, la panadería sigue dando beneficios».', en: 'How is the bakery doing financially?' },
              { prompt: '¿Qué no le gusta a Nieves del contrato?', options: ['Que la cadena paga en diez años.', 'Que la cadena cambiaría el nombre.', 'Que Lola no podría abrir otra panadería en cinco años.'], answer: 2, why: '«Usted no podría abrir otra panadería en cinco años».', en: 'What does Nieves dislike about the contract?' },
              { prompt: '¿Qué opina de venderle pan a la cadena?', options: ['Que es arriesgado.', 'Que solo tiene sentido si pagan el doble.', 'Que es sensato: es un ingreso seguro aunque paguen algo menos.'], answer: 2, why: '«Me parece muy sensata: aun cuando paguen un poco menos por barra, es un ingreso seguro».', en: 'What does she think about selling bread to the chain?' },
              { prompt: '¿Qué recomienda hacer con el horno?', options: ['Arreglarlo otra vez.', 'Venderlo a la cadena.', 'Cambiarlo este año, porque gasta muchísima luz.'], answer: 2, why: '«Por muy bien que funcione todavía, gasta muchísima luz… yo lo cambiaría este año».', en: 'What does she recommend doing with the oven?' },
            ],
            transcript: 'Buenos días, doña Lola, le habla Nieves Prado, de la asesoría. Ya revisé los números que me mandó Rubén y le resumo lo importante. [[Si bien las ventas bajaron un poco este año|violet]], la panadería sigue dando beneficios, así que no tiene ninguna obligación de vender. [[A pesar de que la oferta parece generosa|blue]], el contrato tiene una cláusula que no me gusta nada: usted no podría abrir otra panadería en cinco años. Así que, [[por mucho que le insistan|orange]], no firme nada hasta que lo leamos juntas. Sobre la idea de venderles pan cada mañana, me parece muy sensata: [[aun cuando paguen un poco menos por barra|violet]], es un ingreso seguro. Y el horno… [[por muy bien que funcione todavía|teal]], gasta muchísima luz. [[Aun sabiendo|violet]] que le tiene mucho cariño, yo lo cambiaría este año. Llámeme cuando pueda; mañana estoy en la oficina toda la mañana. Que tenga muy buen día.',
            reply: { teacher: 'Tú eres Nieves. Tu alumno es Lola y le devuelve la llamada: concede lo que dice Nieves con «si bien» o «a pesar de que» y defiende su postura con «por mucho que» o «por muy… que».', self: 'Devuelve la llamada como Lola, en voz alta: concede algo con «si bien» o «a pesar de que» y defiende tu postura con «por mucho que» o «por muy… que». (Call Nieves back as Lola.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Mantener tu postura', coach: 'Concede y no cedas. Concede, but don’t give in.',
      steps: [
        { title: 'Decisiones firmes · Firm decisions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales. Si confunde «muy» y «mucho» o el modo, tú repites la frase corregida y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Usa al menos dos conectores distintos en cada respuesta. (Answer aloud, using at least two different connectors.)' } },
          { kind: 'talk', cards: [
            { q: '¿Alguna vez alguien insistió mucho para que cambiaras una decisión? ¿Qué pasó? · Did anyone ever push you hard to change a decision?', followUps: ['¿Quién insistía más? (Who pushed hardest?)', '¿Hoy tomarías la misma decisión?'], phrases: ['[[Por más que me insistieron|blue]], …', '[[A pesar de que todos me decían|blue]] que…, …', '[[Aun sabiendo|violet]] que…, …'], hint: 'Es un hecho real y pasado: por más que / a pesar de que + indicativo.', example: 'Cuando dejé mi trabajo en el banco, todos me dijeron que era una locura. Por más que me insistieron, no cambié de idea. Aun sabiendo que iba a ganar menos, quería dedicarme a la música.', next: 'Ahora, tus límites.' },
            { q: '¿Qué no harías nunca, por mucho dinero que te ofrecieran? · What would you never do, however much money you were offered?', followUps: ['¿Y por mucho que te lo pidiera un amigo?', '¿Hay algo que antes no hacías y ahora sí?'], phrases: ['[[Por mucho dinero que me ofrezcan|teal]], nunca…', '[[Por mucho que me lo pidan|orange]], no…', '[[Aun cuando me pagaran|violet]] el doble, …'], hint: 'Posibilidad: subjuntivo. Si imaginas algo poco probable, también imperfecto + condicional.', example: 'Por mucho dinero que me ofrezcan, nunca vendería la casa de mis abuelos. Aun cuando me pagaran el doble, no trabajaría de noche.' },
            { q: 'Eres Lola. El señor Ibarra, de la cadena, te llama otra vez. Responde con educación y firmeza. · You are Lola: answer the buyer politely but firmly.', followUps: ['¿Y si mantienen el nombre de la panadería?', '¿Qué les ofreces a cambio?'], phrases: ['[[Si bien|violet]] entiendo que…, …', '[[Por muy|teal]] … que sea su oferta, …', '[[A pesar de que|blue]] …, …'], hint: 'Registro formal y de usted: si bien + indicativo; por muy… que + subjuntivo.', example: 'Señor Ibarra, si bien entiendo que su empresa quiera crecer, la panadería no está en venta. Por muy generosa que sea su oferta, la receta es de mi familia. Eso sí, podemos venderles pan cada mañana.', teacher: 'Tú haces de señor Ibarra e insistes con argumentos nuevos («le pagamos más», «no tendrá que madrugar»). Tu alumno concede cada uno y mantiene su respuesta.' },
            { q: '¿Hay algo que no te sale por más que lo intentas? · Is there something you can’t manage, however hard you try?', followUps: ['¿Qué has probado ya?', '¿Vas a seguir intentándolo?'], phrases: ['[[Por más que lo intento|blue]], no…', '[[Por mucho que practico|blue]], …', '[[Si bien|violet]] he mejorado, …'], hint: 'Un hecho real y repetido: por más que + indicativo.', example: 'Por más que lo intento, no consigo dormir antes de medianoche. Si bien he dejado el café por la tarde, sigo despierto hasta tarde.' },
            { q: 'Un amigo está agotado y quiere dejar algo importante (un curso, un deporte, un proyecto). Anímalo. · Encourage a tired friend not to give up.', followUps: ['¿Y si de verdad necesita descansar?', '¿Dónde pondrías el límite?'], phrases: ['[[Por muy cansado que estés|teal]], …', '[[Por mucho que te cueste|orange]], …', '[[A pesar de que|blue]] … , …'], hint: 'Por muy + adjetivo + que + subjuntivo; el adjetivo concuerda con tu amigo o tu amiga.', example: 'Por muy cansada que estés, te quedan solo dos meses de curso. Por mucho que te cueste, piensa en lo que has conseguido. Eso sí, si te encuentras mal, para una semana.', next: 'Por último, un debate.' },
            { q: 'Debate: ¿es mejor comprar en tiendas de barrio o en grandes cadenas? · Debate: local shops or big chains?', followUps: ['¿Dónde compras tú el pan?', '¿Qué perdería tu barrio sin sus tiendas?'], phrases: ['[[Si bien|violet]] las cadenas son más baratas, …', '[[A pesar de que|blue]] …, …', '[[Por más ofertas que hagan|teal]], …'], hint: 'Concede el argumento contrario y después defiende el tuyo.', example: 'Si bien las cadenas son más baratas, prefiero las tiendas de barrio. A pesar de que pago un poco más, conozco a la gente y sé de dónde viene lo que como. Por más ofertas que hagan, el pan de la cadena no sabe igual.', teacher: 'Tú defiendes la postura contraria. Tu alumno concede cada argumento tuyo con un conector distinto antes de responder.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («por mucho cansado que estés»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Rechazar una oferta con elegancia', coach: 'Concede, mantén y propone. Concede, hold firm, propose.',
      steps: [
        { title: 'Un correo formal · A formal email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿qué modo lleva y por qué? ¿Encaja en un correo formal? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada conector: ¿qué modo lleva y por qué? (Check each connector and its mood.)' } },
          { kind: 'write', title: 'Gracias, pero no · Thanks, but no', situation: 'Eres Lola (o eres tú, ante una propuesta real que quieres rechazar: un trabajo, una compra, un cambio). Escribe un correo formal a la persona que te hizo la oferta: reconoce lo positivo, explica por qué no aceptas y propón una alternativa. (You are Lola, or yourself: write a formal email turning down an offer, acknowledging its good points and proposing an alternative.)', task: [
            'Agradece la oferta y concede algo positivo con «si bien» o «a pesar de que» + indicativo.',
            'Rechaza la oferta con firmeza: «por mucho que…» o «por mucho/a + nombre + que…».',
            'Usa «por muy + adjetivo + que» para quitar peso a una ventaja.',
            'Propón una alternativa con «aun cuando…» o «aun + gerundio».',
            'Cierra con una fórmula formal (Quedo a la espera de su respuesta. Atentamente…).',
          ], starters: ['Estimado señor…:', 'Le agradezco…', 'Si bien su propuesta es…,', 'A pesar de que…,', 'Por mucho que…,', 'Por muy… que sea…,', 'Aun cuando…,', 'Aun sabiendo que…,', 'Quedo a la espera de su respuesta.'],
            words: ['si bien', 'a pesar de que', 'por mucho que', 'por más que', 'por muy… que', 'aun cuando', 'aun sabiendo', 'sin embargo', 'propuesta', 'atentamente'],
            model: 'Estimado señor Ibarra: Le agradezco su interés por la Panadería Robles y la nueva oferta que nos envió el lunes. [[Si bien la propuesta es generosa|violet]], he decidido no vender. [[A pesar de que este año las ventas han bajado|blue]], el negocio sigue siendo rentable, y mi familia quiere continuar. [[Por mucho que mejoren las condiciones|orange]], la receta de mi padre no está en venta: [[por muy moderna que sea su masa|teal]], no tendría el mismo sabor. Sin embargo, mi hijo Rubén y yo estaríamos dispuestos a venderles pan cada mañana, [[aun cuando el precio por barra sea más bajo|violet]] que el de nuestra tienda. [[Aun sabiendo|violet]] que no es lo que ustedes buscaban, creo que puede ser un buen acuerdo para los dos. Quedo a la espera de su respuesta. Atentamente, Lola Robles.',
            minWords: 110,
            checks: [
              { label: 'Una concesión neutra o formal (a pesar de que, si bien, aun cuando, pese a que)', pattern: '(?<!\\p{L})(?:a\\s+pesar\\s+de\\s+que|pese\\s+a\\s+que|si\\s+bien|aun\\s+cuando)(?!\\p{L})', tip: 'Concede un hecho con «Si bien su propuesta es…» o «A pesar de que…».' },
              { label: 'Una concesión intensiva (por mucho que, por más que, por muy… que)', pattern: '(?<!\\p{L})por\\s+(?:mucho|mucha|muchos|muchas|más|muy)\\s+(?:\\p{L}+\\s+){0,2}?que(?!\\p{L})', tip: 'Mantén tu decisión con «Por mucho que…», «Por más dinero que…» o «Por muy… que sea…».' },
              { label: 'Aun + gerundio (aun sabiendo, aun teniendo…)', pattern: '(?<!\\p{L})aun\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', tip: 'Añade una concesión breve: «Aun sabiendo que…», «Aun teniendo en cuenta que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+pesar\\s+que(?!\\p{L})', why: 'En un texto formal escribe **a pesar de que**: «a pesar que» se oye, pero la norma culta pide «de».' },
              { pattern: '(?<!\\p{L})si\\s+bien\\s+(?:\\p{L}+\\s+){0,3}?(?:sea|sean|haya|hayan|tenga|tengan|esté|estén|pueda|puedan)(?!\\p{L})', why: '**Si bien** va con indicativo: «si bien la propuesta **es** generosa», no «sea».' },
              { pattern: '(?<!\\p{L})por\\s+mucho\\s+(?:cansado|cansada|caro|cara|bueno|buena|generoso|generosa|moderno|moderna|difícil|grande|interesante)(?!\\p{L})', why: 'Con un adjetivo va **muy**: «por **muy** generosa que sea».' },
              { pattern: '(?<!\\p{L})aún\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', why: 'Si quieres decir «incluso», escribe **aun** sin tilde: «aun sabiendo». «Aún» con tilde significa «todavía».' },
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
            { tone: 'blue', label: 'HECHO AFIRMADO', formula: 'a pesar de que / por más que + indicativo', example: 'A pesar de que trabajamos doce horas, ganamos menos.', caption: 'cuentas un obstáculo real', en: 'a real obstacle you state as fact; por más que + indicative for something real and repeated' },
            { tone: 'orange', label: 'DA IGUAL CUÁNTO', formula: 'por mucho que / por más que + subjuntivo', example: 'Por mucho que suban la oferta, no vendo.', caption: 'ninguna cantidad cambia el resultado', en: 'no amount changes the result; also a pesar de que + subjunctive for a possibility' },
            { tone: 'teal', label: 'INTENSIDAD', formula: 'por mucho/a + nombre + que · por muy + adjetivo + que', example: 'Por muy viejo que sea, ese horno hace el mejor pan.', caption: '«mucho» concuerda con el nombre; «muy» con adjetivos', en: 'mucho agrees with the noun; muy goes with adjectives and adverbs, usually with the subjunctive' },
            { tone: 'violet', label: 'REGISTRO FORMAL', formula: 'si bien + indicativo · aun cuando + subj. / ind. · aun + gerundio', example: 'Si bien hemos ganado menos, no hemos perdido dinero.', caption: 'informes, correos formales, discursos', en: 'formal register: si bien only with the indicative; aun cuando = even if / even though' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Hazte tres preguntas. **¿Hecho o posibilidad?** Hecho que afirmas → indicativo; posibilidad o dato sin peso → subjuntivo. **¿Cantidad o cualidad?** Verbo o nombre → **por mucho (que)**; adjetivo o adverbio → **por muy… que**. **¿Qué registro?** En un correo formal, **si bien**, **aun cuando** y **aun + gerundio**. Y nunca «pero» delante del resultado.', en: 'Ask yourself three questions. Fact or possibility? A fact you state takes the indicative; a possibility or a dismissed fact takes the subjunctive. Quantity or quality? With a verb or noun use “por mucho (que)”; with an adjective or adverb, “por muy… que”. Which register? In a formal email, “si bien”, “aun cuando” and “aun + gerund”. And never put “pero” before the result.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Por ___ que corras, no vas a llegar al tren de las ocho.', options: ['mucho', 'muy', 'mucha'], answer: 0, why: 'Con un verbo: por mucho que, invariable.', en: 'However fast you run, you won’t catch the eight o’clock train.' },
            { prompt: 'Si bien el examen ___ difícil, aprobé con buena nota.', options: ['fuera', 'sea', 'fue'], answer: 2, why: '«Si bien» + indicativo: un hecho real y pasado.', en: 'Although the exam was hard, I passed with a good mark.' },
            { prompt: 'Por ___ paciencia que tenga, mi vecino ya no aguanta el ruido de la obra.', options: ['muy', 'mucha', 'mucho'], answer: 1, why: 'Nombre femenino: por mucha paciencia que.', en: 'However patient he is, my neighbour can no longer stand the building noise.' },
            { context: 'Todavía no saben qué tiempo hará el sábado.', prompt: 'Aun cuando ___ el sábado, la boda será en el jardín.', options: ['llueve', 'llovió', 'llueva'], answer: 2, why: 'Posibilidad futura: aun cuando + subjuntivo = incluso si llueve.', en: 'Even if it rains on Saturday, the wedding will be in the garden.' },
            { prompt: 'Mi abuela, ___ teniendo noventa años, todavía cocina para toda la familia.', options: ['aunque', 'aun', 'aún'], answer: 1, why: 'Aun + gerundio = incluso teniendo. Sin tilde.', en: 'Even at ninety, my grandmother still cooks for the whole family.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una maratón. Now, a marathon.', blocks: [
          { kind: 'lead', text: 'Marina prepara su tercera maratón. Su entrenador le habla con frases con «aunque». Reformúlalas con los conectores de hoy.', en: 'Marina is training for her third marathon. Her coach uses sentences with “aunque”. Rephrase them with today’s connectors.' },
          { kind: 'rewrite', title: 'La maratón de Marina · Marina’s marathon', items: [
            { prompt: 'Aunque entrenes mucho, no vas a bajar de cuatro horas este año.', instruction: 'Empieza con «Por mucho que…» o «Por más que…».', accept: ['Por mucho que entrenes, no vas a bajar de cuatro horas este año', 'Por más que entrenes, no vas a bajar de cuatro horas este año'] },
            { prompt: 'Aunque el recorrido sea muy duro, Marina lo termina cada año.', instruction: 'Empieza con «Por muy…».', accept: ['Por muy duro que sea el recorrido, Marina lo termina cada año', 'Por más duro que sea el recorrido, Marina lo termina cada año'] },
            { prompt: 'Marina sabía que iba a llover. Aun así, salió a correr.', instruction: 'Una sola frase. Empieza con «Aun sabiendo…».', accept: ['Aun sabiendo que iba a llover, Marina salió a correr', 'Aun sabiendo que llovería, Marina salió a correr', 'Aun sabiendo que iba a llover, salió a correr'] },
          ] },
        ] },
        { title: 'Ampliación · Así me lo pidan, mal que me pese · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: dos concesiones de registro especial. **Así + subjuntivo** («así me lo pidan de rodillas») equivale a «aunque, por mucho que»; es literaria o enfática y en algunos países de América también se oye en la conversación. **Mal que me pese** es una fórmula fija: «aunque me disguste admitirlo». El pronombre cambia: mal que **te / le / nos / les** pese.', en: 'For strong students or spare time: two special-register concessions. “Así + subjunctive” (“así me lo pidan de rodillas” = even if they beg me on their knees) is literary or emphatic, and in some Latin American countries it is also heard in conversation. “Mal que me pese” is a fixed phrase meaning “much as I hate to admit it”; the pronoun changes with the person.' },
          { kind: 'choice', title: 'Registro especial · Special register', items: [
            { prompt: '«No pienso firmar ese contrato, así me lo pidan de rodillas». ¿Qué significa «así» aquí?', options: ['De esta manera me lo piden de rodillas.', 'Porque me lo piden de rodillas.', 'Incluso si me lo piden de rodillas.'], answer: 2, why: '«Así» + subjuntivo es concesivo: «aunque / por mucho que me lo pidan».', en: 'What does “así” mean here?' },
            { prompt: '¿Qué forma sigue a este «así» concesivo?', options: ['El subjuntivo: así me lo pidan, así llueva.', 'El indicativo: así me lo piden.', 'El infinitivo: así pedírmelo.'], answer: 0, why: 'Con indicativo, «así» vuelve a significar «de esta manera». El valor concesivo pide subjuntivo.', en: 'Which form follows concessive “así”?' },
            { prompt: '«Mal que me pese, Rubén tiene razón: el horno está viejo». ¿Qué expresa Lola?', options: ['Que Rubén se equivoca.', 'Que le disgusta admitirlo, pero lo admite.', 'Que el horno pesa demasiado.'], answer: 1, why: '«Mal que me pese» = aunque me disguste: concede algo que no le gusta reconocer.', en: 'What does Lola express?' },
            { prompt: 'Mal que ___ pese a la dirección, los datos son claros.', options: ['le', 'me', 'les'], answer: 0, why: 'El pronombre se refiere a «la dirección» (singular): mal que le pese.', en: 'Much as management may dislike it, the figures are clear.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe una promesa exagerada con «así» + subjuntivo y una confesión con «mal que me pese».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 139 · Temporales con subjuntivo para futuro incierto', text: 'Ya mantienes una decisión con «por mucho que insistas» o «aun cuando suban los precios»: el subjuntivo marca lo que todavía no es real. En la clase 139 aplicas esa misma lógica al tiempo: «**cuando** tengamos el horno nuevo», «**antes de que** llegue la oferta», «**en cuanto** lo sepa». Es el paso natural: del obstáculo posible al momento todavía incierto.', en: 'You can now hold your ground with “por mucho que insistas” or “aun cuando suban los precios”: the subjunctive marks what is not yet real. In class 139 you apply the same logic to time: “when we have the new oven”, “before the offer arrives”, “as soon as I know”. It is the natural next step: from a possible obstacle to a moment that is still uncertain.', href: '/gramatica/temporales-con-subjuntivo-para-futuro-incierto', label: 'Ir a la clase 139' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “por más que lo intento” y “por más que lo intente”?». Respuesta esperada: el indicativo cuenta un hecho real y repetido; el subjuntivo, una posibilidad o un dato al que se quita peso. Tarea: el correo de Escribir sobre una propuesta real.' },
        ] },
      ],
    },
  ],
};
