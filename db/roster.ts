/**
 * One roster per teacher: every Homework learner belongs to exactly one student of «Mis alumnos».
 * Links live in their own additive table so neither students nor Homework tables change shape.
 */
export type RosterLink = { learnerId: string; studentId: string };

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

export async function listLinks(db: D1Database, ownerId: string): Promise<RosterLink[]> {
  const rows = await db.prepare("SELECT learner_id, student_id FROM student_homework_links WHERE owner_id = ?").bind(ownerId).all<{ learner_id: string; student_id: string }>();
  return rows.results.map((row) => ({ learnerId: row.learner_id, studentId: row.student_id }));
}

/**
 * Gives every named Homework learner (a student who opened their link and wrote their name) without
 * a link its own student, once. Unused links stay in the «sin usar» panel until the student names
 * themselves. The link insert is the lock: the student row is only written when this request's link won, so two tabs never
 * duplicate. A learner whose student the teacher deleted keeps its old link and is not imported again.
 * All learners go in one batch, so the first visit imports the whole roster in a single round trip.
 */
export async function syncRoster(db: D1Database, ownerId: string, now = new Date().toISOString(), id = () => crypto.randomUUID()): Promise<number> {
  const pending = await db.prepare(`SELECT l.id, l.alias, (SELECT p.level FROM autoestudio_passes p WHERE p.learner_id = l.id AND p.owner_id = l.owner_id ORDER BY p.created_at DESC LIMIT 1) AS level
    FROM autoestudio_learners l WHERE l.owner_id = ? AND l.alias IS NOT NULL
    AND NOT EXISTS (SELECT 1 FROM student_homework_links k WHERE k.owner_id = l.owner_id AND k.learner_id = l.id) ORDER BY l.created_at LIMIT 200`).bind(ownerId).all<{ id: string; alias: string | null; level: string | null }>();
  if (!pending.results.length) return 0;
  const statements = pending.results.flatMap((learner) => {
    const studentId = id();
    const known = learner.level && LEVELS.includes(learner.level) ? learner.level.toUpperCase() : null;
    const alias = learner.alias?.trim() || "Alumno";
    return [
      db.prepare("INSERT OR IGNORE INTO student_homework_links (owner_id, learner_id, student_id, created_at) VALUES (?, ?, ?, ?)").bind(ownerId, learner.id, studentId, now),
      db.prepare(`INSERT INTO students (id, owner_id, alias, last_name, email, level, goal, status, created_at, updated_at)
        SELECT ?, ?, ?, NULL, NULL, ?, '', 'active', ?, ? WHERE EXISTS (SELECT 1 FROM student_homework_links WHERE owner_id = ? AND learner_id = ? AND student_id = ?)`)
        .bind(studentId, ownerId, alias.slice(0, 80), known ?? "Sin definir", now, now, ownerId, learner.id, studentId),
    ];
  });
  const results = await db.batch(statements);
  return results.filter((result, index) => index % 2 === 0 && result.meta.changes).length;
}

/** Moves (or attaches) a Homework learner to one of this teacher's students. Both must belong to the teacher. */
export async function linkLearner(db: D1Database, ownerId: string, learnerId: string, studentId: string, now = new Date().toISOString()): Promise<boolean> {
  const owned = await db.prepare(`SELECT
      (SELECT 1 FROM autoestudio_learners WHERE id = ? AND owner_id = ?) AS learner,
      (SELECT 1 FROM students WHERE id = ? AND owner_id = ?) AS student`).bind(learnerId, ownerId, studentId, ownerId).first<{ learner: number | null; student: number | null }>();
  if (!owned?.learner || !owned.student) return false;
  await db.prepare(`INSERT INTO student_homework_links (owner_id, learner_id, student_id, created_at) VALUES (?, ?, ?, ?)
    ON CONFLICT(owner_id, learner_id) DO UPDATE SET student_id = excluded.student_id`).bind(ownerId, learnerId, studentId, now).run();
  return true;
}
