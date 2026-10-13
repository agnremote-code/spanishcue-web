'use client';
import { useMemo, useState } from 'react';
import DurationScene from '../../duration/DurationScene';
import '../../duration/duration.css';

/** Classroom "now" for every computed answer in lesson 230. */
const NOW = { year: 2026, month: 10 };
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const numbers = ['', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once'];
export function amount(n: number, unit: 'year' | 'month') {
  const word = n < numbers.length ? numbers[n] : String(n);
  return unit === 'year' ? `${word} ${n === 1 ? 'año' : 'años'}` : `${word} ${n === 1 ? 'mes' : 'meses'}`;
}
/** Elapsed time from a start to the classroom now, in the most natural unit. */
export function elapsed(year: number, month?: number): { n: number; unit: 'year' | 'month' } | null {
  if (!month) return year <= NOW.year ? { n: NOW.year - year, unit: 'year' } : null;
  const total = (NOW.year - year) * 12 + (NOW.month - month);
  if (total < 0) return null;
  return total < 12 ? { n: total, unit: 'month' } : { n: Math.floor(total / 12), unit: 'year' };
}

type Situation = { id: string; label: string; unit: 'year' | 'month'; from: number; to: number; initial: number; start: (when: string) => string; duration: (q: string) => string; alt: (q: string) => string; event: (q: string) => string };
const situations: Situation[] = [
  { id: 'vivir', label: 'Vivir en Bogotá', unit: 'year', from: 2016, to: 2025, initial: 2019, start: w => `Vivo en Bogotá desde ${w}.`, duration: q => `Vivo en Bogotá desde hace ${q}.`, alt: q => `Hace ${q} que vivo en Bogotá.`, event: q => `Llegué a Bogotá hace ${q}.` },
  { id: 'trabajar', label: 'Trabajar en el hospital', unit: 'year', from: 2016, to: 2025, initial: 2022, start: w => `Trabajo en el hospital desde ${w}.`, duration: q => `Trabajo en el hospital desde hace ${q}.`, alt: q => `Hace ${q} que trabajo en el hospital.`, event: q => `Empecé a trabajar en el hospital hace ${q}.` },
  { id: 'estudiar', label: 'Estudiar español', unit: 'month', from: 1, to: 9, initial: 3, start: w => `Estudio español desde ${w}.`, duration: q => `Estudio español desde hace ${q}.`, alt: q => `Hace ${q} que estudio español.`, event: q => `Empecé a estudiar español hace ${q}.` },
  { id: 'familia', label: 'No ver a mi familia', unit: 'month', from: 1, to: 9, initial: 4, start: w => `No veo a mi familia desde ${w}.`, duration: q => `No veo a mi familia desde hace ${q}.`, alt: q => `Hace ${q} que no veo a mi familia.`, event: q => `Vi a mi familia por última vez hace ${q}.` },
];
const label = (s: Situation, value: number) => s.unit === 'year' ? String(value) : months[value - 1];

/** Static explanation drawing: a start point and its duration, or a finished event. */
export function TimeAxis({ mode }: { mode: 'start' | 'event' }) {
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const x = (year: number) => 40 + (year - 2017) * 64;
  return <figure className="gl-axis" data-axis={mode}>
    <svg viewBox="0 0 680 150" role="img" aria-label={mode === 'start' ? 'Línea del tiempo: desde 2019 hasta hoy, siete años.' : 'Línea del tiempo: un hecho en 2019, hace siete años.'}>
      <line className="gl-axis-line" x1="20" y1="90" x2="660" y2="90" />
      {years.map(year => <g key={year}><line className="gl-axis-tick" x1={x(year)} y1="84" x2={x(year)} y2="96" /><text className="gl-axis-year" x={x(year)} y="118" textAnchor="middle">{year === 2026 ? 'HOY' : year}</text></g>)}
      {mode === 'start' ? <>
        <rect className="gl-fill-teal" x={x(2019)} y="80" width={x(2026) - x(2019)} height="20" rx="10" />
        <circle className="gl-fill-blue" cx={x(2019)} cy="90" r="11" />
        <text className="gl-axis-label gl-text-blue" x={x(2019)} y="64" textAnchor="middle">desde 2019</text>
        <text className="gl-axis-label gl-text-teal" x={(x(2019) + x(2026)) / 2} y="28" textAnchor="middle">desde hace siete años → sigue hoy</text>
      </> : <>
        <circle className="gl-fill-orange" cx={x(2019)} cy="90" r="11" />
        <text className="gl-axis-label gl-text-orange" x={x(2019) - 18} y="70" textAnchor="end">Llegué</text>
        <path className="gl-stroke-orange" d={`M${x(2026)} 40 H${x(2019) + 14}`} />
        <path className="gl-fill-orange" d={`M${x(2019) + 2} 40 l14 -8 v16z`} />
        <path className="gl-stroke-orange" d={`M${x(2019)} 50 V74`} strokeDasharray="4 4" />
        <text className="gl-axis-label gl-text-orange" x={(x(2019) + x(2026)) / 2} y="30" textAnchor="middle">hace siete años ←</text>
      </>}
      <circle className="gl-now" cx={x(2026)} cy="90" r="7" />
    </svg>
    <figcaption>{mode === 'start' ? 'Desde marca el punto azul. Desde hace mide la barra verde hasta hoy.' : 'Hace + pasado cuenta hacia atrás, desde hoy hasta un hecho terminado.'} <small>En el ejemplo, hoy es 2026.</small></figcaption>
  </figure>;
}

/** Move the start and say the sentence before revealing it. */
export function TimeExplorer() {
  const [index, setIndex] = useState(0);
  const situation = situations[index];
  const [value, setValue] = useState(situation.initial);
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const n = situation.unit === 'year' ? NOW.year - value : NOW.month - value;
  const q = amount(n, situation.unit);
  const when = label(situation, value);
  const rows = [
    { id: 'start', tone: 'blue', head: 'DESDE', question: '¿Desde cuándo?', text: situation.start(when) },
    { id: 'duration', tone: 'teal', head: 'DESDE HACE', question: '¿Hace cuánto?', text: `${situation.duration(q)} · ${situation.alt(q)}` },
    { id: 'event', tone: 'orange', head: 'HACE + PASADO', question: '¿Cuándo pasó?', text: situation.event(q) },
  ];
  const all = rows.every(row => shown[row.id]);
  const span = situation.to - situation.from + 1;
  const pos = (v: number) => ((v - situation.from) / span) * 100;
  const choose = (i: number) => { setIndex(i); setValue(situations[i].initial); setShown({}); };
  return <section className="gl-card gl-explorer" data-time-explorer>
    <header className="gl-card-head"><h3>Laboratorio: una historia, tres frases</h3><button type="button" className="gl-chip-button" data-explorer-reveal aria-pressed={all} onClick={() => setShown(all ? {} : Object.fromEntries(rows.map(row => [row.id, true])))}>{all ? 'Ocultar frases' : 'Mostrar las tres frases'}</button></header>
    <div className="gl-role-tabs" role="tablist" aria-label="Situación">{situations.map((s, i) => <button type="button" role="tab" key={s.id} data-situation={s.id} aria-selected={i === index} onClick={() => choose(i)}>{s.label}</button>)}</div>
    <div className="gl-explorer-line">
      <div className="gl-explorer-track" aria-hidden="true">
        <span className="gl-explorer-bar" style={{ left: `${pos(value)}%`, right: '0%' }} />
        <span className="gl-explorer-start" style={{ left: `${pos(value)}%` }}>{when}</span>
        <span className="gl-explorer-now">HOY · {situation.unit === 'year' ? '2026' : 'octubre'}</span>
      </div>
      <label className="gl-explorer-range">Empezó en <b>{when}</b>
        <input type="range" min={situation.from} max={situation.to} value={value} aria-valuetext={when} onChange={event => { setValue(Number(event.target.value)); setShown({}); }} />
      </label>
      <p className="gl-hint">Duración hasta hoy: <b>{q}</b>.</p>
    </div>
    <ol className="gl-explorer-rows">{rows.map(row => <li key={row.id} className={`gl-tone-${row.tone}`}>
      <span className="gl-badge">{row.head}</span><small>{row.question}</small>
      {shown[row.id] ? <p data-explorer-sentence={row.id}>{row.text}</p> : <button type="button" className="gl-link" data-explorer-show={row.id} onClick={() => setShown(prev => ({ ...prev, [row.id]: true }))}>Primero dilo; después, mostrar</button>}
    </li>)}</ol>
  </section>;
}

type Moment = { text: string; year: string; month: string; kind: 'hecho' | 'sigue' };
const blank = (kind: Moment['kind']): Moment => ({ text: '', year: '', month: '', kind });

/** The student's own timeline for the final challenge. Nothing leaves the page. */
export function LifeLine() {
  const [moments, setMoments] = useState<Moment[]>([blank('hecho'), blank('hecho'), blank('hecho'), blank('sigue'), blank('sigue')]);
  const [help, setHelp] = useState(false);
  const [hidden, setHidden] = useState(false);
  const years = useMemo(() => Array.from({ length: 77 }, (_, i) => NOW.year - i), []);
  const edit = (i: number, patch: Partial<Moment>) => setMoments(prev => prev.map((m, j) => j === i ? { ...m, ...patch } : m));
  const dated = moments.map((m, i) => ({ ...m, i, y: Number(m.year), mo: Number(m.month) || 0 })).filter(m => m.y).sort((a, b) => a.y - b.y || a.mo - b.mo);
  const first = dated.length ? Math.min(dated[0].y, NOW.year - 1) : NOW.year - 10;
  const at = (y: number, mo: number) => ((y + (mo ? (mo - 1) / 12 : 0) - first) / (NOW.year + (NOW.month - 1) / 12 - first)) * 100;
  const model = (m: Moment) => {
    const y = Number(m.year), mo = Number(m.month) || undefined;
    const time = y ? elapsed(y, mo) : null;
    if (!time) return y ? 'Esa fecha está después de hoy (octubre de 2026).' : 'Elige una fecha.';
    if (time.n === 0) return m.kind === 'sigue' ? `desde ${mo ? months[mo - 1] : y} · hace muy poco` : 'hace muy poco';
    const q = amount(time.n, time.unit);
    return m.kind === 'sigue' ? `desde ${mo ? `${months[mo - 1]} de ${y}` : y} · desde hace ${q}` : `hace ${q}`;
  };
  return <section className="gl-card gl-lifeline" data-life-line>
    <header className="gl-card-head"><h3>Mi línea del tiempo</h3><div className="gl-row">
      <button type="button" className="gl-chip-button" data-life-help aria-pressed={help} onClick={() => setHelp(v => !v)}>{help ? 'Ocultar ayuda' : 'Mostrar ayuda'}</button>
      <button type="button" className="gl-chip-button" data-life-hide aria-pressed={hidden} onClick={() => setHidden(v => !v)}>{hidden ? 'Mostrar la línea' : 'Ocultar la línea (sin apoyo)'}</button>
    </div></header>
    {!hidden && <>
      <div className="gl-life-track" aria-label="Línea del tiempo del alumno">
        {dated.map(m => <span key={m.i} className={`gl-life-${m.kind}`} style={m.kind === 'sigue' ? { left: `${at(m.y, m.mo)}%`, right: 0 } : { left: `${at(m.y, m.mo)}%` }} title={m.text}><i>{m.i + 1}</i></span>)}
        <b>HOY</b><small>{first}</small>
      </div>
      <ol className="gl-life-rows">{moments.map((m, i) => <li key={i}>
        <span className="gl-life-number">{i + 1}</span>
        <input aria-label={`Momento ${i + 1}`} placeholder={m.kind === 'hecho' ? 'Un hecho: llegué a…, empecé…, conocí…' : 'Algo que sigue: vivo en…, trabajo en…'} value={m.text} onChange={event => edit(i, { text: event.target.value })} />
        <select aria-label={`Mes del momento ${i + 1}`} value={m.month} onChange={event => edit(i, { month: event.target.value })}><option value="">Mes</option>{months.map((name, mi) => <option key={name} value={mi + 1}>{name}</option>)}</select>
        <select aria-label={`Año del momento ${i + 1}`} value={m.year} onChange={event => edit(i, { year: event.target.value })}><option value="">Año</option>{years.map(y => <option key={y} value={y}>{y}</option>)}</select>
        <div className="gl-life-kind" role="group" aria-label={`Tipo del momento ${i + 1}`}>
          <button type="button" aria-pressed={m.kind === 'hecho'} onClick={() => edit(i, { kind: 'hecho' })}>● Hecho</button>
          <button type="button" aria-pressed={m.kind === 'sigue'} onClick={() => edit(i, { kind: 'sigue' })}>━ Sigue</button>
        </div>
        {help && <p className="gl-life-help" data-life-model={i}>{model(m)}</p>}
      </li>)}</ol>
      <div className="gl-row"><button type="button" className="gl-chip-button" disabled={moments.length >= 8} onClick={() => setMoments(prev => [...prev, blank('hecho')])}>＋ Añadir un momento</button><p className="gl-hint">Lo que escribes aquí no se guarda ni se envía: desaparece al cerrar la página.</p></div>
    </>}
  </section>;
}

/** The earlier 3D neighbourhood stays available as an optional extra. */
export function Barrio3D() {
  const [open, setOpen] = useState(false);
  return <section className="gl-card gl-barrio" data-barrio>
    <header className="gl-card-head"><h3>Extra: el barrio 3D</h3><button type="button" className="gl-chip-button" data-open-scene aria-pressed={open} onClick={() => setOpen(v => !v)}>{open ? 'Cerrar el barrio' : 'Abrir el barrio 3D'}</button></header>
    {open ? <div className="du-immersive"><DurationScene /></div> : <p className="gl-hint">Cuatro lugares de un barrio y un calendario para crear más ejemplos. Es opcional: úsalo si quieren practicar un poco más.</p>}
  </section>;
}
