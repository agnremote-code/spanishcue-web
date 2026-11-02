// Charlas 3D · which questions a conversation circle asks.
// A circle belongs to a person (who gets a role from the world's cast) or to a
// place (a landmark with its own title and themes). Questions come from two
// themes of the bank, interleaved, starting at a point picked by the circle's
// key so that two neighbours never open with the same question.

import { BANCO } from './banco.mjs';
import { CASTS } from './mundos.mjs';

/** 'A0' → a0, A1/A2 → a, B1/B2 → b, C1/C2 → c. Anything unknown is A. */
export function bandOf(level) {
  const l = String(level ?? '').toLowerCase();
  if (l.includes('a0') || l === 'cero') return 'a0';
  if (/\bc[12]\b|^c[12]|alto|avanz/.test(l)) return 'c';
  if (/\bb[12]\b|^b[12]|medio|inter/.test(l)) return 'b';
  return 'a';
}

export function hashKey(key) {
  let h = 7;
  for (const c of String(key)) h = (h * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(h);
}

/** The role of an anonymous person: the same key always gets the same role. */
export function roleFor(world, key) {
  const cast = CASTS[world] ?? CASTS.default;
  return cast[hashKey(key) % cast.length];
}

/** Ten questions (two themes interleaved), rotated by the key. */
export function questionsFor(themes, level, key) {
  const band = bandOf(level);
  const pools = (themes.length ? themes : ['persona']).map(t => (BANCO[t] ?? BANCO.persona)[band]);
  if (pools.length === 1) pools.push(BANCO.persona[band]);
  const shift = hashKey(key);
  const out = [];
  for (let i = 0; i < 5; i++) for (const pool of pools.slice(0, 2)) out.push(pool[(i + shift) % pool.length]);
  return out;
}

/**
 * What a circle shows: title, situation line, questions.
 * @param {{ world: string; key: string; level: string; place?: { title: string; intro?: string; themes: string[] } }} o
 */
export function charlaFor({ world, key, level, place }) {
  if (place) return { title: place.title, intro: place.intro ?? '', questions: questionsFor(place.themes, level, key), band: bandOf(level) };
  const role = roleFor(world, key);
  return { title: role.who, intro: role.line ?? '', questions: questionsFor(role.themes, level, key), band: bandOf(level) };
}
