import { firebaseConfig } from "./firebase-config";
import type { AccountAccess } from "./account-types";

export const FIREBASE_SESSION_COOKIE = "__session";
export const OWNER_UID = "UUQZ496tSwP6PxgIb0xJ3tU63d03";
export const OWNER_EMAIL = "agnremote@gmail.com";

export type OwnerIdentity = {
  uid: string;
  email: string;
};

export const DEFAULT_OWNER_IDENTITY: OwnerIdentity = {
  uid: OWNER_UID,
  email: OWNER_EMAIL,
};

export const VERIFIED_UID_HEADER = "x-chespanish-user-uid";
export const VERIFIED_EMAIL_HEADER = "x-chespanish-user-email";
export const VERIFIED_OWNER_HEADER = "x-chespanish-owner";
export const VERIFIED_ACCOUNT_ID_HEADER = "x-chespanish-account-id";
export const VERIFIED_ROLE_HEADER = "x-chespanish-role";
export const VERIFIED_ACCESS_HEADER = "x-chespanish-access-level";

export type FirebaseUser = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string | null;
};

type FetchLike = typeof fetch;

function cookieValue(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(";")) {
    const [key, ...value] = part.trim().split("=");
    if (key === name) return value.join("=") || null;
  }
  return null;
}

export function firebaseTokenFromHeaders(headers: Headers): string | null {
  return cookieValue(headers.get("cookie"), FIREBASE_SESSION_COOKIE);
}

export async function verifyFirebaseIdToken(
  idToken: string,
  fetcher: FetchLike = fetch,
): Promise<FirebaseUser | null> {
  if (idToken.length < 40 || idToken.length > 4096) return null;
  try {
    const response = await fetcher(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseConfig.apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken }),
      },
    );
    if (!response.ok) return null;
    const data = (await response.json()) as {
      users?: Array<{
        localId?: unknown;
        email?: unknown;
        emailVerified?: unknown;
        displayName?: unknown;
        disabled?: unknown;
      }>;
    };
    const candidate = data.users?.[0];
    if (
      !candidate ||
      candidate.disabled === true ||
      typeof candidate.localId !== "string" ||
      typeof candidate.email !== "string"
    ) {
      return null;
    }
    return {
      uid: candidate.localId,
      email: candidate.email.trim().toLowerCase(),
      emailVerified: candidate.emailVerified === true,
      displayName:
        typeof candidate.displayName === "string" && candidate.displayName.trim()
          ? candidate.displayName.trim()
          : null,
    };
  } catch {
    return null;
  }
}

export async function getFirebaseUserFromHeaders(
  headers: Headers,
  fetcher: FetchLike = fetch,
): Promise<FirebaseUser | null> {
  const token = firebaseTokenFromHeaders(headers);
  if (!token) return null;
  const user = await verifyFirebaseIdToken(token, fetcher);
  return user?.emailVerified ? user : null;
}

export function isOwnerUser(
  user: FirebaseUser | null,
  ownerIdentity: OwnerIdentity = DEFAULT_OWNER_IDENTITY,
): boolean {
  return Boolean(
    user &&
      user.emailVerified &&
      user.uid === ownerIdentity.uid &&
      user.email === ownerIdentity.email.trim().toLowerCase(),
  );
}

export function ownerIdentityFromEnvironment(values: {
  CHESPANISH_OWNER_UID?: string;
  CHESPANISH_OWNER_EMAIL?: string;
}): OwnerIdentity {
  return {
    uid: values.CHESPANISH_OWNER_UID?.trim() || OWNER_UID,
    email:
      values.CHESPANISH_OWNER_EMAIL?.trim().toLowerCase() || OWNER_EMAIL,
  };
}

export function authenticatedRequestHeaders(
  original: Headers,
  user: FirebaseUser | null,
  account: AccountAccess | null = null,
  ownerIdentity: OwnerIdentity = DEFAULT_OWNER_IDENTITY,
): Headers {
  const headers = new Headers(original);
  headers.delete(VERIFIED_UID_HEADER);
  headers.delete(VERIFIED_EMAIL_HEADER);
  headers.delete(VERIFIED_OWNER_HEADER);
  headers.delete(VERIFIED_ACCOUNT_ID_HEADER);
  headers.delete(VERIFIED_ROLE_HEADER);
  headers.delete(VERIFIED_ACCESS_HEADER);
  if (user?.emailVerified) {
    headers.set(VERIFIED_UID_HEADER, user.uid);
    headers.set(VERIFIED_EMAIL_HEADER, user.email);
    if (account) {
      headers.set(VERIFIED_ACCOUNT_ID_HEADER, account.userId);
      headers.set(VERIFIED_ROLE_HEADER, account.role);
      headers.set(VERIFIED_ACCESS_HEADER, account.accessLevel);
    }
    if (account?.role === "owner" || isOwnerUser(user, ownerIdentity)) {
      headers.set(VERIFIED_OWNER_HEADER, "1");
      headers.set(VERIFIED_ACCESS_HEADER, "full");
    }
  }
  return headers;
}
