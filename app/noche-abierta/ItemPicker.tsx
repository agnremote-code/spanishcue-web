'use client';

// «¿Qué llevas esta noche?»: before entering the city the learner picks one
// thing to carry all night. The 3D shelf (ItemStage, three.js) loads on
// demand and only with WebGL; the cards below it are the accessible
// controls (a radio group) and, without WebGL, carry large illustrations.
import { Suspense, lazy, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import ItemIcon, { ITEM_META, ITEM_ORDER, isItemId, type ItemId } from './ItemIcon';
import { ITEMS } from './street.mjs';

const ItemStage = lazy(() => import('./ItemStage'));

const NOTES: Record<string, string> = Object.fromEntries(ITEMS.map(item => [item.id, item.note]));

export type ItemPickerProps = {
  initial?: ItemId | null;
  onChoose: (id: ItemId) => void;
  onClose?: () => void;
};

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch { return false; }
}

export default function ItemPicker({ initial = null, onChoose, onClose }: ItemPickerProps) {
  const [selected, setSelected] = useState<ItemId | null>(initial);
  const [focused, setFocused] = useState<ItemId | null>(initial);
  const [use3d, setUse3d] = useState(false);
  const cards = useRef<Partial<Record<ItemId, HTMLButtonElement | null>>>({});

  useEffect(() => {
    // Feature detection after hydration; the server renders the illustrated cards.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (webglAvailable()) setUse3d(true);
  }, []);
  useEffect(() => {
    cards.current[initial ?? ITEM_ORDER[0]]?.focus({ preventScroll: true });
  }, [initial]);

  const current = selected ?? null;
  const tabStop = selected ?? focused ?? ITEM_ORDER[0];

  const pick = (id: ItemId, moveFocus = false) => {
    setSelected(id);
    setFocused(id);
    if (moveFocus) cards.current[id]?.focus({ preventScroll: true });
  };
  const choose = (id: ItemId | null) => { if (id) onChoose(id); };

  // Arrows, Home/End and 1–7 move through the options (radio semantics:
  // moving also selects); Enter takes the current one; Esc closes.
  const onKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target as HTMLElement;
    const onCard = target.dataset.item;
    const from = ITEM_ORDER.indexOf((isItemId(onCard) ? onCard : tabStop));
    let next = -1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (from + 1) % ITEM_ORDER.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (from - 1 + ITEM_ORDER.length) % ITEM_ORDER.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = ITEM_ORDER.length - 1;
    else if (/^[1-7]$/.test(event.key)) next = Number(event.key) - 1;
    else if (event.key === 'Enter' && isItemId(onCard)) {
      event.preventDefault();
      choose(onCard);
      return;
    } else if (event.key === 'Escape' && onClose) {
      event.preventDefault();
      onClose();
      return;
    }
    if (next < 0) return;
    event.preventDefault();
    pick(ITEM_ORDER[next], true);
  };

  return <div className={`na-pick${use3d ? ' has-stage' : ' is-flat'}`} role="dialog" aria-modal="true" aria-labelledby="na-pick-title" aria-describedby="na-pick-lede" onKeyDown={onKey}>
    <div className="na-pick-sky" aria-hidden="true" />
    <header className="na-pick-head">
      <p className="na-kicker">Antes de salir</p>
      <h2 id="na-pick-title">¿QUÉ LLEVAS ESTA NOCHE?</h2>
      <p className="na-pick-lede" id="na-pick-lede">Elige una sola cosa. La vas a llevar toda la noche y cambia lo que puedes hacer.</p>
      {onClose && <button type="button" className="na-close na-pick-close" onClick={onClose} aria-label="Cerrar sin elegir">×</button>}
    </header>

    {use3d && <Suspense fallback={<div className="na-pick-stage is-loading" aria-hidden="true" />}>
      <ItemStage selected={selected} focused={focused} onPick={id => pick(id, true)} onFocus={id => setFocused(id)} onFail={() => setUse3d(false)} />
    </Suspense>}

    <div className="na-pick-grid" role="radiogroup" aria-labelledby="na-pick-title">
      {ITEM_ORDER.map((id, i) => {
        const meta = ITEM_META[id];
        const checked = selected === id;
        return <button
          key={id}
          ref={node => { cards.current[id] = node; }}
          type="button"
          role="radio"
          aria-checked={checked}
          tabIndex={id === tabStop ? 0 : -1}
          className={`na-pick-card${checked ? ' is-selected' : ''}${focused === id ? ' is-focused' : ''}${meta.power ? ' is-power' : ''}`}
          data-item={id}
          style={{ '--na-pick-tone': meta.tone } as CSSProperties}
          onClick={() => pick(id)}
          onFocus={() => setFocused(id)}
          onMouseEnter={() => setFocused(id)}
          onDoubleClick={() => choose(id)}
        >
          <span className="na-pick-art"><ItemIcon id={id} size={use3d ? 30 : 64} /></span>
          <span className="na-pick-name"><span aria-hidden="true">{meta.emoji}</span> {meta.label}</span>
          <span className="na-pick-note">{NOTES[id]}</span>
          {meta.power && <span className="na-pick-tag is-power">Poder</span>}
          <kbd className="na-pick-key" aria-hidden="true">{i + 1}</kbd>
        </button>;
      })}
    </div>

    <footer className="na-pick-foot">
      <p className="na-pick-fiction is-on">
        <span aria-hidden="true">✦</span> Lo que lleves cambia cómo te recibe la ciudad.
      </p>
      <button type="button" className="na-primary na-pick-go" disabled={!current} onClick={() => choose(current)}>
        {current ? <>Llevar {ITEM_META[current].withArticle} <kbd>Enter</kbd></> : 'Elige una cosa'}
      </button>
    </footer>
  </div>;
}
