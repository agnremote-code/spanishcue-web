"use client";

import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  OAuthProvider,
  inMemoryPersistence,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { FormEvent, type KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { firebaseAuth } from "../firebase-client";
import { useI18n } from "../i18n/LocaleProvider";
import type { Locale, MessageKey } from "../i18n/messages";
import { SpanishCueBrand } from "../SpanishCueBrand";
import { trackMarketingEvent } from "../marketing/analytics";

type Mode = "entrar" | "registro";

type AuthResult = {
  user: User;
  newAccount: boolean;
  method: "email" | "google" | "apple";
};

function authError(code: string) {
  const error = new Error(code) as Error & { code: string };
  error.code = code;
  return error;
}

async function preparePersistence() {
  for (const persistence of [
    browserLocalPersistence,
    browserSessionPersistence,
    inMemoryPersistence,
  ]) {
    try {
      await setPersistence(firebaseAuth, persistence);
      return;
    } catch {
      // Try the next supported persistence mode. This matters in private browsing.
    }
  }
  throw authError("auth/web-storage-unsupported");
}

async function sendVerificationAndSignOut(user: User, locale: Locale, intent: "initial" | "resend") {
  try {
    const idToken = await user.getIdToken();
    const response = await fetch("/api/auth/verification-email", {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json", authorization: `Bearer ${idToken}` },
      body: JSON.stringify({ locale, intent, requestId: crypto.randomUUID() }),
    });
    const result = await response.json().catch(() => null) as { status?: string; code?: string; retryAfterSeconds?: number } | null;
    if (!response.ok) {
      const reason = authError(response.status === 429 ? "auth/verification-cooldown" : "auth/verification-delivery-failed") as Error & { code: string; retryAfterSeconds?: number };
      reason.retryAfterSeconds = result?.retryAfterSeconds ?? 60;
      throw reason;
    }
    if (!result?.status || !["sent", "already_sent", "already_verified"].includes(result.status)) {
      throw authError("auth/verification-delivery-failed");
    }
    return { status: result.status, retryAfterSeconds: result.retryAfterSeconds ?? 60 };
  } finally {
    await signOut(firebaseAuth).catch(() => undefined);
  }
}

export function authMessageKeyFor(error: unknown): MessageKey {
  const code = typeof error === "object" && error && "code" in error
    ? String((error as { code: unknown }).code)
    : "";
  if (/invalid-credential|wrong-password|user-not-found/.test(code)) return "auth.error.credentials";
  if (code.includes("email-already-in-use")) return "auth.error.emailInUse";
  if (code.includes("weak-password")) return "auth.error.weakPassword";
  if (code.includes("invalid-email")) return "auth.error.invalidEmail";
  if (code.includes("popup-closed-by-user")) return "auth.error.popupClosed";
  if (code.includes("popup-blocked")) return "auth.error.popupBlocked";
  if (code.includes("cancelled-popup-request")) return "auth.error.popupCancelled";
  if (code.includes("network-request-failed")) return "auth.error.network";
  if (code.includes("too-many-requests")) return "auth.error.tooManyRequests";
  if (code.includes("verification-cooldown")) return "auth.error.verificationCooldown";
  if (code.includes("verification-delivery-failed")) return "auth.error.verificationDelivery";
  if (code.includes("web-storage-unsupported")) return "auth.error.storage";
  if (code.includes("email-not-verified")) return "auth.error.emailNotVerified";
  if (code.includes("account-exists-with-different-credential")) return "auth.error.existingCredential";
  if (code.includes("unauthorized-domain")) return "auth.error.unauthorizedDomain";
  if (code.includes("operation-not-allowed")) return "auth.error.methodDisabled";
  return "auth.error.generic";
}

export async function establishSession(user: User, returnTo?: string) {
  let lastError: unknown = authError("auth/session-failed");
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const idToken = await user.getIdToken(true);
      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken }),
        credentials: "same-origin",
      });
      if (response.ok) {
        const body = await response.json().catch(() => null) as { postPaymentProvider?: unknown } | null;
        if (typeof body?.postPaymentProvider === "string" && !returnTo?.startsWith("/pro/claim")) {
          window.location.assign(`/pro/claim?provider=${body.postPaymentProvider === "paddle" ? "paddle" : "paypal"}`);
        } else if (returnTo) window.location.assign(returnTo);
        return;
      }
      const body = await response.json().catch(() => null) as { code?: unknown } | null;
      if (response.status === 403 && body?.code === "EMAIL_NOT_VERIFIED") {
        throw authError("auth/email-not-verified");
      }
      if (response.status < 500) throw authError("auth/session-failed");
      lastError = authError("auth/session-failed");
    } catch (reason) {
      if (
        typeof reason === "object" &&
        reason &&
        "code" in reason &&
        String((reason as { code: unknown }).code).includes("email-not-verified")
      ) {
        throw reason;
      }
      lastError = reason;
    }
  }
  throw lastError;
}

