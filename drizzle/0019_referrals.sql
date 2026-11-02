-- Additive, retry-safe referral storage («Invitá a un colega»): one code per account,
-- one referral per referred account and one free-month reward per side.
-- No existing tables or data change.
CREATE TABLE IF NOT EXISTS referral_codes (
  user_id TEXT PRIMARY KEY NOT NULL,
  code TEXT NOT NULL UNIQUE,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS referrals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  referrer_user_id TEXT NOT NULL,
  referred_user_id TEXT NOT NULL UNIQUE,
  referred_subscription_id TEXT,
  qualified_at INTEGER,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS referrals_referrer ON referrals(referrer_user_id, created_at DESC);
CREATE TABLE IF NOT EXISTS referral_rewards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  referral_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('referrer','referred')),
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued','applied','used')),
  subscription_id TEXT,
  applied_at INTEGER,
  used_at INTEGER,
  created_at INTEGER NOT NULL,
  UNIQUE (referral_id, role)
);
CREATE INDEX IF NOT EXISTS referral_rewards_user_status ON referral_rewards(user_id, status, id);
