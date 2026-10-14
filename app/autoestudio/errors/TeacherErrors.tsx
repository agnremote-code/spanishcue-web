"use client";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { shareMessage } from '../share-messages';
import { sectionLabels } from '../engine/copy';
import type { SectionKey } from '../curriculum/types';
import type { LearnerErrorsResponse } from './server';
import type { CategorySummary, ErrorRecord } from './model';
import { categories as categoryMeta, type CategoryId } from './categorize';

export type TeacherTab = 'errores' | 'preparar' | 'recomendaciones';
type State = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready'; data: LearnerErrorsResponse };

const labels = sectionLabels.es;
const date = (value?: string | null) => value ? new Date(value).toLocaleString('es', { dateStyle: 'short', timeStyle: 'short' }) : '—';
const day = (value: string) => new Date(value).toLocaleDateString('es', { day: 'numeric', month: 'short' });
const week = (moduleId: string) => `Semana ${Number(moduleId.split('-')[1])}`;
const statusText: Record<CategorySummary['status'], string> = { refuerzo: 'Necesita refuerzo', atencion: 'Conviene repasar', leve: 'Error aislado', superado: 'Superado' };

async function api<T>(path: string, body?: unknown): Promise<T> {
  let r: Response;
  try { r = await fetch(`/api/autoestudio/${path}`, { method: body ? 'POST' : 'GET', cache: 'no-store', credentials: 'same-origin', ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}) }); }
  catch { throw Error('No hay conexión con SpanishCue. Revisa tu internet y vuelve a intentarlo.'); }
  let data: (T & { error?: string }) | null = null;
  try { data = await r.json(); } catch { /* handled below */ }
  if (!r.ok || !data) throw Error(r.status === 401 ? shareMessage('sign_in_required') : shareMessage(data?.error));
  return data;
}

/** Teacher view of one learner's recorded mistakes, class preparation and recommendations. */
export default function TeacherErrors({ learnerId, tab }: { learnerId: string; tab: TeacherTab }) {
  const [state, setState] = useState<State>({ status: 'loading' });
  const load = useCallback(() => {
    setState({ status: 'loading' });
    api<LearnerErrorsResponse>(`learners/${learnerId}/errors`).then(data => setState({ status: 'ready', data })).catch(e => setState({ status: 'error', message: e instanceof Error ? e.message : shareMessage(undefined) }));
  }, [learnerId]);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, [load]);
  const [notice, setNotice] = useState('');
  const act = useCallback(async (category: string, kind: 'note' | 'worked', text = '') => {
    setNotice('');
    try {
      await api(`learners/${learnerId}/notes`, { category, kind, text });
      setNotice(kind === 'worked' ? 'Marcado como trabajado en clase.' : 'Nota guardada.');
      const data = await api<LearnerErrorsResponse>(`learners/${learnerId}/errors`);
      setState({ status: 'ready', data });
    } catch (e) { setNotice(e instanceof Error ? e.message : shareMessage(undefined)); }
  }, [learnerId]);

  if (state.status === 'loading') return <div className="ae-detail-state" role="status"><span className="ae-spinner" aria-hidden="true" />Cargando los errores registrados…</div>;
  if (state.status === 'error') return <div className="ae-detail-state is-error" role="alert"><p>{state.message}</p><button type="button" onClick={load}>Reintentar</button></div>;
  const { data } = state;
  return <div className="ae-errors" data-tab={tab}>
    {notice && <p role="status" className="ae-errors-notice">{notice}</p>}
    {tab === 'errores' && <ErrorsView data={data} onAct={act} />}
    {tab === 'preparar' && <PlanView data={data} onAct={act} />}
    {tab === 'recomendaciones' && <RecommendationsView data={data} />}
  </div>;
}

