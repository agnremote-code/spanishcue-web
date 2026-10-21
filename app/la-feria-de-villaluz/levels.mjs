// La feria de Villaluz · the levels that exist. The catalog lists only the
// levels shipped here (AM-9, G6). Content is authored by Martin in
// levels/<level>.mjs (CAST, CIRCLES, BUSCA, CLOSING, ROUTES).
import * as a2 from './levels/a2.mjs';

export const LEVELS = [{ id: 'A2', label: 'A2', hint: 'Describir y encontrar a personas, pedir, reclamar, comparar y contar la noche' }];
export const CONTENT = { A2: { ...a2, BUSCA: a2.BUSCA ?? [] } };
export const contentFor = level => CONTENT[level] ?? CONTENT.A2;

/** Who says a dialogue line: a cast key or "*An extra". */
export const speakerName = (cast, who) => (who.startsWith('*') ? who.slice(1) : cast[who]?.name ?? who);
