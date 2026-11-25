// El taller de la greda · the levels that exist. Single level B1 (the catalog
// lists only what ships here). Content is authored by Martin in levels/b1.mjs.
import * as b1 from './levels/b1.mjs';

export const LEVELS = [{ id: 'B1', label: 'B1', hint: 'Llevar recados sin cambiar su sentido: dijo que, preguntó si, pidió que y «se» de proceso' }];
export const CONTENT = { B1: b1 };
export const contentFor = level => CONTENT[level] ?? CONTENT.B1;

/** Who says a line: a cast key, or the text itself for anyone else. */
export const speakerName = (cast, who) => cast[who]?.name ?? who;
