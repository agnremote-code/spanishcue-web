import { headers } from "next/headers";
import { signedInFromHeaders } from "../../access-policy";
import SuccessClient from "./SuccessClient";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import { localeFromHeaders, translate } from "../../i18n/messages";

function safePath(value: string | undefined) { return value?.startsWith("/") && !value.startsWith("//") ? value : "/"; }

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ subscription_id?: string; returnTo?: string }> }) {
  const [params, requestHeaders] = await Promise.all([searchParams, headers()]);
  const locale = localeFromHeaders(requestHeaders);
  return <main className="pro-result"><LanguageSwitcher className="pro-result-language" /><img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" /><span>{translate(locale, "success.kicker")}</span><h1>{translate(locale, "success.title")}</h1><p>{translate(locale, "success.copy")}</p>{signedInFromHeaders(requestHeaders) ? <SuccessClient subscriptionId={params.subscription_id || ""} returnTo={safePath(params.returnTo)} /> : <a className="pro-success-button" href={`/ingresar?modo=entrar&returnTo=${encodeURIComponent(safePath(params.returnTo))}`}>{translate(locale, "success.account")}</a>}</main>;
}
