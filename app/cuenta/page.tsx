import { env } from "cloudflare:workers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserSessionFromHeaders, isFreeLesson, localLessonPath, signedInFromHeaders } from "../access-policy";
import type { AccountAccess } from "../account-types";
import { SpanishCueBrand } from "../SpanishCueBrand";
import LogoutButton from "../LogoutButton";
import PasswordResetButton from "../PasswordResetButton";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { localeFromHeaders } from "../i18n/messages";
import { lessons } from "../lesson-catalog";
import { catalogLessons } from "../conversation-families/catalog";
import { resolveFirebaseAccount } from "../../db/accounts";
import "./style.css";
import SubscriptionManager from "./SubscriptionManager";
import { DASHBOARD_TABS, dashboardTabFromValue, dashT, dateLabel, type DashKey, type DashLesson, type DashboardTab } from "./copy";
import { SectionBoundary } from "./ui";
import Overview, { type PlanSummary } from "./modules/Overview";
import Students from "./modules/Students";
import History from "./modules/History";
import Favorites from "./modules/Favorites";

export const dynamic = "force-dynamic";

const icons: Record<DashboardTab, string> = { inicio: "⌂", alumnos: "☺", historial: "≡", favoritos: "★", suscripcion: "◆", ajustes: "⚙" };

/** Every lesson id the dashboard may show (records, progress, favorites), with the library's public title and route. */
function dashboardLessons(): DashLesson[] {
  const family = new Map(catalogLessons.map((lesson) => [lesson.id, lesson]));
  return lessons.map((lesson) => {
    const card = family.get(lesson.id) ?? lesson;
    const href = localLessonPath(card) ?? null;
    return { id: lesson.id, title: card.title, level: card.displayLevel || card.level, category: lesson.category, href, image: card.image, free: isFreeLesson(lesson.id) };
  });
}

