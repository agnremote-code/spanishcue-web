// Madrid infectada · content checks for the scenes of every level: all twenty
// circles, speakers from the cast of that circle (or «yo», or «*Someone»),
// at most one comprehension question with three options, exactly two open
// questions for «Tu turno» (long enough from A2 on), the word range of each
// level, A0 fully bilingual and A1 words bilingual, and neutral Spanish (no
// voseo); and the same for the thirty survivors of the street (calle/).
// Run: node scripts/check-madrid.mjs [A1 …] [calle-a0 calle-a …]
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { CAST, LEVEL_IDS, SCENE_WORDS, SPOTS, TALK_MIN_WORDS } from '../app/madrid-infectada/story.mjs';
import { scanSource } from './neutral-spanish.mjs';
import { ENCOUNTER_IDS, SURVIVORS } from '../app/madrid-infectada/city.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).length;
const es = (t) => (typeof t === 'string' ? t : t?.es ?? '');
const isBi = (t) => t && typeof t === 'object' && typeof t.es === 'string' && typeof t.en === 'string' && t.es.trim() && t.en.trim();
const isText = (t) => (typeof t === 'string' ? t.trim().length > 0 : isBi(t));

export function checkLevel(level, content, path = `app/madrid-infectada/levels/${level.toLowerCase()}.mjs`) {
  const errors = [];
  const fail = (id, message) => errors.push(`${level} ${id}: ${message}`);
  const bilingual = level === 'A0';
  const ids = Object.keys(content);
  for (const spot of SPOTS) if (!ids.includes(spot.id)) fail(spot.id, 'missing scene');
  for (const id of ids) if (!SPOTS.some((s) => s.id === id)) fail(id, 'unknown circle');
  for (const spot of SPOTS) {
    const scene = content[spot.id];
    if (!scene) continue;
    const texts = [scene.title, scene.line, ...(scene.dialogue ?? []).map((d) => d[1]), ...(scene.talk ?? []), ...(scene.words ?? [])];
    if (scene.quiz) texts.push(scene.quiz.q, scene.quiz.why, ...(scene.quiz.options ?? []));
    for (const t of texts) {
      if (!isText(t)) fail(spot.id, `empty or malformed text ${JSON.stringify(t)}`);
      else if (bilingual && !isBi(t)) fail(spot.id, `A0 text without English: ${JSON.stringify(t)}`);
      else if (!bilingual && typeof t !== 'string' && !(level === 'A1' && scene.words.includes(t))) fail(spot.id, `only A0 (and A1 words) are bilingual: ${JSON.stringify(t)}`);
    }
    if (level === 'A1' && !scene.words.every(isBi)) fail(spot.id, 'A1 words need { es, en }');
    if (!Array.isArray(scene.dialogue) || scene.dialogue.length < 4) fail(spot.id, 'a dialogue needs at least four lines');
    for (const [who] of scene.dialogue ?? []) {
      if (who === 'yo' || who.startsWith('*')) continue;
      if (!spot.cast.includes(who)) fail(spot.id, `speaker ${who} is not in this circle (${spot.cast.join(', ')})`);
      if (!CAST[who]) fail(spot.id, `unknown speaker ${who}`);
    }
    if (!(scene.dialogue ?? []).some(([who]) => who === spot.cast[0])) fail(spot.id, `${spot.cast[0]} never speaks`);
    if (!(scene.dialogue ?? []).some(([who]) => who === 'yo')) fail(spot.id, 'the mascot (yo) never speaks');
    const total = words(es(scene.line)) + (scene.dialogue ?? []).reduce((n, [, t]) => n + words(es(t)), 0);
    const [min, max] = SCENE_WORDS[level];
    if (total < min || total > max) fail(spot.id, `${total} words in situation + dialogue (expected ${min}–${max})`);
    if (scene.quiz) {
      const q = scene.quiz;
      if (!Array.isArray(q.options) || q.options.length !== 3) fail(spot.id, 'the question needs exactly three options');
      if (![0, 1, 2].includes(q.answer)) fail(spot.id, 'the answer must be 0, 1 or 2');
      if (new Set((q.options ?? []).map(es)).size !== 3) fail(spot.id, 'repeated option');
    }
    if (!Array.isArray(scene.talk) || scene.talk.length !== 2) fail(spot.id, '«Tu turno» needs exactly two questions');
    for (const t of scene.talk ?? []) {
      if (!/\?/.test(es(t))) fail(spot.id, `a «Tu turno» question must ask something: ${es(t)}`);
      if (words(es(t)) < TALK_MIN_WORDS[level]) fail(spot.id, `«Tu turno» too short for ${level}: ${es(t)}`);
    }
    if (!Array.isArray(scene.words) || scene.words.length < 4 || scene.words.length > 8) fail(spot.id, 'between four and eight words');
  }
  for (const f of scanSource(readFileSync(path, 'utf8'), path)) errors.push(`${level}: not neutral Spanish «${f.token}» in ${JSON.stringify(f.text).slice(0, 90)}`);
  // The same open question must not repeat inside a level.
  const seen = new Map();
  for (const [id, scene] of Object.entries(content)) for (const t of scene.talk ?? []) {
    const key = es(t).toLowerCase();
    if (seen.has(key)) errors.push(`${level} ${id}: «Tu turno» repeats ${seen.get(key)}`);
    seen.set(key, id);
  }
  return errors;
}

