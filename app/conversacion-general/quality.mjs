// Conversation quality rules (Ale, 2026-11-10: «We are not creating more
// questions. We are creating better conversations.»). Pure checks for ONE open
// conversation question addressed to the learner, used by
// scripts/conversation-quality.mjs to audit every conversation in SpanishCue
// (classic lessons and the questions inside 3D worlds).
//
// The rules mirror Ale's brief:
//   A · no artificially specific situations (an aunt's wedding ten years ago)
//   B · one main idea per question (no stacked questions)
//   C/F · it invites the learner to explain, compare, remember or tell
//   D · no yes/no closer with one obvious answer (B1 and up)
//   E · not the same question as another one on the platform (see the index)
//   + level-appropriate length, no Portuguese/English mixing, no «pide al alumno».
import { WORD_LIMITS, wordsOf } from './audit.mjs';

export { WORD_LIMITS };

// Rule A: a question that stacks a precise relative, a precise moment and a
// precise event asks the learner to imagine a scene they never lived.
const RELATIVE = /\b(t[ií]as?|t[ií]os?|primos?|primas?|cuñad[oa]s?|suegr[oa]s?|sobrin[oa]s?|abuel[oa]s?|vecin[oa]s? del (?:quinto|tercero|segundo|cuarto))\b/iu;
const PRECISE_MOMENT = /\b(hace (?:diez|veinte|quince|cinco|tres|dos|\d+) a[ñn]os|en tu [uú]ltimo cumplea[ñn]os|el (?:martes|lunes|miércoles|jueves|viernes|sábado|domingo) pasado|a las \d|el a[ñn]o pasado en|la [uú]ltima vez que (?:fuiste|estuviste) en (?:la|el) (?:boda|estaci[oó]n|cumplea[ñn]os))\b/iu;
const PRECISE_EVENT = /\b(boda|bautizo|funeral|cumplea[ñn]os|graduaci[oó]n|estaci[oó]n de tren|aeropuerto de)\b/iu;

// Rule B: more than two question words, or three clauses joined by «y».
const QWORD = /(?<![\p{L}])(qué|cómo|cuándo|dónde|quién(?:es)?|cuál(?:es)?|cuánt[oa]s?)(?![\p{L}])/giu;

// Rule D: closed openers that admit «sí/no» and stop the conversation.
const CLOSED = /^¿(Te gusta|Te gustan|Tienes|Puedes|Sabes|Estás|Has)\b[^?]*\?$/u;

// Language mixing inside a Spanish question.
const PORTUGUESE = /(?<!\p{L})(voc[eê]|n[aã]o|muito|fazer|obrigad[oa]|tamb[eé]m|cora[cç][aã]o|ent[aã]o|ainda|isso|aquilo|gosta)(?!\p{L})|ção(?!\p{L})|ções(?!\p{L})/iu;
const ENGLISH = /\b(the|you|your|what|would|which|people|because|really|think|about|with|have|do you)\b/iu;

// Teacher-mode text is read by the student.
const TEACHER_ORDER = /pide al alumno|p[ií]dele al alumno|el alumno debe|haz que el alumno/iu;

const levelLimits = (level) => WORD_LIMITS[level] ?? WORD_LIMITS.C2;

/** The problems of one learner-facing conversation question at `level` (A0–C2). Empty = it passes. */
export function questionProblems(text, level = 'B1') {
  const out = [];
  const t = String(text).trim();
  const words = wordsOf(t).length;
  const [, max] = levelLimits(level);
  // A little slack over the 3D limits: classic lessons give a short setup.
  if (words > max + 4) out.push(`long:${words}>${max}`);
  if (RELATIVE.test(t) && PRECISE_EVENT.test(t)) out.push('specific:relative+event');
  if (PRECISE_MOMENT.test(t) && (PRECISE_EVENT.test(t) || RELATIVE.test(t))) out.push('specific:moment');
  const qwords = (t.match(QWORD) ?? []).length;
  if ((t.match(/¿/g) ?? []).length > 2) out.push('stacked:3+ questions');
  else if (qwords >= 4) out.push(`stacked:${qwords} question words`);
  const joined = (t.match(/,?\s+y\s+(?:por )?(?:qué|cómo|dónde|cuándo|quién|cuál)(?![\p{L}])/giu) ?? []).length;
  // Two linked parts are natural from B2 up («¿Qué sueño abandonaste y qué apareció en su lugar?»).
  if (joined >= 2 || (joined === 1 && words > 12 && ['A0', 'A1', 'A2', 'B1'].includes(level))) out.push('stacked:two questions in one');
  if (!['A0', 'A1', 'A2'].includes(level) && CLOSED.test(t) && words <= 6) out.push('closed:yes-no');
  if (PORTUGUESE.test(t)) out.push('lang:portuguese');
  if (ENGLISH.test(t)) out.push('lang:english');
  if (TEACHER_ORDER.test(t)) out.push('teacher-order');
  if (/\s{2,}|\?\s*\?|¿\s|\s\?/.test(t)) out.push('typography');
  return out;
}

/** Whether a «¿…?» speaks to the learner (an open conversation prompt) rather than about a story. */
export const SECOND_PERSON = /\b(t[uú]|tus?|te|ti|contigo|usted(?:es)?|vos|crees|piensas|prefieres|preferir[ií]as|har[ií]as|elegir[ií]as|recuerdas|sueles|conoces|has|tienes|eres|est[aá]s|puedes|sabes|quieres|te gustar[ií]a|dir[ií]as|cambiar[ií]as|cuentas|vives|trabajas|sientes|opinas|consideras|valoras)\b/iu;
