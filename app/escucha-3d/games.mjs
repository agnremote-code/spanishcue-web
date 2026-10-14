// Comprensión auditiva in the 3D conversation games: which levels each game
// offers and which white circle owns each listening. A circle without its own
// listening opens the next one the student has not finished.
export const GAMES = {
  noche: {
    title: 'Noche abierta',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['cafe', 'departamento', 'restaurante', 'plaza', 'bar', 'museo', 'taxi', 'terraza'],
  },
  casino: {
    title: 'El Gran Meridiano',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['portero', 'ruleta', 'bar', 'poker', 'teatro', 'capilla', 'vip', 'terraza'],
  },
  bosque: {
    title: 'El bosque de los hongos gigantes',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['sobre-ti', 'vida-real', 'elige', 'opinion', 'recuerdos', 'futuro', 'compara', 'cambia'],
  },
  reino: {
    title: 'El reino de la rosa dormida',
    levels: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['ines', 'bruno', 'liora', 'aldren', 'celina', 'baltasar', 'teobaldo', 'elara'],
  },
};

// Transcript length in words for each level.
export const WORDS = { A0: [20, 50], A1: [40, 80], A2: [70, 120], B1: [100, 160], B2: [140, 200], C1: [170, 240], C2: [200, 280] };

// Slower voices for the first levels.
export const RATE = { A0: '-22%', A1: '-14%', A2: '-7%', B1: '-3%', B2: '+0%', C1: '+0%', C2: '+4%' };

export const audioSrc = (game, level, id) => `/audio/escucha-3d/${game}-${level.toLowerCase()}-${id}.mp3`;

/** The listening for a circle: its own one, else the first unfinished one. */
export function listeningFor(items, spot, done = []) {
  return items.find(item => item.id === spot) ?? items.find(item => !done.includes(item.id)) ?? items[0] ?? null;
}

/** "Llegaron a las [nueve] de la noche" → text parts and the hidden answers. */
export function parseGaps(source) {
  const parts = [];
  const answers = [];
  let rest = source;
  for (;;) {
    const open = rest.indexOf('[');
    if (open < 0) { parts.push(rest); break; }
    const close = rest.indexOf(']', open);
    parts.push(rest.slice(0, open));
    answers.push(rest.slice(open + 1, close));
    rest = rest.slice(close + 1);
  }
  return { parts, answers };
}

/** Accents, capitals and punctuation do not count when checking a gap. */
export function sameWord(a, b) {
  const clean = value => value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es').replace(/[^\p{L}\p{N} ]/gu, '').replace(/\s+/g, ' ').trim();
  return clean(a) === clean(b) && clean(a) !== '';
}

export const transcriptOf = item => item.lines.map(line => line.text).join(' ');
export const wordCount = text => (text.match(/[\p{L}\p{N}]+/gu) ?? []).length;
