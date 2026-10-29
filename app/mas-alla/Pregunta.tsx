'use client';

// Más allá · the twelve ways of answering a deep question. None of them is a
// list of buttons one under another: a scale with two pans and a fulcrum,
// candles to blow out, books to pull from a shelf, stepping stones into the
// river of forgetting, a constellation, three tarot cards, doors in a
// corridor, the shards of a broken mirror, a stamped court file, coins for
// the ferryman, chains to break and the hand of a clock. Every answer is a
// real button (keys 1–5 work too); the chosen one is marked with aria-pressed.
import type { CSSProperties, ReactNode } from 'react';
import type { FormId } from './story.d.mts';
import type { Text } from './levels.d.mts';

export function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b' | 'h2' | 'h3' | 'em'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="ma-en" lang="en">{t.en}</small></Tag>;
}

type FormProps = { options: Text[]; pick: number | null; onPick: (i: number) => void; poles?: [Text, Text] };
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];
const on = (pick: number | null, i: number) => (pick === null ? '' : pick === i ? ' is-on' : ' is-off');
const btn = (pick: number | null, i: number, onPick: (i: number) => void, label: string) => ({
  type: 'button' as const, 'aria-pressed': pick === i, onClick: () => onPick(i), 'aria-label': label,
});
const plain = (t: Text) => (typeof t === 'string' ? t : t.es);

function Balanza({ options, pick, onPick }: FormProps) {
  const tilt = pick === 0 ? -11 : pick === 2 ? 11 : 0;
  return <div className="ma-f ma-balanza">
    <div className="ma-bal-beam" style={{ '--tilt': `${tilt}deg` } as CSSProperties}>
      <i className="ma-bal-bar" />
      {[0, 2].map(i => <div key={i} className={`ma-bal-pan is-${i === 0 ? 'l' : 'r'}${on(pick, i)}`}>
        <i className="ma-bal-strings" />
        <button {...btn(pick, i, onPick, plain(options[i]))}><Bi t={options[i]} /></button>
      </div>)}
    </div>
    <div className={`ma-bal-mid${on(pick, 1)}`}><button {...btn(pick, 1, onPick, plain(options[1]))}><Bi t={options[1]} /></button><i className="ma-bal-post" /></div>
  </div>;
}

function Velas({ options, pick, onPick }: FormProps) {
  const heights = [62, 88, 74, 54];
  return <div className="ma-f ma-velas">
    {options.map((o, i) => <button key={i} className={`ma-vela${on(pick, i)}`} {...btn(pick, i, onPick, plain(o))}>
      <span className="ma-vela-body" style={{ height: `${heights[i % 4]}%` }}><i className="ma-vela-flame" /><i className="ma-vela-smoke" /></span>
      <span className="ma-vela-label"><Bi t={o} /></span>
    </button>)}
  </div>;
}

function Libros({ options, pick, onPick }: FormProps) {
  const looks = [{ c: '#6e2a2a', h: 92 }, { c: '#2a4a6e', h: 84 }, { c: '#2a5e46', h: 96 }, { c: '#7a5e2a', h: 88 }];
  return <div className="ma-f ma-libros">
    <div className="ma-shelf">
      {options.map((o, i) => <button key={i} className={`ma-libro${on(pick, i)}`} style={{ '--c': looks[i % 4].c, '--h': `${looks[i % 4].h}%` } as CSSProperties} {...btn(pick, i, onPick, plain(o))}>
        <span className="ma-libro-spine"><em>Cap. {ROMAN[i]}</em><b><Bi t={o} /></b></span>
      </button>)}
    </div>
    <i className="ma-shelf-board" />
  </div>;
}

function Rio({ options, pick, onPick, poles }: FormProps) {
  return <div className="ma-f ma-rio">
    <div className="ma-rio-water" aria-hidden="true"><i /><i /><i /></div>
    {poles && <p className="ma-rio-poles"><Bi t={poles[0]} as="span" /><Bi t={poles[1]} as="span" /></p>}
    <div className="ma-rio-stones">
      {options.map((o, i) => <button key={i} className={`ma-piedra${on(pick, i)}`} style={{ '--d': i / (options.length - 1) } as CSSProperties} {...btn(pick, i, onPick, plain(o))}>
        <span className="ma-piedra-stone" aria-hidden="true">{pick === i && <i className="ma-piedra-soul" />}</span>
        <span className="ma-piedra-label"><Bi t={o} /></span>
      </button>)}
    </div>
  </div>;
}

