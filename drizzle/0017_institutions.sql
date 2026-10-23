-- Additive, retry-safe institutional accounts. No existing tables or data change.
-- Library access for members is written to access_grants with source 'institution',
-- so the account resolver and personal subscriptions stay exactly as they are.
CREATE TABLE IF NOT EXISTS institutions (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  city TEXT NOT NULL DEFAULT '',
  website TEXT NOT NULL DEFAULT '',
  seat_limit INTEGER NOT NULL DEFAULT 0 CHECK (seat_limit >= 0),
  created_by TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
-- One institution per account keeps a single institutional grant per user.
CREATE TABLE IF NOT EXISTS institution_members (
  institution_id TEXT NOT NULL,
  user_id TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('admin','teacher')),
  created_at INTEGER NOT NULL,
  PRIMARY KEY (institution_id, user_id)
);
CREATE INDEX IF NOT EXISTS institution_members_institution ON institution_members(institution_id, created_at);
CREATE TABLE IF NOT EXISTS institution_invitations (
  id TEXT PRIMARY KEY NOT NULL,
  institution_id TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin','teacher')),
  token_hash TEXT NOT NULL UNIQUE,
  created_by TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  accepted_at INTEGER,
  accepted_by TEXT,
  revoked_at INTEGER
);
CREATE INDEX IF NOT EXISTS institution_invitations_institution ON institution_invitations(institution_id, created_at DESC);
