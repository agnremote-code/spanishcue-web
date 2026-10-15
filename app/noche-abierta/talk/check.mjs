// Noche abierta · editorial audit of the general conversation (run by
// scripts/check-noche-talk.mjs and the tests). Every scene and place has five
// questions per level, specific to that level, about real life, without
// weapons, procedures or a safety course, and without repeating themselves.
import { auditCorpus, auditLevels, auditSet, auditTopics, TOPICS } from "../../conversacion-general/audit.mjs";
import { esOf } from "../bilingual.mjs";
import { ENCOUNTERS, A0_IDS, encounterById, ITEM_IDS } from "../street.mjs";
import { PEDAGOGY_IDS, pedagogyFor } from "../pedagogy.mjs";
import { OBJECT_TALK, PLACE_A0_TALK, PLACE_TALK, STREET_A0_TALK, STREET_FILES, TALK_LEVELS, placeTalk } from "./index.mjs";

const prefix = (where, list) => list.map((problem) => `${where}: ${problem}`);
const POOL_MIN = 6;

export function auditStreetFile(name) {
  const data = STREET_FILES[name];
  const problems = [];
  if (!data) return [`${name}: unknown file`];
  for (const [id, entry] of Object.entries(data)) {
    const encounter = encounterById(id);
    if (!encounter) { problems.push(`${id}: no such encounter`); continue; }
    const names = encounter.cast.map((person) => person.name).filter((n) => /^[A-ZÁÉÍÓÚÑ]/.test(n));
    problems.push(...prefix(id, auditTopics(entry.topics)));
    for (const level of TALK_LEVELS) problems.push(...prefix(id, auditSet(entry[level], level, { names })));
    problems.push(...prefix(id, auditLevels(Object.fromEntries(TALK_LEVELS.map((level) => [level, entry[level] ?? []])))));
  }
  return problems;
}

export function auditNocheTalk() {
  const problems = [];
  const fileOf = new Map(Object.entries(STREET_FILES).flatMap(([name, data]) => Object.keys(data).map((id) => [id, name])));
  for (const encounter of ENCOUNTERS) if (!fileOf.has(encounter.id)) problems.push(`${encounter.id}: no general conversation`);
  for (const name of Object.keys(STREET_FILES)) problems.push(...auditStreetFile(name));
  problems.push(...auditCorpus(ENCOUNTERS.filter((e) => fileOf.has(e.id)).map((e) => ({
    id: e.id, topics: STREET_FILES[fileOf.get(e.id)][e.id].topics,
    sets: Object.fromEntries(TALK_LEVELS.map((level) => [level, STREET_FILES[fileOf.get(e.id)][e.id][level] ?? []])),
  }))));
  // A0 scenes: five bilingual questions each.
  for (const id of A0_IDS) {
    const entry = STREET_A0_TALK[id];
    if (!entry) { problems.push(`${id}/A0: no general conversation`); continue; }
    problems.push(...prefix(`${id}`, auditTopics(entry.topics)));
    if (entry.A0?.some((pair) => !pair?.es || !pair?.en)) problems.push(`${id}/A0: every question needs { es, en }`);
    else problems.push(...prefix(id, auditSet(entry.A0?.map((pair) => `${pair.es}\n${pair.en}`), "A0", { es: esOf })));
  }
  // Places: their personal question plus four more, at every level.
  const placeEntries = [];
  for (const rowId of PEDAGOGY_IDS) {
    const sets = {};
    for (const level of ["A0", ...TALK_LEVELS]) {
      const first = pedagogyFor({ id: rowId }, level).close;
      const talk = placeTalk(rowId, level, first);
      sets[level] = talk;
      problems.push(...prefix(rowId, auditSet(talk, level, { es: esOf })));
    }
    problems.push(...prefix(rowId, auditLevels(Object.fromEntries(TALK_LEVELS.map((level) => [level, sets[level]])))));
    const topics = PLACE_TALK[rowId]?.topics;
    problems.push(...prefix(rowId, auditTopics(topics)));
    placeEntries.push({ id: rowId, topics: topics ?? [], sets });
    if (PLACE_A0_TALK[rowId]?.A0?.some((pair) => !pair?.es || !pair?.en)) problems.push(`${rowId}/A0: every question needs { es, en }`);
  }
  problems.push(...auditCorpus(placeEntries, { es: esOf, maxShare: 0.2 }).filter((p) => !/same main theme/.test(p)));
  // Object pools: human themes only, several per level so scenes rotate.
  for (const item of ITEM_IDS) {
    const pool = OBJECT_TALK[item];
    if (!pool) { problems.push(`${item}: no object questions`); continue; }
    problems.push(...prefix(item, auditTopics(pool.topics)));
    for (const level of TALK_LEVELS) {
      const list = pool[level] ?? [];
      if (list.length < POOL_MIN) problems.push(`${item}/${level}: needs at least ${POOL_MIN} questions`);
      for (let i = 0; i + 5 <= list.length; i += 5) problems.push(...prefix(`${item}[${i}]`, auditSet(list.slice(i, i + 5), level).filter((p) => !/exactly/.test(p))));
      for (const q of list.slice(Math.floor(list.length / 5) * 5)) problems.push(...prefix(item, auditSet([q, "¿Uno?", "¿Dos?", "¿Tres?", "¿Cuatro?"], level).filter((p) => p.includes("#1"))));
    }
  }
  return problems;
}
export { TOPICS };
