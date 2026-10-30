-- Additive, retry-safe newsletter storage (email capture popup + gift grammar class).
-- No existing tables or data change.
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id TEXT PRIMARY KEY NOT NULL,
  email TEXT NOT NULL,
  normalized_email TEXT NOT NULL UNIQUE,
  source_path TEXT NOT NULL DEFAULT '/',
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','unsubscribed')),
  unsubscribe_token TEXT NOT NULL UNIQUE,
  consent_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  unsubscribed_at TEXT
);
CREATE INDEX IF NOT EXISTS newsletter_subscribers_status_created ON newsletter_subscribers(status, created_at DESC);
