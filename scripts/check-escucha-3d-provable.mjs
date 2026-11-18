// BOARD-DECISION-006 §3.2–§3.3 lint (docs/board/decisions/
// BOARD-DECISION-006-provable-listening-gate.md): the machine-checkable part
// of the provable listening gate. Opt-in for NEW board worlds only; older
// worlds are grandfathered and never reopened by this rule.
//
// What it checks, per item:
// - every gap is one whole word (no multi-word gaps);
// - no gap word ends in -s (the final -s seed was the one the speech-to-text
//   check missed, so items that could hinge on it are forbidden; this also
//   excludes invariable words such as «jueves» or «más», a cost the decision
//   accepts);
// - no gap word is capitalised mid-sentence (proper names are forbidden as
//   gap words);
// - each clip has one speaker, or exactly one woman and one man (same-gender
//   or 3+ speaker clips would give an unproven speaker PASS).
//
// What it cannot see, and the LQG file must attest in text (§3.2): gender,
// person, mood or consonant minimal pairs of gap words and correct options,
// proper names as correct options, and options that hinge on «no», «ya» or
// «sí».
import { parseGaps } from '../app/escucha-3d/games.mjs';

export const PROVABLE_KEYS = [];

const WORD = /^[\p{L}]+$/u;

function midSentence(before) {
  // Text before the gap inside the gap sentence: the gap starts a sentence
  // when nothing but opening punctuation follows the last sentence end.
  const tail = before.replace(/[\s¿¡«"“(—-]+$/u, '');
  return tail.length > 0 && !/[.!?…:]$/u.test(tail);
}

export function provableKey(items, voices) {
  const out = [];
  for (const item of items ?? []) {
    const at = item.id;
    const speakers = Array.isArray(item.speakers) ? item.speakers : [];
    if (speakers.length > 2) out.push(`${at}: BOARD-DECISION-006 §3.3 allows 1 speaker or one woman and one man per clip, not ${speakers.length}`);
    if (speakers.length === 2) {
      const genders = speakers.map(s => voices[s.voice]?.gender);
      if (genders[0] && genders[0] === genders[1]) out.push(`${at}: BOARD-DECISION-006 §3.3 forbids two same-gender speakers in one clip (${speakers.map(s => s.name).join(', ')})`);
    }
    if (typeof item.gaps !== 'string') continue;
    const { parts, answers } = parseGaps(item.gaps);
    let before = '';
    answers.forEach((raw, i) => {
      before += parts[i] ?? '';
      const word = String(raw).trim();
      if (!WORD.test(word)) out.push(`${at}: gap «${word}» must be one whole word (BOARD-DECISION-006 §3.2)`);
      else {
        if (/s$/iu.test(word)) out.push(`${at}: gap «${word}» ends in -s (BOARD-DECISION-006 §3.2 lint)`);
        if (word[0] !== word[0].toLocaleLowerCase('es') && midSentence(before)) out.push(`${at}: gap «${word}» is capitalised mid-sentence; proper names cannot be gap words (BOARD-DECISION-006 §3.3)`);
      }
      before += raw;
    });
  }
  return out;
}
