// Original epic score for Valdoria, one theme per region.
// Melodies are scale degrees (7 = the root an octave higher); null is a rest.
// Drum rows have 16 steps: x = big drum, o = small drum, s = cymbal swell.
const MAJOR = [0, 2, 4, 5, 7, 9, 11];
const MINOR = [0, 2, 3, 5, 7, 8, 10];
const DORIAN = [0, 2, 3, 5, 7, 9, 10];
const HARMONIC = [0, 2, 3, 5, 7, 8, 11];

export const THEMES = {
  village: {
    title: 'La colina del amanecer', bpm: 96, root: 50, scale: MAJOR, progression: [0, 4, 5, 3],
    melody: [[4, null, 4, 7, 6, 4, 2, null], [1, null, 4, null, 3, 2, 1, null], [5, null, 5, 7, 8, 7, 5, 4], [3, null, 2, null, 1, null, null, null]],
    drums: ['x.......o.......', 'x.......o...o...'], lead: 'brass', harp: true, choir: false, ostinato: false,
  },
  forest: {
    title: 'El bosque encantado', bpm: 72, root: 52, scale: MINOR, progression: [0, 5, 2, 6],
    melody: [[4, null, null, 3, 2, null, 0, null], [5, null, null, 4, 2, null, null, null], [2, null, 4, null, 7, null, 6, 4], [6, null, null, null, 4, null, null, null]],
    drums: ['................', '........o.......'], lead: 'flute', harp: true, choir: true, ostinato: false,
  },
  journey: {
    title: 'El camino al castillo', bpm: 112, root: 50, scale: DORIAN, progression: [0, 6, 3, 4],
    melody: [[0, 0, 2, 4, null, 4, 3, 2], [6, null, 5, 4, 3, null, 4, null], [3, 3, 4, 5, null, 7, 5, 4], [4, null, null, null, 1, 2, 3, 4]],
    drums: ['x...o...x.o.o...', 'x...o...x.o.oooo'], lead: 'brass', harp: false, choir: false, ostinato: true,
  },
  castle: {
    title: 'Los salones dormidos', bpm: 80, root: 48, scale: MINOR, progression: [0, 5, 3, 4],
    melody: [[7, null, null, 6, 5, null, 4, null], [5, null, 4, null, 3, null, null, null], [3, null, 4, 5, 6, null, 5, 4], [4, null, null, null, null, null, null, null]],
    drums: ['x...............', 'x.......o.......'], lead: 'horn', harp: false, choir: true, ostinato: false,
  },
  dragon: {
    title: 'El guardián de fuego', bpm: 138, root: 50, scale: HARMONIC, progression: [0, 5, 0, 4],
    melody: [[0, null, 0, 3, 2, null, 0, null], [5, null, 4, null, 3, 2, 1, null], [0, null, 0, 3, 4, null, 5, 6], [7, null, 6, null, 4, null, null, null]],
    drums: ['x.x.o.x.x.o.xoxo', 'x.x.o.x.x.o.xxxs'], lead: 'brass', harp: false, choir: true, ostinato: true,
  },
  tower: {
    title: 'La torre de la rosa', bpm: 66, root: 45, scale: MINOR, progression: [0, 5, 3, 4],
    melody: [[4, null, null, null, 5, null, 4, null], [2, null, null, null, null, null, null, null], [3, null, 4, null, 5, null, 7, null], [6, null, null, null, 4, null, null, null]],
    drums: ['x...............', '........o...o..s'], lead: 'bell', harp: true, choir: true, ostinato: false,
  },
  victory: {
    title: 'Valdoria despierta', bpm: 104, root: 50, scale: MAJOR, progression: [0, 5, 3, 4],
    melody: [[0, null, 4, null, 7, null, 7, 8], [9, null, 7, null, 4, null, null, null], [5, null, 6, null, 7, null, 9, null], [11, null, null, null, 7, null, null, null]],
    drums: ['x...o...x...o...', 'x...o...x.o.oooo'], lead: 'brass', harp: true, choir: true, ostinato: false,
  },
};

// Which theme plays where. The castle courtyard starts at z −62; the terrace stairs at z −98.
export function themeFor(position, flags = {}) {
  if (flags.victory) return 'victory';
  const { x = 0, z = 0 } = position ?? {};
  if (z < -112) return 'tower';
  if (z < -98) return flags.dragonTrusted ? 'tower' : 'dragon';
  if (z < -62) return 'castle';
  if (z < -14) return 'journey';
  if (x < -4) return 'forest';
  return 'village';
}

export function midiToFrequency(note) { return 440 * 2 ** ((note - 69) / 12); }

// Scale degree → MIDI note, with degrees beyond 6 climbing octaves.
export function degreeNote(theme, degree, octave = 0) {
  const size = theme.scale.length;
  const wrapped = ((degree % size) + size) % size;
  return theme.root + 12 * (octave + Math.floor(degree / size)) + theme.scale[wrapped];
}

export function chordNotes(theme, degree, octave = 0) {
  return [0, 2, 4].map(step => degreeNote(theme, degree + step, octave));
}
