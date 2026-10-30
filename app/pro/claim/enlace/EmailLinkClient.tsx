"use client";

import { browserLocalPersistence, isSignInWithEmailLink, setPersistence, signInWithEmailLink } from "firebase/auth";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { firebaseAuth } from "../../../firebase-client";
import { establishSession } from "../../../ingresar/AuthForm";
import { trackMarketingEvent } from "../../../marketing/analytics";
import type { Locale } from "../../../i18n/messages";

/** Opens the emailed sign-in link: Firebase signs the buyer in (creating the account the first time,
 *  email already verified), the session is established, and the purchase is bound to the account.
 *  On another device the bind finds the purchase by the verified buyer email instead of the cookie. */
export default function EmailLinkClient({ provider, locale }: { provider: "paddle" | "paypal"; locale: Locale }) {
  const es = locale === "es";
  const [state, setState] = useState<"working" | "ask-email" | "error">("working");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const started = useRef(false);

  const finish = useCallback(async (address: string) => {
    setState("working");
    try {
      await setPersistence(firebaseAuth, browserLocalPersistence);
      const { user } = await signInWithEmailLink(firebaseAuth, address, window.location.href);
      try { window.localStorage.removeItem("spanishcue.emailForSignIn"); } catch {}
      // No returnTo: in the paying browser establishSession itself continues to /pro/claim, which binds.
      await establishSession(user);
      trackMarketingEvent("signup_complete", { placement: "post_payment_email_link" });
      const response = await fetch("/api/billing/claim/bind", {
        method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
        body: JSON.stringify({ provider }),
      });
      const body = await response.json().catch(() => ({})) as { accessConfirmed?: boolean; returnTo?: string };
      // Without a bindable purchase here, the claim page explains what is missing and offers a retry.
      window.location.assign(response.ok && body.accessConfirmed && body.returnTo ? body.returnTo : `/pro/claim?provider=${provider}`);
    } catch {
      setMessage(es ? "Este enlace ya se usó o venció. Vuelve a la página del pago para pedir otro." : "This link was already used or has expired. Go back to the payment page to request a new one.");
      setState("error");
    }
  }, [es, provider]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!isSignInWithEmailLink(firebaseAuth, window.location.href)) {
      void Promise.resolve().then(() => { setMessage(es ? "Este enlace no es válido." : "This link is not valid."); setState("error"); });
      return;
    }
    let saved = "";
    try { saved = window.localStorage.getItem("spanishcue.emailForSignIn") || ""; } catch {}
    // Opened on another device: Firebase needs the address once to confirm it is the same person.
    if (saved) void finish(saved); else void Promise.resolve().then(() => setState("ask-email"));
  }, [es, finish]);

  const submit = (event: FormEvent) => { event.preventDefault(); if (email.trim()) void finish(email.trim()); };

  return <div className="pro-success-status" role="status" aria-live="polite">
    <span>{es ? "TU ACCESO PRO" : "YOUR PRO ACCESS"}</span>
    <h1>{state === "error" ? (es ? "No pudimos entrar" : "We could not sign you in") : (es ? "Activando tu cuenta" : "Activating your account")}</h1>
    {state === "working" && <p>{es ? "Un momento…" : "One moment…"}</p>}
    {state === "ask-email" && <form onSubmit={submit}>
      <p>{es ? "Escribe el email con el que pagaste para confirmar que eres tú." : "Type the email you paid with to confirm it is you."}</p>
      <input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Email" />
      <button className="pro-success-button" type="submit">{es ? "Entrar" : "Sign in"}</button>
    </form>}
    {state === "error" && <p role="alert">{message}</p>}
  </div>;
}
