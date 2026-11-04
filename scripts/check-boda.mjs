// Checks the conversation scenes of La boda for every level:
// all 18 circles, three answers with their own reaction, consequence and
// mood, five different open questions about the student's life, words, level
// length and neutral Spanish. Usage: node scripts/check-boda.mjs [level]
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { CAST, LEVEL_IDS, MOODS, SCENE_WORDS, STORY, STORY_IDS } from '../app/la-boda/story.mjs';
import { scanSource } from './neutral-spanish.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
// Questions that stay at the wedding: at most two of five per scene.
export const TRAVEL = /boda|novi[oa]s?\b|casamiento|casar|brindis|padrino|madrina|fiesta|invitad|estancia/i;


// Ale's rule: no question the student already answered in another class.
// Every talk question, listening open question and guest question of La boda
// is looked up, word for word, in the source of every other class in app/.
const OWN = /(^|\/)(la-boda|escucha-3d\/content\/boda)(\/|$)/;
export function otherClassSources(root = 'app') {
  const files = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (OWN.test(path) || name === 'node_modules') continue;
      const stat = statSync(path);
      if (stat.isDirectory()) walk(path);
      else if (/\.(mjs|js|ts|tsx|json)$/.test(name) && stat.size < 3e6) files.push([path, readFileSync(path, 'utf8')]);
    }
  };
  walk(root);
  return files;
}
export function crossClassDuplicates(questions, sources = otherClassSources()) {
  const out = [];
  for (const [q, where] of questions) {
    if (q.length <= 12) continue;
    const hit = sources.find(([, text]) => text.includes(q));
    if (hit) out.push(`${where}: «${q}» already exists in ${hit[0]}; write a question of this class`);
  }
  return out;
}

// Listening multiple choice: the right answer must not give itself away by
// being the longest option, nor sit in a fixed position.
export function choiceBalance(level, file) {
  const out = [];
  const choices = file.items.flatMap((item) => (item.choice ?? []).map((c) => ({ ...c, id: item.id })));
  if (!choices.length) return out;
  const text = (o) => (typeof o === 'string' ? o : o?.es ?? '');
  const longest = choices.filter((c) => { const len = c.options.map((o) => text(o).length); return len[c.answer] === Math.max(...len); }).length;
  if (longest / choices.length > 0.4) out.push(`${level} listening: the right answer is the longest option in ${longest} of ${choices.length} questions (max 40%)`);
  const pos = choices.map((c) => c.answer);
  for (let k = 0; k < 3; k++) { const share = pos.filter((p) => p === k).length / pos.length; if (share < 0.2 || share > 0.4) out.push(`${level} listening: answer position ${k} used in ${Math.round(share * 100)}% of questions (20–40%)`); }
  const patterns = new Map();
  for (const item of file.items) { const p = (item.choice ?? []).map((c) => c.answer).join(''); patterns.set(p, (patterns.get(p) ?? 0) + 1); }
  for (const [p, n] of patterns) if (n > 3) out.push(`${level} listening: ${n} items share the answer pattern ${p} (at most 3)`);
  // From C1, every item asks at least two inference questions (intention, irony, what is implied).
  if (level === 'C1' || level === 'C2') for (const item of file.items) { const n = (item.choice ?? []).filter((c) => c.infer === true).length; if (n < 2) out.push(`${level} listening ${item.id}: needs at least 2 inference questions (infer: true), has ${n}`); }
  for (const period of [1, 2, 3, 4, 6]) if (pos.every((p, i) => i < period || p === pos[i - period])) out.push(`${level} listening: answer positions repeat every ${period} questions`);
  return out;
}

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
    if (talk.filter((q) => TRAVEL.test(es(q))).length > 2) bad(at, 'more than 2 of the 5 talk questions stay at the wedding; move them to the student\'s life');
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
    const path = `app/la-boda/levels/${level.toLowerCase()}.mjs`;
    let content;
    try { content = (await import(pathToFileURL(path).href + `?t=${Date.now()}`)).default; }
    catch (error) { problems.push(`${path}: ${error.message}`); continue; }
    problems.push(...checkLevel(level, content));
    for (const f of scanSource(readFileSync(path, 'utf8'), path)) problems.push(`${path}:${f.line}: neutral Spanish guard flags «${f.token}» (${f.kind}); rewrite with tú`);
  }
  // Every guest in the crowd tells a story at three levels.
  const { CROWD } = await import('../app/la-boda/layout.mjs');
  const { INVITADOS } = await import('../app/la-boda/invitados.mjs');
  const pair = (v) => Boolean(v && typeof v.es === 'string' && v.es && typeof v.en === 'string' && v.en);
  const keys = CROWD.map((_, i) => String(i));
  if (Object.keys(INVITADOS).sort().join() !== keys.sort().join()) problems.push(`invitados.mjs: keys must be exactly ${keys.join(', ')}`);
  for (const [key, p] of Object.entries(INVITADOS)) {
    for (const k of ['who', 'basic', 'basicAsk']) if (!pair(p[k])) problems.push(`invitados ${key}: ${k} must be { es, en }`);
    for (const k of ['mid', 'midAsk', 'high', 'highAsk']) if (typeof p[k] !== 'string' || p[k].length < 12) problems.push(`invitados ${key}: ${k} missing`);
    for (const k of ['basicAsk', 'midAsk', 'highAsk']) if (!/\?\s*$/.test(typeof p[k] === 'string' ? p[k] : p[k]?.es ?? '')) problems.push(`invitados ${key}: ${k} must be a question`);
    const n = words(p.basic?.es ?? ''), m = words(p.mid ?? ''), h = words(p.high ?? '');
    if (n > 45 || m < 40 || m > 95 || h < 60 || h > 120) problems.push(`invitados ${key}: lengths basic ${n} (≤45), mid ${m} (40–95), high ${h} (60–120)`);
  }
  if (new Set(Object.values(INVITADOS).map((p) => p.name)).size !== Object.keys(INVITADOS).length) problems.push('invitados: two people share a name');
  const path = 'app/la-boda/invitados.mjs';
  for (const f of scanSource(readFileSync(path, 'utf8'), path)) problems.push(`${path}:${f.line}: neutral Spanish guard flags «${f.token}» (${f.kind}); rewrite with tú`);
  // No question already asked in another class; listening answers balanced.
  const asked = [];
  for (const level of LEVEL_IDS) {
    const mod = (await import(pathToFileURL(`app/la-boda/levels/${level.toLowerCase()}.mjs`).href)).default;
    for (const [id, s] of Object.entries(mod)) for (const q of s.talk ?? []) asked.push([typeof q === 'string' ? q : q.es, `${level} ${id} talk`]);
    const file = JSON.parse(readFileSync(`app/escucha-3d/content/boda/${level.toLowerCase()}.json`, 'utf8'));
    for (const item of file.items) for (const o of item.open ?? []) asked.push([o.q, `${level} listening ${item.id} open`]);
    problems.push(...choiceBalance(level, file));
  }
  for (const [key, p] of Object.entries(INVITADOS)) for (const k of ['basicAsk', 'midAsk', 'highAsk']) asked.push([typeof p[k] === 'string' ? p[k] : p[k]?.es ?? '', `invitados ${key} ${k}`]);
  problems.push(...crossClassDuplicates(asked));
  for (const p of problems) console.error(p);
  console.log(problems.length ? `${problems.length} problems` : 'La boda: all levels OK');
  process.exitCode = problems.length ? 1 : 0;
}
if (process.argv[1]?.endsWith('check-boda.mjs')) await main();
