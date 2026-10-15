'use client';
import { useEffect, useState, type FormEvent } from 'react';
import type { SyncState } from './store';

type Student = { id: string; alias: string; lastName: string | null; status: string };
type Session = { studentId: string; pos: { stage: number; step: number } | null; updatedAt: number };

const label = (student: Student) => student.lastName ? `${student.alias} ${student.lastName}` : student.alias;
const syncLine: Record<SyncState, string> = { local: '', loading: 'Cargando…', saving: 'Guardando…', saved: 'Guardado en tu cuenta', error: 'Sin conexión: no se guardó' };

/**
 * Teacher mode: which student this class is for. Each student's answers and position live in the
 * teacher's account («Mis alumnos»), so the next class opens where that student left off.
 */
export function StudentBar({ lessonId, level, studentId, onSelect, onReset, sync, where }: {
  lessonId: number; level: string; studentId: string | null; onSelect: (id: string | null) => void; onReset: () => void; sync: SyncState; where?: string;
}) {
  const [students, setStudents] = useState<Student[] | null | undefined>(undefined);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch('/api/students', { cache: 'no-store', credentials: 'same-origin' })
      .then(async response => (response.ok ? (await response.json() as { students: Student[] }).students : null))
      .then(list => { if (alive) setStudents(list ? list.filter(student => student.status !== 'archived') : null); })
      .catch(() => { if (alive) setStudents(null); });
    fetch(`/api/live-class?lessonId=${lessonId}`, { cache: 'no-store', credentials: 'same-origin' })
      .then(async response => (response.ok ? (await response.json() as { sessions: Session[] }).sessions : []))
      .then(list => { if (alive) setSessions(list); })
      .catch(() => undefined);
    return () => { alive = false; };
  }, [lessonId]);

  // Not signed in to an account with students: the class works as before, without the bar.
  if (students === null) return null;

  const started = new Set(sessions.filter(session => session.pos && (session.pos.stage > 0 || session.pos.step > 0)).map(session => session.studentId));
  const current = students?.find(student => student.id === studentId);

  const add = async (event: FormEvent) => {
    event.preventDefault();
    const alias = name.trim();
    if (!alias || busy) return;
    setBusy(true); setError(null);
    try {
      const response = await fetch('/api/students', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ alias, level: /^(A1|A2|B1|B2|C1|C2)$/.test(level) ? level : 'Sin definir' }) });
      const body = await response.json() as { student?: Student; error?: string };
      if (!response.ok || !body.student) throw new Error(body.error || 'No pudimos crear el alumno.');
      setStudents(prev => [...(prev ?? []), body.student!].sort((a, b) => a.alias.localeCompare(b.alias, 'es')));
      setName(''); setAdding(false);
      onSelect(body.student.id);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'No pudimos crear el alumno.');
    } finally { setBusy(false); }
  };

  return <div className="gl-student" data-student-bar data-sync={sync}>
    <label className="gl-student-pick">
      <span aria-hidden="true">🧑‍🎓</span>
      <b>Alumno</b>
      <select value={studentId ?? ''} data-student-select disabled={students === undefined} onChange={event => { setConfirming(false); onSelect(event.target.value || null); }}>
        <option value="">{students === undefined ? 'Cargando…' : 'Elegir alumno…'}</option>
        {students?.map(student => <option key={student.id} value={student.id}>{label(student)}{started.has(student.id) ? ' · empezó' : ''}</option>)}
      </select>
    </label>
    {!adding
      ? <button type="button" className="gl-student-add" data-student-new onClick={() => { setAdding(true); setError(null); }}>+ Nuevo alumno</button>
      : <form className="gl-student-form" onSubmit={add}>
          <input type="text" value={name} maxLength={80} placeholder="Nombre del alumno" aria-label="Nombre del alumno" autoFocus onChange={event => setName(event.target.value)} />
          <button type="submit" className="gl-chip-button" disabled={busy || !name.trim()}>Guardar</button>
          <button type="button" className="gl-student-add" onClick={() => { setAdding(false); setName(''); setError(null); }}>Cancelar</button>
        </form>}
    {error && <span className="gl-student-error" role="alert">{error}</span>}
    {current && (confirming
      ? <span className="gl-student-confirm">
          <span>¿Borrar el progreso de {current.alias} en esta clase?</span>
          <button type="button" className="gl-chip-button gl-accent" data-student-reset-confirm onClick={() => { setConfirming(false); onReset(); }}>Sí, empezar de cero</button>
          <button type="button" className="gl-student-add" onClick={() => setConfirming(false)}>No</button>
        </span>
      : <button type="button" className="gl-student-add" data-student-reset onClick={() => setConfirming(true)}>Empezar de cero</button>)}
    {current && <span className="gl-student-state" aria-live="polite">
      {where && <>Retomamos en <b>{where}</b> · </>}{syncLine[sync]}
    </span>}
  </div>;
}
