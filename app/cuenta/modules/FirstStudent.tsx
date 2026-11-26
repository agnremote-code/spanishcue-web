"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { Student } from "../../student-tracker/contracts";
import { trackMarketingEvent } from "../../marketing/analytics";
import { shareMessage } from "../../autoestudio/share-messages";
import { dashApi } from "../ui";
import { firstStudentCopy as copy } from "../free-homework";

const HW_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
/** Short walkthrough video for this screen; empty keeps the 16:9 slot as a placeholder. */
export const FIRST_STUDENT_VIDEO_SRC = "";

type Pass = { id: string; learnerId: string; level: string };

/**
 * First screen of a free account (docs/omega/LOG.md, T6): create a student, send their
 * Homework link, then see progress. Step 2 unlocks with a student, step 3 with a link.
 */
export default function FirstStudent({ students, passes, onChanged }: { students: Student[]; passes: Pass[]; onChanged: () => void }) {
  const [alias, setAlias] = useState("");
  const [level, setLevel] = useState<string>("A1");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const student = students[0] ?? null;
  const hasStudent = Boolean(student);
  const hasHomework = passes.length > 0 || Boolean(link);

  async function run(work: () => Promise<void>) {
    setBusy(true); setError("");
    try { await work(); } catch (caught) { setError((caught as Error).message); } finally { setBusy(false); }
  }

  function addStudent(event: FormEvent) {
    event.preventDefault();
    if (!alias.trim()) return;
    void run(async () => {
      await dashApi<{ student?: Student }>("/api/students", { method: "POST", body: JSON.stringify({ alias: alias.trim(), level, goal: "" }) });
      trackMarketingEvent("onboarding_student_created", { level });
      setAlias("");
      onChanged();
    });
  }

  function sendHomework() {
    if (!student) return;
    const hwLevel = (HW_LEVELS as readonly string[]).includes(student.level) ? student.level.toLowerCase() : "a1";
    void run(async () => {
      let data: { link: string; pass: Pass };
      try {
        data = await dashApi<{ link: string; pass: Pass }>("/api/autoestudio/passes", { method: "POST", body: JSON.stringify({ level: hwLevel }) });
      } catch (caught) {
        throw new Error(shareMessage((caught as Error).message));
      }
      await dashApi("/api/roster", { method: "POST", body: JSON.stringify({ action: "link", learnerId: data.pass.learnerId, studentId: student.id }) });
      setLink(data.link);
      trackMarketingEvent("onboarding_homework_sent", { level: hwLevel });
      try { await navigator.clipboard.writeText(data.link); setCopied(true); } catch { setCopied(false); }
      onChanged();
    });
  }

  const progressHref = student ? `/cuenta?tab=alumnos&alumno=${encodeURIComponent(student.id)}` : "/cuenta?tab=alumnos";

  return <section className="cx-panel cx-first-student" aria-labelledby="first-student-title">
    <div className="cx-first-student-main">
      <h1 id="first-student-title">{copy.title}</h1>
      <p className="cx-muted">{copy.intro}</p>
      {error && <p className="cx-alert is-error" role="alert">{error}</p>}
      <ol className="cx-first-student-steps">
        <li className={hasStudent ? "is-done" : "is-current"}>
          <h2>{hasStudent ? "✓ " : "1. "}{copy.step1}</h2>
          {hasStudent
            ? <p className="cx-muted">{copy.step1Done(student!.alias)}</p>
            : <form className="cx-form cx-first-student-form" onSubmit={addStudent}>
              <label>{copy.aliasLabel}<input value={alias} onChange={(e) => setAlias(e.target.value)} maxLength={80} required placeholder={copy.aliasPlaceholder} /></label>
              <label>{copy.levelLabel}<select value={level} onChange={(e) => setLevel(e.target.value)}>{HW_LEVELS.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
              <button type="submit" className="cx-btn is-primary" disabled={busy || !alias.trim()}>{copy.addStudent}</button>
            </form>}
        </li>
        <li className={hasHomework ? "is-done" : hasStudent ? "is-current" : "is-locked"}>
          <h2>{hasHomework ? "✓ " : "2. "}{copy.step2}</h2>
          {!hasStudent && <p className="cx-muted">{copy.step2Locked}</p>}
          {hasStudent && !hasHomework && <><p className="cx-muted">{copy.step2Intro}</p><button type="button" className="cx-btn is-primary" disabled={busy} onClick={sendHomework}>{copy.generateLink}</button></>}
          {link && <div className="cx-first-student-link"><input readOnly value={link} aria-label={copy.linkLabel} onFocus={(e) => e.currentTarget.select()} /><span className="cx-muted">{copied ? copy.linkCopied : copy.copyManually}</span></div>}
          {hasHomework && !link && <p className="cx-muted">{copy.step2Done}</p>}
        </li>
        <li className={hasHomework ? "is-current" : "is-locked"}>
          <h2>3. {copy.step3}</h2>
          {hasHomework
            ? <Link className="cx-btn" href={progressHref} onClick={() => trackMarketingEvent("onboarding_progress_viewed")}>{copy.viewProgress}</Link>
            : <p className="cx-muted">{copy.step3Locked}</p>}
        </li>
      </ol>
    </div>
    <div className="cx-first-student-video">
      {FIRST_STUDENT_VIDEO_SRC
        ? <video src={FIRST_STUDENT_VIDEO_SRC} controls muted playsInline preload="metadata" aria-label={copy.videoLabel} />
        : <div className="cx-first-student-video-slot" role="img" aria-label={copy.videoLabel}><span>{copy.videoSoon}</span></div>}
    </div>
  </section>;
}
