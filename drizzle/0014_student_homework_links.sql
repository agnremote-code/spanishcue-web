CREATE TABLE IF NOT EXISTS student_homework_links (owner_id TEXT NOT NULL, learner_id TEXT NOT NULL, student_id TEXT NOT NULL, created_at TEXT NOT NULL, PRIMARY KEY (owner_id, learner_id));
CREATE INDEX IF NOT EXISTS student_homework_links_student ON student_homework_links(owner_id, student_id);
