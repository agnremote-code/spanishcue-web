'use client';

// Hospital San Casi Vivo · free demo. The same 3D hospital, but only the
// entrance and the reception desk are open: the reception scene arrives from
// the server for each level (demo-content.mjs) and every other circle, the
// elevator, the stairs and any step past the reception open the PRO panel.
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { LEVELS } from './levels-info.mjs';
import type { Text } from './levels.d.mts';
import type { HospitalDemoPayload } from './demo-content.d.mts';
import { sceneById } from './layout.mjs';
import PremiumPanel from '../immersive/PremiumPanel';
import type { Pose } from './World3D';
import './hospital.css';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="hs-loading">Abriendo las puertas de urgencias…</div> });
const LETTERS = ['A', 'B', 'C'];
const LEVEL_KEY = 'spanishcue:hospital-demo:nivel';

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="hs-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

export default function HospitalDemo({ content, fence, signedIn }: { content: HospitalDemoPayload; fence: { minX: number; maxX: number; minZ: number; maxZ: number }; signedIn: boolean }) {
  const [level, setLevel] = useState('A1');
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState<number | null>(null);
  const [talkAt, setTalkAt] = useState(0);
  const [done, setDone] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'lift' | 'stairs' | 'person'; id: string } | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [gate, setGate] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      let saved: string | null = null;
      try { saved = window.localStorage.getItem(LEVEL_KEY); } catch { saved = null; }
      const asked = String(params.get('level') ?? params.get('nivel') ?? saved ?? '').toUpperCase();
      if (content.scenes[asked]) setLevel(asked);
      setHas3d(webglAvailable()); setReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, [content.scenes]);
  useEffect(() => { if (ready) try { window.localStorage.setItem(LEVEL_KEY, level); } catch { /* private mode */ } }, [level, ready]);

  const scene = content.scenes[level];
  const place = sceneById(content.scene);
  const chosen = pick === null ? null : scene.options[pick];
  const info = LEVELS.find(l => l.id === level)!;
  const lock = (area: string) => { setOpen(false); setGate(area); };
  const openReception = () => { setTalkAt(0); setPick(null); setOpen(true); };
  const choose = (index: number) => { if (pick === null && index >= 0 && index < 3) { setPick(index); setDone(true); } };
  const sectorName = (id: string) => sceneById(id)?.sector ?? 'El resto del hospital';

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => { cardRef.current?.focus({ preventScroll: true }); }, [open, pick]);
  const onCardKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (chosen) return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); choose(index); }
  };

  const busy = open || Boolean(gate);
  const atReception = near?.kind === 'scene' && near.id === content.scene;

  return <main className="hs hs-demo" data-level={level} data-floor={1} data-mode="conversacion">
    {ready && has3d && <World3D level={level} floor={1} via="lift" sceneId={open ? content.scene : null} mood={chosen?.mood ?? null}
      done={done ? [content.scene] : []} paused={!entered || Boolean(gate)} intro={!entered}
      onSpot={(id) => id === content.scene ? openReception() : lock(sectorName(id))}
      onLift={(how) => lock(how === 'stairs' ? 'Las escaleras y las otras plantas' : 'El ascensor y las otras plantas')}
      onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)}
      personId={null} onPerson={() => lock('Hablar con todo el hospital')} onCry={() => {}}
      fence={fence} onFence={() => lock('Las otras salas del hospital')} />}
    {ready && !has3d && <div className="hs-flat" aria-hidden="true" />}

    {!entered && <section className="hs-title" aria-labelledby="hs-title-h">
      <div className="hs-title-card">
        <p className="hs-kicker">Demo gratis · Recepción</p>
        <h1 id="hs-title-h">Hospital San Casi Vivo</h1>
        <p className="hs-tagline">Entrás por una consulta. Salís con una historia.</p>
        <p className="hs-lede">La entrada y la recepción son gratis: habla con Norma, elige qué decir y después conversa. Las otras plantas, las salas y las escuchas son PRO.</p>
        <p className="hs-label">Elige el nivel</p>
        <div className="hs-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={level === l.id} className={level === l.id ? 'is-on' : undefined} onClick={() => { setLevel(l.id); setPick(null); }}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <button type="button" className="hs-enter" onClick={() => { setEntered(true); if (!has3d) openReception(); }}>Entrar gratis a la recepción</button>
        <p className="hs-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr. Arrastra para mirar. Párate en el círculo blanco de la recepción o pulsa E.</p>
      </div>
    </section>}

    {entered && <header className="hs-hud">
      <div className="hs-where"><span>PB · Planta baja</span><b>{pose?.sector === content.scene ? 'Entrada y recepción · Gratis' : 'Entrada · Gratis'}</b></div>
      <div className="hs-hud-right">
        <span className="hs-progress">{done ? '1 de 1 escena gratis' : '0 de 1 escena gratis'} · {info.label}</span>
        <button type="button" onClick={() => lock('Comprensión auditiva')}>🔒 Comprensión auditiva</button>
        <button type="button" onClick={() => lock('Las 21 escenas del hospital')}>🔒 Escenas</button>
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
        <Link href="/">Biblioteca</Link>
      </div>
    </header>}

    {entered && !busy && near && <div className="hs-prompt" role="status">
      {atReception ? <button type="button" onClick={openReception}><kbd>E</kbd>{`Hablar con ${content.name.split(' ')[0]}`}</button>
        : <button type="button" onClick={() => lock(near.kind === 'scene' ? sectorName(near.id) : 'El resto del hospital')}>🔒 PRO</button>}
    </div>}
    {entered && !busy && !near && <p className="hs-hint">{done ? 'Ya hiciste la escena gratis. El resto del hospital es PRO.' : 'Entra y busca el círculo blanco de la recepción.'}</p>}

    {open && place && <section className="hs-card" aria-labelledby="hs-card-h" data-scene={content.scene} data-ended={chosen ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="hs-card-head">
        <p><span>PB · {place.sector}</span><em>{content.name} · {content.role}</em></p>
        <button type="button" className="hs-close" onClick={() => setOpen(false)} aria-label="Volver al hospital">×</button>
      </header>
      <div className="hs-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="hs-card-h"><Bi t={scene.title} /></h2>
        <Bi t={scene.line} as="p" className="hs-line" />
        <ul className="hs-dialogue">{scene.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={scene.ask} as="p" className="hs-ask" />
        {!chosen ? <>
          <p className="hs-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="hs-options">{scene.options.map((o, i) => <li key={i}><button type="button" onClick={() => choose(i)}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="hs-said">
          <p className="hs-chosen"><span>Tú</span><Bi t={chosen.say} /></p>
          <Bi t={chosen.reply} as="p" className="hs-reply" />
          <Bi t={chosen.end} as="p" className="hs-end" />
        </div>}
        {chosen && <section className="hs-talk" aria-labelledby="hs-talk-h">
          <h3 id="hs-talk-h">Ahora, conversación</h3>
          <ol>{scene.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="hs-row">
            <button type="button" className="hs-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="hs-secondary" disabled={talkAt === scene.talk.length - 1} onClick={() => setTalkAt(t => Math.min(scene.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        <details className="hs-words" open={Boolean(chosen)}>
          <summary>Palabras de la escena</summary>
          <ul>{scene.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>
      </div>
      <footer className="hs-card-foot">
        {chosen && <button type="button" className="hs-secondary" onClick={() => setPick(null)}>← Otra respuesta</button>}
        {chosen ? <button type="button" className="hs-primary" onClick={() => lock('Las otras 20 escenas del hospital')}>🔒 Seguir al resto del hospital</button>
          : <button type="button" className="hs-secondary" onClick={() => setOpen(false)}>Volver al hospital <kbd>Esc</kbd></button>}
      </footer>
    </section>}

    {gate && <PremiumPanel area={gate} signedIn={signedIn} returnTo="/hospital-san-casi-vivo" onClose={() => setGate(null)} />}
  </main>;
}
