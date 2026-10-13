// El Gran Meridiano · the six levels. A1–B2 and C2 tell «La ficha dorada»;
// C1 is its own track, the casino seen from the marketing department.
import a1 from './levels/a1.mjs';
import a2 from './levels/a2.mjs';
import b1 from './levels/b1.mjs';
import b2 from './levels/b2.mjs';
import c1 from './levels/c1.mjs';
import c2 from './levels/c2.mjs';

export const LEVELS = [
  { id: 'A1', label: 'A1', story: 'La ficha dorada', hint: 'Frases cortas en presente' },
  { id: 'A2', label: 'A2', story: 'La ficha dorada', hint: 'Recuerdos, planes y comparaciones' },
  { id: 'B1', label: 'B1', story: 'La ficha dorada', hint: 'Contar, opinar y aconsejar' },
  { id: 'B2', label: 'B2', story: 'La ficha dorada', hint: 'Hipótesis, persuasión e ironía' },
  { id: 'C1', label: 'C1 · Marketing', story: 'Marketing en el Gran Meridiano', hint: 'Decisiones de marketing de casino con datos' },
  { id: 'C2', label: 'C2', story: 'La ficha dorada', hint: 'Voz negra, dobles sentidos y matices' },
];

export const CONTENT = { A1: a1, A2: a2, B1: b1, B2: b2, C1: c1, C2: c2 };
