-- Additive, retry-safe. Never rewrites existing Autoestudio tables or learner data.
-- Error history is append-only: a later correct answer only fills corrected_at.
CREATE TABLE IF NOT EXISTS homework_errors (
 id TEXT PRIMARY KEY NOT NULL,
 learner_id TEXT NOT NULL REFERENCES autoestudio_learners(id) ON DELETE CASCADE,
 owner_id TEXT NOT NULL,
 pass_id TEXT NOT NULL,
 level TEXT NOT NULL CHECK(level IN ('a1','a2','b1','b2','c1','c2')),
 module_id TEXT NOT NULL,
 section TEXT NOT NULL,
 exercise_id TEXT NOT NULL,
 item_index INTEGER NOT NULL CHECK(item_index >= 0),
 exercise_type TEXT NOT NULL,
 question TEXT NOT NULL,
 answer_given TEXT NOT NULL,
 answer_correct TEXT NOT NULL,
 explanation TEXT NOT NULL DEFAULT '',
 category TEXT NOT NULL,
 category_label TEXT NOT NULL,
 attempt INTEGER NOT NULL CHECK(attempt > 0),
 verdict TEXT NOT NULL CHECK(verdict IN ('wrong','accent')),
 created_at TEXT NOT NULL,
 corrected_at TEXT
);
CREATE INDEX IF NOT EXISTS homework_errors_learner_time ON homework_errors(learner_id, created_at);
CREATE INDEX IF NOT EXISTS homework_errors_owner ON homework_errors(owner_id, learner_id);
CREATE TABLE IF NOT EXISTS homework_teacher_notes (
 id TEXT PRIMARY KEY NOT NULL,
 owner_id TEXT NOT NULL,
 learner_id TEXT NOT NULL REFERENCES autoestudio_learners(id) ON DELETE CASCADE,
 category TEXT NOT NULL,
 kind TEXT NOT NULL CHECK(kind IN ('note','worked')),
 text TEXT NOT NULL DEFAULT '',
 created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS homework_teacher_notes_learner ON homework_teacher_notes(owner_id, learner_id, created_at);
CREATE TABLE IF NOT EXISTS homework_events (
 id TEXT PRIMARY KEY NOT NULL,
 learner_id TEXT NOT NULL REFERENCES autoestudio_learners(id) ON DELETE CASCADE,
 owner_id TEXT NOT NULL,
 kind TEXT NOT NULL CHECK(kind IN ('recommended','opened','previewed','gated')),
 lesson_id INTEGER NOT NULL,
 category TEXT NOT NULL,
 module_id TEXT NOT NULL DEFAULT '',
 created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS homework_events_learner ON homework_events(learner_id, created_at);
