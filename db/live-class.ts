/** Per-student progress of the live grammar classes («Con profesor»). `owner_id` is the teacher's
 *  internal users.id and `student_id` one of their students; the saved class store travels as JSON. */
export const LIVE_CLASS_SAVED_LIMIT = 64 * 1024;

export type LiveClassSaved = { values: Record<string, unknown>; results: Record<string, unknown>; pos?: { stage: number; step: number } };
export type LiveClassSummary = { studentId: string; pos: { stage: number; step: number } | null; updatedAt: number };

const nowSeconds = () => Math.floor(Date.now() / 1000);

/** Accepts only the shape the class store writes; anything else is dropped so a bad save never breaks a class. */
export function parseLiveClassSaved(raw: unknown): LiveClassSaved | null {
  if (!raw || typeof raw !== 'object') return null;
  const { values, results, pos } = raw as Record<string, unknown>;
  if (!values || typeof values !== 'object' || Array.isArray(values)) return null;
  if (!results || typeof results !== 'object' || Array.isArray(results)) return null;
  const saved: LiveClassSaved = { values: values as Record<string, unknown>, results: results as Record<string, unknown> };
  if (pos && typeof pos === 'object') {
    const { stage, step } = pos as Record<string, unknown>;
    if (Number.isInteger(stage) && Number.isInteger(step) && Number(stage) >= 0 && Number(step) >= 0) saved.pos = { stage: Number(stage), step: Number(step) };
  }
  return JSON.stringify(saved).length > LIVE_CLASS_SAVED_LIMIT ? null : saved;
}

export async function ownsStudent(db: D1Database, ownerId: string, studentId: string): Promise<boolean> {
  const row = await db.prepare('SELECT 1 AS ok FROM students WHERE owner_id = ? AND id = ? LIMIT 1').bind(ownerId, studentId).first<{ ok: number }>();
  return Boolean(row);
}

/** Every student with a saved session for this lesson, most recent first. */
export async function listLiveClassSessions(db: D1Database, ownerId: string, lessonId: number): Promise<LiveClassSummary[]> {
  const result = await db
    .prepare('SELECT student_id AS studentId, saved, updated_at AS updatedAt FROM live_class_sessions WHERE owner_id = ? AND lesson_id = ? ORDER BY updated_at DESC LIMIT 500')
    .bind(ownerId, lessonId)
    .all<{ studentId: string; saved: string; updatedAt: number }>();
  return result.results.map(row => {
    let pos: LiveClassSummary['pos'] = null;
    try { pos = parseLiveClassSaved(JSON.parse(row.saved))?.pos ?? null; } catch { /* unreadable save: offered as a fresh start */ }
    return { studentId: row.studentId, pos, updatedAt: row.updatedAt };
  });
}

/** Every class this student has a saved session for: the course map measures them, one by one. */
export async function listStudentLiveClasses(db: D1Database, ownerId: string, studentId: string): Promise<{ lessonId: number; saved: LiveClassSaved; updatedAt: number }[]> {
  const result = await db
    .prepare('SELECT lesson_id AS lessonId, saved, updated_at AS updatedAt FROM live_class_sessions WHERE owner_id = ? AND student_id = ? ORDER BY lesson_id LIMIT 1000')
    .bind(ownerId, studentId)
    .all<{ lessonId: number; saved: string; updatedAt: number }>();
  return result.results.flatMap(row => {
    try {
      const saved = parseLiveClassSaved(JSON.parse(row.saved));
      return saved ? [{ lessonId: row.lessonId, saved, updatedAt: row.updatedAt }] : [];
    } catch { return []; }
  });
}

export async function getLiveClassSession(db: D1Database, ownerId: string, studentId: string, lessonId: number): Promise<{ saved: LiveClassSaved; updatedAt: number } | null> {
  const row = await db
    .prepare('SELECT saved, updated_at AS updatedAt FROM live_class_sessions WHERE owner_id = ? AND student_id = ? AND lesson_id = ? LIMIT 1')
    .bind(ownerId, studentId, lessonId)
    .first<{ saved: string; updatedAt: number }>();
  if (!row) return null;
  try {
    const saved = parseLiveClassSaved(JSON.parse(row.saved));
    return saved ? { saved, updatedAt: row.updatedAt } : null;
  } catch { return null; }
}

export async function putLiveClassSession(db: D1Database, ownerId: string, studentId: string, lessonId: number, saved: LiveClassSaved): Promise<number> {
  const updatedAt = nowSeconds();
  await db
    .prepare(`INSERT INTO live_class_sessions (owner_id, student_id, lesson_id, saved, updated_at) VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(owner_id, student_id, lesson_id) DO UPDATE SET saved = excluded.saved, updated_at = excluded.updated_at`)
    .bind(ownerId, studentId, lessonId, JSON.stringify(saved), updatedAt)
    .run();
  return updatedAt;
}

export async function deleteLiveClassSession(db: D1Database, ownerId: string, studentId: string, lessonId: number): Promise<void> {
  await db.prepare('DELETE FROM live_class_sessions WHERE owner_id = ? AND student_id = ? AND lesson_id = ?').bind(ownerId, studentId, lessonId).run();
}
