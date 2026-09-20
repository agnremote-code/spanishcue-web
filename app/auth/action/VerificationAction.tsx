"use client";

import { applyActionCode } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { firebaseAuth } from "../../firebase-client";
import { translate, type Locale } from "../../i18n/messages";

type VerificationState = "checking" | "success" | "expired" | "invalid";

function firebaseErrorCode(error: unknown): string {
  return typeof error === "object" && error && "code" in error
    ? String((error as { code: unknown }).code)
    : "";
}

export default function VerificationAction({
  mode,
  oobCode,
  locale,
  verified,
}: {
  mode: string;
  oobCode: string;
  locale: Locale;
  verified: boolean;
}) {
  const canApplyCode = mode === "verifyEmail" && Boolean(oobCode);
  const [state, setState] = useState<VerificationState>(
    verified ? "success" : canApplyCode ? "checking" : "invalid",
  );
  const t = (key: Parameters<typeof translate>[1]) => translate(locale, key);
  const verificationAttempt = useRef<{ code: string; promise: Promise<void> } | null>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
    if (verified || !canApplyCode) return;
    let active = true;
    // React can replay effects. Reuse the same application of a one-time code.
    if (verificationAttempt.current?.code !== oobCode) {
      verificationAttempt.current = { code: oobCode, promise: applyActionCode(firebaseAuth, oobCode) };
    }
    void verificationAttempt.current.promise
      .then(() => {
        if (active) setState("success");
      })
      .catch((error: unknown) => {
        if (!active) return;
        setState(firebaseErrorCode(error).includes("expired-action-code") ? "expired" : "invalid");
      });
    return () => {
      active = false;
    };
  }, [canApplyCode, locale, oobCode, verified]);

  const success = state === "success";
  const checking = state === "checking";
  const description = checking
    ? t("verification.checkingCopy")
    : success
      ? t("verification.successCopy")
      : state === "expired"
        ? t("verification.expiredCopy")
        : t("verification.invalidCopy");

  return (
    <main className="verification-page">
      <section className="verification-card" aria-live="polite" aria-busy={checking}>
        <div className="verification-copy">
          <p className="verification-eyebrow">{t("verification.eyebrow")}</p>
          <div className={`verification-status ${success ? "is-success" : checking ? "is-checking" : "is-invalid"}`} aria-hidden="true">
            {success ? "✓" : checking ? "…" : "!"}
          </div>
          <h1>
            {checking
              ? t("verification.checkingTitle")
              : success
                ? t("verification.successTitle")
                : t("verification.invalidTitle")}
          </h1>
          <p className="verification-lead">{description}</p>
          {success ? (
            <Link className="verification-primary" href={`/ingresar?lang=${locale}`}>{t("verification.enter")}</Link>
          ) : !checking ? (
            <div className="verification-actions">
              <Link className="verification-primary" href={`/ingresar?lang=${locale}&verification=resend`}>{t("verification.resend")}</Link>
              <Link className="verification-secondary" href={`/?lang=${locale}`}>{t("verification.back")}</Link>
            </div>
          ) : null}
        </div>
        <div className="verification-visual" aria-hidden="true">
          <span className="verification-orbit verification-orbit-one" />
          <span className="verification-orbit verification-orbit-two" />
          <Image
            src="/brand/mascot/standing-crossed.webp"
            alt=""
            width={720}
            height={900}
            priority
          />
        </div>
      </section>
      <p className="verification-footer">SPANISHCUE<br /><span>Choose. Open. Teach.</span></p>
    </main>
  );
}
