"use client";

import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";

/** Last-resort fallback for /cuenta: never a blank page, always a way back. */
export default function AccountError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { locale } = useI18n();
  const es = locale !== "en";
  return (
    <main className="pro-result">
      <img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" />
      <span>SPANISHCUE</span>
      <h1>{es ? "No pudimos abrir tu cuenta" : "We could not open your account"}</h1>
      <p>{es ? "Tus datos están a salvo. Vuelve a intentarlo o abre la biblioteca." : "Your data is safe. Try again or open the library."}</p>
      <button className="pro-success-button" type="button" onClick={reset}>{es ? "Reintentar" : "Try again"} →</button>
      <Link className="pro-secondary" href="/">{es ? "Ir a la biblioteca" : "Go to the library"}</Link>
    </main>
  );
}
