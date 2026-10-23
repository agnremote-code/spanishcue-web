CREATE TABLE IF NOT EXISTS institutions (
 id TEXT PRIMARY KEY NOT NULL,
 name TEXT NOT NULL CHECK(length(name) BETWEEN 2 AND 120),
 created_by TEXT NOT NULL REFERENCES users(id),
 status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active','disabled')),
 created_at INTEGER NOT NULL,
 updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS institutions_creator ON institutions(created_by,created_at);
CREATE TABLE IF NOT EXISTS institution_memberships (
 institution_id TEXT NOT NULL REFERENCES institutions(id),
 user_id TEXT NOT NULL REFERENCES users(id),
 role TEXT NOT NULL CHECK(role IN ('administrator','teacher')),
 status TEXT NOT NULL CHECK(status IN ('active','revoked')),
 seat_allocated INTEGER NOT NULL DEFAULT 0 CHECK(seat_allocated IN (0,1)),
 created_at INTEGER NOT NULL,
 updated_at INTEGER NOT NULL,
 PRIMARY KEY(institution_id,user_id),
 CHECK(status='active' OR seat_allocated=0)
);
CREATE INDEX IF NOT EXISTS institution_memberships_user ON institution_memberships(user_id,status,seat_allocated);
CREATE TABLE IF NOT EXISTS institution_licenses (
 institution_id TEXT PRIMARY KEY NOT NULL REFERENCES institutions(id),
 seats INTEGER NOT NULL CHECK(seats BETWEEN 0 AND 1000),
 starts_at INTEGER NOT NULL,
 expires_at INTEGER NOT NULL CHECK(expires_at>starts_at),
 provisioned_by TEXT NOT NULL REFERENCES users(id),
 updated_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS institution_invitations (
 id TEXT PRIMARY KEY NOT NULL,
 institution_id TEXT NOT NULL REFERENCES institutions(id),
 email TEXT NOT NULL,
 role TEXT NOT NULL CHECK(role IN ('administrator','teacher')),
 token_hash TEXT NOT NULL UNIQUE,
 invited_by TEXT NOT NULL REFERENCES users(id),
 status TEXT NOT NULL CHECK(status IN ('sending','sent','failed','accepted','revoked')),
 expires_at INTEGER NOT NULL,
 accepted_by TEXT REFERENCES users(id),
 created_at INTEGER NOT NULL,
 updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS institution_invitations_scope ON institution_invitations(institution_id,created_at);
CREATE INDEX IF NOT EXISTS institution_invitations_sender ON institution_invitations(invited_by,created_at);
