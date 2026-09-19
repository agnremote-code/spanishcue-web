import Link from 'next/link';
import { lessons } from '../../lesson-catalog';
import { StudentTracker } from '../../student-tracker/StudentTracker';
import '../../teachers.css';

export default function StudentTrackerDemoPage() {
  return <div className="teacher-app"><main className="teacher-main">
    <Link href="/">← SpanishCue</Link>
    <div className="account-header"><div><p className="tracker-kicker">DEMO SEPARADA</p><h1>Mis alumnos</h1><p>DEMO · DATOS FICTICIOS · Ninguna acción escribe en tablas de clientes.</p></div></div>
    <StudentTracker demo={true} lessons={lessons.map(({ id, title }) => ({ id, title }))}/>
  </main></div>;
}
