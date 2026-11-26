// Checks every Comprensión auditiva file: shape, level length, voices from
// several countries, gap-fill text taken word for word from the audio, and
// neutral Spanish. Usage: node scripts/check-escucha-3d.mjs [game] [level]
// (both case-insensitive; to filter by level alone, pass "" as the game).
import { readFileSync, existsSync } from 'node:fs';
import { GAMES, WORDS, parseGaps, transcriptOf, wordCount } from '../app/escucha-3d/games.mjs';
import { scanSource } from './neutral-spanish.mjs';
import { PROVABLE_KEYS, provableKey } from './check-escucha-3d-provable.mjs';
import { CAST } from '../app/hospital-san-casi-vivo/story.mjs';
import { CAST as VUELO_CAST } from '../app/vuelo-cancelado/story.mjs';
import { CAST as CONSORCIO_CAST } from '../app/el-consorcio/story.mjs';
import { CAST as BODA_CAST } from '../app/la-boda/story.mjs';
import { CAST as TREN_CAST } from '../app/el-tren-de-las-2340/story.mjs';
import { CAST as PAPEL_CAST } from '../app/el-mundo-en-blanco/story.mjs';
import { CAST as HR_CAST } from '../app/hr-crisis/oficina.mjs';
import { CAST as REALITY_CAST } from '../app/la-casa-del-reality/story.mjs';
import { CAST as CRUCERO_CAST } from '../app/ultimo-crucero/story.mjs';
import { CAST as PERDIDOS_CAST } from '../app/objetos-perdidos/story.mjs';
import { CAST as ESTRELLAS_CAST } from '../app/lluvia-de-estrellas/story.mjs';

const voices = JSON.parse(readFileSync('app/escucha-3d/voices.json', 'utf8'));
const [onlyGame, onlyLevel] = process.argv.slice(2);
const problems = [];
const say = (where, message) => problems.push(`${where}: ${message}`);
const text = value => typeof value === 'string' && value.trim().length > 0;
const norm = value => value.normalize('NFC').replace(/\s+/g, ' ').trim();

