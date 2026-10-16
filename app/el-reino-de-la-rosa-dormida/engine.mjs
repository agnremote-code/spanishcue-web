import { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
import { BANDS, CONVERSATIONS, PLACES, FRAMES, SAFE_ANSWER, DEFAULT_FUNCTIONS, QUESTION_STEPS } from './conversations.mjs';

export { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
/** The single save of version 1. Profiles (profiles.mjs) migrate it without deleting it. */
export const LEGACY_SAVE_KEY = 'spanishcue:reino-rosa:v1';
export const SAVE_KEY = LEGACY_SAVE_KEY;
export const STATE_VERSION = 2;
export const PLACE_IDS = Object.keys(PLACES);
const NPC_IDS = new Set(NPCS.map(npc => npc.id));
const CONVERSATION_IDS = new Set([...NPC_IDS, ...PLACE_IDS]);
const FLAGS = ['millRepaired', 'forestLit', 'bridgeOpen', 'gardenOpen', 'castleOpen', 'historyKnown', 'dragonShield', 'dragonTrusted', 'ritualReady', 'ritualLight', 'ritualGrowth', 'ritualDawn', 'victory'];
const START = { x: 0, y: 0, z: 24 };
const MAX_ANSWER = 1500;
const MAX_DEEP = 999;
const has = (state, quest) => state.completed.includes(quest);
const add = (list, id) => list.includes(id) ? list : [...list, id];
const flowOf = id => NPC_IDS.has(id) ? CONVERSATIONS[id].flow : ['story', 'q'];
const revealIndex = id => CONVERSATIONS[id].flow.indexOf('reveal');

/** Number of conversational moments in an encounter (identical at every level). */
export const conversationLength = id => flowOf(id).length;
/** The character has shared their revelation/reward (the turn after «reveal» was reached). */
export const hasTalked = (state, npc) => NPC_IDS.has(npc) && (state.dialogue[npc] ?? 0) > revealIndex(npc);
const talked = hasTalked;

export function createGame(level = 'A1') {
  return {
    version: STATE_VERSION, level: LEVELS.includes(level) ? level : 'A1',
    completed: [], inventory: [], spells: [],
    flags: Object.fromEntries(FLAGS.map(flag => [flag, false])),
    dialogue: Object.fromEntries(NPCS.map(npc => [npc.id, 0])),
    places: Object.fromEntries(PLACE_IDS.map(id => [id, 0])),
    deep: Object.fromEntries([...CONVERSATION_IDS].map(id => [id, 0])),
    talking: null,
    checkpoint: { ...START },
  };
}

function npcAvailable(state, npc) {
  switch (npc) {
    case 'nox': return true;
    case 'ines': case 'bruno': return has(state, 'q1');
    case 'liora': return has(state, 'q2');
    case 'aldren': return has(state, 'q3');
    case 'celina': return has(state, 'q4');
    case 'baltasar': case 'teobaldo': return has(state, 'q5') && state.inventory.includes('scroll');
    case 'brum': return has(state, 'q6') && state.flags.dragonShield;
    case 'tejedora': return has(state, 'q7');
    case 'elara': return state.flags.ritualDawn;
    default: return false;
  }
}
function available(state, id) {
  if (NPC_IDS.has(id)) return npcAvailable(state, id);
  const place = PLACES[id];
  return Boolean(place) && (!place.requires || Boolean(state.flags[place.requires]));
}
export const conversationAvailable = available;

export function canInteract(state, id) {
  if (CONVERSATION_IDS.has(id)) return available(state, id);
  if (state.inventory.includes(id)) return false;
  switch (id) {
    case 'key': return has(state, 'q1') && talked(state, 'ines') && talked(state, 'bruno') && state.flags.millRepaired;
    case 'rose': return has(state, 'q4') && state.flags.gardenOpen;
    case 'scroll': return has(state, 'q5');
    case 'crystal': return has(state, 'q6') && state.flags.dragonTrusted;
    case 'mill': return state.spells.includes('ventaria') && has(state, 'q1');
    case 'grove': return state.spells.includes('lumaria') && has(state, 'q2');
    case 'thorns': return state.spells.includes('floralis') && has(state, 'q4');
    case 'dragon': return state.spells.includes('aurora') && has(state, 'q6');
    case 'altar': return has(state, 'q7') && state.flags.ritualReady;
    default: return false;
  }
}

function settle(state) {
  const next = { ...state, flags: { ...state.flags }, spells: [...state.spells], completed: [] };
  if (talked(next, 'bruno')) next.spells = add(next.spells, 'ventaria');
  if (talked(next, 'liora')) next.spells = add(next.spells, 'lumaria');
  if (talked(next, 'celina')) next.spells = add(next.spells, 'floralis');
  if (talked(next, 'nox')) next.completed.push('q1'); else return next;
  if (talked(next, 'ines') && talked(next, 'bruno') && next.flags.millRepaired && next.inventory.includes('key')) next.completed.push('q2'); else return next;
  if (talked(next, 'liora') && next.flags.forestLit) next.completed.push('q3'); else return next;
  if (talked(next, 'aldren')) { next.flags.bridgeOpen = true; next.completed.push('q4'); } else return next;
  if (talked(next, 'celina') && next.flags.gardenOpen && next.inventory.includes('rose')) { next.flags.castleOpen = true; next.completed.push('q5'); } else return next;
  if (next.inventory.includes('scroll') && talked(next, 'baltasar') && talked(next, 'teobaldo')) {
    next.flags.historyKnown = true; next.spells = add(next.spells, 'aurora'); next.completed.push('q6');
  } else return next;
  if (talked(next, 'brum') && next.flags.dragonShield) next.flags.dragonTrusted = true;
  if (next.flags.dragonTrusted && next.inventory.includes('crystal')) next.completed.push('q7'); else return next;
  if (talked(next, 'tejedora')) next.flags.ritualReady = true;
  if (next.flags.ritualDawn && talked(next, 'elara')) { next.flags.victory = true; next.completed.push('q8'); }
  return next;
}

const progressOf = (state, id) => NPC_IDS.has(id) ? state.dialogue[id] ?? 0 : state.places[id] ?? 0;
function withProgress(state, id, value) {
  return NPC_IDS.has(id) ? { ...state, dialogue: { ...state.dialogue, [id]: value } } : { ...state, places: { ...state.places, [id]: value } };
}

/**
 * Pure reducer. Conversation actions never evaluate what the learner says: any
 * answer (typed, dictated, spoken aloud or none at all) moves the conversation
 * on. Objective actions (spells, items, the ritual order) keep strict rules.
 */
export function reduceGame(state, action) {
  if (!state || !action || typeof action !== 'object') return state;
  if (action.type === 'level') return LEVELS.includes(action.level) ? { ...state, level: action.level } : state;
  if (action.type === 'checkpoint') {
    const pos = validPosition(action.position);
    return pos ? { ...state, checkpoint: pos } : state;
  }
  if (action.type === 'open') {
    const id = action.npc ?? action.id;
    if (!CONVERSATION_IDS.has(id)) return state;
    return state.talking?.id === id ? state : { ...state, talking: { id, deep: false } };
  }
  if (action.type === 'close') return state.talking ? { ...state, talking: null } : state;
  if (action.type === 'deepen') {
    const id = action.npc ?? action.id;
    if (!CONVERSATION_IDS.has(id) || !available(state, id)) return state;
    return { ...state, deep: { ...state.deep, [id]: Math.min(MAX_DEEP, (state.deep[id] ?? 0) + 1) }, talking: { id, deep: true } };
  }
  if (action.type === 'say' || action.type === 'answer') {
    const id = action.npc ?? action.id;
    if (!CONVERSATION_IDS.has(id) || !available(state, id)) return state;
    // Text is optional and never graded; only absurd payloads are ignored.
    if (action.text !== undefined && (typeof action.text !== 'string' || action.text.length > MAX_ANSWER)) return state;
    if (state.talking?.id === id && state.talking.deep) return { ...state, talking: { id, deep: false } };
    const index = progressOf(state, id), total = flowOf(id).length;
    if (index >= total) return reduceGame(state, { type: 'deepen', id });
    let next = withProgress(state, id, index + 1);
    next = { ...next, talking: index + 1 >= total ? null : { id, deep: false } };
    next = NPC_IDS.has(id) ? settle(next) : next;
    if (next.flags.victory && !state.flags.victory) next = { ...next, talking: null };
    return next;
  }
  if (action.type === 'collect') {
    const item = action.item;
    if (!ITEMS.some(entry => entry.id === item) || !canInteract(state, item)) return state;
    return settle({ ...state, inventory: add(state.inventory, item) });
  }
  if (action.type === 'cast') {
    const { spell, target } = action;
    if (!state.spells.includes(spell) || !target || !canInteract(state, target)) return state;
    let flag;
    if (spell === 'ventaria' && target === 'mill') flag = 'millRepaired';
    if (spell === 'lumaria' && target === 'grove') flag = 'forestLit';
    if (spell === 'floralis' && target === 'thorns') flag = 'gardenOpen';
    if (spell === 'aurora' && target === 'dragon') flag = 'dragonShield';
    if (target === 'altar' && state.inventory.includes('crystal') && state.inventory.includes('rose')) {
      if (spell === 'lumaria') flag = 'ritualLight';
      if (spell === 'floralis' && state.flags.ritualLight) flag = 'ritualGrowth';
      if (spell === 'aurora' && state.flags.ritualLight && state.flags.ritualGrowth) flag = 'ritualDawn';
    }
    if (!flag || state.flags[flag]) return state;
    return settle({ ...state, flags: { ...state.flags, [flag]: true } });
  }
  return state;
}

function validPosition(position) {
  if (!position || typeof position !== 'object') return null;
  const { x, y, z } = position;
  if (![x, y, z].every(value => typeof value === 'number' && Number.isFinite(value))) return null;
  if (x < -80 || x > 80 || y < 0 || y > 10 || z < -145 || z > 35) return null;
  return { x, y, z };
}

/** The campaign's canonical order. Saves and start points replay it through the reducer. */
export const CAMPAIGN = [
  ['talk', 'nox'], ['talk', 'ines'], ['talk', 'bruno'], ['cast', 'ventaria', 'mill'], ['collect', 'key'],
  ['talk', 'liora'], ['cast', 'lumaria', 'grove'], ['talk', 'aldren'], ['talk', 'celina'], ['cast', 'floralis', 'thorns'], ['collect', 'rose'],
  ['collect', 'scroll'], ['talk', 'baltasar'], ['talk', 'teobaldo'], ['cast', 'aurora', 'dragon'], ['talk', 'brum'], ['collect', 'crystal'],
  ['talk', 'tejedora'], ['cast', 'lumaria', 'altar'], ['cast', 'floralis', 'altar'], ['cast', 'aurora', 'altar'], ['talk', 'elara'],
];

/** Replays only recognized, prerequisite-valid facts; saves never grant arbitrary flags. */
export function restoreGame(raw) {
  let data = raw;
  if (typeof raw === 'string') { try { data = JSON.parse(raw); } catch { return createGame(); } }
  if (!data || typeof data !== 'object' || Array.isArray(data) || (data.version !== 1 && data.version !== STATE_VERSION)) return createGame();
  const legacy = data.version === 1;
  let state = createGame(data.level);
  const counts = data.dialogue && typeof data.dialogue === 'object' ? data.dialogue : {};
  const flags = data.flags && typeof data.flags === 'object' ? data.flags : {};
  const inventory = Array.isArray(data.inventory) ? data.inventory : [];
  // Version 1 had three graded exchanges per character. Three means finished;
  // a partial conversation resumes before the revelation, never after it.
  const savedTurns = npc => {
    const count = counts[npc];
    if (!Number.isInteger(count) || count < 0) return 0;
    if (!legacy) return Math.min(count, conversationLength(npc));
    if (count > 3) return 0;
    return count === 3 ? conversationLength(npc) : Math.min(count * 2, revealIndex(npc));
  };
  const replayTalk = npc => {
    const goal = savedTurns(npc);
    while ((state.dialogue[npc] ?? 0) < goal) { const before = state; state = reduceGame(state, { type: 'say', npc }); if (before === state) break; }
    state = { ...state, talking: null };
  };
  for (const [kind, id, target] of CAMPAIGN) {
    if (kind === 'talk') replayTalk(id);
    else if (kind === 'collect' && inventory.includes(id)) state = reduceGame(state, { type: 'collect', item: id });
    else if (kind === 'cast') {
      const flag = { mill: 'millRepaired', grove: 'forestLit', thorns: 'gardenOpen', dragon: 'dragonShield' }[target] ?? { lumaria: 'ritualLight', floralis: 'ritualGrowth', aurora: 'ritualDawn' }[id];
      if (flags[flag] === true) state = reduceGame(state, { type: 'cast', spell: id, target });
    }
  }
  if (!legacy) {
    const places = data.places && typeof data.places === 'object' ? data.places : {};
    for (const id of PLACE_IDS) {
      const value = places[id];
      if (Number.isInteger(value) && value > 0 && available(state, id)) state = { ...state, places: { ...state.places, [id]: Math.min(value, flowOf(id).length) } };
    }
    const deep = data.deep && typeof data.deep === 'object' ? data.deep : {};
    for (const id of CONVERSATION_IDS) {
      const value = deep[id];
      if (Number.isInteger(value) && value > 0) state = { ...state, deep: { ...state.deep, [id]: Math.min(value, MAX_DEEP) } };
    }
    const talking = data.talking;
    if (talking && typeof talking === 'object' && CONVERSATION_IDS.has(talking.id) && available(state, talking.id) && !state.flags.victory) {
      const deepOpen = talking.deep === true && (state.deep[talking.id] ?? 0) > 0;
      if (deepOpen || progressOf(state, talking.id) < flowOf(talking.id).length) state = { ...state, talking: { id: talking.id, deep: deepOpen } };
    }
  }
  const position = validPosition(data.checkpoint);
  // A corrupt checkpoint cannot place a fresh player behind a story-locked gate.
  if (position && (position.z >= -44 || state.flags.bridgeOpen) && (position.z >= -63 || state.flags.castleOpen)) state = { ...state, checkpoint: position };
  return state;
}

export function currentQuest(state) {
  const index = Math.min(state.completed.length, 7);
  let objective; let target;
  switch (index) {
    case 0: objective = 'Conversa con Nox, el cuervo del camino, en la Colina del Amanecer.'; target = 'nox'; break;
    case 1:
      if (!talked(state, 'ines')) { objective = 'Busca a Inés en la posada de la aldea y conversa con ella.'; target = 'ines'; }
      else if (!talked(state, 'bruno')) { objective = 'Conversa con Bruno, el herrero, junto al molino.'; target = 'bruno'; }
      else if (!state.flags.millRepaired) { objective = 'Repara el molino: elige Ventaria (tecla 2) y pulsa R junto a las aspas.'; target = 'mill'; }
      else { objective = 'Recoge la llave que Bruno dejó junto al molino (tecla F).'; target = 'key'; }
      break;
    case 2:
      if (!talked(state, 'liora')) { objective = 'Entra al bosque y conversa con Liora, el hada.'; target = 'liora'; }
      else { objective = 'Ilumina el santuario del bosque con Lumaria (tecla 1 y R).'; target = 'grove'; }
      break;
    case 3: objective = 'Sigue el sendero hasta el puente y conversa con Sir Aldren.'; target = 'aldren'; break;
    case 4:
      if (!talked(state, 'celina')) { objective = 'Cruza el puente y conversa con Celina en los jardines reales.'; target = 'celina'; }
      else if (!state.flags.gardenOpen) { objective = 'Transforma el muro de espinas con Floralis (tecla 3 y R).'; target = 'thorns'; }
      else { objective = 'Recoge la rosa encantada del jardín (tecla F).'; target = 'rose'; }
      break;
    case 5:
      if (!state.inventory.includes('scroll')) { objective = 'Explora la biblioteca del castillo y recoge el pergamino (tecla F).'; target = 'scroll'; }
      else if (!talked(state, 'baltasar')) { objective = 'Muestra el pergamino a Baltasar y conversa con él en la biblioteca.'; target = 'baltasar'; }
      else { objective = 'Conversa con Teobaldo, el cronista, en el gran salón.'; target = 'teobaldo'; }
      break;
    case 6:
      if (!state.flags.dragonShield) { objective = 'Sube a la terraza y protégete con Aurora (tecla 4 y R) cerca de Brum.'; target = 'dragon'; }
      else if (!talked(state, 'brum')) { objective = 'Conversa con Brum, el dragón.'; target = 'brum'; }
      else { objective = 'Recoge el cristal del amanecer junto a Brum (tecla F).'; target = 'crystal'; }
      break;
    default:
      if (!talked(state, 'tejedora')) { objective = 'Sube a la torre y conversa con la Tejedora de Espinas.'; target = 'tejedora'; }
      else if (!state.flags.ritualLight) { objective = 'Ritual · 1 de 3: usa Lumaria (tecla 1 y R) junto al altar.'; target = 'altar'; }
      else if (!state.flags.ritualGrowth) { objective = 'Ritual · 2 de 3: usa Floralis (tecla 3 y R) junto al altar.'; target = 'altar'; }
      else if (!state.flags.ritualDawn) { objective = 'Ritual · 3 de 3: usa Aurora (tecla 4 y R) junto al altar.'; target = 'altar'; }
      else if (!talked(state, 'elara')) { objective = 'Elara despierta: conversa con ella.'; target = 'elara'; }
      else { objective = 'Valdoria vuelve a ser libre. Explora el reino y conversa con quien quieras.'; target = 'elara'; }
  }
  return { ...QUESTS[index], objective, target, total: 8, complete: state.flags.victory };
}

/** What the journal says the learner has discovered, in story order. */
export function discoveries(state) {
  return NPCS.filter(npc => talked(state, npc.id)).map(npc => ({ npc: npc.id, name: npc.name, text: CONVERSATIONS[npc.id].journal }));
}

const LOCKED = {
  ines: 'Hola. Primero escucha a Nox, el cuervo del camino: él sabe por qué llegaste hasta aquí.',
  bruno: 'Antes de hablar del molino, escucha a Nox junto al camino.',
  liora: 'La aldea todavía necesita tu ayuda. Vuelve cuando el molino gire y tengas la llave.',
  aldren: 'El bosque sigue a oscuras. Devuélvele la luz antes de pedirme el paso.',
  celina: 'Sir Aldren tiene que abrirte el paso a los jardines.',
  baltasar: 'Me encantaría conversar, pero antes busca el pergamino de Elara en esta biblioteca.',
  teobaldo: 'Mis recuerdos están incompletos. Trae el pergamino de la biblioteca y conversamos.',
  brum: 'Mis llamas te impiden acercarte. Aprende Aurora en el castillo y protégete.',
  tejedora: 'Brum todavía guarda la luz que necesitamos. Escucha su historia y trae el cristal.',
  elara: 'Elara sigue dentro del sueño. El altar espera luz, vida y amanecer.',
};
/** A0 and A1 hear the same locked hint in short present-tense Spanish (A0 also gets English). */
const LOCKED_SIMPLE = {
  ines: { es: 'Hola. Primero, habla con Nox, el cuervo del camino.', en: 'Hi. First, talk to Nox, the raven on the road.' },
  bruno: { es: 'Hola. Primero, habla con Nox en el camino.', en: 'Hi. First, talk to Nox on the road.' },
  liora: { es: 'La aldea necesita ayuda. Primero, el molino y la llave.', en: 'The village needs help. First, the mill and the key.' },
  aldren: { es: 'El bosque está oscuro. Primero, la luz del bosque.', en: 'The forest is dark. First, the light in the forest.' },
  celina: { es: 'Primero, habla con Sir Aldren en el puente.', en: 'First, talk to Sir Aldren at the bridge.' },
  baltasar: { es: 'Primero, busca el pergamino en la biblioteca.', en: 'First, look for the scroll in the library.' },
  teobaldo: { es: 'Primero, trae el pergamino de la biblioteca.', en: 'First, bring the scroll from the library.' },
  brum: { es: 'Mi fuego es peligroso. Primero, aprende Aurora.', en: 'My fire is dangerous. First, learn Aurora.' },
  tejedora: { es: 'Primero, habla con Brum y trae el cristal.', en: 'First, talk to Brum and bring the crystal.' },
  elara: { es: 'Elara duerme. El altar necesita luz, vida y amanecer.', en: 'Elara is asleep. The altar needs light, life and dawn.' },
};

const pick = (entry, fallbackFn) => {
  if (!entry) return null;
  if (typeof entry === 'string') return { es: entry, fn: fallbackFn };
  if (Array.isArray(entry)) return { es: entry[0], fn: entry[1] ?? fallbackFn };
  return { es: entry.es, en: entry.en, options: entry.options, fn: fallbackFn };
};
const storyLine = entry => typeof entry === 'string' ? { es: entry } : entry ? { es: entry.es, en: entry.en } : { es: '' };

/** Questions available for «Profundizar»: optional extras first, then the main questions again. */
export function deepPool(id, level) {
  const lv = LEVELS.includes(level) ? level : 'A1';
  if (!NPC_IDS.has(id)) {
    const own = pick(PLACES[id].levels[lv], 'describe');
    const others = LEVELS.filter(other => other !== lv && BANDS[other] === BANDS[lv]).map(other => pick(PLACES[id].levels[other], 'describe'));
    return [own, ...others];
  }
  const set = CONVERSATIONS[id].levels[lv];
  return [...set.extra.map(entry => pick(entry, DEFAULT_FUNCTIONS.extra)), ...QUESTION_STEPS.map(step => pick(set[step], DEFAULT_FUNCTIONS[step]))];
}

function helpFor(id, level, fn, options) {
  const frames = level === 'A0' ? [...(options ?? []), ...FRAMES.A0.all] : FRAMES[level][fn] ?? FRAMES[level].opinion;
  // A0 and A1 already see bilingual keywords on screen; A2 keeps the plain word list.
  const words = level === 'A2' && NPC_IDS.has(id) ? CONVERSATIONS[id].words : [];
  return { frames, words, safe: SAFE_ANSWER.es, safeEn: level === 'A0' ? SAFE_ANSWER.en : undefined };
}

/**
 * What a character says now. The view only describes the conversation; it never
 * holds an expected answer.
 */
export function conversationView(state, id) {
  const level = LEVELS.includes(state.level) ? state.level : 'A1';
  const band = BANDS[level];
  const npc = NPCS.find(entry => entry.id === id);
  const place = PLACES[id];
  const base = { id, kind: npc ? 'npc' : 'place', name: npc?.name ?? place?.name ?? 'Valdoria', role: npc?.role ?? 'Lugar de Valdoria', level, total: conversationLength(id), index: Math.min(progressOf(state, id), conversationLength(id)), topic: npc ? CONVERSATIONS[id].topic : '', revealed: npc ? talked(state, id) : progressOf(state, id) >= 2 };
  const quest = currentQuest(state);
  const keywordBand = level === 'A0' ? 'a0' : level === 'A1' ? 'a1' : null;
  const keywords = keywordBand ? (npc ? CONVERSATIONS[id].keywords : place?.keywords)?.[keywordBand] ?? [] : [];
  const mission = { objective: quest.objective, title: quest.title, chapter: quest.number, here: quest.target === id };
  if (!npc && !place) return { ...base, mode: 'locked', step: '', text: 'El viento cruza el reino.', isQuestion: false, mission, canDeepen: false, help: null, keywords };
  if (!available(state, id)) {
    const simple = keywordBand ? LOCKED_SIMPLE[id] : null;
    return { ...base, mode: 'locked', step: '', text: simple?.es ?? `${LOCKED[id] ?? 'Todavía falta un paso.'}`, en: level === 'A0' ? simple?.en : undefined, isQuestion: false, mission, canDeepen: false, help: null, keywords: [] };
  }
  const deepCount = state.deep[id] ?? 0;
  const finished = base.index >= base.total;
  if (state.talking?.id === id && state.talking.deep && deepCount > 0) {
    const pool = deepPool(id, level);
    const question = pool[(deepCount - 1) % pool.length];
    return { ...base, mode: 'deep', step: 'deep', text: question.es, en: question.en, options: question.options, fn: question.fn, isQuestion: true, mission, canDeepen: true, help: helpFor(id, level, question.fn, question.options), keywords };
  }
  if (!npc) {
    const story = storyLine(place.story[band]);
    const question = pick(place.levels[level], 'describe');
    if (base.index === 0) return { ...base, mode: 'main', step: 'story', text: story.es, en: story.en, isQuestion: false, mission, canDeepen: true, help: null, keywords };
    return { ...base, mode: finished ? 'revisit' : 'main', step: 'q', text: question.es, en: question.en, options: question.options, fn: question.fn, isQuestion: true, mission, canDeepen: true, help: helpFor(id, level, question.fn, question.options), keywords };
  }
  const conversation = CONVERSATIONS[id];
  if (finished) {
    const line = storyLine(conversation.story[band].revisit);
    return { ...base, mode: 'revisit', step: 'revisit', text: state.flags.victory && id !== 'elara' ? `${line.es} Valdoria despertó, y se nota.` : line.es, en: line.en, isQuestion: false, mission, canDeepen: true, help: null, keywords };
  }
  const step = conversation.flow[base.index];
  if (QUESTION_STEPS.includes(step)) {
    const question = pick(conversation.levels[level][step], DEFAULT_FUNCTIONS[step]);
    return { ...base, mode: 'main', step, text: question.es, en: question.en, options: question.options, fn: question.fn, isQuestion: true, mission, canDeepen: true, help: helpFor(id, level, question.fn, question.options), keywords };
  }
  const line = storyLine(conversation.story[band][step]);
  return { ...base, mode: 'main', step, text: line.es, en: line.en, isQuestion: false, mission, canDeepen: true, help: null, keywords };
}
/** Backwards-compatible name used by the 3D fallback and older tests. */
export const getDialogue = (npc, level = 'A1', _stage, state) => conversationView(state ?? { ...createGame(level), level }, npc);

export function actionFeedback(previous, action, next) {
  if (next.flags.victory && !previous.flags.victory) return 'Valdoria despierta. Has completado El reino de la rosa dormida.';
  if (next.completed.length > previous.completed.length) return `Misión completada: ${QUESTS[previous.completed.length].title}. ${currentQuest(next).objective}`;
  const learned = next.spells.find(spell => !previous.spells.includes(spell));
  if (learned) return `Has aprendido ${SPELLS.find(spell => spell.id === learned)?.name}. ${currentQuest(next).objective}`;
  if (action.type === 'collect') {
    const item = ITEMS.find(entry => entry.id === action.item);
    return next.inventory.length > previous.inventory.length ? `Has recogido: ${item?.name}.` : `Aún no puedes recoger este objeto. ${currentQuest(previous).objective}`;
  }
  if (action.type === 'cast') {
    const effect = FLAGS.find(flag => next.flags[flag] && !previous.flags[flag]);
    const messages = { millRepaired: 'Las aspas vuelven a girar. Recoge la llave junto al molino.', forestLit: 'El santuario se ilumina y el bosque abre su camino hacia el puente.', gardenOpen: 'Las espinas se transforman en flores. Recoge la rosa encantada.', dragonShield: 'Aurora te protege. Acércate a Brum y conversa con él.', ritualLight: 'El altar recibe la luz. Ahora necesita vida: Floralis.', ritualGrowth: 'La rosa florece. Completa el ritual con Aurora.', ritualDawn: 'El cristal libera el amanecer. Conversa con Elara.' };
    return effect ? messages[effect] || currentQuest(next).objective : `El hechizo no activa este lugar todavía. ${currentQuest(previous).objective}`;
  }
  return currentQuest(next).objective;
}