function ErrorsView({ data, onAct }: { data: LearnerErrorsResponse; onAct: (category: string, kind: 'note' | 'worked', text?: string) => Promise<void> }) {
  const [category, setCategory] = useState('all');
  const [moduleId, setModuleId] = useState('all');
  const [activity, setActivity] = useState('all');
  const [noteFor, setNoteFor] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');
  const errors = useMemo(() => data.errors.filter(e => (category === 'all' || e.category === category) && (moduleId === 'all' || e.moduleId === moduleId) && (activity === 'all' || `${e.moduleId}|${e.section}|${e.exerciseId}` === activity)), [data.errors, category, moduleId, activity]);
  const recurrent = data.categories.reduce((n, c) => n + c.recurrent, 0);
  const corrected = data.errors.filter(e => e.correctedAt).length;
  const toReinforce = data.categories.filter(c => c.status === 'refuerzo' || c.status === 'atencion');
  const visibleCategories = data.categories.filter(c => category === 'all' || c.category === category);
  const nameOf = (c: CategorySummary) => categoryMeta[c.category]?.label ?? c.label;
  return <>
    <dl className="ae-detail-kpis">
      <div className="is-main"><dt>Errores registrados</dt><dd>{data.errors.length}</dd><small>{data.errors.length ? `Desde ${day(data.errors[data.errors.length - 1].createdAt)}` : 'Todavía ninguno'}</small></div>
      <div><dt>Recurrentes</dt><dd>{recurrent}</dd><small>El mismo tema en más de una actividad</small></div>
      <div><dt>Corregidos después</dt><dd>{corrected}</dd><small>El error original se conserva</small></div>
      <div><dt>Temas a reforzar</dt><dd>{toReinforce.length}</dd><small>{toReinforce.slice(0, 3).map(nameOf).join(' · ') || '—'}</small></div>
    </dl>
    {!data.errors.length ? <p className="ae-detail-state">Cuando este alumno resuelva actividades de Homework, cada respuesta incorrecta quedará registrada aquí con su pregunta, su respuesta, la correcta y la explicación.</p> : <>
      <div className="ae-errors-filters" role="group" aria-label="Filtrar errores">
        <label>Tema <select value={category} onChange={e => setCategory(e.target.value)}><option value="all">Todos</option>{data.categories.map(c => <option key={c.category} value={c.category}>{nameOf(c)} ({c.errors})</option>)}</select></label>
        <label>Semana <select value={moduleId} onChange={e => { setModuleId(e.target.value); setActivity('all'); }}><option value="all">Todas</option>{data.weeks.map(w => <option key={w.moduleId} value={w.moduleId}>{week(w.moduleId)} ({w.errors})</option>)}</select></label>
        <label>Actividad <select value={activity} onChange={e => setActivity(e.target.value)}><option value="all">Todas</option>{data.activities.filter(a => moduleId === 'all' || a.moduleId === moduleId).map(a => <option key={`${a.moduleId}|${a.section}|${a.exerciseId}`} value={`${a.moduleId}|${a.section}|${a.exerciseId}`}>{week(a.moduleId)} · {labels[a.section as SectionKey] ?? a.section} · {a.exerciseId} ({a.errors})</option>)}</select></label>
      </div>
      <h5>Por tema</h5>
      <ul className="ae-error-topics">{visibleCategories.map(c => <li key={c.category} className={`is-${c.status}`}>
        <div className="ae-error-topic-head">
          <div><b>{nameOf(c)}</b><span className={`ae-topic-status is-${c.status}`}>{statusText[c.status]}</span></div>
          <p>Errores: <b>{c.errors}</b> · Recurrentes: <b>{c.recurrent}</b> · Corregidos después: <b>{c.corrected}</b> · Actividades: {c.activities} · Último: {day(c.lastAt)}</p>
          {c.afterWork && <p className="ae-after-work">Trabajado en clase el {day(c.afterWork.workedAt)}: {c.afterWork.errorsAfter ? `${c.afterWork.errorsAfter} errores nuevos después` : 'sin errores nuevos después'}{c.afterWork.correctedAfter ? ` · ${c.afterWork.correctedAfter} corregidos después` : ''}.</p>}
          <div className="ae-topic-actions">
            <button type="button" onClick={() => void onAct(c.category, 'worked')}>Marcar como trabajado en clase</button>
            <button type="button" onClick={() => { setNoteFor(noteFor === c.category ? null : c.category); setNoteText(''); }}>Agregar nota</button>
          </div>
          {noteFor === c.category && <form className="ae-note-form" onSubmit={e => { e.preventDefault(); if (noteText.trim()) { void onAct(c.category, 'note', noteText.trim()); setNoteFor(null); } }}>
            <label>Nota del profesor <textarea value={noteText} onChange={e => setNoteText(e.target.value)} rows={2} maxLength={1000} /></label>
            <button type="submit" disabled={!noteText.trim()}>Guardar nota</button>
          </form>}
          {data.notes.filter(n => n.category === c.category && n.kind === 'note').length > 0 && <ul className="ae-notes">{data.notes.filter(n => n.category === c.category && n.kind === 'note').map(n => <li key={n.id}><small>{date(n.createdAt)}</small> {n.text}</li>)}</ul>}
        </div>
      </li>)}</ul>
      <h5>Errores ({errors.length})</h5>
      <ol className="ae-error-list">{errors.map(e => <ErrorRow key={e.id} error={e} />)}</ol>
      <h5>Evolución</h5>
      <ul className="ae-evolution">{data.evolution.map(b => <li key={b.from}><span>Semana del {day(b.from)}</span><span className="ae-meter" aria-hidden="true"><span style={{ width: `${Math.min(100, b.errors * 10)}%` }} /></span><span>{b.errors} {b.errors === 1 ? 'error' : 'errores'} · {b.recurrent} recurrentes · {b.corrected} corregidos</span></li>)}</ul>
    </>}
  </>;
}

