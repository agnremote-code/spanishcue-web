import type { Module } from "../../types";

/**
 * B1 · semana 5 · checkpoint · Autoestudio espejo de G095 (infinitivo o que
 * + subjuntivo según el sujeto) y G096 (imperativo y peticiones indirectas
 * con subjuntivo), integrando las clases G086–G094 de las semanas 1 a 4.
 * Repaso autónomo con una voluntaria alojada por una familia de Quito.
 * Audio mediante síntesis.
 */
export const b1w05: Module = {
  id: "b1-05",
  level: "b1",
  week: 5,
  kind: "checkpoint",
  title: "Checkpoint: dile que venga y cuéntame qué pasó",
  subtitle: "Repaso de infinitivo o que + subjuntivo, del imperativo y de las órdenes que pasan por otra persona, integrado con los pasados, los deseos, los consejos y las opiniones de las semanas 1 a 4.",
  stop: { place: "Quito", country: "Ecuador" },
  minutes: 110,
  newObjectives: [
    "b1.gram.g095",
    "b1.gram.g096",
    "b1.voc.w05-voluntariado-acogida",
    "b1.pron.w05-acento-imperativo",
    "b1.lis.w05-recados-familia",
    "b1.read.w05-blog-voluntaria",
    "b1.wri.w05-correo-consejos",
    "b1.spk.w05-pasar-recados",
    "b1.fun.w05-dar-transmitir-ordenes",
    "b1.disc.w05-correo-experiencia",
    "b1.rev.w05-semanas-1-5",
  ],
  reviewObjectives: ["b1.gram.g086","b1.gram.g087","b1.voc.w01-mudanza-piso","b1.pron.w01-acento-pasado","b1.lis.w01-dia-mudanza","b1.read.w01-blog-primer-mes","b1.wri.w01-correo-llegada","b1.spk.w01-dia-al-reves","b1.fun.w01-explicar-lo-ocurrido","b1.disc.w01-orden-relato","b1.gram.g088","b1.gram.g089","b1.voc.w02-abrir-negocio","b1.pron.w02-vocal-modo","b1.lis.w02-preparar-apertura","b1.read.w02-noticia-barrio","b1.wri.w02-mensaje-deseos","b1.spk.w02-brindis","b1.fun.w02-expresar-deseos","b1.disc.w02-mensaje-ocasion","b1.gram.g090","b1.gram.g091","b1.gram.g092","b1.voc.w03-huerto-vecinal","b1.pron.w03-g-suave-fuerte","b1.lis.w03-asamblea-huerto","b1.read.w03-carta-socios","b1.wri.w03-correo-asociacion","b1.spk.w03-propuesta-vecinal","b1.fun.w03-aconsejar-reaccionar","b1.disc.w03-queja-constructiva","b1.gram.g093","b1.gram.g094","b1.voc.w04-organizacion-trabajo","b1.pron.w04-pregunta-afirmacion","b1.lis.w04-reunion-equipo","b1.read.w04-columna-opinion","b1.wri.w04-comentario-foro","b1.spk.w04-debate-propuesta","b1.fun.w04-opinar-matizar","b1.disc.w04-argumentar-postura"],
  prerequisites: ["b1-04"],
  goal: {
    canDo: "Al final de esta semana puedes elegir entre infinitivo y que + subjuntivo según quién hace la acción, dar órdenes con el imperativo y pasarlas a otra persona con dile que…, y combinar todo con lo que repasaste en las semanas 1 a 4: contar el pasado, desear, aconsejar, valorar, reaccionar y opinar.",
    steps: [
      "Repasa la regla de la semana: misma persona → infinitivo; otra persona → que + subjuntivo.",
      "Repasa el imperativo: solo _tú_ afirmativo tiene forma propia; lo demás es subjuntivo.",
      "Practica cómo pasar una orden: _Ven_ → _Dile que venga_.",
      "Integra las semanas 1 a 4 en un mapa: pasados, deseos, consejos, emociones, opinión y duda.",
      "Escucha los recados que recibe Hannah en Quito, lee su blog y escribe un correo con consejos para otra voluntaria.",
    ],
  },
  theory: {
    intro: "Esta es la semana de control del primer bloque de B1. Primero repasas tus dos últimas clases: cuándo usar infinitivo y cuándo que + subjuntivo, y cómo dar órdenes y pasarlas a otra persona. Después juntas todo lo de las semanas 1 a 4. La historia: Hannah, una voluntaria alemana, vive con la familia Andrade en Quito y está a punto de empezar a trabajar en una reserva del páramo.",
    parts: [
      {
        heading: "Una sola pregunta: ¿quién hace la segunda acción?",
        body: [
          "Muchos verbos que ya conoces (_querer, preferir, necesitar, esperar, desear_), las emociones (_me alegra, me molesta, me da miedo_) y las valoraciones (_es importante, es mejor_) siguen la misma regla. Si la segunda acción la hace **la misma persona**, usa el **infinitivo**. Si la hace **otra persona**, usa **que + subjuntivo**.",
          "_Prefiero subir temprano_ (yo prefiero, yo subo). _Prefiero que subas temprano_ (yo prefiero, tú subes). _Me alegra estar aquí_ (yo me alegro, yo estoy). _Me alegra que estés aquí_ (yo me alegro, tú estás).",
          "Con las valoraciones, el infinitivo es una regla general y _que_ + subjuntivo apunta a alguien concreto: _Es importante beber agua en la altura_ / _Es importante que Hannah beba agua_.",
        ],
        table: {
          caption: "Misma persona u otra",
          head: ["Tipo de verbo", "Misma persona: infinitivo", "Otra persona: que + subjuntivo"],
          rows: [
            ["deseo (semana 2)", "Quiero ver un cóndor.", "Quiero que veas un cóndor."],
            ["necesidad", "Necesito descansar.", "Necesito que descanses."],
            ["emoción (semana 3)", "Me da miedo subir sola.", "Me da miedo que subas sola."],
            ["valoración (semana 3)", "Es mejor salir temprano.", "Es mejor que salgáis temprano."],
          ],
        },
        mistakes: [
          { wrong: "Quiero que yo conozca el volcán Cotopaxi.", right: "Quiero conocer el volcán Cotopaxi.", why: "La misma persona quiere y conoce: **infinitivo**." },
          { wrong: "Espero tú llegues bien a la reserva.", right: "Espero que llegues bien a la reserva.", why: "Con otro sujeto necesitas **que**: _espero que llegues_." },
        ],
      },
      {
        heading: "Permitir, prohibir, dejar: dos formas correctas",
        body: [
          "Con **permitir, prohibir, dejar, aconsejar, recomendar** y **obligar a**, la persona que recibe el permiso o la prohibición aparece en el pronombre (_me, te, le, nos, les_). Por eso puedes usar el infinitivo aunque haya dos personas: _Rocío le prohíbe salir_ = _Rocío le prohíbe que salga_.",
          "No pongas **de** delante del infinitivo: _te prohíbo salir_, no _te prohíbo de salir_. Con **obligar** sí va **a**: _El guía nos obliga a llevar casco_.",
        ],
        examples: [
          { es: "El guía no nos deja acercarnos al cráter.", note: "_dejar_ + pronombre + infinitivo." },
          { es: "La reserva no permite que los visitantes den de comer a los animales.", note: "Con sujeto explícito: _que_ + subjuntivo." },
          { es: "Rocío me obligó a descansar la primera tarde.", note: "_obligar a_ + infinitivo." },
        ],
        mistakes: [
          { wrong: "El médico le prohíbe de subir al páramo esta semana.", right: "El médico le prohíbe subir al páramo esta semana.", why: "Sin **de**: _prohibir_ + infinitivo." },
        ],
      },
      {
        heading: "El imperativo: solo una forma propia",
        body: [
          "Solo la orden **afirmativa de tú** (y la de vosotros) tiene forma propia: _espera, sube, ven, di, haz, pon, sal, ten, ve, sé_. **Todas las demás** son el presente de subjuntivo que ya repasaste en la semana 2: la negativa de tú (_no subas_), usted (_suba, no suba_), ustedes (_suban, no suban_) y nosotros (_subamos_).",
          "Los pronombres van **detrás y pegados** en la orden afirmativa (_siéntese, dímelo, tráiganlas_) y **delante** en la negativa (_no se siente, no me lo digas, no las traigan_). Al pegar pronombres, muchas formas necesitan tilde para conservar el acento: _di_ → _dímelo_.",
        ],
        table: {
          caption: "Imperativo de «subir» y de «ponerse»",
          head: ["Persona", "Afirmativo", "Negativo"],
          rows: [
            ["tú", "sube / ponte", "no subas / no te pongas"],
            ["usted", "suba / póngase", "no suba / no se ponga"],
            ["nosotros, nosotras", "subamos / pongámonos", "no subamos / no nos pongamos"],
            ["vosotros, vosotras", "subid / poneos", "no subáis / no os pongáis"],
            ["ustedes", "suban / pónganse", "no suban / no se pongan"],
          ],
        },
        examples: [
          { es: "Doña Rocío, siéntese aquí, que hay sol.", note: "Usted afirmativo con pronombre pegado." },
          { es: "No te quites la chaqueta hasta llegar al refugio.", note: "Tú negativo: subjuntivo, pronombre delante." },
        ],
        mistakes: [
          { wrong: "Hannah, no sube tan rápido.", right: "Hannah, no subas tan rápido.", why: "La orden negativa de tú es **subjuntivo**: _no subas_." },
          { wrong: "No dímelo todavía.", right: "No me lo digas todavía.", why: "En negativo, subjuntivo y pronombres **delante**." },
        ],
      },
      {
        heading: "Pasar una orden: dile que venga",
        body: [
          "Cuando una orden **pasa por otra persona**, el imperativo se convierte en **que + subjuntivo**: _«Ven a las siete»_ → _Dile que venga a las siete_; _Patricio dice que vengas a las siete_; _Te pide que vengas a las siete_.",
          "Al pasar la orden cambian **la persona del verbo** y **los pronombres**: Patricio le dice a Hannah _«Mándame el documento»_ y Rocío se lo transmite así: _Dice que se lo mandes_.",
          "En la conversación basta con **que** al principio: _Que pase_ (orden para alguien que no habla contigo), _—¿Qué dice? —Que subas_ (repetir una orden). Recuerda: **decir que** + indicativo transmite información (_dice que hace frío_); **decir que** + subjuntivo transmite una orden (_dice que te abrigues_).",
        ],
        table: {
          caption: "De la orden directa a la orden transmitida",
          head: ["Orden directa", "Orden transmitida"],
          rows: [
            ["Patricio: «Hannah, trae botas.»", "Patricio dice que traigas botas."],
            ["Rocío: «Mateo, llama a tu abuela.»", "Dile a Mateo que llame a su abuela."],
            ["El guía: «No se separen del grupo.»", "El guía pide que no nos separemos del grupo."],
          ],
        },
        mistakes: [
          { wrong: "Dile a Mateo que llámame.", right: "Dile a Mateo que me llame.", why: "Después de _que_, subjuntivo con el pronombre **delante**." },
          { wrong: "Patricio dice que llevas ropa de abrigo (es una orden).", right: "Patricio dice que lleves ropa de abrigo.", why: "Si _decir_ transmite una orden, va **subjuntivo**." },
        ],
      },
      {
        heading: "Integración: el mapa de las semanas 1 a 4",
        body: [
          "**Semana 1 · Revisión de pasados y pluscuamperfecto (G086, G087).** Imperfecto para la escena, indefinido para los hechos, perfecto compuesto para el balance, y pluscuamperfecto para lo anterior a otro pasado: _Cuando aterricé, llovía; no había dormido nada_.",
          "**Semana 2 · Presente de subjuntivo y deseos (G088, G089).** Las formas (_sea, vaya, haya, sepa, tenga_) y los deseos: _Ojalá vea un cóndor_; _¡Que te vaya bien!_",
          "**Semana 3 · Recomendaciones, valoraciones y emociones (G090, G091, G092).** _Te aconsejo que te abrigues_; _es importante que bebas agua_ frente a _es verdad que hace frío_; _me alegra que estés aquí_.",
          "**Semana 4 · Opinión y grados de certeza (G093, G094).** _Creo que vale la pena_ / _No creo que sea fácil_; _seguro que_ y _a lo mejor_ con indicativo; _es posible que_ y _dudo que_ con subjuntivo.",
        ],
        table: {
          caption: "¿Qué modo o tiempo pide cada señal?",
          head: ["Semana", "Señal", "Forma", "Ejemplo"],
          rows: [
            ["1", "cuando + indefinido, ya…", "pluscuamperfecto", "Cuando llegué, el bus ya había salido."],
            ["2", "ojalá, espero que", "subjuntivo", "Ojalá haga sol en el páramo."],
            ["3", "es verdad que / es una pena que", "indicativo / subjuntivo", "Es verdad que cansa; es una pena que llueva."],
            ["4", "creo que / no creo que", "indicativo / subjuntivo", "Creo que puedo; no creo que llegue a la cima."],
            ["5", "dile que, me pide que", "subjuntivo", "Me pide que le mande el documento."],
          ],
        },
        mistakes: [
          { wrong: "Cuando llegué a la terminal, el grupo ya salió.", right: "Cuando llegué a la terminal, el grupo ya había salido.", why: "Semana 1: con _ya_, lo anterior va en **pluscuamperfecto**." },
          { wrong: "A lo mejor veamos un cóndor mañana.", right: "A lo mejor vemos un cóndor mañana.", why: "Semana 4: _a lo mejor_ va siempre con **indicativo**." },
        ],
        tip: "Antes de escribir un _que_, hazte dos preguntas: ¿afirmo algo como cierto o no? ¿La segunda acción es de la misma persona o de otra? Con esas dos respuestas eliges casi siempre bien.",
      },
    ],
  },
  grammar: {
    intro: "Primero practicas las dos clases de la semana; después mezclas estructuras de todo el bloque.",
    exercises: [
      {
        id: "b1-05-g1",
        type: "choice",
        title: "¿Infinitivo o que + subjuntivo?",
        prompt: "Elige la forma correcta según quién hace la segunda acción.",
        items: [
          { q: "Hannah prefiere ___ en bus a la reserva.", options: ["que vaya", "ir", "va"], answer: 1, why: "Hannah prefiere y Hannah va: **infinitivo**." },
          { q: "Rocío necesita que Mateo la ___ con las compras.", options: ["ayuda", "ayudar", "ayude"], answer: 2, why: "Rocío necesita, Mateo ayuda: **que + subjuntivo**." },
          { q: "A Hannah le da miedo ___ el soroche otra vez.", options: ["tener", "que tenga", "tiene"], answer: 0, why: "A ella le da miedo y ella tiene: **infinitivo**." },
          { q: "Es importante que los voluntarios ___ protector solar.", options: ["usan", "usen", "usar"], answer: 1, why: "Valoración con sujeto concreto: **subjuntivo**." },
          { q: "El guía no nos deja ___ fuera del sendero.", options: ["caminar", "que caminamos", "caminamos"], answer: 0, why: "_dejar_ + pronombre + **infinitivo**." },
        ],
      },
      {
        id: "b1-05-g2",
        type: "gap",
        title: "Órdenes directas",
        prompt: "Completa con el imperativo del verbo entre paréntesis.",
        items: [
          { q: "Hannah, ___ dos capas de ropa mañana. (tú, ponerse)", answers: [["ponte"]], why: "Tú afirmativo con pronombre: **ponte**." },
          { q: "Mateo, no ___ el último pan, que es para tu papá. (comerse)", answers: [["te comas"]], why: "Tú negativo: subjuntivo con pronombre delante." },
          { q: "Señor Andrade, ___ aquí, por favor. (sentarse)", answers: [["siéntese"]], why: "Usted afirmativo: _siente_ + _se_, con tilde." },
          { q: "Chicos, no ___ del grupo en el páramo. (separarse)", answers: [["se separen", "os separéis"]], why: "Ustedes negativo: **no se separen** (en España, también _no os separéis_)." },
          { q: "Hannah, ___ la verdad: ¿estás cansada? (decirme)", answers: [["dime"]], why: "_di_ + _me_ = **dime**." },
        ],
      },
      {
        id: "b1-05-g3",
        type: "gap",
        title: "Pasa el recado",
        prompt: "Transmite la orden con que + subjuntivo. Cuidado con la persona y los pronombres.",
        items: [
          { q: "Patricio a Hannah: «Llega a las siete». → Rocío a Hannah: Patricio dice que ___ a las siete.", answers: [["llegues"]], why: "La orden pasa a _que_ + subjuntivo de tú: **llegues**." },
          { q: "Rocío a ti: «Mateo, cierra la puerta». → Tú: Dile a Mateo que ___ la puerta.", answers: [["cierre"]], why: "Orden para Mateo (él): **cierre**." },
          { q: "El guía: «No toquen las plantas». → Hannah a Rocío: El guía nos pide que no ___ las plantas.", answers: [["toquemos"]], why: "Ahora el grupo es _nosotros_: **toquemos**." },
          { q: "Patricio a Hannah: «Mándame el documento». → Rocío: Dice que se lo ___.", answers: [["mandes"]], why: "_me lo_ pasa a _se lo_ y el verbo a **mandes**." },
        ],
      },
      {
        id: "b1-05-g4",
        type: "error",
        title: "Corrige con todo el bloque",
        prompt: "Cada frase tiene un error de alguna semana del bloque. Escríbela corregida.",
        items: [
          { sentence: "Quiero que yo aprenda a reconocer las plantas del páramo.", answers: ["Quiero aprender a reconocer las plantas del páramo."], why: "Semana 5: la misma persona → **infinitivo**." },
          { sentence: "Ojalá que no llueve en la excursión.", answers: ["Ojalá que no llueva en la excursión."], why: "Semana 2: _ojalá_ + **subjuntivo**." },
          { sentence: "No creo que el bus sale a tiempo.", answers: ["No creo que el bus salga a tiempo."], why: "Semana 4: opinión negada → **subjuntivo**." },
          { sentence: "Me molestan que los turistas dejen basura en el sendero.", answers: ["Me molesta que los turistas dejen basura en el sendero."], why: "Semana 3: el verbo de emoción va en **singular**." },
          { sentence: "Cuando abrí la mochila, vi que me olvidé los guantes.", answers: ["Cuando abrí la mochila, vi que me había olvidado los guantes."], why: "Semana 1: descubrimiento de algo anterior → **pluscuamperfecto**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Las palabras de un voluntariado con familia de acogida en los Andes, con algunas expresiones muy ecuatorianas.",
    groups: [
      {
        title: "Voluntariado y acogida",
        items: [
          { es: "la familia de acogida", note: "familia que recibe en su casa a un estudiante o voluntario" },
          { es: "el voluntariado", note: "trabajo que se hace sin cobrar para ayudar a otros" },
          { es: "el coordinador / la coordinadora", note: "persona que organiza el proyecto" },
          { es: "dejar un recado", note: "pedir a alguien que transmita un mensaje" },
          { es: "hacer caso a alguien", note: "seguir sus consejos o sus órdenes" },
          { es: "madrugar", note: "levantarse muy temprano" },
        ],
      },
      {
        title: "En los Andes",
        items: [
          { es: "el páramo", note: "ecosistema frío y húmedo de alta montaña" },
          { es: "el soroche", note: "malestar por la altura (mal de altura)" },
          { es: "la ropa de abrigo", note: "ropa que protege del frío" },
          { es: "las botas de agua", note: "botas de goma para la lluvia y el barro" },
          { es: "el sendero", note: "camino estrecho para caminar" },
          { es: "el cóndor", note: "gran ave de los Andes, símbolo de Ecuador" },
        ],
      },
      {
        title: "Así se dice en Ecuador",
        items: [
          { es: "¡Achachay!", note: "¡qué frío! (de origen kichwa)" },
          { es: "ya mismo", note: "dentro de poco, en un momento (puede ser bastante tiempo)" },
          { es: "¿Me regala…?", note: "forma amable de pedir algo en una tienda: ¿me da…?" },
          { es: "mija / mijo", note: "forma cariñosa de dirigirse a alguien (mi hija, mi hijo)" },
          { es: "¿ya?", note: "al final de una frase: ¿de acuerdo?" },
        ],
      },
    ],
    exercises: [
      {
        id: "b1-05-v1",
        type: "match",
        title: "¿Qué significa?",
        prompt: "Relaciona cada expresión con su significado.",
        pairs: [
          { left: "el soroche", right: "dolor de cabeza y cansancio por la altura" },
          { left: "madrugar", right: "salir de la cama a las cinco de la mañana" },
          { left: "hacer caso", right: "seguir lo que alguien te aconseja" },
          { left: "¡Achachay!", right: "lo que dices cuando hace mucho frío" },
          { left: "ya mismo", right: "dentro de un rato, quizás largo" },
          { left: "dejar un recado", right: "pedir que alguien transmita un mensaje" },
        ],
      },
      {
        id: "b1-05-v2",
        type: "context",
        title: "En Quito",
        prompt: "Elige la frase más natural en cada situación.",
        items: [
          { context: "Estás en una panadería de Quito y quieres dos panes.", q: "Dices:", options: ["¿Me regala dos panes, por favor?", "¿Me deja de dos panes?", "Hazme dos panes."], answer: 0, why: "En Ecuador, **¿me regala…?** es una forma amable de pedir (y pagas igual)." },
          { context: "Sales a las seis de la mañana y hace muchísimo frío.", q: "Dices:", options: ["¡Qué soroche!", "¡Ya mismo!", "¡Achachay!"], answer: 2, why: "**¡Achachay!** expresa que hace frío." },
          { context: "Tu madre de acogida te dice: «Llámame cuando llegues, ¿ya?».", q: "Quiere decir:", options: ["¿Ya has llegado?", "¿De acuerdo?", "Llámame ahora mismo."], answer: 1, why: "**¿ya?** al final de la frase pide confirmación: _¿de acuerdo?_" },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento en el imperativo con pronombres: siéntese, dímelo",
    explanation: [
      "Cuando pegas pronombres a una orden afirmativa, la palabra crece, pero **la sílaba fuerte no se mueve**: _siente_ → **sién**-te-se; _di_ → **dí**-me-lo; _explica_ → ex-**plí**-ca-me-lo. Por eso muchas de estas formas llevan tilde.",
      "En la orden negativa los pronombres van delante y cada palabra conserva su acento: _no se **sien**-te_, _no me lo **di**-gas_. Escucha la diferencia entre la orden afirmativa con pronombre pegado y la negativa con pronombres separados.",
      "La voz es sintética: úsala para percibir dónde cae la fuerza, no como modelo regional.",
    ],
    table: {
      caption: "La sílaba fuerte no cambia",
      head: ["Sin pronombre", "Con pronombres", "Negativo"],
      rows: [
        ["siente (usted)", "siéntese", "no se siente"],
        ["di (tú)", "dímelo", "no me lo digas"],
        ["trae (tú)", "tráemela", "no me la traigas"],
        ["pongan (ustedes)", "pónganselas", "no se las pongan"],
      ],
    },
    perceive: {
      id: "b1-05-p1",
      type: "listen",
      title: "¿Afirmativa o negativa?",
      prompt: "Escucha la orden y elige la forma que oyes.",
      items: [
        { q: "¿Qué forma oyes?", audio: "Siéntese aquí, por favor.", voice: "es-PE-f", options: ["siéntese", "no se siente"], answer: 0, why: "Pronombre pegado al final: afirmativa." },
        { q: "¿Qué forma oyes?", audio: "No me lo digas todavía.", voice: "es-CO-m", options: ["dímelo", "no me lo digas"], answer: 1, why: "Pronombres delante: negativa." },
        { q: "¿Qué forma oyes?", audio: "Tráemela mañana, ¿ya?", voice: "es-PE-f", options: ["tráemela", "no me la traigas"], answer: 0, why: "_TRÁ-e-me-la_: afirmativa con dos pronombres." },
        { q: "¿Qué forma oyes?", audio: "No se las pongan todavía.", voice: "es-CO-m", options: ["pónganselas", "no se las pongan"], answer: 1, why: "Negativa: pronombres delante del verbo." },
      ],
    },
    produce: [
      { text: "Siéntese, doña Rocío.", tip: "Fuerza en _SIÉN_: _SIÉN-te-se_.", voice: "es-PE-f" },
      { text: "Dímelo con calma.", tip: "_DÍ-me-lo_: la primera sílaba es la fuerte.", voice: "es-CO-m" },
      { text: "No me lo digas todavía.", tip: "Cuatro palabras con su propio acento: _no me lo DI-gas_.", voice: "es-PE-f" },
      { text: "Dile a Mateo que me llame.", tip: "_DI-le_; después, _que me LLA-me_ sin pausa.", voice: "es-CO-m" },
    ],
    spelling: "Regla práctica: si al pegar pronombres la palabra pasa a tener la fuerza en la antepenúltima sílaba o antes, lleva tilde: _explica_ → _explícamelo_; _pon_ → _ponlo_ (sin tilde, sigue siendo llana).",
  },
  listening: {
    title: "Recados para Hannah",
    context: "Hannah, voluntaria alemana, vive con la familia Andrade en Quito. Mañana empieza a trabajar en una reserva del páramo. Patricio, el coordinador, ha llamado mientras ella se duchaba y le ha dejado varios recados a Rocío, su madre de acogida. Escucha primero sin leer la transcripción.",
    speakers: [
      { id: "rocio", name: "Rocío", voice: "es-PE-f", role: "madre de acogida" },
      { id: "hannah", name: "Hannah", voice: "es-MX-f", role: "voluntaria" },
    ],
    script: [
      { speaker: "rocio", text: "Hannah, ven un momento, por favor. Te llamó Patricio, el coordinador del proyecto. Ya colgó, pero me dejó varios recados para ti." },
      { speaker: "hannah", text: "Ay, perdón, estaba en la ducha. ¿Qué dice?" },
      { speaker: "rocio", text: "Que mañana no vayas a la oficina, que te espera directamente en la terminal de Quitumbe a las siete. Y que lleves botas de agua y ropa de abrigo, porque suben al páramo." },
      { speaker: "hannah", text: "¿A las siete? Uf, voy a tener que madrugar. ¿Y dijo algo del documento que me faltaba?" },
      { speaker: "rocio", text: "Sí: que se lo mandes hoy por correo. Dice que es importante que lo tenga antes de la salida." },
      { speaker: "hannah", text: "Vale, se lo mando ahora mismo. Oiga, Rocío, ¿usted cree que va a hacer mucho frío arriba?" },
      { speaker: "rocio", text: "Seguro que sí. A lo mejor hasta llueve. No creo que pases calor, eso te lo aseguro. Te aconsejo que te pongas dos capas y que no te olvides de la crema solar, que aquí el sol quema aunque esté nublado." },
      { speaker: "hannah", text: "Gracias. Desde que llegué todo el mundo me cuida. El primer día estaba fatal: no había dormido nada en el avión y, cuando llegué al aeropuerto, me di cuenta de que había dejado el cargador en Madrid, en la escala." },
      { speaker: "rocio", text: "Y encima el soroche. Me acuerdo de que querías salir a caminar esa misma tarde y no te dejé." },
      { speaker: "hannah", text: "Sí, y usted tenía razón. Ahora prefiero hacerle caso." },
      { speaker: "rocio", text: "Pues hazme caso también mañana: desayuna bien, no subas rápido y bebe mucha agua. Ah, y Mateo dice que le traigas una foto de un cóndor." },
      { speaker: "hannah", text: "¡Ojalá vea uno! Dicen que es muy difícil." },
      { speaker: "rocio", text: "Puede que tengas suerte. Bueno, mija, que te vaya muy bien. Y llámame cuando bajen, ¿ya?" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: sin transcripción, quédate con la idea general.",
        exercise: {
          id: "b1-05-l1",
          type: "choice",
          prompt: "Responde con lo esencial.",
          items: [
            { q: "¿Qué hace Rocío en esta conversación?", options: ["Pasa a Hannah los recados del coordinador y le da consejos", "Le cuenta a Hannah su propio viaje", "Cancela la excursión de Hannah"], answer: 0, why: "Rocío transmite los recados de Patricio y añade sus consejos." },
            { q: "¿Qué relación hay entre Rocío y Hannah?", options: ["Distante y formal", "De conflicto", "Cariñosa y de confianza"], answer: 2, why: "Rocío la cuida, la llama _mija_ y Hannah dice que prefiere hacerle caso." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a cada recado y a lo que pasó el primer día.",
        exercise: {
          id: "b1-05-l2",
          type: "choice",
          prompt: "Elige la respuesta correcta según el audio.",
          items: [
            { q: "¿Dónde tiene que estar Hannah mañana a las siete?", options: ["En la oficina del proyecto", "En la terminal de Quitumbe", "En el aeropuerto"], answer: 1, why: "_Te espera directamente en la terminal de Quitumbe a las siete._" },
            { q: "¿Qué tiene que hacer hoy con el documento?", options: ["Imprimirlo", "Llevarlo mañana", "Mandárselo a Patricio por correo"], answer: 2, why: "_Que se lo mandes hoy por correo._" },
            { q: "¿Qué descubrió Hannah al llegar al aeropuerto?", options: ["Que había dejado el cargador en Madrid", "Que había perdido el pasaporte", "Que nadie la esperaba"], answer: 0, why: "_Me di cuenta de que había dejado el cargador en Madrid._" },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en qué estructura del bloque usa cada frase. Después puedes leer la transcripción.",
        exercise: {
          id: "b1-05-l3",
          type: "classify",
          prompt: "Clasifica cada fragmento del audio.",
          categories: ["Orden directa (imperativo)", "Orden transmitida (que + subjuntivo)", "Consejo, deseo u opinión", "Relato del pasado"],
          items: [
            { text: "Que mañana no vayas a la oficina.", cat: 1 },
            { text: "Desayuna bien, no subas rápido.", cat: 0 },
            { text: "Te aconsejo que te pongas dos capas.", cat: 2 },
            { text: "No había dormido nada en el avión.", cat: 3 },
            { text: "Mateo dice que le traigas una foto.", cat: 1, why: "_Decir que_ + subjuntivo transmite una petición." },
            { text: "¡Ojalá vea uno!", cat: 2 },
            { text: "Ven un momento, por favor.", cat: 0 },
            { text: "Querías salir a caminar y no te dejé.", cat: 3 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Ocho días a 2850 metros",
    genre: "Entrada de blog de viaje",
    frame: "Hannah escribe en su blog, en español, para su grupo de clase de Berlín y para futuros voluntarios.",
    text: [
      "Llevo ocho días en Quito y ya me siento parte de la familia Andrade. Cuando aterricé, era de noche y llovía. No había dormido en todo el viaje y, al buscar el móvil, descubrí que había dejado el cargador en el aeropuerto de Madrid. Rocío, mi madre de acogida, me esperaba en la salida con un cartel con mi nombre y un termo de agüita de hierbas.",
      "Los primeros días fueron duros por la altura: Quito está a 2850 metros y el soroche no perdona. Rocío me prohibió salir a caminar la primera tarde y me obligó a descansar. Yo quería conocer el centro histórico enseguida, pero ahora sé que ella tenía razón. Desde entonces he aprendido a subir las cuestas despacio.",
      "Mañana empiezo por fin a trabajar en la reserva. El coordinador quiere que lleguemos a la terminal a las siete y nos recomienda llevar botas y ropa de abrigo. No creo que sea fácil madrugar tanto, pero estoy segura de que valdrá la pena. Es posible que veamos cóndores; ojalá tenga la cámara preparada.",
      "Lo que más me gusta de Quito es la amabilidad de la gente. Me encanta que en las tiendas te pregunten «¿qué le doy, mija?» y me hace gracia que todo pase «ya mismo», que aquí puede significar en cinco minutos o en una hora. Si estás pensando en venir, te aconsejo que traigas paciencia, una buena chaqueta y muchas ganas de aprender.",
    ],
    glossary: [
      { es: "la agüita de hierbas", note: "infusión caliente muy común en Ecuador" },
      { es: "la cuesta", note: "calle o camino con mucha pendiente" },
      { es: "hacer gracia", note: "parecer divertido o simpático" },
    ],
    tasks: [
      {
        id: "b1-05-r1",
        type: "choice",
        prompt: "Lee el blog y elige la respuesta correcta.",
        items: [
          { q: "¿Qué descubrió Hannah al buscar el móvil en Quito?", options: ["Había perdido la maleta", "Había dejado el cargador en Madrid", "Había dormido todo el viaje"], answer: 1, why: "_Descubrí que había dejado el cargador en el aeropuerto de Madrid._" },
          { q: "¿Qué hizo Rocío la primera tarde?", options: ["No la dejó salir y la hizo descansar", "La llevó al centro histórico", "La dejó sola en casa"], answer: 0, why: "_Rocío me prohibió salir a caminar la primera tarde y me obligó a descansar._" },
          { q: "¿Qué opina Hannah sobre madrugar?", options: ["Que es muy fácil", "Que no vale la pena", "Que no será fácil, pero merecerá la pena"], answer: 2, why: "_No creo que sea fácil madrugar tanto, pero estoy segura de que valdrá la pena._" },
        ],
      },
      {
        id: "b1-05-r2",
        type: "classify",
        prompt: "¿Qué clase del bloque repasa cada fragmento del blog?",
        categories: ["Semana 1: pasados", "Semanas 2 y 3: deseos, consejos y emociones", "Semana 4: opinión y certeza", "Semana 5: infinitivo o que + subjuntivo"],
        items: [
          { text: "No había dormido en todo el viaje.", cat: 0 },
          { text: "ojalá tenga la cámara preparada", cat: 1 },
          { text: "No creo que sea fácil madrugar tanto.", cat: 2 },
          { text: "El coordinador quiere que lleguemos a las siete.", cat: 3 },
          { text: "Me encanta que en las tiendas te pregunten…", cat: 1 },
          { text: "Rocío me prohibió salir a caminar.", cat: 3, why: "_prohibir_ + pronombre + infinitivo." },
          { text: "estoy segura de que valdrá la pena", cat: 2 },
          { text: "Desde entonces he aprendido a subir despacio.", cat: 0 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada fragmento para ver qué estructura del bloque hay dentro.",
      items: [
        { quote: "descubrí que había dejado el cargador", note: "Semana 1: descubrimiento en indefinido + **pluscuamperfecto**." },
        { quote: "Rocío me prohibió salir a caminar", note: "Semana 5: _prohibir_ + pronombre + **infinitivo**." },
        { quote: "El coordinador quiere que lleguemos a la terminal a las siete", note: "Semana 5: otra persona → **que + subjuntivo**." },
        { quote: "No creo que sea fácil madrugar tanto", note: "Semana 4: opinión negada → **subjuntivo**." },
        { quote: "te aconsejo que traigas paciencia", note: "Semana 3: consejo con pronombre + **subjuntivo**." },
      ],
    },
  },
  practice: {
    intro: "Practica integrada: cada ejercicio mezcla estructuras de las cinco semanas del bloque. El último te pide recuperar clase por clase sin mirar.",
    exercises: [
      {
        id: "b1-05-x1",
        type: "order",
        title: "Frases de todo el bloque",
        prompt: "Ordena las palabras.",
        items: [
          { words: ["Dile", "a", "Mateo", "que", "me", "espere", "en", "la", "puerta."] },
          { words: ["Cuando", "llegamos", "al", "refugio,", "ya", "había", "empezado", "a", "nevar."] },
          { words: ["No", "creo", "que", "Hannah", "vuelva", "a", "Berlín", "este", "año."] },
        ],
      },
      {
        id: "b1-05-x2",
        type: "classify",
        title: "¿Qué forma sigue?",
        prompt: "Clasifica cada comienzo según la forma que debe seguir.",
        categories: ["infinitivo", "que + indicativo", "que + subjuntivo"],
        items: [
          { text: "Hannah necesita (ella misma)…", cat: 0 },
          { text: "Rocío necesita que Mateo…", cat: 2 },
          { text: "Estoy segura de…", cat: 1, why: "_Estoy segura de que_ + indicativo (semana 4)." },
          { text: "Dudo…", cat: 2 },
          { text: "El guía nos prohíbe…", cat: 0 },
          { text: "Patricio dice (informa)…", cat: 1 },
          { text: "Patricio dice (ordena)…", cat: 2 },
          { text: "Es una pena…", cat: 2 },
        ],
      },
      {
        id: "b1-05-x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la frase correcta.",
        items: [
          { context: "Patricio te pide que digas a otra voluntaria, Inés, que traiga su pasaporte.", q: "Le dices a Inés:", options: ["Patricio dice que traes el pasaporte.", "Patricio dice que traigas el pasaporte.", "Patricio dice trae el pasaporte."], answer: 1, why: "Orden transmitida: _que_ + **subjuntivo**." },
          { context: "Quieres decir a doña Rocío, con respeto, que no se preocupe.", q: "Le dices:", options: ["No se preocupe, doña Rocío.", "No te preocupes, doña Rocío.", "No preocúpese, doña Rocío."], answer: 0, why: "Usted negativo: **no se preocupe**, pronombre delante." },
          { context: "Cuentas que al llegar al páramo descubriste que tu compañero ya había visto un cóndor.", q: "Dices:", options: ["Al llegar, supe que mi compañero ya vio un cóndor.", "Al llegar, supe que mi compañero ya veía un cóndor.", "Al llegar, supe que mi compañero ya había visto un cóndor."], answer: 2, why: "Semana 1: lo anterior al descubrimiento va en **pluscuamperfecto**." },
        ],
      },
      {
        id: "b1-05-x4",
        type: "gap",
        title: "Un mensaje de grupo",
        prompt: "Completa el mensaje de Hannah a los otros voluntarios con la forma correcta.",
        items: [
          { q: "¡Hola a todos! Ayer, cuando llegué a casa, Rocío ya ___ la cena. (preparar)", answers: [["había preparado"]], why: "Semana 1: anterior a _llegué_." },
          { q: "Patricio quiere que ___ a las siete en la terminal. (nosotros, estar)", answers: [["estemos"]], why: "Semana 5: otro sujeto → subjuntivo." },
          { q: "Os aconsejo que ___ guantes: arriba hace mucho frío. (llevar)", answers: [["llevéis"]], why: "Semana 3: consejo + subjuntivo (vosotros)." },
          { q: "Ojalá ___ sol, pero a lo mejor ___. (hacer / llover)", answers: [["haga"], ["llueve"]], why: "Semana 2: _ojalá_ + subjuntivo; semana 4: _a lo mejor_ + indicativo." },
        ],
      },
      {
        id: "b1-05-x5",
        type: "open",
        title: "Escribe con todo el bloque",
        prompt: "Imagina que hiciste un viaje o un voluntariado. Escribe cada parte y compara con el modelo.",
        items: [
          {
            prompt: "Cuenta en dos frases un problema del primer día y qué había pasado antes.",
            model: "El primer día me perdí en el metro. No había descargado el mapa y mi móvil no tenía conexión.",
            checklist: ["Uso indefinido para el hecho.", "Uso pluscuamperfecto para lo anterior."],
          },
          {
            prompt: "Escribe tres instrucciones para quien va a hacer el mismo viaje: una afirmativa de tú, una negativa y una con _te aconsejo que_.",
            model: "Descarga los mapas antes de salir. No cambies dinero en el aeropuerto. Te aconsejo que lleves una chaqueta impermeable.",
            checklist: ["La afirmativa de tú tiene forma propia.", "La negativa y el consejo van en subjuntivo."],
          },
          {
            prompt: "Pasa a otra persona un recado de tu guía: «Lleva agua y no te separes del grupo».",
            model: "La guía dice que lleves agua y que no te separes del grupo.",
            checklist: ["Uso _que_ + subjuntivo para cada orden.", "Ajusto los pronombres a la nueva situación."],
          },
          {
            prompt: "Termina con una opinión negada y un deseo.",
            model: "No creo que olvide nunca ese viaje. Ojalá pueda volver pronto.",
            checklist: ["Subjuntivo después de _no creo que_.", "Subjuntivo después de _ojalá_."],
          },
        ],
      },
      {
        id: "b1-05-retrieval",
        type: "open",
        title: "Recupera clase por clase",
        prompt: "Sin mirar la teoría, recupera una idea de cada semana del bloque. Escribe primero y compara después con el modelo.",
        items: [
          {
            prompt: "Semana 1 (G086 y G087): escribe una frase con escena, hecho y algo anterior sobre tu llegada a un lugar nuevo.",
            model: "Hacía frío cuando bajé del avión y descubrí que mi maleta no había llegado.",
            checklist: ["Imperfecto, indefinido y pluscuamperfecto en su función.", "La frase tiene sentido completo."],
          },
          {
            prompt: "Semana 2 (G088 y G089): escribe el subjuntivo de tener, ir y saber, y un deseo para una amiga que empieza un trabajo.",
            model: "tenga, vaya, sepa. Espero que tengas compañeros simpáticos y que te vaya genial.",
            checklist: ["Las tres formas son correctas.", "El deseo usa _que_ + subjuntivo."],
          },
          {
            prompt: "Semana 3 (G090, G091 y G092): escribe un consejo, una valoración y una emoción sobre la vida en una ciudad grande.",
            model: "Te recomiendo que uses el transporte público. Es una pena que haya tanto tráfico. Me encanta que los museos sean gratis los domingos.",
            checklist: ["Las tres frases llevan _que_ + subjuntivo.", "El verbo de emoción va en singular."],
          },
          {
            prompt: "Semana 4 (G093 y G094): escribe una opinión afirmada, una negada y una posibilidad con _a lo mejor_ sobre tu próximo viaje.",
            model: "Creo que voy a ir a Perú. No creo que pueda ir antes de julio. A lo mejor viajo con mi hermana.",
            checklist: ["Indicativo con _creo que_ y con _a lo mejor_.", "Subjuntivo con _no creo que_."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un correo de 150–190 palabras a una persona que va a hacer el mismo viaje, intercambio o voluntariado que tú: cuéntale qué te pasó al llegar y qué había pasado antes, dale instrucciones y consejos, pásale un recado de alguien, valora la experiencia y termina con un deseo.",
    context: "La organización te ha pedido que escribas a la próxima persona que llega. No la conoces, pero quieres ayudarla y que se sienta tranquila. Escribe en tono cercano.",
    steps: [
      "Planifica cinco partes: saludo, relato de tu llegada, instrucciones y consejos, recado y valoración, deseo y despedida.",
      "Escribe una primera versión usando al menos una estructura de cada semana del bloque.",
      "Subraya cada _que_ y decide si lleva indicativo o subjuntivo; marca también los infinitivos.",
      "Revisa los imperativos (afirmativos y negativos) y los pronombres; corrige lo que no encaje.",
    ],
    useLanguage: ["Cuando llegué, ya había…", "Trae… / No traigas…", "Te aconsejo que…", "Fulano dice que…", "Es importante que… / No creo que…", "¡Ojalá…! / ¡Que te vaya bien!"],
    model: [
      "¡Hola, Clara! Me llamo Hannah y acabo de terminar mi voluntariado en el páramo, cerca de Quito. Patricio me ha pedido que te escriba antes de tu viaje. Cuando yo llegué, era de noche y llovía; no había dormido nada en el avión y, además, había dejado el cargador en Madrid. Por suerte, Rocío, la madre de acogida, me esperaba con un termo de agüita de hierbas.",
      "Te doy algunos consejos. Trae ropa de abrigo y botas de agua, y no subas rápido las cuestas los primeros días, porque el soroche es real. Te aconsejo que bebas mucha agua y que hagas caso a Rocío: siempre tiene razón. Ah, y Patricio dice que le mandes tu seguro médico antes del lunes.",
      "Es una experiencia increíble y vas a trabajar con gente muy comprometida. No creo que encuentres gente más amable, y seguro que vas a aprender muchísimo. ¡Ojalá veas un cóndor! Yo vi dos. ¡Que te vaya muy bien! Un abrazo, Hannah",
    ],
    checklist: [
      "Cuento mi llegada con imperfecto, indefinido y al menos un pluscuamperfecto.",
      "Doy instrucciones con imperativo afirmativo y negativo.",
      "Paso un recado con _dice que_ + subjuntivo.",
      "Uso infinitivo con el mismo sujeto y _que_ + subjuntivo con otro sujeto.",
      "Valoro la experiencia con una opinión o una certeza y termino con un deseo.",
    ],
    words: [150, 190],
  },
  speaking: {
    intro: "Habla en voz alta y grábate en tu dispositivo. Prepara notas, no un texto para leer; el curso no puntúa tu pronunciación ni sube tu audio.",
    tasks: [
      {
        title: "Tu experiencia en dos minutos",
        prompt: "Durante dos minutos, cuenta una experiencia de llegada a un lugar nuevo (un viaje, un trabajo, una mudanza) y da consejos a quien va a vivir lo mismo. Usa al menos una estructura de cada semana del bloque.",
        prep: ["Escena y hechos: _Cuando llegué, era… y…_", "Algo anterior: _No había… / Me di cuenta de que…_", "Consejos e instrucciones: _Te aconsejo que… / No hagas…_", "Opinión y deseo: _No creo que… / Ojalá…_"],
        seconds: 120,
        model: "Cuando llegué a Lima para mi primer trabajo, era agosto y estaba todo gris. No había visto nunca una ciudad tan grande. El primer día me equivoqué de autobús porque no había descargado ningún mapa. Si vas a ir, te aconsejo que descargues los mapas y que no tomes taxis en la calle. Es importante que pruebes la comida de los mercados. No creo que te aburras nunca. ¡Ojalá te guste tanto como a mí!",
        selfCheck: ["Uso estructuras de las cinco semanas.", "Distingo infinitivo y que + subjuntivo.", "Mi relato tiene orden: escena, hechos, consejos y cierre."],
      },
      {
        title: "Pasa los recados y responde",
        prompt: "Tu compañero de piso estaba fuera y te pregunta si alguien llamó. Pásale tres recados (de su jefa, de su madre y del casero) con _dice que_ + subjuntivo, responde a sus preguntas y aclara un recado que no entiende bien. Imagina sus preguntas en voz alta.",
        prep: ["Recado: _Tu jefa dice que la llames antes de las cinco._", "Responde: _—¿Y qué más? —Que no te olvides de…_", "Aclara: _No, no dice que vayas, dice que le mandes…_"],
        seconds: 90,
        model: "Sí, llamaron tres personas. Tu jefa dice que la llames antes de las cinco. Tu madre, que no te olvides del cumpleaños de tu abuela. ¿El casero? Que le dejes la llave al portero. No, no dice que le pagues hoy, dice que le dejes la llave.",
        selfCheck: ["Transmito cada recado con _que_ + subjuntivo.", "Ajusto los pronombres.", "Aclaro cuando mi interlocutor no entiende."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que has repasado en el bloque y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Transmite", task: "Pide a tu profesor que te dé tres órdenes en voz baja y pásalas a la clase o a una tercera persona imaginaria.", phrases: ["Dice que…", "Que no…"] },
      { move: "Cuenta", task: "Cuenta en un minuto tu llegada a un lugar nuevo con escena, hecho y algo anterior.", phrases: ["Cuando llegué…", "Me di cuenta de que ya había…"] },
      { move: "Opina", task: "Da tu opinión sobre una norma de tu ciudad y responde a la objeción de tu profesor.", phrases: ["Creo que…", "No es que…, es que…"] },
      { move: "Pregunta", task: "Lleva la estructura del bloque que más dudas te da y pide a tu profesor dos ejemplos nuevos.", phrases: ["¿Por qué aquí va subjuntivo?", "¿Puedo decir también…?"] },
    ],
    bring: "Tu correo revisado con los _que_ subrayados, la grabación de tu experiencia y una lista de tus tres errores más frecuentes del bloque.",
  },
  quiz: {
    items: [
      { type: "choice", q: "Mi hermana prefiere que yo la ___ al aeropuerto.", options: ["llevo", "lleve", "llevar"], answer: 1, why: "Semana 5: otra persona → **que + subjuntivo**." },
      { type: "listen", q: "Escucha a Rocío: ¿qué forma usa?", audio: "No subas rápido.", voice: "es-PE-f", options: ["Una orden afirmativa", "Una orden negativa", "Una opinión"], answer: 1, why: "_No subas_: imperativo negativo de tú (subjuntivo)." },
      { type: "gap", q: "Mateo, ___ el abrigo, que hace frío. (ponerse)", answers: [["ponte"]], why: "Tú afirmativo con pronombre: **ponte**." },
      { type: "gap", q: "La guía dice que no ___ fotos con flash a los animales. (nosotros, hacer)", answers: [["hagamos"]], why: "Orden transmitida: **hagamos**." },
      { type: "gap", q: "Cuando volví al hotel, mis amigos ya ___. (cenar)", answers: [["habían cenado"]], why: "Semana 1: anterior a _volví_." },
      { type: "gap", q: "Es posible que mañana ___ el volcán desde aquí. (nosotros, ver)", answers: [["veamos"]], why: "Semana 4: posibilidad + **subjuntivo**." },
      { type: "error", sentence: "Te prohíbo de salir sin chaqueta.", answers: ["Te prohíbo salir sin chaqueta."], why: "Semana 5: _prohibir_ + infinitivo, sin _de_." },
      { type: "error", sentence: "Señora, no se preocupa por mí.", answers: ["Señora, no se preocupe por mí."], why: "Usted negativo: **no se preocupe**." },
      { type: "error", sentence: "Me alegra que estoy con vosotros en Quito.", answers: ["Me alegra estar con vosotros en Quito."], why: "Semana 5: la misma persona siente y está → **infinitivo**." },
      { type: "order", words: ["Dile", "a", "Patricio", "que", "me", "llame", "esta", "tarde."] },
      {
        type: "open",
        prompt: "Reformulación. Texto de partida: Patricio a Hannah: «Trae botas de agua y no subas sola al páramo.» Pasa el recado a Hannah empezando por «Patricio dice que…».",
        model: "Patricio dice que traigas botas de agua y que no subas sola al páramo.",
        checklist: ["Uso _que_ + subjuntivo en las dos órdenes.", "Mantengo la persona tú porque hablo con Hannah.", "Conservo toda la información; acepto otra formulación equivalente."],
      },
      {
        type: "open",
        prompt: "Escribe cuatro frases sobre una ciudad que conoces: algo que te pasó allí (con algo anterior), un consejo para un visitante, una opinión negada y un deseo.",
        model: "Cuando llegué a Cuenca, mis amigos ya habían reservado un restaurante. Te aconsejo que visites el mercado de flores. No creo que encuentres una ciudad más tranquila. Ojalá vuelva el año que viene.",
        checklist: ["Pluscuamperfecto para lo anterior.", "Consejo y opinión negada con subjuntivo.", "Deseo con _ojalá_ + subjuntivo."],
      },
    ],
  },
  complete: {
    canNow: [
      "Elegir entre infinitivo (misma persona) y que + subjuntivo (otra persona) con deseos, necesidades, emociones y valoraciones.",
      "Usar permitir, prohibir, dejar y obligar a con pronombre e infinitivo.",
      "Dar órdenes afirmativas y negativas con tú, usted, nosotros, vosotros y ustedes, con los pronombres en su sitio.",
      "Pasar una orden a otra persona con dile que, dice que o me pide que + subjuntivo.",
      "Integrar los pasados, el pluscuamperfecto, los deseos, los consejos, las emociones y las opiniones de las semanas 1 a 4.",
    ],
    review: [
      "¿Misma persona? Infinitivo. ¿Otra persona? Que + subjuntivo.",
      "Solo tú afirmativo tiene forma propia; lo demás es subjuntivo.",
      "Ven → dile que venga; mándamelo → dice que se lo mandes.",
      "Para el próximo bloque: repasa la lista de tus tres errores frecuentes antes de cada clase.",
    ],
  },
  related: [
    { path: "/gramatica/infinitivo-o-que-subjuntivo-mismo-sujeto", label: "Clase: Infinitivo o que + subjuntivo: mismo sujeto / otro" },
    { path: "/gramatica/imperativo-y-peticiones-indirectas-con-subjuntivo", label: "Clase: Imperativo y peticiones indirectas con subjuntivo" },
  ],
};
