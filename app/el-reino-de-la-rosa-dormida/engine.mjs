import { LEVELS, NPCS, ITEMS, SPELLS, QUESTS, LEVEL_FOCUS, DIALOGUES, INTENTS } from './content.mjs';

export { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
export const SAVE_KEY = 'spanishcue:reino-rosa:v1';
const NPC_IDS = new Set(NPCS.map(npc => npc.id));
const FLAGS = ['millRepaired', 'forestLit', 'bridgeOpen', 'gardenOpen', 'castleOpen', 'historyKnown', 'dragonShield', 'dragonTrusted', 'ritualReady', 'ritualLight', 'ritualGrowth', 'ritualDawn', 'victory'];
const START = { x: 0, y: 0, z: 24 };
const has = (state, quest) => state.completed.includes(quest);
const talked = (state, npc) => state.dialogue[npc] === 3;
const add = (list, id) => list.includes(id) ? list : [...list, id];
const normalize = text => String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim();
const matches = (text, pattern) => new RegExp(`\\b(?:${pattern})\\b`, 'u').test(text);
// Negation is scoped to the action requested by this exchange. A refusal to
// attack or to decide for another person must not cancel an offer of dialogue.
const ACTION_STEMS = {
  help: ['ayud'], listen: ['escuch'], repair: ['repar', 'arregl', 'ayud'],
  responsibility: ['cuid', 'respet', 'proteg'], fairy: ['ayud', 'cuid'],
  purpose: ['ayud', 'salv', 'busc'], respect: ['respet', 'escuch'],
  care: ['cuid'], memory: ['record'], peace: ['habl', 'dialog', 'escuch'],
  protect: ['proteg', 'cuid', 'defend'], freedom: ['respet'],
  release: ['liber'], agency: ['respet', 'escuch'], future: ['cuid'],
};
function deniesRequestedAction(text, intent) {
  const stems = ACTION_STEMS[intent];
  if (!stems) return false;
  const verb = stems.map(stem => `${stem}\\w*`).join('|');
  const denial = `(?:no|nunca|jamas|tampoco) (?:(?:quiero|queremos|pienso|deseo|pretendo|debo|puedo|voy a|vamos a|estoy dispuesto a|estoy dispuesta a) )?(?:${verb})`;
  return matches(text, denial);
}


export function createGame(level = 'A1') {
  return {
    version: 1, level: LEVELS.includes(level) ? level : 'A1',
    completed: [], inventory: [], spells: [],
    flags: Object.fromEntries(FLAGS.map(flag => [flag, false])),
    dialogue: Object.fromEntries(NPCS.map(npc => [npc.id, 0])),
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

export function canInteract(state, id) {
  if (NPC_IDS.has(id)) return npcAvailable(state, id);
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

/** Pure reducer. The renderer checks distance; these rules independently enforce story gates. */
export function reduceGame(state, action) {
  if (!state || !action || typeof action !== 'object') return state;
  if (action.type === 'level') return LEVELS.includes(action.level) ? { ...state, level: action.level } : state;
  if (action.type === 'checkpoint') {
    const pos = validPosition(action.position);
    return pos ? { ...state, checkpoint: pos } : state;
  }
  if (action.type === 'answer') {
    const npc = action.npc;
    if (!NPC_IDS.has(npc) || !npcAvailable(state, npc) || talked(state, npc)) return state;
    const line = getDialogue(npc, state.level, state.dialogue[npc], state);
    if (!evaluateAnswer(line, action.text).accepted) return state;
    return settle({ ...state, dialogue: { ...state.dialogue, [npc]: state.dialogue[npc] + 1 } });
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

/** Replays only recognized, prerequisite-valid facts; saves never grant arbitrary flags. */
export function restoreGame(raw) {
  let data = raw;
  if (typeof raw === 'string') { try { data = JSON.parse(raw); } catch { return createGame(); } }
  if (!data || typeof data !== 'object' || Array.isArray(data) || data.version !== 1) return createGame();
  let state = createGame(data.level);
  const counts = data.dialogue && typeof data.dialogue === 'object' ? data.dialogue : {};
  const flags = data.flags && typeof data.flags === 'object' ? data.flags : {};
  const inventory = Array.isArray(data.inventory) ? data.inventory : [];
  const replayTalk = npc => {
    const count = counts[npc];
    if (!Number.isInteger(count) || count < 0 || count > 3) return;
    for (let stage = 0; stage < count; stage++) {
      const line = getDialogue(npc, state.level, stage, state);
      state = reduceGame(state, { type: 'answer', npc, text: line.suggestions[0] });
    }
  };
  const replayItem = item => { if (inventory.includes(item)) state = reduceGame(state, { type: 'collect', item }); };
  const replayCast = (flag, spell, target) => { if (flags[flag] === true) state = reduceGame(state, { type: 'cast', spell, target }); };
  replayTalk('nox'); replayTalk('ines'); replayTalk('bruno');
  replayCast('millRepaired', 'ventaria', 'mill'); replayItem('key'); replayTalk('liora');
  replayCast('forestLit', 'lumaria', 'grove'); replayTalk('aldren'); replayTalk('celina');
  replayCast('gardenOpen', 'floralis', 'thorns'); replayItem('rose'); replayItem('scroll');
  replayTalk('baltasar'); replayTalk('teobaldo'); replayCast('dragonShield', 'aurora', 'dragon');
  replayTalk('brum'); replayItem('crystal'); replayTalk('tejedora');
  replayCast('ritualLight', 'lumaria', 'altar'); replayCast('ritualGrowth', 'floralis', 'altar'); replayCast('ritualDawn', 'aurora', 'altar'); replayTalk('elara');
  const position = validPosition(data.checkpoint);
  // A corrupt checkpoint cannot place a fresh player behind a story-locked gate.
  if (position && (position.z >= -44 || state.flags.bridgeOpen) && (position.z >= -63 || state.flags.castleOpen)) state = { ...state, checkpoint: position };
  return state;
}

export function currentQuest(state) {
  const index = Math.min(state.completed.length, 7);
  let objective; let target;
  switch (index) {
    case 0: objective = 'Acércate a Nox y preséntate.'; target = 'nox'; break;
    case 1:
      if (!talked(state, 'ines')) { objective = 'Pregunta a Inés por la historia de la aldea.'; target = 'ines'; }
      else if (!talked(state, 'bruno')) { objective = 'Ofrece tu ayuda a Bruno y aprende Ventaria.'; target = 'bruno'; }
      else if (!state.flags.millRepaired) { objective = 'Usa Ventaria junto al molino para reparar sus aspas.'; target = 'mill'; }
      else { objective = 'Recoge la llave que Bruno dejó junto al molino.'; target = 'key'; }
      break;
    case 2:
      if (!talked(state, 'liora')) { objective = 'Escucha a Liora y aprende Lumaria.'; target = 'liora'; }
      else { objective = 'Usa Lumaria en el santuario del bosque.'; target = 'grove'; }
      break;
    case 3: objective = 'Habla con Sir Aldren y gana su confianza.'; target = 'aldren'; break;
    case 4:
      if (!talked(state, 'celina')) { objective = 'Resuelve la pista de Celina y aprende Floralis.'; target = 'celina'; }
      else if (!state.flags.gardenOpen) { objective = 'Usa Floralis junto al muro de espinas.'; target = 'thorns'; }
      else { objective = 'Recoge la rosa encantada del jardín.'; target = 'rose'; }
      break;
    case 5:
      if (!state.inventory.includes('scroll')) { objective = 'Encuentra el pergamino antiguo en la biblioteca.'; target = 'scroll'; }
      else if (!talked(state, 'baltasar')) { objective = 'Muestra el pergamino a Baltasar.'; target = 'baltasar'; }
      else { objective = 'Reconstruye la historia con Teobaldo y aprende Aurora.'; target = 'teobaldo'; }
      break;
    case 6:
      if (!state.flags.dragonShield) { objective = 'Usa Aurora cerca de Brum para crear un escudo.'; target = 'dragon'; }
      else if (!talked(state, 'brum')) { objective = 'Acércate a Brum y escucha su historia.'; target = 'brum'; }
      else { objective = 'Recoge el cristal del amanecer junto a Brum.'; target = 'crystal'; }
      break;
    default:
      if (!talked(state, 'tejedora')) { objective = 'Habla con la Tejedora de Espinas en la torre.'; target = 'tejedora'; }
      else if (!state.flags.ritualLight) { objective = 'Ritual · 1 de 3: usa Lumaria junto al altar.'; target = 'altar'; }
      else if (!state.flags.ritualGrowth) { objective = 'Ritual · 2 de 3: usa Floralis junto al altar.'; target = 'altar'; }
      else if (!state.flags.ritualDawn) { objective = 'Ritual · 3 de 3: usa Aurora junto al altar.'; target = 'altar'; }
      else if (!talked(state, 'elara')) { objective = 'Elara despierta: escúchala y devuelve su voz al reino.'; target = 'elara'; }
      else { objective = 'Valdoria vuelve a ser libre. Explora el reino al amanecer.'; target = 'elara'; }
  }
  return { ...QUESTS[index], objective, target, total: 8, complete: state.flags.victory };
}

const RECAPS = {
  nox: 'Ya conoces el secreto del sueño. Inés y Bruno te esperan en la aldea.',
  ines: 'Recuerda: escucha al dragón antes de juzgarlo. Bruno guarda la llave.',
  bruno: 'Ventaria moverá el molino. La llave está junto a las aspas: cuídala.',
  liora: 'Lumaria revela el sendero. Busca el santuario entre los árboles.',
  aldren: 'Has ganado mi confianza. El puente está abierto; cumple tu promesa de escuchar.',
  celina: 'Floralis devuelve flores a las espinas. Lleva una sola rosa al ritual.',
  baltasar: 'Un refugio debe tener una salida. El pergamino conserva la voz de Elara.',
  teobaldo: 'La tormenta trajo el refugio; el miedo prolongó el sueño. Aurora te protegerá.',
  brum: 'Te confío el cristal. Que Elara sea libre de decidir: esa es nuestra promesa.',
  tejedora: 'Estoy lista para soltar el sueño. En el altar: Lumaria, Floralis y Aurora.',
  elara: 'El amanecer nos pertenece a todos. Mi historia continúa, y la tuya también.',
};

export function getDialogue(npc, level = 'A1', stage = 0, state) {
  const character = NPCS.find(entry => entry.id === npc);
  if (!character) return { npc, name: 'Valdoria', text: 'El viento cruza el reino.', prompt: '', hint: '', suggestions: [], intent: '', stage: 0, complete: true, locked: true, level: 'A1' };
  const selectedLevel = LEVELS.includes(level) ? level : 'A1';
  const selectedStage = Number.isInteger(stage) ? Math.min(3, Math.max(0, stage)) : 0;
  if (state && !npcAvailable(state, npc)) {
    const quest = currentQuest(state);
    return { npc, name: character.name, text: lockedLine(npc, quest.objective), prompt: quest.objective, hint: quest.objective, suggestions: [], intent: '', stage: selectedStage, complete: false, locked: true, level: selectedLevel };
  }
  if (selectedStage === 3) return { npc, name: character.name, text: state?.flags.victory ? `${RECAPS[npc]} Valdoria ha despertado.` : RECAPS[npc], prompt: '', hint: '', suggestions: [], intent: '', stage: 3, complete: true, locked: false, level: selectedLevel };
  const [intent, hint, variants] = DIALOGUES[npc][selectedStage];
  const [text, example] = variants[LEVELS.indexOf(selectedLevel)];
  let memory = '';
  if (state && selectedStage > 0) {
    const previousIntent = DIALOGUES[npc][selectedStage - 1][0];
    memory = REACTIONS[previousIntent] || 'Te escucho. ';
  }
  return { npc, name: character.name, text: `${memory}${text}`, prompt: LEVEL_FOCUS[selectedLevel], hint, suggestions: [example], intent, stage: selectedStage, complete: false, locked: false, level: selectedLevel };
}
const REACTIONS = {
  identity: 'Gael… recordaré tu nombre. ', sleep: 'Sí, el tiempo sigue fuera del sueño. ',
  village: 'Gracias por escuchar nuestra versión. ', key: 'Bruno valorará una petición respetuosa. ',
  repair: 'Entonces te confiaré el viento. ', wind: 'Exacto: fuerza con cuidado. ',
  fairy: 'El bosque siente tu intención. ', light: 'Has entendido la diferencia. ',
  purpose: 'Escucharte cambia mi juicio. ', trust: 'Tus actos hablan a tu favor. ',
  rose: 'Has mirado más allá de las espinas. ', floralis: 'El jardín no tendrá que arder. ',
  shelter: 'El origen no borra lo ocurrido. ', choice: 'Eso decía Elara en su carta. ',
  order: 'Así encajan los recuerdos. ', evidence: 'La prueba nos permite corregir la memoria. ',
  peace: 'Mis llamas bajan. Ahora puedo escucharte. ', protect: 'Has comprendido mi juramento. ',
  fear: 'Nadie había escuchado mi miedo sin obedecerlo. ', release: 'Empiezo a imaginar otra forma de cuidar. ',
  agency: 'Gracias por dejarme decidir. ', together: 'Quiero conocer a todos los que ayudaron. ',
};
function lockedLine(npc, objective) {
  const lines = {
    ines: 'El cuervo del camino sabe por qué has llegado. Escúchalo primero.',
    bruno: 'Antes de tocar el molino, habla con Nox junto al camino.',
    liora: 'La aldea aún necesita tu ayuda. Vuelve cuando hayas reparado su molino.',
    aldren: 'El bosque sigue a oscuras. Devuelve su luz antes de pedirme el paso.',
    celina: 'Sir Aldren debe abrirte el paso a los jardines.',
    baltasar: 'Necesitamos una prueba. Busca el pergamino de Elara en esta biblioteca.',
    teobaldo: 'Mis recuerdos son incompletos. Trae el pergamino para contrastarlos.',
    brum: 'Mis llamas te impiden acercarte. Aprende Aurora en el castillo y protégete.',
    tejedora: 'Brum aún guarda la luz necesaria. Escucha su historia y consigue el cristal.',
    elara: 'Elara sigue dentro del sueño. El altar espera luz, vida y amanecer.',
  };
  return `${lines[npc] || 'Todavía falta un paso.'} ${objective}`;
}

export function evaluateAnswer(dialogue, input) {
  const text = normalize(input);
  const intent = dialogue?.intent || '';
  const failure = feedback => ({ accepted: false, feedback, intent });
  if (!dialogue || dialogue.locked || dialogue.complete) return failure(dialogue?.hint || 'Esta conversación todavía no está disponible.');
  if (!text) return failure('Escribe o dicta una respuesta. También puedes abrir la ayuda.');
  if (text.length > 1500) return failure('Prueba con una respuesta de menos de 1500 caracteres.');
  const rule = INTENTS[intent];
  if (!rule) return failure('No hay una intención disponible para esta respuesta.');
  if (deniesRequestedAction(text, intent)) return failure(`Esa respuesta niega la acción que necesitas aquí. ${dialogue.hint}`);
  const intentionText = intent === 'peace' ? text.replace(/\bno (?:voy a|quiero|vengo a) (?:atacar|herir|matar)\w*/g, '') : text;
  if (rule.reject?.some(pattern => matches(intentionText, pattern))) return failure(`La intención parece contraria a lo que necesitas aquí. ${dialogue.hint}`);
  if (!rule.any.some(pattern => matches(text, pattern)) || rule.all?.some(group => !group.some(pattern => matches(text, pattern)))) return failure(`Todavía no reconozco la intención. ${dialogue.hint}`);
  const level = LEVELS.indexOf(dialogue.level);
  if (intent === 'identity' && level >= 1 && !/\b(soy|me llamo|mi nombre|me conocen como)\b/.test(text) && !/^gael[.,;!]/.test(text)) return failure('Preséntate con tu nombre: puedes decir «soy», «me llamo» o «mi nombre es».');
  if (intent === 'key' && level >= 1 && !/\b(necesito|quisiera|quiero|pido|dame|darias|presta\w*|puedes|podrias|ped\w*)\b/.test(text)) return failure('Formula una petición de la llave, por ejemplo con «necesito» o «¿me prestarías…?».');
  const negativeIntent = { sleep: /\bno (?:esta |estan )?(?:duerm\w*|dormid\w*)\b/, wind: /\bno (?:el )?(?:viento|aire|brisa)\b/, fairy: /\bno (?:quiero |voy a )?(?:ayud\w*|cuid\w*)\b/, trust: /\bno (?:he )?repar\w*\b/, protect: /\bno (?:quiero |voy a )?(?:proteg\w*|cuid\w*)\b/, freedom: /\bno (?:quiero |voy a )?respet\w*\b/ };
  if (negativeIntent[intent]?.test(text)) return failure(`Esa respuesta expresa una intención contraria. ${dialogue.hint}`);
  const words = text.match(/[a-z0-9]+/g) || [];
  const minWords = [1, 1, 3, 5, 6, 8, 9][Math.max(0, level)];
  if (words.length < minWords) return failure(`La idea está encaminada. ${LEVEL_FOCUS[dialogue.level] || ''} ${dialogue.hint}`);
  if (level >= 3 && !/\b(porque|para|aunque|si|pero|sin|antes|despues|mientras|y|ya que|por eso|por tanto|de modo|de ese modo|de otro modo|no obstante|aun asi|en lugar|de ahi|sin embargo|ademas|permite|exige|asi|de lo contrario|solo|sino)\b/.test(text)) return failure(`Añade una razón, condición o contraste. ${dialogue.hint}`);
  if (intent === 'ritual' && level >= 1) {
    const light = text.search(/\b(luz|lumaria)\b/); const life = text.search(/\b(vida|floralis)\b/); const dawn = text.search(/\b(amanecer|aurora)\b/);
    if (light < 0 || life < light || dawn < life) return failure('El altar necesita este orden: luz, vida y amanecer. Puedes usar los nombres de los hechizos.');
  }
  if (intent === 'order' && level >= 2) {
    const storm = text.indexOf('tormenta'); const sleep = text.indexOf('sueno');
    const refuge = text.indexOf('refugio');
    if (storm < 0 || sleep < storm || (dialogue.level !== 'B2' && (refuge < storm || refuge > sleep))) return failure('Primero llegó la tormenta; después nació el refugio y se prolongó el sueño.');
  }
  return { accepted: true, feedback: 'Intención reconocida. Tu respuesta hace avanzar la conversación.', intent };
}

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
    const messages = { millRepaired: 'Las aspas vuelven a girar. La llave ya está disponible.', forestLit: 'El santuario se ilumina y el bosque abre su camino.', gardenOpen: 'Las espinas se transforman en flores.', dragonShield: 'Aurora te protege. Acércate a Brum y escucha.', ritualLight: 'El altar recibe la luz. Ahora necesita vida: Floralis.', ritualGrowth: 'La rosa florece. Completa el ritual con Aurora.', ritualDawn: 'El cristal libera el amanecer. Habla con Elara.' };
    return effect ? messages[effect] || currentQuest(next).objective : `El hechizo no activa este lugar todavía. ${currentQuest(previous).objective}`;
  }
  return currentQuest(next).objective;
}
