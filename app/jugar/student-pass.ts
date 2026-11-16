// SpanishCue · Jugar: the teacher's pass. A student who opened their teacher's
// link (/s/<token>, the Autoestudio pass) also plays the PRO 3D worlds of the
// hub while that teacher keeps full access. Nothing else of the library opens:
// only the worlds listed in worlds.mjs, their protected chunks and the
// listening audio of the 3D worlds. Imported by the Worker and the private
// asset gate; never by a client component.
import { isFreeLesson } from "../access-policy";
import { verifyShareOwner, type ShareEnvironment, type ShareSession } from "../autoestudio/share/server";
import { ownerIdentityFromEnvironment } from "../firebase-session";
import type { FirebaseUser } from "../firebase-session";
import { resolveFirebaseAccount } from "../../db/accounts";
import { HUB_PATH, HUB_WORLDS } from "./worlds.mjs";

export type StudentPassEnvironment = ShareEnvironment & { CHESPANISH_OWNER_UID?: string; CHESPANISH_OWNER_EMAIL?: string };

/** Verified display headers the Worker recreates on every request. */
export const STUDENT_PASS_HEADER = "x-spanishcue-student-pass";
export const STUDENT_ALIAS_HEADER = "x-spanishcue-student-alias";

/** Listening clips of the 3D worlds (public/audio/escucha-3d). */
export const STUDENT_AUDIO_PREFIX = "escucha-3d";

const studentWorldIds = new Set(HUB_WORLDS.filter((world) => !isFreeLesson(world.id)).map((world) => world.id));

/** A PRO class the pass opens: a hub world that is not already free. */
export const isStudentWorldLesson = (id: number | null | undefined) => typeof id === "number" && studentWorldIds.has(id);
export const studentWorldLessonIds = () => [...studentWorldIds];

export const isStudentAudioPath = (pathname: string) => pathname.startsWith(`/audio/${STUDENT_AUDIO_PREFIX}/`);

/** Paths where the Worker looks for a pass at all: the hub, its PRO worlds and their audio. */
export function studentPassScope(pathname: string, lessonId: number | null | undefined) {
  return pathname === HUB_PATH || isStudentWorldLesson(lessonId) || isStudentAudioPath(pathname);
}

/**
 * The student's verified pass, only while the teacher who issued it has full
 * access (PRO or owner). A revoked or rotated pass, a pass still waiting for
 * its name, or a teacher who is no longer PRO gives null.
 */
export async function studentWorldPass(cookieHeader: string | null, env: StudentPassEnvironment): Promise<ShareSession | null> {
  if (!cookieHeader || !env.DB || !env.AUTOESTUDIO_SHARE_SECRET) return null;
  const pass = await verifyShareOwner(cookieHeader, env);
  if (!pass) return null;
  if (pass.ownerId === ownerIdentityFromEnvironment(env).uid) return pass.session;
  const teacher = await resolveFirebaseAccount(env.DB, { uid: pass.ownerId } as FirebaseUser);
  return teacher?.status === "active" && teacher.accessLevel === "full" ? pass.session : null;
}

/** Erase every browser-supplied pass header, then add only the verified ones. */
export function applyStudentPassHeaders(headers: Headers, session: ShareSession | null): void {
  headers.delete(STUDENT_PASS_HEADER);
  headers.delete(STUDENT_ALIAS_HEADER);
  if (!session) return;
  headers.set(STUDENT_PASS_HEADER, "1");
  headers.set(STUDENT_ALIAS_HEADER, encodeURIComponent(session.alias));
}

export const studentPassFromHeaders = (headers: Headers) => headers.get(STUDENT_PASS_HEADER) === "1";
export function studentAliasFromHeaders(headers: Headers) {
  try { return decodeURIComponent(headers.get(STUDENT_ALIAS_HEADER) ?? "").slice(0, 24); } catch { return ""; }
}
