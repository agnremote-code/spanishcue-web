"use client";

import Link from "next/link";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  type User,
} from "firebase/auth";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { firebaseAuth } from "../firebase-client";
import { useI18n } from "../i18n/LocaleProvider";
import { authMessageKeyFor, establishSession } from "../ingresar/AuthForm";
import { trackMarketingEvent } from "./analytics";
import { shouldPromptFreeLessonRegistration } from "./free-lesson-gate.mjs";

const copy = {
  es: {
    kicker: "TU PRUEBA GRATUITA",
    title: "Tu clase sigue acá.",
    body: "Ya probaste una buena parte. Para seguir usando esta clase gratis, creá tu cuenta gratuita y continuá exactamente donde estabas.",
    proof: "Gratis · Sin tarjeta · Más clases para probar",
    email: "Email",
    password: "Nueva contraseña",
    passwordHint: "Mínimo 6 caracteres",
    submit: "REGISTRARSE",
    google: "Registrarse con Google",
    divider: "o continuá con",
    existing: "¿Ya tenés cuenta?",
    signIn: "Entrá y seguí desde acá",
    busy: "CREANDO TU CUENTA…",
    lesson: "CLASE EN CURSO",
    legalStart: "Al registrarte, aceptás los",
    terms: "Términos",
    legalMiddle: "y la",
    privacy: "Política de privacidad",
  },
  en: {
    kicker: "YOUR FREE TRIAL",
    title: "Your lesson is still here.",
    body: "You have already tried a good part of it. Create your free account to keep using this lesson and continue exactly where you left off.",
    proof: "Free · No card · More lessons to try",
    email: "Email",
    password: "New password",
    passwordHint: "At least 6 characters",
    submit: "SIGN UP",
    google: "Sign up with Google",
    divider: "or continue with",
    existing: "Already have an account?",
    signIn: "Sign in and continue here",
    busy: "CREATING YOUR ACCOUNT…",
    lesson: "LESSON IN PROGRESS",
    legalStart: "By signing up, you agree to the",
    terms: "Terms",
    legalMiddle: "and the",
    privacy: "Privacy Policy",
  },
} as const;

export default function FreeLessonRegistrationGate({
  lessonId,
  lessonTitle,
}: {
  lessonId: number;
  lessonTitle: string;
}) {
  const { locale, t } = useI18n();
  const c = copy[locale];
  const [activeMs, setActiveMs] = useState(0);
  const [open, setOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const openedRef = useRef(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") setActiveMs((value) => value + 1000);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (registered || openedRef.current || !shouldPromptFreeLessonRegistration(activeMs)) return;
    openedRef.current = true;
    setOpen(true);
    trackMarketingEvent("signup_start", {
      placement: "free_lesson_gate",
      lesson_id: lessonId,
      lesson_title: lessonTitle,
      active_seconds: Math.round(activeMs / 1000),
    });
  }, [activeMs, lessonId, lessonTitle, registered]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => emailRef.current?.focus());
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  const finish = async (user: User, method: "email" | "google", newAccount: boolean) => {
    await establishSession(user);
    if (newAccount) trackMarketingEvent("signup_complete", { method, placement: "free_lesson_gate", lesson_id: lessonId });
    document.documentElement.dataset.freeLessonRegistration = "complete";
    window.dispatchEvent(new CustomEvent("spanishcue:session-ready"));
    setRegistered(true);
    setOpen(false);
  };

  const run = async (action: () => Promise<{ user: User; method: "email" | "google"; newAccount: boolean }>) => {
    setBusy(true);
    setError("");
    try {
      await setPersistence(firebaseAuth, browserLocalPersistence);
      const result = await action();
      await finish(result.user, result.method, result.newAccount);
    } catch (reason) {
      setError(t(authMessageKeyFor(reason)));
      setBusy(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    void run(async () => {
      const credential = await createUserWithEmailAndPassword(firebaseAuth, cleanEmail, password);
      return { user: credential.user, method: "email" as const, newAccount: true };
    });
  };

  const google = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    void run(async () => {
      const credential = await signInWithPopup(firebaseAuth, provider);
      return {
        user: credential.user,
        method: "google" as const,
        newAccount: Boolean(getAdditionalUserInfo(credential)?.isNewUser),
      };
    });
  };

  const keepFocusInside = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("input, button, a[href]") || [])
      .filter((element) => !element.hasAttribute("disabled"));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;
  const returnTo = typeof window === "undefined" ? "/" : `${window.location.pathname}${window.location.search}`;
  return <div className="free-registration-gate" data-free-lesson-gate="open">
    <section ref={dialogRef} className="free-registration-dialog" role="dialog" aria-modal="true" aria-labelledby="free-registration-title" aria-describedby="free-registration-copy" onKeyDown={keepFocusInside}>
      <aside aria-hidden="true">
        <span>SPANISH<b>CUE</b></span>
        <img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" />
        <div><small>{c.lesson}</small><strong>{lessonTitle}</strong></div>
      </aside>
      <div className="free-registration-form">
        <span className="free-registration-kicker">{c.kicker}</span>
        <h2 id="free-registration-title">{c.title}</h2>
        <p id="free-registration-copy">{c.body}</p>
        <small className="free-registration-proof">✓ {c.proof}</small>
        <form onSubmit={submit}>
          <label>{c.email}<input ref={emailRef} type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="teacher@email.com" /></label>
          <label>{c.password}<input type="password" autoComplete="new-password" minLength={6} required value={password} onChange={(event) => setPassword(event.target.value)} placeholder={c.passwordHint} /></label>
          {error && <p className="free-registration-error" role="alert">{error}</p>}
          <button className="free-registration-submit" type="submit" disabled={busy}>{busy ? c.busy : c.submit}</button>
        </form>
        <div className="free-registration-divider"><span>{c.divider}</span></div>
        <button className="free-registration-google" type="button" onClick={google} disabled={busy}><b aria-hidden="true">G</b>{c.google}</button>
        <p className="free-registration-legal">{c.legalStart} <Link href="/terms">{c.terms}</Link> {c.legalMiddle} <Link href="/privacy">{c.privacy}</Link>.</p>
        <p className="free-registration-existing">{c.existing} <a href={`/ingresar?modo=entrar&returnTo=${encodeURIComponent(returnTo)}`}>{c.signIn}</a>.</p>
      </div>
    </section>
  </div>;
}
