// Editorial checks for a classic conversation class at one level: a short
// intro and a bank of six categories, each with five open questions about the
// student's own life and two to four sentence starters. A0 and A1 carry the
// English under every Spanish line. Pure: scripts/check-clasicas.mjs and the
// tests run it, together with the site-wide question index.
import { WORD_LIMITS, similarity, NEAR_DUPLICATE, normalize } from '../conversacion-general/audit.mjs';

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const CATEGORIAS = 6;
export const PER_CATEGORIA = 5;

const isText = (v) => typeof v === 'string' && v.trim().length > 0;
const count = (t) => (String(t).match(/[\p{L}\p{N}]+/gu) ?? []).length;
const es = (v) => (typeof v === 'string' ? v : v?.es ?? '');
// One open question, optionally a second short one or a short spoken prompt.
const isQuestion = (t) => /^¿[^¿?]+\?(\s+¿[^¿?]+\?)?(\s+[A-ZÁÉÍÓÚÑ][^¿?]{2,120}\.)?$/u.test(t.trim());
export const bilingual = (level) => level === 'A0' || level === 'A1';

export function questionsOf(level, lesson) {
  return (lesson?.categorias ?? []).flatMap((c) => c.questions ?? []).map(es);
}

export function checkLevel(level, lesson) {
  const out = [];
  const bad = (where, m) => out.push(`${level} ${where}: ${m}`);
  if (!lesson) return [`${level}: missing`];
  const bi = bilingual(level) ? (v) => Boolean(v && isText(v.es) && isText(v.en)) : isText;
  const kind = bilingual(level) ? '{ es, en }' : 'Spanish text';
  if (!bi(lesson.intro)) bad('intro', `missing or not ${kind}`);
  else if (/pide al alumno|pídele|el alumno debe/i.test(es(lesson.intro))) bad('intro', 'the student reads it: never «pide al alumno…»');
  const [min, max] = WORD_LIMITS[level];
  const cats = lesson.categorias;
  if (!Array.isArray(cats) || cats.length !== CATEGORIAS) bad('categorias', `needs ${CATEGORIAS}`);
  (cats ?? []).forEach((c, i) => {
    const at = `categoría ${i + 1}`;
    if (!isText(c.icon)) bad(at, 'icon');
    if (!bi(c.title)) bad(at, `title not ${kind}`);
    if (!Array.isArray(c.questions) || c.questions.length !== PER_CATEGORIA) bad(at, `needs ${PER_CATEGORIA} questions`);
    (c.questions ?? []).forEach((q, j) => {
      const where = `${at} #${j + 1}`;
      if (!bi(q)) return bad(where, `not ${kind}`);
      const t = es(q);
      if (!isQuestion(t)) bad(where, `not one open question: ${t}`);
      const n = count(t);
      if (n < min || n > max) bad(where, `${n} words (${min}–${max}): ${t}`);
      if (!bilingual(level) && /^¿(Te gusta|Tienes|Eres|Es|Hay|Puedes)\b[^?]*\?$/u.test(t)) bad(where, `yes/no question that closes the conversation: ${t}`);
    });
    if (!Array.isArray(c.starters) || c.starters.length < 2 || c.starters.length > 4 || !c.starters.every(bi)) bad(at, `2–4 starters as ${kind}`);
  });
  return out;
}

/** No question twice inside one class, at any level, nor two that ask the same thing. */
export function checkClass(content) {
  const out = [];
  const all = LEVEL_IDS.flatMap((level) => questionsOf(level, content?.[level]).map((text) => ({ level, text })));
  const keys = new Map();
  for (const q of all) {
    const k = normalize(q.text);
    if (keys.has(k)) out.push(`${q.level}: repeats ${keys.get(k)}: ${q.text}`); else keys.set(k, q.level);
  }
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
    if (similarity(all[i].text, all[j].text) >= NEAR_DUPLICATE) out.push(`${all[j].level} «${all[j].text}» asks the same as ${all[i].level} «${all[i].text}»`);
  }
  return out;
}
