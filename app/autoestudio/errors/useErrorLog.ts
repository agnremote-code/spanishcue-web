"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ShareSession } from "../progress/server-adapter";
import { categorize, type CategoryId } from "./categorize";
import type { RecommendationCatalog, RecommendedClass } from "./catalog";
import { categoriesToSuggest, DAY, type AnswerEvent, type ErrorRecord } from "./model";

export type Suggestion = { category: CategoryId; label: string; question: string; lesson: RecommendedClass; moduleId: string };

const STORAGE_PREFIX = "spanishcue.autoestudio.errors.v1.";
const DISMISS_PREFIX = "spanishcue.autoestudio.suggested.v1.";
const LOCAL_LIMIT = 400;

function storage(): Storage | null { try { return typeof window === "undefined" ? null : window.localStorage; } catch { return null; } }
function readList(key: string): ErrorRecord[] { try { const raw = storage()?.getItem(key); const list = raw ? JSON.parse(raw) : []; return Array.isArray(list) ? list : []; } catch { return []; } }
function writeList(key: string, list: ErrorRecord[]) { try { storage()?.setItem(key, JSON.stringify(list.slice(-LOCAL_LIMIT))); } catch { /* Optional. */ } }
function readDismissed(key: string): Record<string, number> { try { return JSON.parse(storage()?.getItem(key) || "{}") || {}; } catch { return {}; } }

/**
 * Learner-side error log. With a pass it also uploads every checked answer to
 * the teacher's history (the server resolves the authoritative question and
 * explanation); without one the log stays on this device, so free weeks still
 * get grouped, non-repeating recommendations.
 */
export function useErrorLog(session: ShareSession | null | undefined, moduleId: string, objectives: string[], catalog: RecommendationCatalog, fullAccess: boolean) {
  const learnerKey = session ? `${session.learnerId}` : "local";
  const listKey = `${STORAGE_PREFIX}${learnerKey}`;
  const dismissKey = `${DISMISS_PREFIX}${learnerKey}`;
  const [history, setHistory] = useState<ErrorRecord[]>([]);
  const shown = useRef(new Set<CategoryId>());
  const wrongHere = useRef(new Set<string>());
  useEffect(() => {
    // Storage is an external system: the log is re-read when the learner or week changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistory(readList(listKey)); shown.current = new Set(); wrongHere.current = new Set();
  }, [listKey, moduleId]);

  const send = useCallback((path: string, body: Record<string, unknown>) => {
    if (!session) return;
    try {
      void fetch(`/api/autoestudio/${path}`, { method: "POST", credentials: "same-origin", keepalive: true, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ passId: session.passId, revision: session.revision, ...body }) }).catch(() => undefined);
    } catch { /* Offline: the local log keeps the record for this device. */ }
  }, [session]);

  const logEvent = useCallback((kind: "recommended" | "opened", lessonId: number, category: CategoryId) => send("events", { kind, lessonId, category, moduleId }), [send, moduleId]);

  const report = useCallback((event: AnswerEvent): Suggestion | null => {
    const itemKey = `${moduleId}|${event.section}|${event.exerciseId}|${event.itemIndex}`;
    const now = new Date().toISOString();
    if (event.verdict === "correct") {
      const pending = history.some((e) => e.moduleId === moduleId && e.section === event.section && e.exerciseId === event.exerciseId && e.itemIndex === event.itemIndex && !e.correctedAt);
      if (!wrongHere.current.has(itemKey) && !pending) return null;
      const next = history.map((e) => (e.moduleId === moduleId && e.section === event.section && e.exerciseId === event.exerciseId && e.itemIndex === event.itemIndex && !e.correctedAt ? { ...e, correctedAt: now } : e));
      setHistory(next); writeList(listKey, next);
      send("errors", { moduleId, section: event.section, exerciseId: event.exerciseId, itemIndex: event.itemIndex, given: event.given.slice(0, 400), verdict: "correct", attempt: event.attempt });
      return null;
    }
    wrongHere.current.add(itemKey);
    const category = categorize({ section: event.section, given: event.given, correct: event.correct, question: event.question, why: event.why, verdict: event.verdict, objectives });
    const record: ErrorRecord = { id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`, moduleId, section: event.section, exerciseId: event.exerciseId, itemIndex: event.itemIndex, type: event.type, question: event.question, given: event.given, correct: event.correct.join(" · "), explanation: event.why ?? "", category: category.id, categoryLabel: category.label, attempt: event.attempt, verdict: event.verdict, createdAt: now, correctedAt: null };
    const next = [...history, record];
    setHistory(next); writeList(listKey, next);
    send("errors", { moduleId, section: event.section, exerciseId: event.exerciseId, itemIndex: event.itemIndex, given: event.given.slice(0, 400), verdict: event.verdict, attempt: event.attempt });
    // Discreet by design: one card per topic per visit, none for a topic
    // dismissed in the last day, none when the learner already has the class.
    if (fullAccess) return null;
    const lesson = catalog[category.id]?.[0];
    if (!lesson || shown.current.has(category.id)) return null;
    const dismissed = readDismissed(dismissKey)[category.id];
    if (dismissed && Date.now() - dismissed < DAY) return null;
    if (!categoriesToSuggest(next, shown.current).includes(category.id)) return null;
    shown.current.add(category.id);
    logEvent("recommended", lesson.id, category.id);
    return { category: category.id, label: category.label, question: category.question, lesson, moduleId };
  }, [history, listKey, dismissKey, moduleId, objectives, catalog, fullAccess, send, logEvent]);

  const dismiss = useCallback((category: CategoryId) => { try { storage()?.setItem(dismissKey, JSON.stringify({ ...readDismissed(dismissKey), [category]: Date.now() })); } catch { /* Optional. */ } }, [dismissKey]);

  return useMemo(() => ({ report, logEvent, dismiss, history }), [report, logEvent, dismiss, history]);
}
