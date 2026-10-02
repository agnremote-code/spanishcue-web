'use client';

import { useCallback, useSyncExternalStore, type ReactNode } from 'react';
import { conversationLevelUrl, resolveConversationLevel } from './navigation';
import type { CEFRLevel } from './types';
import './families.css';

const levelEvent = 'spanishcue:conversation-level';
function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange);
  window.addEventListener(levelEvent, onChange);
  return () => {
    window.removeEventListener('popstate', onChange);
    window.removeEventListener(levelEvent, onChange);
  };
}
export function ConversationFamily({ id, title, levels, defaultLevel, children }: {
  id: string; title: string; levels: readonly CEFRLevel[]; defaultLevel: CEFRLevel;
  children: (level: CEFRLevel) => ReactNode;
}) {
  const snapshot = useCallback(() => resolveConversationLevel({availableLevels: levels, defaultLevel}, new URLSearchParams(window.location.search).get('level')), [levels, defaultLevel]);
  const level = useSyncExternalStore(subscribe, snapshot, () => defaultLevel);
  const changeLevel = (requested: string) => {
    window.history.pushState(null, '', conversationLevelUrl(window.location.href, {availableLevels: levels, defaultLevel}, requested));
    window.dispatchEvent(new Event(levelEvent));
  };
  return <div className="cf-family" data-conversation-family={id} data-level={level}>
    <div className="cf-level-bar">
      <div className="cf-family-title"><span>CONVERSACIÓN</span><strong>{title}</strong></div>
      <div className="cf-level-control" role="group" aria-label="Nivel de la conversación">
        <span>Nivel</span>
        {levels.map(item => <button type="button" key={item} aria-pressed={item === level} onClick={() => item !== level && changeLevel(item)}>{item}</button>)}
      </div>
      <span className="cf-sr-only" role="status">Nivel {level}</span>
    </div>
    {children(level)}
  </div>;
}

export function ConversationClosing({ questions, note }: {questions: readonly string[]; note?: string}) {
  return <details className="cf-closing"><summary>Para cerrar la conversación <span>5 min</span></summary>{note && <p>{note}</p>}<ol>{questions.map(question => <li key={question}>{question}</li>)}</ol></details>;
}
