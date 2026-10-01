/** Answer checking and deterministic helpers shared by the engine. */

export const stripAccents = (value: string) => value.normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Lowercase, trim, collapse spaces and drop surrounding punctuation. Keeps accents and ñ. */
export function normalizeAnswer(value: string): string {
  return value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[¿?¡!.,;:«»"“”()…]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type Verdict = "correct" | "accent" | "wrong";

/** Exact match, or "accent" when only accents/ñ differ, which is feedback-worthy at every level. */
export function checkAnswer(given: string, accepted: readonly string[]): Verdict {
  const answer = normalizeAnswer(given);
  if (!answer) return "wrong";
  if (accepted.some((candidate) => normalizeAnswer(candidate) === answer)) return "correct";
  const loose = stripAccents(answer).replace(/ñ/g, "n");
  if (accepted.some((candidate) => stripAccents(normalizeAnswer(candidate)).replace(/ñ/g, "n") === loose)) return "accent";
  return "wrong";
}

function hash(value: string): number {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

/** Deterministic shuffle so server and client render the same order. Never returns the identity order for 3+ items. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const result = [...items];
  let state = hash(seed) || 1;
  const random = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 10000) / 10000;
  };
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  if (result.length > 2 && result.every((item, index) => item === items[index])) {
    result.push(result.shift() as T);
  }
  return result;
}

export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}
