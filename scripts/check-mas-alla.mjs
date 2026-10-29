// Más allá · content checks for the encounters of every level: all twelve
// circles, speakers from the cast of that circle (or «yo»), both speaking,
// four to six lines, the word range of each level, ONE deep question with as
// many answers as its form holds (story.mjs FORMS), each with the character's
// echo, poles for the river, exactly two open questions for «Más hondo» (long
// enough from A2 on, never repeated inside a level), A0 fully bilingual and
// A1 words bilingual, and neutral Spanish (no voseo, no vosotros).
// Run: node scripts/check-mas-alla.mjs [A1 …]
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { CAST, FORMS, LEVEL_IDS, SCENE_WORDS, SPOTS, TALK_MIN_WORDS } from '../app/mas-alla/story.mjs';
import { scanSource } from './neutral-spanish.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).length;
const es = (t) => (typeof t === 'string' ? t : t?.es ?? '');
const isBi = (t) => t && typeof t === 'object' && typeof t.es === 'string' && typeof t.en === 'string' && t.es.trim() && t.en.trim();
const isText = (t) => (typeof t === 'string' ? t.trim().length > 0 : isBi(t));
// The voseo guard does not know the plural «vosotros»; these forms never belong here.
const VOSOTROS = /\b(?:vosotros|vosotras|os\s+\p{L}+(?:áis|éis|ís)|\p{L}+(?:áis|éis))\b/iu;

export function checkLevel(level, content, path = `app/mas-alla/levels/${level.toLowerCase()}.mjs`) {
  const errors = [];
  const fail = (id, message) => errors.push(`${level} ${id}: ${message}`);
  const a0 = level === 'A0';
  const ids = Object.keys(content);
  for (const spot of SPOTS) if (!ids.includes(spot.id)) fail(spot.id, 'missing encounter');
  for (const id of ids) if (!SPOTS.some((s) => s.id === id)) fail(id, 'unknown circle');
  const seenTalk = new Map();
  for (const spot of SPOTS) {
    const scene = content[spot.id];
    if (!scene) continue;
    const form = FORMS[spot.form];
    const options = scene.options ?? [];
    const texts = [scene.title, scene.line, scene.q, ...(scene.dialogue ?? []).map((d) => d[1]), ...(scene.talk ?? []), ...options.flatMap((o) => [o.t, o.echo]), ...(scene.poles ?? [])];
    for (const t of [...texts, ...(scene.words ?? [])]) {
      if (!isText(t)) fail(spot.id, `empty or malformed text ${JSON.stringify(t)}`);
      else if (a0 && !isBi(t)) fail(spot.id, `A0 text without English: ${JSON.stringify(t)}`);
      else if (VOSOTROS.test(es(t))) fail(spot.id, `vosotros form in ${JSON.stringify(es(t)).slice(0, 90)}`);
    }
    if (!a0) for (const t of texts) if (typeof t !== 'string' && !(level === 'A1' && (scene.poles ?? []).includes(t))) fail(spot.id, `only A0 (and A1 words) are bilingual: ${JSON.stringify(t)}`);
    if (level === 'A1' && !(scene.words ?? []).every(isBi)) fail(spot.id, 'A1 words need { es, en }');
    const lines = scene.dialogue ?? [];
    if (lines.length < 4 || lines.length > 6) fail(spot.id, `a dialogue has four to six lines (has ${lines.length})`);
    for (const [who] of lines) {
      if (who === 'yo') continue;
      if (!spot.cast.includes(who)) fail(spot.id, `speaker ${who} is not in this circle (${spot.cast.join(', ')})`);
      if (!CAST[who]) fail(spot.id, `unknown speaker ${who}`);
    }
    if (!lines.some(([who]) => who === spot.cast[0])) fail(spot.id, `${spot.cast[0]} never speaks`);
    if (!lines.some(([who]) => who === 'yo')) fail(spot.id, 'the soul (yo) never speaks');
    const total = words(es(scene.line)) + lines.reduce((n, [, t]) => n + words(es(t)), 0);
    const [min, max] = SCENE_WORDS[level];
    if (total < min || total > max) fail(spot.id, `${total} words in situation + dialogue (expected ${min}–${max})`);
    if (!/\?/.test(es(scene.q))) fail(spot.id, 'the deep question must ask something');
    if (options.length !== form.options) fail(spot.id, `the ${spot.form} form holds ${form.options} answers (has ${options.length})`);
    if (new Set(options.map((o) => es(o.t).toLowerCase())).size !== options.length) fail(spot.id, 'repeated answer');
    if (options.some((o) => es(o.t) === es(o.echo))) fail(spot.id, 'an echo repeats its answer');
    if (spot.form === 'rio' && (!Array.isArray(scene.poles) || scene.poles.length !== 2)) fail(spot.id, 'the river needs its two poles');
    if (spot.form !== 'rio' && scene.poles) fail(spot.id, 'only the river has poles');
    if (!Array.isArray(scene.talk) || scene.talk.length !== 2) fail(spot.id, '«Más hondo» needs exactly two questions');
    for (const t of scene.talk ?? []) {
      if (!/\?/.test(es(t))) fail(spot.id, `a «Más hondo» question must ask something: ${es(t)}`);
      if (words(es(t)) < TALK_MIN_WORDS[level]) fail(spot.id, `«Más hondo» too short for ${level}: ${es(t)}`);
      const key = es(t).toLowerCase();
      if (seenTalk.has(key)) fail(spot.id, `«Más hondo» repeats ${seenTalk.get(key)}`);
      seenTalk.set(key, spot.id);
    }
    if (!Array.isArray(scene.words) || scene.words.length < 4 || scene.words.length > 8) fail(spot.id, 'between four and eight words');
  }
  for (const f of scanSource(readFileSync(path, 'utf8'), path)) errors.push(`${level}: not neutral Spanish «${f.token}» in ${JSON.stringify(f.text).slice(0, 90)}`);
  return errors;
}

export async function checkAll(levels = LEVEL_IDS) {
  const errors = [];
  for (const level of levels) {
    const path = `app/mas-alla/levels/${level.toLowerCase()}.mjs`;
    const content = (await import(pathToFileURL(resolve(path)).href)).default;
    errors.push(...checkLevel(level, content, path));
  }
  // Every level is authored on its own: no question may be copied word for word from another level.
  const byLevel = await Promise.all(levels.map(async (l) => [l, (await import(pathToFileURL(resolve(`app/mas-alla/levels/${l.toLowerCase()}.mjs`)).href)).default]));
  for (const spot of SPOTS) {
    const seen = new Map();
    for (const [l, c] of byLevel) {
      const key = es(c[spot.id]?.q).toLowerCase();
      if (!key) continue;
      if (seen.has(key)) errors.push(`${l} ${spot.id}: the deep question is the same as in ${seen.get(key)}`);
      seen.set(key, l);
    }
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const asked = process.argv.slice(2).map((a) => a.toUpperCase()).filter((a) => LEVEL_IDS.includes(a));
  const errors = await checkAll(asked.length ? asked : LEVEL_IDS);
  for (const e of errors) console.error(e);
  console.log(errors.length ? `${errors.length} problems` : 'Más allá: all levels pass.');
  process.exitCode = errors.length ? 1 : 0;
}
