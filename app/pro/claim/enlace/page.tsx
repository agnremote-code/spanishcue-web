import type { Metadata } from "next";
import { headers } from "next/headers";
import { localeFromHeaders } from "../../../i18n/messages";
import EmailLinkClient from "./EmailLinkClient";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Tu acceso PRO | SPANISHCUE", robots: { index: false, follow: false } };

/** Landing of the sign-in link emailed after a payment without an account (ClaimClient). */
export default async function EmailLinkPage({ searchParams }: { searchParams: Promise<{ provider?: string }> }) {
  const [requestHeaders, params] = await Promise.all([headers(), searchParams]);
  const provider = params.provider === "paypal" ? "paypal" : "paddle";
  return <main className="pro-result">
    <img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" />
    <EmailLinkClient provider={provider} locale={localeFromHeaders(requestHeaders)} />
  </main>;
}
