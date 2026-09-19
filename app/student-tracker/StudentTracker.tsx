'use client';

import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { ClassRecord, Student, StudentLevel } from './contracts';
import { draftStorageKey } from './drafts';
import { isoToZonedLocal, zonedLocalToIso } from './time';

type LessonOption = { id: number; title: string };
type StudentDraft = { alias: string; lastName: string; email: string; level: StudentLevel; goal: string };
type ClassDraft = {
  studentId: string; lessonId: string; freeTitle: string; localDate: string; timezone: string;
  durationMinutes: string; status: 'planned' | 'taught'; pedagogicalNote: string; nextStep: string; requestKey: string;
};

const emptyStudent = (): StudentDraft => ({ alias: '', lastName: '', email: '', level: 'A1', goal: '' });
const requestKey = () => typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const localNow = () => {
  const date = new Date();
  return new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
};
const emptyClass = (): ClassDraft => ({
  studentId: '', lessonId: '', freeTitle: '', localDate: localNow(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC', durationMinutes: '60', status: 'planned',
  pedagogicalNote: '', nextStep: '', requestKey: requestKey(),
});

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, { ...init, headers: { 'content-type': 'application/json', ...init?.headers } });
  } catch {
    throw new Error('No pudimos conectar. El formulario sigue guardado en este navegador.');
  }
  const body = response.status === 204 ? null : await response.json().catch(() => null) as { error?: string; code?: string } | null;
  if (!response.ok) {
    const error = new Error(body?.error || 'No pudimos completar la operación.') as Error & { code?: string };
    error.code = body?.code;
    throw error;
  }
  return body as T;
}

const demoStudents: Student[] = [
  { id: 'demo-ana', ownerId: 'demo', alias: 'Ana (ficticia)', lastName: null, email: null, level: 'B1', goal: 'Conversar durante viajes', status: 'active', createdAt: '2026-09-01T10:00:00.000Z', updatedAt: '2026-09-01T10:00:00.000Z', lastClassAt: '2026-09-18T12:00:00.000Z' },
  { id: 'demo-lucas', ownerId: 'demo', alias: 'Lucas (ficticio)', lastName: null, email: null, level: 'A2', goal: 'Hablar en el trabajo', status: 'active', createdAt: '2026-09-02T10:00:00.000Z', updatedAt: '2026-09-02T10:00:00.000Z', lastClassAt: null },
];
const demoRecords: ClassRecord[] = [
  { id: 'demo-class', ownerId: 'demo', studentId: 'demo-ana', lessonId: 101, freeTitle: null, startsAt: '2026-09-18T12:00:00.000Z', timezone: 'UTC', durationMinutes: 60, status: 'taught', pedagogicalNote: 'Ejemplo ficticio: practicó el pasado.', nextStep: 'Ejemplo ficticio: narrar un viaje.', requestKey: 'demo-request', createdAt: '2026-09-18T13:00:00.000Z', updatedAt: '2026-09-18T13:00:00.000Z' },
];

