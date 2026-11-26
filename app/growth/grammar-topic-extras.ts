/**
 * SEO plan step 6, batch L1 (English part): one section per grammar guide that no other page has
 * (docs/seo-plan/05_BRIEFS/). Text approved by the owner on 2026-11-26 (decision card
 * cmsg_01Gr5R4j3t2Yet65UcmhcVhACA7a2tB6n2LPFVRqLrR5hN); manifest in docs/audits/.
 */
export type GrammarTopicExtra = {
  id: string;
  title: string;
  intro: string;
  steps?: string[];
  table: { caption: string; head: string[]; rows: string[][] };
  closing: string;
};

export const grammarTopicExtras: Readonly<Record<string, GrammarTopicExtra>> = {
  subjunctive: {
    id: 'subjunctive-errors',
    title: 'The eight subjunctive errors you will hear, and what to say back',
    intro: "Each row gives the error, the teacher's correction line and a follow-up question that makes the learner use the form again straight away.",
    table: {
      caption: 'Subjunctive errors, correction lines and follow-up questions',
      head: ['What the learner says', 'What you say', 'Follow-up question'],
      rows: [
        ['Quiero que vienes mañana.', 'Quiero que vengas: you want it, they have to do it.', '¿Qué quieres que haga yo este fin de semana?'],
        ['Creo que sea verdad.', 'Creo que es verdad: you believe it, so it is a fact for you.', '¿Y qué no crees?'],
        ['No creo que es posible.', 'No creo que sea posible: the doubt changes the verb.', '¿Qué no crees que pase este año?'],
        ['Cuando llegaré, te llamo.', 'Cuando llegue: a future moment after cuando takes the subjunctive.', '¿Qué vas a hacer cuando termines el curso?'],
        ['Es importante que estudias.', 'Es importante que estudies: a judgement, not a report.', '¿Qué es importante que sepa un alumno nuevo?'],
        ['Me alegro que viniste.', 'Me alegro de que hayas venido: a reaction to something that just happened.', '¿De qué te alegras esta semana?'],
        ['Quiero que yo aprenda más.', 'Quiero aprender más: same person, so use the infinitive.', '¿Qué quieres aprender tú y qué quieres que aprenda tu equipo?'],
        ['Si tenga tiempo, voy.', 'Si tengo tiempo: si never takes the present subjunctive.', '¿Qué haces si llueve el sábado?'],
      ],
    },
    closing: 'Correct one row at a time. If the learner makes three of these errors in one task, pick the one that blocks meaning (usually the first two rows) and leave the rest for the next class.',
  },
  'por-para': {
    id: 'route-or-destination',
    title: 'Route or destination? A map the learner draws',
    intro: 'The quickest way to separate the two prepositions is to make the learner draw the trip. Por marks the path and the cause; para marks the destination and the purpose.',
    steps: [
      'Draw a simple map: home, a park, a bridge, the office and a café.',
      'Say a sentence and have the learner trace it: «Voy para la oficina» (the office is where I am heading), «Paso por el parque» (the park is on the way).',
      'Swap roles: the learner gives you a route with three stops using por and one destination with para, and you trace it.',
      'Add a reason and a goal: «Voy por el puente porque la calle está cortada, para llegar antes de las nueve.»',
    ],
    table: {
      caption: 'Por and para on the map',
      head: ['On the map', 'Preposition', 'Example'],
      rows: [
        ['Where you are heading', 'para', 'Salgo para el aeropuerto.'],
        ['The places you pass', 'por', 'Pasamos por el centro.'],
        ['Why you change the route', 'por', 'Cambiamos de ruta por las obras.'],
        ['What you want to achieve', 'para', 'Vamos por el puente para llegar antes.'],
        ['The deadline', 'para', 'Tiene que estar allí para el viernes.'],
        ['How long the trip takes', '(no preposition or durante)', 'Caminamos veinte minutos.'],
      ],
    },
    closing: 'The last row matters. Learners often add por to every length of time («caminé por veinte minutos») because of English «for». In most contexts Spanish simply drops the preposition.',
  },
  conditional: {
    id: 'advice-clinic',
    title: 'Advice clinic: problem cards with a sentence frame for each level',
    intro: 'Read a problem aloud and give the learner the frame for their level. The same problem works at three levels; only the frame changes.',
    table: {
      caption: 'Problem cards with A2, B1 and B2 sentence frames',
      head: ['Problem', 'A2 frame (real condition)', 'B1 frame (advice)', 'B2 frame (hypothesis)'],
      rows: [
        ['My neighbour plays music until 2 a.m.', 'Si pone música otra vez, voy a…', 'Yo que tú, hablaría con él…', 'Si viviera en tu piso, yo…'],
        ['My boss sends me messages at the weekend.', 'Si me escribe el sábado, …', 'Deberías decirle que…', 'Si no contestaras, ¿qué pasaría?'],
        ['I want to change careers at 40.', 'Si encuentro un curso, …', 'Podrías empezar por…', 'Si tuviera tu edad y tu experiencia, …'],
        ['My flatmate never cleans the kitchen.', 'Si no limpia, yo…', 'Lo mejor sería hacer una lista…', 'Si él pagara la limpieza, ¿aceptarías…?'],
        ["I can't sleep before an exam.", 'Si no duermo, …', 'Te recomendaría no estudiar de noche…', 'Si hubieras dormido bien, ¿habrías…?'],
        ['My friend always arrives an hour late.', 'Si llega tarde otra vez, …', 'Yo en tu lugar le diría…', 'Si tú llegaras tarde, ¿cómo reaccionaría ella?'],
      ],
    },
    closing: 'Let the learner choose the problem. Adults give better advice about a situation they recognise, and the conversation that follows is where the conditional is used for real.',
  },
  past: {
    id: 'timeline-storyboard',
    title: 'A timeline storyboard: bands for the scene, dots for the events',
    intro: 'Before the learner tells a story, they draw it. A long band is the scene that was already there (imperfect); a dot is something that happened and moved the story on (preterite).',
    steps: [
      'Draw a horizontal line. Above it, the learner draws one or two long bands: the weather, where they were, what people were doing.',
      'On the line, they add three to five dots: the events, in order.',
      'They tell the story from left to right: every band becomes an imperfect, every dot a preterite.',
      'You add a new dot in the middle («de repente, se fue la luz») and the learner retells the story with it.',
    ],
    table: {
      caption: 'Bands and dots on the storyboard',
      head: ['On the storyboard', 'Tense', 'Example'],
      rows: [
        ['A band that covers the whole story', 'imperfect', 'Hacía frío y había mucha gente.'],
        ['A band that starts before a dot', 'imperfect', 'Estábamos cenando…'],
        ['The dot that interrupts it', 'preterite', '…cuando sonó el teléfono.'],
        ['Dots one after another', 'preterite', 'Me levanté, me vestí y salí.'],
        ['A band with an end marked', 'preterite', 'Estuvimos dos horas en la cola.'],
      ],
    },
    closing: 'The last row is the one learners get wrong: a long action with a clear limit («dos horas») is a preterite even though it lasted. Ask: did it end inside the story? If yes, it is a dot, however long the dot is.',
  },
};
