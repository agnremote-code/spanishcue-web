// El Gran Meridiano · seven levels (A0 in Spanish and English) that tell «La ficha dorada», and apart from
// them a Marketing section: the casino seen from the marketing department, in
// A2 Spanish with the trade's own terms and one choice per scene.
import a0 from './levels/a0.mjs';
import a1 from './levels/a1.mjs';
import a2 from './levels/a2.mjs';
import b1 from './levels/b1.mjs';
import b2 from './levels/b2.mjs';
import c1 from './levels/c1.mjs';
import c2 from './levels/c2.mjs';
import marketing from './levels/marketing.mjs';

export const LEVELS = [
  { id: 'A0', label: 'A0', story: 'La ficha dorada', hint: 'Desde cero, con inglés' },
  { id: 'A1', label: 'A1', story: 'La ficha dorada', hint: 'Frases cortas en presente' },
  { id: 'A2', label: 'A2', story: 'La ficha dorada', hint: 'Recuerdos, planes y comparaciones' },
  { id: 'B1', label: 'B1', story: 'La ficha dorada', hint: 'Contar, opinar y aconsejar' },
  { id: 'B2', label: 'B2', story: 'La ficha dorada', hint: 'Hipótesis, persuasión e ironía' },
  { id: 'C1', label: 'C1', story: 'La ficha dorada', hint: 'Matices, concesiones y registro coloquial' },
  { id: 'C2', label: 'C2', story: 'La ficha dorada', hint: 'Voz negra, dobles sentidos y matices' },
  { id: 'MARKETING', label: 'Marketing', story: 'Marketing en el Gran Meridiano', hint: 'Términos de marketing de casino · nivel A2', track: true },
];

export const CONTENT = { A0: a0, A1: a1, A2: a2, B1: b1, B2: b2, C1: c1, C2: c2, MARKETING: marketing };
