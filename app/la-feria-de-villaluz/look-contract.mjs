// La feria de Villaluz · the Look contract (LESSON-DECISION-001 v5, AM-4).
//
// Which features of a person the class can USE in a "Busca y describe" set,
// because people3d (app/noche-abierta/people3d.ts) renders them the same way
// every time and big enough to tell apart in low mode (DPR 1.2, no AA, no
// shadow maps) at about 8–10 m. Every Busca figure is built from these values
// only (lookOf), the 2D fallback draws its SVG figures from the same record,
// and validateBuscaSet() enforces AC2/AC4/AM-4 on the authored sets.
//
// Tiers:
//   A  large silhouette or large coloured area: legible at ~10 m in low mode.
//   B  smaller or seen from one side only: can be described, but never solves
//      a set alone (AC2 edit: at least one Tier-A feature is needed).
// Everything else is NOT AVAILABLE (see NOT_AVAILABLE) because people3d
// draws it randomly (hat kind and colour, scarf, bag and backpack colour,
// shoes), too small (earrings, mustache alone, eye colour, mood), or not at
// all (stripes, patterns, logos, text). Skin and body shape are never
// described in Busca (policy, not rendering).
//
// PROVISIONAL until Martin's D6 visual check on the QA device: any A/B item
// that fails it is removed here before Busca authoring, and the checker then
// rejects every set that used it.

// ------------------------------------------------------------------ colours
// One fixed hex per name, used for tops, bottoms and dresses. Spanish forms:
// [masc. sing., fem. sing.]; invariable colours repeat the word.
export const COLOURS = {
  rojo: { hex: '#c62f2f', es: ['rojo', 'roja'] },
  azul: { hex: '#2f5fc4', es: ['azul', 'azul'] },
  verde: { hex: '#2f8a4a', es: ['verde', 'verde'] },
  amarillo: { hex: '#e8c53a', es: ['amarillo', 'amarilla'] },
  naranja: { hex: '#e0782a', es: ['naranja', 'naranja'] },
  morado: { hex: '#6a3a9a', es: ['morado', 'morada'] },
  rosa: { hex: '#e47aa8', es: ['rosa', 'rosa'] },
  blanco: { hex: '#ece8e0', es: ['blanco', 'blanca'] },
  negro: { hex: '#1b1b1e', es: ['negro', 'negra'] },
  gris: { hex: '#7a7c82', es: ['gris', 'gris'] },
  marron: { hex: '#6b4428', es: ['marrón', 'marrón'] },
};

// Under warm dusk light these pairs are too close: a difference between them
// never counts as distinguishing (a description may still name either).
export const CONFUSABLE_COLOURS = [['naranja', 'amarillo'], ['naranja', 'rojo'], ['rosa', 'rojo'], ['gris', 'blanco'], ['negro', 'marron'], ['morado', 'azul']];

export const HAIR_COLOURS = {
  rubio: { hex: '#d8b25a', es: ['rubio', 'rubia'], tier: 'A' },
  castano: { hex: '#6a4426', es: ['castaño', 'castaña'], tier: 'B' },
  moreno: { hex: '#1e1612', es: ['moreno', 'morena'], tier: 'A' },
  pelirrojo: { hex: '#b0471f', es: ['pelirrojo', 'pelirroja'], tier: 'A' },
  canoso: { hex: '#cfcdc8', es: ['canoso', 'canosa'], tier: 'A' },
};
export const CONFUSABLE_HAIR = [['castano', 'moreno'], ['castano', 'pelirrojo'], ['rubio', 'canoso']];

