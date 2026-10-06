import inventory from "./audio-access.json";

const records: Record<string, { levels: string[]; free: boolean }> = inventory;
function recordFor(path: string) {
  const key = /^\/audio\/autoestudio\/([a-f0-9]{16})\.mp3$/.exec(path)?.[1];
  return key && Object.hasOwn(records, key) ? records[key] : undefined;
}

export function isFreeAutoestudioAudio(path: string): boolean {
  return recordFor(path)?.free === true;
}

/** Session must come from verifyShareSession, never from client-supplied headers. */
export function shareAllowsAudio(path: string, session: { level: string } | null): boolean {
  return Boolean(session && recordFor(path)?.levels.includes(session.level));
}
