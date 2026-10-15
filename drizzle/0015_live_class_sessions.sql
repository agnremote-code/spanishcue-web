-- Additive and idempotent: where a teacher left each live grammar class with each student.
-- One row per teacher account, student («Mis alumnos») and lesson; `saved` is the class store (answers, results, position).
CREATE TABLE IF NOT EXISTS live_class_sessions (
 owner_id TEXT NOT NULL,
 student_id TEXT NOT NULL,
 lesson_id INTEGER NOT NULL CHECK(lesson_id > 0),
 saved TEXT NOT NULL,
 updated_at INTEGER NOT NULL,
 PRIMARY KEY (owner_id, student_id, lesson_id)
);
CREATE INDEX IF NOT EXISTS live_class_sessions_owner_lesson ON live_class_sessions(owner_id, lesson_id, updated_at);
