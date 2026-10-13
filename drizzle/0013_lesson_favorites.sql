-- Additive and idempotent: account-level favorite lessons. Safe to re-run on every deploy.
CREATE TABLE IF NOT EXISTS lesson_favorites (
 user_id TEXT NOT NULL,
 lesson_id INTEGER NOT NULL CHECK(lesson_id > 0),
 created_at INTEGER NOT NULL,
 PRIMARY KEY (user_id, lesson_id)
);
CREATE INDEX IF NOT EXISTS lesson_favorites_user_time ON lesson_favorites(user_id, created_at);
