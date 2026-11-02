// The index of every Spanish question SpanishCue already asks, in every class
// (conversation, grammar, 3D worlds, listening, homework…): every «¿…?» in the
// source under app/. New classes check their questions against it so that no
// question is ever asked twice across the site (Ale, 2026-11-02).
//
//   node scripts/question-index.mjs            → how many questions, by folder
//   node scripts/question-index.mjs "¿Texto?"  → the closest existing questions
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { normalize, similarity, NEAR_DUPLICATE } from '../app/conversacion-general/audit.mjs';

export { NEAR_DUPLICATE };
const QUESTION = /¿[^?¿"`\n]{4,400}\?/g;
const STOP = new Set('a al algo alguien alguna alguno algunas algunos como con cual cuales cuando de del donde el ella ellos en entre era es esa ese eso esta este esto fue ha haces hay la las le les lo los mas me mi mis muy no o para pero por porque que quien se si sin sobre su sus te tener tienes tu tus un una uno unos y ya yo vez veces ti'.split(' '));
const content = (text) => [...new Set(normalize(text).split(' ').filter((w) => w.length > 2 && !STOP.has(w)))];

/** Every question under `root`/app, skipping the folders in `exclude` (a class never collides with itself). */
export function buildIndex({ root = '.', exclude = [] } = {}) {
  const questions = []; const seen = new Map();
  const skip = exclude.map((d) => join(root, d));
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (skip.some((d) => path === d || path.startsWith(d + '/'))) continue;
      if (statSync(path).isDirectory()) { if (name !== 'node_modules' && !name.startsWith('.')) walk(path); continue; }
      if (!/\.(tsx?|mjs|js|json)$/.test(name)) continue;
      for (const m of readFileSync(path, 'utf8').matchAll(QUESTION)) {
        const key = normalize(m[0]);
        if (!key) continue;
        const where = relative(root, path).split('/').slice(0, 2).join('/');
        if (seen.has(key)) { seen.get(key).where.add(where); continue; }
        const q = { text: m[0], key, words: content(m[0]), where: new Set([where]) };
        seen.set(key, q); questions.push(q);
      }
    }
  };
  walk(join(root, 'app'));
  const byWord = new Map();
  questions.forEach((q, i) => { for (const w of q.words) { if (!byWord.has(w)) byWord.set(w, []); byWord.get(w).push(i); } });
  return { questions, byKey: seen, byWord };
}

/** The existing question that `text` repeats (same words, or near-duplicate), or null. */
export function repeats(index, text) {
  const key = normalize(text);
  if (index.byKey.has(key)) return { ...index.byKey.get(key), score: 1 };
  let best = null;
  const tried = new Set();
  for (const w of content(text)) for (const i of index.byWord.get(w) ?? []) {
    if (tried.has(i)) continue; tried.add(i);
    const q = index.questions[i];
    const score = similarity(text, q.text);
    if (score >= NEAR_DUPLICATE && (!best || score > best.score)) best = { ...q, score };
  }
  return best;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const index = buildIndex();
  const probe = process.argv[2];
  if (probe) {
    const hit = repeats(index, probe);
    console.log(hit ? `REPITE (${hit.score.toFixed(2)}): ${hit.text} · ${[...hit.where].join(', ')}` : 'nueva');
  } else {
    const by = new Map();
    for (const q of index.questions) for (const w of q.where) by.set(w, (by.get(w) ?? 0) + 1);
    console.log(`${index.questions.length} preguntas distintas en ${by.size} carpetas`);
  }
}
