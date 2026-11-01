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
  // Every circle of the hospital has its own listening, at every level, and
  // each character keeps one voice (app/hospital-san-casi-vivo/story.mjs).
  hospital: {
    title: 'Hospital San Casi Vivo',
    levels: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['recepcion', 'espera', 'vip', 'triage', 'guardia', 'ambulancias', 'trauma', 'observacion', 'curaciones', 'cafeteria', 'facturacion',
      'laboratorio', 'radiologia', 'quirofano', 'descanso', 'enfermeria', 'internacion', 'habitacion', 'uci', 'morgue', 'limpieza'],
    ownListening: true,
    bilingualA0: true,
  },
  // Estados Unidos 3D: every state has its own listening at each level; any
  // circle of that state opens it (app/estados-unidos-a2-b1/mundo).
  usa: {
    title: 'Estados Unidos',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['florida', 'nueva-york', 'california', 'texas', 'hawai', 'colorado'],
    ownListening: true,
    bilingualA0: true,
    // A FREE lesson (ID 36): its clips live in /audio/escucha-3d-libre, a
    // public prefix (app/access-policy.ts freeAudioPrefixes), not encrypted.
    freeAudio: true,
  },
  // México 3D: every state has its own listening at each level; any circle of
  // that state opens it (app/mexico/mundo). FREE lesson (ID 210): public audio.
  mexico: {
    title: 'México',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['cdmx', 'jalisco', 'oaxaca', 'quintana-roo'],
    ownListening: true,
    bilingualA0: true,
    freeAudio: true,
  },
  // Argentina 3D: every region has its own listening at each level; any circle
  // of that region opens it (app/argentina/mundo). PRO lesson (ID 228).
  argentina: {
    title: 'Argentina',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['buenos-aires', 'cordoba', 'mendoza', 'bariloche'],
    ownListening: true,
    bilingualA0: true,
  },
  // España 3D: every region has its own listening at each level; any circle
  // of that region opens it (app/espana/mundo). PRO lesson (ID 229).
  espana: {
    title: 'España',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['madrid', 'cataluna', 'andalucia', 'valencia'],
    ownListening: true,
    bilingualA0: true,
  },
  // Suecia 3D: every region has its own listening at each level; any circle
  // of that region opens it (app/suecia/mundo). PRO lesson (ID 227).
  suecia: {
    title: 'Suecia',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['estocolmo', 'gotemburgo', 'laponia', 'malmo'],
    ownListening: true,
    bilingualA0: true,
  },
  // Reino Unido 3D (A0–B1): one listening per nation and level; walking into the circle
  // of that nation opens it (app/reino-unido-en-relieve/mundo). PRO lesson (ID 32).
  uk: {
    title: 'Reino Unido',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['inglaterra', 'escocia', 'gales', 'irlanda-norte'],
    ownListening: true,
    bilingualA0: true,
  },
  // Irlanda 3D (A0–B1): one listening per region and level; walking into the circle
  // of that region opens it (app/irlanda-en-relieve/mundo). PRO lesson (ID 33).
  irlanda: {
    title: 'Irlanda',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['dublin', 'galway', 'kerry', 'cork'],
    ownListening: true,
    bilingualA0: true,
  },
  // Australia 3D (A0–B1): one listening per region and level; walking into the circle
  // of that region opens it (app/australia-en-movimiento/mundo). PRO lesson (ID 30).
  australia: {
    title: 'Australia',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['nueva-gales', 'victoria', 'queensland', 'outback'],
    ownListening: true,
    bilingualA0: true,
  },
  // Suiza 3D (A0–B1): one listening per region and level; walking into the circle
  // of that region opens it (app/suiza-en-relieve/mundo). PRO lesson (ID 29).
  suiza: {
    title: 'Suiza',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['zurich', 'ginebra', 'tesino', 'alpes'],
    ownListening: true,
    bilingualA0: true,
  },
  // Israel 3D (A0–B1): one listening per region and level; walking into the circle
  // of that region opens it (app/israel-en-capas/mundo). PRO lesson (ID 25).
  israel: {
    title: 'Israel',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['tel-aviv', 'jerusalen', 'norte', 'sur'],
    ownListening: true,
    bilingualA0: true,
  },
  // Indonesia 3D (A0–B1): one listening per region and level; walking into the circle
  // of that region opens it (app/indonesia-fantastica/mundo). PRO lesson (ID 24).
  indonesia: {
    title: 'Indonesia',
    levels: ['A0', 'A1', 'A2', 'B1'],
    spots: ['bali', 'java', 'sumatra', 'komodo'],
    ownListening: true,
    bilingualA0: true,
  },
  // La feria de Villaluz (A2): every circle has its own listening, and each
  // character keeps one voice (app/la-feria-de-villaluz/levels/a2.mjs CAST).
  feria: {
    title: 'La feria de Villaluz',
    levels: ['A2'],
    spots: ['informacion', 'churreria', 'tombola', 'noria', 'artesania', 'escenario', 'fotos', 'baile'],
    ownListening: true,
  },
  // Madrid infectada (A0–C2): every zone has its own listening at each level;
  // both circles of a zone open it. They are what the pocket radio catches:
  // Lola's broadcasts, callers and voice messages of a Madrid where people
  // from many Spanish-speaking countries live.
  madrid: {
    title: 'Madrid infectada',
    levels: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['sol', 'granvia', 'plaza', 'metro', 'retiro', 'malasana', 'atocha', 'palacio', 'hospital', 'rio'],
    ownListening: true,
    bilingualA0: true,
  },
  // Más allá: every zone of the Cielo and the Infierno has its own listening
  // at each level; both circles of a zone open it. PRO lesson (ID 243).
  masalla: {
    title: 'Más allá',
    levels: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['portal', 'archivo', 'cumbre', 'antesala', 'juicio', 'abismo'],
    ownListening: true,
    bilingualA0: true,
  },
  vuelo: {
    title: 'Vuelo cancelado',
    levels: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['taxi', 'pantalla', 'facturacion', 'reprogramacion', 'cambio', 'seguridad', 'cintas', 'perdidos', 'aduana', 'reencuentro', 'alquiler',
      'freeshop', 'comidas', 'vip', 'capilla', 'descanso', 'fumadores', 'puerta'],
    ownListening: true,
    bilingualA0: true,
  },
  // El consorcio: every circle of the building has its own listening at each
  // level, voiced by the same neighbour who speaks there. PRO lesson (ID 245).
  consorcio: {
    title: 'El consorcio',
    levels: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    spots: ['llegada', 'buzones', 'consultorio', 'bateria', 'gotera', 'gatos', 'teletrabajo', 'turistas', 'mudanza', 'tango',
      'cumple', 'ataud', 'administrador', 'herencia', 'misterio', 'obra', 'sogas', 'asamblea'],
    ownListening: true,
    bilingualA0: true,
  },
};

// Transcript length in words for each level.
export const WORDS = { A0: [20, 50], A1: [40, 80], A2: [70, 120], B1: [100, 160], B2: [140, 200], C1: [170, 240], C2: [200, 280] };

// Slower voices for the first levels.
export const RATE = { A0: '-22%', A1: '-14%', A2: '-7%', B1: '-3%', B2: '+0%', C1: '+0%', C2: '+4%' };

/** Audio folder of a game: FREE lessons use the public `escucha-3d-libre` prefix. */
export const audioDir = game => (GAMES[game]?.freeAudio ? 'escucha-3d-libre' : 'escucha-3d');
export const audioSrc = (game, level, id) => `/audio/${audioDir(game)}/${game}-${level.toLowerCase()}-${id}.mp3`;

/** The listening for a circle: its own one, else the first unfinished one
 * (never in a strict game, where every circle owns its listening). */
export function listeningFor(items, spot, done = [], strict = false) {
  const own = items.find(item => item.id === spot);
  if (own || (strict && spot)) return own ?? null;
  return items.find(item => !done.includes(item.id)) ?? items[0] ?? null;
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
