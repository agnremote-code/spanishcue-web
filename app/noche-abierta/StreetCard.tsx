'use client';

// The card of a street scene: who is there and what they say, three ways to
// answer (plus the learner's object when it fits), what happens next, and at
// the end one question about the learner's own life to answer aloud.
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import Bi from './Bi';
import { enOf, esOf } from './bilingual.mjs';
import { speakLines, stopSpeaking } from './voice';
import type { Level } from './engine.mjs';
import { encounterById, itemById, streetView, type StreetState } from './street.mjs';
import ItemIcon from './ItemIcon';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function StreetCard({ street, level, teacher, onChoose, onBack, onRestart, onClose }: {
  street: StreetState; level: Level; teacher: boolean;
  onChoose: (key: string) => void; onBack: () => void; onRestart: () => void; onClose: () => void;
}) {
  const view = streetView(street, level);
  const focusRef = useRef<HTMLDivElement>(null);
  const stepKey = view ? `${view.id}-${view.step}-${view.ended ? 'fin' : 'sigue'}` : '';
  useEffect(() => { focusRef.current?.focus({ preventScroll: true }); }, [stepKey]);
  // The people speak on their own: the answer to what you said, then their
  // next line; at the end, how the scene closes. Never the learner's question.
  const spoken = view ? (view.ended ? [{ text: view.end?.text, body: null }] : [{ text: view.said?.reply, body: view.said?.body ?? null }, { text: view.line, body: view.whoBody ?? null }]) : [];
  const spokenKey = spoken.map(line => line.text).join('|');
  const body = view?.whoBody ?? null;
  useEffect(() => { if (spokenKey) speakLines(spoken, { body, level }); return () => stopSpeaking(); }, [spokenKey]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!view) return null;
  const encounter = encounterById(view.id)!;
  const item = itemById(street.item);
  const a0 = level === 'A0';

  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === 'ArrowLeft' && view.step > 0) { event.preventDefault(); event.stopPropagation(); onBack(); return; }
    if (view.ended || !view.choices) return;
    const index = /^[1-4]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    const choice = view.choices[index];
    if (choice) { event.preventDefault(); onChoose(choice.key); }
  };

  return <section className="na-card is-world na-street" aria-labelledby="na-street-title" data-street={view.id} data-kind={view.kind}
    data-step={view.step} data-ended={view.ended ? 'true' : 'false'} data-mood={view.mood} onKeyDown={onKey}>
    <header className="na-card-head">
      <p className="na-card-place"><span>{view.districtName}</span><em>{view.kind === 'escena' ? 'Escena en la calle' : 'Rincón'}</em></p>
      <button type="button" className="na-close" onClick={onClose} aria-label="Volver a la calle">×</button>
    </header>
    <div className="na-card-body" ref={focusRef} tabIndex={-1} aria-live="polite">
      <div className="na-card-title"><h2 id="na-street-title">{view.title}</h2></div>
      <div className="na-beat" key={stepKey}>
        {view.said && <div className="na-street-said">
          {view.said.act && <p className="na-street-act">{view.said.item && <ItemIcon id={view.said.item} size={18} />}{view.said.act}</p>}
          <p className="na-chosen"><span>{a0 ? 'Dijiste · You said' : 'Dijiste'}</span><Bi text={view.said.say} /></p>
          <div className="na-outcome"><p><Bi text={view.said.reply} /></p></div>
        </div>}
        {!view.ended && view.choices && <>
          <div className="na-context na-street-line"><p>{view.who && <b>{view.who}</b>}<Bi text={view.line} /></p></div>
          <p className="na-ask">{a0 ? <Bi text={'¿Qué dices? Elige y dilo en voz alta.\nWhat do you say? Choose and say it out loud.'} /> : '¿Qué haces? Elige y dilo en voz alta.'}</p>
          <ol className="na-options na-street-options">{view.choices.map((choice, i) => <li key={choice.key}>
            <button type="button" className={choice.item ? 'is-item' : undefined} onClick={() => onChoose(choice.key)}>
              <kbd>{LETTERS[i]}</kbd>
              <span>
                {choice.item && <small className="na-street-use"><ItemIcon id={choice.item} size={16} />{choice.act || `Usas ${item?.name.toLowerCase() ?? 'tu objeto'}`}</small>}
                {!choice.item && choice.act && <small className="na-street-use">{choice.act}</small>}
                «{esOf(choice.say)}»{enOf(choice.say) && <span className="na-en" lang="en">{enOf(choice.say)}</span>}
              </span>
            </button>
          </li>)}</ol>
        </>}
        {view.ended && view.end && <>
          <div className="na-outcome is-end"><p className="na-outcome-label">{a0 ? 'Así termina · The end' : 'Así termina'}</p><p><Bi text={view.end.text} /></p></div>
          <p className="na-kicker">{a0 ? 'Ahora habla de ti · Now talk about yourself' : 'Ahora habla de ti'}</p>
          <p className="na-ask"><Bi text={view.speak} /></p>
        </>}
        {view.words && <div className="na-words"><h3>Palabras · Words</h3><ul className="na-chips is-quiet">{view.words.map(word => <li key={word}><Bi text={word} /></li>)}</ul></div>}
      </div>
    </div>
    <footer className="na-card-foot">
      <div className="na-actions">
        {view.step > 0 && <button type="button" className="na-secondary" onClick={onBack}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'na-primary' : 'na-secondary'} onClick={onClose}>{view.ended ? 'Seguir caminando' : 'Volver a la calle'}<kbd>Esc</kbd></button>
      </div>
    </footer>
    {teacher && <details className="na-teacher" open>
      <summary>Profe</summary>
      <p><b>Para qué sirve:</b> {encounter.goal}</p>
      <div className="na-row"><button type="button" className="na-secondary" onClick={onRestart}>Empezar la escena de nuevo</button></div>
    </details>}
  </section>;
}