// The thirty survivors of the street, in four bands (street.mjs): every
// survivor in every band, the survivor speaks first and the mascot answers,
// and the same rules for the quiz, «Tu turno», the words and neutral Spanish.
export const STREET_WORDS = { a0: [25, 95], a: [55, 150], b: [100, 230], c: [130, 320] };
export const STREET_TALK_MIN = { a0: 3, a: 6, b: 16, c: 20 };
export function checkStreet(band, content, path = `app/madrid-infectada/calle/${band}.mjs`) {
  const errors = [];
  const fail = (id, message) => errors.push(`calle ${band} ${id}: ${message}`);
  const ids = Object.keys(content);
  for (const id of ENCOUNTER_IDS) if (!ids.includes(id)) fail(id, 'missing survivor');
  for (const id of ids) if (!SURVIVORS[id]) fail(id, 'unknown survivor');
  for (const id of ENCOUNTER_IDS) {
    const scene = content[id];
    if (!scene) continue;
    const texts = [scene.title, scene.line, ...(scene.dialogue ?? []).map((d) => d[1]), ...(scene.talk ?? []), ...(scene.words ?? [])];
    if (scene.quiz) texts.push(scene.quiz.q, scene.quiz.why, ...(scene.quiz.options ?? []));
    for (const t of texts) {
      if (!isText(t)) fail(id, `empty or malformed text ${JSON.stringify(t)}`);
      else if (band === 'a0' && !isBi(t)) fail(id, `A0 text without English: ${JSON.stringify(t)}`);
      else if (band !== 'a0' && typeof t !== 'string' && !(band === 'a' && scene.words.includes(t))) fail(id, `only A0 (and A1–A2 words) are bilingual: ${JSON.stringify(t)}`);
    }
    if (band === 'a' && !scene.words.every(isBi)) fail(id, 'A1–A2 words need { es, en }');
    if (!Array.isArray(scene.dialogue) || scene.dialogue.length < 4) fail(id, 'a dialogue needs at least four lines');
    for (const [who] of scene.dialogue ?? []) if (who !== 'yo' && who !== id && !who.startsWith('*')) fail(id, `speaker ${who} is not this survivor`);
    if (scene.dialogue?.[0]?.[0] !== id) fail(id, 'the survivor speaks first');
    if (!(scene.dialogue ?? []).some(([who]) => who === 'yo')) fail(id, 'the mascot (yo) never speaks');
    const total = words(es(scene.line)) + (scene.dialogue ?? []).reduce((n, [, t]) => n + words(es(t)), 0);
    const [min, max] = STREET_WORDS[band];
    if (total < min || total > max) fail(id, `${total} words in situation + dialogue (expected ${min}–${max})`);
    if (scene.quiz) {
      const q = scene.quiz;
      if (!Array.isArray(q.options) || q.options.length !== 3) fail(id, 'the question needs exactly three options');
      if (![0, 1, 2].includes(q.answer)) fail(id, 'the answer must be 0, 1 or 2');
      if (new Set((q.options ?? []).map(es)).size !== 3) fail(id, 'repeated option');
    }
    if (!Array.isArray(scene.talk) || scene.talk.length !== 2) fail(id, '«Tu turno» needs exactly two questions');
    for (const t of scene.talk ?? []) {
      if (!/\?/.test(es(t))) fail(id, `a «Tu turno» question must ask something: ${es(t)}`);
      if (words(es(t)) < STREET_TALK_MIN[band]) fail(id, `«Tu turno» too short for ${band}: ${es(t)}`);
    }
    if (!Array.isArray(scene.words) || scene.words.length < 4 || scene.words.length > 8) fail(id, 'between four and eight words');
  }
  for (const f of scanSource(readFileSync(path, 'utf8'), path)) errors.push(`calle ${band}: not neutral Spanish «${f.token}» in ${JSON.stringify(f.text).slice(0, 90)}`);
  const seen = new Map();
  for (const [id, scene] of Object.entries(content)) for (const t of scene.talk ?? []) {
    const key = es(t).toLowerCase();
    if (seen.has(key)) errors.push(`calle ${band} ${id}: «Tu turno» repeats ${seen.get(key)}`);
    seen.set(key, id);
  }
  return errors;
}

export async function checkAll(levels = LEVEL_IDS, bands = ['a0', 'a', 'b', 'c']) {
  const errors = [];
  for (const level of levels) {
    const path = `app/madrid-infectada/levels/${level.toLowerCase()}.mjs`;
    const mod = await import(pathToFileURL(resolve(path)).href);
    errors.push(...checkLevel(level, mod.default, path));
  }
  for (const band of bands) {
    const path = `app/madrid-infectada/calle/${band}.mjs`;
    const mod = await import(pathToFileURL(resolve(path)).href);
    errors.push(...checkStreet(band, mod.default, path));
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const only = process.argv.slice(2);
  const levels = only.map((l) => l.toUpperCase()).filter((l) => LEVEL_IDS.includes(l));
  const bands = only.filter((b) => b.startsWith('calle-')).map((b) => b.slice(6));
  const errors = await checkAll(only.length ? levels : LEVEL_IDS, only.length ? bands : undefined);
  for (const e of errors) console.error(e);
  console.log(errors.length ? `${errors.length} problems` : 'Madrid infectada: all scenes OK');
  process.exitCode = errors.length ? 1 : 0;
}
