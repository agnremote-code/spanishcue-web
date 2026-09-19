"use client";

import { signOut } from "firebase/auth";
import { useState } from "react";
import { firebaseAuth } from "./firebase-client";
import { useI18n } from "./i18n/LocaleProvider";

export default function LogoutButton({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const [working, setWorking] = useState(false);
  return (
    <button
      className={className}
      type="button"
      disabled={working}
      onClick={async () => {
        setWorking(true);
        try {
          await signOut(firebaseAuth);
          await fetch("/api/auth/session", {
            method: "DELETE",
            credentials: "same-origin",
          });
        } finally {
          window.location.assign("/");
        }
      }}
    >
      {working ? t("account.loggingOut") : t("account.logOut")}
    </button>
  );
}
