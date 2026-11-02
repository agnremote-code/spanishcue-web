-- Additive, retry-safe account-sharing signals (owner decision 2026-11-02: warn in Admin, never block).
-- account_devices keeps only a SHA-256 of a random HttpOnly device cookie, never the cookie itself.
-- account_daily_usage counts PRO lesson opens per account and UTC day. No existing tables or data change.
CREATE TABLE IF NOT EXISTS account_devices (
  account_id TEXT NOT NULL,
  device_hash TEXT NOT NULL CHECK (length(device_hash) = 64),
  label TEXT NOT NULL,
  first_seen INTEGER NOT NULL,
  last_seen INTEGER NOT NULL,
  PRIMARY KEY (account_id, device_hash)
);
CREATE INDEX IF NOT EXISTS account_devices_last_seen ON account_devices(last_seen, account_id);
CREATE TABLE IF NOT EXISTS account_daily_usage (
  account_id TEXT NOT NULL,
  day TEXT NOT NULL CHECK (length(day) = 10),
  premium_opens INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (account_id, day)
);
CREATE INDEX IF NOT EXISTS account_daily_usage_day ON account_daily_usage(day, premium_opens);
