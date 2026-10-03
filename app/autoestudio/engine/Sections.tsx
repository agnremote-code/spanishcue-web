"use client";

import { useEffect, useRef, useState } from "react";
import type { Example, Listening, Module, Pronunciation, QuizItem, Reading, Speaking, Table, Theory, UseInClass, Vocabulary, Writing } from "../curriculum/types";
import { ChoiceQuestion, ExerciseView, GapLine, OpenTask, OrderBuilder, PlayButton, TextAnswer, type EngineContext } from "./Exercises";
import { Recorder, SpeakTimer } from "./Recorder";
import { Rich } from "./Rich";
import { audioKey } from "../curriculum/audio-key";
import { playClips, stopAudio } from "./speech";
import { checkAnswer, countWords } from "./text";


function ExampleList({ examples, ctx, speak = true }: { examples: Example[]; ctx: EngineContext; speak?: boolean }) {
  return (
    <ul className="ae-examples">
      {examples.map((example, index) => (
        <li key={index}>
          {speak && <PlayButton text={example.es.replace(/[*_`]/g, "")} ctx={ctx} compact label={example.es} />}
          <span>
            <b>
              <Rich text={example.es} />
            </b>
            {example.en && ctx.showEnglish && <em className="ae-en">{example.en}</em>}
            {example.note && <small>{<Rich text={example.note} />}</small>}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TableView({ table }: { table: Table }) {
  return (
    <div className="ae-table-wrap">
      <table className="ae-table">
        {table.caption && <caption>{table.caption}</caption>}
        <thead>
          <tr>
            {table.head.map((cell) => (
              <th key={cell} scope="col">
                <Rich text={cell} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">
                    <Rich text={cell} />
                  </th>
                ) : (
                  <td key={cellIndex}>
                    <Rich text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Support({ lines, ctx }: { lines?: string[]; ctx: EngineContext }) {
  if (!lines?.length || !ctx.showEnglish) return null;
  return (
    <aside className="ae-support" lang="en">
      <span>EN</span>
      {lines.map((line, index) => (
        <p key={index}>
          <Rich text={line} />
        </p>
      ))}
    </aside>
  );
}

// 01 ---------------------------------------------------------------------------
export function GoalSection({ module, objectives, ctx, levelColor }: { module: Module; objectives: { id: string; topic: string; isNew: boolean }[]; ctx: EngineContext; levelColor: string }) {
  const fresh = objectives.filter((objective) => objective.isNew);
  const review = objectives.filter((objective) => !objective.isNew);
  return (
    <div className="ae-goal">
      <div className="ae-cando" style={{ borderColor: levelColor }}>
        <span>{ctx.t.week} {module.week} · {module.kind === "checkpoint" ? ctx.t.checkpoint : module.stop.place}</span>
        <p>
          <Rich text={module.goal.canDo} />
        </p>
        {module.goal.canDoEn && ctx.showEnglish && <em lang="en">{module.goal.canDoEn}</em>}
      </div>
      <ol className="ae-steps">
        {module.goal.steps.map((step, index) => (
          <li key={index}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            <Rich text={step} />
          </li>
        ))}
      </ol>
      <div className="ae-objectives">
        {fresh.length > 0 && (
          <div>
            <h4>{ctx.t.newThisWeek}</h4>
            <ul>
              {fresh.map((objective) => (
                <li key={objective.id} className="is-new">{objective.topic}</li>
              ))}
            </ul>
          </div>
        )}
        {review.length > 0 && (
          <div>
            <h4>{ctx.t.reviewThisWeek}</h4>
            <ul>
              {review.map((objective) => (
                <li key={objective.id}>↻ {objective.topic}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// 02 ---------------------------------------------------------------------------
export function TheorySection({ theory, ctx }: { theory: Theory; ctx: EngineContext }) {
  return (
    <div className="ae-theory">
      {theory.intro && (
        <p className="ae-lead">
          <Rich text={theory.intro} />
        </p>
      )}
      {theory.parts.map((part, index) => (
        <article key={index} className="ae-theory-part">
          <h4>
            <i>{String.fromCharCode(65 + index)}</i>
            <Rich text={part.heading} />
          </h4>
          {part.body.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>
              <Rich text={paragraph} />
            </p>
          ))}
          <Support lines={part.support} ctx={ctx} />
          {part.table && <TableView table={part.table} />}
          {part.examples && part.examples.length > 0 && <ExampleList examples={part.examples} ctx={ctx} />}
          {part.mistakes && part.mistakes.length > 0 && (
            <div className="ae-mistakes">
              <h5>{ctx.t.commonMistakes}</h5>
              {part.mistakes.map((mistake, mistakeIndex) => (
                <div key={mistakeIndex}>
                  <s>
                    <Rich text={mistake.wrong} />
                  </s>
                  <b>
                    <Rich text={mistake.right} />
                  </b>
                  <small>
                    <Rich text={mistake.why} />
                  </small>
                </div>
              ))}
            </div>
          )}
          {part.tip && (
            <p className="ae-tip">
              <b>{ctx.t.tip}</b> <Rich text={part.tip} />
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

// 03 / 08 ----------------------------------------------------------------------
export function PracticeSection({ intro, exercises, ctx }: { intro?: string; exercises: Module["practice"]["exercises"]; ctx: EngineContext }) {
  return (
    <div className="ae-practice">
      {intro && (
        <p className="ae-lead">
          <Rich text={intro} />
        </p>
      )}
      {exercises.map((exercise) => (
        <ExerciseView key={exercise.id} exercise={exercise} ctx={ctx} />
      ))}
    </div>
  );
}

// 04 ---------------------------------------------------------------------------
export function VocabularySection({ vocabulary, ctx }: { vocabulary: Vocabulary; ctx: EngineContext }) {
  return (
    <div className="ae-vocab">
      {vocabulary.intro && (
        <p className="ae-lead">
          <Rich text={vocabulary.intro} />
        </p>
      )}
      <div className="ae-vocab-groups">
        {vocabulary.groups.map((group) => (
          <article key={group.title}>
            <h4>{group.title}</h4>
            <ExampleList examples={group.items} ctx={ctx} />
          </article>
        ))}
      </div>
      {vocabulary.exercises.map((exercise) => (
        <ExerciseView key={exercise.id} exercise={exercise} ctx={ctx} />
      ))}
    </div>
  );
}

// 05 ---------------------------------------------------------------------------
export function PronunciationSection({ pronunciation, ctx }: { pronunciation: Pronunciation; ctx: EngineContext }) {
  return (
    <div className="ae-pron">
      <h4 className="ae-focus">{pronunciation.focus}</h4>
      {pronunciation.explanation.map((paragraph, index) => (
        <p key={index}>
          <Rich text={paragraph} />
        </p>
      ))}
      <Support lines={pronunciation.support} ctx={ctx} />
      {pronunciation.table && <TableView table={pronunciation.table} />}
      {pronunciation.examples && <ExampleList examples={pronunciation.examples} ctx={ctx} />}
      {pronunciation.spelling && (
        <p className="ae-tip">
          <b>Ortografía</b> <Rich text={pronunciation.spelling} />
        </p>
      )}
      <h4 className="ae-subhead">1 · {ctx.t.perceive}</h4>
      <ExerciseView exercise={pronunciation.perceive} ctx={ctx} />
      <h4 className="ae-subhead">2 · {ctx.t.produce}</h4>
      <ol className="ae-produce">
        {pronunciation.produce.map((line, index) => (
          <li key={index}>
            <div>
              <PlayButton text={line.text.replace(/[*_`]/g, "")} voice={line.voice} ctx={ctx} />
              <b>
                <Rich text={line.text} />
              </b>
            </div>
            {line.tip && (
              <small>
                <Rich text={line.tip} />
              </small>
            )}
            <Recorder t={ctx.t} />
          </li>
        ))}
      </ol>
    </div>
  );
}

// 06 ---------------------------------------------------------------------------
export function ListeningSection({ listening, ctx }: { listening: Listening; ctx: EngineContext }) {
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [unlocked, setUnlocked] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  useEffect(() => () => stopAudio(), []);
  const voices = Object.fromEntries(listening.speakers.map((speaker) => [speaker.id, speaker.voice]));
  const synthetic = listening.script.some(line => !ctx.audio?.[audioKey(line.text, voices[line.speaker])]);
  const names = Object.fromEntries(listening.speakers.map((speaker) => [speaker.id, speaker.name]));
  const play = async (rate: number) => {
    if (playing) {
      stopAudio();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    setPlays((count) => count + 1);
    await playClips(listening.script.map((line) => ({ text: line.text, voice: voices[line.speaker] })), { rate, audio: ctx.audio });
    setPlaying(false);
  };
  const transcriptOpen = unlocked > 1 && plays > 0;
  const stageLabel = (stage: Listening["stages"][number]["stage"]) => (stage === "gist" ? "Idea general" : stage === "detail" ? "Detalles" : "Fíjate");
  return (
    <div className="ae-listening">
      <div className="ae-scene">
        <h4>{listening.title}</h4>
        <p>
          <Rich text={listening.context} />
        </p>
        <ul className="ae-speakers">
          {listening.speakers.map((speaker) => (
            <li key={speaker.id}>
              {speaker.name}
              {speaker.role && <small> · {speaker.role}</small>}
            </li>
          ))}
        </ul>
      </div>
      {synthetic && <p className="ae-hint">Audio con voz sintética de tu dispositivo. Las voces pueden coincidir y no garantizan un acento regional. Si no escuchas, comprueba que tu dispositivo tenga una voz en español.</p>}
      <div className="ae-player">
        <button type="button" className={`ae-bigplay ${playing ? "playing" : ""}`} onClick={() => play(1)}>
          <span aria-hidden="true">{playing ? "◼" : "▶"}</span>
          {playing ? ctx.t.stop : ctx.t.play}
        </button>
        <button type="button" className="ae-link" onClick={() => play(0.75)} disabled={playing}>
          {ctx.t.listenSlow}
        </button>
        <small>
          {plays} {ctx.t.plays}
        </small>
      </div>
      {listening.stages.map((stage, index) =>
        index < unlocked ? (
          <section key={index} className="ae-lstage">
            <h4>
              <i>{index + 1}</i> {ctx.t.stage} {index + 1} · {stageLabel(stage.stage)}
            </h4>
            <p className="ae-lead">
              <Rich text={stage.prompt} />
            </p>
            <ExerciseView exercise={stage.exercise} ctx={ctx} />
            {index === unlocked - 1 && index < listening.stages.length - 1 && (
              <button type="button" className="ae-secondary" onClick={() => setUnlocked((value) => value + 1)}>
                {ctx.t.next}: {ctx.t.stage} {index + 2} →
              </button>
            )}
          </section>
        ) : null,
      )}
      <div className="ae-transcript">
        {transcriptOpen ? (
          <>
            <button type="button" className="ae-link" onClick={() => setShowTranscript((value) => !value)} aria-expanded={showTranscript}>
              {ctx.t.showTranscript}
            </button>
            {showTranscript && (
              <dl>
                {listening.script.map((line, index) => (
                  <div key={index}>
                    <dt>
                      {names[line.speaker]}
                    </dt>
                    <dd>{line.text}</dd>
                  </div>
                ))}
              </dl>
            )}
          </>
        ) : (
          <p className="ae-hint">🔒 {ctx.t.transcriptLocked}</p>
        )}
      </div>
    </div>
  );
}

// 07 ---------------------------------------------------------------------------
export function ReadingSection({ reading, ctx }: { reading: Reading; ctx: EngineContext }) {
  const [revealed, setRevealed] = useState<number[]>([]);
  return (
    <div className="ae-reading">
      <article className="ae-text">
        <header>
          <span>{reading.genre}</span>
          <h4>{reading.title}</h4>
          {reading.frame && <small>{reading.frame}</small>}
        </header>
        {reading.text.map((paragraph, index) => (
          <p key={index}>
            <Rich text={paragraph} />
          </p>
        ))}
      </article>
      {reading.glossary && reading.glossary.length > 0 && (
        <details className="ae-glossary">
          <summary>{ctx.t.glossary}</summary>
          <ExampleList examples={reading.glossary} ctx={{ ...ctx, showEnglish: true }} speak={false} />
        </details>
      )}
      {reading.tasks.map((exercise) => (
        <ExerciseView key={exercise.id} exercise={exercise} ctx={ctx} />
      ))}
      <section className="ae-noticing">
        <h4>{ctx.t.noticing}</h4>
        <p>
          <Rich text={reading.noticing.prompt} />
        </p>
        <ul>
          {reading.noticing.items.map((item, index) => (
            <li key={index}>
              <button type="button" onClick={() => setRevealed((current) => (current.includes(index) ? current : [...current, index]))} aria-expanded={revealed.includes(index)}>
                «<Rich text={item.quote} />»
              </button>
              {revealed.includes(index) && (
                <small>
                  <Rich text={item.note} />
                </small>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// 09 ---------------------------------------------------------------------------
export function WritingSection({ writing, ctx, draft, onDraft }: { writing: Writing; ctx: EngineContext; draft: string; onDraft: (text: string) => void }) {
  const [text, setText] = useState(draft);
  const [showModel, setShowModel] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setText(draft), [draft]);
  const words = countWords(text);
  const [min, max] = writing.words;
  return (
    <div className="ae-writing">
      <div className="ae-brief">
        <p className="ae-lead">
          <Rich text={writing.task} />
        </p>
        {writing.context && (
          <p className="ae-context">
            <Rich text={writing.context} />
          </p>
        )}
        <h5>{ctx.t.steps}</h5>
        <ol>
          {writing.steps.map((step, index) => (
            <li key={index}>
              <Rich text={step} />
            </li>
          ))}
        </ol>
        <div className="ae-use">
          <b>{ctx.t.useLanguage}:</b>
          {writing.useLanguage.map((chunk) => (
            <span key={chunk}>
              <Rich text={chunk} />
            </span>
          ))}
        </div>
      </div>
      <label className="ae-editor">
        <span>
          {ctx.t.yourText} · <b className={words >= min && words <= max ? "ok" : ""}>{words}</b> / {min}–{max} {ctx.t.words}
        </span>
        <textarea
          value={text}
          rows={8}
          onChange={(event) => {
            const value = event.target.value;
            setText(value);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => onDraft(value), 600);
          }}
        />
        <small>{ctx.t.draftSaved}</small>
      </label>
      <h5>{ctx.t.checklist}</h5>
      <ul className="ae-checklist">
        {writing.checklist.map((line) => (
          <li key={line}>
            <label>
              <input type="checkbox" /> <Rich text={line} />
            </label>
          </li>
        ))}
      </ul>
      <button type="button" className="ae-secondary" onClick={() => setShowModel((value) => !value)}>
        {showModel ? ctx.t.hideModel : ctx.t.showModel}
      </button>
      {showModel && (
        <blockquote className="ae-model">
          {writing.model.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </blockquote>
      )}
    </div>
  );
}

// 10 ---------------------------------------------------------------------------
export function SpeakingSection({ speaking, ctx }: { speaking: Speaking; ctx: EngineContext }) {
  const [models, setModels] = useState<number[]>([]);
  return (
    <div className="ae-speaking">
      {speaking.intro && (
        <p className="ae-lead">
          <Rich text={speaking.intro} />
        </p>
      )}
      {speaking.tasks.map((task, index) => (
        <article key={index} className="ae-speak-task">
          <h4>
            <i>{index + 1}</i> {task.title}
          </h4>
          <p>
            <Rich text={task.prompt} />
          </p>
          {task.prep && (
            <ul className="ae-prep">
              {task.prep.map((line) => (
                <li key={line}>
                  <Rich text={line} />
                </li>
              ))}
            </ul>
          )}
          <div className="ae-speak-tools">
            <SpeakTimer seconds={task.seconds} t={ctx.t} />
            <Recorder t={ctx.t} />
          </div>
          {task.model && (
            <>
              <button type="button" className="ae-link" onClick={() => setModels((current) => (current.includes(index) ? current.filter((value) => value !== index) : [...current, index]))}>
                {models.includes(index) ? ctx.t.hideModel : ctx.t.showModel}
              </button>
              {models.includes(index) && (
                <blockquote className="ae-model">
                  <PlayButton text={task.model.replace(/[*_`]/g, "")} ctx={ctx} />
                  <Rich text={task.model} />
                </blockquote>
              )}
            </>
          )}
          {task.selfCheck && (
            <ul className="ae-checklist">
              {task.selfCheck.map((line) => (
                <li key={line}>
                  <label>
                    <input type="checkbox" /> <Rich text={line} />
                  </label>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

// 11 ---------------------------------------------------------------------------
export function UseInClassSection({ use, ctx, title }: { use: UseInClass; ctx: EngineContext; title: string }) {
  const [copied, setCopied] = useState(false);
  const copyCards = async () => {
    const text = [title, ...use.cards.map((card) => `• ${card.move}: ${card.task}${card.phrases?.length ? ` (${card.phrases.join(" / ")})` : ""}`)].join("\n").replace(/[*_`]/g, "");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="ae-class">
      <p className="ae-lead">
        <Rich text={use.intro} />
      </p>
      <div className="ae-class-cards">
        {use.cards.map((card, index) => (
          <article key={index}>
            <span>{card.move}</span>
            <p>
              <Rich text={card.task} />
            </p>
            {card.phrases && (
              <ul>
                {card.phrases.map((phrase) => (
                  <li key={phrase}>
                    <Rich text={phrase} />
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      {use.bring && (
        <p className="ae-tip">
          <b>{ctx.t.bring}</b> <Rich text={use.bring} />
        </p>
      )}
      <button type="button" className="ae-secondary" onClick={copyCards}>
        {copied ? `✓ ${ctx.t.copied}` : ctx.t.copyCard}
      </button>
    </div>
  );
}

// 12 ---------------------------------------------------------------------------
function QuizGap({ item, ctx, onResult }: { item: Extract<QuizItem, { type: "gap" }>; ctx: EngineContext; onResult: (correct: boolean) => void }) {
  const [values, setValues] = useState<string[]>(item.answers.map(() => ""));
  const [verdicts, setVerdicts] = useState<(ReturnType<typeof checkAnswer> | null)[]>(item.answers.map(() => null));
  const checked = verdicts.some(Boolean);
  return (
    <div>
      <GapLine item={item} values={values} verdicts={verdicts} ctx={ctx} onChange={(index, value) => setValues((current) => current.map((cell, cellIndex) => (cellIndex === index ? value : cell)))} />
      <button
        type="button"
        className="ae-primary"
        disabled={checked || values.some((value) => !value.trim())}
        onClick={() => {
          const next = item.answers.map((accepted, index) => checkAnswer(values[index], accepted));
          setVerdicts(next);
          onResult(next.every((verdict) => verdict !== "wrong"));
        }}
      >
        {ctx.t.check}
      </button>
      {checked && (
        <div className={`ae-feedback ${verdicts.every((verdict) => verdict === "correct") ? "correct" : verdicts.some((verdict) => verdict === "wrong") ? "wrong" : "accent"}`}>
          <span>
            {ctx.t.answer}: {item.answers.map((list) => list[0]).join(" · ")}
          </span>
          {item.why && <small><Rich text={item.why} /></small>}
        </div>
      )}
    </div>
  );
}

function QuizOpen({ item, ctx, onResult }: { item: Extract<QuizItem, { type: "open" }>; ctx: EngineContext; onResult: (correct: boolean) => void }) {
  const [marked, setMarked] = useState<boolean | null>(null);
  return (
    <div>
      <OpenTask item={item} ctx={ctx} />
      <div className="ae-row ae-selfmark">
        <small>{ctx.t.selfAssessedHint}</small>
        <button type="button" className={marked === true ? "active" : ""} disabled={marked !== null} onClick={() => { setMarked(true); onResult(true); }}>
          ✓ {ctx.t.gotIt}
        </button>
        <button type="button" className={marked === false ? "active" : ""} disabled={marked !== null} onClick={() => { setMarked(false); onResult(false); }}>
          ↻ {ctx.t.notYet}
        </button>
      </div>
    </div>
  );
}

export function QuizSection({ items, ctx, onFinish, previous }: { items: QuizItem[]; ctx: EngineContext; onFinish: (score: number, total: number) => void; previous?: { score: number; total: number; best: number } }) {
  const [round, setRound] = useState(0);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const reported = useRef(false);
  const answered = Object.keys(results).length;
  const score = Object.values(results).filter(Boolean).length;
  const record = (index: number) => (correct: boolean) => setResults((current) => (index in current ? current : { ...current, [index]: correct }));
  useEffect(() => {
    if (answered === items.length && !reported.current) {
      reported.current = true;
      onFinish(score, items.length);
    }
  }, [answered, items.length, onFinish, score]);
  const labels: Record<QuizItem["type"], string> = { choice: "Elige", listen: "Escucha", gap: "Completa", order: "Ordena", transform: "Transforma", error: "Corrige", open: "Produce" };
  return (
    <div className="ae-quiz" key={round}>
      {previous && (
        <p className="ae-hint">
          {ctx.t.quizScore}: {previous.score}/{previous.total} · máx. {previous.best}/{previous.total}
        </p>
      )}
      <ol className="ae-quiz-items">
        {items.map((item, index) => (
          <li key={`${round}-${index}`} className={index in results ? (results[index] ? "is-correct" : "is-wrong") : ""}>
            <span className="ae-mechanic">
              {String(index + 1).padStart(2, "0")} · {labels[item.type]}
            </span>
            {(item.type === "choice" || item.type === "listen") && <ChoiceQuestion item={item} ctx={ctx} id={`quiz-${round}-${index}`} onAnswer={record(index)} />}
            {item.type === "gap" && <QuizGap item={item} ctx={ctx} onResult={record(index)} />}
            {item.type === "order" && <OrderBuilder item={item} seed={`quiz-${index}`} ctx={ctx} onResult={record(index)} />}
            {item.type === "transform" && (
              <>
                <p className="ae-source">
                  <Rich text={item.source} />
                </p>
                {item.instruction && <small className="ae-hint">{item.instruction}</small>}
                <TextAnswer accepted={item.answers} why={item.why} ctx={ctx} label={item.source} onResult={record(index)} />
              </>
            )}
            {item.type === "error" && (
              <>
                <p className="ae-source is-error">
                  <Rich text={item.sentence} />
                </p>
                <TextAnswer accepted={item.answers} why={item.why} ctx={ctx} initial={item.sentence} label={item.sentence} multiline onResult={record(index)} />
              </>
            )}
            {item.type === "open" && <QuizOpen item={item} ctx={ctx} onResult={record(index)} />}
          </li>
        ))}
      </ol>
      <div className="ae-quiz-score" aria-live="polite">
        <b>
          {ctx.t.quizScore}: {score}/{items.length}
        </b>
        <small>
          {answered}/{items.length} {ctx.t.answeredLabel}
        </small>
        {answered === items.length && (
          <button
            type="button"
            className="ae-link"
            onClick={() => {
              reported.current = false;
              setResults({});
              setRound((value) => value + 1);
            }}
          >
            {ctx.t.retakeQuiz}
          </button>
        )}
      </div>
    </div>
  );
}