// ------------------------------------------------------------------ attributes
// value → people3d field(s), tier, Spanish words a description may use
// (stems; the checker matches them case- and accent-insensitively), and the
// grammatical gender of the garment noun for colour agreement.
export const ATTRIBUTES = {
  age: {
    tier: 'A',
    values: {
      child: { people3d: 'child', es: ['niño', 'niña', 'nene', 'nena'] },
      young: { people3d: 'young', es: ['joven', 'chico', 'chica', 'muchacho', 'muchacha'] },
      adult: { people3d: 'adult', es: ['hombre', 'mujer', 'señor', 'señora'] },
      old: { people3d: 'old', es: ['mayor', 'anciano', 'anciana', 'abuelo', 'abuela', 'señor mayor', 'señora mayor'] },
    },
  },
  body: { tier: 'A', values: { f: { es: ['ella', 'mujer', 'niña', 'chica', 'señora'] }, m: { es: ['él', 'hombre', 'niño', 'chico', 'señor'] } } },
  top: {
    tier: 'A',
    values: {
      tshirt: { people3d: 'tshirt', es: ['camiseta'], gender: 'f', tier: 'A' },
      dress: { people3d: 'dress', es: ['vestido'], gender: 'm', tier: 'A' },
      coat: { people3d: 'coat', es: ['abrigo'], gender: 'm', tier: 'A' },
      apron: { people3d: 'apron', es: ['delantal'], gender: 'm', tier: 'A' },
      hoodie: { people3d: 'hoodie', es: ['sudadera'], gender: 'f', tier: 'B' },
      shirt: { people3d: 'shirt', es: ['camisa'], gender: 'f', tier: 'B' },
      sweater: { people3d: 'sweater', es: ['suéter'], gender: 'm', tier: 'B' },
      jacket: { people3d: 'jacket', es: ['chaqueta'], gender: 'f', tier: 'B' },
    },
    // Same long-sleeved silhouette at 10 m.
    confusable: [['shirt', 'sweater'], ['shirt', 'jacket'], ['sweater', 'jacket'], ['hoodie', 'sweater'], ['hoodie', 'jacket']],
  },
  bottom: {
    tier: 'A',
    values: {
      skirt: { people3d: 'skirt', es: ['falda'], gender: 'f', tier: 'A' },
      pants: { people3d: 'pants', es: ['pantalón', 'pantalones'], gender: 'm', tier: 'A' },
      jeans: { people3d: 'jeans', es: ['jeans'], gender: 'm', tier: 'B' },
      shorts: { people3d: 'shorts', es: ['pantalones cortos', 'pantalón corto', 'short'], gender: 'm', tier: 'A' },
    },
    confusable: [['pants', 'jeans']],
  },
  hair: {
    tier: 'A',
    values: {
      short: { people3d: 'short', es: ['pelo corto'], tier: 'A' },
      long: { people3d: 'long', es: ['pelo largo'], tier: 'A' },
      ponytail: { people3d: 'ponytail', es: ['coleta'], tier: 'B' },
      bun: { people3d: 'bun', es: ['moño'], tier: 'B' },
      curly: { people3d: 'curly', es: ['pelo rizado', 'rizos'], tier: 'B' },
      afro: { people3d: 'afro', es: ['pelo rizado', 'afro'], tier: 'A' },
      braids: { people3d: 'braids', es: ['trenzas'], tier: 'B' },
      bald: { people3d: 'bald', es: ['calvo', 'calva'], tier: 'A' },
      cap: { people3d: 'cap', es: ['gorra'], tier: 'A' },
    },
    confusable: [['short', 'curly'], ['curly', 'afro'], ['long', 'braids'], ['ponytail', 'bun']],
  },
  height: {
    tier: 'B',
    // Relative only: "alto/alta", "bajo/baja" counts against a distractor of
    // the same age band whose height differs by at least HEIGHT_GAP metres.
    values: { tall: { m: 1.88, f: 1.78, es: ['alto', 'alta'] }, mid: { m: 1.74, f: 1.64, es: [] }, short: { m: 1.6, f: 1.5, es: ['bajo', 'baja', 'bajito', 'bajita'] } },
  },
  // What the person is doing (estar + gerundio). people3d poses that keep the
  // body in place and read at a distance.
  pose: {
    tier: 'A',
    values: {
      stand: { people3d: 'stand', es: [] },
      dance: { people3d: 'dance', es: ['bailando'], tier: 'A' },
      guitar: { people3d: 'guitar', es: ['tocando la guitarra', 'guitarra'], tier: 'A' },
      phone: { people3d: 'phone', es: ['hablando por teléfono', 'teléfono', 'celular'], tier: 'B' },
      wave: { people3d: 'wave', es: ['saludando'], tier: 'A' },
      point: { people3d: 'point', es: ['señalando'], tier: 'A' },
      read: { people3d: 'read', es: ['leyendo'], tier: 'B' },
      carry: { people3d: 'carry', es: ['llevando una caja', 'caja'], tier: 'A' },
      sit: { people3d: 'sit', es: ['sentado', 'sentada'], tier: 'A' },
      arms: { people3d: 'arms', es: ['brazos cruzados'], tier: 'B' },
    },
  },
  // Things in the hand while the pose leaves it free (people3d extras).
  holds: {
    tier: 'B',
    values: {
      none: { es: [] },
      umbrella: { people3d: 'umbrella', es: ['paraguas'], tier: 'B' },
      flowers: { people3d: 'flowers', es: ['flores', 'ramo'], tier: 'B' },
      suitcase: { people3d: 'suitcase', es: ['maleta'], tier: 'A' },
      map: { people3d: 'map', es: ['mapa'], tier: 'B' },
    },
  },
  // Presence only: people3d picks the colour of these at random.
  extras: {
    tier: 'B',
    values: {
      glasses: { people3d: 'glasses', es: ['gafas', 'lentes', 'anteojos'], tier: 'B' },
      beard: { people3d: 'beard', es: ['barba'], tier: 'B' },
      backpack: { people3d: 'backpack', es: ['mochila'], tier: 'A' },
      bag: { people3d: 'bag', es: ['bolso'], tier: 'B' },
      scarf: { people3d: 'scarf', es: ['bufanda'], tier: 'B' },
    },
  },
};

