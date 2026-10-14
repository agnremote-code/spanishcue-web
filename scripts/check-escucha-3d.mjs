// Checks every Comprensión auditiva file: shape, level length, voices from
// several countries, gap-fill text taken word for word from the audio, and
// neutral Spanish. Usage: node scripts/check-escucha-3d.mjs [game] [level]
import { readFileSync, existsSync } from 'node:fs';
import { GAMES, WORDS, parseGaps, transcriptOf, wordCount } from '../app/escucha-3d/games.mjs';
import { scanSource } from './neutral-spanish.mjs';

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
  if (answerUse.some(n => n < 6)) bad('', `correct answers are badly spread over A/B/C: ${answerUse.join('/')}`);
  return out;
}

if (process.argv[1]?.endsWith('check-escucha-3d.mjs')) {
  const titles = new Map();
  for (const [game, spec] of Object.entries(GAMES)) {
    if (onlyGame && game !== onlyGame) continue;
    for (const level of spec.levels) {
      if (onlyLevel && level !== onlyLevel) continue;
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
  }
  for (const p of problems) console.error(p);
  console.log(problems.length ? `${problems.length} problems` : 'Escucha 3D: all files OK');
  process.exitCode = problems.length ? 1 : 0;
}
