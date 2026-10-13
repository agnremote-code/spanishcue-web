/** Account favorites. `user_id` is the internal users.id, like lesson_progress. */
export const FAVORITES_LIMIT = 500;

export type FavoriteRecord = { lessonId: number; createdAt: number };

const nowSeconds = () => Math.floor(Date.now() / 1000);

export async function listFavorites(db: D1Database, userId: string): Promise<FavoriteRecord[]> {
  const result = await db
    .prepare(
      `SELECT lesson_id AS lessonId, created_at AS createdAt FROM lesson_favorites
       WHERE user_id = ? ORDER BY created_at DESC, lesson_id LIMIT ?`,
    )
    .bind(userId, FAVORITES_LIMIT)
    .all<FavoriteRecord>();
  return result.results;
}

/** Adds lessons (already validated against the catalog); existing favorites keep their date. */
export async function addFavorites(db: D1Database, userId: string, lessonIds: number[]): Promise<void> {
  if (!lessonIds.length) return;
  const count = await db
    .prepare("SELECT COUNT(*) AS n FROM lesson_favorites WHERE user_id = ?")
    .bind(userId)
    .first<{ n: number }>();
  const room = Math.max(0, FAVORITES_LIMIT - (count?.n ?? 0));
  const now = nowSeconds();
  const statements = lessonIds.slice(0, room).map((lessonId) =>
    db
      .prepare("INSERT OR IGNORE INTO lesson_favorites (user_id, lesson_id, created_at) VALUES (?, ?, ?)")
      .bind(userId, lessonId, now),
  );
  if (statements.length) await db.batch(statements);
}

export async function removeFavorite(db: D1Database, userId: string, lessonId: number): Promise<void> {
  await db
    .prepare("DELETE FROM lesson_favorites WHERE user_id = ? AND lesson_id = ?")
    .bind(userId, lessonId)
    .run();
}
