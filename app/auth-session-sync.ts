import { authDiagnostic, authStage, confirmSessionCookie } from "./auth-diagnostics";

export type FirebaseSessionUser = {
  getIdToken(): Promise<string>;
};

type SessionSyncOptions = {
  serverSignedIn: boolean;
  /** False when the server did not resolve the session for this page, so its signed-out render proves nothing. */
  identityChecked?: boolean;
  initialEvent?: boolean;
  fetcher?: typeof fetch;
  pathname: string;
  reload: () => void;
  signOut: () => Promise<unknown>;
};

export async function syncFirebaseSession(
  user: FirebaseSessionUser | null,
  options: SessionSyncOptions,
): Promise<void> {
  // Firebase can briefly report no client user while browser persistence restores.
  // Only an explicit sign-out should clear the independent server cookie.
  if (!user) return;
  // AuthForm owns new sign-ins. Only the initial persisted user may restore
  // this page, otherwise the token listener races its redirect/verification.
  if (options.pathname === "/ingresar" && !options.initialEvent) return;

  try {
    const idToken = await authStage("id-token", () => user.getIdToken());
    const response = await (options.fetcher ?? fetch)("/api/auth/session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ idToken }),
      credentials: "same-origin",
    });
    if (response.status === 403) {
      await options.signOut();
      return;
    }
    // Reloading where the server never reads the session would loop forever.
    if (response.ok && !options.serverSignedIn && options.identityChecked !== false) {
      // A blocked or rejected cookie must not cause an endless reload loop.
      await confirmSessionCookie(options.fetcher ?? fetch);
      options.reload();
    }
  } catch (reason) {
    const diagnostic = authDiagnostic(reason);
    if (diagnostic) console.warn("[SpanishCue auth restore]", diagnostic);
  }
}