export default async function Account({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; nuevo?: string; alumno?: string; vista?: string }>;
}) {
  const [requestHeaders, params] = await Promise.all([headers(), searchParams]);
  const tab = dashboardTabFromValue(params.tab);
  if (!signedInFromHeaders(requestHeaders)) {
    const back = tab === "inicio" ? "/cuenta" : `/cuenta?tab=${tab}`;
    redirect(`/ingresar?modo=entrar&returnTo=${encodeURIComponent(back)}`);
  }

  const session = getUserSessionFromHeaders(requestHeaders);
  const locale = localeFromHeaders(requestHeaders);
  const t = (key: DashKey) => dashT(locale, key);
  const fullAccess = session.isPro || session.isOwner;
  let access: AccountAccess | null = null;
  try {
    if (session.userId) access = await resolveFirebaseAccount(env.DB, { uid: session.userId, email: session.email ?? "", emailVerified: true, displayName: null });
  } catch { access = null; }

  const roleLabel = session.isOwner ? t("role.owner") : fullAccess ? t("role.pro") : t("role.free");
  const roleTone = session.isOwner ? "owner" : fullAccess ? "pro" : "free";
  const sourceLabel = access?.accessSource === "billing" ? t("sub.sourceBilling") : access?.accessSource === "owner" ? t("sub.sourceOwner") : access?.accessSource ? t("sub.sourceManual") : null;
  const plan: PlanSummary = session.isOwner
    ? { label: t("sub.ownerPlan"), detail: t("sub.ownerCopy"), tone: "owner" }
    : fullAccess
      ? { label: t("sub.proPlan"), detail: [sourceLabel, access?.accessExpiresAt ? `${t("sub.until")} ${dateLabel(locale, access.accessExpiresAt)}` : null].filter(Boolean).join(" · "), tone: "pro" }
      : { label: t("sub.freePlan"), detail: t("sub.freeCopy"), tone: "free" };
  const dashLessons = dashboardLessons();
  const name = session.email?.split("@")[0] ?? "";

  return (
    <div className="cx-shell">
      <a className="cx-skip" href="#cx-main">{t("skip")}</a>
      <header className="cx-topbar">
        <Link href="/" className="cx-brand" aria-label="SPANISHCUE"><SpanishCueBrand variant="compact" context={t("nav.account")} /></Link>
        <nav className="cx-crumbs" aria-label="Breadcrumb"><Link href="/cuenta">{t("nav.account")}</Link><span aria-hidden="true">/</span><b>{t(`nav.${tab}` as DashKey)}</b></nav>
        <LanguageSwitcher className="cx-lang" />
        <span className={`cx-role is-${roleTone}`}>{roleLabel}</span>
        <Link className="cx-btn is-primary cx-library" href="/">{t("nav.library")} →</Link>
      </header>

      <div className="cx-layout">
        <aside className="cx-side">
          <nav aria-label={t("nav.label")}>
            <ol>
              {DASHBOARD_TABS.map((item, index) => (
                <li key={item}>
                  <Link href={item === "inicio" ? "/cuenta" : `/cuenta?tab=${item}`} aria-current={tab === item ? "page" : undefined}>
                    <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                    <span><em aria-hidden="true">{icons[item]}</em>{t(`nav.${item}` as DashKey)}</span>
                  </Link>
                </li>
              ))}
            </ol>
            {session.isOwner && <div className="cx-side-group">
              <p>{t("nav.admin")}</p>
              <Link href="/admin"><i aria-hidden="true">A</i><span>{t("nav.adminTeachers")}</span></Link>
              <Link href="/admin/reportes"><i aria-hidden="true">R</i><span>{t("nav.adminReports")}</span></Link>
            </div>}
          </nav>
          <div className="cx-side-user">
            <strong title={session.email ?? ""}>{session.email}</strong>
            <LogoutButton className="cx-link" />
          </div>
        </aside>

        <main className="cx-main" id="cx-main" tabIndex={-1}>
          <header className="cx-head">
            <p className="cx-kicker">{tab === "inicio" ? `${t("home.hello")}, ${name}` : t("nav.account")}</p>
            <h1>{t(`head.${tab}` as DashKey)}</h1>
            <p>{t(`head.${tab}Copy` as DashKey)}</p>
          </header>

          <SectionBoundary>
            {tab === "inicio" && <Overview lessons={dashLessons} homeworkEnabled={fullAccess} plan={plan} />}
            {tab === "alumnos" && <Students lessons={dashLessons} startNew={params.nuevo === "1"} homeworkEnabled={fullAccess} />}
            {tab === "historial" && <History lessons={dashLessons} startNew={params.nuevo === "1"} studentId={params.alumno ?? null} view={params.vista === "abiertas" ? "abiertas" : "registradas"} />}
            {tab === "favoritos" && <Favorites lessons={dashLessons} fullAccess={fullAccess} />}
            {tab === "suscripcion" && <div className="cx-stack">
              <section className={`cx-panel cx-plan is-${plan.tone}`} aria-labelledby="plan-title">
                <header><h2 id="plan-title">{t("sub.plan")}</h2><span className={`cx-role is-${roleTone}`}>{roleLabel}</span></header>
                <strong>{plan.label}</strong>
                {plan.detail && <p>{plan.detail}</p>}
                {fullAccess && !session.isOwner && <dl className="cx-facts"><div><dt>{t("sub.source")}</dt><dd>{sourceLabel ?? "—"}</dd></div><div><dt>{t("sub.until")}</dt><dd>{access?.accessExpiresAt ? dateLabel(locale, access.accessExpiresAt) : t("sub.noEnd")}</dd></div></dl>}
                {!fullAccess && <Link className="cx-btn is-primary" href="/pricing">{t("sub.upgrade")}</Link>}
              </section>
              {!session.isOwner && <SubscriptionManager fullAccess={fullAccess} />}
            </div>}
            {tab === "ajustes" && <div className="cx-settings">
              <section className="cx-panel"><header><h2>{t("set.profile")}</h2></header>
                <dl className="cx-facts"><div><dt>{t("set.email")}</dt><dd>{session.email}</dd></div><div><dt>{t("set.role")}</dt><dd>{roleLabel} · {plan.label}</dd></div></dl>
              </section>
              <section className="cx-panel"><header><h2>{t("set.language")}</h2></header><p className="cx-muted">{t("set.languageCopy")}</p><LanguageSwitcher className="cx-lang is-large" /></section>
              <section className="cx-panel"><header><h2>{t("set.security")}</h2></header><p className="cx-muted">{t("set.securityCopy")}</p>{session.email && <PasswordResetButton email={session.email} />}</section>
              <section className="cx-panel"><header><h2>{t("set.session")}</h2></header><p className="cx-muted">{t("set.sessionCopy")}</p><LogoutButton className="cx-btn" /></section>
              <section className="cx-panel"><header><h2>{t("set.data")}</h2></header><p className="cx-muted">{t("set.dataCopy")}</p><a className="cx-btn" href="/api/students/export" download>{t("students.export")}</a></section>
              {session.isOwner && <section className="cx-panel"><header><h2>{t("set.admin")}</h2></header><p className="cx-muted">{t("set.adminCopy")}</p><Link className="cx-btn is-primary" href="/admin">{t("set.openAdmin")}</Link></section>}
            </div>}
          </SectionBoundary>
        </main>
      </div>
    </div>
  );
}