export const HEIGHT_GAP = 0.15;

// Words a Busca description must never use: people3d can't render them as
// described (random or absent), or the policy excludes them.
export const NOT_AVAILABLE = [
  'rayas', 'rayado', 'cuadros', 'lunares', 'estampado', 'logo', 'letras', 'dibujo',
  'zapatos', 'zapatillas', 'botas', 'tenis',
  'sombrero', 'gorro', 'pendientes', 'aretes', 'aros', 'collar', 'pulsera', 'reloj',
  'bigote', 'ojos', 'auriculares', 'cascos',
  'gordo', 'gorda', 'flaco', 'flaca', 'piel', 'blanquito', 'morenito',
  'contento', 'contenta', 'triste', 'enfadado', 'enojado', 'sonriendo',
  'llevando algo', 'algo en la mano',
];

// Colour words of a scarf, bag, backpack or cap are not rendered as written.
export const PRESENCE_ONLY = ['bufanda', 'bolso', 'mochila', 'gorra'];

// Relative positions (Tier A) inside a candidate cluster, as seen from the
// circle's fixed view (World3D snaps the camera to the hero's heading while a
// Busca card is open, risk 3). x grows to the screen-right, z away from the
// camera. Slots are metres from the cluster centre; AC4 keeps them ≤ 10 m from
// the circle.
export const RELATIONS = {
  'izquierda-de': { es: ['a la izquierda de'], test: (a, b) => a.x < b.x - 0.8 && Math.abs(a.z - b.z) < 1.6 },
  'derecha-de': { es: ['a la derecha de'], test: (a, b) => a.x > b.x + 0.8 && Math.abs(a.z - b.z) < 1.6 },
  'delante-de': { es: ['delante de'], test: (a, b) => a.z < b.z - 0.8 && Math.abs(a.x - b.x) < 1.6 },
  'detras-de': { es: ['detrás de'], test: (a, b) => a.z > b.z + 0.8 && Math.abs(a.x - b.x) < 1.6 },
  'al-lado-de': { es: ['al lado de', 'junto a'], test: (a, b) => Math.hypot(a.x - b.x, a.z - b.z) < 1.8 },
};
export const AC4_RADIUS = 10;

// ------------------------------------------------------------------ figures
// A Busca figure, authored as plain data (the same record draws the 3D person
// and the 2D SVG figure):
// { id, body: 'f'|'m', age, top, topColor, bottom, bottomColor, hair, hairColor,
//   height?: 'tall'|'mid'|'short', pose?: 'stand'|…, holds?: 'none'|…, extras?: [],
//   slot?: { x, z } }
// A described feature is "<attribute>:<value>", e.g. 'top:dress',
// 'topColor:rojo', 'hairColor:rubio', 'pose:dance', 'extras:glasses',
// 'height:tall', 'rel:izquierda-de:<figure id or landmark id>'.

const SKINS = ['#f1c9a5', '#e0ac7e', '#c68a5c', '#a86f45', '#7a4a2c', '#5a3520'];

function hashText(text) {
  let h = 2166136261;
  for (const ch of String(text)) h = Math.imul(h ^ ch.codePointAt(0), 16777619);
  return h >>> 0;
}

