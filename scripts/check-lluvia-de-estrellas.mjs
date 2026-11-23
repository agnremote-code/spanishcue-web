// Checks the conversation scenes of Lluvia de estrellas for every level:
// all 18 circles, three answers with their own reaction, consequence and
// mood, five different open questions about the student's life, words, level
// length and neutral Spanish. Usage: node scripts/check-lluvia-de-estrellas.mjs [level]
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { CAST, LEVEL_IDS, MOODS, SCENE_WORDS, STORY, STORY_IDS } from '../app/lluvia-de-estrellas/story.mjs';
import { scanSource } from './neutral-spanish.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
// Questions that stay in the campsite and its sky: at most two of five per scene.
export const TRAVEL = /camping|carpa|acampar|estrellas? fugaz|lluvia de estrellas|meteor|cometa|mirador|telescopio|observatorio|desierto|salar|libreta/i;


// Ale's rule: no question the student already answered in another class.
// Every talk question, listening open question and guest question of Lluvia de estrellas
// is looked up, word for word, in the source of every other class in app/.
const OWN = /(^|\/)(lluvia-de-estrellas|escucha-3d\/content\/estrellas)(\/|$)/;
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
  const rank = (c) => { const len = c.options.map((o) => text(o).length); const sorted = [...len].sort((x, y) => x - y); return { len, sorted, key: len[c.answer] }; };
  const middle = choices.filter((c) => { const r = rank(c); return r.key === r.sorted[1] && r.key !== r.sorted[0] && r.key !== r.sorted[2]; }).length;
  const shortest = choices.filter((c) => { const r = rank(c); return r.key === r.sorted[0]; }).length;
  if (middle / choices.length > 0.4) out.push(`${level} listening: the right answer is the middle-length option in ${middle} of ${choices.length} questions (max 40%)`);
  if (shortest / choices.length < 0.25) out.push(`${level} listening: the right answer is the shortest option in only ${shortest} of ${choices.length} questions (min 25%)`);
  for (const c of choices) { const r = rank(c); c.options.forEach((o, i) => { if (i !== c.answer && r.len[i] < 0.45 * r.key) out.push(`${level} listening ${c.id}: distractor «${text(o)}» is under 45% of the key's length; it gives the key away`); }); }
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

