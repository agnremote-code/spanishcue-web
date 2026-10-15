import type { LiveLesson } from '../types';

/**
 * Lesson 148 · B1 · Presente de subjuntivo.
 * Core: wishes and recommendations (querer / esperar / recomendar que), value
 * judgements (me alegra que, es importante que) and purpose (para que), with
 * the same-subject infinitive as contrast. One story runs through the class:
 * Elena prepares a participatory workshop.
 */
export const lesson: LiveLesson = {
  id: 148,
  level: 'B1',
  title: 'Presente de subjuntivo',
  subtitle: 'Expresar deseos, dar recomendaciones, valorar lo que hacen otros y explicar para qué haces algo.',
  legend: [
    { tone: 'blue', label: 'Deseo, petición o recomendación + que' },
    { tone: 'teal', label: 'Valoración + que' },
    { tone: 'orange', label: 'Finalidad: para que' },
    { tone: 'violet', label: 'Mismo sujeto: infinitivo' },
  ],
  optionNotes: {
    vienes: '«Vienes» es indicativo: afirma un hecho. Después de «quiero que» la acción todavía no es real y va en subjuntivo.',
    vendrás: 'El futuro afirma algo que va a pasar. Después de «quiero que» se usa el subjuntivo.',
    ayudas: '«Ayudas» es indicativo. Después de «para que» se usa el subjuntivo.',
    confirmas: '«Confirmas» es indicativo. Después de «es importante que» se usa el subjuntivo.',
    tiene: '«Tiene» es indicativo. Después de «espero que» se usa el subjuntivo.',
    tener: 'El infinitivo solo se usa si el sujeto es el mismo. Aquí hay otra persona: que + subjuntivo.',
    confirmar: 'El infinitivo solo funciona si hablamos en general o del mismo sujeto. Aquí hay un sujeto concreto: que + subjuntivo.',
    'que yo vaya': 'Si el sujeto es el mismo («yo quiero» → «yo voy»), se usa el infinitivo: «quiero ir».',
    teno: 'La raíz sale de la forma «yo» del presente: tengo → teng- → tenga.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El presente de subjuntivo', coach: 'No afirma un hecho: lo desea, lo valora o lo busca.',
      steps: [
        { title: 'Un hecho o un deseo', blocks: [
          { kind: 'lead', text: 'Elena prepara un taller para su equipo. Algunas frases **informan** de lo que pasa; otras presentan una acción **desde la perspectiva** de alguien: lo que quiere, lo que le parece importante o lo que busca. Para eso, el español usa el **subjuntivo**.' },
          { kind: 'guide', text: { teacher: 'Lean las dos columnas. Pregunta: «¿En cuál de las dos frases sabemos que el equipo ya prueba las herramientas?».', self: 'Lee las dos columnas. ¿En cuál sabemos que el equipo ya prueba las herramientas?' } },
          { kind: 'compare', title: 'La misma acción, dos miradas', columns: [
            { tone: 'neutral', label: 'INDICATIVO · INFORMAR', sentence: 'El equipo **prueba** las herramientas.', idea: 'Un hecho: la frase afirma que pasa.' },
            { tone: 'blue', label: 'SUBJUNTIVO · DESEAR', sentence: 'Elena [[quiere que|blue]] el equipo [[pruebe|blue]] las herramientas.', idea: 'Un deseo de Elena: todavía no sabemos si el equipo lo va a hacer.' },
          ] },
          { kind: 'tip', icon: '🧭', title: 'Dos señales', text: 'Casi siempre hay **dos verbos** y **dos personas distintas**, unidos por **que**: «Elena **quiere** que el equipo **pruebe**». El primer verbo (querer, esperar, alegrar, para…) decide que el segundo vaya en subjuntivo.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase **afirma** un hecho?', options: ['Los participantes traen una pregunta.', 'Elena pide que los participantes traigan una pregunta.'], answer: 0, why: '«Traen» es indicativo: informa de lo que pasa. «Traigan» depende de una petición.' },
            { prompt: '«Espero que todos **entiendan** la actividad.» ¿Sabemos que todos la entienden?', options: ['No, es un deseo.', 'Sí, es un hecho.'], answer: 0, why: 'Después de «espero que», la acción se presenta como deseo, no como hecho.' },
          ] },
        ] },
        { title: 'Formas regulares', mascot: '/brand/mascot/studying.webp', coach: 'Las vocales cambian de lugar.', blocks: [
          { kind: 'concept', tone: 'neutral', label: 'FORMACIÓN', question: '¿Cómo se forma?', formula: ['forma «yo» del presente − o + terminaciones «opuestas»', '-ar → e · -er / -ir → a'],
            meaning: 'Parte de la forma **yo** del presente (hablo, como, vivo), quita la **-o** y añade la vocal «opuesta»: los verbos en **-ar** toman **e**; los verbos en **-er** e **-ir** toman **a**.',
            examples: [
              { es: 'hablo → habl- → [[hable|blue]]' },
              { es: 'como → com- → [[coma|blue]]' },
              { es: 'vivo → viv- → [[viva|blue]]' },
            ] },
          { kind: 'table', title: 'Presente de subjuntivo regular', head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'habl**e**', 'com**a**', 'viv**a**'],
            ['tú', 'habl**es**', 'com**as**', 'viv**as**'],
            ['él / ella / usted', 'habl**e**', 'com**a**', 'viv**a**'],
            ['nosotros / nosotras', 'habl**emos**', 'com**amos**', 'viv**amos**'],
            ['vosotros / vosotras', 'habl**éis**', 'com**áis**', 'viv**áis**'],
            ['ellos / ellas / ustedes', 'habl**en**', 'com**an**', 'viv**an**'],
          ], note: 'La forma de «yo» y la de «él / ella / usted» son iguales. Ojo con la ortografía: buscar → busque, llegar → llegue, empezar → empiece.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Quiero que tú ___ más despacio. (hablar)', options: ['hablas', 'hables', 'hablar'], answer: 1, why: 'hablo → habl- + es: «hables».' },
            { prompt: 'Espero que ustedes ___ bien en el viaje. (comer)', options: ['coman', 'comen', 'comían'], answer: 0, why: 'como → com- + an: «coman».' },
          ] },
        ] },
        { title: 'Formas irregulares', mascot: '/autoestudio/mascot/noting.webp', coach: 'Casi todo sale de la forma «yo».', blocks: [
          { kind: 'table', title: 'Irregulares en la forma «yo» del presente', head: ['presente (yo)', 'raíz', 'subjuntivo'], rows: [
            ['tengo', '**teng-**', 'tenga, tengas, tengamos…'],
            ['digo', '**dig-**', 'diga, digas, digamos…'],
            ['hago', '**hag-**', 'haga, hagas, hagamos…'],
            ['conozco', '**conozc-**', 'conozca, conozcas…'],
            ['traigo', '**traig-**', 'traiga, traigas…'],
            ['salgo / pongo / vengo', '**salg- / pong- / veng-**', 'salga, ponga, venga…'],
          ], note: 'La irregularidad de «yo» pasa a **todas** las personas: «que nosotros **tengamos**».' },
          { kind: 'table', title: 'Cambios de vocal (e → ie, o → ue, e → i)', head: ['infinitivo', 'yo', 'nosotros / nosotras'], rows: [
            ['querer', 'qu**ie**ra', 'queramos'],
            ['poder', 'p**ue**da', 'podamos'],
            ['pedir', 'p**i**da', 'p**i**damos'],
            ['dormir', 'd**ue**rma', 'd**u**rmamos'],
          ], note: 'Como en el presente, «nosotros» y «vosotros» no cambian en -ar y -er. Los verbos en -ir como pedir y dormir mantienen un cambio (i, u).' },
          { kind: 'tip', icon: '⭐', title: 'Seis irregulares especiales', text: '**ser** → sea · **ir** → vaya · **estar** → esté · **haber** → haya · **saber** → sepa · **dar** → dé. Son muy frecuentes: apréndelos de memoria.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Espero que Ana ___ tiempo para venir.', options: ['tiene', 'tenga', 'teno'], answer: 1, why: 'tengo → teng- → «tenga».' },
            { prompt: 'Me alegra que el taller ___ práctico.', options: ['es', 'sea', 'esté'], answer: 1, why: '«Ser» es irregular: «sea». Y «práctico» es una característica, por eso «ser».' },
          ] },
        ] },
        { title: 'Deseos y recomendaciones', mascot: '/brand/mascot/speaking.webp', coach: 'Lo que quieres que hagan otros.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DESEO E INFLUENCIA', question: '¿Qué quieres que haga otra persona?', formula: ['querer / esperar / preferir + que + subjuntivo', 'pedir / recomendar / aconsejar + que + subjuntivo'],
            meaning: 'Una persona proyecta una acción **sobre otra**: la desea, la pide o la recomienda. La acción todavía no es un hecho.',
            examples: [
              { es: 'Elena [[quiere que|blue]] el taller [[sea|blue]] práctico.' },
              { es: '[[Espero que|blue]] todos [[participen|blue]].' },
              { es: '[[Te recomiendo que|blue]] [[traigas|blue]] una pregunta de tu trabajo.' },
              { es: 'La doctora me [[aconseja que|blue]] [[duerma|blue]] más.' },
            ] },
          { kind: 'compare', title: '¿Una persona o dos?', columns: [
            { tone: 'violet', label: 'MISMO SUJETO · INFINITIVO', sentence: 'Yo [[quiero participar|violet]].', idea: 'La persona que quiere y la que participa es la misma: infinitivo.' },
            { tone: 'blue', label: 'OTRO SUJETO · QUE + SUBJUNTIVO', sentence: 'Yo [[quiero que|blue]] tú [[participes|blue]].', idea: 'Yo quiero, pero participas tú: que + subjuntivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Quiero que tú ___ a la reunión.', options: ['vengas', 'vienes', 'vendrás'], answer: 0, why: 'Dos sujetos distintos (yo / tú) después de «querer que»: subjuntivo.' },
            { prompt: 'Yo prefiero ___ en casa esta noche.', options: ['que yo me quede', 'quedarme', 'que me quedo'], answer: 1, why: 'El mismo sujeto (yo prefiero / yo me quedo): infinitivo.' },
          ] },
        ] },
        { title: 'Valorar', mascot: '/brand/mascot/seated.webp', coach: 'Una reacción ante lo que hacen otros.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VALORACIÓN', question: '¿Qué te parece?', formula: ['me alegra / me molesta / me encanta + que + subjuntivo', 'es importante / es mejor / es normal + que + subjuntivo'],
            meaning: 'La acción pasa por el **filtro de una reacción** o una valoración: nos alegra, nos molesta, nos parece importante.',
            examples: [
              { es: '[[Me alegra que|teal]] [[haya|teal]] participantes con experiencias diferentes.' },
              { es: '[[Es importante que|teal]] cada persona [[escuche|teal]] sin interrumpir.' },
              { es: '[[Me molesta que|teal]] la gente [[llegue|teal]] tarde.' },
              { es: '[[Es normal que|teal]] [[estés|teal]] nervioso el primer día.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'En general, infinitivo', text: 'Si hablas **en general**, sin un sujeto concreto, usa el infinitivo: «**Es importante descansar**». Si hablas de alguien concreto: «**Es importante que descanses**».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Es importante que tú ___ la dirección antes de salir.', options: ['confirmes', 'confirmas', 'confirmar'], answer: 0, why: '«Es importante que» con un sujeto concreto (tú): subjuntivo.' },
            { prompt: 'Me encanta que mis hijos ___ juntos.', options: ['juegan', 'jueguen', 'jugar'], answer: 1, why: 'Una valoración sobre otras personas: subjuntivo. Ortografía: jugar → jueguen.' },
          ] },
        ] },
        { title: 'Para qué', mascot: '/brand/mascot/kneeling.webp', coach: 'El objetivo de una acción.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FINALIDAD', question: '¿Para qué?', formula: ['para + infinitivo (mismo sujeto)', 'para que + subjuntivo (otro sujeto)'],
            meaning: 'Presenta el **objetivo** de una acción. Si el objetivo es para otra persona, usa **para que** + subjuntivo.',
            examples: [
              { es: 'Elena prepara ejemplos [[para que|orange]] todos [[entiendan|orange]] la actividad.' },
              { es: 'Te llamo [[para que|orange]] me [[ayudes|orange]] con la mudanza.' },
              { es: 'Hablo despacio [[para que|orange]] me [[entiendas|orange]].' },
              { es: 'Elena llega temprano [[para preparar|violet]] la sala.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Te llamo para que me ___.', options: ['ayudes', 'ayudas', 'ayudaste'], answer: 0, why: '«Para que» expresa finalidad con otro sujeto: subjuntivo.' },
            { prompt: 'Estudio español para ___ con mis clientes.', options: ['que hable', 'hablar', 'hablo'], answer: 1, why: 'El mismo sujeto (yo estudio / yo hablo): para + infinitivo.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/standing.webp', coach: 'Dos preguntas y ya sabes qué forma usar.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿La segunda acción la hace otra persona (o algo concreto)?', yes: 'next', no: 'Usa el **infinitivo**: «[[Quiero participar|violet]]» · «Vengo [[para aprender|violet]]» · «Es importante descansar».' },
            { q: '¿El primer verbo expresa un deseo, una petición, una recomendación, una valoración o una finalidad?', yes: 'Usa **que + subjuntivo**: «[[Quiero que|blue]] [[vengas|blue]]» · «[[Me alegra que|teal]] [[estés|teal]] aquí» · «[[para que|orange]] [[entiendas|orange]]».', no: 'Si solo informas o cuentas algo (creo, sé, digo, veo que…), usa el **indicativo**: «Sé que **vienes**».' },
          ] },
          { kind: 'tip', icon: '🔭', title: 'Más adelante', text: 'El subjuntivo aparece también en otras estructuras, por ejemplo con **cuando** + futuro: «Cuando **llegues**, llámame». Hoy nos concentramos en deseos, recomendaciones, valoraciones y finalidad.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y dice cuántos sujetos hay en la frase antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y cuenta cuántos sujetos hay. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Quiero que vienes a mi fiesta.', right: 'Quiero que vengas a mi fiesta.', why: 'Después de «quiero que» con otro sujeto: subjuntivo.' },
            { wrong: 'Quiero que yo aprenda a cocinar.', right: 'Quiero aprender a cocinar.', why: 'El mismo sujeto (yo quiero / yo aprendo): infinitivo.' },
            { wrong: 'Te llamo para que me ayudas.', right: 'Te llamo para que me ayudes.', why: '«Para que» siempre va con subjuntivo.' },
            { wrong: 'Espero que tienes un buen viaje.', right: 'Espero que tengas un buen viaje.', why: 'tengo → teng-: «tengas».' },
            { wrong: 'Me alegra que estás aquí.', right: 'Me alegra que estés aquí.', why: 'Una valoración: subjuntivo. «Estar» → «esté», con tilde.' },
            { wrong: 'Es importante que sabes la verdad.', right: 'Es importante que sepas la verdad.', why: '«Saber» es irregular: «sepa».' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre la clase de hoy: un deseo («Quiero que…»), una valoración («Me alegra que…») y una finalidad («… para que…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El subjuntivo en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'Preparar el taller', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y explica qué verbo pide el subjuntivo y quién hace cada acción.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una reunión de planificación', setting: 'Elena y Raquel, la coordinadora, preparan un taller para un grupo de doce personas.', lines: [
            { who: 'Raquel', text: 'Elena, [[quiero que|blue]] el próximo taller [[sea|blue]] muy práctico.' },
            { who: 'Elena', text: 'Yo también. Voy a pedir que cada persona [[traiga|blue]] una pregunta de su trabajo.' },
            { who: 'Raquel', text: 'Muy bien. [[Me alegra que|teal]] [[haya|teal]] gente de departamentos distintos.' },
            { who: 'Elena', text: 'Sí, pueden aprender unos de otros. Pero a veces algunos hablan demasiado.' },
            { who: 'Raquel', text: '[[Es importante que|teal]] todos [[escuchen|teal]] sin interrumpir.' },
            { who: 'Elena', text: 'Por eso voy a organizar turnos, [[para que|orange]] todos [[participen|orange]].' },
            { who: 'Raquel', text: '¿Y vas a explicar la teoría al principio?' },
            { who: 'Elena', text: 'Poco. [[Prefiero que|blue]] el equipo [[pruebe|blue]] las herramientas durante la sesión.' },
            { who: 'Raquel', text: 'Perfecto. ¿Necesitas algo?' },
            { who: 'Elena', text: 'Sí, [[quiero reservar|violet]] diez minutos al final [[para que|orange]] los compañeros [[compartan|orange]] sus ideas.' },
            { who: 'Raquel', text: 'Hecho. Y te [[recomiendo que|blue]] [[envíes|blue]] una encuesta breve después.' },
          ], notes: {
            'quiero que': 'Raquel **quiere** algo; el taller es otro sujeto. Por eso: que + subjuntivo.',
            sea: 'Subjuntivo de **ser**, irregular: el taller todavía no existe.',
            traiga: 'Una **petición**: «pedir que» + subjuntivo. Traer → traigo → traiga.',
            'Me alegra que': 'Una **valoración**: Raquel reacciona ante un hecho.',
            haya: 'Subjuntivo de **haber** («hay» → «haya»), después de una valoración.',
            'Es importante que': 'Valoración con un **sujeto concreto** (todos): que + subjuntivo.',
            escuchen: 'Escuchar → escuch- + en.',
            'para que': '**Finalidad** con otro sujeto: el objetivo de Elena es que otras personas hagan algo.',
            participen: 'El objetivo de los turnos: participar → particip- + en.',
            'Prefiero que': 'Una **preferencia** sobre lo que hace otra persona: que + subjuntivo.',
            pruebe: 'Probar → pruebo → pruebe.',
            'quiero reservar': '**El mismo sujeto**: Elena quiere y Elena reserva. Por eso, infinitivo.',
            compartan: 'Compartir → compart- + an: lo hacen los compañeros.',
            'recomiendo que': 'Una **recomendación**: «recomendar que» + subjuntivo.',
            envíes: 'Enviar → envío → envíes.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Para qué organiza Elena turnos?', options: ['Para que todos participen.', 'Para que el taller sea más corto.', 'Para explicar más teoría.'], answer: 0, why: '«Voy a organizar turnos, para que todos participen».' },
            { prompt: '¿Qué prefiere Elena?', options: ['Que el equipo pruebe las herramientas en la sesión.', 'Que el equipo estudie la teoría en casa.', 'Que Raquel dé el taller.'], answer: 0, why: '«Prefiero que el equipo pruebe las herramientas durante la sesión».' },
          ] },
        ] },
        { title: 'En la consulta', blocks: [
          { kind: 'explore', title: 'Le recomiendo que…', setting: 'Elena está muy cansada antes del taller y va al médico.', lines: [
            { who: 'Doctor', text: 'Bueno, Elena, no es nada grave, pero está agotada.' },
            { who: 'Elena', text: 'Es que tengo mucho trabajo esta semana.' },
            { who: 'Doctor', text: 'Lo entiendo. [[Le recomiendo que|blue]] [[duerma|blue]] por lo menos siete horas.' },
            { who: 'Elena', text: 'Lo voy a intentar. ¿Algo más?' },
            { who: 'Doctor', text: '[[Es mejor que|teal]] no [[tome|teal]] café después de las cuatro.' },
            { who: 'Elena', text: 'Uf, eso va a ser difícil.' },
            { who: 'Doctor', text: 'Le voy a dar unas vitaminas [[para que|orange]] [[tenga|orange]] más energía.' },
            { who: 'Elena', text: 'Gracias. [[Espero que|blue]] [[funcionen|blue]] antes del viernes.' },
            { who: 'Doctor', text: 'Y [[es normal que|teal]] [[esté|teal]] nerviosa. Seguro que el taller sale muy bien.' },
          ], notes: {
            'Le recomiendo que': 'Una **recomendación** formal (usted): que + subjuntivo.',
            duerma: 'Dormir cambia o → ue: «duerma».',
            'Es mejor que': 'Una **valoración** con un sujeto concreto: Elena.',
            tome: 'Tomar → tom- + e.',
            'para que': 'El **objetivo** de las vitaminas: que Elena tenga energía.',
            tenga: 'tengo → teng- → «tenga».',
            'Espero que': 'Un **deseo** de Elena sobre las vitaminas.',
            funcionen: 'Funcionar → funcion- + en.',
            'es normal que': 'Una **valoración**: el doctor considera normal su estado.',
            esté: 'Subjuntivo de **estar**, con tilde: «esté».',
          } },
          { kind: 'teacher', text: 'Pide al alumno que dé dos recomendaciones más a Elena, como si fuera el médico: «Le recomiendo que…», «Es importante que…».' },
        ] },
        { title: 'Tres perspectivas', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'deseo', label: 'Deseo o recomendación', tone: 'blue' },
            { id: 'valor', label: 'Valoración', tone: 'teal' },
            { id: 'fin', label: 'Finalidad', tone: 'orange' },
          ], items: [
            { text: 'Quiero que el taller sea práctico.', answer: 'deseo', why: '«Querer que»: un deseo.' },
            { text: 'Me alegra que haya gente de departamentos distintos.', answer: 'valor', why: '«Me alegra que»: una reacción.' },
            { text: '… para que todos participen.', answer: 'fin', why: '«Para que»: un objetivo.' },
            { text: 'Le recomiendo que duerma siete horas.', answer: 'deseo', why: '«Recomendar que»: influencia sobre otra persona.' },
            { text: 'Es mejor que no tome café.', answer: 'valor', why: '«Es mejor que»: una valoración.' },
            { text: '… para que tenga más energía.', answer: 'fin', why: '«Para que»: el objetivo de las vitaminas.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca el primer verbo y cuenta los sujetos.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu hermano viaja mañana.', prompt: 'Espero que ___ un buen viaje.', options: ['tienes', 'tengas', 'tener'], answer: 1, why: 'Un deseo para otra persona: «espero que» + subjuntivo.' },
            { context: 'Le hablas a una compañera nueva.', prompt: 'Te recomiendo que ___ con Marcos: sabe mucho.', options: ['hablas', 'hables', 'hablar'], answer: 1, why: 'Una recomendación: «recomendar que» + subjuntivo.' },
            { context: 'Tu amiga está en tu casa después de mucho tiempo.', prompt: '¡Qué bien que ___ aquí!', options: ['estás', 'estés', 'estar'], answer: 1, why: '«Qué bien que» es una valoración: subjuntivo.' },
            { context: 'Explicas por qué escribes las palabras nuevas en la pizarra.', prompt: 'Las escribo para que todos las ___.', options: ['vean', 'ven', 'vieron'], answer: 0, why: '«Para que» + otro sujeto: subjuntivo. Ver → veo → vea.' },
            { context: 'Hablas de ti mismo.', prompt: 'Este año quiero ___ a nadar.', options: ['que aprenda', 'aprender', 'que aprendo'], answer: 1, why: 'El mismo sujeto (yo quiero / yo aprendo): infinitivo.' },
            { context: 'El jefe habla con el equipo.', prompt: 'Es necesario que ustedes ___ el informe hoy.', options: ['terminen', 'terminan', 'terminar'], answer: 0, why: '«Es necesario que» con un sujeto concreto: subjuntivo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase **la misma persona** quiere y viaja?', options: ['Quiero viajar a Perú.', 'Quiero que viajes a Perú.'], answer: 0, why: 'Con infinitivo, el sujeto es el mismo. Con «que viajes», viaja otra persona.' },
            { prompt: '¿Qué frase es una **recomendación**?', options: ['Te aconsejo que descanses.', 'Sé que descansas.', 'Veo que descansas.'], answer: 0, why: '«Aconsejar que» + subjuntivo. Las otras informan de un hecho, con indicativo.' },
            { prompt: '«Hablo despacio para que me entiendas.» ¿Quién debe entender?', options: ['Tú.', 'Yo.'], answer: 0, why: 'Con «para que», el objetivo es la acción de otra persona.' },
            { prompt: '¿Qué frase habla **en general**, sin un sujeto concreto?', options: ['Es importante dormir bien.', 'Es importante que duermas bien.'], answer: 0, why: 'El infinitivo generaliza; «que duermas» habla de ti.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Antes del primer día de trabajo', lines: [
            { who: 'Madre', text: 'Mañana es tu primer día. ¿Estás nerviosa?' },
            { who: 'Carla', text: 'Un poco. Quiero que todo ___ bien.', options: ['sale', 'salga', 'salir'], answer: 1, why: 'Un deseo sobre otra cosa (todo): subjuntivo. salgo → salga.' },
            { who: 'Madre', text: 'Es normal que ___ nerviosa. Te recomiendo que ___ temprano.', options: ['estés… te acuestes', 'estás… te acuestas', 'estar… acostarte'], answer: 0, why: 'Una valoración y una recomendación: subjuntivo en los dos verbos.' },
            { who: 'Carla', text: 'Sí. Y voy a salir a las siete para ___ a tiempo.', options: ['que llegue', 'llegar', 'llego'], answer: 1, why: 'El mismo sujeto (yo salgo / yo llego): para + infinitivo.' },
            { who: 'Madre', text: 'Te preparo el desayuno para que no ___ hambre.', options: ['tienes', 'tengas', 'tener'], answer: 1, why: '«Para que» + otro sujeto: subjuntivo.' },
            { who: 'Carla', text: '¡Gracias, mamá! Me alegra que ___ conmigo.', options: ['estés', 'estás', 'estar'], answer: 0, why: '«Me alegra que» es una valoración: subjuntivo.' },
            { who: 'Madre', text: 'Siempre. Espero que tus compañeros ___ simpáticos.', options: ['sean', 'son', 'serán'], answer: 0, why: 'Un deseo: «espero que» + subjuntivo. Ser → sea.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mi jefa quiere que llego temprano.', ok: false, options: ['Mi jefa quiere que llegue temprano.', 'Mi jefa quiere llegar temprano yo.', 'Mi jefa quiere que llegaré temprano.'], answer: 0, why: 'Dos sujetos distintos: que + subjuntivo. Ortografía: llegue.' },
            { sentence: 'Te lo explico para que lo entiendas mejor.', ok: true, why: 'Correcta: «para que» + subjuntivo.' },
            { sentence: 'Espero que yo tenga tiempo.', ok: false, options: ['Espero tener tiempo.', 'Espero que tengo tiempo.', 'Espero tengo tiempo.'], answer: 0, why: 'El mismo sujeto (yo espero / yo tengo): infinitivo.' },
            { sentence: 'Me molesta que los vecinos hacen ruido por la noche.', ok: false, options: ['Me molesta que los vecinos hagan ruido por la noche.', 'Me molesta que los vecinos hacer ruido.', 'Me molesta los vecinos hagan ruido.'], answer: 0, why: 'Una valoración: subjuntivo. hago → haga.' },
            { sentence: 'Es importante que vayamos juntos.', ok: true, why: 'Correcta: «ir» es irregular: «vayamos».' },
            { sentence: 'El médico me recomienda que duermo más.', ok: false, options: ['El médico me recomienda que duerma más.', 'El médico me recomienda que dormo más.', 'El médico me recomienda que dorma más.'], answer: 0, why: 'Una recomendación: subjuntivo. Dormir → duerma.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Quiero', 'que', 'vengas', 'a', 'mi', 'fiesta'], accept: ['Quiero que vengas a mi fiesta'] },
            { tiles: ['Me', 'alegra', 'que', 'estés', 'aquí'], accept: ['Me alegra que estés aquí'] },
            { tiles: ['Te', 'llamo', 'para', 'que', 'me', 'ayudes'], accept: ['Te llamo para que me ayudes'] },
            { tiles: ['Es', 'importante', 'que', 'todos', 'participen'], accept: ['Es importante que todos participen'] },
          ] },
        ] },
        { title: 'Transforma las frases', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con el subjuntivo', items: [
            { prompt: 'Te lo explico. Objetivo: tú entiendes mejor.', instruction: 'Une con «para que».', accept: ['Te lo explico para que entiendas mejor', 'Te lo explico para que lo entiendas mejor'] },
            { prompt: 'Confirma la cita, por favor.', instruction: 'Empieza con «Quiero que…» (tú).', accept: ['Quiero que confirmes la cita'] },
            { prompt: 'Haces deporte. (Es bueno.)', instruction: 'Empieza con «Es bueno que…».', accept: ['Es bueno que hagas deporte'] },
            { prompt: 'Lleva un paraguas.', instruction: 'Da la recomendación con «Te recomiendo que…».', accept: ['Te recomiendo que lleves un paraguas'] },
            { prompt: 'Mis amigos vienen a verme. (Me alegra.)', instruction: 'Empieza con «Me alegra que…».', accept: ['Me alegra que mis amigos vengan a verme'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El pedido de una participante', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'El pedido de una participante', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota los verbos en subjuntivo y qué expresión los pide.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Una participante del taller', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/148.mp3',
            before: 'Una participante le deja una nota de voz a Elena antes del taller. ¿Qué crees que va a pedir?',
            gist: { prompt: '¿Qué quiere sobre todo la participante?', options: ['Un taller práctico en el que todos participen.', 'Un taller más largo, con más teoría.', 'Cambiar la fecha del taller.'], answer: 0, why: 'Le alegra que el taller sea práctico y pide turnos para que todos participen.' },
            details: [
              { prompt: '¿Para qué quiere tener tiempo?', options: ['Para hablar de casos reales.', 'Para presentar su empresa.', 'Para hacer una pausa.'], answer: 0, why: '«Quiero que tengamos tiempo para hablar de casos reales».' },
              { prompt: '¿Para qué le envía una pregunta a Elena?', options: ['Para que pueda elegir un ejemplo cercano a su trabajo.', 'Para que la conteste por correo.', 'Para que la lea al final.'], answer: 0, why: '«Te envío una pregunta para que puedas elegir un ejemplo cercano a nuestro trabajo».' },
              { prompt: '¿Qué problema ve en los grupos?', options: ['Que una persona habla demasiado y otras no intervienen.', 'Que nadie quiere hablar.', 'Que el tiempo no es suficiente.'], answer: 0, why: '«A veces una persona habla demasiado y otras no intervienen».' },
              { prompt: '¿Qué quiere preparar ella?', options: ['Una explicación breve.', 'Una presentación de toda la sesión.', 'Una encuesta.'], answer: 0, why: '«Yo quiero preparar una explicación breve, sin ocupar toda la sesión».' },
              { prompt: '¿Qué le parece importante?', options: ['Que cada persona salga con una idea que pueda probar.', 'Que el taller termine temprano.', 'Que Elena hable más.'], answer: 0, why: '«Me parece importante que cada persona salga con una idea que pueda probar después».' },
            ],
            transcript: 'Hola, Elena. [[Me alegra que|teal]] el taller [[sea|teal]] práctico. [[Quiero que|blue]] [[tengamos|blue]] tiempo para hablar de casos reales. Te envío una pregunta [[para que|orange]] [[puedas|orange]] elegir un ejemplo cercano a nuestro trabajo. También [[espero que|blue]] los participantes [[escuchen|blue]] las opiniones diferentes. A veces una persona habla demasiado y otras no intervienen. ¿Puedes organizar turnos [[para que|orange]] todos [[participen|orange]]? Yo [[quiero preparar|violet]] una explicación breve, sin ocupar toda la sesión. [[Me parece importante que|teal]] cada persona [[salga|teal]] con una idea que pueda probar después. Gracias por pensar en el grupo. Creo que ese equilibrio nos ayudará.',
            reply: { teacher: 'El alumno responde a la participante en voz alta, como si fuera Elena: valora su propuesta («Me alegra que…») y le pide algo («Quiero que…» o «Te pido que…»).', self: 'Responde a la participante como si fueras Elena: valora su idea con «Me alegra que…» y pídele algo con «Quiero que…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Deseos, consejos y objetivos', coach: 'Habla de lo que esperas de los demás.',
      steps: [
        { title: 'Deseos, consejos y objetivos', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta. Comparte también tus opiniones.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué esperas de una buena clase o de un buen curso?', followUps: ['¿Qué quieres que haga el profesor o la profesora?', '¿Qué es importante que hagan los compañeros?', '¿Prefieres trabajar solo o en grupo?'], phrases: ['[[Espero que|blue]] el profesor…', '[[Es importante que|teal]]…', '[[Prefiero|violet]] trabajar…'], hint: 'Cuando hablas de otras personas, usa que + subjuntivo; cuando hablas de ti, infinitivo.', example: 'Espero que el profesor me corrija cuando hablo. Es importante que las clases sean prácticas. Prefiero trabajar en parejas.', next: 'Ahora piensa en un grupo que organizas tú.' },
            { q: 'Imagina que organizas un taller para cuatro adultos. ¿Qué reglas pones?', followUps: ['¿Qué quieres que traigan?', '¿Qué haces para que todos hablen?', '¿Qué no quieres que pase?'], phrases: ['[[Quiero que|blue]] cada persona…', 'Organizo… [[para que|orange]] todos…', 'No [[quiero que|blue]]…'], hint: 'Da al menos una regla con «quiero que» y otra con «para que».', example: 'Quiero que cada persona traiga un caso real. Organizo turnos de tres minutos para que todos hablen. No quiero que nadie use el teléfono.', next: 'Hablemos de cosas que te alegran o te molestan.', teacher: 'Propón una actividad solo teórica para que el alumno negocie una alternativa: «Prefiero que…, porque…».' },
            { q: '¿Qué te alegra y qué te molesta de tu barrio, tu trabajo o tu ciudad?', followUps: ['¿Qué quieres que cambie?', '¿Qué te parece normal y a otros no?', '¿Qué te sorprende?'], phrases: ['[[Me alegra que|teal]]…', '[[Me molesta que|teal]]…', '[[Es normal que|teal]]…'], hint: 'Una valoración + que + subjuntivo.', example: 'Me alegra que haya muchos parques en mi barrio. Me molesta que los coches se estacionen en la acera. Es normal que haya ruido los sábados.', next: 'Ahora te toca dar consejos.' },
            { q: 'Un amigo va a vivir a tu ciudad. ¿Qué le recomiendas?', followUps: ['¿Qué barrio le recomiendas?', '¿Qué es mejor que no haga?', '¿Qué es importante que sepa?'], phrases: ['[[Te recomiendo que|blue]]…', '[[Es mejor que|teal]] no…', '[[Es importante que|teal]] sepas…'], hint: 'Usa tres estructuras diferentes para tus consejos.', example: 'Te recomiendo que vivas cerca del metro. Es mejor que no compres coche: hay mucho tráfico. Es importante que sepas que los domingos todo cierra temprano.', next: 'Y ahora, tus objetivos.' },
            { q: '¿Qué haces tú para que tu familia o tus amigos estén bien?', followUps: ['¿Qué haces para que tus amigos se sientan cómodos en tu casa?', '¿Qué haces para estar bien tú?', '¿Qué esperas que hagan por ti?'], phrases: ['… [[para que|orange]] mis padres…', '… [[para estar|violet]] bien…', '[[Espero que|blue]]…'], hint: 'Compara «para + infinitivo» (tú) y «para que + subjuntivo» (otra persona).', example: 'Llamo a mis padres cada domingo para que no se sientan solos. Hago yoga para estar tranquila. Espero que mis amigos me llamen si necesitan algo.', next: 'Para terminar, deseos para el futuro.' },
            { q: '¿Qué deseas para las personas importantes de tu vida este año?', followUps: ['¿Y para ti?', '¿Qué deseas para tu clase de español?', '¿Qué esperas que pase en tu ciudad?'], phrases: ['[[Espero que|blue]] mi hermana…', '[[Ojalá que|blue]]…', 'Para mí, [[quiero|violet]]…'], hint: '«Ojalá (que)» también lleva subjuntivo: «Ojalá tengas suerte».', example: 'Espero que mi hermana encuentre un trabajo que le guste. Ojalá mis padres puedan viajar. Para mí, quiero hablar español con más confianza.', teacher: 'Cierra con una pregunta de reflexión: «¿Qué frase con subjuntivo vas a usar esta semana?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor dos de estas preguntas y le da un consejo con «Te recomiendo que…».', self: 'Escribe tres frases para alguien de tu vida: un deseo, un consejo y una finalidad. Envíale una de ellas esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a quien organiza', coach: 'Expresa tus expectativas con claridad.',
      steps: [
        { title: 'Un mensaje a quien organiza', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada «que»: ¿hay un sujeto distinto?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después busca cada «que» y comprueba si el verbo va en subjuntivo.' } },
          { kind: 'write', title: 'Mis expectativas para el taller', situation: 'Te inscribiste en un taller (de cocina, fotografía, trabajo en equipo…). La persona que lo organiza pide a los participantes que le escriban lo que esperan.', task: [
            'Valora algo del taller con **me alegra que / me parece bien que**.',
            'Expresa **dos expectativas** con quiero que / espero que.',
            'Propón un cambio y explica **para qué**: para que + subjuntivo.',
            'Di algo que quieres hacer tú, con el **infinitivo**.',
          ], starters: ['Hola, …:', 'Me alegra que…', 'Espero que…', 'Quiero que…', 'Propongo… para que…', 'Yo quiero…'],
            words: ['me alegra que', 'espero que', 'quiero que', 'es importante que', 'para que', 'prefiero', 'propongo', 'gracias'],
            model: 'Hola, Elena: [[Me alegra que|teal]] el taller [[sea|teal]] práctico. [[Quiero que|blue]] [[trabajemos|blue]] con ejemplos de nuestras oficinas y [[espero que|blue]] todos [[tengan|blue]] tiempo para hablar. Propongo organizar turnos breves [[para que|orange]] las personas más calladas también [[participen|orange]]. [[Es importante que|teal]] nadie se [[sienta|teal]] fuera del grupo. Yo [[quiero preparar|violet]] una pregunta antes de la sesión. Gracias por pensar en nuestras propuestas. Un saludo, Pablo',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'DESEO Y RECOMENDACIÓN', formula: 'quiero / espero / te recomiendo + que + subjuntivo', example: 'Quiero que vengas. Te recomiendo que descanses.', caption: 'Proyectas una acción sobre otra persona.' },
            { tone: 'teal', label: 'VALORACIÓN', formula: 'me alegra / es importante + que + subjuntivo', example: 'Me alegra que estés aquí.', caption: 'Reaccionas ante lo que hacen otros.' },
            { tone: 'orange', label: 'FINALIDAD', formula: 'para que + subjuntivo', example: 'Te llamo para que me ayudes.', caption: 'El objetivo, con otro sujeto.' },
            { tone: 'violet', label: 'MISMO SUJETO', formula: 'verbo + infinitivo', example: 'Quiero participar. Vengo para aprender.', caption: 'Sin cambio de sujeto, sin subjuntivo.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La forma', text: 'Forma «yo» del presente − **o** + vocal opuesta: hablo → habl**e**, como → com**a**, tengo → teng**a**. Especiales: sea, vaya, esté, haya, sepa, dé.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Mis padres quieren que yo ___ medicina.', options: ['estudio', 'estudie', 'estudiar'], answer: 1, why: 'Dos sujetos distintos con «querer que»: subjuntivo.' },
            { prompt: 'Es una pena que no ___ venir a la boda.', options: ['puedes', 'puedas', 'poder'], answer: 1, why: '«Es una pena que» es una valoración: subjuntivo.' },
            { prompt: 'Cierro la ventana para que no ___ frío.', options: ['entra', 'entre', 'entrar'], answer: 1, why: '«Para que» con otro sujeto (el frío): subjuntivo.' },
            { prompt: 'Necesito ___ con el director hoy.', options: ['que hable', 'hablar', 'hablo'], answer: 1, why: 'El mismo sujeto (yo necesito / yo hablo): infinitivo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Quiero participar» y «Quiero que participes»: ¿qué diferencia hay? En la primera participo yo; en la segunda, otra persona. Por eso aparece el subjuntivo.' },
        ] },
      ],
    },
  ],
};