/** The people3d Look (plus pose) for a figure. Skin varies by id, never by
 * the description; dresses force a skirt, as people3d draws them. */
export function lookOf(figure) {
  const seed = hashText(`feria-${figure.id}`);
  const body = figure.body === 'm' ? 'm' : 'f';
  const age = ATTRIBUTES.age.values[figure.age]?.people3d ?? 'adult';
  const h = ATTRIBUTES.height.values[figure.height ?? 'mid'] ?? ATTRIBUTES.height.values.mid;
  const height = age === 'child' ? (figure.height === 'tall' ? 1.38 : figure.height === 'short' ? 1.12 : 1.26) : age === 'young' ? h[body] - 0.03 : h[body];
  const extras = [...(figure.extras ?? [])].filter(x => ATTRIBUTES.extras.values[x]).map(x => ATTRIBUTES.extras.values[x].people3d);
  const held = ATTRIBUTES.holds.values[figure.holds ?? 'none']?.people3d;
  if (held) extras.push(held);
  return {
    look: {
      skin: SKINS[seed % SKINS.length],
      age, body, build: 'average', height,
      hairStyle: ATTRIBUTES.hair.values[figure.hair]?.people3d ?? 'short',
      hairColor: HAIR_COLOURS[figure.hairColor]?.hex ?? HAIR_COLOURS.moreno.hex,
      top: ATTRIBUTES.top.values[figure.top]?.people3d ?? 'shirt',
      topColor: COLOURS[figure.topColor]?.hex ?? COLOURS.gris.hex,
      bottom: figure.top === 'dress' ? 'skirt' : ATTRIBUTES.bottom.values[figure.bottom]?.people3d ?? 'pants',
      bottomColor: figure.top === 'dress' ? (COLOURS[figure.topColor]?.hex ?? COLOURS.gris.hex) : figure.bottom === 'jeans' ? '#34507a' : (COLOURS[figure.bottomColor]?.hex ?? COLOURS.negro.hex),
      extras,
      seed,
    },
    pose: ATTRIBUTES.pose.values[figure.pose ?? 'stand']?.people3d ?? 'stand',
  };
}

// ------------------------------------------------------------------ checking
const clean = text => String(text).normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es');
const pairIn = (pairs, a, b) => pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

/** The figure's value for a described attribute key. */
function valueOf(figure, key) {
  switch (key) {
    case 'pose': return figure.pose ?? 'stand';
    case 'holds': return figure.holds ?? 'none';
    case 'height': return figure.height ?? 'mid';
    case 'bottom': return figure.top === 'dress' ? 'skirt' : figure.bottom;
    case 'bottomColor': return figure.top === 'dress' ? figure.topColor : figure.bottom === 'jeans' ? 'jeans' : figure.bottomColor;
    default: return figure[key];
  }
}

function tierOf(key, value) {
  if (key === 'topColor' || key === 'bottomColor') return 'A';
  if (key === 'hairColor') return HAIR_COLOURS[value]?.tier ?? 'B';
  if (key === 'rel') return 'A';
  const attr = ATTRIBUTES[key];
  return attr?.values[value]?.tier ?? attr?.tier ?? 'B';
}

const isColour = key => key === 'topColor' || key === 'bottomColor' || key === 'hairColor';

/** Parse "key:value" (or "rel:relation:other"). */
export function parseFeature(feature) {
  const [key, value, other] = String(feature).split(':');
  return { key, value, other };
}

/** Does the figure have the described feature? */
export function matches(figure, feature, set) {
  const { key, value, other } = parseFeature(feature);
  if (key === 'extras') return (figure.extras ?? []).includes(value);
  if (key === 'rel') {
    const ref = set?.figures?.find(f => f.id === other) ?? set?.landmarks?.find(l => l.id === other);
    if (!ref || !figure.slot) return false;
    return Boolean(RELATIONS[value]?.test(figure.slot, ref.slot ?? ref));
  }
  return valueOf(figure, key) === value;
}

/** Does `feature` (true of the target) rule the distractor out, counting
 * only differences people3d renders distinctly? */
