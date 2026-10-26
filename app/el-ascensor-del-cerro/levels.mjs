// El ascensor del cerro · the levels that exist. The catalog lists only the
// level shipped here (G6: B2 only). Content is authored by Martin in
// levels/b2.mjs (SPOTS, CAST, CIRCLES, CLOSING, ROUTES, E1_LABEL, PLACEMENT).
import * as b2 from './levels/b2.mjs';

export const LEVELS = [{ id: 'B2', label: 'B2', hint: 'Mediar entre posturas, conceder y objetar, negociar condiciones' }];
export const CONTENT = { B2: b2 };
export const contentFor = level => CONTENT[level] ?? CONTENT.B2;

/** Who says a dialogue line: a cast key or "*An extra". */
export const speakerName = (cast, who) => (who.startsWith('*') ? who.slice(1) : cast[who]?.name ?? who);
