"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { verbPath, verbSlug } from "../conjugacion/verbos";
import { TRAINER_COPY, VERB_GLOSS, type TrainerCopy, type TrainerLocale } from "./copy";
import { promoWeekActive } from "../promo-config";
import {
  DEFAULT_SETTINGS, DRILL_TENSES, FREE_LIST_LIMIT, ROUND_LENGTHS, TENSE_BY_KEY, TRAINER_ACCESS_PATH,
  TRAINER_PATH, TRAINER_PATH_EN, TRAINER_STORAGE_KEY, VERB_SETS, VERB_TOTAL, formatCount, allowedSettings, answerPrefix, cardKey, checkAnswer, diffMarks,
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

/** Tense and set names in the interface language. */
const tenseName = (t: TrainerCopy, key: TenseKey) => t.tense?.[key] ?? TENSE_BY_KEY.get(key)!;
const setName = (t: TrainerCopy, key: Settings["set"]) => t.sets?.[key] ?? VERB_SETS.find((set) => set.key === key)!;

export default function VerbTrainer({ locale = "es" }: { locale?: TrainerLocale }) {
  const t = TRAINER_COPY[locale];
  const en = locale === "en";
  const verbHref = (verb: string) => (en ? `/spanish-verbs/${encodeURIComponent(verbSlug(verb))}` : verbPath(verb));
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
              if (removed.length) setNotice(t.linkRemoved(removed.map((key) => tenseName(t, key).short).join(", ")));
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
  }, [t]);

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
    if (tense?.pro && !pro) { setLockedHint(tenseName(t, key).label); return; }
    setSettings((current) => {
      const has = current.tenses.includes(key);
      const tenses = has ? current.tenses.filter((item) => item !== key) : [...current.tenses, key];
      return { ...current, tenses: tenses.length ? DRILL_TENSES.map((item) => item.key).filter((item) => tenses.includes(item)) : current.tenses };
    });
  };

  const chooseSet = (key: Settings["set"]) => {
    const set = VERB_SETS.find((item) => item.key === key);
    if (set?.pro && !pro) { setLockedHint(setName(t, key).label); return; }
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
      if (!limited.length) { setNotice(t.emptyList); return; }
      active = { ...settings, list: limited };
      setSettings(active);
    }
    if (!cards && !verbsForSet(active.set, active.list).length) { setNotice(t.emptyPool); return; }
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
    const url = `${window.location.origin}${en ? TRAINER_PATH_EN : TRAINER_PATH}?${shareQuery(settings.set === "lista" ? { ...settings, list: parsedList.verbs } : settings)}`;
    try { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 2200); } catch { window.prompt(t.copyPrompt, url); }
  };

  const tense = card ? TENSE_BY_KEY.get(card.tense) : null;
  const progress = limit ? Math.min(100, Math.round((round.done / limit) * 100)) : 0;
  const elapsed = Math.max(1, Math.round(((endedAt || round.startedAt) - round.startedAt) / 1000));

  return (
    <div className="vt-app" data-screen={screen}>
      {screen === "setup" && (
        <div className="vt-setup">
          <section className="vt-panel vt-choose" aria-labelledby="vt-choose-title">
            <h2 id="vt-choose-title" className="vt-h">{t.choose}</h2>
            {notice && <p className="vt-notice" role="status">{notice}</p>}

            <p className="vt-label">{t.tenses}</p>
            <div className="vt-moods">
              {MOODS.map((mood) => (
                <div className="vt-mood" key={mood} data-mood={mood}>
                  <span className="vt-mood-name">{t.moods[mood]}</span>
                  <div className="vt-chips">
                    {DRILL_TENSES.filter((item) => item.mood === mood).map((item) => {
                      const on = settings.tenses.includes(item.key);
                      const locked = item.pro && !pro;
                      return (
                        <button type="button" key={item.key} className="vt-chip" aria-pressed={on} data-locked={locked || undefined} onClick={() => toggleTense(item.key)}>
                          {locked && <span aria-hidden="true" className="vt-lock">🔒</span>}{tenseName(t, item.key).short}
                          {locked && <span className="vt-sr"> (PRO)</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p className="vt-label">{t.verbs}</p>
            <div className="vt-sets" role="radiogroup" aria-label={t.verbs}>
              {VERB_SETS.map((set) => {
                const locked = set.pro && !pro;
                return (
                  <button type="button" role="radio" aria-checked={settings.set === set.key} key={set.key} className="vt-set" data-locked={locked || undefined} onClick={() => chooseSet(set.key)}>
                    <b>{locked && <span aria-hidden="true" className="vt-lock">🔒</span>}{setName(t, set.key).label}{set.key === "todos" && en ? ` (${formatCount(VERB_TOTAL, ",")})` : ""}</b>
                    <small>{setName(t, set.key).hint}</small>
                  </button>
                );
              })}
            </div>
            {settings.set === "lista" && (
              <div className="vt-list">
                <label htmlFor="vt-list-input" className="vt-sr">{t.listLabel}</label>
                <textarea id="vt-list-input" rows={2} lang="es" spellCheck={false} autoCapitalize="off" placeholder={t.listPlaceholder} value={listText} onChange={(event) => setListText(event.target.value)} />
                <small>
                  {t.verbCount(parsedList.verbs.length)}
                  {!pro && parsedList.verbs.length > FREE_LIST_LIMIT && t.freeListCap(FREE_LIST_LIMIT)}
                  {parsedList.unknown.length > 0 && t.unknown(parsedList.unknown.slice(0, 5).join(", "))}
                </small>
              </div>
            )}

            {lockedHint && <ProNote t={t} what={lockedHint} onClose={() => setLockedHint("")} />}

            <div className="vt-options">
              <label className="vt-switch"><input type="checkbox" checked={settings.vosotros} onChange={(event) => updateSettings({ vosotros: event.target.checked })} /> <span>{t.vosotros}</span></label>
              <label className="vt-switch"><input type="checkbox" checked={settings.strictAccents} onChange={(event) => updateSettings({ strictAccents: event.target.checked })} /> <span>{t.strict}</span></label>
              <div className="vt-length" role="radiogroup" aria-label={t.roundLength}>
                {ROUND_LENGTHS.map((length) => (
                  <button type="button" role="radio" aria-checked={settings.length === length} key={length} onClick={() => updateSettings({ length })}>{length || "∞"}</button>
                ))}
              </div>
            </div>

            <div className="vt-actions">
              <button type="button" className="vt-primary" onClick={() => start()}>{t.start}</button>
              {dueHere > 0 && <span className="vt-due">{t.due(dueHere)}</span>}
              <button type="button" className="vt-ghost" onClick={copyLink}>{copied ? t.copied : t.copyLink}</button>
            </div>
            {pro && <p className="vt-pro-on">{via === "pase" ? t.passOn : t.proOn}</p>}
          </section>

          <StatsPanel t={t} stats={stats} best={memory.best} verbHref={verbHref} tenseShort={(key) => tenseName(t, key).short} />
        </div>
      )}

      {screen === "drill" && card && tense && (
        <section className="vt-panel vt-drill" aria-label={t.practice}>
          <div className="vt-drill-top">
            <button type="button" className="vt-link" onClick={finish}>{t.finish}</button>
            <div className="vt-meter" aria-hidden={!limit}>
              {limit ? <i style={{ width: `${progress}%` }} /> : null}
            </div>
            <span className="vt-count">{limit ? `${Math.min(round.done + (result ? 0 : 1), limit)} / ${limit}` : round.done}</span>
            {round.combo >= 3 && <span className="vt-combo" aria-label={t.inARow(round.combo)}>🔥 {round.combo}</span>}
          </div>

          <form className="vt-card" data-mood={tense.mood} data-verdict={result?.verdict} onSubmit={submit}>
            <span className="vt-tense">{tenseName(t, card.tense).label}</span>
            <p className="vt-verb" lang="es">{card.verb}</p>
            {en && VERB_GLOSS[card.verb] && <p className="vt-gloss">{VERB_GLOSS[card.verb]}</p>}
            <p className="vt-person" lang="es">{personLabel(card.tense, card.person)}</p>
            <div className="vt-answer">
              {answerPrefix(card.tense) && <span className="vt-prefix" lang="es">{answerPrefix(card.tense)}</span>}
              <input
                ref={input} value={typed} onChange={(event) => !result && setTyped(event.target.value)} readOnly={Boolean(result)}
                aria-label={`${card.verb}, ${tenseName(t, card.tense).label}, ${personLabel(card.tense, card.person)}`}
                lang="es" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} enterKeyHint="go" placeholder={t.placeholder} size={8}
              />
            </div>
            <div className="vt-keys" aria-label={t.specialKeys}>
              {ACCENT_KEYS.map((letter) => <button type="button" key={letter} tabIndex={-1} onMouseDown={(event) => event.preventDefault()} onClick={() => insertAccent(letter)} disabled={Boolean(result)}>{letter}</button>)}
            </div>

            <div className="vt-feedback" aria-live="polite">
              {result?.verdict === "correct" && <p className="vt-ok">{t.great}</p>}
              {result && result.verdict !== "correct" && (
                <>
                  <p className="vt-bad">
                    {result.verdict === "accent" ? (result.counted ? t.accentOk : t.accentBad) : typed.trim() ? t.wrong : t.answerIs}
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
                  <a className="vt-link" href={verbHref(card.verb)} target="_blank" rel="noopener">{t.seeVerb(card.verb)}</a>
                </>
              )}
            </div>

            <div className="vt-card-actions">
              {!result && <button type="button" className="vt-ghost" onClick={() => submit(undefined, true)}>{t.dontKnow}</button>}
              <button type="submit" className="vt-primary">{result ? (result.verdict === "correct" ? t.next : t.continue) : t.check}</button>
            </div>
          </form>
        </section>
      )}

      {screen === "summary" && (
        <section className="vt-panel vt-summary" aria-labelledby="vt-summary-title">
          <h2 id="vt-summary-title" className="vt-h">{round.done ? (round.right / round.done >= 0.9 ? t.flawless : round.right / round.done >= 0.6 ? t.goodRound : t.roundDone) : t.roundDone}</h2>
          <div className="vt-score">
            <div><b>{round.done ? Math.round((round.right / round.done) * 100) : 0}%</b><span>{t.correct}</span></div>
            <div><b>{round.right}/{round.done}</b><span>{t.answers}</span></div>
            <div><b>{round.bestCombo}</b><span>{t.bestStreak}</span></div>
            <div><b>{elapsed < 60 ? `${elapsed} s` : `${Math.round(elapsed / 60)} min`}</b><span>{t.time}</span></div>
          </div>
          {round.misses.length > 0 && (
            <>
              <h3 className="vt-h3">{t.toReview}</h3>
              <ul className="vt-misses">
                {round.misses.slice(0, 12).map((miss, index) => (
                  <li key={index}>
                    <span>{miss.card.verb} · {tenseName(t, miss.card.tense).short} · {personLabel(miss.card.tense, miss.card.person)}</span>
                    <b lang="es">{answerPrefix(miss.card.tense) && `${answerPrefix(miss.card.tense)} `}{miss.expected}</b>
                    {miss.typed && <s lang="es">{miss.typed}</s>}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="vt-actions">
            {round.misses.length > 0 && <button type="button" className="vt-primary" onClick={() => start(round.misses.map((miss) => miss.card).filter((item, index, all) => all.findIndex((other) => cardKey(other) === cardKey(item)) === index))}>{t.reviewMistakes}</button>}
            <button type="button" className={round.misses.length ? "vt-ghost" : "vt-primary"} onClick={() => start()}>{t.anotherRound}</button>
            <button type="button" className="vt-link" onClick={() => setScreen("setup")}>{t.changeChoice}</button>
          </div>
          {!pro && <ProNote t={t} />}
        </section>
      )}
    </div>
  );
}

function ProNote({ t, what, onClose }: { t: TrainerCopy; what?: string; onClose?: () => void }) {
  const promo = promoWeekActive();
  return (
    <aside className="vt-pro" aria-label="SpanishCue PRO">
      {onClose && <button type="button" className="vt-pro-close" onClick={onClose} aria-label={t.close}>×</button>}
      <p className="vt-pro-kicker">SpanishCue PRO</p>
      <p className="vt-pro-title">{what ? t.proLocked(what) : t.proTitle}</p>
      <ul>{t.proPoints.map((point) => <li key={point}>{point}</li>)}</ul>
      <div className="vt-pro-cta">
        <a className="vt-primary" href="/pricing?from=entrenador-verbos">{promo ? t.proPromo : t.proSee}</a>
        <span>{promo ? t.proPromoThen : t.proPrice}</span>
      </div>
      <p className="vt-pro-student">{t.proStudent}</p>
    </aside>
  );
}

function StatsPanel({ t, stats, best, verbHref, tenseShort }: {
  t: TrainerCopy; stats: ReturnType<typeof statsOf>; best: number; verbHref: (verb: string) => string; tenseShort: (key: TenseKey) => string;
}) {
  return (
    <section className="vt-panel vt-stats" aria-labelledby="vt-stats-title">
      <h2 id="vt-stats-title" className="vt-h">{t.progress}</h2>
      {stats.answered === 0 ? (
        <p className="vt-empty">{t.progressEmpty}</p>
      ) : (
        <>
          <div className="vt-tiles">
            <div><b>{stats.streak}</b><span>{t.streakDays(stats.streak)}</span></div>
            <div><b>{stats.accuracy}%</b><span>{t.correct}</span></div>
            <div><b>{stats.answered}</b><span>{t.answers}</span></div>
            <div><b>{stats.mastered}</b><span>{t.mastered}</span></div>
          </div>
          <p className="vt-today">{t.today(stats.today, best, stats.due)}</p>
          {stats.tenses.length > 0 && (
            <ul className="vt-bars">
              {stats.tenses.map((tense) => {
                const pct = Math.round((tense.right / tense.total) * 100);
                return (
                  <li key={tense.key}>
                    <span>{tenseShort(tense.key)}</span>
                    <i aria-hidden="true"><em style={{ width: `${pct}%` }} data-low={pct < 60 || undefined} /></i>
                    <b>{pct}%</b>
                  </li>
                );
              })}
            </ul>
          )}
          {stats.weakVerbs.length > 0 && (
            <p className="vt-weak">{t.tough} {stats.weakVerbs.map((item, index) => (
              <span key={item.verb}>{index > 0 && ", "}<a href={verbHref(item.verb)}>{item.verb}</a></span>
            ))}</p>
          )}
        </>
      )}
    </section>
  );
}
