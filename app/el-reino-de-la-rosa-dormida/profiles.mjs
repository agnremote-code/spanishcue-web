import { LEVELS, NPCS, LEGACY_SAVE_KEY, createGame, restoreGame, currentQuest, conversationLength } from './engine.mjs';
import { PLACES } from './conversations.mjs';

/**
 * One independent saved adventure per learner, kept in this browser only.
 * Every write goes through these pure functions; the component only reads and
 * writes the serialized store. Nothing here ever deletes another profile's save.
 */
export const PROFILES_KEY = 'spanishcue:reino-rosa:perfiles:v2';
export const EXPORT_KIND = 'spanishcue-reino-rosa-perfiles';
const MAX_PROFILES = 200;
const MAX_NAME = 40;

export function emptyStore() { return { version: 2, activeId: null, profiles: [], legacyMigrated: false }; }

export function newProfileId(random = Math.random, now = Date.now()) {
  return `p_${now.toString(36)}_${Math.floor(random() * 36 ** 6).toString(36).padStart(6, '0')}`;
}

const cleanName = (name, fallback) => {
  const text = String(name ?? '').replace(/\s+/g, ' ').trim().slice(0, MAX_NAME);
  return text || fallback;
};
const validTime = value => typeof value === 'string' && !Number.isNaN(Date.parse(value)) ? value : new Date(0).toISOString();

function cleanProfile(raw, usedIds) {
  if (!raw || typeof raw !== 'object' || typeof raw.id !== 'string' || !/^p_[a-z0-9_]{3,40}$/.test(raw.id) || usedIds.has(raw.id)) return null;
  const save = restoreGame(raw.save ?? { version: 2, level: raw.level });
  const level = LEVELS.includes(raw.level) ? raw.level : save.level;
  return {
    id: raw.id, name: cleanName(raw.name, 'Alumno'), level,
    createdAt: validTime(raw.createdAt), updatedAt: validTime(raw.updatedAt),
    started: raw.started === true, save: { ...save, level },
  };
}

/** Validates any stored value into a usable store; corrupt profiles are skipped, never invented. */
export function parseStore(raw) {
  let data = raw;
  if (typeof raw === 'string') { try { data = JSON.parse(raw); } catch { return emptyStore(); } }
  if (!data || typeof data !== 'object' || data.version !== 2 || !Array.isArray(data.profiles)) return emptyStore();
  const used = new Set();
  const profiles = [];
  for (const entry of data.profiles.slice(0, MAX_PROFILES)) {
    const profile = cleanProfile(entry, used);
    if (profile) { used.add(profile.id); profiles.push(profile); }
  }
  const activeId = profiles.some(profile => profile.id === data.activeId) ? data.activeId : profiles[0]?.id ?? null;
  return { version: 2, activeId, profiles, legacyMigrated: data.legacyMigrated === true };
}

/**
 * Reads the store from a Storage-like object. The first time, the old single
 * save (version 1) becomes a profile called «Mi partida». The old key is kept
 * untouched, so going back to an older version of the game loses nothing.
 */
export function readStore(storage, now = new Date().toISOString()) {
  let store = emptyStore();
  try { store = parseStore(storage.getItem(PROFILES_KEY)); } catch { /* unavailable storage: start empty */ }
  if (store.legacyMigrated) return store;
  let legacy = null;
  try { legacy = storage.getItem(LEGACY_SAVE_KEY); } catch { legacy = null; }
  if (legacy) {
    const state = restoreGame(legacy);
    const { store: migrated } = createProfile(store, { name: 'Mi partida', level: state.level, state, started: true, now, id: 'p_legacy_v1' });
    store = migrated;
  }
  return { ...store, legacyMigrated: true };
}

export function writeStore(storage, store) {
  storage.setItem(PROFILES_KEY, JSON.stringify(store));
}

export function createProfile(store, { name, level = 'A1', state, started = false, now = new Date().toISOString(), id } = {}) {
  if (store.profiles.length >= MAX_PROFILES) return { store, profile: null };
  const lv = LEVELS.includes(level) ? level : 'A1';
  const used = new Set(store.profiles.map(profile => profile.id));
  let profileId = id && !used.has(id) ? id : newProfileId();
  while (used.has(profileId)) profileId = newProfileId();
  const save = state ? { ...restoreGame(JSON.parse(JSON.stringify(state))), level: lv } : createGame(lv);
  const profile = { id: profileId, name: cleanName(name, `Alumno ${store.profiles.length + 1}`), level: lv, createdAt: now, updatedAt: now, started, save };
  return { store: { ...store, profiles: [...store.profiles, profile], activeId: profileId }, profile };
}

