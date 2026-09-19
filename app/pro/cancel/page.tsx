import { headers } from "next/headers";
import Link from "next/link";
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import { localeFromHeaders, translate } from "../../i18n/messages";

export default async function CancelPage({ searchParams }: { searchParams: Promise<{ returnTo?: string }> }) {
  const [params, requestHeaders] = await Promise.all([searchParams, headers()]);
  const locale = localeFromHeaders(requestHeaders);
  const returnTo = params.returnTo?.startsWith("/") && !params.returnTo.startsWith("//") ? params.returnTo : "/";
  return <main className="pro-result"><LanguageSwitcher className="pro-result-language" /><img src="/brand/mascot/portrait.webp" alt="" width="512" height="512" /><span>{translate(locale, "success.kicker")}</span><h1>{translate(locale, "cancel.title")}</h1><p>{translate(locale, "cancel.copy")}</p><Link className="pro-success-button" href={`/acceso?returnTo=${encodeURIComponent(returnTo)}`}>{translate(locale, "cancel.retry")}</Link><Link className="pro-secondary" href="/">{translate(locale, "cancel.explore")}</Link></main>;
}
