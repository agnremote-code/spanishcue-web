/**
 * Week dictionaries are keyed by a short hash of the Spanish text (FNV-1a,
 * base 36) so the Worker does not carry every Spanish line twice.
 * scripts/autoestudio-english/fields.mjs mirrors this function.
 */
export function englishKey(text: string): string {
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index++) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36);
}

export function englishLine(english: Readonly<Record<string, string>> | undefined, text: string): string | undefined {
  return english?.[englishKey(text)];
}
