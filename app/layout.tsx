import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./special.css";
import "./spanishcue-brand.css";
import "./acceso/style.css";
import "./marketing/marketing.css";
import "./marketing/free-lesson-gate.css";
import "./marketing-landing/style.css";
import "./marketing-landing/overrides.css";
import "./privacy/consent.css";
import AuthSessionSync from "./AuthSessionSync";
import { LocaleProvider } from "./i18n/LocaleProvider";
import { localeFromHeaders, translate } from "./i18n/messages";
import { lessons } from "./lesson-catalog";
import {
  fullAccessFromHeaders,
  isFreeLesson,
  lessonAtPath,
  signedInFromHeaders,
} from "./access-policy";
import MarketingAttribution from "./marketing/MarketingAttribution";
import GoogleAnalytics from "./marketing/GoogleAnalytics";
import { FreeLessonConversionBar } from "./marketing/MarketingSections";
import FreeLessonRegistrationGate from "./marketing/FreeLessonRegistrationGate";
import { audienceFromAccess, primaryCtaFor } from "./marketing/cta-state";
import CookieConsent from "./privacy/CookieConsent";
import { isSearchPrivatePath, localizedUrl } from "./seo";

function safePathname(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const locale = localeFromHeaders(requestHeaders);
  const pathname = safePathname(requestHeaders.get("x-spanishcue-pathname"));
  const canonicalBase = localizedUrl(pathname, "es");
  const canonical = localizedUrl(pathname, locale);
  return {
    title: translate(locale, "meta.title"),
    description: translate(locale, "meta.description"),
    metadataBase: new URL("https://spanishcue.com"),
    alternates: {
      canonical,
      languages: {
        es: canonicalBase,
        en: localizedUrl(pathname, "en"),
        "x-default": canonicalBase,
      },
    },
    openGraph: {
      title: translate(locale, "meta.title"),
      description: translate(locale, "meta.openGraphDescription"),
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      url: canonical,
      images: [{
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: translate(locale, "meta.openGraphAlt"),
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: translate(locale, "meta.title"),
      description: translate(locale, "meta.description"),
      images: ["/og.png"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    manifest: "/manifest.webmanifest",
    robots: isSearchPrivatePath(pathname)
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = localeFromHeaders(requestHeaders);
  const pathname = safePathname(requestHeaders.get("x-spanishcue-pathname"));
  const currentLesson = lessonAtPath(pathname, lessons);
  const freeLesson = Boolean(currentLesson && isFreeLesson(currentLesson.id));
  const fullAccess = fullAccessFromHeaders(requestHeaders);
  const signedIn = signedInFromHeaders(requestHeaders);
  const audience = audienceFromAccess(signedIn, fullAccess);
  const freeLessonCta = primaryCtaFor(audience, pathname);
  return (
    <html lang={locale}>
      <body>
        <LocaleProvider initialLocale={locale}>
          <AuthSessionSync serverSignedIn={signedIn} />
          <GoogleAnalytics />
          <MarketingAttribution
            pathname={pathname}
            freeLesson={freeLesson}
            lessonId={currentLesson?.id}
            lessonTitle={currentLesson?.title}
          />
          {children}
          <CookieConsent />
          {freeLesson && currentLesson && !signedIn && (
            <FreeLessonRegistrationGate lessonId={currentLesson.id} lessonTitle={currentLesson.title} />
          )}
          {freeLesson && currentLesson && !fullAccess && (
            <FreeLessonConversionBar
              lessonId={currentLesson.id}
              lessonTitle={currentLesson.title}
              primary={freeLessonCta}
              primaryLabel={translate(locale, freeLessonCta.labelKey)}
            />
          )}
        </LocaleProvider>
      </body>
    </html>
  );
}
