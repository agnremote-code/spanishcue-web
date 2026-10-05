"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import type { ChoiceItem, ClassifyItem, ErrorItem, Exercise, GapItem, MatchPair, OpenItem, OrderItem, TransformItem } from "../curriculum/types";
import type { Copy } from "./copy";
import { Rich } from "./Rich";
import { playClips, type AudioMap } from "./speech";
import { checkAnswer, countWords, normalizeAnswer, seededShuffle, type Verdict } from "./text";

export type EngineContext = { t: Copy; audio?: AudioMap; showEnglish: boolean };

export function PlayButton({ text, voice, ctx, label, compact = false }: { text: string; voice?: ChoiceItem["voice"]; ctx: EngineContext; label?: string; compact?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const request = useRef(0);
  const play = async (rate: number) => {
    const id = ++request.current;
    setAudioError(false);
    setPlaying(true);
    try {
      await playClips([{ text, voice }], { rate, audio: ctx.audio });
    } catch {
      if (id === request.current) setAudioError(true);
    } finally {
      if (id === request.current) setPlaying(false);
    }
  };
  return (
    <span className={`ae-play ${compact ? "compact" : ""} ${audioError ? "has-error" : ""}`}>
      <button type="button" className={playing ? "playing" : ""} onClick={() => play(1)} aria-label={`${ctx.t.listen}${label ? `: ${label}` : ""}`}>
        <span aria-hidden="true">{playing ? "◼" : "▶"}</span>
        {!compact && <b>{label ?? ctx.t.listen}</b>}
      </button>
      {!compact && (
        <button type="button" className="slow" onClick={() => play(0.7)} aria-label={ctx.t.listenSlow}>
          0.7×
        </button>
      )}
      {audioError && <small role="alert">{ctx.t.audioError}</small>}
    </span>
  );
}

function Feedback({ verdict, why, answer, t }: { verdict: Verdict | null; why?: string; answer?: string; t: Copy }) {
  if (!verdict) return null;
  return (
    <div className={`ae-feedback ${verdict}`} role="status">
      <b>{verdict === "correct" ? t.correct : verdict === "accent" ? t.almost : t.wrong}</b>
      {answer && verdict !== "correct" && (
        <span>
          {t.answer}: <Rich text={answer} />
        </span>
      )}
      {why && (
        <small>
          <Rich text={why} />
        </small>
      )}
    </div>
  );
}

function Shell({ exercise, children, footer }: { exercise: Exercise; children: ReactNode; footer?: ReactNode }) {
  return (
    <section className={`ae-exercise type-${exercise.type}`} aria-labelledby={`ex-${exercise.id}`}>
      <header>
        <span className="ae-mechanic">{mechanicLabel(exercise.type)}</span>
        {exercise.title && <h4 id={`ex-${exercise.id}`}>{exercise.title}</h4>}
        <p id={exercise.title ? undefined : `ex-${exercise.id}`}>
          <Rich text={exercise.prompt} />
        </p>
      </header>
      <div className="ae-exercise-body">{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
}

export function mechanicLabel(type: Exercise["type"]): string {
  return {
    choice: "Elige",
    context: "Decide en contexto",
    listen: "Escucha y elige",
    gap: "Completa",
    order: "Ordena",
    match: "Une",
    classify: "Clasifica",
    transform: "Transforma",
    error: "Corrige el error",
    open: "Produce",
  }[type];
}

// ---------------------------------------------------------------------------

export function ChoiceQuestion({ item, ctx, id, onAnswer }: { item: ChoiceItem; ctx: EngineContext; id: string; onAnswer?: (correct: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  // Three or more options are shown in a stable shuffled order, so the right
  // answer never sits in a predictable place. Pairs (tú/usted…) keep theirs.
  const order = useMemo(() => {
    const indexes = item.options.map((_, index) => index);
    return item.options.length >= 3 ? seededShuffle(indexes, `${id}|${item.q}`) : indexes;
  }, [id, item.options, item.q]);
  const choose = (index: number) => {
    if (picked !== null) return;
    setPicked(index);
    onAnswer?.(index === item.answer);
  };
  return (
    <div className="ae-choice">
      {item.context && (
        <div className="ae-context">
          <Rich text={item.context} />
        </div>
      )}
      {item.audio && <PlayButton text={item.audio} voice={item.voice} ctx={ctx} />}
      <p className="ae-question">
        <Rich text={item.q} />
      </p>
      <div className="ae-options" role="group" aria-label={item.q}>
        {order.map((index, position) => {
          const option = item.options[index];
          const state = picked === null ? "" : index === item.answer ? "is-correct" : index === picked ? "is-wrong" : "is-muted";
          return (
            <button key={`${id}-${index}`} type="button" className={state} onClick={() => choose(index)} aria-pressed={picked === index} disabled={picked !== null && index !== picked && index !== item.answer}>
              <i aria-hidden="true">{String.fromCharCode(65 + position)}</i>
              <span>
                <Rich text={option} />
              </span>
            </button>
          );
        })}
      </div>
      {picked !== null && <Feedback verdict={picked === item.answer ? "correct" : "wrong"} why={item.why} answer={item.options[item.answer]} t={ctx.t} />}
      {picked !== null && picked !== item.answer && (
        <button type="button" className="ae-link" onClick={() => setPicked(null)}>
          {ctx.t.tryAgain}
        </button>
      )}
    </div>
  );
}

function ChoiceExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "choice" | "context" | "listen" }>; ctx: EngineContext }) {
  return (
    <Shell exercise={exercise}>
      <ol className="ae-items">
        {exercise.items.map((item, index) => (
          <li key={index}>
            <ChoiceQuestion item={item} ctx={ctx} id={`${exercise.id}-${index}`} />
          </li>
        ))}
      </ol>
    </Shell>
  );
}

// ---------------------------------------------------------------------------

export function GapLine({ item, values, onChange, verdicts, ctx }: { item: GapItem; values: string[]; onChange: (index: number, value: string) => void; verdicts: (Verdict | null)[]; ctx: EngineContext }) {
  const pieces = item.q.split(/_{3,}/);
  return (
    <p className="ae-gapline">
      {pieces.map((piece, index) => (
        <span key={index}>
          <Rich text={piece} />
          {index < pieces.length - 1 && (
            <input
              aria-label={`${ctx.t.answer} ${index + 1}`}
              className={verdicts[index] ?? ""}
              value={values[index] ?? ""}
              onChange={(event) => onChange(index, event.target.value)}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              size={Math.max(4, Math.min(18, (item.answers[index]?.[0]?.length ?? 6) + 2))}
            />
          )}
        </span>
      ))}
    </p>
  );
}

function GapExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "gap" }>; ctx: EngineContext }) {
  const [values, setValues] = useState<string[][]>(() => exercise.items.map((item) => item.answers.map(() => "")));
  const [checked, setChecked] = useState(false);
  const verdicts = exercise.items.map((item, itemIndex) => item.answers.map((accepted, gapIndex) => (checked ? checkAnswer(values[itemIndex][gapIndex] ?? "", accepted) : null)));
  return (
    <Shell
      exercise={exercise}
      footer={
        <>
          <button type="button" className="ae-primary" onClick={() => setChecked(true)}>
            {ctx.t.check}
          </button>
          {checked && (
            <button type="button" className="ae-link" onClick={() => setChecked(false)}>
              {ctx.t.tryAgain}
            </button>
          )}
        </>
      }
    >
      {exercise.bank && (
        <div className="ae-bank" aria-label="Banco de palabras">
          {exercise.bank.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
      )}
      <ol className="ae-items">
        {exercise.items.map((item, itemIndex) => {
          const itemVerdicts = verdicts[itemIndex];
          const overall: Verdict | null = !checked ? null : itemVerdicts.every((verdict) => verdict === "correct") ? "correct" : itemVerdicts.some((verdict) => verdict === "wrong") ? "wrong" : "accent";
          return (
            <li key={itemIndex}>
              <GapLine
                item={item}
                values={values[itemIndex]}
                verdicts={itemVerdicts}
                ctx={ctx}
                onChange={(gapIndex, value) => {
                  setChecked(false);
                  setValues((current) => current.map((row, rowIndex) => (rowIndex === itemIndex ? row.map((cell, cellIndex) => (cellIndex === gapIndex ? value : cell)) : row)));
                }}
              />
              {item.hint && !checked && <small className="ae-hint">{item.hint}</small>}
              {ctx.showEnglish && item.en && <small className="ae-en">{item.en}</small>}
              <Feedback verdict={overall} why={item.why} answer={item.answers.map((list) => list[0]).join(" · ")} t={ctx.t} />
            </li>
          );
        })}
      </ol>
    </Shell>
  );
}

// ---------------------------------------------------------------------------

export function OrderBuilder({ item, seed, ctx, onResult }: { item: OrderItem; seed: string; ctx: EngineContext; onResult?: (correct: boolean) => void }) {
  const shuffled = useMemo(() => seededShuffle(item.words.map((word, index) => ({ word, index })), seed), [item.words, seed]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const sentence = placed.map((position) => shuffled[position].word).join(" ");
  const check = () => {
    const accepted = [item.words.join(" "), ...(item.alt ?? [])];
    const result = accepted.some((candidate) => normalizeAnswer(candidate) === normalizeAnswer(sentence)) ? "correct" : "wrong";
    setVerdict(result);
    onResult?.(result === "correct");
  };
  return (
    <div className="ae-order">
      <div className="ae-order-line" aria-live="polite">
        {placed.length === 0 && <span className="ae-placeholder">…</span>}
        {placed.map((position, index) => (
          <button key={`${position}-${index}`} type="button" onClick={() => { setVerdict(null); setPlaced((current) => current.filter((_, i) => i !== index)); }}>
            {shuffled[position].word}
          </button>
        ))}
      </div>
      <div className="ae-order-bank">
        {shuffled.map((token, position) => (
          <button key={position} type="button" disabled={placed.includes(position)} onClick={() => { setVerdict(null); setPlaced((current) => [...current, position]); }}>
            {token.word}
          </button>
        ))}
      </div>
      <div className="ae-row">
        <button type="button" className="ae-primary" onClick={check} disabled={placed.length !== shuffled.length}>
          {ctx.t.check}
        </button>
        <button type="button" className="ae-link" onClick={() => { setPlaced([]); setVerdict(null); }}>
          {ctx.t.reset}
        </button>
      </div>
      {ctx.showEnglish && item.en && <small className="ae-en">{item.en}</small>}
      <Feedback verdict={verdict} why={item.why} answer={item.words.join(" ")} t={ctx.t} />
    </div>
  );
}

function OrderExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "order" }>; ctx: EngineContext }) {
  return (
    <Shell exercise={exercise}>
      <ol className="ae-items">
        {exercise.items.map((item, index) => (
          <li key={index}>
            <OrderBuilder item={item} seed={`${exercise.id}-${index}`} ctx={ctx} />
          </li>
        ))}
      </ol>
    </Shell>
  );
}

