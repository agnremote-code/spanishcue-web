"use client";

import { onIdTokenChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { firebaseAuth } from "./firebase-client";

export default function AuthSessionSync({ serverSignedIn }: { serverSignedIn: boolean }) {
  useEffect(() => {
    return onIdTokenChanged(firebaseAuth, async (user) => {
      try {
        if (!user) {
          await fetch("/api/auth/session", {
            method: "DELETE",
            credentials: "same-origin",
          });
          return;
        }
        const idToken = await user.getIdToken();
        const response = await fetch("/api/auth/session", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ idToken }),
          credentials: "same-origin",
        });
        if (response.status === 403) {
          await signOut(firebaseAuth);
          return;
        }
        if (response.ok && !serverSignedIn && window.location.pathname !== "/ingresar") {
          window.location.reload();
        }
      } catch {
        // The next explicit sign-in can safely restore the server session.
      }
    });
  }, [serverSignedIn]);
  return null;
}
