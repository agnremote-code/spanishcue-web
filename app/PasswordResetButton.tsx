"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { firebaseAuth } from "./firebase-client";
import { useI18n } from "./i18n/LocaleProvider";

export default function PasswordResetButton({ email }: { email: string }) {
  const { t } = useI18n();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  return (
    <div className="password-reset-control">
      <button
        type="button"
        disabled={state === "sending" || state === "sent"}
        onClick={async () => {
          setState("sending");
          try {
            await sendPasswordResetEmail(firebaseAuth, email);
            setState("sent");
          } catch {
            setState("error");
          }
        }}
      >
        {state === "sending" ? t("account.sending") : state === "sent" ? t("account.linkSent") : t("account.changePassword")}
      </button>
      {state === "sent" && <small role="status">{t("account.checkEmail")}</small>}
      {state === "error" && <small role="alert">{t("account.resetError")}</small>}
    </div>
  );
}
