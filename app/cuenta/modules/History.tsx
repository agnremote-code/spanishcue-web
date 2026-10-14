"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { ClassRecord, ClassStatus, Student } from "../../student-tracker/contracts";
import { isoToZonedLocal, zonedLocalToIso } from "../../student-tracker/time";
import { dateLabel, type DashKey, type DashLesson } from "../copy";
import { dashApi, Empty, LoadState, useDash, useLoad } from "../ui";
import type { OpenedLesson } from "./Overview";

type Draft = { studentId: string; lessonId: string; freeTitle: string; localDate: string; timezone: string; durationMinutes: string; status: ClassStatus; pedagogicalNote: string; nextStep: string; requestKey: string };
const newKey = () => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`);
const localNow = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 16); };
const DRAFT_KEY = "spanishcue:cuenta:class-draft";
/** An unsaved new class survives reloads and network errors in this tab. */
function savedDraft(studentId: string): Draft | null {
  try {
    const parsed = JSON.parse(window.sessionStorage.getItem(DRAFT_KEY) || "null") as Draft | null;
    return parsed && typeof parsed === "object" ? { ...emptyDraft(studentId), ...parsed, ...(studentId ? { studentId } : {}), requestKey: parsed.requestKey || newKey() } : null;
  } catch { return null; }
}
const emptyDraft = (studentId = ""): Draft => ({ studentId, lessonId: "", freeTitle: "", localDate: localNow(), timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC", durationMinutes: "60", status: "taught", pedagogicalNote: "", nextStep: "", requestKey: newKey() });

export default function History({ lessons, startNew, studentId, view: initialView }: { lessons: DashLesson[]; startNew: boolean; studentId: string | null; view: "registradas" | "abiertas" }) {
  const { t, locale } = useDash();
  const [view, setView] = useState(initialView);
  const [students] = useLoad<{ students: Student[] }>("/api/students");
  const [records, reloadRecords] = useLoad<{ records: ClassRecord[] }>("/api/class-records");
  const [opened, reloadOpened] = useLoad<{ items: OpenedLesson[] }>(view === "abiertas" ? "/api/progress" : null);
  const [query, setQuery] = useState("");
  const [student, setStudent] = useState(studentId && !startNew ? studentId : "");
  const [status, setStatus] = useState("");
  const [form, setForm] = useState<{ editing: string | null; draft: Draft } | null>(startNew ? { editing: null, draft: emptyDraft(studentId ?? "") } : null);
  const [duplicate, setDuplicate] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const byId = useMemo(() => new Map(lessons.map((lesson) => [lesson.id, lesson])), [lessons]);
  const people = students.status === "ready" ? students.data.students : [];
  const name = (id: string) => people.find((p) => p.id === id)?.alias ?? t("history.deletedStudent");
  const titleOf = (record: ClassRecord) => (record.lessonId ? byId.get(record.lessonId)?.title : null) ?? record.freeTitle ?? t("history.freeLesson");

  const list = records.status === "ready" ? [...records.data.records].sort((a, b) => b.startsAt.localeCompare(a.startsAt)).filter((record) => {
    if (student && record.studentId !== student) return false;
    if (status && record.status !== status) return false;
    const q = query.trim().toLocaleLowerCase();
    return !q || [titleOf(record), record.pedagogicalNote, record.nextStep, name(record.studentId)].some((value) => value.toLocaleLowerCase().includes(q));
  }) : [];

  async function save(allowDuplicate = false) {
    if (!form) return;
    const d = form.draft;
    setBusy(true); setError(""); setNotice(""); setDuplicate(false);
    try {
      const body = JSON.stringify({
        studentId: d.studentId, lessonId: d.lessonId ? Number(d.lessonId) : null, freeTitle: d.freeTitle || null,
        startsAt: zonedLocalToIso(d.localDate, d.timezone), timezone: d.timezone,
        durationMinutes: d.durationMinutes ? Number(d.durationMinutes) : null, status: d.status,
        pedagogicalNote: d.pedagogicalNote, nextStep: d.nextStep, requestKey: allowDuplicate ? newKey() : d.requestKey, allowDuplicate,
      });
      if (form.editing) await dashApi(`/api/class-records/${form.editing}`, { method: "PATCH", body });
      else await dashApi("/api/class-records", { method: "POST", body });
      if (!form.editing) try { window.sessionStorage.removeItem(DRAFT_KEY); } catch {}
      setForm(null); setNotice(t("history.saved")); reloadRecords();
    } catch (caught) {
      const typed = caught as Error & { code?: string };
      if (typed.code === "probable_duplicate") setDuplicate(true); else setError(typed.message);
    } finally { setBusy(false); }
  }
  function submit(event: FormEvent) { event.preventDefault(); void save(); }
  function edit(record: ClassRecord) {
    setForm({ editing: record.id, draft: { studentId: record.studentId, lessonId: record.lessonId ? String(record.lessonId) : "", freeTitle: record.freeTitle ?? "", localDate: isoToZonedLocal(record.startsAt, record.timezone), timezone: record.timezone, durationMinutes: record.durationMinutes ? String(record.durationMinutes) : "", status: record.status, pedagogicalNote: record.pedagogicalNote, nextStep: record.nextStep, requestKey: newKey() } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  async function remove(record: ClassRecord) {
    if (!window.confirm(t("history.confirmDelete"))) return;
    setBusy(true);
    try { await dashApi(`/api/class-records/${record.id}`, { method: "DELETE" }); reloadRecords(); }
    catch (caught) { setError((caught as Error).message); }
    finally { setBusy(false); }
  }
  const setDraft = (patch: Partial<Draft>) => setForm((value) => value && { ...value, draft: { ...value.draft, ...patch } });
  const draftRestored = useRef(false);
  const openNew = () => setForm({ editing: null, draft: savedDraft(student) ?? emptyDraft(student) });
  useEffect(() => {
    if (!startNew) { draftRestored.current = true; return; }
    const timer = window.setTimeout(() => {
      draftRestored.current = true;
      setForm((value) => value && !value.editing ? { editing: null, draft: savedDraft(studentId ?? "") ?? value.draft } : value);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [startNew, studentId]);
  useEffect(() => {
    try {
      if (draftRestored.current && form && !form.editing) window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(form.draft));
    } catch { /* storage unavailable: the form still works */ }
  }, [form]);

  return <div className="cx-stack">
    <div className="cx-tabs" role="tablist" aria-label={t("head.historial")}>
      <button type="button" role="tab" aria-selected={view === "registradas"} onClick={() => setView("registradas")}>{t("history.recorded")}</button>
      <button type="button" role="tab" aria-selected={view === "abiertas"} onClick={() => setView("abiertas")}>{t("history.opened")}</button>
    </div>

    {view === "registradas" ? <>
      <div className="cx-toolbar">
        <label className="cx-search"><span className="cx-sr">{t("common.search")}</span><input type="search" placeholder={t("history.searchPlaceholder")} value={query} onChange={(e) => setQuery(e.target.value)} /></label>
        <label><span className="cx-sr">{t("history.student")}</span><select value={student} onChange={(e) => setStudent(e.target.value)}><option value="">{t("history.student")}: {t("common.all")}</option>{people.map((p) => <option key={p.id} value={p.id}>{p.alias}</option>)}</select></label>
        <label><span className="cx-sr">{t("history.state")}</span><select value={status} onChange={(e) => setStatus(e.target.value)}><option value="">{t("history.state")}: {t("common.all")}</option><option value="taught">{t("history.taught")}</option><option value="planned">{t("history.planned")}</option><option value="absent">{t("history.absent")}</option><option value="cancelled">{t("history.cancelled")}</option></select></label>
        <span className="cx-spacer" />
        <button type="button" className="cx-btn is-primary" onClick={openNew}>✎ {t("history.new")}</button>
      </div>
      {error && <div className="cx-alert is-error" role="alert"><span>{error}</span></div>}
      {notice && <div className="cx-alert is-ok" role="status"><span>{notice}</span></div>}

      {form && <form className="cx-panel cx-form" onSubmit={submit}>
        <header><h2>{form.editing ? t("history.formEdit") : t("history.formTitle")}</h2></header>
        {students.status === "ready" && people.length === 0 ? <p className="cx-muted">{t("history.needStudent")} <Link href="/cuenta?tab=alumnos&nuevo=1">{t("students.add")} →</Link></p> : <>
          <div className="cx-form-row">
            <label>{t("history.student")}<select required value={form.draft.studentId} onChange={(e) => setDraft({ studentId: e.target.value })}><option value="">—</option>{people.filter((p) => p.status === "active" || p.id === form.draft.studentId).map((p) => <option key={p.id} value={p.id}>{p.alias}</option>)}</select></label>
            <label>{t("history.state")}<select value={form.draft.status} onChange={(e) => setDraft({ status: e.target.value as Draft["status"] })}><option value="taught">{t("history.taught")}</option><option value="planned">{t("history.planned")}</option><option value="absent">{t("history.absent")}</option><option value="cancelled">{t("history.cancelled")}</option></select></label>
          </div>
          <div className="cx-form-row">
            <label>{t("history.lesson")}<select value={form.draft.lessonId} onChange={(e) => setDraft({ lessonId: e.target.value, freeTitle: e.target.value ? "" : form.draft.freeTitle })}><option value="">{t("history.freeTitle")}</option>{lessons.map((lesson) => <option key={lesson.id} value={lesson.id}>{lesson.title} · {lesson.level}</option>)}</select></label>
            <label>{t("history.freeTitle")}<input maxLength={160} disabled={Boolean(form.draft.lessonId)} required={!form.draft.lessonId} value={form.draft.freeTitle} onChange={(e) => setDraft({ freeTitle: e.target.value })} /></label>
          </div>
          <div className="cx-form-row is-three">
            <label>{t("history.date")}<input type="datetime-local" required value={form.draft.localDate} onChange={(e) => setDraft({ localDate: e.target.value })} /></label>
            <label>{t("history.timezone")}<input required maxLength={80} value={form.draft.timezone} onChange={(e) => setDraft({ timezone: e.target.value })} /></label>
            <label>{t("history.duration")}<input type="number" min={1} max={480} value={form.draft.durationMinutes} onChange={(e) => setDraft({ durationMinutes: e.target.value })} /></label>
          </div>
          <label>{t("history.note")}<textarea maxLength={4000} rows={3} value={form.draft.pedagogicalNote} onChange={(e) => setDraft({ pedagogicalNote: e.target.value })} /></label>
          <label>{t("history.next")}<textarea maxLength={1000} rows={2} value={form.draft.nextStep} onChange={(e) => setDraft({ nextStep: e.target.value })} /></label>
          {duplicate && <div className="cx-alert is-warn"><span>{t("history.duplicate")}</span><button type="button" disabled={busy} onClick={() => void save(true)}>{t("history.saveAnyway")}</button></div>}
          <div className="cx-row"><button className="cx-btn is-primary" disabled={busy || !form.draft.studentId}>{busy ? t("common.saving") : t("common.save")}</button><button type="button" className="cx-btn" onClick={() => { if (!form.editing) try { window.sessionStorage.removeItem(DRAFT_KEY); } catch {} setForm(null); setDuplicate(false); }}>{form.editing ? t("history.cancelEdit") : t("common.cancel")}</button></div>
        </>}
      </form>}

      <LoadState state={records} onRetry={reloadRecords}>{(data) => data.records.length === 0
        ? <Empty title={t("history.empty")} copy={t("history.emptyCopy")} />
        : list.length === 0 ? <p className="cx-muted">{t("students.noMatch")}</p>
        : <ol className="cx-records">{list.map((record) => {
          const lesson = record.lessonId ? byId.get(record.lessonId) : null;
          return <li key={record.id} className="cx-panel">
            <time>{dateLabel(locale, record.startsAt, true)}</time>
            <div>
              <strong>{titleOf(record)}</strong> <em className={`cx-tag is-${record.status}`}>{t(`history.${record.status}` as DashKey)}</em>
              <span className="cx-muted">{name(record.studentId)}{record.durationMinutes ? ` · ${record.durationMinutes} min` : ""}</span>
              {record.pedagogicalNote && <p><b>{t("history.note")}:</b> {record.pedagogicalNote}</p>}
              {record.nextStep && <p><b>{t("history.next")}:</b> {record.nextStep}</p>}
            </div>
            <div className="cx-row is-end">
              {lesson?.href && <Link className="cx-btn is-small" href={lesson.href}>{t("history.reopen")}</Link>}
              <button type="button" className="cx-btn is-small" onClick={() => edit(record)}>{t("common.edit")}</button>
              <button type="button" className="cx-btn is-small is-danger" disabled={busy} onClick={() => void remove(record)}>{t("common.delete")}</button>
            </div>
          </li>;
        })}</ol>}
      </LoadState>
    </> : <>
      <div className="cx-toolbar"><label className="cx-search"><span className="cx-sr">{t("common.search")}</span><input type="search" placeholder={t("common.search")} value={query} onChange={(e) => setQuery(e.target.value)} /></label></div>
      <LoadState state={opened} onRetry={reloadOpened}>{(data) => {
        const q = query.trim().toLocaleLowerCase();
        const items = [...data.items].sort((a, b) => b.lastOpenedAt - a.lastOpenedAt).filter((item) => byId.has(item.lessonId) && (!q || byId.get(item.lessonId)!.title.toLocaleLowerCase().includes(q)));
        return data.items.length === 0 ? <Empty title={t("history.openedEmpty")} copy={t("history.openedCopy")} action={<Link className="cx-btn is-primary" href="/">{t("fav.goLibrary")}</Link>} />
          : <table className="cx-table"><thead><tr><th>{t("history.lesson")}</th><th>{t("history.lastOpened")}</th><th>{t("history.firstOpened")}</th><th><span className="cx-sr">{t("common.open")}</span></th></tr></thead>
            <tbody>{items.map((item) => { const lesson = byId.get(item.lessonId)!; return <tr key={item.lessonId}><td><strong>{lesson.title}</strong><small>{lesson.level} · {lesson.category}</small></td><td>{dateLabel(locale, item.lastOpenedAt, true)}</td><td>{dateLabel(locale, item.firstOpenedAt)}</td><td>{lesson.href && <Link className="cx-btn is-small" href={lesson.href}>{t("common.open")}</Link>}</td></tr>; })}</tbody></table>;
      }}</LoadState>
    </>}
  </div>;
}
