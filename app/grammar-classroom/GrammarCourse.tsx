'use client';
import { useEffect, useMemo, useState } from 'react';
import type { CourseRow } from './course';
import { savedProgress } from './live/progress';
import styles from './course.module.css';

type Student = { id: string; alias: string; lastName: string | null; status: string };
type Measured = { done: number; total: number; started: boolean };
type State = 'planned' | 'todo' | 'started' | 'done';

const stateLabel: Record<State, string> = { planned: 'Próximamente', todo: 'Sin empezar', started: 'En curso', done: 'Completada' };
// The very first class sits with A1, as in the library: no level group with a single class.
const courseLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelGroup = (level: string) => (courseLevels.includes(level) ? level : courseLevels[0]);
const classNumber = (sequence: number) => `Clase ${String(sequence).padStart(3, '0')}`;
const STUDENT_KEY = 'spanishcue:gramatica:course-student';
const read = (key: string) => { try { return window.localStorage.getItem(key); } catch { return null; } };
const write = (key: string, value: string) => { try { window.localStorage.setItem(key, value); } catch { /* the choice lasts this visit */ } };
const label = (student: Student) => student.lastName ? `${student.alias} ${student.lastName}` : student.alias;

/**
 * The grammar course in its pedagogical order (G001 → G236). Filters narrow the list, never reorder it.
 * Progress is measured from real answers: this browser's self-study, or one student's classes saved in
 * the teacher's account («Mis alumnos»). Nothing is locked: a teacher opens any class.
 */