export function distinguishes(target, distractor, feature, set) {
  const { key, value } = parseFeature(feature);
  if (matches(distractor, feature, set)) return false;
  const other = valueOf(distractor, key);
  if (key === 'topColor' || key === 'bottomColor') return !pairIn(CONFUSABLE_COLOURS, value, other) && !(other === 'jeans' && value === 'azul');
  if (key === 'hairColor') return !pairIn(CONFUSABLE_HAIR, value, other);
  if (key === 'height') {
    if ((target.age ?? 'adult') !== (distractor.age ?? 'adult')) return false;
    const a = lookOf(target).look.height, b = lookOf(distractor).look.height;
    return value === 'tall' ? a - b >= HEIGHT_GAP : value === 'short' ? b - a >= HEIGHT_GAP : false;
  }
  if (ATTRIBUTES[key]?.confusable && pairIn(ATTRIBUTES[key].confusable, value, other)) return false;
  return true;
}

const KNOWN_KEYS = new Set(['age', 'body', 'top', 'topColor', 'bottom', 'bottomColor', 'hair', 'hairColor', 'height', 'pose', 'holds', 'extras', 'rel']);

function featureKnown(feature) {
  const { key, value, other } = parseFeature(feature);
  if (!KNOWN_KEYS.has(key)) return false;
  if (key === 'topColor' || key === 'bottomColor') return Boolean(COLOURS[value]);
  if (key === 'hairColor') return Boolean(HAIR_COLOURS[value]);
  if (key === 'rel') return Boolean(RELATIONS[value]) && Boolean(other);
  return Boolean(ATTRIBUTES[key]?.values[value]);
}

function figureErrors(figure) {
  const errors = [];
  const where = `figure ${figure.id}`;
  if (!['f', 'm'].includes(figure.body)) errors.push(`${where}: body must be 'f' or 'm'`);
  for (const key of ['age', 'top', 'hair']) if (!ATTRIBUTES[key].values[figure[key]]) errors.push(`${where}: ${key} '${figure[key]}' is not on the Look contract`);
  if (figure.top !== 'dress' && !ATTRIBUTES.bottom.values[figure.bottom]) errors.push(`${where}: bottom '${figure.bottom}' is not on the Look contract`);
  if (!COLOURS[figure.topColor]) errors.push(`${where}: topColor '${figure.topColor}' is not a contract colour`);
  if (figure.top !== 'dress' && figure.bottom !== 'jeans' && !COLOURS[figure.bottomColor]) errors.push(`${where}: bottomColor '${figure.bottomColor}' is not a contract colour`);
  if (!HAIR_COLOURS[figure.hairColor]) errors.push(`${where}: hairColor '${figure.hairColor}' is not a contract hair colour`);
  if (figure.height && !ATTRIBUTES.height.values[figure.height]) errors.push(`${where}: height '${figure.height}'`);
  if (figure.pose && !ATTRIBUTES.pose.values[figure.pose]) errors.push(`${where}: pose '${figure.pose}' is not on the Look contract`);
  if (figure.holds && !ATTRIBUTES.holds.values[figure.holds]) errors.push(`${where}: holds '${figure.holds}' is not on the Look contract`);
  for (const x of figure.extras ?? []) if (!ATTRIBUTES.extras.values[x]) errors.push(`${where}: extra '${x}' is not on the Look contract`);
  if (figure.holds && figure.holds !== 'none' && ['guitar', 'phone', 'carry', 'read'].includes(figure.pose)) errors.push(`${where}: the pose '${figure.pose}' hides what it holds`);
  if (figure.slot && Math.hypot(figure.slot.x, figure.slot.z) > AC4_RADIUS) errors.push(`${where}: slot is more than ${AC4_RADIUS} m from the circle (AC4)`);
  return errors;
}

/** Words of a feature that a description may use. */
export function wordsOf(feature) {
  const { key, value } = parseFeature(feature);
  if (key === 'topColor' || key === 'bottomColor') return COLOURS[value]?.es ?? [];
  if (key === 'hairColor') return HAIR_COLOURS[value]?.es ?? [];
  if (key === 'rel') return RELATIONS[value]?.es ?? [];
  return ATTRIBUTES[key]?.values[value]?.es ?? [];
}

/**
 * AC2 + AC4 + AM-4 for one authored Busca set. Returns a list of errors
 * (empty = passes). Set shape:
 * { id, circle, kind: 'find'|'transfer', text, described: string[], target, figures: Figure[], landmarks?: [{id, x, z}] }
 */
