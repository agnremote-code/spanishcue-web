import { resolveFirebaseAccount } from "../db/accounts";
import {
  firebaseTokenFromHeaders,
  getFirebaseUserFromHeaders,
  isOwnerUser,
  ownerIdentityFromEnvironment,
} from "../app/firebase-session";

type PrivateAssetEnv = {
  DB: D1Database;
  CHESPANISH_OWNER_UID?: string;
  CHESPANISH_OWNER_EMAIL?: string;
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
