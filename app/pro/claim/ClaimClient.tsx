"use client";

import { browserLocalPersistence, GoogleAuthProvider, sendSignInLinkToEmail, setPersistence, signInWithPopup, signOut } from "firebase/auth";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { firebaseAuth } from "../../firebase-client";
import { establishSession } from "../../ingresar/AuthForm";
import { trackMarketingEvent } from "../../marketing/analytics";
import { consentFor } from "../../privacy/consent";
import type { Locale } from "../../i18n/messages";

type Provider = "paypal" | "paddle";
type ClaimStatus = { confirmed?: boolean; pending?: boolean; email?: string; claimed?: boolean; error?: string };

export default function ClaimClient({ initialProvider, signedIn, locale }: {
  initialProvider: Provider | null; signedIn: boolean; locale: Locale;
}) {
  const es = locale === "es";
  const [provider, setProvider] = useState<Provider | null>(initialProvider);
  const [state, setState] = useState<"checking" | "pending" | "paid" | "binding" | "error">("checking");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [linkSent, setLinkSent] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [otherWays, setOtherWays] = useState(false);
  const binding = useRef(false);
  const autoLink = useRef(false);

  const bind = useCallback(async (selected: Provider) => {
    if (binding.current) return;
    binding.current = true;
    setState("binding");
    try {
      const response = await fetch("/api/billing/claim/bind", {
        method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
        body: JSON.stringify({ provider: selected }),
      });
      const body = await response.json() as { accessConfirmed?: boolean; returnTo?: string; subscriptionId?: string; error?: string };
      if (!response.ok || !body.accessConfirmed || !body.returnTo) {
        setMessage(body.error || (es ? "No pudimos activar PRO todavía." : "We could not activate PRO yet."));
        setState("error");
        return;
      }
      if ((consentFor("analytics") || consentFor("marketing")) && body.subscriptionId) {
        try {
          const conversion = await fetch("/api/billing/conversion", {
            method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
            body: JSON.stringify({ subscriptionId: body.subscriptionId }),
          });
          if (conversion.ok && conversion.status !== 204) {
            const event = await conversion.json() as { transactionId?: unknown; value?: unknown; currency?: unknown; plan?: unknown };
            if (typeof event.transactionId === "string" && typeof event.value === "number" && Number.isFinite(event.value) && event.value > 0 && typeof event.currency === "string" && /^[A-Z]{3}$/.test(event.currency)) {
              trackMarketingEvent("subscription_first_paid", { transaction_id: event.transactionId, value: event.value, currency: event.currency, plan: event.plan === "trial" ? "trial" : "monthly" });
            }
          }
        } catch { /* Access does not depend on optional analytics. */ }
      }
      window.location.assign(body.returnTo);
    } catch {
      setMessage(es ? "No pudimos activar PRO todavía. Vuelve a intentarlo." : "We could not activate PRO yet. Try again.");
      setState("error");
    } finally { binding.current = false; }
  }, [es]);

  const check = useCallback(async () => {
    setState("checking");
    const candidates: Provider[] = provider ? [provider] : ["paypal", "paddle"];
    for (const selected of candidates) {
      try {
        const response = await fetch("/api/billing/claim/status", {
          method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
          body: JSON.stringify({ provider: selected }),
        });
        if (response.status === 404 && !provider) continue;
        const body = await response.json() as ClaimStatus;
        if (body.confirmed) {
          setProvider(selected);
          setEmail(body.email || "");
          setState("paid");
          if (signedIn) void bind(selected);
          return;
        }
        if (response.status === 202 && body.pending) {
          setProvider(selected); setState("pending"); return;
        }
        setMessage(body.error || (es ? "No pudimos confirmar esta compra." : "We could not confirm this purchase."));
        setState("error"); return;
      } catch { /* Check the other provider if the URL does not select one. */ }
    }
    setMessage(es ? "No encontramos una compra pendiente en este navegador." : "We could not find a pending purchase in this browser.");
    setState("error");
  }, [provider, signedIn, bind, es]);

  useEffect(() => { void Promise.resolve().then(check); }, [check]);
  useEffect(() => {
    if (state !== "pending") return;
    const timer = window.setTimeout(() => void check(), 3000);
    return () => window.clearTimeout(timer);
  }, [state, check]);

  const returnPath = `/pro/claim${provider ? `?provider=${provider}` : ""}`;
  const registrationUrl = `/ingresar?modo=registro&returnTo=${encodeURIComponent(returnPath)}`;
  const signInUrl = `/ingresar?modo=entrar&returnTo=${encodeURIComponent(returnPath)}`;

  /** Paid without an account: no form. Firebase emails a sign-in link to the buyer email the provider
   *  confirmed; opening it creates the account (or signs in) and activates PRO (see ./enlace). */
  const sendAccessLink = useCallback(async (selected: Provider, buyerEmail: string) => {
    setLinkSent("sending");
    try {
      window.localStorage.setItem("spanishcue.emailForSignIn", buyerEmail);
      await sendSignInLinkToEmail(firebaseAuth, buyerEmail, {
        url: `${window.location.origin}/pro/claim/enlace?provider=${selected}`,
        handleCodeInApp: true,
      });
      setLinkSent("sent");
      trackMarketingEvent("signup_start", { placement: "post_payment_email_link" });
    } catch { setLinkSent("failed"); setOtherWays(true); }
  }, []);

  useEffect(() => {
    if (state !== "paid" || signedIn || !email || !provider || autoLink.current) return;
    autoLink.current = true;
    void Promise.resolve().then(() => sendAccessLink(provider, email));
  }, [state, signedIn, email, provider, sendAccessLink]);

  const google = async () => {
    setBusy(true); setMessage("");
    try {
      await setPersistence(firebaseAuth, browserLocalPersistence);
      const authProvider = new GoogleAuthProvider();
      authProvider.setCustomParameters({ prompt: "select_account" });
      const { user } = await signInWithPopup(firebaseAuth, authProvider);
      if (!user.emailVerified) throw new Error(es ? "Verifica tu email antes de continuar." : "Verify your email before continuing.");
      await establishSession(user, returnPath);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : (es ? "No pudimos ingresar con Google." : "Google sign-in failed."));
    } finally { setBusy(false); }
  };

  const changeAccount = async () => {
    await signOut(firebaseAuth).catch(() => undefined);
    await fetch("/api/auth/session", { method: "DELETE", credentials: "same-origin" });
    window.location.assign(returnPath);
  };

  return <div className="pro-success-status" role="status" aria-live="polite">
    <span>{es ? "TU ACCESO PRO" : "YOUR PRO ACCESS"}</span>
    <h1>{state === "paid" || state === "binding" ? (es ? "Pago confirmado" : "Payment confirmed") : (es ? "Verificando el pago" : "Checking your payment")}</h1>
    {state === "checking" || state === "binding" ? <p>{es ? "Un momento…" : "One moment…"}</p> : null}
    {state === "pending" && <>
      <p>{es ? "Estamos esperando la confirmación de la primera cuota. PRO se activará cuando el proveedor confirme el pago." : "We are waiting for the first completed payment. PRO will activate after provider confirmation."}</p>
      <button className="pro-success-button" type="button" onClick={() => void check()}>{es ? "Volver a comprobar" : "Check again"}</button>
    </>}
    {state === "paid" && !signedIn && <>
      {email && linkSent !== "failed" && <>
        <p>{linkSent === "sent"
          ? (es ? "Listo. Te enviamos un email con tu acceso a:" : "Done. We emailed your access link to:")
          : (es ? "Estamos creando tu acceso para:" : "Creating your access for:")} <strong>{email}</strong></p>
        {linkSent === "sent" && <p>{es ? "Abre el email y toca el enlace: entras directo, con tu cuenta creada y PRO activado. Si no lo ves, revisa spam." : "Open the email and tap the link: you go straight in, with your account created and PRO active. If you cannot see it, check spam."}</p>}
        {linkSent === "sent" && provider && <button className="pro-secondary" type="button" onClick={() => void sendAccessLink(provider, email)}>{es ? "Reenviar el email" : "Resend the email"}</button>}
      </>}
      {email && linkSent === "failed" && <p>{es ? "Email confirmado para la compra:" : "Confirmed buyer email:"} <strong>{email}</strong></p>}
      {!email && <p>{es ? "Vincula la compra a tu cuenta para abrir la clase." : "Link your purchase to an account to open the lesson."}</p>}
      {!otherWays && email && <p><button className="pro-secondary" type="button" onClick={() => setOtherWays(true)}>{es ? "Prefiero entrar de otra forma" : "I prefer another way in"}</button></p>}
      {(otherWays || !email) && <>
        <button className="pro-success-button" type="button" disabled={busy} onClick={() => void google()}>{es ? "Continuar con Google" : "Continue with Google"}</button>
        <p><Link className="pro-secondary" href={registrationUrl} onClick={() => { if (email) sessionStorage.setItem("spanishcue.claim.confirmedEmail", email); }}>{es ? "Crear cuenta con email" : "Create account with email"}</Link></p>
        <p><Link className="pro-secondary" href={signInUrl} onClick={() => { if (email) sessionStorage.setItem("spanishcue.claim.confirmedEmail", email); }}>{es ? "Ya tengo cuenta" : "I already have an account"}</Link></p>
      </>}
    </>}
    {state === "error" && <>
      <p role="alert">{message}</p>
      <button className="pro-success-button" type="button" onClick={() => { if (provider && signedIn && email) void bind(provider); else void check(); }}>{es ? "Reintentar" : "Try again"}</button>
      {signedIn && <button className="pro-secondary" type="button" onClick={() => void changeAccount()}>{es ? "Ingresar con otro email" : "Sign in with another email"}</button>}
    </>}
  </div>;
}
