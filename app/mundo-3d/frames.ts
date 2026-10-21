// Mundo 3D · help shared by every spot of a level: sentence frames to build an
// answer, a short self-check for «Por mi cuenta» and how long to talk.
import type { Bi, WorldLevel } from './types';

export const FRAMES: Record<WorldLevel, Bi[]> = {
  A0: [
    { es: 'Sí, me gusta… / No, no me gusta…', en: 'Yes, I like… / No, I don’t like…' },
    { es: 'Yo prefiero…', en: 'I prefer…' },
    { es: 'Es… (grande, bonito, caro)', en: 'It is… (big, pretty, expensive)' },
    { es: 'En mi ciudad hay…', en: 'In my city there is / there are…' },
    { es: 'No sé. / Un poco.', en: 'I don’t know. / A little.' },
  ],
  A1: [
    { es: 'Prefiero… porque…', en: 'I prefer… because…' },
    { es: 'Normalmente… pero hoy…', en: 'Usually… but today…' },
    { es: 'Para mí es importante…', en: 'For me, … is important' },
    { es: 'Quiero… / Voy a…', en: 'I want to… / I’m going to…' },
    { es: 'Y tú, ¿qué piensas?', en: 'And you, what do you think?' },
  ],
  A2: [
    { es: 'Una vez… y entonces…', en: 'Once… and then…' },
    { es: 'Antes… pero ahora…', en: 'Before… but now…' },
    { es: 'Me parece que… porque…', en: 'It seems to me that… because…' },
    { es: 'Es más… que… / Es tan… como…', en: 'It’s more… than… / It’s as… as…' },
    { es: 'Lo bueno es que… Lo malo es que…', en: 'The good thing is that… The bad thing is that…' },
  ],
  B1: [
    { es: 'Si yo estuviera en su lugar, …', en: 'If I were in their place, …' },
    { es: 'Por un lado… por otro lado…', en: 'On the one hand… on the other hand…' },
    { es: 'Depende de… Por ejemplo, …', en: 'It depends on… For example, …' },
    { es: 'Lo que más me sorprende es que…', en: 'What surprises me most is that…' },
    { es: 'Entiendo tu punto, pero…', en: 'I see your point, but…' },
  ],
};

export const SELF_CHECK: Record<WorldLevel, Bi[]> = {
  A0: [
    { es: 'Dije una palabra o una frase en español.', en: 'I said a word or a sentence in Spanish.' },
    { es: 'Usé una palabra del vocabulario.', en: 'I used a word from the vocabulary.' },
  ],
  A1: [
    { es: 'Respondí con una frase completa.', en: 'I answered with a full sentence.' },
    { es: 'Di una razón con «porque».', en: 'I gave a reason with “porque”.' },
    { es: 'Hice una pregunta al final.', en: 'I asked a question at the end.' },
  ],
  A2: [
    { es: 'Hablé con tres frases o más.', en: 'I spoke in three sentences or more.' },
    { es: 'Conté un ejemplo de mi vida.', en: 'I told an example from my life.' },
    { es: 'Usé un conector: pero, entonces, además.', en: 'I used a connector: pero, entonces, además.' },
  ],
  B1: [
    { es: 'Hablé un minuto sin parar.', en: 'I spoke for a minute without stopping.' },
    { es: 'Di mi opinión y la justifiqué.', en: 'I gave my opinion and justified it.' },
    { es: 'Pensé en otra perspectiva.', en: 'I considered another perspective.' },
    { es: 'Usé una hipótesis con «si».', en: 'I used a hypothesis with “si”.' },
  ],
};

export const TALK_SECONDS: Record<WorldLevel, number> = { A0: 20, A1: 40, A2: 60, B1: 90 };

/** What the people of a spot call out when the student walks by. */
export const GREETINGS = ['¡Hola! ¿Tienes un minuto?', '¡Oye! ¿Me ayudas?', '¡Ven, ven! ¿Hablamos?', '¡Hola! ¿Qué tal?', '¡Perdona! ¿Una pregunta?'];

export const LEVEL_INFO: Record<WorldLevel, { title: string; hint: Bi }> = {
  A0: { title: 'A0', hint: { es: 'Primeras palabras, todo en dos idiomas', en: 'First words, everything in two languages' } },
  A1: { title: 'A1', hint: { es: 'Frases cortas, gustos y planes', en: 'Short sentences, likes and plans' } },
  A2: { title: 'A2', hint: { es: 'Experiencias, comparaciones y opiniones', en: 'Experiences, comparisons and opinions' } },
  B1: { title: 'B1', hint: { es: 'Dilemas, hipótesis y argumentos', en: 'Dilemmas, hypotheses and arguments' } },
};