// ---------------------------------------------------------------------------

function MatchExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "match" }>; ctx: EngineContext }) {
  const rights = useMemo(() => seededShuffle(exercise.pairs.map((pair, index) => ({ ...pair, index })), exercise.id), [exercise.pairs, exercise.id]);
  const [active, setActive] = useState<number | null>(null);
  const [links, setLinks] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const pick = (rightIndex: number) => {
    if (active === null) return;
    setChecked(false);
    setLinks((current) => {
      const next = Object.fromEntries(Object.entries(current).filter(([, value]) => value !== rightIndex)) as Record<number, number>;
      next[active] = rightIndex;
      return next;
    });
    setActive(null);
  };
  const allLinked = Object.keys(links).length === exercise.pairs.length;
  const correctCount = Object.entries(links).filter(([left, right]) => Number(left) === right).length;
  return (
    <Shell
      exercise={exercise}
      footer={
        <>
          <button type="button" className="ae-primary" disabled={!allLinked} onClick={() => setChecked(true)}>
            {ctx.t.check}
          </button>
          <button type="button" className="ae-link" onClick={() => { setLinks({}); setChecked(false); }}>
            {ctx.t.reset}
          </button>
          {checked && <span className="ae-tally">{correctCount}/{exercise.pairs.length}</span>}
        </>
      }
    >
      <p className="ae-hint">{ctx.t.matchHint}</p>
      <div className="ae-match">
        <div>
          {exercise.pairs.map((pair, index) => {
            const linked = links[index];
            const state = checked && linked !== undefined ? (linked === index ? "is-correct" : "is-wrong") : "";
            return (
              <button key={index} type="button" className={`${active === index ? "active" : ""} ${linked !== undefined ? "linked" : ""} ${state}`} onClick={() => setActive(index)}>
                <Rich text={pair.left} />
                {linked !== undefined && <small>→ {exercise.pairs[linked].right}</small>}
              </button>
            );
          })}
        </div>
        <div>
          {rights.map((pair) => {
            const used = Object.values(links).includes(pair.index);
            return (
              <button key={pair.index} type="button" className={used ? "linked" : ""} onClick={() => pick(pair.index)} disabled={active === null}>
                <Rich text={pair.right} />
              </button>
            );
          })}
        </div>
      </div>
      {checked && correctCount < exercise.pairs.length && (
        <div className="ae-feedback wrong">
          <b>{ctx.t.answer}</b>
          <ul>
            {exercise.pairs.map((pair: MatchPair, index) => (
              <li key={index}>
                {pair.left} → {pair.right}
              </li>
            ))}
          </ul>
          {exercise.why && <small><Rich text={exercise.why} /></small>}
        </div>
      )}
      {checked && correctCount === exercise.pairs.length && <Feedback verdict="correct" why={exercise.why} t={ctx.t} />}
    </Shell>
  );
}

