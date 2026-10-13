"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { removeAccountFavorite, syncAccountFavorites, type AccountFavorite } from "../../favorites-client";
import { dateLabel, type DashLesson } from "../copy";
import { Empty, useDash } from "../ui";

function localFavorites(): number[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem("chespanish-favorites") || "[]");
    return Array.isArray(parsed) ? parsed.filter(Number.isInteger) : [];
  } catch { return []; }
}

export default function Favorites({ lessons, fullAccess }: { lessons: DashLesson[]; fullAccess: boolean }) {
  const { t, locale } = useDash();
  const byId = useMemo(() => new Map(lessons.map((lesson) => [lesson.id, lesson])), [lessons]);
  const [items, setItems] = useState<AccountFavorite[] | null | undefined>(undefined);
  const [notice, setNotice] = useState("");
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let active = true;
    // Same sync as the library: this browser's older list is imported once into the account.
    void syncAccountFavorites(localFavorites()).then((result) => { if (active) setItems(result); });
    return () => { active = false; };
  }, [version]);

  async function remove(lessonId: number) {
    const previous = items;
    setItems((list) => list?.filter((item) => item.lessonId !== lessonId));
    const result = await removeAccountFavorite(lessonId);
    if (!result) { setItems(previous); setNotice(t("common.loadError")); return; }
    setItems(result); setNotice(t("fav.removed"));
    try { window.localStorage.setItem("chespanish-favorites", JSON.stringify(result.map((item) => item.lessonId))); } catch {}
  }

  if (items === undefined) return <p className="cx-loading" role="status"><span className="cx-spinner" aria-hidden="true" />{t("common.loading")}</p>;
  if (items === null) return <div className="cx-alert is-error" role="alert"><span>{t("common.loadError")}</span><button type="button" onClick={() => { setItems(undefined); setVersion((v) => v + 1); }}>{t("common.retry")}</button></div>;
  const known = items.filter((item) => byId.has(item.lessonId));
  if (!known.length) return <Empty title={t("fav.empty")} copy={t("fav.emptyCopy")} action={<Link className="cx-btn is-primary" href="/">{t("fav.goLibrary")}</Link>} />;

  return <div className="cx-stack">
    {notice && <div className="cx-alert is-ok" role="status"><span>{notice}</span></div>}
    <ul className="cx-fav-grid">{known.map((item) => {
      const lesson = byId.get(item.lessonId)!;
      const locked = !fullAccess && !lesson.free;
      return <li key={item.lessonId} className="cx-panel">
        <img src={lesson.image} alt="" loading="lazy" />
        <div>
          <span className="cx-muted">{lesson.level} · {lesson.category}{locked ? ` · ${t("fav.locked")}` : ""}</span>
          <strong>{lesson.title}</strong>
          <small className="cx-muted">{t("fav.saved")} {dateLabel(locale, item.createdAt)}</small>
        </div>
        <div className="cx-row">
          {lesson.href && <Link className="cx-btn is-primary is-small" href={lesson.href}>{t("common.open")}</Link>}
          <button type="button" className="cx-btn is-small" onClick={() => void remove(item.lessonId)} aria-label={`${t("common.remove")}: ${lesson.title}`}>★ {t("common.remove")}</button>
        </div>
      </li>;
    })}</ul>
  </div>;
}
