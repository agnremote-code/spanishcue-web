-- Additive only. Production application requires the dedicated migration release.
CREATE TABLE autoestudio_learners (
 id TEXT PRIMARY KEY NOT NULL,
 owner_id TEXT NOT NULL,
 alias TEXT,
 created_at TEXT NOT NULL
);
CREATE UNIQUE INDEX autoestudio_learners_id_owner ON autoestudio_learners(id, owner_id);
CREATE INDEX autoestudio_learners_owner ON autoestudio_learners(owner_id, created_at);
CREATE TABLE autoestudio_passes (
 id TEXT PRIMARY KEY NOT NULL,
 owner_id TEXT NOT NULL,
 learner_id TEXT NOT NULL,
 level TEXT NOT NULL CHECK(level IN ('a1','a2','b1','b2','c1','c2')),
 revision INTEGER NOT NULL DEFAULT 1 CHECK(revision > 0),
 revoked_at TEXT,
 created_at TEXT NOT NULL,
 FOREIGN KEY(learner_id, owner_id) REFERENCES autoestudio_learners(id, owner_id) ON DELETE CASCADE
);
CREATE INDEX autoestudio_passes_owner ON autoestudio_passes(owner_id, created_at);
CREATE TABLE autoestudio_progress (
 learner_id TEXT NOT NULL REFERENCES autoestudio_learners(id) ON DELETE CASCADE,
 module_id TEXT NOT NULL,
 started_at TEXT NOT NULL,
 updated_at TEXT NOT NULL,
 sections TEXT NOT NULL DEFAULT '{}',
 last_section TEXT,
 completed_at TEXT,
 quiz_score INTEGER,
 quiz_total INTEGER,
 quiz_best INTEGER,
 quiz_attempts INTEGER,
 quiz_at TEXT,
 PRIMARY KEY(learner_id, module_id)
);
-- Fixed hash buckets bound rate-limit storage regardless of attacker identities.
CREATE TABLE autoestudio_rate_limits (
 bucket INTEGER PRIMARY KEY NOT NULL CHECK(bucket >= 0 AND bucket < 4096),
 window INTEGER NOT NULL,
 hits INTEGER NOT NULL
);