const STAR_AT = [[16, 30], [40, 14], [62, 38], [84, 18], [52, 70]];
function Estrellas({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-estrellas">
    <svg className="ma-constellation" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={STAR_AT.slice(0, options.length).map(([x, y]) => `${x},${y}`).join(' ')} />
    </svg>
    {options.map((o, i) => <button key={i} className={`ma-star${on(pick, i)}`} style={{ left: `${STAR_AT[i][0]}%`, top: `${STAR_AT[i][1]}%` }} {...btn(pick, i, onPick, plain(o))}>
      <i className="ma-star-dot" /><span className="ma-star-label"><Bi t={o} /></span>
    </button>)}
  </div>;
}

const CARD_SIGNS = ['☀', '☾', '✦'];
function Cartas({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-cartas">
    {options.map((o, i) => <button key={i} className={`ma-carta${on(pick, i)}`} style={{ '--r': `${(i - 1) * 7}deg` } as CSSProperties} {...btn(pick, i, onPick, plain(o))}>
      <span className="ma-carta-face"><em>{ROMAN[i]}</em><i aria-hidden="true">{CARD_SIGNS[i % 3]}</i><b><Bi t={o} /></b></span>
    </button>)}
  </div>;
}

function Puertas({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-puertas">
    {options.map((o, i) => <button key={i} className={`ma-puerta${on(pick, i)}`} {...btn(pick, i, onPick, plain(o))}>
      <span className="ma-puerta-frame"><span className="ma-puerta-glow" aria-hidden="true" /><span className="ma-puerta-leaf"><i className="ma-puerta-knob" /><em>{6 + i * 111}</em></span></span>
      <span className="ma-puerta-plate"><Bi t={o} /></span>
    </button>)}
  </div>;
}

const SHARDS = ['polygon(0 0, 58% 0, 46% 44%, 0 58%)', 'polygon(58% 0, 100% 0, 100% 52%, 46% 44%)', 'polygon(0 58%, 46% 44%, 40% 100%, 0 100%)', 'polygon(46% 44%, 100% 52%, 100% 100%, 40% 100%)'];
const SHARD_TEXT = [[16, 20], [58, 18], [12, 64], [54, 66]];
function Espejo({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-espejo">
    <div className="ma-mirror">
      {options.map((o, i) => <button key={i} className={`ma-shard${on(pick, i)}`} style={{ clipPath: SHARDS[i], '--i': i } as CSSProperties} {...btn(pick, i, onPick, plain(o))}>
        <span className="ma-shard-text" style={{ left: `${SHARD_TEXT[i][0]}%`, top: `${SHARD_TEXT[i][1]}%` }}><Bi t={o} /></span>
      </button>)}
      <i className="ma-mirror-frame" aria-hidden="true" />
    </div>
  </div>;
}

function Matriz({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-matriz">
    <header className="ma-file-head"><b>TRIBUNAL DE LAS PEQUEÑAS MENTIRAS</b><span>Expediente 6/66 · Declaración del alma</span></header>
    <div className="ma-file-grid">
      {options.map((o, i) => <button key={i} className={`ma-file-cell${on(pick, i)}`} {...btn(pick, i, onPick, plain(o))}>
        <em>{String.fromCharCode(65 + i)}</em><Bi t={o} />{pick === i && <i className="ma-stamp" aria-hidden="true">CONFESADO</i>}
      </button>)}
    </div>
  </div>;
}

function Monedas({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-monedas">
    <div className={`ma-hand${pick !== null ? ' is-paid' : ''}`} aria-hidden="true"><i /></div>
    <div className="ma-coins">
      {options.map((o, i) => <button key={i} className={`ma-coin${on(pick, i)}`} {...btn(pick, i, onPick, plain(o))}>
        <span className="ma-coin-disc" aria-hidden="true"><i>{ROMAN[i]}</i></span>
        <span className="ma-coin-label"><Bi t={o} /></span>
      </button>)}
    </div>
  </div>;
}

function Cadenas({ options, pick, onPick }: FormProps) {
  return <div className="ma-f ma-cadenas">
    {options.map((o, i) => <button key={i} className={`ma-cadena${on(pick, i)}`} {...btn(pick, i, onPick, plain(o))}>
      <span className="ma-links" aria-hidden="true">{Array.from({ length: 7 }, (_, k) => <i key={k} style={{ '--k': k } as CSSProperties} />)}</span>
      <span className="ma-lock"><Bi t={o} /></span>
    </button>)}
  </div>;
}

function Reloj({ options, pick, onPick }: FormProps) {
  const angle = pick === null ? -30 : pick * 90;
  return <div className="ma-f ma-reloj">
    <div className="ma-dial">
      {Array.from({ length: 12 }, (_, k) => <i key={k} className="ma-tick" style={{ '--a': `${k * 30}deg` } as CSSProperties} />)}
      <i className="ma-hand-clock" style={{ '--a': `${angle}deg` } as CSSProperties} />
      <i className="ma-pin" />
      {options.map((o, i) => <button key={i} className={`ma-hour is-${i}${on(pick, i)}`} {...btn(pick, i, onPick, plain(o))}><Bi t={o} /></button>)}
    </div>
  </div>;
}

const FORM_VIEWS: Record<FormId, (p: FormProps) => ReactNode> = {
  balanza: Balanza, velas: Velas, libros: Libros, rio: Rio, estrellas: Estrellas, cartas: Cartas,
  puertas: Puertas, espejo: Espejo, matriz: Matriz, monedas: Monedas, cadenas: Cadenas, reloj: Reloj,
};

export function Pregunta({ form, ...props }: FormProps & { form: FormId }) {
  const View = FORM_VIEWS[form];
  return <div className={`ma-form is-${form}`} data-form={form}><View {...props} /></div>;
}
