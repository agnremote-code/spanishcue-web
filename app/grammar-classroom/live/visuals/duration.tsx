'use client';
import { useEffect, useRef, useState } from 'react';
import { places } from '../../duration/model';
import type { DurationWorldAPI } from '../../duration/world';
import { English, Rich } from '../Rich';
import { useStore, useStored } from '../store';
import '../../duration/duration.css';
import type { Where } from '../Blocks';

/* ───────── 01 · One story, three ways to tell it ───────── */

type Reading = { id: string; sentence: string; tone: 'blue' | 'teal' | 'orange'; info: string; continues: boolean; en: string };
const readings: Reading[] = [
  { id: 'start', sentence: 'Vivo acá [[desde octubre de 2024|blue]].', tone: 'blue', info: 'Dice **cuándo empezó** la situación: el punto de inicio.', continues: true, en: 'I have lived here since October 2024.' },
  { id: 'duration', sentence: 'Vivo acá [[desde hace dos años|teal]].', tone: 'teal', info: 'Dice **cuánto tiempo dura** la situación hasta hoy.', continues: true, en: 'I have lived here for two years.' },
  { id: 'duration-que', sentence: '[[Hace dos años que|teal]] vivo acá.', tone: 'teal', info: 'La misma idea con otro orden: **hace + tiempo + que + presente**.', continues: true, en: 'I have lived here for two years.' },
  { id: 'event', sentence: 'Me mudé acá [[hace dos años|orange]].', tone: 'orange', info: 'Dice **cuánto tiempo pasó desde un hecho** terminado: la mudanza.', continues: false, en: 'I moved here two years ago.' },
];

const X0 = 95, X1 = 620;
const months = (year: number, month: number) => (year - 2023) * 12 + (month - 10);
const x = (year: number, month = 10) => X0 + (months(year, month) / 36) * (X1 - X0);

/** The three sentences on one timeline: a point, a line that reaches today, and a jump back from today. */
function TimeCompare({ where }: { where: Where }) {
  const [active, setActive] = useState('start');
  const reading = readings.find(r => r.id === active)!;
  const kind = active === 'event' ? 'event' : active === 'start' ? 'start' : 'duration';
  const start = x(2024), now = x(2026);
  return <section className="gl-timeline" data-time-compare={kind} id={`${where.id}-timeline`}>
    <div className="gl-timeline-tabs" role="tablist" aria-label="Tres frases">
      {readings.map((r, i) => <button type="button" role="tab" key={r.id} data-reading={r.id} aria-selected={r.id === active} className={`gl-tone-${r.tone}`} onClick={() => setActive(r.id)}>
        <i>{i === 2 ? '=' : i < 2 ? i + 1 : 3}</i><span><Rich text={r.sentence} /></span>
      </button>)}
    </div>
    <figure className="gl-timeline-figure">
      <svg viewBox="0 0 680 190" role="img" aria-label={`${reading.sentence.replace(/\[\[([^\]|]+)\|[a-z]+\]\]/g, '$1')} ${reading.continues ? 'La situación sigue hoy.' : 'Es un hecho terminado.'}`}>
        <line x1="30" y1="120" x2="650" y2="120" className="gl-tl-axis" />
        {[2023, 2024, 2025, 2026].map(year => <g key={year}>
          <line x1={x(year)} y1="112" x2={x(year)} y2="128" className="gl-tl-tick" />
          <text x={x(year)} y="152" textAnchor="middle" className="gl-tl-year">{year === 2026 ? 'hoy' : `oct. ${year}`}</text>
        </g>)}
        {/* the situation that continues */}
        <rect x={start} y="111" width={now - start} height="18" rx="9" className={`gl-tl-bar ${kind === 'duration' ? 'is-on' : kind === 'start' ? 'is-soft' : 'is-off'}`} />
        {kind === 'duration' && <g className="gl-tl-span">
          <path d={`M${start} 92v-8h${now - start}v8`} />
          <text x={(start + now) / 2} y="74" textAnchor="middle">dos años · y sigue</text>
        </g>}
        {/* the starting point */}
        {kind === 'start' && <g className="gl-tl-start">
          <circle cx={start} cy="120" r="12" />
          <path d={`M${start} 108V58`} /><path d={`M${start} 58l22 8-22 8z`} className="gl-tl-flag" />
          <text x={start + 30} y="70">punto de inicio</text>
        </g>}
        {/* the finished event and the jump back from today */}
        {kind === 'event' && <g className="gl-tl-event">
          <path d={`M${now} 104C${now - 40} 46 ${start + 40} 46 ${start + 8} 102`} className="gl-tl-arc" />
          <path d={`M${start + 2} 92l6 12 9-10`} className="gl-tl-arc" />
          <text x={(start + now) / 2} y="44" textAnchor="middle">hace dos años</text>
          <circle cx={start} cy="120" r="12" />
          <text x={start} y="178" textAnchor="middle" className="gl-tl-caption">la mudanza</text>
        </g>}
        <circle cx={now} cy="120" r="9" className="gl-tl-now" />
      </svg>
      <figcaption>
        <p><Rich text={reading.info} /></p>
        <span className={`gl-tl-status ${reading.continues ? 'is-on' : 'is-off'}`}>{reading.continues ? '● La situación sigue hoy' : '■ Es un hecho terminado'}</span>
        <English text={reading.en} />
      </figcaption>
    </figure>
  </section>;
}

