"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { verbPath } from "../conjugacion/verbos";
import { promoWeekActive } from "../promo-config";
import {
  DEFAULT_SETTINGS, DRILL_TENSES, FREE_LIST_LIMIT, MOOD_LABEL, ROUND_LENGTHS, TENSE_BY_KEY, TRAINER_ACCESS_PATH,
  TRAINER_PATH, TRAINER_STORAGE_KEY, VERB_SETS, allowedSettings, answerPrefix, cardKey, checkAnswer, diffMarks,
  dueCards, emptyMemory, nextCard, parseMemory, parseVerbList, personLabel, poolOf, remember, settingsFromQuery,
  shareQuery, statsOf, tenseRow, verbsForSet, type Card, type Memory, type Mood, type Result, type Settings,
} from "./drill";
import type { TenseKey } from "../conjugacion/engine";

type Screen = "setup" | "drill" | "summary";
type Miss = { card: Card; typed: string; expected: string };
type Round = { done: number; right: number; combo: number; bestCombo: number; misses: Miss[]; startedAt: number };
type Retry = { card: Card; wait: number };

const MOODS: Mood[] = ["indicativo", "compuesto", "subjuntivo", "imperativo"];
const ACCENT_KEYS = ["á", "é", "í", "ó", "ú", "ñ", "ü"];
const newRound = (startedAt = 0): Round => ({ done: 0, right: 0, combo: 0, bestCombo: 0, misses: [], startedAt });

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function loadMemory(): Memory {
  try { return parseMemory(window.localStorage.getItem(TRAINER_STORAGE_KEY)); } catch { return emptyMemory(); }
}
function saveMemory(memory: Memory) {
  try { window.localStorage.setItem(TRAINER_STORAGE_KEY, JSON.stringify(memory)); } catch { /* private mode: progress lives for this visit only */ }
}

