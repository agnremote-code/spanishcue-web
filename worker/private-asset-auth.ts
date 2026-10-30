import { resolveFirebaseAccount } from "../db/accounts";
import {
  firebaseTokenFromHeaders,
  getFirebaseUserFromHeaders,
  isOwnerUser,
  ownerIdentityFromEnvironment,
} from "../app/firebase-session";
import { GIFT_AUDIO_PATH } from "../app/newsletter/gift";
import { hasGift } from "../app/newsletter/server";

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

/** Private media gate: PRO/owner, or the newsletter gift cookie for the gift class audio only. */
export async function mayReadPrivateMedia(
  request: Request,
  env: PrivateAssetEnv,
  path: string,
): Promise<boolean> {
  if (path === GIFT_AUDIO_PATH && await hasGift(request.headers.get("cookie"), env.AUTOESTUDIO_SHARE_SECRET).catch(() => false)) return true;
  return hasFullLibraryAccess(request, env);
}