/* ───────── 03 · Mission in the 3D neighbourhood ───────── */

type Task = { place: number; who: string; card: string; asks: string; mode: 'start' | 'duration' | 'event'; options: string[]; answer: number; why: string };
/** Facts follow the neighbourhood's calendar (model.ts): it is October in the scene. */
const tasks: Task[] = [
  { place: 0, who: 'Marta, en la casa azul', card: 'Llegó en marzo. Todavía vive allí.', asks: '¿Desde cuándo vive allí?', mode: 'start', options: ['Marta vive aquí desde marzo.', 'Marta vive aquí desde hace marzo.', 'Marta vivió aquí hace marzo.'], answer: 0, why: 'Marzo es un momento y Marta sigue allí: desde + momento.' },
  { place: 1, who: 'Elena, en la biblioteca', card: 'Empezó a trabajar en abril. Sigue trabajando allí.', asks: '¿Cuánto tiempo hace que trabaja allí?', mode: 'duration', options: ['Elena trabaja en la biblioteca desde seis meses.', 'Elena trabaja en la biblioteca desde hace seis meses.', 'Elena trabajó en la biblioteca hace seis meses.'], answer: 1, why: 'De abril a octubre hay seis meses y Elena sigue: desde hace + cantidad.' },
  { place: 2, who: 'Pablo, en el café', card: 'Empezó a estudiar en el café en septiembre.', asks: '¿Cuándo empezó? Cuéntalo como un hecho.', mode: 'event', options: ['Pablo empezó a estudiar en el café desde hace un mes.', 'Pablo empieza a estudiar en el café desde septiembre hace.', 'Pablo empezó a estudiar en el café hace un mes.'], answer: 2, why: 'Empezar es un hecho terminado: verbo en pasado + hace un mes.' },
  { place: 3, who: 'El grupo de paseos, en la plaza', card: 'Pasea por la plaza desde agosto.', asks: '¿Cuánto tiempo hace? Usa «hace… que».', mode: 'duration', options: ['Desde dos meses el grupo pasea por la plaza.', 'Hace dos meses que el grupo pasea por la plaza.', 'El grupo paseó por la plaza desde hace dos meses.'], answer: 1, why: 'Hace + cantidad + que + presente: el grupo sigue paseando.' },
];

