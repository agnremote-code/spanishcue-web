'use client';
// Charlas 3D · the «E · Hablar» prompt and the question card of a circle.

import { useState } from 'react';
import './charlas.css';

export type Charla = { key: string; title: string; intro: string; band: string; questions: { es: string; en?: string }[] };

export default function CharlaCard({ near, charla, onOpen, onClose }: { near: string | null; charla: Charla | null; onOpen: () => void; onClose: () => void }) {
  // The counter belongs to one circle: a new circle starts again at question 1.
  const [step, setStep] = useState<{ key: string | undefined; i: number }>({ key: undefined, i: 0 });
  const i = step.key === charla?.key ? step.i : 0;
  if (!charla) {
    if (!near) return null;
    return <button type="button" className="charla-prompt" onClick={onOpen}>
      <span className="charla-key">E</span> Hablar · {near}
    </button>;
  }
  const q = charla.questions[i % charla.questions.length];
  const a0 = charla.band === 'a0';
  return <div className="charla-veil" role="dialog" aria-modal="true" aria-label={charla.title} onPointerDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="charla-card">
      <p className="charla-kicker">Conversación</p>
      <h2>{charla.title}</h2>
      {charla.intro && <p className="charla-intro">{charla.intro}</p>}
      <div className="charla-q" key={i}>
        <p className="charla-es">{q.es}</p>
        {a0 && q.en && <p className="charla-en">{q.en}</p>}
      </div>
      <p className="charla-guide">Respondes en voz alta con un ejemplo de tu vida y explicas por qué.{a0 && <span>Answer out loud with an example from your life.</span>}</p>
      <div className="charla-actions">
        <span className="charla-count">{(i % charla.questions.length) + 1} / {charla.questions.length}</span>
        <button type="button" className="charla-next" onClick={() => setStep({ key: charla.key, i: i + 1 })} autoFocus>Otra pregunta</button>
        <button type="button" className="charla-close" onClick={onClose}>Seguir caminando</button>
      </div>
    </div>
  </div>;
}
