"use client";

import { onIdTokenChanged } from "firebase/auth";
import { useEffect } from "react";
import { firebaseAuth } from "./firebase-client";

export default function AuthSessionSync() {
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
        await fetch("/api/auth/session", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ idToken }),
          credentials: "same-origin",
        });
      } catch {
        // The next explicit sign-in can safely restore the server session.
      }
    });
  }, []);
  return null;
}