// The student has no gender: nothing addressed to them, or said by them, is
// masculine or feminine, and no «solo o sola» doublets anywhere.
const ADJ = '(?:tranquil|nervios|content|preparad|cansad|desconectad|list|segur|orgullos|enfadad|aburrid|emocionad|preocupad|agobiad|perdid|maread|asustad|enamorad|obligad|acompañad|equivocad|sol|sorprendid|avergonzad|celos|santo|dormid|despiert|ocupad|harto|hart|valiente\\b|loc|tímid|timid|callad|sincer|honest|generos|egoíst|egoist|celos|libre\\b|culpable\\b|contento|solit)';
const YOU = '(?:estás|estabas|estuviste|estarías|estarás|estés|estuvieras|eres|fuiste|eras|serías|seas|fueras|sientes|sentías|sentiste|sentirte|te sientes|te sentiste|te sentías|te sentirías|te sientas|te pones|te pone|te ponen|te ponía|te puso|te quedas|te quedaste|quedarte|te ves|te veías|pareces|parecías|vas|ibas|viajas|viajabas|vives|vivías|sigues|te quedes|estar|sentirse|quedarse|ponerse|eres tan|tú)';
const ME = '(?:estoy|estaba|estuve|estaría|me siento|me sentí|me sentía|me sentiría|me pongo|me pone|me ponen|me puso|me ponía|me quedo|me quedé|soy|era|fui|sería|voy|iba|viajo|vivo|sentirme|ponerme|quedarme)';
const ADV = '(?:\\s+(?:muy|tan|más|menos|un poco|bastante|demasiado|algo|siempre|nunca|todavía|ya|tranquilamente|hoy))*[:,]?';
const genderRe = (link) => new RegExp(`(?<!\\p{L})${link}${ADV}\\s+${ADJ}(?:o|a|os|as)?(?!\\p{L})`, 'iu');
const YOU_RE = genderRe(YOU), ME_RE = genderRe(ME);
const DOUBLET = /(?<!\p{L})(\p{L}{3,})o(s?) (?:o|y|u) \1a\2(?!\p{L})|(?<!\p{L})(\p{L}{3,})a(s?) (?:o|y|u) \3o\4(?!\p{L})|(?<!\p{L})(?:ti|tú) mism[oa] o (?:de )?(?:ti|tú) mism[oa]|\p{L}o\/a\b|\p{L}\(a\)|\p{L}@/iu;
const NOUN_YOU = /(?<!\p{L})(?:eres|eras|fuiste|serías|seas|pareces|parecías)\s+(?:todo\s+)?(?:un|una)\s+\p{L}+/iu;
const TOGETHER = /(?<!\p{L})\p{L}+(?:emos|amos|imos)\s+(?:tú y yo\s+)?junt(?:a|o)s(?!\p{L})|(?<!\p{L})(?:vamos|vayamos|bajemos|subamos)\s+junt(?:a|o)s(?!\p{L})/iu;
// kind 'you': addressed to the student; 'me': said by the student; 'reply': an answer to the student;
// 'npc': narration or a line between characters (only «tú» lines count); 'scene': characters talking among themselves.
export function genderProblems(text, kind) {
  const t = String(text ?? '');
  const out = [];
  if (DOUBLET.test(t)) out.push('o/a doublet');
  if (kind === 'scene') return out;
  if (kind !== 'npc' || /(?<!\p{L})tú(?!\p{L})/iu.test(t)) { if (YOU_RE.test(t)) out.push(`gendered «${t.match(YOU_RE)[0]}»`); }
  if (kind === 'npc') return out;
  if (NOUN_YOU.test(t)) out.push(`gendered «${t.match(NOUN_YOU)[0]}»`);
  if (kind === 'me' && ME_RE.test(t)) out.push(`gendered «${t.match(ME_RE)[0]}»`);
  if (TOGETHER.test(t)) out.push(`gendered «${t.match(TOGETHER)[0]}»`);
  return out;
}
// Every text of the class with the role it plays for the student.
export function studentTexts(level, content) {
  const a0 = level === 'A0';
  const es = (v) => (a0 && v && typeof v === 'object' ? v.es : v) ?? '';
  const out = [];
  for (const [id, s] of Object.entries(content ?? {})) {
    out.push([`${level} ${id} line`, es(s.line), 'npc'], [`${level} ${id} ask`, es(s.ask), 'you']);
    for (const [who, line] of s.dialogue ?? []) out.push([`${level} ${id} dialogue ${who}`, es(line), 'npc']);
    (s.options ?? []).forEach((o, i) => out.push([`${level} ${id} option ${i} say`, es(o.say), 'me'], [`${level} ${id} option ${i} reply`, es(o.reply), 'reply'], [`${level} ${id} option ${i} end`, es(o.end), 'npc']));
    (s.talk ?? []).forEach((q, i) => out.push([`${level} ${id} talk ${i}`, es(q), 'you']));
  }
  return out;
}
export function listeningTexts(level, file) {
  const out = [];
  for (const item of file.items) {
    for (const l of item.lines ?? []) out.push([`${level} listening ${item.id} line`, l.text, 'scene']);
    for (const c of item.choice ?? []) { out.push([`${level} listening ${item.id} choice`, c.q, 'you']); for (const o of c.options) out.push([`${level} listening ${item.id} option`, typeof o === 'string' ? o : o.es, 'scene']); }
    for (const o of item.open ?? []) out.push([`${level} listening ${item.id} open`, o.q, 'you'], [`${level} listening ${item.id} model`, o.model, 'me']);
  }
  return out;
}
export function inviteTexts(INVITADOS) {
  const out = [];
  for (const [key, p] of Object.entries(INVITADOS)) {
    out.push([`invitados ${key} basic`, p.basic?.es, 'npc'], [`invitados ${key} mid`, p.mid, 'npc'], [`invitados ${key} high`, p.high, 'npc']);
    out.push([`invitados ${key} basicAsk`, p.basicAsk?.es, 'you'], [`invitados ${key} midAsk`, p.midAsk, 'you'], [`invitados ${key} highAsk`, p.highAsk, 'you']);
  }
  return out;
}
// From B1, questions are open: no «¿A o B?» choices.
export const EITHER_OR = /^¿[^?]*\s(?:o|u)\s[^?]*\?$/u;
const bag = (t) => new Set(String(t).toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/\p{L}{3,}/gu) ?? []);
export function jaccard(a, b) { const x = bag(a), y = bag(b); const inter = [...x].filter((w) => y.has(w)).length; return inter / (new Set([...x, ...y]).size || 1); }
// C2 is not C1 with fancier words: the same talk question at the same place may share at most 30% of its words.
export function c1c2Overlap(c1, c2) {
  const out = [];
  for (const id of Object.keys(c2 ?? {})) (c2[id].talk ?? []).forEach((q, i) => { const j = jaccard(c1?.[id]?.talk?.[i] ?? '', q); if (j >= 0.3) out.push(`C2 ${id} talk ${i}: shares ${Math.round(j * 100)}% of its words with C1 (max 30%); give C2 its own task`); });
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
    if (talk.filter((q) => TRAVEL.test(es(q))).length > 2) bad(at, 'more than 2 of the 5 talk questions stay in the campsite; move them to the student\'s life');
    if (!['A0', 'A1', 'A2'].includes(level)) for (const q of talk) if (EITHER_OR.test(es(q).trim())) bad(at, `talk «${es(q)}» is an either/or question; make it open`);
    const list = Array.isArray(s.words) ? s.words : [];
    if (list.length < 4 || list.length > 6 || !list.every(word)) bad(at, `words needs 4 to 6 entries${a0 || level === 'A1' ? ', each { es, en }' : ''}`);
  }
  for (const [where, text, kind] of studentTexts(level, content)) for (const g of genderProblems(text, kind)) out.push(`${where}: ${g} «${String(text).slice(0, 80)}»; the student has no gender`);
  return out;
}

