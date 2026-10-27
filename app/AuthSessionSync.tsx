"use client";

import { onIdTokenChanged, signOut, type User } from "firebase/auth";
import { useEffect } from "react";
import { syncFirebaseSession } from "./auth-session-sync";
import { firebaseAuth } from "./firebase-client";

export default function AuthSessionSync({ serverSignedIn, identityChecked }: { serverSignedIn: boolean; identityChecked: boolean }) {
  useEffect(() => {
    let initialEvent = true;
    let disposed = false;
    let syncing = false;
    let lastResumeAttempt = 0;

    const reconcile = async (user: User | null, restoring: boolean) => {
      if (!user || disposed || syncing) return;
      syncing = true;
      try {
        await syncFirebaseSession(user, {
          serverSignedIn,
          identityChecked,
          initialEvent: restoring,
          pathname: window.location.pathname,
          reload: () => window.location.reload(),
          signOut: () => signOut(firebaseAuth),
        });
      } finally {
        syncing = false;
      }
    };

    const unsubscribe = onIdTokenChanged(firebaseAuth, (user) => {
      const restoring = initialEvent;
      initialEvent = false;
      void reconcile(user, restoring);
    });

    // On iOS, Safari may freeze a tab for longer than the 55-minute server
    // cookie lifetime. The Firebase token event need not fire when the tab
    // resumes, leaving a visible owner/PRO page with an expired server cookie.
    // Renew the verified server session before the next protected navigation.
    const restoreOnResume = () => {
      if (document.visibilityState !== "visible" || window.location.pathname === "/ingresar") return;
      const now = Date.now();
      if (now - lastResumeAttempt < 15_000) return;
      lastResumeAttempt = now;
      void reconcile(firebaseAuth.currentUser, false);
    };
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) restoreOnResume();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") restoreOnResume();
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      disposed = true;
      unsubscribe();
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [serverSignedIn, identityChecked]);
  return null;
}
