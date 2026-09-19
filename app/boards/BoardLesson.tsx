"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  advanceSession,
  createSession,
  previousSession,
  resetSession,
  restoreSession,
  serializeSession,
  setDeepened,
} from "./engine";
import type { BoardBank, BoardSession } from "./types";
import "./board.css";

type Phase = "questions" | "student" | "final";
type SavedView = {
  phase: Phase;
  choosing: boolean;
  finalOrder: string[];
  finalCursor: number;
};

const emptyView: SavedView = { phase: "questions", choosing: true, finalOrder: [], finalCursor: 0 };

function shuffledIds(ids: readonly string[]): string[] {
  const result = [...ids];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export default function BoardLesson({ bank }: { bank: BoardBank }) {
  const sessionKey = `spanishcue.boards.${bank.id}.session.v1`;
  const viewKey = `spanishcue.boards.${bank.id}.view.v1`;
  const [session, setSession] = useState<BoardSession | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [view, setView] = useState<SavedView>(emptyView);
  const [ready, setReady] = useState(false);
  const [presentation, setPresentation] = useState(false);
  const [notice, setNotice] = useState("Elegí una categoría o mezclá varias para empezar.");
  const questionRef = useRef<HTMLHeadingElement>(null);

  const current = useMemo(
    () => bank.questions.find((question) => question.id === session?.currentId) ?? null,
    [bank.questions, session?.currentId],
  );
  const finalQuestion = useMemo(() => {
    const id = view.finalOrder[view.finalCursor];
    return bank.finals.find((question) => question.id === id) ?? bank.finals[0];
  }, [bank.finals, view.finalCursor, view.finalOrder]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const restored = restoreSession(bank, sessionStorage.getItem(sessionKey));
        if (restored) {
          setSession(restored);
          setSelected(restored.selectedCategories);
        }
        const savedView = JSON.parse(sessionStorage.getItem(viewKey) || "null") as Partial<SavedView> | null;
        if (savedView && ["questions", "student", "final"].includes(savedView.phase || "")) {
          const validFinalIds = new Set(bank.finals.map((item) => item.id));
          const finalOrder = Array.isArray(savedView.finalOrder)
            ? [...new Set(savedView.finalOrder.filter((id): id is string => typeof id === "string" && validFinalIds.has(id)))]
            : [];
          setView({
            phase: savedView.phase as Phase,
            choosing: restored ? Boolean(savedView.choosing) : true,
            finalOrder,
            finalCursor: Math.max(0, Math.min(Number(savedView.finalCursor) || 0, Math.max(0, finalOrder.length - 1))),
          });
        }
      } catch {
        setNotice("No pudimos recuperar la sesión anterior. Podés empezar una nueva.");
      }
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [bank, sessionKey, viewKey]);

  useEffect(() => {
    if (!ready) return;
    try {
      if (session) sessionStorage.setItem(sessionKey, serializeSession(session));
      sessionStorage.setItem(viewKey, JSON.stringify(view));
    } catch {
      // Storage is optional; the board remains fully usable without it.
    }
  }, [ready, session, sessionKey, view, viewKey]);

  const focusQuestion = useCallback(() => {
    window.requestAnimationFrame(() => questionRef.current?.focus({ preventScroll: true }));
  }, []);

  const goNext = useCallback((skipped = false) => {
    setSession((currentSession) => currentSession ? advanceSession(currentSession, { skipped }) : currentSession);
    setNotice(skipped ? "Pregunta pasada sin penalización." : "Nueva pregunta.");
    focusQuestion();
  }, [focusQuestion]);

  const goPrevious = useCallback(() => {
    setSession((currentSession) => currentSession ? previousSession(currentSession) : currentSession);
    setNotice("Volviste a la pregunta anterior con su historial.");
    focusQuestion();
  }, [focusQuestion]);

  const deepen = useCallback(() => {
    setSession((currentSession) => currentSession ? setDeepened(currentSession, !currentSession.deepened) : currentSession);
    setNotice(session?.deepened ? "Repreguntas cerradas." : "Repreguntas abiertas.");
    focusQuestion();
  }, [focusQuestion, session?.deepened]);

  const togglePresentation = useCallback(async () => {
    const next = !presentation;
    setPresentation(next);
    try {
      if (next && !document.fullscreenElement && document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (!next && document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      setNotice("Modo presentación activado dentro de la página.");
    }
  }, [presentation]);

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) setPresentation(false);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("button, a, input, select, textarea, summary, [contenteditable='true']")) return;
      const questionActive = view.phase === "questions" && !view.choosing && Boolean(current && session);
      if (event.key === "ArrowLeft" && questionActive) goPrevious();
      if (event.key === "ArrowRight" && questionActive) goNext();
      if (event.key.toLowerCase() === "d" && questionActive) deepen();
      if (event.key.toLowerCase() === "p" && questionActive) goNext(true);
      if (event.key.toLowerCase() === "c") setView((currentView) => ({ ...currentView, choosing: true, phase: "questions" }));
      if (event.key.toLowerCase() === "f") void togglePresentation();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, deepen, goNext, goPrevious, session, togglePresentation, view.choosing, view.phase]);

  function toggleCategory(category: string) {
    setSelected((categories) => categories.includes(category)
      ? categories.filter((item) => item !== category)
      : [...categories, category]);
  }

  function startSession() {
    if (selected.length === 0) {
      setNotice("Elegí al menos una categoría.");
      return;
    }
    setSession(createSession(bank, selected));
    setView((currentView) => ({ ...currentView, choosing: false, phase: "questions" }));
    setNotice(selected.length === 1 ? "Categoría lista." : `${selected.length} categorías mezcladas.`);
    focusQuestion();
  }

  function continueSession() {
    if (!session) return;
    setSelected(session.selectedCategories);
    setView((currentView) => ({ ...currentView, choosing: false, phase: "questions" }));
    setNotice("Continuamos donde quedó la sesión.");
    focusQuestion();
  }

  function restart() {
    const restartCategories = session?.selectedCategories ?? selected;
    if (restartCategories.length === 0) return;
    setSelected(restartCategories);
    setSession(resetSession(bank, restartCategories));
    setView((currentView) => ({ ...currentView, choosing: false, phase: "questions" }));
    setNotice("Sorteo reiniciado. El banco completo vuelve a estar disponible.");
    focusQuestion();
  }

  function openFinal() {
    setView((currentView) => ({
      ...currentView,
      phase: "final",
      choosing: false,
      finalOrder: currentView.finalOrder.length ? currentView.finalOrder : shuffledIds(bank.finals.map((item) => item.id)),
      finalCursor: 0,
    }));
    setNotice("Conversación final abierta.");
  }

  function nextFinal() {
    setView((currentView) => ({
      ...currentView,
      finalCursor: Math.min(currentView.finalCursor + 1, currentView.finalOrder.length - 1),
    }));
    setNotice("Otra pregunta final.");
    focusQuestion();
  }

  if (!ready) return <main className="board-loading">Preparando el tablero…</main>;

  return <main className={`board-page board-${bank.level.toLowerCase()} ${presentation ? "board-presentation" : ""}`}>
    {presentation && <button type="button" className="board-presentation-exit" onClick={togglePresentation}>Salir de presentación</button>}
    <header className="board-topbar">
      <Link href="/#library-results" className="board-back">← Biblioteca</Link>
      <div className="board-identity"><b>SPANISHCUE</b><span>CONVERSACIÓN · TABLEROS</span></div>
      <button type="button" onClick={togglePresentation} aria-pressed={presentation}>{presentation ? "Salir de presentación" : "Modo presentación"}</button>
    </header>

    <section className="board-hero">
      <div><span>{bank.level} · TABLERO</span><h1>{bank.title}</h1><p>{bank.subtitle}</p></div>
      <div className="board-counts" aria-label="Tamaño del banco y progreso de la sesión">
        <span><b>Banco:</b> {bank.questions.length} principales + {bank.finals.length} finales</span>
        <span><b>Sesión:</b> {session?.visited.length ?? 0} vistas · {session?.skipped.length ?? 0} pasadas</span>
      </div>
    </section>

    <details className="board-plan">
      <summary>Guía de 45 minutos <span>ver estructura</span></summary>
      <ol>
        <li><b>3 min</b><span>Entrada y elección de categorías</span></li>
        <li><b>27 min</b><span>Preguntas elegidas del banco</span></li>
        <li><b>5 min</b><span>Alumno pregunta al profesor</span></li>
        <li><b>10 min</b><span>Conversación final abierta</span></li>
      </ol>
      <p>Usen una parte del banco. No hace falta completarlo. Las preguntas personales se pueden pasar sin penalización.</p>
    </details>

    <nav className="board-phases" aria-label="Partes de la clase">
      <button aria-current={view.phase === "questions" ? "step" : undefined} onClick={() => setView((state) => ({ ...state, phase: "questions", choosing: !session }))}>1 · Preguntas</button>
      <button aria-current={view.phase === "student" ? "step" : undefined} onClick={() => setView((state) => ({ ...state, phase: "student", choosing: false }))}>2 · Alumno pregunta</button>
      <button aria-current={view.phase === "final" ? "step" : undefined} onClick={openFinal}>3 · Cierre abierto</button>
    </nav>

    {view.phase === "questions" && view.choosing && <section className="board-selector" aria-labelledby="board-selector-title">
      <span>ARMÁ ESTA SESIÓN</span><h2 id="board-selector-title">Elegí una categoría o mezclá varias.</h2>
      <div>{bank.categories.map((category) => <button type="button" key={category} aria-pressed={selected.includes(category)} onClick={() => toggleCategory(category)}>{category}</button>)}</div>
      <footer>
        {session && <button type="button" className="board-secondary" onClick={continueSession}>Continuar sesión</button>}
        <button type="button" className="board-primary" onClick={startSession} disabled={selected.length === 0}>{selected.length > 1 ? "Mezclar las elegidas" : "Empezar con esta categoría"}</button>
      </footer>
    </section>}

    {view.phase === "questions" && !view.choosing && session?.exhausted && <section className="board-empty">
      <span>BANCO RECORRIDO</span><h2>Ya aparecieron todas las preguntas de esta selección.</h2>
      <p>Podés cambiar categorías o volver a sortear las mismas. No repetimos automáticamente.</p>
      <div><button type="button" onClick={() => setView((state) => ({ ...state, choosing: true }))}>Cambiar categoría</button><button type="button" className="board-primary" onClick={restart}>Reiniciar sorteo</button></div>
    </section>}

    {view.phase === "questions" && !view.choosing && current && session && <section className="board-stage" aria-labelledby="board-question">
      <div className="board-card-meta"><span>{current.category}</span><b>{session.cursor + 1} / {session.queue.length}</b></div>
      <h2 id="board-question" ref={questionRef} tabIndex={-1}>{current.prompt}</h2>
      {session.deepened && <div className="board-depth">
        <span>PARA PROFUNDIZAR</span>
        <ol>{current.followUps.map((followUp) => <li key={followUp}>{followUp}</li>)}</ol>
        {current.conditionChange && <aside><b>CAMBIO OPCIONAL DE CONDICIÓN</b><p>{current.conditionChange}</p></aside>}
      </div>}
      <details className="board-help"><summary>Ayudas opcionales</summary><div><p>Podés contar una experiencia, describir una escena, comparar dos momentos o explicar una razón.</p><span>Para empezar: «En mi caso…» · «Una vez…» · «Por un lado…»</span></div></details>
      <div className="board-actions">
        <button type="button" onClick={goPrevious} disabled={session.cursor === 0}>← Anterior</button>
        <button type="button" onClick={deepen} aria-pressed={session.deepened}>Profundizar</button>
        <button type="button" className="board-next" onClick={() => goNext(false)}>Otra pregunta →</button>
        <button type="button" onClick={() => setView((state) => ({ ...state, choosing: true }))}>Cambiar categoría</button>
        <button type="button" onClick={() => goNext(true)}>Pasar</button>
      </div>
    </section>}

    {view.phase === "student" && <section className="board-interlude">
      <span>5 min · CAMBIO DE ROLES</span><h2>Ahora el alumno pregunta al profesor.</h2>
      <p>Elegí una pregunta del tablero que te dio curiosidad, adaptala y hacé una repregunta según la respuesta.</p>
      <div><b>1</b><span>Elegí un tema de hoy.</span><b>2</b><span>Formulá tu propia pregunta.</span><b>3</b><span>Escuchá y profundizá.</span></div>
      <button type="button" className="board-primary" onClick={openFinal}>Ir a la conversación final →</button>
    </section>}

    {view.phase === "final" && finalQuestion && <section className="board-final">
      <span>10 min · CONVERSACIÓN FINAL ABIERTA</span><h2 ref={questionRef} tabIndex={-1}>{finalQuestion.prompt}</h2>
      <p>Sin respuesta modelo. Conecten esta pregunta con algo que apareció antes y dejen que la conversación encuentre su propio cierre.</p>
      <div><button type="button" onClick={() => setView((state) => ({ ...state, finalCursor: Math.max(0, state.finalCursor - 1) }))} disabled={view.finalCursor === 0}>← Anterior</button><button type="button" className="board-primary" onClick={nextFinal} disabled={view.finalCursor >= view.finalOrder.length - 1}>Otra final →</button></div>
    </section>}

    <p className="board-status" role="status" aria-live="polite">{notice}</p>
    <footer className="board-footer"><span>Atajos: ← anterior · → otra · D profundizar · P pasar · C categorías · F presentación</span><button type="button" onClick={restart} disabled={!session}>Reiniciar sesión</button></footer>
  </main>;
}
