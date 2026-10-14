"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { STUDENT_LEVELS, type ClassRecord, type ClassStatus, type Student, type StudentLevel } from "../../student-tracker/contracts";
import { LevelDetail } from "../../autoestudio/TeacherPasses";
import TeacherErrors, { type TeacherTab } from "../../autoestudio/errors/TeacherErrors";
import { shareMessage } from "../../autoestudio/share-messages";
import type { ProgressState } from "../../autoestudio/progress/model";
import { dateLabel, type DashKey, type DashLesson } from "../copy";
import { dashApi, Empty, LoadState, useDash, useLoad, type Loadable } from "../ui";

type Draft = { alias: string; lastName: string; email: string; level: StudentLevel; goal: string };
const emptyDraft = (): Draft => ({ alias: "", lastName: "", email: "", level: "A1", goal: "" });
type Filter = "active" | "archived" | "all";
type HomeworkFilter = "" | "studying" | "idle" | "none";

type Summary = { completed: number; coursePercent?: number; percent: number; lastModule: string | null; lastActivity: string | null };
type ErrorTotals = { total: number; corrected: number; recurrent: number; top: string | null };
type Pass = { id: string; learnerId: string; level: string; revision: number; revokedAt: string | null; createdAt: string; alias: string | null; summary?: Summary | null; errors?: ErrorTotals | null };
type RosterLink = { learnerId: string; studentId: string };
type Detail = { passes: Pass[]; progress: ProgressState };
type Tab = "resumen" | "tarea" | "clases" | TeacherTab;

const HW_LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const DAY = 86_400_000;
const ACTIVE_DAYS = 7;
const PAST: ClassStatus[] = ["taught", "absent"];

/** Homework calls go through the existing Autoestudio API, with its own readable messages. */
async function homeworkApi<T>(path: string, body?: unknown): Promise<T> {
  try {
    return await dashApi<T>(`/api/autoestudio/${path}`, body ? { method: "POST", body: JSON.stringify(body) } : undefined);
  } catch (error) {
    const e = error as Error & { status?: number };
    throw new Error(e.status === 401 ? shareMessage("sign_in_required") : shareMessage(e.message));
  }
}

/** Everything one student has across the tracker and Homework, joined through the roster links. */
type Profile = { student: Student; passes: Pass[]; learnerIds: string[]; records: ClassRecord[]; lastStudy: string | null; percent: number | null; errors: ErrorTotals | null };

function homeworkState(profile: Profile, now: number): { key: HomeworkFilter; days: number | null } {
  const open = profile.passes.filter((pass) => !pass.revokedAt);
  if (!open.length) return { key: "none", days: null };
  if (!profile.lastStudy) return { key: "idle", days: null };
  const days = Math.floor((now - new Date(profile.lastStudy).getTime()) / DAY);
  return { key: days <= ACTIVE_DAYS ? "studying" : "idle", days };
}

