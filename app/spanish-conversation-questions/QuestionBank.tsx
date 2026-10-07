"use client";

import { useMemo, useState } from "react";
import type { ConversationLevelCode } from "../growth/conversation-levels";
import type { ConversationQuestion, QuestionTopic } from "../growth/conversation-questions";
import styles from "../growth/growth.module.css";

type Props = {
  questions: ConversationQuestion[];
  levels: { code: ConversationLevelCode; slug: string; name: string }[];
  topics: { slug: QuestionTopic; label: string }[];
};

/**
 * Server-rendered list with client-side filters. The complete bank is in the
 * initial HTML; filtering only hides items, so crawlers and users without
 * JavaScript see every question.
 */
export default function QuestionBank({ questions, levels, topics }: Props) {
  const [level, setLevel] = useState<ConversationLevelCode | "all">("all");
  const [topic, setTopic] = useState<QuestionTopic | "all">("all");
  const [copied, setCopied] = useState<string | null>(null);
  const topicLabel = useMemo(() => new Map(topics.map((item) => [item.slug, item.label])), [topics]);
  const visible = questions.filter((question) => (level === "all" || question.level === level) && (topic === "all" || question.topic === topic));

  async function copy(question: ConversationQuestion) {
    try {
      await navigator.clipboard?.writeText(question.es);
      setCopied(question.id);
      setTimeout(() => setCopied((current) => (current === question.id ? null : current)), 1600);
    } catch {
      /* Clipboard access can be denied; the text stays selectable on screen. */
    }
  }

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Filter questions">
        <div className={styles.filterGroup}>
          <span>Level</span>
          <button type="button" className={styles.chip} aria-pressed={level === "all"} onClick={() => setLevel("all")}>All</button>
          {levels.map((item) => (
            <button type="button" className={styles.chip} key={item.code} aria-pressed={level === item.code} onClick={() => setLevel(item.code)}>{item.code}</button>
          ))}
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="question-topic"><span>Topic</span></label>
          <select id="question-topic" className={styles.filterSelect} value={topic} onChange={(event) => setTopic(event.target.value as QuestionTopic | "all")}>
            <option value="all">All topics</option>
            {topics.map((item) => <option value={item.slug} key={item.slug}>{item.label}</option>)}
          </select>
        </div>
      </div>
      <p className={styles.count} aria-live="polite">Showing {visible.length} of {questions.length} questions.</p>
      {levels.map((item) => {
        const group = visible.filter((question) => question.level === item.code);
        if (!group.length) return null;
        return (
          <section key={item.code} id={item.slug} className={styles.section} aria-labelledby={`${item.slug}-title`}>
            <h2 id={`${item.slug}-title`}>{item.code} · {item.name}</h2>
            <ul className={styles.questionList}>
              {group.map((question) => (
                <li className={styles.question} key={question.id}>
                  <small>{item.code} · {topicLabel.get(question.topic)}</small>
                  <b lang="es">{question.es}</b>
                  <span>{question.en}</span>
                  <button type="button" className={styles.copyButton} onClick={() => copy(question)} aria-label={`Copy the Spanish question: ${question.es}`}>
                    {copied === question.id ? "Copied" : "Copy question"}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
