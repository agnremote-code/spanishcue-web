export type AuthStage = "persistence" | "credentials" | "id-token" | "session-post" | "session-cookie";

// Never retain Firebase customData, messages, credentials or response bodies.
const safeCodes = new Set([
  "auth/network-request-failed", "auth/invalid-credential", "auth/wrong-password",
  "auth/user-not-found", "auth/user-disabled", "auth/invalid-email", "auth/too-many-requests",
  "auth/email-already-in-use", "auth/weak-password", "auth/web-storage-unsupported",
  "auth/popup-closed-by-user", "auth/popup-blocked", "auth/cancelled-popup-request",
  "auth/account-exists-with-different-credential", "auth/unauthorized-domain",
  "auth/operation-not-allowed", "auth/email-not-verified", "auth/user-token-expired",
  "auth/invalid-user-token", "auth/session-failed", "auth/session-cookie-unconfirmed",
]);

export class AuthStageError extends Error {
  constructor(public stage: AuthStage, public code: string, public httpStatus?: number) {
    super(code);
    this.name = "AuthStageError";
  }
}

export function stageError(stage: AuthStage, reason: unknown, httpStatus?: number): AuthStageError {
  if (reason instanceof AuthStageError) return reason;
  const code = typeof reason === "object" && reason && "code" in reason ? reason.code : null;
  return new AuthStageError(stage, typeof code === "string" && safeCodes.has(code) ? code : "auth/unknown", httpStatus);
}

export async function authStage<T>(stage: AuthStage, action: () => Promise<T>): Promise<T> {
  try { return await action(); } catch (reason) { throw stageError(stage, reason); }
}

export function authDiagnostic(reason: unknown): string {
  if (!(reason instanceof AuthStageError)) return "";
  return `${reason.stage} · ${reason.code}${reason.httpStatus ? ` · HTTP ${reason.httpStatus}` : ""}`;
}

/** Verifies the HttpOnly cookie through a real subsequent request, never browser storage. */
export async function confirmSessionCookie(fetcher: typeof fetch = fetch): Promise<void> {
  await authStage("session-cookie", async () => {
    const response = await fetcher("/api/auth/session", {
      method: "GET", credentials: "same-origin", cache: "no-store",
    });
    const body = await response.json().catch(() => null) as { authenticated?: unknown } | null;
    if (!response.ok || body?.authenticated !== true) {
      throw new AuthStageError("session-cookie", "auth/session-cookie-unconfirmed", response.status);
    }
  });
}
