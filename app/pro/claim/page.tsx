import type { Metadata } from "next";
import { headers } from "next/headers";
import { signedInFromHeaders } from "../../access-policy";
import { localeFromHeaders } from "../../i18n/messages";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import ClaimClient from "./ClaimClient";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Confirmar pago | SPANISHCUE", robots: { index: false, follow: false } };

export default async function ClaimPage({ searchParams }: { searchParams: Promise<{ provider?: string }> }) {
  const [requestHeaders, params] = await Promise.all([headers(), searchParams]);
  const locale = localeFromHeaders(requestHeaders);
  const provider = params.provider === "paypal" || params.provider === "paddle" ? params.provider : null;
  return <main className="pro-result">
    <LanguageSwitcher className="pro-result-language" />
    <img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" />
    <ClaimClient initialProvider={provider} signedIn={signedInFromHeaders(requestHeaders)} locale={locale} />
  </main>;
}
