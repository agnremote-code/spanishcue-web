export type FirebaseSessionUser = {
  getIdToken(): Promise<string>;
};

type SessionSyncOptions = {
  serverSignedIn: boolean;
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

  try {
    const idToken = await user.getIdToken();
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
    if (response.ok && !options.serverSignedIn && options.pathname !== "/ingresar") {
      options.reload();
    }
  } catch {
    // The next explicit sign-in can safely restore the server session.
  }
}
