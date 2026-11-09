/** getRandomValues also works on HTTP local preview; randomUUID requires HTTPS.
 * This key deduplicates retries. It is never used as an authentication secret. */
export function newPartnerRequestKey(source:Pick<Crypto,'getRandomValues'>=crypto) {
 return Array.from(source.getRandomValues(new Uint8Array(16)),value=>value.toString(16).padStart(2,'0')).join('');
}