function ErrorRow({ error }: { error: ErrorRecord }) {
  return <li className={error.correctedAt ? 'is-corrected' : ''}>
    <div className="ae-error-meta"><span>{week(error.moduleId)} · {labels[error.section as SectionKey] ?? error.section} · {error.exerciseId}{error.itemIndex ? ` · ítem ${error.itemIndex + 1}` : ''}</span><span>{date(error.createdAt)} · intento {error.attempt}</span></div>
    <p className="ae-error-question">{error.question.replace(/\*\*|`/g, '')}</p>
    <p><span className="ae-wrong">Respondió: {error.given}</span> <span className="ae-right">Correcto: {error.correct}</span></p>
    {error.explanation && <small>{error.explanation.replace(/\*\*|_|`/g, '')}</small>}
    <small className="ae-error-tags">{categoryMeta[error.category]?.label ?? error.categoryLabel}{error.verdict === 'accent' ? ' · solo tildes' : ''}{error.correctedAt ? ` · corregido el ${day(error.correctedAt)}` : ''}</small>
  </li>;
}

function PlanView({ data, onAct }: { data: LearnerErrorsResponse; onAct: (category: string, kind: 'note' | 'worked', text?: string) => Promise<void> }) {
  const [copied, setCopied] = useState(false);
  const plan = data.plan;
  const classesById = new Map(data.recommendations.flatMap(r => r.classes.map(c => [c.id, c] as const)));
  const text = [plan.summary, '', ...plan.priorities.flatMap(p => [`${p.label} — ${p.reason}`, ...p.exercises.map((x, i) => `  ${i + 1}. ${x.prompt} → ${x.answer}`), ...p.conversation.map(q => `  · ${q}`), ''])].join('\n');
  const copy = async () => { try { await navigator.clipboard.writeText(text); setCopied(true); } catch { setCopied(false); } };
  return <>
    <div className="ae-plan-summary"><p className="ae-detail-kicker">Resumen para la próxima clase</p><p>{plan.summary}</p>
      <div className="ae-topic-actions"><button type="button" onClick={() => void copy()}>{copied ? '✓ Copiado' : 'Copiar plan'}</button></div></div>
    {plan.priorities.map(p => <section key={p.category} className="ae-plan-block">
      <h5>{p.label} <span className={`ae-topic-status is-${p.status}`}>{p.reason}</span></h5>
      <h6>Ejercicios a partir de sus errores reales</h6>
      <ol>{p.exercises.map((x, i) => <li key={i}><b>{x.kind === 'corrige' ? 'Corrige' : x.kind === 'completa' ? 'Completa' : x.kind === 'elige' ? 'Elige' : 'Transforma'}:</b> {x.prompt} <details><summary>Respuesta</summary>{x.answer} <small>({x.source})</small></details></li>)}</ol>
      {p.conversation.length > 0 && <><h6>Preguntas para conversar en clase</h6><ul>{p.conversation.map(q => <li key={q}>{q}</li>)}</ul></>}
      {p.classroomClassIds.length > 0 && <p className="ae-plan-classes">Clases de SpanishCue para este tema: {p.classroomClassIds.map(id => classesById.get(id)).filter(Boolean).map(c => <a key={c!.id} href={c!.path} target="_blank" rel="noreferrer">{c!.title} ({c!.level})</a>)}</p>}
      <div className="ae-topic-actions"><button type="button" onClick={() => void onAct(p.category, 'worked')}>Marcar como trabajado en clase</button></div>
    </section>)}
    {!plan.priorities.length && data.errors.length > 0 && <p className="ae-detail-state">Todos los temas con errores están superados. Puedes revisar la pestaña de errores para ver el historial.</p>}
  </>;
}

function RecommendationsView({ data }: { data: LearnerErrorsResponse }) {
  if (!data.recommendations.length) return <p className="ae-detail-state">Todavía no hay clases recomendadas: aparecen cuando los errores del alumno coinciden con un tema que tiene una clase real en SpanishCue.</p>;
  return <ul className="ae-reco-list">{data.recommendations.map(r => <li key={r.category}>
    <div className="ae-error-topic-head"><div><b>{categoryMeta[r.category as CategoryId]?.label ?? r.label}</b><span className="ae-topic-status">prioridad {r.score}</span></div>
      <p>Motivo: {r.reason}. Errores que la originaron: {data.categories.find(c => c.category === r.category)?.examples.slice(0, 2).map(e => `«${e.given}» por «${e.correct}»`).join('; ')}.</p>
      <p>{r.shown ? `Mostrada al alumno ${r.shown} ${r.shown === 1 ? 'vez' : 'veces'}` : 'Todavía no se mostró en Homework'} · {r.opened ? 'Abrió la clase' : 'No abrió la clase'} · {r.previewed ? 'Usó la demostración' : 'No usó la demostración'}</p>
      <ul className="ae-reco-classes">{r.classes.map(c => <li key={c.id}><a href={c.path} target="_blank" rel="noreferrer">{c.title}</a> <small>{c.level} · {c.topic}{c.free ? ' · gratis' : ''}</small></li>)}</ul>
    </div>
  </li>)}</ul>;
}
