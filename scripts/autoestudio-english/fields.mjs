// Which learner-facing Spanish strings of an Autoestudio module get an English
// line (levels A1–B2). Answers, options and forms the learner must produce stay
// Spanish-only so the English never gives an exercise away.
export const BILINGUAL_LEVELS = ['a1', 'a2', 'b1', 'b2'];

function exerciseTexts(ex, out) {
  if (!ex) return;
  out.push(ex.title, ex.prompt);
  if (ex.type === 'classify') out.push(...ex.categories);
  if (ex.type === 'match') out.push(ex.why);
  for (const item of ex.items ?? []) itemTexts({ type: ex.type, ...item }, out);
}
function itemTexts(item, out) {
  switch (item.type) {
    case 'choice': case 'context': case 'listen':
      out.push(item.q, item.context, item.why); break;
    case 'gap':
      if (!item.en) out.push(item.q);
      out.push(item.hint, item.why); break;
    case 'order':
      if (!item.en) out.push(item.words.join(' '));
      out.push(item.why); break;
    case 'transform': out.push(item.instruction, item.why); break;
    case 'error': out.push(item.why); break;
    case 'open': out.push(item.prompt, item.model, ...(item.checklist ?? [])); break;
    case 'classify': out.push(item.why); break;
  }
}
const examples = (list, out) => { for (const e of list ?? []) { if (!e.en) out.push(e.es); out.push(e.note); } };

export function moduleTexts(m) {
  const out = [m.title, m.subtitle, ...m.goal.steps];
  if (!m.goal.canDoEn) out.push(m.goal.canDo);
  out.push(m.theory.intro);
  for (const p of m.theory.parts) {
    out.push(p.heading, ...p.body, p.tip, p.table?.caption, ...(p.table?.head ?? []));
    examples(p.examples, out);
    for (const x of p.mistakes ?? []) out.push(x.why);
  }
  for (const block of [m.grammar, m.practice]) { out.push(block.intro); block.exercises.forEach(e => exerciseTexts(e, out)); }
  out.push(m.vocabulary.intro);
  for (const g of m.vocabulary.groups) { out.push(g.title); examples(g.items, out); }
  m.vocabulary.exercises.forEach(e => exerciseTexts(e, out));
  const pr = m.pronunciation;
  out.push(pr.focus, ...pr.explanation, pr.spelling, ...(pr.table?.head ?? []), pr.table?.caption, ...pr.produce.map(p => p.tip));
  examples(pr.examples, out); exerciseTexts(pr.perceive, out);
  const l = m.listening;
  out.push(l.title, l.context, ...l.speakers.map(s => s.role), ...l.script.map(s => s.text));
  for (const s of l.stages) { out.push(s.prompt); exerciseTexts(s.exercise, out); }
  const r = m.reading;
  out.push(r.title, r.genre, r.frame, ...r.text, r.noticing.prompt, ...r.noticing.items.map(i => i.note));
  examples(r.glossary, out); r.tasks.forEach(e => exerciseTexts(e, out));
  const w = m.writing;
  out.push(w.task, w.context, ...w.steps, ...w.model, ...w.checklist);
  out.push(m.speaking.intro);
  for (const t of m.speaking.tasks) out.push(t.title, t.prompt, ...(t.prep ?? []), t.model, ...(t.selfCheck ?? []));
  out.push(m.useInClass.intro, m.useInClass.bring);
  for (const c of m.useInClass.cards) out.push(c.task);
  for (const q of m.quiz.items) itemTexts(q, out);
  out.push(...m.complete.canNow, ...m.complete.review, ...(m.related ?? []).map(r => r.label));
  return [...new Set(out.filter(t => typeof t === 'string' && /\p{L}/u.test(t)))];
}

/** Why an English line is unusable for its Spanish source (empty list = fine). */
export function problems(es, en) {
  const out = [];
  if (typeof en !== 'string' || !en.trim()) return ['empty'];
  const count = (s, re) => (s.match(re) || []).length;
  if (count(es, /___/g) !== count(en, /___/g)) out.push('gaps');
  if (count(es, /`/g) !== count(en, /`/g)) out.push('backticks');
  if (count(es, /\*\*/g) % 2 !== count(en, /\*\*/g) % 2 || count(en, /\*\*/g) % 2) out.push('bold');
  return out;
}


/** Same as app/autoestudio/english/key.ts (FNV-1a, base 36). */
export function englishKey(text) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index++) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36);
}
