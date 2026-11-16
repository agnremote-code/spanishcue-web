import { resolveFirebaseAccount } from "../db/accounts";
import {
  firebaseTokenFromHeaders,
  getFirebaseUserFromHeaders,
  isOwnerUser,
  ownerIdentityFromEnvironment,
} from "../app/firebase-session";
import { GIFT_AUDIO_PATH } from "../app/newsletter/gift";
import { hasGift } from "../app/newsletter/server";
import { isStudentAudioPath, studentWorldPass } from "../app/jugar/student-pass";
import { isHomeworkTopicAudio } from "../app/autoestudio/topics";
import { verifyShareSession } from "../app/autoestudio/share/server";

type PrivateAssetEnv = {
  DB: D1Database;
  CHESPANISH_OWNER_UID?: string;
  CHESPANISH_OWNER_EMAIL?: string;
  AUTOESTUDIO_SHARE_SECRET?: string;
};

export async function hasFullLibraryAccess(
  request: Request,
  env: PrivateAssetEnv,
): Promise<boolean> {
  if (!firebaseTokenFromHeaders(request.headers)) return false;
  const user = await getFirebaseUserFromHeaders(request.headers);
  if (!user) return false;
  if (isOwnerUser(user, ownerIdentityFromEnvironment(env))) return true;
  try {
    const account = await resolveFirebaseAccount(env.DB, user);
    return account?.status === "active" && account.accessLevel === "full";
  } catch {
    return false;
  }
}

/** Private media gate: PRO/owner, the newsletter gift cookie for the gift class audio only, or a student pass for a Homework topic recording only. */
export async function mayReadPrivateMedia(
  request: Request,
  env: PrivateAssetEnv,
  path: string,
): Promise<boolean> {
  if (path === GIFT_AUDIO_PATH && await hasGift(request.headers.get("cookie"), env.AUTOESTUDIO_SHARE_SECRET).catch(() => false)) return true;
  // A Homework topic's own recording also opens for a student with a valid pass.
  if (isHomeworkTopicAudio(path) && await verifyShareSession(request.headers.get("cookie"), env).catch(() => null)) return true;
  return hasFullLibraryAccess(request, env);
}

/**
 * Teacher's pass gate (app/jugar/student-pass.ts): a student with a valid pass
 * from a teacher who still has PRO reads the chunks of the hub's 3D worlds
 * (flagged at build time) and the listening audio of the 3D worlds. Nothing else.
 */
export async function mayReadStudentAsset(
  request: Request,
  env: PrivateAssetEnv,
  path: string,
  studentChunk: boolean,
): Promise<boolean> {
  if (!studentChunk && !isStudentAudioPath(path)) return false;
  return Boolean(await studentWorldPass(request.headers.get("cookie"), env).catch(() => null));
}