export default function GrammarCourse({ rows, topics }: { rows: CourseRow[]; topics: { id: string; label: string }[] }) {
  const [level, setLevel] = useState<string>('all');
  const [topic, setTopic] = useState('all');
  const [onlyLive, setOnlyLive] = useState(false);
  const [students, setStudents] = useState<Student[] | null>(null);
  const [student, setStudent] = useState('');
  const [measured, setMeasured] = useState<Map<number, Measured> | null>(null);
  const [error, setError] = useState(false);

  // Signed-in teachers can read a student's classes; visitors only have this browser.
  useEffect(() => {
    let alive = true;
    fetch('/api/students', { cache: 'no-store', credentials: 'same-origin' })
      .then(async response => (response.ok ? (await response.json() as { students: Student[] }).students : null))
      .then(list => {
        if (!alive || !list) return;
        const active = list.filter(item => item.status !== 'archived');
        setStudents(active);
        const saved = read(STUDENT_KEY);
        if (saved && active.some(item => item.id === saved)) setStudent(saved);
      })
      .catch(() => undefined);
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    let alive = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setError(false);
    if (!student) {
      const local = new Map<number, Measured>();
      for (const row of rows) {
        if (!row.sections.length) continue;
        const raw = read(`spanishcue:gramatica:${row.catalogId}:v1`);
        if (!raw) continue;
        try { local.set(row.catalogId, savedProgress((JSON.parse(raw) as { results?: unknown }).results, row.sections)); } catch { /* unreadable save: not started */ }
      }
      setMeasured(local);
      return;
    }
    setMeasured(null);
    fetch(`/api/live-class?studentId=${encodeURIComponent(student)}`, { cache: 'no-store', credentials: 'same-origin' })
      .then(async response => {
        if (!response.ok) throw new Error(String(response.status));
        const body = await response.json() as { progress: ({ lessonId: number } & Measured)[] };
        if (alive) setMeasured(new Map(body.progress.map(item => [item.lessonId, item])));
      })
      .catch(() => { if (alive) { setError(true); setMeasured(new Map()); } });
    return () => { alive = false; };
  }, [student, rows]);

  const stateOf = (row: CourseRow): State => {
    if (row.status === 'planned') return 'planned';
    const m = measured?.get(row.catalogId);
    if (!m || (!m.started && !m.done)) return 'todo';
    return m.total > 0 && m.done >= m.total ? 'done' : 'started';
  };
  const live = rows.filter(row => row.status === 'live');
  const completed = measured ? live.filter(row => stateOf(row) === 'done').length : 0;
  const suggestion = measured ? live.find(row => stateOf(row) === 'started') ?? live.find(row => stateOf(row) !== 'done') : undefined;
  const visible = useMemo(() => rows.filter(row => (level === 'all' || levelGroup(row.level) === level) && (topic === 'all' || row.category === topic) && (!onlyLive || row.status === 'live')), [rows, level, topic, onlyLive]);

  const chooseStudent = (id: string) => { setStudent(id); write(STUDENT_KEY, id); };
  // Opening a class for a student: the class starts in teacher mode with that student selected.
  const open = (row: CourseRow) => { if (student) { write(`spanishcue:gramatica:student:${row.catalogId}`, student); write('spanishcue:gramatica:mode', 'teacher'); } };

  return <div className={styles.course} data-course>
    <div className={styles.summary}>
      <div className={styles.source}>
        <span className={styles.sourceLabel}>Progreso de</span>
        {students && students.length > 0 ? <select value={student} onChange={event => chooseStudent(event.target.value)} aria-label="Progreso de">
          <option value="">Este navegador (Por mi cuenta)</option>
          {students.map(item => <option key={item.id} value={item.id}>{label(item)}</option>)}
        </select> : <b>este navegador</b>}
      </div>
      <p className={styles.count} data-course-count>{measured ? <><b>{completed}</b> de {live.length} clases disponibles completadas · {rows.length} clases en el curso</> : 'Cargando el progreso…'}</p>
      {error && <p className={styles.error} role="alert">No pudimos cargar el progreso de este alumno.</p>}
      {suggestion && <a className={styles.next} href={suggestion.href} onClick={() => open(suggestion)} data-course-next={suggestion.code}>
        <small>{stateOf(suggestion) === 'started' ? 'Continuar' : 'Siguiente clase sugerida'}</small>
        <span>{classNumber(suggestion.sequence)} · {suggestion.title}</span>
      </a>}
    </div>

    <div className={styles.filters} role="group" aria-label="Filtrar el curso">
      <div className={styles.chips}>
        {['all', ...courseLevels].map(value => <button type="button" key={value} aria-pressed={level === value} onClick={() => setLevel(value)} data-course-level={value}>{value === 'all' ? 'Todos los niveles' : value}</button>)}
      </div>
      <label className={styles.topic}>Tema
        <select value={topic} onChange={event => setTopic(event.target.value)} data-course-topic>
          <option value="all">Todos los temas</option>
          {topics.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </label>
      <label className={styles.only}><input type="checkbox" checked={onlyLive} onChange={event => setOnlyLive(event.target.checked)} /> Solo clases disponibles</label>
    </div>

    <ol className={styles.list}>
      {visible.map((row, index) => {
        const state = stateOf(row);
        const heading = index === 0 || levelGroup(visible[index - 1].level) !== levelGroup(row.level);
        const m = measured?.get(row.catalogId);
        const body = <>
          <span className={styles.number}>{classNumber(row.sequence)}<small>{row.code}</small></span>
          <span className={styles.title}>{row.title}<small>{row.categoryLabel}{row.prerequisites.length > 0 && <> · Antes: {row.prerequisites.map(n => String(n).padStart(3, '0')).join(', ')}</>}</small></span>
          <span className={styles.state} data-state={state}>{stateLabel[state]}{state === 'started' && m ? ` · ${m.done}/${m.total}` : ''}</span>
        </>;
        return <li key={row.code} className={heading ? styles.levelStart : undefined} data-level-heading={heading ? levelGroup(row.level) : undefined} data-unit={row.code} data-state={measured ? state : undefined}>
          {row.status === 'live' ? <a className={styles.row} href={row.href} onClick={() => open(row)}>{body}</a> : <div className={styles.row} aria-disabled="true">{body}</div>}
        </li>;
      })}
    </ol>
    {visible.length === 0 && <p className={styles.empty}>No hay clases con estos filtros.</p>}
  </div>;
}
