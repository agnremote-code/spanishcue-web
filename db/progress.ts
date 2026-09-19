export type LessonProgressRecord = {
  lessonId: number;
  state: "opened" | "in_progress" | "completed";
  progressPercent: number;
  firstOpenedAt: number;
  lastOpenedAt: number;
  completedAt: number | null;
};

function nowSeconds() {
  return Math.floor(Date.now() / 1000);
}

export async function saveLessonProgress(
  db: D1Database,
  userId: string,
  lessonId: number,
  progressPercent = 0,
): Promise<void> {
  const now = nowSeconds();
  const percent = Math.max(0, Math.min(100, Math.trunc(progressPercent)));
  const state = percent >= 100 ? "completed" : percent > 0 ? "in_progress" : "opened";
  await db
    .prepare(
      `INSERT INTO lesson_progress (
        user_id, lesson_id, state, progress_percent,
        first_opened_at, last_opened_at, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(user_id, lesson_id) DO UPDATE SET
        state = CASE
          WHEN lesson_progress.progress_percent >= 100 OR excluded.progress_percent >= 100 THEN 'completed'
          WHEN MAX(lesson_progress.progress_percent, excluded.progress_percent) > 0 THEN 'in_progress'
          ELSE 'opened'
        END,
        progress_percent = MAX(lesson_progress.progress_percent, excluded.progress_percent),
        last_opened_at = excluded.last_opened_at,
        completed_at = CASE
          WHEN lesson_progress.completed_at IS NOT NULL THEN lesson_progress.completed_at
          WHEN excluded.progress_percent >= 100 THEN excluded.completed_at
          ELSE NULL
        END`,
    )
    .bind(
      userId,
      lessonId,
      state,
      percent,
      now,
      now,
      percent >= 100 ? now : null,
    )
    .run();
}

export async function listLessonProgress(
  db: D1Database,
  userId: string,
): Promise<LessonProgressRecord[]> {
  const result = await db
    .prepare(
      `SELECT
        lesson_id AS lessonId,
        state,
        progress_percent AS progressPercent,
        first_opened_at AS firstOpenedAt,
        last_opened_at AS lastOpenedAt,
        completed_at AS completedAt
      FROM lesson_progress
      WHERE user_id = ?
      ORDER BY last_opened_at DESC`,
    )
    .bind(userId)
    .all<LessonProgressRecord>();
  return result.results;
}
