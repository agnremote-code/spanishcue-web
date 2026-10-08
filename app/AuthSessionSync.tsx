"use client";

import { onIdTokenChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { syncFirebaseSession } from "./auth-session-sync";
import { firebaseAuth } from "./firebase-client";

export default function AuthSessionSync({ serverSignedIn, identityChecked }: { serverSignedIn: boolean; identityChecked: boolean }) {
  useEffect(() => {
    let initialEvent = true;
    return onIdTokenChanged(firebaseAuth, async (user) => {
      const restoring = initialEvent;
      initialEvent = false;
      await syncFirebaseSession(user, {
        serverSignedIn,
        identityChecked,
        initialEvent: restoring,
        pathname: window.location.pathname,
        reload: () => window.location.reload(),
        signOut: () => signOut(firebaseAuth),
      });
    });
  }, [serverSignedIn, identityChecked]);
  return null;
}