export function StudentTracker({ lessons, draftScope = 'demo', demo = false, historyOnly = false }: { lessons: LessonOption[]; draftScope?: string; demo?: boolean; historyOnly?: boolean }) {
  const [students, setStudents] = useState<Student[]>(demo ? demoStudents : []);
  const [records, setRecords] = useState<ClassRecord[]>(demo ? demoRecords : []);
  const [studentDraft, setStudentDraft] = useState<StudentDraft>(emptyStudent);
  const [classDraft, setClassDraft] = useState<ClassDraft>(emptyClass);
  const [editingStudent, setEditingStudent] = useState<string | null>(null);
  const [editingRecord, setEditingRecord] = useState<string | null>(null);
  const [preEditDraft, setPreEditDraft] = useState<ClassDraft | null>(null);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [saving, setSaving] = useState(false);
  const [pendingDuplicate, setPendingDuplicate] = useState<ClassDraft | null>(null);
  const [loading, setLoading] = useState(!demo);
  const storageKey = useMemo(() => draftStorageKey(draftScope), [draftScope]);

  const load = useCallback(async () => {
    if (demo) return;
    setLoading(true);
    try {
      const [studentBody, recordBody] = await Promise.all([
        api<{ students: Student[] }>('/api/students'),
        api<{ records: ClassRecord[] }>('/api/class-records'),
      ]);
      setStudents(studentBody.students);
      setRecords(recordBody.records);
      setError('');
    } catch (caught) { setError((caught as Error).message); }
    finally { setLoading(false); }
  }, [demo]);

  useEffect(() => {
    if (demo) return;
    const saved = sessionStorage.getItem(storageKey);
    let draftTimer: ReturnType<typeof setTimeout> | undefined;
    if (saved) try {
      const parsed = JSON.parse(saved);
      draftTimer = setTimeout(() => setClassDraft({ ...emptyClass(), ...parsed }), 0);
    } catch { sessionStorage.removeItem(storageKey); }
    const loadTimer = setTimeout(() => void load(), 0);
    return () => { if (draftTimer) clearTimeout(draftTimer); clearTimeout(loadTimer); };
  }, [demo, load, storageKey]);

  useEffect(() => {
    if (!demo) sessionStorage.setItem(storageKey, JSON.stringify(classDraft));
  }, [classDraft, demo, storageKey]);

  const history = useMemo(
    () => records.filter((record) => !selectedStudent || record.studentId === selectedStudent).sort((a, b) => b.startsAt.localeCompare(a.startsAt)),
    [records, selectedStudent]
  );
  const studentName = (id: string) => students.find((student) => student.id === id)?.alias || 'Alumno eliminado';
  const lessonName = (record: ClassRecord) => record.lessonId ? lessons.find((lesson) => lesson.id === record.lessonId)?.title || `Clase #${record.lessonId}` : record.freeTitle || 'Clase libre';

  async function submitStudent(event: FormEvent) {
    event.preventDefault(); setSaving(true); setError('');
    try {
      if (demo) {
        const timestamp = new Date().toISOString();
        if (editingStudent) setStudents((all) => all.map((student) => student.id === editingStudent ? { ...student, ...studentDraft, lastName: studentDraft.lastName || null, email: studentDraft.email || null, updatedAt: timestamp } : student));
        else setStudents((all) => [...all, { id: `demo-${Date.now()}`, ownerId: 'demo', ...studentDraft, lastName: studentDraft.lastName || null, email: studentDraft.email || null, status: 'active', createdAt: timestamp, updatedAt: timestamp, lastClassAt: null }]);
      } else if (editingStudent) {
        await api(`/api/students/${editingStudent}`, { method: 'PATCH', body: JSON.stringify(studentDraft) });
        await load();
      } else {
        await api('/api/students', { method: 'POST', body: JSON.stringify(studentDraft) });
        await load();
      }
      setStudentDraft(emptyStudent()); setEditingStudent(null); setNotice('Ficha guardada.');
    } catch (caught) { setError((caught as Error).message); }
    finally { setSaving(false); }
  }

  function beginStudentEdit(student: Student) {
    setEditingStudent(student.id);
    setStudentDraft({ alias: student.alias, lastName: student.lastName || '', email: student.email || '', level: student.level, goal: student.goal });
  }

  async function toggleArchive(student: Student) {
    setSaving(true);
    try {
      const status = student.status === 'active' ? 'archived' : 'active';
      if (demo) setStudents((all) => all.map((item) => item.id === student.id ? { ...item, status } : item));
      else { await api(`/api/students/${student.id}`, { method: 'PATCH', body: JSON.stringify({ status }) }); await load(); }
    } catch (caught) { setError((caught as Error).message); }
    finally { setSaving(false); }
  }

  async function deleteStudent(student: Student) {
    if (!confirm(`Eliminar a ${student.alias} y todo su historial?`)) return;
    setSaving(true);
    try {
      if (demo) { setStudents((all) => all.filter((item) => item.id !== student.id)); setRecords((all) => all.filter((record) => record.studentId !== student.id)); }
      else { await api(`/api/students/${student.id}`, { method: 'DELETE' }); await load(); }
    } catch (caught) { setError((caught as Error).message); }
    finally { setSaving(false); }
  }

  const classPayload = (draft: ClassDraft, allowDuplicate = false) => ({
    studentId: draft.studentId,
    lessonId: draft.lessonId ? Number(draft.lessonId) : null,
    freeTitle: draft.freeTitle || null,
    startsAt: zonedLocalToIso(draft.localDate, draft.timezone),
    timezone: draft.timezone,
    durationMinutes: draft.durationMinutes ? Number(draft.durationMinutes) : null,
    status: draft.status,
    pedagogicalNote: draft.pedagogicalNote,
    nextStep: draft.nextStep,
    requestKey: draft.requestKey,
    allowDuplicate,
  });

  async function saveClass(draft: ClassDraft, allowDuplicate = false) {
    setSaving(true); setError(''); setPendingDuplicate(null);
    try {
      const payload = classPayload(draft, allowDuplicate);
      if (demo) {
        const timestamp = new Date().toISOString();
        if (editingRecord) setRecords((all) => all.map((record) => record.id === editingRecord ? { ...record, ...payload, lessonId: payload.lessonId, freeTitle: payload.freeTitle, updatedAt: timestamp } : record));
        else setRecords((all) => [{ id: `demo-class-${Date.now()}`, ownerId: 'demo', ...payload, createdAt: timestamp, updatedAt: timestamp }, ...all]);
      } else if (editingRecord) {
        await api(`/api/class-records/${editingRecord}`, { method: 'PATCH', body: JSON.stringify(payload) });
        await load();
      } else {
        await api('/api/class-records', { method: 'POST', body: JSON.stringify(payload) });
        await load();
      }
      setEditingRecord(null); setPreEditDraft(null); setClassDraft({ ...emptyClass(), studentId: draft.studentId });
      if (!demo) sessionStorage.removeItem(storageKey);
      setNotice('Clase registrada.');
    } catch (caught) {
      const typed = caught as Error & { code?: string };
      if (typed.code === 'probable_duplicate') setPendingDuplicate(draft);
      else setError(typed.message);
    } finally { setSaving(false); }
  }

  function submitClass(event: FormEvent) { event.preventDefault(); void saveClass(classDraft); }
  function beginRecordEdit(record: ClassRecord) {
    setPreEditDraft(classDraft); setEditingRecord(record.id);
    setClassDraft({
      studentId: record.studentId, lessonId: record.lessonId ? String(record.lessonId) : '', freeTitle: record.freeTitle || '',
      localDate: isoToZonedLocal(record.startsAt, record.timezone), timezone: record.timezone,
      durationMinutes: record.durationMinutes ? String(record.durationMinutes) : '', status: record.status,
      pedagogicalNote: record.pedagogicalNote, nextStep: record.nextStep, requestKey: requestKey(),
    });
  }
  function cancelRecordEdit() {
    setEditingRecord(null); setClassDraft(preEditDraft || emptyClass()); setPreEditDraft(null); setPendingDuplicate(null);
  }
  async function deleteRecord(record: ClassRecord) {
    if (!confirm('Eliminar este registro de clase?')) return;
    setSaving(true);
    try {
      if (demo) setRecords((all) => all.filter((item) => item.id !== record.id));
      else { await api(`/api/class-records/${record.id}`, { method: 'DELETE' }); await load(); }
    } catch (caught) { setError((caught as Error).message); }
    finally { setSaving(false); }
  }

  return <section className="student-tracker" aria-busy={loading}>
    {demo && <div className="tracker-demo-label">DEMO · DATOS FICTICIOS · NO SE GUARDA EN CUENTAS REALES</div>}
    {error && <div className="tracker-alert error" role="alert">{error} <button type="button" onClick={() => void load()}>Reintentar</button></div>}
    {notice && <div className="tracker-alert success" role="status">{notice}</div>}

    {!historyOnly && <>
      <div className="tracker-heading"><div><h2>Mis alumnos</h2><p>Fichas mínimas para organizar tu seguimiento pedagógico.</p></div>{!demo && <Link className="account-link" href="/api/students/export" prefetch={false} download>Exportar CSV</Link>}</div>
      <div className="tracker-layout">
        <form className="tracker-panel" onSubmit={submitStudent}>
          <h3>{editingStudent ? 'Editar ficha' : 'Agregar alumno'}</h3>
          <label>Alias o nombre de uso<input required maxLength={80} value={studentDraft.alias} onChange={(e) => setStudentDraft({ ...studentDraft, alias: e.target.value })}/></label>
          <div className="tracker-row"><label>Apellidos (opcional)<input maxLength={120} value={studentDraft.lastName} onChange={(e) => setStudentDraft({ ...studentDraft, lastName: e.target.value })}/></label><label>Email (opcional)<input type="email" maxLength={254} value={studentDraft.email} onChange={(e) => setStudentDraft({ ...studentDraft, email: e.target.value })}/></label></div>
          <label>Nivel<select value={studentDraft.level} onChange={(e) => setStudentDraft({ ...studentDraft, level: e.target.value as StudentLevel })}>{['A0','A1','A2','B1','B2','C1','C2','Sin definir'].map((level) => <option key={level}>{level}</option>)}</select></label>
          <label>Objetivo breve<textarea maxLength={300} value={studentDraft.goal} onChange={(e) => setStudentDraft({ ...studentDraft, goal: e.target.value })}/></label>
          <div className="tracker-actions"><button className="tracker-primary" disabled={saving}>{saving ? 'Guardando…' : 'Guardar ficha'}</button>{editingStudent && <button type="button" onClick={() => { setEditingStudent(null); setStudentDraft(emptyStudent()); }}>Cancelar edición</button>}</div>
        </form>
        <div className="tracker-panel"><h3>Alumnos ({students.length})</h3>{loading ? <p>Cargando…</p> : students.length === 0 ? <p className="tracker-empty">Todavía no agregaste alumnos.</p> : <div className="student-list">{students.map((student) => <article key={student.id} className={student.status === 'archived' ? 'is-archived' : ''}><div><strong>{student.alias}</strong><span>{student.level} · {student.status === 'active' ? 'Activo' : 'Archivado'}</span><small>Última clase: {student.lastClassAt ? new Date(student.lastClassAt).toLocaleDateString('es') : 'sin registros'}</small></div><div className="tracker-actions"><button type="button" onClick={() => { setSelectedStudent(student.id); setClassDraft({ ...classDraft, studentId: student.id }); }}>Registrar clase</button><button type="button" onClick={() => beginStudentEdit(student)}>Editar</button><button type="button" onClick={() => void toggleArchive(student)}>{student.status === 'active' ? 'Archivar' : 'Activar'}</button><button className="danger" type="button" onClick={() => void deleteStudent(student)}>Eliminar</button></div></article>)}</div>}</div>
      </div>

      <form className="tracker-panel class-form" onSubmit={submitClass}>
        <div className="tracker-heading"><div><h3>{editingRecord ? 'Editar registro' : 'Registrar clase'}</h3><p>Abrir una clase no la marca como impartida. Sólo se registra al guardar este formulario.</p></div></div>
        <fieldset><legend>1. Elegir alumno</legend><label>Alumno<select required value={classDraft.studentId} onChange={(e) => { setSelectedStudent(e.target.value); setClassDraft({ ...classDraft, studentId: e.target.value }); }}><option value="">Seleccionar…</option>{students.filter((student) => student.status === 'active' || student.id === classDraft.studentId).map((student) => <option key={student.id} value={student.id}>{student.alias}</option>)}</select></label></fieldset>
        <fieldset><legend>2. Clase</legend><div className="tracker-row"><label>Clase SpanishCue<select value={classDraft.lessonId} onChange={(e) => setClassDraft({ ...classDraft, lessonId: e.target.value, freeTitle: e.target.value ? '' : classDraft.freeTitle })}><option value="">Título libre</option>{lessons.map((lesson) => <option key={lesson.id} value={lesson.id}>#{lesson.id} · {lesson.title}</option>)}</select></label><label>Título libre<input maxLength={160} disabled={!!classDraft.lessonId} required={!classDraft.lessonId} value={classDraft.freeTitle} onChange={(e) => setClassDraft({ ...classDraft, freeTitle: e.target.value })}/></label></div></fieldset>
        <fieldset><legend>3. Confirmar fecha y estado</legend><div className="tracker-row"><label>Fecha y hora<input type="datetime-local" required value={classDraft.localDate} onChange={(e) => setClassDraft({ ...classDraft, localDate: e.target.value })}/></label><label>Zona horaria<input required maxLength={80} value={classDraft.timezone} onChange={(e) => setClassDraft({ ...classDraft, timezone: e.target.value })}/></label><label>Estado<select value={classDraft.status} onChange={(e) => setClassDraft({ ...classDraft, status: e.target.value as 'planned' | 'taught' })}><option value="planned">Planificada</option><option value="taught">Impartida</option></select></label><label>Duración opcional<input type="number" min={1} max={480} value={classDraft.durationMinutes} onChange={(e) => setClassDraft({ ...classDraft, durationMinutes: e.target.value })}/></label></div></fieldset>
        <label>Nota pedagógica<textarea maxLength={4000} rows={5} value={classDraft.pedagogicalNote} onChange={(e) => setClassDraft({ ...classDraft, pedagogicalNote: e.target.value })}/></label>
        <label>Próximo paso<textarea maxLength={1000} rows={3} value={classDraft.nextStep} onChange={(e) => setClassDraft({ ...classDraft, nextStep: e.target.value })}/></label>
        {pendingDuplicate && <div className="tracker-alert warning">Parece que esta clase ya fue registrada. <button type="button" disabled={saving} onClick={() => void saveClass({ ...pendingDuplicate, requestKey: requestKey() }, true)}>Guardar repetición intencional</button></div>}
        <div className="tracker-actions"><button className="tracker-primary" disabled={saving || !classDraft.studentId}>{saving ? 'Guardando…' : editingRecord ? 'Guardar cambios' : 'Guardar clase'}</button>{editingRecord && <button type="button" onClick={cancelRecordEdit}>Cancelar edición</button>}</div>
      </form>
    </>}

    <div className="tracker-panel history-panel"><div className="tracker-heading"><div><h2>Historial de clases</h2><p>{historyOnly ? 'Abrir una clase para prepararla no crea un registro.' : 'Filtrá por alumno para revisar su recorrido.'}</p></div><label>Alumno<select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}><option value="">Todos</option>{students.map((student) => <option key={student.id} value={student.id}>{student.alias}</option>)}</select></label></div>{history.length === 0 ? <p className="tracker-empty">No hay clases registradas.</p> : <div className="record-list">{history.map((record) => <article key={record.id}><div><strong>{lessonName(record)}</strong><span>{studentName(record.studentId)} · {new Date(record.startsAt).toLocaleString('es', { timeZone: record.timezone })} · {record.status === 'taught' ? 'Impartida' : 'Planificada'}</span>{record.pedagogicalNote && <p><b>Nota:</b> {record.pedagogicalNote}</p>}{record.nextStep && <p><b>Próximo paso:</b> {record.nextStep}</p>}</div>{!historyOnly && <div className="tracker-actions"><button type="button" onClick={() => beginRecordEdit(record)}>Editar</button><button className="danger" type="button" onClick={() => void deleteRecord(record)}>Eliminar</button></div>}</article>)}</div>}</div>
  </section>;
}
