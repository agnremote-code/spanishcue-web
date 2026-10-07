import Link from "next/link";
import { CONVERSATION_HUB_PATH, CONVERSATION_QUESTIONS_PATH, conversationLevelByCode, conversationLevels, type ConversationLevelCode } from "./conversation-levels";
import styles from "./growth.module.css";

/**
 * Compact cross-links from lesson resource pages and guides into the
 * conversation cluster. Rendered as plain navigation so the link graph is
 * visible to users and crawlers alike.
 */
export default function LevelCrossLinks({ level, cluster }: { level?: string; cluster?: string }) {
  const code = (level || "").slice(0, 2).toUpperCase() as ConversationLevelCode;
  const match = conversationLevelByCode.get(code);
  const conversation = cluster === "conversation" || cluster === "Conversación";
  return (
    <nav className={styles.footnote} aria-label="Spanish conversation activities by level">
      <p style={{ margin: "0 0 6px", fontWeight: 800 }}>
        {match && conversation ? <Link className={styles.textLink} href={match.path}>More {match.code} Spanish conversation activities</Link> : <Link className={styles.textLink} href={CONVERSATION_HUB_PATH}>Spanish conversation activities by level</Link>}
      </p>
      <p style={{ margin: 0 }}>
        {conversationLevels.map((item, index) => (
          <span key={item.slug}>
            {index ? " · " : ""}
            <Link className={styles.textLink} href={item.path} aria-current={match?.slug === item.slug ? "page" : undefined}>{item.code}</Link>
          </span>
        ))}
        {" · "}
        <Link className={styles.textLink} href={CONVERSATION_QUESTIONS_PATH}>Question bank</Link>
      </p>
    </nav>
  );
}