export default function AuthForm({
  initialMode,
  returnTo,
  appleEnabled,
  initialVerificationPending = false,
}: {
  initialMode: Mode;
  returnTo: string;
  appleEnabled: boolean;
  initialVerificationPending?: boolean;
}) {
  const { locale, t } = useI18n();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState(initialVerificationPending ? t("auth.verifyRequired") : "");
  const [verificationPending, setVerificationPending] = useState(initialVerificationPending);
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const authAttemptRef = useRef(false);
  const loginTabRef = useRef<HTMLButtonElement>(null);
  const registerTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!returnTo.startsWith("/pro/claim")) return;
    const confirmedEmail = window.sessionStorage.getItem("spanishcue.claim.confirmedEmail");
    if (confirmedEmail) {
      window.sessionStorage.removeItem("spanishcue.claim.confirmedEmail");
      const timer = window.setTimeout(() => setEmail(confirmedEmail), 0);
      return () => window.clearTimeout(timer);
    }
  }, [returnTo]);

  useEffect(() => {
    const tick = () => setCooldownSeconds(Math.max(0, Math.ceil((cooldownUntil - Date.now()) / 1000)));
    tick();
    if (cooldownUntil <= Date.now()) return;
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [cooldownUntil]);

  const startVerificationCooldown = (seconds: number) => {
    const bounded = Math.max(1, Math.min(86400, seconds));
    setCooldownUntil(Date.now() + bounded * 1000);
    setCooldownSeconds(bounded);
  };

  const deliveryError = (reason: unknown) => {
    if (typeof reason === "object" && reason && "retryAfterSeconds" in reason && typeof reason.retryAfterSeconds === "number") {
      startVerificationCooldown(reason.retryAfterSeconds);
    }
    setError(t(authMessageKeyFor(reason)));
  };

  const selectMode = (nextMode: Mode) => {
    if (nextMode === "registro" && mode !== "registro") {
      trackMarketingEvent("signup_start", { placement: "auth_tab" });
    }
    setMode(nextMode);
    setError("");
    setNotice("");
    setVerificationPending(false);
  };

  const moveTab = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const modes: Mode[] = ["entrar", "registro"];
    const currentIndex = modes.indexOf(mode);
    const nextMode: Mode = event.key === "Home"
      ? "entrar"
      : event.key === "End"
        ? "registro"
        : modes[(currentIndex + (event.key === "ArrowLeft" ? -1 : 1) + modes.length) % modes.length];
    selectMode(nextMode);
    (nextMode === "entrar" ? loginTabRef : registerTabRef).current?.focus();
  };

  const complete = async (action: () => Promise<AuthResult>) => {
    if (authAttemptRef.current) return;
    authAttemptRef.current = true;
    setBusy(true);
    setError("");
    setNotice("");
    setVerificationPending(false);
    try {
      await preparePersistence();
      const result = await action();
      if (result.newAccount) trackMarketingEvent("signup_complete", { method: result.method });
      if (!result.user.emailVerified) {
        setMode("entrar");
        setVerificationPending(true);
        if (result.newAccount) {
          const delivery = await sendVerificationAndSignOut(result.user, locale, "initial");
          if (delivery.status === "already_verified") {
            setVerificationPending(false);
            setNotice(t("auth.verifyAlready"));
            return;
          }
          startVerificationCooldown(delivery.retryAfterSeconds);
        } else {
          await signOut(firebaseAuth).catch(() => undefined);
        }
        setNotice(t(result.newAccount ? "auth.verifySent" : "auth.verifyRequired"));
        return;
      }
      await establishSession(result.user, returnTo);
    } catch (reason) {
      deliveryError(reason);
    } finally {
      authAttemptRef.current = false;
      setBusy(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    void complete(async () => {
      const credential = mode === "registro"
        ? await createUserWithEmailAndPassword(firebaseAuth, cleanEmail, password)
        : await signInWithEmailAndPassword(firebaseAuth, cleanEmail, password);
      return { user: credential.user, newAccount: mode === "registro", method: "email" };
    });
  };

  const resendVerification = async () => {
    if (authAttemptRef.current) return;
    if (Date.now() < cooldownUntil) return;
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError(t("auth.error.emailFirst"));
      return;
    }
    if (!password) {
      setError(t("auth.error.passwordFirst"));
      return;
    }
    authAttemptRef.current = true;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await preparePersistence();
      const credential = await signInWithEmailAndPassword(firebaseAuth, cleanEmail, password);
      if (credential.user.emailVerified) {
        await establishSession(credential.user, returnTo);
        return;
      }
      const delivery = await sendVerificationAndSignOut(credential.user, locale, "resend");
      if (delivery.status === "already_verified") {
        setVerificationPending(false);
        setNotice(t("auth.verifyAlready"));
        return;
      }
      startVerificationCooldown(delivery.retryAfterSeconds);
      setVerificationPending(true);
      setNotice(t("auth.verifyResent"));
    } catch (reason) {
      deliveryError(reason);
    } finally {
      authAttemptRef.current = false;
      setBusy(false);
    }
  };

  const google = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    void complete(async () => {
      const credential = await signInWithPopup(firebaseAuth, provider);
      return { user: credential.user, newAccount: Boolean(getAdditionalUserInfo(credential)?.isNewUser), method: "google" };
    });
  };

  const apple = () => {
    const provider = new OAuthProvider("apple.com");
    provider.addScope("email");
    provider.addScope("name");
    void complete(async () => {
      const credential = await signInWithPopup(firebaseAuth, provider);
      return { user: credential.user, newAccount: Boolean(getAdditionalUserInfo(credential)?.isNewUser), method: "apple" };
    });
  };

  const resetPassword = async () => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError(t("auth.error.emailFirst"));
      return;
    }
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await sendPasswordResetEmail(firebaseAuth, cleanEmail);
      setNotice(t("auth.resetSent"));
    } catch (reason) {
      setError(t(authMessageKeyFor(reason)));
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="auth-card" aria-labelledby="auth-title">
      <SpanishCueBrand variant="micro" tone="dark" className="auth-mark" />
      <p className="auth-kicker">{t("auth.kicker")}</p>
      <h1 id="auth-title">{mode === "entrar" ? t("auth.loginTitle") : t("auth.registerTitle")}</h1>
      <p className="auth-copy">CHOOSE. OPEN. TEACH.</p>

      <div className="auth-tabs" role="tablist" aria-label={t("auth.chooseMode")}>
        <button ref={loginTabRef} id="auth-tab-login" type="button" role="tab" aria-controls="auth-panel" aria-selected={mode === "entrar"} tabIndex={mode === "entrar" ? 0 : -1} onKeyDown={moveTab} onClick={() => selectMode("entrar")}>{t("auth.loginTab")}</button>
        <button ref={registerTabRef} id="auth-tab-register" type="button" role="tab" aria-controls="auth-panel" aria-selected={mode === "registro"} tabIndex={mode === "registro" ? 0 : -1} onKeyDown={moveTab} onClick={() => selectMode("registro")}>{t("auth.registerTab")}</button>
      </div>

      <div id="auth-panel" role="tabpanel" aria-labelledby={mode === "entrar" ? "auth-tab-login" : "auth-tab-register"}>
      <div className="auth-providers">
        <button className="google-button" type="button" onClick={google} disabled={busy}>
          <span aria-hidden="true">G</span> {t("auth.google")}
        </button>
        {appleEnabled && (
          <button className="apple-button" type="button" onClick={apple} disabled={busy}>
            <span aria-hidden="true">●</span> {t("auth.apple")}
          </button>
        )}
      </div>
      <div className="auth-divider"><span>{t("auth.orEmail")}</span></div>

      <form onSubmit={submit}>
        <label>{t("auth.email")}<input type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="teacher@email.com" /></label>
        <label>{t("auth.password")}<input type="password" autoComplete={mode === "registro" ? "new-password" : "current-password"} minLength={6} required value={password} onChange={(event) => setPassword(event.target.value)} placeholder={t("auth.passwordPlaceholder")} /></label>
        {mode === "entrar" && <button className="forgot-button" type="button" onClick={resetPassword} disabled={busy}>{t("auth.forgot")}</button>}
        {error && <p className="auth-message error" role="alert">{error}</p>}
        {notice && <p className="auth-message success" role="status">{notice}</p>}
        {verificationPending && (
          <button className="forgot-button" type="button" onClick={resendVerification} disabled={busy || cooldownSeconds > 0}>
            {cooldownSeconds > 0 ? `${t("auth.resendWait")} ${cooldownSeconds}s` : t("auth.resendVerification")}
          </button>
        )}
        <button className="submit-button" type="submit" disabled={busy}>{busy ? t("common.loading") : mode === "entrar" ? t("auth.loginSubmit") : t("auth.registerSubmit")}</button>
      </form>
      {mode === "registro" && <p className="auth-legal-notice">{t("auth.createTermsStart")} <Link href="/terms">{t("auth.terms")}</Link> {t("auth.createTermsMiddle")} <Link href="/privacy">{t("auth.privacyPolicy")}</Link>.</p>}
      <p className="auth-foot">{t("auth.freeCopy")}</p>
      </div>
    </section>
  );
}