function BarrioMission({ where }: { where: Where }) {
  const { results, record } = useStore();
  const [current, setCurrent] = useStored(`${where.id}:current`, 0);
  const [picked, setPicked] = useStored<Record<number, number>>(`${where.id}:picked`, {});
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'fallback'>('idle');
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<DurationWorldAPI | null>(null);
  const task = tasks[current];
  const solved = (i: number) => Boolean(results[`${where.id}:${i}`]?.ok);
  const count = tasks.filter((_, i) => solved(i)).length;

  useEffect(() => {
    if (!open) return;
    let disposed = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus('loading');
    void import('../../duration/world').then(({ mountDurationWorld }) => {
      if (disposed || !host.current) return;
      if (typeof ResizeObserver === 'undefined') { setStatus('fallback'); return; }
      try {
        api.current = mountDurationWorld(host.current, place => { const i = tasks.findIndex(t => t.place === place); if (i >= 0) setCurrent(i); }, () => setStatus('ready'), () => setStatus('fallback'));
      } catch { setStatus('fallback'); }
    }).catch(() => { if (!disposed) setStatus('fallback'); });
    return () => { disposed = true; api.current?.dispose(); api.current = null; };
  }, [open]);

  useEffect(() => {
    const p = places[task.place];
    api.current?.update({ place: task.place, start: p.start, mode: task.mode, equivalent: current === 3 });
    if (status === 'ready') api.current?.view('focus');
  }, [task, current, status]);

  const choose = (o: number) => {
    setPicked(prev => ({ ...prev, [current]: o }));
    const ok = o === task.answer;
    record(`${where.id}:${current}`, { ok, prompt: `${task.who}: ${task.asks}`, right: task.options[task.answer], stage: where.stage, step: where.step });
    window.dispatchEvent(new window.CustomEvent('gl-react', { detail: { ok } }));
  };
  const choice = picked[current];

  return <section className="gl-mission" data-mission data-solved={count}>
    <header className="gl-mission-head">
      <div><small>Misión en el barrio · hoy es octubre</small><h3>El periódico del barrio necesita cuatro frases</h3>
        <p>Visita a cada vecino, lee su ficha y elige la frase correcta para el periódico. Sin la estructura correcta, la noticia no se publica.</p></div>
      <span className="gl-mission-count" aria-label={`${count} de ${tasks.length} frases publicadas`}>{count}/{tasks.length}</span>
    </header>
    {open ? <div className="du-viewport gl-mission-world" ref={host} data-world-status={status} role="group" aria-label="Barrio 3D. Toca un edificio para visitar a su vecino.">
      {status !== 'ready' && <div className="du-load">{status === 'fallback' ? 'Tu navegador no muestra el barrio en 3D. Puedes hacer la misión con las fichas.' : 'Entrando en el barrio…'}</div>}
    </div> : <button type="button" className="gl-mission-enter" data-open-scene onClick={() => setOpen(true)}><span aria-hidden="true">🏘</span> Entrar al barrio en 3D <small>Opcional: la misión también funciona con las fichas.</small></button>}
    <div className="gl-mission-places" role="tablist" aria-label="Vecinos">{tasks.map((t, i) => <button type="button" role="tab" key={t.who} data-neighbor={i} aria-selected={i === current} className={solved(i) ? 'is-done' : ''} onClick={() => setCurrent(i)}>
      <span>{solved(i) ? '✓' : i + 1}</span>{places[t.place].label}
    </button>)}</div>
    <article className="gl-mission-card" key={current}>
      <p className="gl-mission-who">{task.who}</p>
      <p className="gl-mission-fact">📋 {task.card}</p>
      <p className="gl-mission-asks">{task.asks}</p>
      <div className="gl-options gl-options-stack" role="group" aria-label="Frases para el periódico">{task.options.map((option, o) => <button type="button" key={option} data-mission-option={o} aria-pressed={choice === o} className={choice === o ? (o === task.answer ? 'is-right' : 'is-wrong') : ''} onClick={() => choose(o)}>{option}</button>)}</div>
      {choice !== undefined && <p className={`gl-feedback ${choice === task.answer ? 'is-ok' : 'is-no'}`} role="status"><b>{choice === task.answer ? '✓ Publicada.' : 'Todavía no.'}</b> {choice === task.answer ? task.why : '¿Es un momento, una cantidad o un hecho terminado? Mira la ficha.'}</p>}
      {choice === task.answer && current < tasks.length - 1 && <button type="button" className="gl-link" data-next-neighbor onClick={() => setCurrent(current + 1)}>Visitar al siguiente vecino →</button>}
      {count === tasks.length && <p className="gl-mission-done">📰 ¡Misión cumplida! Las cuatro frases están en el periódico.</p>}
    </article>
  </section>;
}

export { BarrioMission, TimeCompare };
