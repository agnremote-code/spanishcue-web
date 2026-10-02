export type SubmissionIdentity = { key: string; fingerprint: string };
/** An uncertain response may have persisted. Retry unchanged payloads with the
 * same key; edited payloads are new submissions and must not silently dedupe. */
export function submissionIdentity(previous: SubmissionIdentity | null, payload: unknown): SubmissionIdentity {
  const fingerprint=JSON.stringify(payload);
  return previous?.fingerprint===fingerprint?previous:{key:crypto.randomUUID(),fingerprint};
}