export function checkFile(game, level, data, path) {
  const out = [];
  const bad = (where, message) => out.push(`${path} ${where}: ${message}`);
  const spec = GAMES[game];
  if (data.game !== game || data.level !== level) bad('', 'game/level fields do not match the file');
  const items = Array.isArray(data.items) ? data.items : [];
  const ids = items.map(item => item.id);
  if (ids.join() !== spec.spots.join()) bad('', `items must be exactly ${spec.spots.join(', ')} in that order (got ${ids.join(', ')})`);
  const countries = new Set(); const genders = new Set(); let dialogues = 0; const answerUse = [0, 0, 0];
  for (const item of items) {
    const at = item.id;
    for (const key of ['title', 'place', 'context']) if (!text(item[key])) bad(at, `missing ${key}`);
    const speakers = Array.isArray(item.speakers) ? item.speakers : [];
    if (speakers.length < 1 || speakers.length > 3) bad(at, 'needs 1 to 3 speakers');
    for (const speaker of speakers) {
      const voice = voices[speaker.voice];
      if (!voice) { bad(at, `unknown voice ${speaker.voice}`); continue; }
      if (speaker.country !== voice.country) bad(at, `${speaker.voice} is from ${voice.country}, not ${speaker.country}`);
      if (!text(speaker.name)) bad(at, 'speaker without name');
      countries.add(voice.country); genders.add(voice.gender);
    }
    if (new Set(speakers.map(s => s.voice)).size !== speakers.length) bad(at, 'two speakers share a voice');
    // The hospital cast keeps one voice per character across every level.
    if (game === 'hospital') for (const speaker of speakers) {
      const member = Object.values(CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the hospital cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    // So does the cast of Vuelo cancelado.
    if (game === 'consorcio') for (const speaker of speakers) {
      const member = Object.values(CONSORCIO_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the El consorcio cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'boda') for (const speaker of speakers) {
      const member = Object.values(BODA_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the La boda cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'tren') for (const speaker of speakers) {
      const member = Object.values(TREN_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the El tren de las 23:40 cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'hr') for (const speaker of speakers) {
      const member = Object.values(HR_CAST).find(c => c.name === speaker.name || c.name.startsWith(`${speaker.name} `));
      if (!member) bad(at, `${speaker.name} is not in the HR Crisis cast (oficina.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'papel') for (const speaker of speakers) {
      const member = Object.values(PAPEL_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the El mundo en blanco cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'reality') for (const speaker of speakers) {
      const member = Object.values(REALITY_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the La casa cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'crucero') for (const speaker of speakers) {
      const member = Object.values(CRUCERO_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the Último crucero cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'perdidos') for (const speaker of speakers) {
      const member = Object.values(PERDIDOS_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the Objetos perdidos cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'estrellas') for (const speaker of speakers) {
      const member = Object.values(ESTRELLAS_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the Lluvia de estrellas cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (game === 'vuelo') for (const speaker of speakers) {
      const member = Object.values(VUELO_CAST).find(c => c.name === speaker.name);
      if (!member) bad(at, `${speaker.name} is not in the Vuelo cancelado cast (story.mjs)`);
      else if (member.voice !== speaker.voice) bad(at, `${speaker.name} speaks with ${member.voice} in this class, not ${speaker.voice}`);
    }
    if (spec.bilingualA0 && level === 'A0') {
      if (!text(item.contextEn)) bad(at, 'A0 needs contextEn');
      if (!(item.lines ?? []).every(line => text(line.en))) bad(at, 'A0: every line needs its English translation in en');
      if (!(item.choice ?? []).every(q => text(q.qEn))) bad(at, 'A0: every choice needs qEn');
      if (!(item.open ?? []).every(q => text(q.qEn))) bad(at, 'A0: every open question needs qEn');
      if (!(item.glossary ?? []).every(g => text(g.en))) bad(at, 'A0: every glossary word needs en');
    }
    if (speakers.length > 1) dialogues += 1;
    const lines = Array.isArray(item.lines) ? item.lines : [];
    if (lines.length < 2) bad(at, 'needs at least 2 lines');
    for (const line of lines) {
      if (!text(line.text)) bad(at, 'empty line');
      if (!Number.isInteger(line.s) || !speakers[line.s]) bad(at, `line speaker ${line.s} does not exist`);
      if (/[[\]]/.test(line.text ?? '')) bad(at, 'brackets inside a line');
    }
    speakers.forEach((_, i) => { if (!lines.some(line => line.s === i)) bad(at, `speaker ${i} never speaks`); });
    const transcript = norm(transcriptOf({ lines: lines.filter(line => text(line.text)) }));
    const words = wordCount(transcript); const [min, max] = WORDS[level];
    if (words < min || words > max) bad(at, `${words} words; ${level} needs ${min}–${max}`);
    const choice = Array.isArray(item.choice) ? item.choice : [];
    if (choice.length !== 4) bad(at, 'needs exactly 4 multiple-choice questions');
    for (const q of choice) {
      if (!text(q.q)) bad(at, 'choice without question');
      if (!Array.isArray(q.options) || q.options.length !== 3 || !q.options.every(text) || new Set(q.options).size !== 3) bad(at, `"${q.q}" needs 3 different options`);
      if (![0, 1, 2].includes(q.answer)) bad(at, `"${q.q}" answer must be 0, 1 or 2`); else answerUse[q.answer] += 1;
    }
    const open = Array.isArray(item.open) ? item.open : [];
    if (open.length !== 3 || !open.every(q => text(q.q) && text(q.model))) bad(at, 'needs exactly 3 open questions with q and model');
    if (!text(item.gaps)) bad(at, 'missing gaps');
    else {
      const { parts, answers } = parseGaps(item.gaps);
      if (answers.length !== 4) bad(at, `gaps needs exactly 4 [words], has ${answers.length}`);
      if (answers.some(a => !text(a) || wordCount(a) > 3)) bad(at, 'each gap is 1 to 3 words');
      const plain = norm(parts.map((part, i) => part + (answers[i] ?? '')).join(''));
      if (!transcript.includes(plain)) bad(at, `gaps text is not word for word in the transcript: "${plain}"`);
    }
    const glossary = Array.isArray(item.glossary) ? item.glossary : [];
    if (glossary.length < 3 || glossary.length > 5) bad(at, 'glossary needs 3 to 5 words');
    for (const g of glossary) {
      if (!text(g.word) || !text(g.meaning)) bad(at, 'glossary entry without word or meaning');
      else if (!transcript.toLocaleLowerCase('es').includes(g.word.toLocaleLowerCase('es'))) bad(at, `glossary word "${g.word}" is not in the transcript`);
    }
  }
  if (countries.size < 6) bad('', `only ${countries.size} countries; use at least 6`);
  if (genders.size < 2) bad('', 'use female and male voices');
  if (dialogues < 4) bad('', `only ${dialogues} dialogues; at least 4 items need 2+ speakers`);
  // At least 6 per letter; a small file (four regions × 4 questions) needs a third each.
  const minUse = Math.min(6, Math.floor(answerUse.reduce((a, b) => a + b, 0) / 3));
  if (answerUse.some(n => n < minUse)) bad('', `correct answers are badly spread over A/B/C: ${answerUse.join('/')}`);
  if (STRICT_KEYS.includes(game)) out.push(...strictKey(level, items).map(m => `${path} ${m}`));
  if (LENGTH_KEYS.includes(game)) out.push(...lengthKey(items).map(m => `${path} ${m}`));
  if (PROVABLE_KEYS.includes(game)) out.push(...provableKey(items, voices).map(m => `${path} ${m}`));
  return out;
}

// Opt-in for new games (older classes are grandfathered): an answer key that
// cannot be guessed. No letter takes more than 40% of the answers, the items
// do not repeat one pattern of letters, the right option is the longest one
// at most 40% of the time, and from C1 every item asks at least two
// inference questions (intention, irony, register, what is implied), marked
// `infer: true`.
export const STRICT_KEYS = ['tren', 'boda', 'papel', 'hr', 'reality', 'crucero', 'perdidos', 'estrellas'];
export function strictKey(level, items) {
  const out = [];
  const qs = items.flatMap(item => (item.choice ?? []).map(q => ({ item: item.id, ...q })));
  if (!qs.length) return out;
  const use = [0, 1, 2].map(k => qs.filter(q => q.answer === k).length);
  if (Math.max(...use) > qs.length * 0.4) out.push(`: answer key leans on one letter (${use.join('/')}); no letter above 40%`);
  const patterns = new Map();
  for (const item of items) { const p = (item.choice ?? []).map(q => q.answer).join(''); patterns.set(p, (patterns.get(p) ?? 0) + 1); }
  const top = Math.max(...patterns.values());
  if (top > 3) out.push(`: ${top} items share the answer pattern ${[...patterns].find(([, n]) => n === top)[0]}; at most 3`);
  const longest = qs.filter(q => { const len = q.options.map(o => o.length); return len.every((l, i) => i === q.answer || l < len[q.answer]); });
  if (longest.length > qs.length * 0.4) out.push(`: the right option is the longest in ${longest.length} of ${qs.length} questions; at most 40% (${longest.slice(0, 8).map(q => `${q.item} «${q.q}»`).join('; ')}…)`);
  if (['C1', 'C2'].includes(level)) for (const item of items) {
    const n = (item.choice ?? []).filter(q => q.infer === true).length;
    if (n < 2) out.push(`${item.id}: ${level} needs at least 2 inference questions (infer: true), has ${n}`);
  }
  return out;
}

// Opt-in from La casa (older games are grandfathered): the length of an
// option gives nothing away. The right option is the middle-length one at
// most 45% of the time, and no option has three words or fewer while the
// other two have seven or more.
export const LENGTH_KEYS = ['reality', 'perdidos', 'estrellas'];
export function lengthKey(items) {
  const out = [];
  const qs = items.flatMap(item => (item.choice ?? []).map(q => ({ item: item.id, ...q })));
  if (!qs.length) return out;
  const words = text => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
  const middle = qs.filter(q => {
    const len = q.options.map(o => o.length);
    const order = [0, 1, 2].sort((a, b) => len[a] - len[b]);
    return order[1] === q.answer && len[order[0]] < len[order[1]] && len[order[1]] < len[order[2]];
  });
  if (middle.length > qs.length * 0.45) out.push(`: the right option is the middle-length one in ${middle.length} of ${qs.length} questions; at most 45%`);
  for (const q of qs) {
    const w = q.options.map(words);
    if (w.some((n, k) => n <= 3 && w.every((m, j) => j === k || m >= 7))) out.push(`${q.item}: «${q.q}» has an option of ${Math.min(...w)} words next to two of 7 or more`);
  }
  return out;
}

// Resolves the optional [game] [level] arguments to the files to check. The
// game and level are case-insensitive (files and docs use b1, GAMES uses B1), and an
// unknown game or level is an error: a filter that matches nothing must never
// print "all files OK".
export function selectTargets(game, level, games = GAMES) {
  const errors = [];
  if (game) game = String(game).toLowerCase();
  const wantLevel = level ? String(level).toUpperCase() : undefined;
  if (game && !Object.hasOwn(games, game)) errors.push(`unknown game «${game}»; known: ${Object.keys(games).join(', ')}`);
  const targets = [];
  for (const [key, spec] of Object.entries(games)) {
    if (game && key !== game) continue;
    for (const l of spec.levels) if (!wantLevel || l === wantLevel) targets.push({ game: key, level: l });
  }
  if (wantLevel && !errors.length && !targets.length) {
    const known = game ? games[game].levels.join(', ') : [...new Set(Object.values(games).flatMap(s => s.levels))].join(', ');
    errors.push(`unknown level «${level}»${game ? ` for ${game}` : ''}; known: ${known}`);
  }
  return { targets: errors.length ? [] : targets, errors };
}

if (process.argv[1]?.endsWith('check-escucha-3d.mjs')) {
  const titles = new Map();
  const { targets, errors } = selectTargets(onlyGame, onlyLevel);
  for (const e of errors) say('arguments', e);
  for (const { game, level } of targets) {
    const path = `app/escucha-3d/content/${game}/${level.toLowerCase()}.json`;
    if (!existsSync(path)) { say(path, 'missing'); continue; }
    const source = readFileSync(path, 'utf8');
    let data; try { data = JSON.parse(source); } catch (error) { say(path, `invalid JSON: ${error.message}`); continue; }
    problems.push(...checkFile(game, level, data, path));
    for (const f of scanSource(source, path)) say(`${path}:${f.line}`, `neutral Spanish guard flags «${f.token}» (${f.kind}); rewrite the sentence`);
    for (const item of data.items ?? []) {
      const key = `${game}:${item.title}`;
      if (titles.has(key)) say(path, `title «${item.title}» repeats ${titles.get(key)}`); else titles.set(key, `${level}/${item.id}`);
    }
  }
  for (const p of problems) console.error(p);
  console.log(problems.length ? `${problems.length} problems` : `Escucha 3D: all files OK (${targets.length} checked)`);
  process.exitCode = problems.length ? 1 : 0;
}