// The scenes never reach the Worker: levels.mjs must keep the SSR guard.
export function ssrGuardProblems(source = readFileSync('app/lluvia-de-estrellas/levels.mjs', 'utf8')) {
  const out = [];
  if (!/export const LOADERS = import\.meta\.env\?\.SSR \? \{\} : \{/.test(source)) out.push('levels.mjs: LOADERS must start with `import.meta.env?.SSR ? {} : {` so the server build carries no scenes');
  if (/^\s*import\s[^;]*['"]\.\/levels\//m.test(source)) out.push('levels.mjs: a static import of ./levels/ puts the scenes in every bundle; use dynamic import()');
  return out;
}

async function main() {
  const only = process.argv[2]?.toUpperCase();
  const problems = [...ssrGuardProblems()];
  for (const level of LEVEL_IDS) {
    if (only && level !== only) continue;
    const path = `app/lluvia-de-estrellas/levels/${level.toLowerCase()}.mjs`;
    let content;
    try { content = (await import(pathToFileURL(path).href + `?t=${Date.now()}`)).default; }
    catch (error) { problems.push(`${path}: ${error.message}`); continue; }
    problems.push(...checkLevel(level, content));
    for (const f of scanSource(readFileSync(path, 'utf8'), path)) problems.push(`${path}:${f.line}: neutral Spanish guard flags «${f.token}» (${f.kind}); rewrite with tú`);
  }
  // Every guest in the crowd tells a story at three levels.
  const { CROWD } = await import('../app/lluvia-de-estrellas/layout.mjs');
  const { INVITADOS } = await import('../app/lluvia-de-estrellas/invitados.mjs');
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
  const path = 'app/lluvia-de-estrellas/invitados.mjs';
  for (const f of scanSource(readFileSync(path, 'utf8'), path)) problems.push(`${path}:${f.line}: neutral Spanish guard flags «${f.token}» (${f.kind}); rewrite with tú`);
  // No question already asked in another class; listening answers balanced.
  const asked = [];
  for (const level of LEVEL_IDS) {
    const mod = (await import(pathToFileURL(`app/lluvia-de-estrellas/levels/${level.toLowerCase()}.mjs`).href)).default;
    for (const [id, s] of Object.entries(mod)) for (const q of s.talk ?? []) asked.push([typeof q === 'string' ? q : q.es, `${level} ${id} talk`]);
    const file = JSON.parse(readFileSync(`app/escucha-3d/content/estrellas/${level.toLowerCase()}.json`, 'utf8'));
    for (const item of file.items) for (const o of item.open ?? []) asked.push([o.q, `${level} listening ${item.id} open`]);
    problems.push(...choiceBalance(level, file));
  }
  for (const [key, p] of Object.entries(INVITADOS)) for (const k of ['basicAsk', 'midAsk', 'highAsk']) asked.push([typeof p[k] === 'string' ? p[k] : p[k]?.es ?? '', `invitados ${key} ${k}`]);
  problems.push(...crossClassDuplicates(asked));
  for (const [where, text, kind] of inviteTexts(INVITADOS)) for (const g of genderProblems(text, kind)) problems.push(`${where}: ${g} «${String(text).slice(0, 80)}»`);
  for (const level of LEVEL_IDS) {
    const file = JSON.parse(readFileSync(`app/escucha-3d/content/estrellas/${level.toLowerCase()}.json`, 'utf8'));
    for (const [where, text, kind] of listeningTexts(level, file)) for (const g of genderProblems(text, kind)) problems.push(`${where}: ${g} «${String(text).slice(0, 80)}»`);
  }
  const C1 = (await import(pathToFileURL('app/lluvia-de-estrellas/levels/c1.mjs').href)).default, C2 = (await import(pathToFileURL('app/lluvia-de-estrellas/levels/c2.mjs').href)).default;
  problems.push(...c1c2Overlap(C1, C2));
  for (const p of problems) console.error(p);
  console.log(problems.length ? `${problems.length} problems` : 'Lluvia de estrellas: all levels OK');
  process.exitCode = problems.length ? 1 : 0;
}
if (process.argv[1]?.endsWith('check-lluvia-de-estrellas.mjs')) await main();
