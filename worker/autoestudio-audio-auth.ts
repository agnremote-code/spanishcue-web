import { shareAllowsAudio } from "../app/autoestudio/audio-access";
import { verifyShareSession, type ShareEnvironment } from "../app/autoestudio/share/server";

/** Adds only the existing verified teacher-pass entitlement to recorded course audio. */
export async function hasAutoestudioAudioAccess(request: Request, env: ShareEnvironment): Promise<boolean> {
  let path: string;
  try { path = decodeURIComponent(new URL(request.url).pathname); } catch { return false; }
  if (!/^\/audio\/autoestudio\/[a-f0-9]{16}\.mp3$/.test(path)) return false;
  const session = await verifyShareSession(request.headers.get("cookie"), env).catch(() => null);
  return shareAllowsAudio(path, session);
}
