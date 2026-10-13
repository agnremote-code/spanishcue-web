"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ClassRecord, Student } from "../../student-tracker/contracts";
import { dateLabel, type DashLesson } from "../copy";
import { LoadState, useDash, useLoad } from "../ui";

export type HomeworkPass = {
  id: string; learnerId: string | null; level: string; revokedAt: string | null; createdAt: string; alias: string | null;
  summary?: { completed: number; coursePercent?: number; percent: number; lastModule: string | null; lastActivity: string | null } | null;
};
export type Favorite = { lessonId: number; createdAt: number };
export type OpenedLesson = { lessonId: number; state: string; progressPercent: number; firstOpenedAt: number; lastOpenedAt: number };
export type PlanSummary = { label: string; detail: string; tone: "owner" | "pro" | "free" };

const DAY = 86_400_000;

export default function Overview({ lessons, homeworkEnabled, plan }: { lessons: DashLesson[]; homeworkEnabled: boolean; plan: PlanSummary }) {
  const { t, locale } = useDash();
  const byId = useMemo(() => new Map(lessons.map((lesson) => [lesson.id, lesson])), [lessons]);
  const [students, reloadStudents] = useLoad<{ students: Student[] }>("/api/students");
  const [records, reloadRecords] = useLoad<{ records: ClassRecord[] }>("/api/class-records");
  const [passes, reloadPasses] = useLoad<{ passes: HomeworkPass[] }>(homeworkEnabled ? "/api/autoestudio/passes" : null);
  const [favorites, reloadFavorites] = useLoad<{ favorites: Favorite[] }>("/api/favorites");
  const [opened, reloadOpened] = useLoad<{ items: OpenedLesson[] }>("/api/progress");

  const [now] = useState(() => Date.now());
  const count = <T,>(state: { status: string; data?: T }, fn: (data: T) => number) =>
    state.status === "ready" ? String(fn((state as { data: T }).data)) : state.status === "error" ? "—" : "…";
  const studentName = (id: string) => students.status === "ready" ? students.data.students.find((s) => s.id === id)?.alias ?? t("history.deletedStudent") : "…";
  const studied7 = (data: { passes: HomeworkPass[] }) => new Set(data.passes.filter((p) => !p.revokedAt && p.summary?.lastActivity && now - new Date(p.summary.lastActivity).getTime() <= 7 * DAY).map((p) => p.learnerId)).size;

  return <div className="cx-stack">
    <ul className="cx-kpis" aria-label={t("head.inicio")}>
      <li><b>{count(students, (d: { students: Student[] }) => d.students.filter((s) => s.status === "active").length)}</b><span>{t("home.activeStudents")}</span></li>
      <li><b>{count(records, (d: { records: ClassRecord[] }) => d.records.filter((r) => now - new Date(r.startsAt).getTime() <= 30 * DAY && new Date(r.startsAt).getTime() <= now).length)}</b><span>{t("home.classes30")}</span></li>
      <li><b>{homeworkEnabled ? count(passes, studied7) : "—"}</b><span>{t("home.homeworkActive")}</span></li>
      <li><b>{count(favorites, (d: { favorites: Favorite[] }) => d.favorites.length)}</b><span>{t("home.favorites")}</span></li>
    </ul>

    <nav className="cx-quick" aria-label={t("home.quick")}>
      <Link href="/cuenta?tab=historial&nuevo=1"><i aria-hidden="true">✎</i>{t("home.qRecord")}</Link>
      <Link href="/cuenta?tab=alumnos&nuevo=1"><i aria-hidden="true">＋</i>{t("home.qStudent")}</Link>
      <Link href="/cuenta?tab=autoestudio"><i aria-hidden="true">⌁</i>{t("home.qHomework")}</Link>
      <Link href="/"><i aria-hidden="true">▦</i>{t("home.qLibrary")}</Link>
    </nav>

    <div className="cx-grid">
      <section className="cx-panel" aria-labelledby="home-classes">
        <header><h2 id="home-classes">{t("home.recentClasses")}</h2><Link href="/cuenta?tab=historial">{t("common.seeAll")} →</Link></header>
        <LoadState state={records} onRetry={reloadRecords}>{(data) => {
          const recent = [...data.records].sort((a, b) => b.startsAt.localeCompare(a.startsAt)).slice(0, 5);
          return recent.length ? <ul className="cx-list">{recent.map((record) => {
            const lesson = record.lessonId ? byId.get(record.lessonId) : null;
            return <li key={record.id}><div><strong>{lesson?.title ?? record.freeTitle ?? t("history.freeLesson")}</strong><span>{studentName(record.studentId)} · {dateLabel(locale, record.startsAt, true)}</span></div><em className={`cx-tag is-${record.status}`}>{record.status === "taught" ? t("history.taught") : t("history.planned")}</em></li>;
          })}</ul> : <p className="cx-muted">{t("home.noClasses")}</p>;
        }}</LoadState>
      </section>

      <section className="cx-panel" aria-labelledby="home-homework">
        <header><h2 id="home-homework">{t("home.homework")}</h2>{homeworkEnabled && <Link href="/cuenta?tab=autoestudio">{t("common.seeAll")} →</Link>}</header>
        {!homeworkEnabled ? <p className="cx-muted">{t("home.homeworkLocked")} <Link href="/pricing">{t("sub.upgrade")} →</Link></p> :
          <LoadState state={passes} onRetry={reloadPasses}>{(data) => {
            const active = data.passes.filter((p) => !p.revokedAt && p.alias).sort((a, b) => (b.summary?.lastActivity ?? "").localeCompare(a.summary?.lastActivity ?? "")).slice(0, 5);
            return active.length ? <ul className="cx-list">{active.map((pass) => {
              const percent = pass.summary?.coursePercent ?? pass.summary?.percent ?? 0;
              return <li key={pass.id}><div><strong>{pass.alias} <small className="cx-level">{pass.level.toUpperCase()}</small></strong><span>{t("home.lastActivity")}: {dateLabel(locale, pass.summary?.lastActivity ?? null, true)}</span></div><span className="cx-meter-label"><span className="cx-meter" aria-hidden="true"><span style={{ width: `${Math.min(100, percent)}%` }} /></span>{percent.toLocaleString(locale, { maximumFractionDigits: 1 })} %</span></li>;
            })}</ul> : <p className="cx-muted">{data.passes.some((p) => !p.revokedAt) ? t("home.unclaimed", { n: String(data.passes.filter((p) => !p.revokedAt).length) }) : t("home.noHomework")}</p>;
          }}</LoadState>}
      </section>

      <section className="cx-panel" aria-labelledby="home-opened">
        <header><h2 id="home-opened">{t("home.recentOpened")}</h2><Link href="/cuenta?tab=historial&vista=abiertas">{t("common.seeAll")} →</Link></header>
        <LoadState state={opened} onRetry={reloadOpened}>{(data) => {
          const recent = [...data.items].sort((a, b) => b.lastOpenedAt - a.lastOpenedAt).filter((item) => byId.has(item.lessonId)).slice(0, 5);
          return recent.length ? <ul className="cx-list">{recent.map((item) => {
            const lesson = byId.get(item.lessonId)!;
            return <li key={item.lessonId}><div><strong>{lesson.title}</strong><span>{lesson.level} · {dateLabel(locale, item.lastOpenedAt, true)}</span></div>{lesson.href && <Link className="cx-btn is-small" href={lesson.href}>{t("common.open")}</Link>}</li>;
          })}</ul> : <p className="cx-muted">{t("home.noOpened")}</p>;
        }}</LoadState>
      </section>

      <section className="cx-panel" aria-labelledby="home-favorites">
        <header><h2 id="home-favorites">{t("home.recentFavorites")}</h2><Link href="/cuenta?tab=favoritos">{t("common.seeAll")} →</Link></header>
        <LoadState state={favorites} onRetry={reloadFavorites}>{(data) => {
          const recent = data.favorites.filter((item) => byId.has(item.lessonId)).slice(0, 4);
          return recent.length ? <ul className="cx-fav-mini">{recent.map((item) => {
            const lesson = byId.get(item.lessonId)!;
            return <li key={item.lessonId}>{lesson.href ? <Link href={lesson.href}><img src={lesson.image} alt="" loading="lazy" /><span>{lesson.title}</span></Link> : <span>{lesson.title}</span>}</li>;
          })}</ul> : <p className="cx-muted">{t("home.noFavorites")}</p>;
        }}</LoadState>
      </section>

      <section className={`cx-panel cx-plan is-${plan.tone}`} aria-labelledby="home-plan">
        <header><h2 id="home-plan">{t("home.plan")}</h2><Link href="/cuenta?tab=suscripcion">{t("nav.suscripcion")} →</Link></header>
        <strong>{plan.label}</strong>
        <p>{plan.detail}</p>
        {plan.tone === "free" && <Link className="cx-btn is-primary" href="/pricing">{t("sub.upgrade")}</Link>}
      </section>
    </div>
    {/* students state is shared with the class list above; reload both together on retry */}
    {students.status === "error" && <div className="cx-alert is-error" role="alert"><span>{t("common.loadError")}</span><button type="button" onClick={reloadStudents}>{t("common.retry")}</button></div>}
  </div>;
}
