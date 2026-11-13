/**
 * Rule-based review of a learner's text for lesson 230's structures. It only
 * looks for desde / desde hace / hace and their typical mistakes; it never
 * claims to correct anything else.
 */
const number = '(?:un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|quince|veinte|treinta|unos|unas|muchos|muchas|varios|varias|pocos|pocas|algunos|algunas|\\d+)';
const unit = '(?:segundos?|minutos?|horas?|d[ií]as?|semanas?|mes|meses|años?|siglos?)';
const quantity = `(?:${number}\\s+(?:\\w+\\s+)?${unit}|mucho tiempo|poco tiempo|un rato|un tiempo|tiempo)`;
const moment = '(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre|\\d{4}|lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo|ayer|anteayer|entonces|que|el|la|los|las|mi|mis|niño|niña|pequeño|pequeña)';
// «-amos/-imos» are left out: they are also present tense (vivimos aquí desde…).
// Only used with .test(): «start of text or a non-letter» stands in for a lookbehind,
// which Safari before 16.4 cannot parse.
const preterite = /(?:^|[^\p{L}])(?!(?:café|bebé|josé|puré|comité|chalé|olé|dominó)(?!\p{L}))(?:\p{L}+(?:é|ó|aste|iste|ieron|aron)|fui|fue|fuimos|tuve|tuvo|hice|hizo|vine|vino|estuve|estuvo|pude|puso|puse|dije|dijo|supe|quise|vi|vio|di|dio)(?!\p{L})/iu;

const re = (source: string) => new RegExp(source, 'i');
const desdeMoment = re(`\\bdesde\\s+(?!hace\\b)${moment}\\b[^,.;!?]*`);
const desdeQuantity = re(`\\bdesde\\s+(?!hace\\b)${quantity}`);
const desdeHace = re(`\\bdesde\\s+hace\\s+${quantity}`);
const desdeHaceMoment = re(`\\bdesde\\s+hace\\s+(?:${moment.replace('|que|el|la|los|las|mi|mis', '')})\\b`);
const haceQue = re(`\\bhace\\s+${quantity}\\s+que\\b`);
// «hace + cantidad» not preceded by «desde », without a lookbehind.
const haceAny = new RegExp(`(desde\\s)?\\bhace\\s+${quantity}(?!\\s+que\\b)`, 'gi');
function withoutBareHace(sentence: string): string | null {
  haceAny.lastIndex = 0;
  for (let match = haceAny.exec(sentence); match; match = haceAny.exec(sentence)) {
    if (!match[1]) return sentence.slice(0, match.index) + sentence.slice(match.index + match[0].length);
  }
  return null;
}
const porQuantity = re(`\\bpor\\s+${quantity}`);

import type { WritingCheck, WritingWarning } from './types';

export type WritingReview = { uses: { label: string; found?: string; tip: string }[]; problems: { text: string; why: string }[] };

// No lookbehind literals here: Safari before 16.4 cannot parse them, and one
// in a client chunk stops the whole class from loading on those devices.
const sentencesOf = (text: string) => text.replace(/([.!?¡¿\n])/g, '$1\u0000').split('\u0000').map(s => s.trim()).filter(Boolean);

// Lesson patterns use a negative lookbehind on \p{L} as a word boundary. Where the browser cannot
// compile that, fall back to an equivalent without lookbehind.
function rule(pattern: string): RegExp {
  try { return new RegExp(pattern, 'iu'); } catch {
    try { return new RegExp(pattern.replace(/\(\?<!\\p\{L\}\)/g, '(?:^|[^\\p{L}])'), 'iu'); } catch { return /$^/; }
  }
}

export function reviewWriting(text: string): WritingReview {
  const sentences = sentencesOf(text);
  let start: string | undefined, duration: string | undefined, event: string | undefined;
  const problems: WritingReview['problems'] = [];
  for (const sentence of sentences) {
    if (desdeQuantity.test(sentence)) problems.push({ text: sentence, why: 'Después de «desde» va un momento. Con una cantidad de tiempo, usa «desde hace»: «desde hace dos años».' });
    else if (!start && desdeMoment.test(sentence)) start = sentence;
    if (desdeHaceMoment.test(sentence)) problems.push({ text: sentence, why: 'Con una fecha o un mes, usa solo «desde»: «desde marzo», «desde 2024».' });
    else if (desdeHace.test(sentence)) {
      if (preterite.test(sentence.replace(desdeHace, ''))) problems.push({ text: sentence, why: 'Para un hecho terminado (llegué, empecé) usa «hace» sin «desde»: «Llegué hace dos años».' });
      else if (!duration) duration = sentence;
    }
    if (!duration && haceQue.test(sentence)) duration = sentence;
    const rest = event ? null : withoutBareHace(sentence);
    if (rest !== null && preterite.test(rest)) event = sentence;
    if (porQuantity.test(sentence) && !preterite.test(sentence)) problems.push({ text: sentence, why: 'Para algo que sigue hoy, no uses «por»: di «desde hace dos años» o «hace dos años que…».' });
  }
  return {
    uses: [
      { label: 'Desde + un momento', found: start, tip: 'Di desde cuándo: «Vivo aquí desde marzo».' },
      { label: 'Desde hace / hace… que + una cantidad', found: duration, tip: 'Di cuánto tiempo lleva algo: «Trabajo aquí desde hace un año».' },
      { label: 'Hace + un hecho terminado', found: event, tip: 'Cuenta algo que pasó: «Llegué hace seis meses».' },
    ],
    problems,
  };
}

/** The same review shape driven by a lesson's own patterns (see the `write` block). */
export function reviewWithRules(text: string, checks: WritingCheck[], warnings: WritingWarning[] = []): WritingReview {
  const sentences = sentencesOf(text);
  const find = (pattern: string) => { const regex = rule(pattern); return sentences.find(sentence => regex.test(sentence)); };
  return {
    uses: checks.map(check => ({ label: check.label, found: find(check.pattern), tip: check.tip })),
    problems: warnings.flatMap(warning => { const regex = rule(warning.pattern); return sentences.filter(sentence => regex.test(sentence)).map(sentence => ({ text: sentence, why: warning.why })); }),
  };
}