const mapProfile = (store, id, change) => ({ ...store, profiles: store.profiles.map(profile => profile.id === id ? change(profile) : profile) });

/** Saves one learner's state. Only that profile changes. */
export function saveProfileState(store, id, state, now = new Date().toISOString()) {
  if (!store.profiles.some(profile => profile.id === id)) return store;
  return mapProfile(store, id, profile => ({ ...profile, level: state.level, save: state, started: true, updatedAt: now }));
}
export function setActive(store, id) { return store.profiles.some(profile => profile.id === id) ? { ...store, activeId: id } : store; }
export function renameProfile(store, id, name) { return mapProfile(store, id, profile => ({ ...profile, name: cleanName(name, profile.name) })); }
export function setProfileLevel(store, id, level, now = new Date().toISOString()) {
  if (!LEVELS.includes(level)) return store;
  return mapProfile(store, id, profile => ({ ...profile, level, save: { ...profile.save, level }, updatedAt: now }));
}
/** Restarts only this learner's adventure (same name and level). */
export function resetProfile(store, id, now = new Date().toISOString()) {
  return mapProfile(store, id, profile => ({ ...profile, save: createGame(profile.level), started: false, updatedAt: now }));
}
export function deleteProfile(store, id) {
  const profiles = store.profiles.filter(profile => profile.id !== id);
  return { ...store, profiles, activeId: store.activeId === id ? profiles[0]?.id ?? null : store.activeId };
}
export const activeProfile = store => store.profiles.find(profile => profile.id === store.activeId) ?? null;

export function exportStore(store, now = new Date().toISOString()) {
  return JSON.stringify({ kind: EXPORT_KIND, version: 2, exportedAt: now, profiles: store.profiles }, null, 2);
}

/** Adds the profiles of a backup. A profile whose id already exists is added as a copy, never overwritten. */
export function importProfiles(store, json, now = new Date().toISOString()) {
  let data;
  try { data = typeof json === 'string' ? JSON.parse(json) : json; } catch { return { store, added: 0, error: 'El archivo no es un JSON válido.' }; }
  if (!data || data.kind !== EXPORT_KIND || !Array.isArray(data.profiles)) return { store, added: 0, error: 'El archivo no es una copia de partidas de El reino de la rosa dormida.' };
  let next = store; let added = 0;
  const used = new Set(store.profiles.map(profile => profile.id));
  for (const raw of data.profiles) {
    const profile = cleanProfile(raw, new Set());
    if (!profile || next.profiles.length >= MAX_PROFILES) continue;
    const copy = used.has(profile.id);
    const id = copy ? newProfileId() : profile.id;
    used.add(id);
    next = { ...next, profiles: [...next.profiles, { ...profile, id, name: copy ? cleanName(`${profile.name} (copia)`, profile.name) : profile.name, updatedAt: profile.updatedAt || now }] };
    added += 1;
  }
  if (!next.activeId && next.profiles.length) next = { ...next, activeId: next.profiles[0].id };
  return { store: next, added, error: added ? '' : 'El archivo no contiene partidas válidas.' };
}

/** Plain-language summary for the «Mis alumnos» table. */
export function profileSummary(profile) {
  const state = profile.save;
  const quest = currentQuest(state);
  const chapter = state.flags.victory ? 'Aventura completada' : `Capítulo ${quest.number} — ${quest.title}`;
  let point = state.flags.victory ? 'Valdoria despierta' : quest.objective;
  const talking = state.talking?.id;
  if (talking) {
    const name = NPCS.find(npc => npc.id === talking)?.name ?? PLACES[talking]?.name ?? talking;
    const done = (NPCS.some(npc => npc.id === talking) ? state.dialogue[talking] : state.places[talking]) ?? 0;
    point = state.talking.deep ? `Conversando con ${name} (pregunta extra)` : `Conversando con ${name} · momento ${Math.min(done + 1, conversationLength(talking))} de ${conversationLength(talking)}`;
  } else if (!profile.started) point = 'Sin empezar';
  return { chapter, point, lastSession: profile.started ? profile.updatedAt : null, level: profile.level };
}