export default function Students({ lessons, startNew, homeworkEnabled }: { lessons: DashLesson[]; startNew: boolean; homeworkEnabled: boolean }) {
  const { t, locale } = useDash();
  const [students, reload] = useLoad<{ students: Student[] }>("/api/students");
  const [records, reloadRecords] = useLoad<{ records: ClassRecord[] }>("/api/class-records");
  const [homework, setHomework] = useState<Loadable<{ passes: Pass[]; links: RosterLink[] }>>(homeworkEnabled ? { status: "loading" } : { status: "ready", data: { passes: [], links: [] } });
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("active");
  const [hwFilter, setHwFilter] = useState<HomeworkFilter>("");
  const [selected, setSelected] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("resumen");
  const [form, setForm] = useState<{ mode: "new" | "edit"; draft: Draft } | null>(startNew ? { mode: "new", draft: emptyDraft() } : null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [now] = useState(() => Date.now());
  const titles = useMemo(() => new Map(lessons.map((lesson) => [lesson.id, lesson])), [lessons]);

  // Named Homework learners become students once (server side, idempotent); then both sources load.
  const loadHomework = useCallback(async (sync: boolean) => {
    if (!homeworkEnabled) return;
    try {
      let imported = 0;
      if (sync) imported = (await dashApi<{ created: number }>("/api/roster", { method: "POST", body: JSON.stringify({ action: "sync" }) })).created;
      const [passes, roster] = await Promise.all([homeworkApi<{ passes: Pass[] }>("passes"), dashApi<{ links: RosterLink[] }>("/api/roster")]);
      setHomework({ status: "ready", data: { passes: passes.passes, links: roster.links } });
      if (imported) { setNotice(t("r.imported", { n: String(imported) })); reload(); }
    } catch (caught) {
      setHomework({ status: "error", message: (caught as Error).message });
    }
  }, [homeworkEnabled, reload, t]);
  const synced = useRef(false);
  useEffect(() => {
    if (synced.current) return;
    synced.current = true;
    const timer = window.setTimeout(() => void loadHomework(true), 0);
    return () => window.clearTimeout(timer);
  }, [loadHomework]);
  const reloadHomework = () => { setHomework({ status: "loading" }); void loadHomework(false); };

  const list = useMemo(() => students.status === "ready" ? students.data.students : [], [students]);
  const links = useMemo(() => homework.status === "ready" ? homework.data.links : [], [homework]);
  const passes = useMemo(() => homework.status === "ready" ? homework.data.passes : [], [homework]);
  const profiles = useMemo(() => {
    const allRecords = records.status === "ready" ? records.data.records : [];
    return new Map(list.map((student) => {
      const learnerIds = links.filter((link) => link.studentId === student.id).map((link) => link.learnerId);
      const own = passes.filter((pass) => learnerIds.includes(pass.learnerId));
      const lastStudy = own.map((pass) => pass.summary?.lastActivity).filter((value): value is string => Boolean(value)).sort().at(-1) ?? null;
      const current = own.filter((pass) => !pass.revokedAt).sort((a, b) => (b.summary?.lastActivity ?? b.createdAt).localeCompare(a.summary?.lastActivity ?? a.createdAt))[0];
      // Error totals are per learner; each learner counts once even with several level passes.
      const errorsByLearner = new Map(own.filter((pass) => pass.errors).map((pass) => [pass.learnerId, pass.errors!]));
      const errors = [...errorsByLearner.values()].reduce<ErrorTotals | null>((sum, e) => sum ? { total: sum.total + e.total, corrected: sum.corrected + e.corrected, recurrent: sum.recurrent + e.recurrent, top: sum.top ?? e.top } : { ...e }, null);
      const studentRecords = allRecords.filter((record) => record.studentId === student.id).sort((a, b) => b.startsAt.localeCompare(a.startsAt));
      const profile: Profile = { student, passes: own, learnerIds, records: studentRecords, lastStudy, percent: current?.summary ? (current.summary.coursePercent ?? current.summary.percent) : null, errors };
      return [student.id, profile];
    }));
  }, [list, links, passes, records]);
  const unclaimed = passes.filter((pass) => !pass.alias && !pass.revokedAt && !links.some((link) => link.learnerId === pass.learnerId));

  const visible = list.filter((student) => {
    if (filter !== "all" && student.status !== filter) return false;
    if (level && student.level !== level) return false;
    if (hwFilter && homeworkState(profiles.get(student.id)!, now).key !== hwFilter) return false;
    const q = query.trim().toLocaleLowerCase();
    return !q || [student.alias, student.lastName, student.email, student.goal].some((value) => value?.toLocaleLowerCase().includes(q));
  });
  const current = selected ? profiles.get(selected) ?? null : null;

  async function run(work: () => Promise<void>) {
    setBusy(true); setError(""); setNotice("");
    try { await work(); } catch (caught) { setError((caught as Error).message); } finally { setBusy(false); }
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form) return;
    void run(async () => {
      const body = JSON.stringify(form.draft);
      if (form.mode === "edit" && current) await dashApi(`/api/students/${current.student.id}`, { method: "PATCH", body });
      else {
        const created = await dashApi<{ student?: Student }>("/api/students", { method: "POST", body });
        if (created?.student?.id) { setSelected(created.student.id); setTab(homeworkEnabled ? "tarea" : "resumen"); }
      }
      setForm(null); setNotice(t("students.saved")); reload();
    });
  }
  const toggleArchive = (student: Student) => run(async () => {
    await dashApi(`/api/students/${student.id}`, { method: "PATCH", body: JSON.stringify({ status: student.status === "active" ? "archived" : "active" }) });
    reload();
  });
  const remove = (student: Student) => {
    if (!window.confirm(t("students.confirmDelete", { name: student.alias }))) return;
    void run(async () => {
      await dashApi(`/api/students/${student.id}`, { method: "DELETE" });
      setSelected(null); reload(); reloadRecords();
    });
  };
  const assign = async (learnerId: string, studentId: string) => {
    const roster = await dashApi<{ links: RosterLink[] }>("/api/roster", { method: "POST", body: JSON.stringify({ action: "link", learnerId, studentId }) });
    setHomework((state) => state.status === "ready" ? { status: "ready", data: { ...state.data, links: roster.links } } : state);
  };
  const edit = (student: Student) => setForm({ mode: "edit", draft: { alias: student.alias, lastName: student.lastName ?? "", email: student.email ?? "", level: student.level, goal: student.goal } });
  const setDraft = (patch: Partial<Draft>) => setForm((value) => value && { ...value, draft: { ...value.draft, ...patch } });
  const detailRef = useRef<HTMLDivElement>(null);
  const open = (id: string) => {
    setSelected(id); setTab("resumen"); setForm(null);
    // On phones the profile sits below the list: bring it into view.
    if (window.innerWidth < 900) window.requestAnimationFrame(() => detailRef.current?.scrollIntoView({ block: "start" }));
  };

  const tabs: { id: Tab; label: DashKey; homework?: boolean; needsLearner?: boolean }[] = [
    { id: "resumen", label: "r.summary" }, { id: "tarea", label: "r.homework", homework: true }, { id: "clases", label: "r.classes" },
    { id: "errores", label: "r.errors", homework: true, needsLearner: true }, { id: "preparar", label: "r.prepare", homework: true, needsLearner: true }, { id: "recomendaciones", label: "r.recommend", homework: true, needsLearner: true },
  ];

  return <div className="cx-stack">
    <div className="cx-toolbar">
      <label className="cx-search"><span className="cx-sr">{t("common.search")}</span><input type="search" placeholder={t("students.searchPlaceholder")} value={query} onChange={(e) => setQuery(e.target.value)} /></label>
      <label><span className="cx-sr">{t("students.level")}</span><select value={level} onChange={(e) => setLevel(e.target.value)}><option value="">{t("students.level")}: {t("common.all")}</option>{STUDENT_LEVELS.map((item) => <option key={item}>{item}</option>)}</select></label>
      {homeworkEnabled && <label><span className="cx-sr">{t("r.homework")}</span><select value={hwFilter} onChange={(e) => setHwFilter(e.target.value as HomeworkFilter)}><option value="">{t("r.homework")}: {t("common.all")}</option><option value="studying">{t("r.fActive")}</option><option value="idle">{t("r.fIdle")}</option><option value="none">{t("r.fNone")}</option></select></label>}
      <div className="cx-segment" role="group" aria-label={t("students.status")}>
        {(["active", "archived", "all"] as Filter[]).map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === "active" ? t("students.active") : item === "archived" ? t("students.archived") : t("common.all")}</button>)}
      </div>
      <span className="cx-spacer" />
      <a className="cx-btn" href="/api/students/export" download>{t("students.export")}</a>
      <button type="button" className="cx-btn is-primary" onClick={() => { setSelected(null); setForm({ mode: "new", draft: emptyDraft() }); }}>＋ {t("students.add")}</button>
    </div>
    {error && <div className="cx-alert is-error" role="alert"><span>{error}</span></div>}
    {notice && <div className="cx-alert is-ok" role="status"><span>{notice}</span></div>}
    {homework.status === "error" && <div className="cx-alert is-error" role="alert"><span>{homework.message}</span><button type="button" onClick={reloadHomework}>{t("common.retry")}</button></div>}

    <LoadState state={students} onRetry={reload}>{() => list.length === 0 && !form && !unclaimed.length
      ? <Empty title={t("students.empty")} copy={t("students.emptyCopy")} action={<button type="button" className="cx-btn is-primary" onClick={() => setForm({ mode: "new", draft: emptyDraft() })}>＋ {t("students.add")}</button>} />
      : <div className="cx-master">
        <div className="cx-stack">
          <ul className="cx-people" aria-label={t("nav.alumnos")}>
            {visible.length === 0 && <li className="cx-muted">{t("students.noMatch")}</li>}
            {visible.map((student) => {
              const profile = profiles.get(student.id)!;
              const hw = homeworkState(profile, now);
              return <li key={student.id}>
                <button type="button" aria-current={student.id === selected ? "true" : undefined} className={student.status === "archived" ? "is-archived" : ""} onClick={() => open(student.id)}>
                  <i aria-hidden="true">{student.alias.slice(0, 1).toUpperCase()}</i>
                  <span>
                    <strong>{student.alias}{student.lastName ? ` ${student.lastName}` : ""}</strong>
                    <small>{student.level} · {student.lastClassAt ? `${t("students.lastClass")}: ${dateLabel(locale, student.lastClassAt)}` : t("students.noClass")}</small>
                    {homeworkEnabled && <small className={`cx-hw is-${hw.key || "none"}`}>{hw.key === "none" ? t("r.hwNone") : hw.days === null ? t("r.hwNotStarted") : hw.days < 1 ? t("r.hwToday") : t("r.hwDays", { n: String(hw.days) })}{profile.percent !== null ? ` · ${profile.percent.toLocaleString(locale, { maximumFractionDigits: 1 })} %` : ""}{profile.errors?.total ? ` · ${profile.errors.total} ✗` : ""}</small>}
                  </span>
                </button>
              </li>;
            })}
          </ul>
          {unclaimed.length > 0 && <section className="cx-panel cx-unclaimed" aria-labelledby="unclaimed-title">
            <header><h2 id="unclaimed-title">{t("r.pending")}</h2></header>
            <p className="cx-muted">{t("r.pendingCopy")}</p>
            <ul className="cx-list">{unclaimed.map((pass) => <li key={pass.id}>
              <div><strong>{t("r.unclaimed")} <small className="cx-level">{pass.level.toUpperCase()}</small></strong><span>{dateLabel(locale, pass.createdAt)}</span></div>
              <label><span className="cx-sr">{t("r.assign")}</span><select value="" disabled={busy} onChange={(e) => { const id = e.target.value; if (id) void run(() => assign(pass.learnerId, id)); }}><option value="">{t("r.assign")}</option>{list.filter((s) => s.status === "active").map((s) => <option key={s.id} value={s.id}>{s.alias}</option>)}</select></label>
            </li>)}</ul>
          </section>}
        </div>

        <div className="cx-detail" ref={detailRef}>
          {form ? <form className="cx-panel cx-form" onSubmit={submit}>
            <header><h2>{form.mode === "new" ? t("students.newTitle") : t("students.editTitle")}</h2></header>
            <label>{t("students.alias")}<input required maxLength={80} value={form.draft.alias} onChange={(e) => setDraft({ alias: e.target.value })} autoFocus /></label>
            <div className="cx-form-row">
              <label>{t("students.lastName")}<input maxLength={120} value={form.draft.lastName} onChange={(e) => setDraft({ lastName: e.target.value })} /></label>
              <label>{t("students.email")}<input type="email" maxLength={254} value={form.draft.email} onChange={(e) => setDraft({ email: e.target.value })} /></label>
            </div>
            <label>{t("students.level")}<select value={form.draft.level} onChange={(e) => setDraft({ level: e.target.value as StudentLevel })}>{STUDENT_LEVELS.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>{t("students.goal")}<textarea maxLength={300} rows={3} value={form.draft.goal} onChange={(e) => setDraft({ goal: e.target.value })} /></label>
            <div className="cx-row"><button className="cx-btn is-primary" disabled={busy}>{busy ? t("common.saving") : t("common.save")}</button><button type="button" className="cx-btn" onClick={() => setForm(null)}>{t("common.cancel")}</button></div>
          </form> : current ? <article className="cx-panel cx-profile">
            <header>
              <div><h2>{current.student.alias}{current.student.lastName ? ` ${current.student.lastName}` : ""} <small className="cx-level">{current.student.level}</small></h2><p className="cx-muted">{current.student.email || "—"} · {t("students.since")} {dateLabel(locale, current.student.createdAt)}</p></div>
              <em className={`cx-tag is-${current.student.status}`}>{current.student.status === "active" ? t("students.isActive") : t("students.isArchived")}</em>
            </header>
            <p>{current.student.goal || <span className="cx-muted">{t("students.noGoal")}</span>}</p>
            <div className="cx-row">
              <Link className="cx-btn is-primary" href={`/cuenta?tab=historial&nuevo=1&alumno=${encodeURIComponent(current.student.id)}`}>✎ {t("students.recordClass")}</Link>
              <button type="button" className="cx-btn" onClick={() => edit(current.student)}>{t("common.edit")}</button>
              <button type="button" className="cx-btn" disabled={busy} onClick={() => void toggleArchive(current.student)}>{current.student.status === "active" ? t("students.archive") : t("students.reactivate")}</button>
              <button type="button" className="cx-btn is-danger" disabled={busy} onClick={() => remove(current.student)}>{t("common.delete")}</button>
            </div>
            <div className="cx-tabs cx-student-tabs" role="tablist" aria-label={current.student.alias}>
              {tabs.filter((item) => homeworkEnabled || !item.homework).map((item) => <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} disabled={item.needsLearner && !current.learnerIds.length} onClick={() => setTab(item.id)}>{t(item.label)}</button>)}
            </div>
            {tab === "resumen" && <StudentOverview profile={current} now={now} homeworkEnabled={homeworkEnabled} titles={titles} onTab={setTab} />}
            {tab === "tarea" && <HomeworkTab key={current.student.id} profile={current} students={list} busy={busy} onAssign={assign} onChanged={reloadHomework} />}
            {tab === "clases" && <LoadState state={records} onRetry={reloadRecords}>{() => <Classes profile={current} titles={titles} onChanged={reloadRecords} />}</LoadState>}
            {(tab === "errores" || tab === "preparar" || tab === "recomendaciones") && current.learnerIds[0] && <TeacherErrors key={`${current.learnerIds[0]}-${tab}`} learnerId={current.learnerIds[0]} tab={tab} />}
          </article> : <div className="cx-panel cx-placeholder"><p className="cx-muted">{t("students.select")}</p></div>}
        </div>
      </div>}
    </LoadState>
  </div>;
}

