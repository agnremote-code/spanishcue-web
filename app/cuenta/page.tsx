import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserSessionFromHeaders, signedInFromHeaders } from "../access-policy";
import {
  ACCOUNT_TAB_KEYS,
  accountEmptyState,
  accountTabFromValue,
  type AccountTabKey,
} from "../account-types";
import LogoutButton from "../LogoutButton";
import PasswordResetButton from "../PasswordResetButton";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { localeFromHeaders, translate, type MessageKey } from "../i18n/messages";
import "../teachers.css";
import "./style.css";
import SubscriptionManager from "./SubscriptionManager";
import { lessons } from "../lesson-catalog";
import { StudentTracker } from "../student-tracker/StudentTracker";

export const dynamic = "force-dynamic";

const tabLabels: Record<"es" | "en", Record<AccountTabKey, string>> = {
  es: {
    inicio: "Inicio",
    alumnos: "Mis alumnos",
    historial: "Historial de clases",
    favoritos: "Favoritos",
    suscripcion: "Suscripción",
    ajustes: "Ajustes",
  },
  en: {
    inicio: "Overview",
    alumnos: "My students",
    historial: "Class history",
    favoritos: "Favorites",
    suscripcion: "Subscription",
    ajustes: "Settings",
  },
};

export default async function Account({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const [requestHeaders, params] = await Promise.all([headers(), searchParams]);
  if (!signedInFromHeaders(requestHeaders)) {
    redirect("/ingresar?modo=entrar&returnTo=%2Fcuenta");
  }

  const session = getUserSessionFromHeaders(requestHeaders);
  const activeTab = accountTabFromValue(params.tab);
  const locale = localeFromHeaders(requestHeaders);
  const labels = tabLabels[locale];
  const t = (key: MessageKey) => translate(locale, key);
  const status = session.isOwner
    ? t("account.ownerStatus")
    : session.isPro
      ? t("account.fullStatus")
      : t("account.freeStatus");

  return (
    <div className="teacher-app">
      <main className="teacher-main account-page">
        <div className="account-topline">
          <Link href="/">← {t("common.library")}</Link>
          <LanguageSwitcher className="page-language" />
        </div>

        <section className="teacher-intro account-intro">
          <div>
            <p>{t("account.kicker")}</p>
            <h1>{session.isOwner ? t("account.ownerTitle") : t("account.teacherTitle")}</h1>
            <div>{session.email}</div>
          </div>
          <strong className={`account-access-badge ${session.role}`}>{status}</strong>
        </section>

        <nav className="account-tabs" aria-label={locale === "es" ? "Secciones de la cuenta" : "Account sections"}>
          {ACCOUNT_TAB_KEYS.map((tab) => (
            <Link
              key={tab}
              href={`/cuenta?tab=${tab}`}
              className={activeTab === tab ? "active" : undefined}
              aria-current={activeTab === tab ? "page" : undefined}
            >
              {labels[tab]}
            </Link>
          ))}
        </nav>

        {activeTab === "inicio" && (
          <section className="account-panel" aria-labelledby="account-overview-title">
            <span>{locale === "es" ? "ESTADO ACTUAL" : "CURRENT STATUS"}</span>
            <h2 id="account-overview-title">{status}</h2>
            <p>
              {locale === "es"
                ? "Tu sesión está verificada en el servidor. El acceso PRO se decide por los permisos de tu cuenta, no solamente por haber iniciado sesión."
                : "Your session is verified on the server. PRO access is determined by your account permissions, not merely by being signed in."}
            </p>
            <dl className="account-summary">
              <div><dt>{t("account.email")}</dt><dd>{session.email}</dd></div>
              <div><dt>{t("account.plan")}</dt><dd>{session.isPro ? t("account.completeAccess") : t("account.freeAccount")}</dd></div>
            </dl>
            <Link className="dialog-primary account-library-link" href="/">{t("common.library")} →</Link>
          </section>
        )}

        {activeTab === "alumnos" && (
          <StudentTracker draftScope={session.userId || "unknown"} lessons={lessons.map(({ id, title }) => ({ id, title }))} />
        )}

        {activeTab === "historial" && (
          <StudentTracker historyOnly draftScope={session.userId || "unknown"} lessons={lessons.map(({ id, title }) => ({ id, title }))} />
        )}

        {activeTab === "favoritos" && (() => {
          const empty = accountEmptyState(activeTab, locale);
          return (
            <section className="account-panel account-empty" aria-labelledby={`account-${activeTab}-title`}>
              <span>{locale === "es" ? "SIN DATOS GUARDADOS" : "NO STORED DATA"}</span>
              <h2 id={`account-${activeTab}-title`}>{empty.title}</h2>
              <p>{empty.body}</p>
              <small>{locale === "es" ? "No se muestran datos de ejemplo como si fueran reales." : "Sample data is not shown as if it were real."}</small>
            </section>
          );
        })()}

        {activeTab === "suscripcion" && (
          <section aria-label={labels.suscripcion}>
            <SubscriptionManager fullAccess={session.isPro} />
          </section>
        )}

        {activeTab === "ajustes" && (
          <section className="account-panel" aria-labelledby="account-settings-title">
            <span>{locale === "es" ? "CUENTA Y SEGURIDAD" : "ACCOUNT AND SECURITY"}</span>
            <h2 id="account-settings-title">{labels.ajustes}</h2>
            <div className="account-settings">
              <article>
                <span>{t("account.email")}</span>
                <strong>{session.email}</strong>
                <small>{t("account.emailCopy")}</small>
              </article>
              <article>
                <span>{t("account.password")}</span>
                <strong>{t("account.protected")}</strong>
                <small>{t("account.passwordCopy")}</small>
                {session.email && <PasswordResetButton email={session.email} />}
              </article>
              <article>
                <span>{t("account.plan")}</span>
                <strong>{session.isPro ? t("account.completeAccess") : t("account.freeAccount")}</strong>
                <small>{session.isPro ? t("account.completeCopy") : t("account.freePlanCopy")}</small>
              </article>
            </div>
            <div className="access-actions">
              {session.isOwner && <Link className="dialog-primary" href="/admin">{t("account.openPanel")}</Link>}
              <LogoutButton className="account-link logout-button" />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
