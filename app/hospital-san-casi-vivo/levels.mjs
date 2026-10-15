// Hospital San Casi Vivo · seven levels with their own scenes. A0 is
// bilingual: every text is { es, en }; the other levels are plain Spanish.
import a0 from './levels/a0.mjs';
import a1 from './levels/a1.mjs';
import a2 from './levels/a2.mjs';
import b1 from './levels/b1.mjs';
import b2 from './levels/b2.mjs';
import c1 from './levels/c1.mjs';
import c2 from './levels/c2.mjs';

export const LEVELS = [
  { id: 'A0', label: 'A0', hint: 'Español e inglés, palabra a palabra' },
  { id: 'A1', label: 'A1', hint: 'Frases cortas en presente' },
  { id: 'A2', label: 'A2', hint: 'Contar lo que pasó y comparar' },
  { id: 'B1', label: 'B1', hint: 'Anécdotas, consejos y opiniones' },
  { id: 'B2', label: 'B2', hint: 'Hipótesis, ironía y dilemas' },
  { id: 'C1', label: 'C1', hint: 'Subtexto, registro y humor negro' },
  { id: 'C2', label: 'C2', hint: 'Dobles sentidos y sarcasmo' },
];

export const CONTENT = { A0: a0, A1: a1, A2: a2, B1: b1, B2: b2, C1: c1, C2: c2 };
