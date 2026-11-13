// El mundo en blanco · content checks for the encounters of every level: all
// twelve paper beings, speakers from the cast of that spot (or «yo»), both
// speaking, four to six lines, the word range of each level, ONE deep question
// with exactly three answers, each with the being's echo, exactly three open
// questions for «Más tinta» (long enough for the level, never repeated inside
// a level or across levels), A0 fully bilingual and A1 words bilingual, each
// question inside the length its level can hold, and neutral Spanish (no
// voseo, no vosotros). The student has no gender: nothing addressed to them
// may assume one.
// Run: node scripts/check-mundo-en-blanco.mjs [A1 …]
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { CAST, LEVEL_IDS, OPTIONS, SCENE_WORDS, SPOTS, TALKS, TALK_MIN_WORDS } from '../app/el-mundo-en-blanco/story.mjs';
import { questionProblems } from '../app/conversacion-general/quality.mjs';
import { scanSource } from './neutral-spanish.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).length;
const es = (t) => (typeof t === 'string' ? t : t?.es ?? '');
const isBi = (t) => t && typeof t === 'object' && typeof t.es === 'string' && typeof t.en === 'string' && t.es.trim() && t.en.trim();
const isText = (t) => (typeof t === 'string' ? t.trim().length > 0 : isBi(t));
// The voseo guard does not know the plural «vosotros»; these forms never belong here.
const VOSOTROS = /\b(?:vosotros|vosotras|os\s+\p{L}+(?:áis|éis|ís)|\p{L}+(?:áis|éis))\b/iu;
// Words that would give the student a gender when a being (or a question) speaks to them.
const GENDERED_WORD = /\b(?:bienvenid[oa]|tranquil[oa]|cansad[oa]|tú mism[oa]|de pequeñ[oa]|de niñ[oa]|dispuest[oa]|segur[oa] de ti|orgullos[oa] de ti)\b/iu;
// «de niña o de niño», «cansado o cansada» name both, so they assume neither.
const GENDERED = { test: (t) => GENDERED_WORD.test(String(t).replace(/\b(de niñ|cansad|tranquil)[oa] o (?:de niñ|cansad|tranquil)[oa]\b/giu, '')) };

const pathOf = (level) => `app/el-mundo-en-blanco/levels/${level.toLowerCase()}.mjs`;