export function validateBuscaSet(set) {
  const errors = [];
  const at = `Busca ${set.id}`;
  const figures = set.figures ?? [];
  const target = figures.find(f => f.id === set.target);
  if (!target) return [`${at}: target '${set.target}' is not one of its figures`];
  const distractors = figures.filter(f => f !== target);
  if (distractors.length < 3 || distractors.length > 4) errors.push(`${at}: needs 3–4 distractors, has ${distractors.length}`);
  if (new Set(figures.map(f => f.id)).size !== figures.length) errors.push(`${at}: duplicate figure ids`);
  for (const f of figures) errors.push(...figureErrors(f).map(e => `${at}: ${e}`));
  const described = set.described ?? [];
  for (const feature of described) {
    if (!featureKnown(feature)) errors.push(`${at}: '${feature}' is not on the Look contract (AM-4)`);
    else if (!matches(target, feature, set)) errors.push(`${at}: the target does not match '${feature}'`);
  }
  if (errors.length) return errors;
  // Each distractor differs in at least one described, rendered feature.
  const ruledOutBy = distractors.map(d => described.filter(feature => distinguishes(target, d, feature, set)));
  distractors.forEach((d, i) => { if (!ruledOutBy[i].length) errors.push(`${at}: distractor ${d.id} matches every described feature`); });
  // At least two features are needed: no single one rules out everyone.
  for (const feature of described) if (distractors.every((d, i) => ruledOutBy[i].includes(feature))) errors.push(`${at}: '${feature}' alone rules out every distractor (AC2 needs ≥ 2)`);
  // At least one distinguishing feature is not a colour, and one is Tier A.
  const used = new Set(ruledOutBy.flat());
  if (![...used].some(f => !isColour(parseFeature(f).key))) errors.push(`${at}: every distinguishing feature is a colour (AC2)`);
  if (![...used].some(f => tierOf(parseFeature(f).key, parseFeature(f).value) === 'A')) errors.push(`${at}: no Tier-A feature distinguishes anyone (AC2)`);
  // Age band shared unless described.
  if (!described.some(f => parseFeature(f).key === 'age')) for (const d of distractors) if (d.age !== target.age) errors.push(`${at}: distractor ${d.id} has another age band and age is not described`);
  // Same body type unless described: "niña"/"señor" would otherwise solve it
  // without the class listening to the described features.
  if (!described.some(f => parseFeature(f).key === 'body')) for (const d of distractors) if (d.body !== target.body) errors.push(`${at}: distractor ${d.id} has another body type and 'body:' is not described`);
  // No giveaway pose or held object (AC4).
  if ((target.pose ?? 'stand') !== 'stand' && !distractors.some(d => (d.pose ?? 'stand') === target.pose)) errors.push(`${at}: the target's pose '${target.pose}' is unique (AC4)`);
  if ((target.holds ?? 'none') !== 'none' && !distractors.some(d => d.holds === target.holds)) errors.push(`${at}: what the target holds is unique (AC4)`);
  // The announcement uses words for every described feature and none that
  // the renderer can't show (AM-4).
  if (typeof set.text === 'string') {
    const text = clean(set.text);
    for (const feature of described) {
      const words = wordsOf(feature);
      if (words.length && !words.some(w => text.includes(clean(w)))) errors.push(`${at}: the text never says '${feature}' (${words.join(' / ')})`);
    }
    for (const word of NOT_AVAILABLE) if (new RegExp(`(^|[^\\p{L}])${clean(word)}($|[^\\p{L}])`, 'u').test(text)) errors.push(`${at}: the text uses '${word}', which the Look contract does not render`);
    for (const noun of PRESENCE_ONLY) {
      const colourAfter = new RegExp(`${noun}s? (${Object.values(COLOURS).flatMap(c => c.es).map(clean).join('|')})`, 'u');
      if (colourAfter.test(text)) errors.push(`${at}: '${noun}' has a colour in the text, but people3d draws it at random`);
    }
  } else errors.push(`${at}: missing announcement text`);
  return errors;
}

// ------------------------------------------------------------------ feedback (AC3)
const art = gender => (gender === 'f' ? 'una' : 'un');

