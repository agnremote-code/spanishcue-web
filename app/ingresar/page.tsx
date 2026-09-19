import { env } from "cloudflare:workers";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import { signedInFromHeaders } from "../access-policy";
import AuthForm from "./AuthForm";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { localeFromHeaders, translate } from "../i18n/messages";
import "./style.css";

export const dynamic = "force-dynamic";

function safeReturnTo(value: string | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ modo?: string; returnTo?: string }>;
}) {
  const params = await searchParams;
  const returnTo = safeReturnTo(params.returnTo);
  const requestHeaders = await headers();
  if (signedInFromHeaders(requestHeaders)) redirect(returnTo);
  const locale = localeFromHeaders(requestHeaders);
  const runtimeEnv = env as typeof env & { CHESPANISH_APPLE_AUTH_ENABLED?: string };
  return (
    <main className="auth-page">
      <div className="auth-topline">
        <Link className="auth-back" href="/">← {translate(locale, "auth.back")}</Link>
        <LanguageSwitcher className="page-language" />
      </div>
      <AuthForm
        initialMode={params.modo === "registro" ? "registro" : "entrar"}
        returnTo={returnTo}
        appleEnabled={runtimeEnv.CHESPANISH_APPLE_AUTH_ENABLED === "true"}
      />
    </main>
  );
}
