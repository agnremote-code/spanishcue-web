-- Additive, retry-safe acquisition storage. No existing tables or data change.
CREATE TABLE IF NOT EXISTS academy_demo_requests (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  institution TEXT NOT NULL,
  email TEXT NOT NULL,
  teachers TEXT NOT NULL CHECK (teachers IN ('1-5','6-15','16-30','31-50','51+')),
  message TEXT NOT NULL DEFAULT '',
  consent_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS academy_demo_requests_created ON academy_demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS academy_demo_requests_email_created ON academy_demo_requests(email, created_at);