// ---------------------------------------------------------------------------

function ClassifyExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "classify" }>; ctx: EngineContext }) {
  const order = useMemo(() => seededShuffle(exercise.items.map((item, index) => ({ ...item, index })), exercise.id), [exercise.items, exercise.id]);
  const [selected, setSelected] = useState<number | null>(null);
  const [placed, setPlaced] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const wrong = order.filter((item) => placed[item.index] !== undefined && placed[item.index] !== item.cat);
  return (
    <Shell
      exercise={exercise}
      footer={
        <>
          <button type="button" className="ae-primary" disabled={Object.keys(placed).length !== exercise.items.length} onClick={() => setChecked(true)}>
            {ctx.t.check}
          </button>
          <button type="button" className="ae-link" onClick={() => { setPlaced({}); setChecked(false); }}>
            {ctx.t.reset}
          </button>
        </>
      }
    >
      <p className="ae-hint">{ctx.t.classifyHint}</p>
      <div className="ae-chips">
        {order
          .filter((item) => placed[item.index] === undefined)
          .map((item: ClassifyItem & { index: number }) => (
            <span key={item.index} className="ae-chip">
              {item.audio && <PlayButton text={item.audio} voice={item.voice} ctx={ctx} compact label={item.text} />}
              <button type="button" className={selected === item.index ? "active" : ""} onClick={() => setSelected(item.index)}>
                <Rich text={item.text} />
              </button>
            </span>
          ))}
      </div>
      <div className="ae-buckets">
        {exercise.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="ae-bucket">
            <button
              type="button"
              className="ae-bucket-head"
              disabled={selected === null}
              onClick={() => {
                if (selected === null) return;
                setChecked(false);
                setPlaced((current) => ({ ...current, [selected]: categoryIndex }));
                setSelected(null);
              }}
            >
              <Rich text={category} />
            </button>
            <div>
              {order
                .filter((item) => placed[item.index] === categoryIndex)
                .map((item) => (
                  <button key={item.index} type="button" className={checked ? (item.cat === categoryIndex ? "is-correct" : "is-wrong") : ""} onClick={() => { setChecked(false); setPlaced((current) => Object.fromEntries(Object.entries(current).filter(([key]) => Number(key) !== item.index))); }}>
                    <Rich text={item.text} />
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      {checked && (
        wrong.length === 0 ? (
          <Feedback verdict="correct" t={ctx.t} />
        ) : (
          <div className="ae-feedback wrong">
            <b>{ctx.t.wrong}</b>
            <ul>
              {wrong.map((item) => (
                <li key={item.index}>
                  <Rich text={item.text} /> → {exercise.categories[item.cat]}
                  {item.why && <small> · <Rich text={item.why} /></small>}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </Shell>
  );
}

// ---------------------------------------------------------------------------

export function TextAnswer({ accepted, why, ctx, initial = "", label, multiline = false, onResult }: { accepted: string[]; why?: string; ctx: EngineContext; initial?: string; label: string; multiline?: boolean; onResult?: (correct: boolean) => void }) {
  const [value, setValue] = useState(initial);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [reveal, setReveal] = useState(false);
  const check = () => {
    const result = checkAnswer(value, accepted);
    setVerdict(result);
    onResult?.(result !== "wrong");
  };
  return (
    <div className="ae-textanswer">
      {multiline ? (
        <textarea aria-label={label} value={value} rows={2} onChange={(event) => { setValue(event.target.value); setVerdict(null); }} spellCheck={false} />
      ) : (
        <input aria-label={label} value={value} onChange={(event) => { setValue(event.target.value); setVerdict(null); }} onKeyDown={(event) => { if (event.key === "Enter") check(); }} autoCapitalize="off" autoCorrect="off" spellCheck={false} />
      )}
      <div className="ae-row">
        <button type="button" className="ae-primary" onClick={check} disabled={!value.trim()}>
          {ctx.t.check}
        </button>
        {verdict === "wrong" && !reveal && (
          <button type="button" className="ae-link" onClick={() => setReveal(true)}>
            {ctx.t.showAnswer}
          </button>
        )}
      </div>
      <Feedback verdict={verdict} why={verdict ? why : undefined} answer={verdict === "accent" || reveal ? accepted[0] : undefined} t={ctx.t} />
    </div>
  );
}

function TransformExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "transform" }>; ctx: EngineContext }) {
  return (
    <Shell exercise={exercise}>
      <ol className="ae-items">
        {exercise.items.map((item: TransformItem, index) => (
          <li key={index}>
            <p className="ae-source">
              <Rich text={item.source} />
            </p>
            {item.instruction && <small className="ae-hint">{item.instruction}</small>}
            <TextAnswer accepted={item.answers} why={item.why} ctx={ctx} label={item.source} />
          </li>
        ))}
      </ol>
    </Shell>
  );
}

function ErrorExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "error" }>; ctx: EngineContext }) {
  return (
    <Shell exercise={exercise}>
      <ol className="ae-items">
        {exercise.items.map((item: ErrorItem, index) => (
          <li key={index}>
            <p className="ae-source is-error">
              <Rich text={item.sentence} />
            </p>
            <TextAnswer accepted={item.answers} why={item.why} ctx={ctx} initial={item.sentence} label={item.sentence} multiline />
          </li>
        ))}
      </ol>
    </Shell>
  );
}

// ---------------------------------------------------------------------------

export function OpenTask({ item, ctx }: { item: OpenItem; ctx: EngineContext }) {
  const [value, setValue] = useState("");
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="ae-open">
      <p className="ae-question">
        <Rich text={item.prompt} />
      </p>
      <textarea aria-label={item.prompt} value={value} rows={3} onChange={(event) => setValue(event.target.value)} />
      <div className="ae-row">
        <small>
          {countWords(value)} {ctx.t.words}
        </small>
        {item.model && (
          <button type="button" className="ae-link" onClick={() => setShowModel((current) => !current)}>
            {showModel ? ctx.t.hideModel : ctx.t.showModel}
          </button>
        )}
      </div>
      {showModel && item.model && (
        <blockquote className="ae-model">
          <Rich text={item.model} />
        </blockquote>
      )}
      {item.checklist && (
        <ul className="ae-checklist">
          {item.checklist.map((line) => (
            <li key={line}>
              <label>
                <input type="checkbox" /> <Rich text={line} />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function OpenExercise({ exercise, ctx }: { exercise: Extract<Exercise, { type: "open" }>; ctx: EngineContext }) {
  return (
    <Shell exercise={exercise}>
      {exercise.items.map((item, index) => (
        <OpenTask key={index} item={item} ctx={ctx} />
      ))}
    </Shell>
  );
}

export function ExerciseView({ exercise, ctx }: { exercise: Exercise; ctx: EngineContext }) {
  switch (exercise.type) {
    case "choice":
    case "context":
    case "listen":
      return <ChoiceExercise exercise={exercise} ctx={ctx} />;
    case "gap":
      return <GapExercise exercise={exercise} ctx={ctx} />;
    case "order":
      return <OrderExercise exercise={exercise} ctx={ctx} />;
    case "match":
      return <MatchExercise exercise={exercise} ctx={ctx} />;
    case "classify":
      return <ClassifyExercise exercise={exercise} ctx={ctx} />;
    case "transform":
      return <TransformExercise exercise={exercise} ctx={ctx} />;
    case "error":
      return <ErrorExercise exercise={exercise} ctx={ctx} />;
    case "open":
      return <OpenExercise exercise={exercise} ctx={ctx} />;
  }
}