/** Everything known about the student turned into plain, checkable facts and next actions. */
function StudentOverview({ profile, now, homeworkEnabled, titles, onTab }: { profile: Profile; now: number; homeworkEnabled: boolean; titles: Map<number, DashLesson>; onTab: (tab: Tab) => void }) {
  const { t, locale } = useDash();
  const past = profile.records.filter((record) => PAST.includes(record.status) && new Date(record.startsAt).getTime() <= now);
  const attended = past.filter((record) => record.status === "taught").length;
  const next = [...profile.records].reverse().find((record) => record.status === "planned" && new Date(record.startsAt).getTime() > now) ?? null;
  const lastTaught = past.find((record) => record.status === "taught") ?? null;
  const hw = homeworkState(profile, now);
  const alerts: { text: string; tab?: Tab }[] = [];
  if (homeworkEnabled && hw.key === "none") alerts.push({ text: t("r.alertNoHomework"), tab: "tarea" });
  if (homeworkEnabled && hw.key === "idle") alerts.push({ text: hw.days === null ? t("r.alertNotStarted") : t("r.alertIdle", { n: String(hw.days) }), tab: "tarea" });
  if (past[0]?.status === "absent") alerts.push({ text: t("r.alertAbsent"), tab: "clases" });
  if (homeworkEnabled && profile.errors?.recurrent && profile.errors.top) alerts.push({ text: t("r.alertRecurrent", { topic: profile.errors.top }), tab: "preparar" });
  if (profile.student.status === "active" && !profile.records.some((record) => Math.abs(now - new Date(record.startsAt).getTime()) <= 30 * DAY)) alerts.push({ text: t("r.alertNoClass"), tab: "clases" });
  if (lastTaught?.nextStep) alerts.push({ text: t("r.alertNext", { text: lastTaught.nextStep }) });
  const titleOf = (record: ClassRecord) => (record.lessonId ? titles.get(record.lessonId)?.title : null) ?? record.freeTitle ?? t("history.freeLesson");

  return <div className="cx-stack">
    <dl className="cx-facts cx-student-facts">
      <div><dt>{t("r.attendance")}</dt><dd>{past.length ? t("r.attendanceValue", { a: String(attended), b: String(past.length) }) : t("r.noAttendance")}</dd></div>
      <div><dt>{t("students.lastClass")}</dt><dd>{past[0] ? `${titleOf(past[0])} · ${dateLabel(locale, past[0].startsAt)}${past[0].status === "absent" ? ` · ${t("history.absent")}` : ""}` : t("students.noClass")}</dd></div>
      <div><dt>{t("r.nextClass")}</dt><dd>{next ? `${titleOf(next)} · ${dateLabel(locale, next.startsAt, true)}` : t("r.noNextClass")}</dd></div>
      {homeworkEnabled && <div><dt>{t("r.homeworkProgress")}</dt><dd>{profile.percent !== null ? `${profile.percent.toLocaleString(locale, { maximumFractionDigits: 1 })} %` : "—"}</dd></div>}
      {homeworkEnabled && <div><dt>{t("r.lastStudy")}</dt><dd>{dateLabel(locale, profile.lastStudy, true)}</dd></div>}
      {homeworkEnabled && <div><dt>{t("r.errorsTotal")}</dt><dd>{profile.errors ? `${profile.errors.total}${profile.errors.top ? ` · ${profile.errors.top}` : ""}` : "0"}</dd></div>}
    </dl>
    <section aria-labelledby="alerts-title">
      <h3 id="alerts-title">{t("r.alerts")}</h3>
      {alerts.length ? <ul className="cx-alerts">{alerts.map((alert) => <li key={alert.text}><span>{alert.text}</span>{alert.tab && <button type="button" className="cx-link" aria-label={alert.text} onClick={() => onTab(alert.tab!)}>→</button>}</li>)}</ul> : <p className="cx-muted">{t("r.noAlerts")}</p>}
    </section>
  </div>;
}

