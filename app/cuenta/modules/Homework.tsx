"use client";

import Link from "next/link";
import TeacherPasses from "../../autoestudio/TeacherPasses";
import { useDash } from "../ui";

/**
 * Homework · Autoestudio inside the dashboard. The pass list, progress dialog and
 * progress model are the existing Autoestudio system (app/autoestudio); this
 * section only hosts it. Teacher tools built for Autoestudio (for example the
 * per-student «Errores y dificultades» view) mount below the passes, here.
 */
export default function Homework({ enabled }: { enabled: boolean }) {
  const { t } = useDash();
  return <div className="cx-stack cx-homework">
    <TeacherPasses enabled={enabled} />
    {!enabled && <Link className="cx-btn is-primary" href="/pricing">{t("sub.upgrade")}</Link>}
  </div>;
}