/** The described feature as a full Spanish predicate about the target.
 * Adjectives (rubio, calvo, alto, sentado) agree with the figure by default
 * (the 2D figure's aria-label); with `{ subject: 'persona' }` they agree with
 * «la persona», the subject of the AC3 feedback sentence, whatever the
 * figure's body («La persona del aviso es rubia», also for a man). */
export function predicate(feature, figure, names = {}, { subject = 'figure' } = {}) {
  const { key, value, other } = parseFeature(feature);
  const fem = subject === 'persona' || figure?.body === 'f';
  const colour = (c, gender) => COLOURS[c]?.es[gender === 'f' ? 1 : 0] ?? c;
  switch (key) {
    case 'top': { const v = ATTRIBUTES.top.values[value]; return `lleva ${art(v.gender)} ${v.es[0]}`; }
    case 'topColor': { const v = ATTRIBUTES.top.values[figure.top]; return `lleva ${art(v.gender)} ${v.es[0]} ${colour(value, v.gender)}`; }
    case 'bottom': return value === 'skirt' ? 'lleva falda' : value === 'shorts' ? 'lleva pantalones cortos' : value === 'jeans' ? 'lleva jeans' : 'lleva pantalón largo';
    case 'bottomColor': return figure.top === 'dress' ? `lleva un vestido ${colour(value, 'm')}` : figure.bottom === 'skirt' ? `lleva una falda ${colour(value, 'f')}` : `lleva un pantalón ${colour(value, 'm')}`;
    case 'hair': return value === 'bald' ? `es ${fem ? 'calva' : 'calvo'}` : value === 'cap' ? 'lleva gorra' : value === 'bun' ? 'lleva moño' : value === 'ponytail' ? 'lleva coleta' : value === 'braids' ? 'lleva trenzas' : `tiene el ${ATTRIBUTES.hair.values[value].es[0]}`;
    case 'hairColor': return `es ${HAIR_COLOURS[value].es[fem ? 1 : 0]}`;
    // Nouns name the figure itself, so they follow its body, never «persona».
    case 'age': { const f = figure?.body === 'f'; return value === 'child' ? `es ${f ? 'una niña' : 'un niño'}` : value === 'old' ? `es ${f ? 'una señora mayor' : 'un señor mayor'}` : value === 'young' ? 'es joven' : `es ${f ? 'una mujer' : 'un hombre'}`; }
    case 'body': return value === 'f' ? 'es mujer' : 'es hombre';
    case 'height': return `es ${value === 'tall' ? (fem ? 'alta' : 'alto') : (fem ? 'baja' : 'bajo')}`;
    case 'pose': return value === 'sit' ? `está ${fem ? 'sentada' : 'sentado'}` : value === 'carry' ? 'está llevando una caja' : value === 'arms' ? 'tiene los brazos cruzados' : `está ${ATTRIBUTES.pose.values[value].es[0]}`;
    case 'holds': return `tiene ${value === 'flowers' ? 'flores' : `${value === 'suitcase' ? 'una' : 'un'} ${ATTRIBUTES.holds.values[value].es[0]}`} en la mano`;
    case 'extras': return value === 'glasses' ? 'lleva gafas' : value === 'beard' ? 'tiene barba' : `lleva ${value === 'scarf' || value === 'backpack' ? 'una' : 'un'} ${ATTRIBUTES.extras.values[value].es[0]}`;
    case 'rel': return `está ${RELATIONS[value].es[0]} ${names[other] ?? other}`.replace(/ de el /, ' del ');
    default: return feature;
  }
}

/** Spanish feedback for a wrong pick, naming at least one mismatched described
 * feature (AC3); null when the pick is the target. `names` maps landmark or
 * figure ids to Spanish noun phrases ("el puesto de churros"). */
export function feedbackFor(set, pickId, names = {}) {
  if (pickId === set.target) return null;
  const target = set.figures.find(f => f.id === set.target);
  const pick = set.figures.find(f => f.id === pickId);
  if (!target || !pick) return null;
  const wrong = (set.described ?? []).filter(feature => distinguishes(target, pick, feature, set));
  const feature = wrong.find(f => !isColour(parseFeature(f).key)) ?? wrong[0] ?? (set.described ?? []).find(f => !matches(pick, f, set));
  if (!feature) return 'No, no es esa persona. Escuchen otra vez el aviso.';
  return `No, no es esa persona. La persona del aviso ${predicate(feature, target, names, { subject: 'persona' })}.`;
}
