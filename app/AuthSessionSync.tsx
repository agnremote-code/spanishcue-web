"use client";

import { onIdTokenChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { syncFirebaseSession } from "./auth-session-sync";
import { firebaseAuth } from "./firebase-client";

export default function AuthSessionSync({ serverSignedIn }: { serverSignedIn: boolean }) {
  useEffect(() => {
    return onIdTokenChanged(firebaseAuth, async (user) => {
      await syncFirebaseSession(user, {
        serverSignedIn,
        pathname: window.location.pathname,
        reload: () => window.location.reload(),
        signOut: () => signOut(firebaseAuth),
      });
    });
  }, [serverSignedIn]);
  return null;
}
