"use client";

import { onIdTokenChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { syncFirebaseSession } from "./auth-session-sync";
import { firebaseAuth } from "./firebase-client";

export default function AuthSessionSync({ serverSignedIn }: { serverSignedIn: boolean }) {
  useEffect(() => {
    let initialEvent = true;
    return onIdTokenChanged(firebaseAuth, async (user) => {
      const restoring = initialEvent;
      initialEvent = false;
      await syncFirebaseSession(user, {
        serverSignedIn,
        initialEvent: restoring,
        pathname: window.location.pathname,
        reload: () => window.location.reload(),
        signOut: () => signOut(firebaseAuth),
      });
    });
  }, [serverSignedIn]);
  return null;
}