/** Homework for one student: create, copy, regenerate, revoke, next level, and the real per-level progress. */
function HomeworkTab({ profile, students, busy: parentBusy, onAssign, onChanged }: { profile: Profile; students: Student[]; busy: boolean; onAssign: (learnerId: string, studentId: string) => Promise<void>; onChanged: () => void }) {
  const { t, locale } = useDash();
  const initial = HW_LEVELS.includes(profile.student.level.toLowerCase()) ? profile.student.level.toLowerCase() : "a1";
  const [level, setLevel] = useState(initial);
  const [link, setLink] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [detail, setDetail] = useState<Loadable<Detail>>({ status: "loading" });
  const learnerId = profile.learnerIds[0] ?? null;
  const loadDetail = useCallback(() => {
    if (!learnerId) return;
    setDetail({ status: "loading" });
    homeworkApi<Detail>(`learners/${learnerId}`).then((data) => setDetail({ status: "ready", data })).catch((e: Error) => setDetail({ status: "error", message: e.message }));
  }, [learnerId]);
  useEffect(() => { const timer = window.setTimeout(loadDetail, 0); return () => window.clearTimeout(timer); }, [loadDetail]);

  async function run(work: () => Promise<void>) {
    setBusy(true); setError(""); setNotice("");
    try { await work(); } catch (caught) { setError((caught as Error).message); } finally { setBusy(false); }
  }
  async function share(value: string, message: string) {
    setLink(value);
    try { await navigator.clipboard.writeText(value); setNotice(`${message} ${t("r.linkCopied")}`.trim()); } catch { setNotice(`${message} ${t("r.copyManually")}`.trim()); }
  }
  const create = (nextLevel: string) => run(async () => {
    const data = await homeworkApi<{ link: string; pass: Pass }>("passes", { level: nextLevel, ...(learnerId ? { learnerId } : {}) });
    if (!learnerId) await onAssign(data.pass.learnerId, profile.student.id);
    await share(data.link, t("r.accessCreated", { name: profile.student.alias }));
    onChanged(); loadDetail();
  });
  const action = (pass: Pass, operation: "copy" | "rotate" | "revoke") => {
    if (operation === "revoke" && !window.confirm(t("r.confirmRevoke"))) return;
    if (operation === "rotate" && !window.confirm(t("r.confirmRotate"))) return;
    void run(async () => {
      const data = await homeworkApi<{ link?: string }>(`passes/${pass.id}`, { action: operation });
      if (data.link) await share(data.link, ""); else { setLink(""); setNotice(t("r.revoked")); }
      onChanged();
    });
  };
  const disabled = busy || parentBusy;
  const shown = detail.status === "ready" ? HW_LEVELS.filter((id) => detail.data.passes.some((pass) => pass.level === id)) : [];

  return <div className="cx-stack">
    {error && <div className="cx-alert is-error" role="alert"><span>{error}</span></div>}
    {notice && <div className="cx-alert is-ok" role="status"><span>{notice}</span></div>}
    {link && <label className="cx-copy">{t("r.privateLink")}<input value={link} readOnly onFocus={(e) => e.target.select()} /></label>}
    {!profile.passes.length && <div className="cx-row">
      <label>{t("r.accessLevel")} <select value={level} onChange={(e) => setLevel(e.target.value)}>{HW_LEVELS.map((id) => <option key={id} value={id}>{id.toUpperCase()}</option>)}</select></label>
      <button type="button" className="cx-btn is-primary" disabled={disabled} onClick={() => void create(level)}>{t("r.createAccess")}</button>
    </div>}
    {profile.passes.length > 0 && <ul className="cx-list">{profile.passes.map((pass) => {
      const nextLevel = HW_LEVELS[HW_LEVELS.indexOf(pass.level) + 1];
      const hasNext = Boolean(nextLevel) && !profile.passes.some((p) => p.level === nextLevel);
      return <li key={pass.id} className="cx-pass">
        <div><strong>{pass.level.toUpperCase()} {pass.revokedAt ? <em className="cx-tag">{t("r.revokedTag")}</em> : !pass.alias && <em className="cx-tag">{t("r.unclaimed")}</em>}</strong>
          <span>{pass.summary ? `${t("r.weeks", { a: String(pass.summary.completed), b: "20" })} · ${(pass.summary.coursePercent ?? pass.summary.percent).toLocaleString(locale, { maximumFractionDigits: 1 })} % · ${dateLabel(locale, pass.summary.lastActivity, true)}` : dateLabel(locale, pass.createdAt)}</span></div>
        <div className="cx-row">
          {!pass.revokedAt && <><button type="button" className="cx-btn is-small" disabled={disabled} onClick={() => action(pass, "copy")}>{t("r.copyLink")}</button><button type="button" className="cx-btn is-small" disabled={disabled} onClick={() => action(pass, "rotate")}>{t("r.rotate")}</button><button type="button" className="cx-btn is-small is-danger" disabled={disabled} onClick={() => action(pass, "revoke")}>{t("r.revoke")}</button></>}
          {hasNext && <button type="button" className="cx-btn is-small" disabled={disabled} onClick={() => void create(nextLevel)}>{t("r.nextLevel", { level: nextLevel.toUpperCase() })}</button>}
        </div>
      </li>;
    })}</ul>}
    {learnerId && <label className="cx-move">{t("r.moveTo")} <select value="" disabled={disabled} onChange={(e) => { const id = e.target.value; if (id) void run(() => onAssign(learnerId, id)); }}><option value="">—</option>{students.filter((s) => s.id !== profile.student.id && s.status === "active").map((s) => <option key={s.id} value={s.id}>{s.alias}</option>)}</select></label>}
    {learnerId && <div className="cx-hw-detail">
      {detail.status === "loading" && <p className="cx-loading" role="status"><span className="cx-spinner" aria-hidden="true" />{t("common.loading")}</p>}
      {detail.status === "error" && <div className="cx-alert is-error" role="alert"><span>{detail.message}</span><button type="button" onClick={loadDetail}>{t("common.retry")}</button></div>}
      {detail.status === "ready" && shown.map((id) => <LevelDetail key={id} level={id} progress={detail.data.progress} />)}
    </div>}
  </div>;
}