export default function VerbTrainer() {
  const [pro, setPro] = useState(false);
  const [via, setVia] = useState<"pro" | "pase" | "free">("free");
  const [memory, setMemory] = useState<Memory>(emptyMemory);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [listText, setListText] = useState("");
  const [screen, setScreen] = useState<Screen>("setup");
  const [card, setCard] = useState<Card | null>(null);
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [round, setRound] = useState<Round>(newRound);
  const [lockedHint, setLockedHint] = useState("");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);
  const retry = useRef<Retry[]>([]);
  const recent = useRef<string[]>([]);
  const queue = useRef<Card[] | null>(null);
  const roundLength = useRef(0);
  const input = useRef<HTMLInputElement>(null);
  const advanceTimer = useRef<number | undefined>(undefined);
  const doneRef = useRef(0);
  const memoryRef = useRef(memory);
  const [limit, setLimit] = useState(0);
  const [endedAt, setEndedAt] = useState(0);

  // Saved progress and settings, then a shared link's choices on top.
  useEffect(() => { memoryRef.current = memory; }, [memory]);

  useEffect(() => {
    const init = () => {
      const saved = loadMemory();
      setMemory(saved);
      const fromQuery = window.location.search ? settingsFromQuery(new URLSearchParams(window.location.search), saved.settings ?? DEFAULT_SETTINGS) : null;
      const start = fromQuery ?? saved.settings ?? DEFAULT_SETTINGS;
      const { settings: allowed } = allowedSettings(start, false);
      setSettings(allowed);
      setListText(start.list.join(", "));
      fetch(TRAINER_ACCESS_PATH, { credentials: "same-origin" })
        .then((response) => (response.ok ? (response.json() as Promise<{ pro?: boolean; via?: "pro" | "pase" | "free" }>) : null))
        .then((data: { pro?: boolean; via?: "pro" | "pase" | "free" } | null) => {
          if (!alive || !data?.pro) {
            if (alive && fromQuery) {
              const { removed } = allowedSettings(fromQuery, false);
              if (removed.length) setNotice(`Este enlace incluye ${removed.map((key) => TENSE_BY_KEY.get(key)?.short).join(", ")}: son tiempos de SpanishCue PRO. Practica el resto gratis.`);
            }
            return;
          }
          setPro(true);
          setVia(data.via ?? "pro");
          setSettings(allowedSettings(start, true).settings);
        })
        .catch(() => { /* offline or blocked: the free trainer keeps working */ });
    };
    let alive = true;
    init();
    return () => { alive = false; };
  }, []);

  useEffect(() => () => window.clearTimeout(advanceTimer.current), []);

  const commitMemory = useCallback((next: Memory) => {
    setMemory(next);
    saveMemory(next);
  }, []);

  const stats = useMemo(() => statsOf(memory), [memory]);
  const pool = useMemo(() => poolOf(settings), [settings]);
  const dueHere = useMemo(() => dueCards(memory, pool).length, [memory, pool]);
  const parsedList = useMemo(() => parseVerbList(listText), [listText]);

  const updateSettings = (patch: Partial<Settings>) => setSettings((current) => ({ ...current, ...patch }));

  const toggleTense = (key: TenseKey) => {
    const tense = TENSE_BY_KEY.get(key);
    if (tense?.pro && !pro) { setLockedHint(tense.label); return; }
    setSettings((current) => {
      const has = current.tenses.includes(key);
      const tenses = has ? current.tenses.filter((item) => item !== key) : [...current.tenses, key];
      return { ...current, tenses: tenses.length ? DRILL_TENSES.map((item) => item.key).filter((item) => tenses.includes(item)) : current.tenses };
    });
  };

  const chooseSet = (key: Settings["set"]) => {
    const set = VERB_SETS.find((item) => item.key === key);
    if (set?.pro && !pro) { setLockedHint(set.label); return; }
    updateSettings({ set: key });
  };

  const pick = useCallback((mem: Memory): Card | null => {
    if (queue.current) return queue.current.shift() ?? null;
    const ready = retry.current.findIndex((item) => item.wait <= 0);
    if (ready >= 0) return retry.current.splice(ready, 1)[0].card;
    return nextCard(mem, pool, recent.current);
  }, [pool]);

  const show = useCallback((next: Card | null) => {
    setCard(next);
    setTyped("");
    setResult(null);
    if (next) {
      recent.current = [cardKey(next), ...recent.current].slice(0, 6);
      window.setTimeout(() => input.current?.focus(), 30);
    }
  }, []);

  const start = (cards?: Card[]) => {
    let active = settings;
    if (settings.set === "lista") {
      const limited = pro ? parsedList.verbs : parsedList.verbs.slice(0, FREE_LIST_LIMIT);
      if (!limited.length) { setNotice("Escribe al menos un verbo de tu lista (por ejemplo: tener, pedir, dormir)."); return; }
      active = { ...settings, list: limited };
      setSettings(active);
    }
    if (!cards && !verbsForSet(active.set, active.list).length) { setNotice("No hay verbos para practicar con esta elección."); return; }
    setNotice("");
    setLockedHint("");
    queue.current = cards ? shuffle(cards) : null;
    roundLength.current = cards ? 0 : active.length;
    setLimit(roundLength.current);
    doneRef.current = 0;
    retry.current = [];
    recent.current = [];
    const saved = { ...memory, settings: active };
    commitMemory(saved);
    setRound(newRound(Date.now()));
    setScreen("drill");
    show(cards ? queue.current!.shift() ?? null : nextCard(saved, poolOf(active), []));
  };

  const toSummary = useCallback(() => {
    window.clearTimeout(advanceTimer.current);
    setEndedAt(Date.now());
    setScreen("summary");
    setCard(null);
  }, []);
  const finish = toSummary;

  const advance = useCallback(() => {
    window.clearTimeout(advanceTimer.current);
    retry.current.forEach((item) => { item.wait -= 1; });
    const finished = queue.current ? !queue.current.length : roundLength.current > 0 && doneRef.current >= roundLength.current;
    if (finished) { toSummary(); return; }
    show(pick(memoryRef.current));
  }, [pick, show, toSummary]);

  const submit = (event?: FormEvent, giveUp = false) => {
    event?.preventDefault();
    if (!card) return;
    if (result) { advance(); return; }
    if (!giveUp && !typed.trim()) { input.current?.focus(); return; }
    const outcome = giveUp ? { ...checkAnswer(card, "", true), verdict: "wrong" as const, counted: false } : checkAnswer(card, typed, settings.strictAccents);
    setResult(outcome);
    const combo = outcome.counted ? round.combo + 1 : 0;
    const recorded = remember(memory, card, outcome.counted);
    commitMemory({ ...recorded, best: Math.max(recorded.best, combo) });
    doneRef.current += 1;
    setRound({
      ...round,
      done: round.done + 1,
      right: round.right + (outcome.counted ? 1 : 0),
      combo,
      bestCombo: Math.max(round.bestCombo, combo),
      misses: outcome.counted ? round.misses : [...round.misses, { card, typed: giveUp ? "" : typed.trim(), expected: outcome.expected }],
    });
    if (!outcome.counted) {
      if (!queue.current) retry.current.push({ card, wait: 3 });
      else queue.current.splice(Math.min(3, queue.current.length), 0, card);
    } else if (outcome.verdict === "correct") {
      advanceTimer.current = window.setTimeout(advance, 750);
    }
  };

  const insertAccent = (letter: string) => {
    const field = input.current;
    if (!field || result) return;
    const from = field.selectionStart ?? typed.length;
    const to = field.selectionEnd ?? typed.length;
    const next = typed.slice(0, from) + letter + typed.slice(to);
    setTyped(next);
    window.requestAnimationFrame(() => { field.focus(); field.setSelectionRange(from + 1, from + 1); });
  };

  const copyLink = async () => {
    const url = `${window.location.origin}${TRAINER_PATH}?${shareQuery(settings.set === "lista" ? { ...settings, list: parsedList.verbs } : settings)}`;
    try { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 2200); } catch { window.prompt("Copia este enlace:", url); }
  };

  const tense = card ? TENSE_BY_KEY.get(card.tense) : null;
  const progress = limit ? Math.min(100, Math.round((round.done / limit) * 100)) : 0;
  const elapsed = Math.max(1, Math.round(((endedAt || round.startedAt) - round.startedAt) / 1000));

  return (
    <div className="vt-app" data-screen={screen}>
      {screen === "setup" && (
        <div className="vt-setup">
          <section className="vt-panel vt-choose" aria-labelledby="vt-choose-title">
            <h2 id="vt-choose-title" className="vt-h">¿Qué quieres practicar?</h2>
            {notice && <p className="vt-notice" role="status">{notice}</p>}

            <p className="vt-label">Tiempos verbales</p>
            <div className="vt-moods">
              {MOODS.map((mood) => (
                <div className="vt-mood" key={mood} data-mood={mood}>
                  <span className="vt-mood-name">{MOOD_LABEL[mood]}</span>
                  <div className="vt-chips">
                    {DRILL_TENSES.filter((item) => item.mood === mood).map((item) => {
                      const on = settings.tenses.includes(item.key);
                      const locked = item.pro && !pro;
                      return (
                        <button type="button" key={item.key} className="vt-chip" aria-pressed={on} data-locked={locked || undefined} onClick={() => toggleTense(item.key)}>
                          {locked && <span aria-hidden="true" className="vt-lock">🔒</span>}{item.short}
                          {locked && <span className="vt-sr"> (PRO)</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p className="vt-label">Verbos</p>
            <div className="vt-sets" role="radiogroup" aria-label="Verbos">
              {VERB_SETS.map((set) => {
                const locked = set.pro && !pro;
                return (
                  <button type="button" role="radio" aria-checked={settings.set === set.key} key={set.key} className="vt-set" data-locked={locked || undefined} onClick={() => chooseSet(set.key)}>
                    <b>{locked && <span aria-hidden="true" className="vt-lock">🔒</span>}{set.label}</b>
                    <small>{set.hint}</small>
                  </button>
                );
              })}
            </div>
            {settings.set === "lista" && (
              <div className="vt-list">
                <label htmlFor="vt-list-input" className="vt-sr">Tu lista de verbos</label>
                <textarea id="vt-list-input" rows={2} lang="es" spellCheck={false} autoCapitalize="off" placeholder="tener, pedir, dormir, conducir…" value={listText} onChange={(event) => setListText(event.target.value)} />
                <small>
                  {parsedList.verbs.length} {parsedList.verbs.length === 1 ? "verbo" : "verbos"}
                  {!pro && parsedList.verbs.length > FREE_LIST_LIMIT && ` · gratis se practican los primeros ${FREE_LIST_LIMIT}`}
                  {parsedList.unknown.length > 0 && ` · no reconocidos: ${parsedList.unknown.slice(0, 5).join(", ")}`}
                </small>
              </div>
            )}

            {lockedHint && <ProNote what={lockedHint} onClose={() => setLockedHint("")} />}

            <div className="vt-options">
              <label className="vt-switch"><input type="checkbox" checked={settings.vosotros} onChange={(event) => updateSettings({ vosotros: event.target.checked })} /> <span>Incluir vosotros</span></label>
              <label className="vt-switch"><input type="checkbox" checked={settings.strictAccents} onChange={(event) => updateSettings({ strictAccents: event.target.checked })} /> <span>Las tildes cuentan</span></label>
              <div className="vt-length" role="radiogroup" aria-label="Preguntas por ronda">
                {ROUND_LENGTHS.map((length) => (
                  <button type="button" role="radio" aria-checked={settings.length === length} key={length} onClick={() => updateSettings({ length })}>{length || "∞"}</button>
                ))}
              </div>
            </div>

            <div className="vt-actions">
              <button type="button" className="vt-primary" onClick={() => start()}>Empezar</button>
              {dueHere > 0 && <span className="vt-due">{dueHere} para repasar hoy</span>}
              <button type="button" className="vt-ghost" onClick={copyLink}>{copied ? "Enlace copiado ✓" : "Copiar enlace para tus alumnos"}</button>
            </div>
            {pro && <p className="vt-pro-on">{via === "pase" ? "Tu pase de alumno abre todos los tiempos y verbos." : "SpanishCue PRO: todos los tiempos y los verbos abiertos."}</p>}
          </section>

          <StatsPanel stats={stats} best={memory.best} />
        </div>
      )}

      {screen === "drill" && card && tense && (
        <section className="vt-panel vt-drill" aria-label="Práctica">
          <div className="vt-drill-top">
            <button type="button" className="vt-link" onClick={finish}>← Terminar</button>
            <div className="vt-meter" aria-hidden={!limit}>
              {limit ? <i style={{ width: `${progress}%` }} /> : null}
            </div>
            <span className="vt-count">{limit ? `${Math.min(round.done + (result ? 0 : 1), limit)} / ${limit}` : round.done}</span>
            {round.combo >= 3 && <span className="vt-combo" aria-label={`${round.combo} seguidas`}>🔥 {round.combo}</span>}
          </div>

          <form className="vt-card" data-mood={tense.mood} data-verdict={result?.verdict} onSubmit={submit}>
            <span className="vt-tense">{tense.label}</span>
            <p className="vt-verb" lang="es">{card.verb}</p>
            <p className="vt-person" lang="es">{personLabel(card.tense, card.person)}</p>
            <div className="vt-answer">
              {answerPrefix(card.tense) && <span className="vt-prefix" lang="es">{answerPrefix(card.tense)}</span>}
              <input
                ref={input} value={typed} onChange={(event) => !result && setTyped(event.target.value)} readOnly={Boolean(result)}
                aria-label={`${card.verb}, ${tense.label}, ${personLabel(card.tense, card.person)}`}
                lang="es" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} enterKeyHint="go" placeholder="Escribe la forma" size={8}
              />
            </div>
            <div className="vt-keys" aria-label="Letras especiales">
              {ACCENT_KEYS.map((letter) => <button type="button" key={letter} tabIndex={-1} onMouseDown={(event) => event.preventDefault()} onClick={() => insertAccent(letter)} disabled={Boolean(result)}>{letter}</button>)}
            </div>

            <div className="vt-feedback" aria-live="polite">
              {result?.verdict === "correct" && <p className="vt-ok">¡Bien!</p>}
              {result && result.verdict !== "correct" && (
                <>
                  <p className="vt-bad">
                    {result.verdict === "accent" ? (result.counted ? "Bien, pero ojo con la tilde:" : "Casi: falta o sobra una tilde.") : typed.trim() ? "No es así." : "La respuesta es:"}
                  </p>
                  <p className="vt-expected" lang="es">
                    {answerPrefix(card.tense) && `${answerPrefix(card.tense)} `}
                    {diffMarks(typed.trim().toLowerCase(), result.expected).map((part, index) => part.miss ? <mark key={index}>{part.text}</mark> : <span key={index}>{part.text}</span>)}
                  </p>
                  <table className="vt-row">
                    <tbody>
                      {tenseRow(card, settings.vosotros).map((row) => (
                        <tr key={row.person} data-current={row.current || undefined}><th scope="row">{row.person}</th><td lang="es">{row.form}</td></tr>
                      ))}
                    </tbody>
                  </table>
                  <a className="vt-link" href={verbPath(card.verb)} target="_blank" rel="noopener">Ver toda la conjugación de {card.verb} ↗</a>
                </>
              )}
            </div>

            <div className="vt-card-actions">
              {!result && <button type="button" className="vt-ghost" onClick={() => submit(undefined, true)}>No lo sé</button>}
              <button type="submit" className="vt-primary">{result ? (result.verdict === "correct" ? "Siguiente" : "Seguir ↵") : "Comprobar"}</button>
            </div>
          </form>
        </section>
      )}

      {screen === "summary" && (
        <section className="vt-panel vt-summary" aria-labelledby="vt-summary-title">
          <h2 id="vt-summary-title" className="vt-h">{round.done ? (round.right / round.done >= 0.9 ? "¡Ronda impecable!" : round.right / round.done >= 0.6 ? "¡Buena ronda!" : "Ronda terminada") : "Ronda terminada"}</h2>
          <div className="vt-score">
            <div><b>{round.done ? Math.round((round.right / round.done) * 100) : 0}%</b><span>aciertos</span></div>
            <div><b>{round.right}/{round.done}</b><span>respuestas</span></div>
            <div><b>{round.bestCombo}</b><span>mejor racha</span></div>
            <div><b>{elapsed < 60 ? `${elapsed} s` : `${Math.round(elapsed / 60)} min`}</b><span>tiempo</span></div>
          </div>
          {round.misses.length > 0 && (
            <>
              <h3 className="vt-h3">Para repasar</h3>
              <ul className="vt-misses">
                {round.misses.slice(0, 12).map((miss, index) => (
                  <li key={index}>
                    <span>{miss.card.verb} · {TENSE_BY_KEY.get(miss.card.tense)?.short} · {personLabel(miss.card.tense, miss.card.person)}</span>
                    <b lang="es">{answerPrefix(miss.card.tense) && `${answerPrefix(miss.card.tense)} `}{miss.expected}</b>
                    {miss.typed && <s lang="es">{miss.typed}</s>}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="vt-actions">
            {round.misses.length > 0 && <button type="button" className="vt-primary" onClick={() => start(round.misses.map((miss) => miss.card).filter((item, index, all) => all.findIndex((other) => cardKey(other) === cardKey(item)) === index))}>Repasar mis errores</button>}
            <button type="button" className={round.misses.length ? "vt-ghost" : "vt-primary"} onClick={() => start()}>Otra ronda</button>
            <button type="button" className="vt-link" onClick={() => setScreen("setup")}>Cambiar tiempos o verbos</button>
          </div>
          {!pro && <ProNote />}
        </section>
      )}
    </div>
  );
}

function ProNote({ what, onClose }: { what?: string; onClose?: () => void }) {
  const promo = promoWeekActive();
  return (
    <aside className="vt-pro" aria-label="SpanishCue PRO">
      {onClose && <button type="button" className="vt-pro-close" onClick={onClose} aria-label="Cerrar">×</button>}
      <p className="vt-pro-kicker">SpanishCue PRO</p>
      <p className="vt-pro-title">{what ? `${what} es parte de PRO` : "Practica el subjuntivo, el imperativo y más de 1.200 verbos"}</p>
      <ul>
        <li>Los 15 tiempos: subjuntivo, imperativo y todos los compuestos</li>
        <li>Todos los verbos del diccionario y listas sin límite</li>
        <li>Además, toda la biblioteca de clases listas para dar</li>
      </ul>
      <div className="vt-pro-cta">
        <a className="vt-primary" href="/pricing?from=entrenador-verbos">{promo ? "Probar PRO 10 días por US$0,99" : "Ver SpanishCue PRO"}</a>
        <span>{promo ? "Después US$19,90/mes. Cancela cuando quieras." : "US$19,90/mes. Cancela cuando quieras."}</span>
      </div>
      <p className="vt-pro-student">¿Eres alumno? Si tu profe tiene SpanishCue PRO, abre su enlace de alumno y aquí tendrás todo abierto.</p>
    </aside>
  );
}

function StatsPanel({ stats, best }: { stats: ReturnType<typeof statsOf>; best: number }) {
  return (
    <section className="vt-panel vt-stats" aria-labelledby="vt-stats-title">
      <h2 id="vt-stats-title" className="vt-h">Tu progreso</h2>
      {stats.answered === 0 ? (
        <p className="vt-empty">Aquí verás tus aciertos, tu racha de días y los verbos que más te cuestan. Se guarda en este navegador, sin cuenta.</p>
      ) : (
        <>
          <div className="vt-tiles">
            <div><b>{stats.streak}</b><span>{stats.streak === 1 ? "día seguido" : "días seguidos"}</span></div>
            <div><b>{stats.accuracy}%</b><span>aciertos</span></div>
            <div><b>{stats.answered}</b><span>respuestas</span></div>
            <div><b>{stats.mastered}</b><span>formas dominadas</span></div>
          </div>
          <p className="vt-today">Hoy: {stats.today} {stats.today === 1 ? "respuesta" : "respuestas"} · Mejor racha: {best} · Para repasar: {stats.due}</p>
          {stats.tenses.length > 0 && (
            <ul className="vt-bars">
              {stats.tenses.map((tense) => {
                const pct = Math.round((tense.right / tense.total) * 100);
                return (
                  <li key={tense.key}>
                    <span>{tense.label}</span>
                    <i aria-hidden="true"><em style={{ width: `${pct}%` }} data-low={pct < 60 || undefined} /></i>
                    <b>{pct}%</b>
                  </li>
                );
              })}
            </ul>
          )}
          {stats.weakVerbs.length > 0 && (
            <p className="vt-weak">Te cuestan: {stats.weakVerbs.map((item, index) => (
              <span key={item.verb}>{index > 0 && ", "}<a href={verbPath(item.verb)}>{item.verb}</a></span>
            ))}</p>
          )}
        </>
      )}
    </section>
  );
}
