"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { STUDENT_LEVELS, type ClassRecord, type Student, type StudentLevel } from "../../student-tracker/contracts";
import { dateLabel, type DashLesson } from "../copy";
import { dashApi, Empty, LoadState, useDash, useLoad } from "../ui";

type Draft = { alias: string; lastName: string; email: string; level: StudentLevel; goal: string };
const emptyDraft = (): Draft => ({ alias: "", lastName: "", email: "", level: "A1", goal: "" });
type Filter = "active" | "archived" | "all";

export default function Students({ lessons, startNew }: { lessons: DashLesson[]; startNew: boolean }) {
  const { t, locale } = useDash();
  const [students, reload] = useLoad<{ students: Student[] }>("/api/students");
  const [records, reloadRecords] = useLoad<{ records: ClassRecord[] }>("/api/class-records");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("active");
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState<{ mode: "new" | "edit"; draft: Draft } | null>(startNew ? { mode: "new", draft: emptyDraft() } : null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const titles = useMemo(() => new Map(lessons.map((lesson) => [lesson.id, lesson])), [lessons]);

  const list = students.status === "ready" ? students.data.students : [];
  const visible = list.filter((student) => {
    if (filter !== "all" && student.status !== filter) return false;
    if (level && student.level !== level) return false;
    const q = query.trim().toLocaleLowerCase();
    return !q || [student.alias, student.lastName, student.email, student.goal].some((value) => value?.toLocaleLowerCase().includes(q));
  });
  const current = list.find((student) => student.id === selected) ?? null;
  const currentRecords = current && records.status === "ready"
    ? records.data.records.filter((record) => record.studentId === current.id).sort((a, b) => b.startsAt.localeCompare(a.startsAt))
    : [];

  async function run(work: () => Promise<void>) {
    setBusy(true); setError(""); setNotice("");
    try { await work(); } catch (caught) { setError((caught as Error).message); } finally { setBusy(false); }
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form) return;
    void run(async () => {
      const body = JSON.stringify(form.draft);
      if (form.mode === "edit" && current) await dashApi(`/api/students/${current.id}`, { method: "PATCH", body });
      else {
        const created = await dashApi<{ student?: Student }>("/api/students", { method: "POST", body });
        if (created?.student?.id) setSelected(created.student.id);
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
  const edit = (student: Student) => setForm({ mode: "edit", draft: { alias: student.alias, lastName: student.lastName ?? "", email: student.email ?? "", level: student.level, goal: student.goal } });
  const setDraft = (patch: Partial<Draft>) => setForm((value) => value && { ...value, draft: { ...value.draft, ...patch } });

  return <div className="cx-stack">
    <div className="cx-toolbar">
      <label className="cx-search"><span className="cx-sr">{t("common.search")}</span><input type="search" placeholder={t("students.searchPlaceholder")} value={query} onChange={(e) => setQuery(e.target.value)} /></label>
      <label><span className="cx-sr">{t("students.level")}</span><select value={level} onChange={(e) => setLevel(e.target.value)}><option value="">{t("students.level")}: {t("common.all")}</option>{STUDENT_LEVELS.map((item) => <option key={item}>{item}</option>)}</select></label>
      <div className="cx-segment" role="group" aria-label={t("students.status")}>
        {(["active", "archived", "all"] as Filter[]).map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === "active" ? t("students.active") : item === "archived" ? t("students.archived") : t("common.all")}</button>)}
      </div>
      <span className="cx-spacer" />
      <a className="cx-btn" href="/api/students/export" download>{t("students.export")}</a>
      <button type="button" className="cx-btn is-primary" onClick={() => { setSelected(null); setForm({ mode: "new", draft: emptyDraft() }); }}>＋ {t("students.add")}</button>
    </div>
    {error && <div className="cx-alert is-error" role="alert"><span>{error}</span></div>}
    {notice && <div className="cx-alert is-ok" role="status"><span>{notice}</span></div>}

    <LoadState state={students} onRetry={reload}>{() => list.length === 0 && !form
      ? <Empty title={t("students.empty")} copy={t("students.emptyCopy")} action={<button type="button" className="cx-btn is-primary" onClick={() => setForm({ mode: "new", draft: emptyDraft() })}>＋ {t("students.add")}</button>} />
      : <div className="cx-master">
        <ul className="cx-people" aria-label={t("nav.alumnos")}>
          {visible.length === 0 && <li className="cx-muted">{t("students.noMatch")}</li>}
          {visible.map((student) => <li key={student.id}>
            <button type="button" aria-current={student.id === selected ? "true" : undefined} className={student.status === "archived" ? "is-archived" : ""} onClick={() => { setSelected(student.id); setForm(null); }}>
              <i aria-hidden="true">{student.alias.slice(0, 1).toUpperCase()}</i>
              <span><strong>{student.alias}{student.lastName ? ` ${student.lastName}` : ""}</strong><small>{student.level} · {student.lastClassAt ? `${t("students.lastClass")}: ${dateLabel(locale, student.lastClassAt)}` : t("students.noClass")}</small></span>
            </button>
          </li>)}
        </ul>

        <div className="cx-detail">
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
              <div><h2>{current.alias}{current.lastName ? ` ${current.lastName}` : ""} <small className="cx-level">{current.level}</small></h2><p className="cx-muted">{current.email || "—"} · {t("students.since")} {dateLabel(locale, current.createdAt)}</p></div>
              <em className={`cx-tag is-${current.status}`}>{current.status === "active" ? t("students.isActive") : t("students.isArchived")}</em>
            </header>
            <p>{current.goal || <span className="cx-muted">{t("students.noGoal")}</span>}</p>
            <div className="cx-row">
              <Link className="cx-btn is-primary" href={`/cuenta?tab=historial&nuevo=1&alumno=${encodeURIComponent(current.id)}`}>✎ {t("students.recordClass")}</Link>
              <button type="button" className="cx-btn" onClick={() => edit(current)}>{t("common.edit")}</button>
              <button type="button" className="cx-btn" disabled={busy} onClick={() => void toggleArchive(current)}>{current.status === "active" ? t("students.archive") : t("students.reactivate")}</button>
              <button type="button" className="cx-btn is-danger" disabled={busy} onClick={() => remove(current)}>{t("common.delete")}</button>
            </div>
            <h3>{t("students.classes")} ({currentRecords.length})</h3>
            <LoadState state={records} onRetry={reloadRecords}>{() => currentRecords.length ? <ol className="cx-timeline">{currentRecords.map((record) => {
              const lesson = record.lessonId ? titles.get(record.lessonId) : null;
              return <li key={record.id}><time>{dateLabel(locale, record.startsAt, true)}</time><div><strong>{lesson?.title ?? record.freeTitle ?? t("history.freeLesson")}</strong> <em className={`cx-tag is-${record.status}`}>{record.status === "taught" ? t("history.taught") : t("history.planned")}</em>{record.pedagogicalNote && <p><b>{t("history.note")}:</b> {record.pedagogicalNote}</p>}{record.nextStep && <p><b>{t("history.next")}:</b> {record.nextStep}</p>}{lesson?.href && <Link className="cx-link" href={lesson.href}>{t("history.reopen")} →</Link>}</div></li>;
            })}</ol> : <p className="cx-muted">{t("students.noClass")}</p>}</LoadState>
            <p className="cx-hint">{t("students.homeworkHint")} <Link href="/cuenta?tab=autoestudio">{t("nav.autoestudio")} →</Link></p>
          </article> : <div className="cx-panel cx-placeholder"><p className="cx-muted">{t("students.select")}</p></div>}
        </div>
      </div>}
    </LoadState>
  </div>;
}