/** Classes and attendance: every class of the student, with one-click attendance marks. */
function Classes({ profile, titles, onChanged }: { profile: Profile; titles: Map<number, DashLesson>; onChanged: () => void }) {
  const { t, locale } = useDash();
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const mark = async (record: ClassRecord, status: ClassStatus) => {
    setBusy(record.id); setError("");
    try { await dashApi(`/api/class-records/${record.id}`, { method: "PATCH", body: JSON.stringify({ status }) }); onChanged(); }
    catch (caught) { setError((caught as Error).message); }
    finally { setBusy(""); }
  };
  const label: Record<ClassStatus, DashKey> = { taught: "history.taught", planned: "history.planned", absent: "history.absent", cancelled: "history.cancelled" };
  const mark_: Record<"taught" | "absent" | "cancelled", DashKey> = { taught: "r.markTaught", absent: "r.markAbsent", cancelled: "r.markCancelled" };
  if (!profile.records.length) return <p className="cx-muted">{t("students.noClass")} <Link href={`/cuenta?tab=historial&nuevo=1&alumno=${encodeURIComponent(profile.student.id)}`}>{t("students.recordClass")} →</Link></p>;
  return <>
    {error && <div className="cx-alert is-error" role="alert"><span>{error}</span></div>}
    <ol className="cx-timeline">{profile.records.map((record) => {
      const lesson = record.lessonId ? titles.get(record.lessonId) : null;
      return <li key={record.id}><time>{dateLabel(locale, record.startsAt, true)}</time><div>
        <strong>{lesson?.title ?? record.freeTitle ?? t("history.freeLesson")}</strong> <em className={`cx-tag is-${record.status}`}>{t(label[record.status])}</em>
        <div className="cx-row cx-attendance" role="group" aria-label={t("r.attendance")}>
          {(["taught", "absent", "cancelled"] as const).map((status) => <button key={status} type="button" className="cx-btn is-small" aria-pressed={record.status === status} disabled={busy === record.id} onClick={() => void mark(record, status)}>{t(mark_[status])}</button>)}
        </div>
        {record.pedagogicalNote && <p><b>{t("history.note")}:</b> {record.pedagogicalNote}</p>}
        {record.nextStep && <p><b>{t("history.next")}:</b> {record.nextStep}</p>}
        {lesson?.href && <Link className="cx-link" href={lesson.href}>{t("history.reopen")} →</Link>}
      </div></li>;
    })}</ol>
  </>;
}
