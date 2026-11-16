import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { fullAccessFromHeaders, signedInFromHeaders } from "../access-policy";
import { TEACHER_LANDING_PATH } from "../audience/audiences";
import { localeFromHeaders, type Locale } from "../i18n/messages";
import { lessons } from "../lesson-catalog";
import { SpanishCueWordmark } from "../SpanishCueBrand";
import { canonicalUrl } from "../seo";
import StudentHub, { type HubCard } from "./StudentHub";
import { HUB_PATH, HUB_WORLDS } from "./worlds.mjs";
import "./jugar.css";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Jugar · Mundos 3D para aprender español | SPANISHCUE",
    description: "Tu mapa de mundos 3D para practicar español jugando: elige un mundo, vive sus escenas y guarda tu progreso en tu pasaporte. Instálalo en tu teléfono.",
  },
  en: {
    title: "Play · 3D worlds to learn Spanish | SPANISHCUE",
    description: "Your map of 3D worlds to practise Spanish by playing: pick a world, live its scenes and keep your progress in your passport. Install it on your phone.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const copy = meta[locale];
  const canonical = canonicalUrl(HUB_PATH);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical },
    appleWebApp: { capable: true, title: "SpanishCue", statusBarStyle: "black-translucent" },
    openGraph: { title: copy.title, description: copy.description, url: canonical, type: "website", siteName: "SPANISHCUE" },
    // A personal hub, not a landing: the student landing stays the indexed page.
    robots: { index: false, follow: true },
  };
}

export const viewport: Viewport = { themeColor: "#061b3e", viewportFit: "cover" };

/** Level shown on a card: the catalog's range, or its single level. */
const levelOf = (lesson: { level: string; displayLevel?: string }) => lesson.displayLevel ?? lesson.level;

export default async function JugarPage() {
  const requestHeaders = await headers();
  const locale = localeFromHeaders(requestHeaders);
  const signedIn = signedInFromHeaders(requestHeaders);
  const fullAccess = fullAccessFromHeaders(requestHeaders);
  const es = locale === "es";

  // Catalog facts only (title, cover, level, route). A world opens through its
  // class route when the visitor has full access, through its public door when
  // it has one, and stays closed otherwise: the hub never grants access.
  const cards: HubCard[] = HUB_WORLDS.flatMap((world) => {
    const lesson = lessons.find((item) => item.id === world.id);
    if (!lesson?.path) return [];
    const href = fullAccess ? lesson.path : world.open ?? null;
    return [{ id: world.id, title: lesson.title, level: levelOf(lesson), image: lesson.image, href }];
  });

  return (
    <main className="jg-page">
      <header className="jg-top">
        <Link className="jg-brand" href={HUB_PATH} aria-label="SpanishCue">
          <SpanishCueWordmark compact />
        </Link>
        <a className="jg-account" href={signedIn ? "/cuenta" : `/ingresar?modo=entrar&returnTo=${encodeURIComponent(HUB_PATH)}`}>
          {signedIn ? (es ? "Mi cuenta" : "My account") : es ? "Entrar" : "Log in"}
        </a>
      </header>
      <StudentHub cards={cards} locale={locale} signedIn={signedIn} fullAccess={fullAccess} />
      <p className="jg-crosslink">
        <a href={TEACHER_LANDING_PATH}>{es ? "¿Enseñas español? SpanishCue para profesores" : "Do you teach Spanish? SpanishCue for teachers"} →</a>
      </p>
    </main>
  );
}
