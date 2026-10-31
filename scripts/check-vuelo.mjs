// Checks the conversation scenes of Vuelo cancelado for every level:
// all 18 circles, three answers with their own reaction, consequence and
// mood, five different open questions about the student's life, words, level
// length and neutral Spanish. Usage: node scripts/check-vuelo.mjs [level]
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { CAST, LEVEL_IDS, MOODS, SCENE_WORDS, STORY, STORY_IDS } from '../app/vuelo-cancelado/story.mjs';
import { scanSource } from './neutral-spanish.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
// Questions that stay inside the airport: at most two of five per scene.
export const TRAVEL = /aeropuerto|avi[óo]n|vuelo|volar|viaj|maleta|equipaje|aerol[íi]nea|aduana|pasaporte|embarque|azafat|piloto|escala|turista|vacacion/i;

export function checkLevel(level, content) {
  const out = [];
  const bad = (where, message) => out.push(`${level} ${where}: ${message}`);
  const a0 = level === 'A0';
  const isText = (v) => typeof v === 'string' && v.trim().length > 0;
  const bi = (v) => a0 ? Boolean(v && isText(v.es) && isText(v.en)) : isText(v);
  const es = (v) => (a0 ? v?.es : v) ?? '';
  // A0 and A1 keywords are bilingual { es, en }; from A2 up they are plain Spanish.
  const pair = (v) => Boolean(v && isText(v.es) && isText(v.en));
  const word = (v) => (a0 || level === 'A1') ? pair(v) : isText(v);
  const ids = Object.keys(content ?? {});
  if (ids.join() !== STORY_IDS.join()) bad('', `scenes must be exactly ${STORY_IDS.join(', ')} in that order (got ${ids.join(', ')})`);
  const titles = new Set(); const questions = new Map();
  for (const story of STORY) {
    const s = content?.[story.id];
    const at = story.id;
    if (!s) continue;
    for (const key of ['title', 'line', 'ask']) if (!bi(s[key])) bad(at, `${key} missing${a0 ? ' or not { es, en }' : ''}`);
    if (titles.has(es(s.title))) bad(at, `title «${es(s.title)}» repeats`); titles.add(es(s.title));
    const dialogue = Array.isArray(s.dialogue) ? s.dialogue : [];
    if (dialogue.length < 2 || dialogue.length > 7) bad(at, 'dialogue needs 2 to 7 lines');
    for (const entry of dialogue) {
      if (!Array.isArray(entry) || !(CAST[entry[0]] || /^\*\S/.test(entry[0] ?? '')) || !bi(entry[1])) bad(at, `dialogue line ${JSON.stringify(entry).slice(0, 60)} needs [castId, text]`);
    }
    if (!dialogue.some((d) => d[0] === story.cast[0])) bad(at, `${story.cast[0]} must speak in the dialogue`);
    const n = words(es(s.line)) + dialogue.reduce((t, d) => t + words(es(d[1])), 0) + words(es(s.ask));
    const [min, max] = SCENE_WORDS[level];
    if (n < min || n > max) bad(at, `${n} words in line + dialogue + ask; ${level} needs ${min}–${max}`);
    const options = Array.isArray(s.options) ? s.options : [];
    if (options.length !== 3) bad(at, 'needs exactly 3 options');
    for (const o of options) {
      for (const key of ['say', 'reply', 'end']) if (!bi(o?.[key])) bad(at, `option ${key} missing`);
      if (!MOODS.includes(o?.mood)) bad(at, `option mood must be one of ${MOODS.join(', ')}`);
    }
    if (new Set(options.map((o) => es(o?.say))).size !== options.length) bad(at, 'options repeat');
    if (new Set(options.map((o) => es(o?.end))).size !== options.length) bad(at, 'each option needs its own consequence (end)');
    if (new Set(options.map((o) => o?.mood)).size < 2) bad(at, 'use at least two different moods');
    const talk = Array.isArray(s.talk) ? s.talk : [];
    if (talk.length !== 5) bad(at, 'needs exactly 5 talk questions');
    for (const q of talk) {
      if (!bi(q)) { bad(at, 'talk question missing'); continue; }
      if (!/\?\s*$/.test(es(q))) bad(at, `talk «${es(q)}» must be a question`);
      const key = es(q).toLocaleLowerCase('es');
      if (questions.has(key)) bad(at, `talk question repeats ${questions.get(key)}: «${es(q)}»`); else questions.set(key, at);
    }
    if (new Set(talk.map((q) => es(q).toLocaleLowerCase('es'))).size !== talk.length) bad(at, 'talk questions repeat');
    if (talk.filter((q) => TRAVEL.test(es(q))).length > 2) bad(at, 'more than 2 of the 5 talk questions stay in travel/the airport; move them to the student\'s life');
    const list = Array.isArray(s.words) ? s.words : [];
    if (list.length < 4 || list.length > 6 || !list.every(word)) bad(at, `words needs 4 to 6 entries${a0 || level === 'A1' ? ', each { es, en }' : ''}`);
  }
  return out;
}

async function main() {
  const only = process.argv[2]?.toUpperCase();
  const problems = [];
  for (const level of LEVEL_IDS) {
    if (only && level !== only) continue;
    const path = `app/vuelo-cancelado/levels/${level.toLowerCase()}.mjs`;
    let content;
    try { content = (await import(pathToFileURL(path).href + `?t=${Date.now()}`)).default; }
    catch (error) { problems.push(`${path}: ${error.message}`); continue; }
    problems.push(...checkLevel(level, content));
    for (const f of scanSource(readFileSync(path, 'utf8'), path)) problems.push(`${path}:${f.line}: neutral Spanish guard flags «${f.token}» (${f.kind}); rewrite with tú`);
  }
  for (const p of problems) console.error(p);
  console.log(problems.length ? `${problems.length} problems` : 'Vuelo cancelado: all levels OK');
  process.exitCode = problems.length ? 1 : 0;
}
if (process.argv[1]?.endsWith('check-vuelo.mjs')) await main();
