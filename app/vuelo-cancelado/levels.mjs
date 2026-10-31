// Vuelo cancelado · seven levels with their own scenes. A0 is bilingual:
// every text is { es, en }; A1 keeps its scene words as { es, en } keywords;
// the rest is plain Spanish.
import a0 from './levels/a0.mjs';
import a1 from './levels/a1.mjs';
import a2 from './levels/a2.mjs';
import b1 from './levels/b1.mjs';
import b2 from './levels/b2.mjs';
import c1 from './levels/c1.mjs';
import c2 from './levels/c2.mjs';

import { LEVELS } from './levels-info.mjs';

export { LEVELS };

export const CONTENT = { A0: a0, A1: a1, A2: a2, B1: b1, B2: b2, C1: c1, C2: c2 };