export function checkLevel(level, content, path = pathOf(level)) {
  const errors = [];
  const fail = (id, message) => errors.push(`${level} ${id}: ${message}`);
  const a0 = level === 'A0';
  const ids = Object.keys(content);
  for (const spot of SPOTS) if (!ids.includes(spot.id)) fail(spot.id, 'missing encounter');
  for (const id of ids) if (!SPOTS.some((s) => s.id === id)) fail(id, 'unknown spot');
  const seenTalk = new Map();
  for (const spot of SPOTS) {
    const scene = content[spot.id];
    if (!scene) continue;
    const options = scene.options ?? [];
    const texts = [scene.title, scene.line, scene.q, ...(scene.dialogue ?? []).map((d) => d[1]), ...(scene.talk ?? []), ...options.flatMap((o) => [o.t, o.echo])];
    for (const t of [...texts, ...(scene.words ?? [])]) {
      if (!isText(t)) fail(spot.id, `empty or malformed text ${JSON.stringify(t)}`);
      else if (a0 && !isBi(t)) fail(spot.id, `A0 text without English: ${JSON.stringify(t)}`);
      else if (VOSOTROS.test(es(t))) fail(spot.id, `vosotros form in ${JSON.stringify(es(t)).slice(0, 90)}`);
    }
    if (!a0) for (const t of texts) if (typeof t !== 'string') fail(spot.id, `only A0 (and A1 words) are bilingual: ${JSON.stringify(t)}`);
    if (level === 'A1' && !(scene.words ?? []).every(isBi)) fail(spot.id, 'A1 words need { es, en }');
    if (!a0 && level !== 'A1' && !(scene.words ?? []).every((w) => typeof w === 'string')) fail(spot.id, 'words are plain Spanish from A2 on');
    const lines = scene.dialogue ?? [];
    if (lines.length < 4 || lines.length > 6) fail(spot.id, `a dialogue has four to six lines (has ${lines.length})`);
    for (const [who] of lines) {
      if (who === 'yo') continue;
      if (!spot.cast.includes(who)) fail(spot.id, `speaker ${who} is not at this spot (${spot.cast.join(', ')})`);
      if (!CAST[who]) fail(spot.id, `unknown speaker ${who}`);
    }
    if (!lines.some(([who]) => who === spot.cast[0])) fail(spot.id, `${spot.cast[0]} never speaks`);
    if (!lines.some(([who]) => who === 'yo')) fail(spot.id, 'the student (yo) never speaks');
    const total = words(es(scene.line)) + lines.reduce((n, [, t]) => n + words(es(t)), 0);
    const [min, max] = SCENE_WORDS[level];
    if (total < min || total > max) fail(spot.id, `${total} words in situation + dialogue (expected ${min}–${max})`);
    if (!/\?/.test(es(scene.q))) fail(spot.id, 'the deep question must ask something');
    if (options.length !== OPTIONS) fail(spot.id, `an encounter holds ${OPTIONS} answers (has ${options.length})`);
    if (new Set(options.map((o) => es(o.t).toLowerCase())).size !== options.length) fail(spot.id, 'repeated answer');
    if (options.some((o) => es(o.t) === es(o.echo))) fail(spot.id, 'an echo repeats its answer');
    if (!Array.isArray(scene.talk) || scene.talk.length !== TALKS) fail(spot.id, `«Más tinta» needs exactly ${TALKS} questions`);
    for (const t of scene.talk ?? []) {
      if (!/\?/.test(es(t))) fail(spot.id, `a «Más tinta» question must ask something: ${es(t)}`);
      if (words(es(t)) < TALK_MIN_WORDS[level]) fail(spot.id, `«Más tinta» too short for ${level}: ${es(t)}`);
      const key = es(t).toLowerCase();
      if (seenTalk.has(key)) fail(spot.id, `«Más tinta» repeats ${seenTalk.get(key)}`);
      seenTalk.set(key, spot.id);
    }
    for (const t of [scene.q, ...(scene.talk ?? [])]) {
      const problems = questionProblems(es(t), level).filter((p) => !p.startsWith('closed'));
      if (problems.length) fail(spot.id, `${problems.join(', ')} in «${es(t)}»`);
    }
    for (const t of [scene.q, ...(scene.talk ?? []), ...options.flatMap((o) => [o.t, o.echo])]) if (GENDERED.test(es(t))) fail(spot.id, `gives the student a gender: «${es(t).slice(0, 90)}»`);
    for (const [who, t] of lines) if (who === 'yo' && GENDERED.test(es(t))) fail(spot.id, `the student's line has a gender: «${es(t)}»`);
    if (!Array.isArray(scene.words) || scene.words.length < 4 || scene.words.length > 8) fail(spot.id, 'between four and eight words');
  }
  for (const f of scanSource(readFileSync(path, 'utf8'), path)) errors.push(`${level}: not neutral Spanish «${f.token}» in ${JSON.stringify(f.text).slice(0, 90)}`);
  return errors;
}

export async function checkAll(levels = LEVEL_IDS) {
  const errors = [];
  const byLevel = [];
  for (const level of levels) {
    const content = (await import(pathToFileURL(resolve(pathOf(level))).href)).default;
    errors.push(...checkLevel(level, content));
    byLevel.push([level, content]);
  }
  // Every level is authored on its own: no question may be copied word for word from another level.
  const seen = new Map();
  for (const [l, c] of byLevel) for (const spot of SPOTS) for (const t of [c[spot.id]?.q, ...(c[spot.id]?.talk ?? [])]) {
    const key = es(t).toLowerCase();
    if (!key) continue;
    if (seen.has(key)) errors.push(`${l} ${spot.id}: «${es(t)}» is the same as in ${seen.get(key)}`);
    seen.set(key, `${l} ${spot.id}`);
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const asked = process.argv.slice(2).map((a) => a.toUpperCase()).filter((a) => LEVEL_IDS.includes(a));
  const errors = await checkAll(asked.length ? asked : LEVEL_IDS);
  for (const e of errors) console.error(e);
  console.log(errors.length ? `${errors.length} problems` : 'El mundo en blanco: all levels pass.');
  process.exitCode = errors.length ? 1 : 0;
}
