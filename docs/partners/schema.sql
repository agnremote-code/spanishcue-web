-- Proposed additive partner storage. Production application requires a dedicated
-- authorized migration release; NOT part of automatic deployment/migrations.
-- Existing Workers are compatible: no existing table, row or index changes.
CREATE TABLE IF NOT EXISTS partner_applications (
 id TEXT PRIMARY KEY NOT NULL,
 name TEXT NOT NULL, organization TEXT NOT NULL, email TEXT NOT NULL,
 website TEXT NOT NULL DEFAULT '', country TEXT NOT NULL, audience TEXT NOT NULL,
 message TEXT NOT NULL DEFAULT '', consent_at INTEGER NOT NULL, created_at INTEGER NOT NULL,
 status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','approved','rejected','paused')),
 code TEXT UNIQUE, agreement_reference TEXT, approved_at INTEGER,
 CHECK(status NOT IN ('approved','paused') OR (code IS NOT NULL AND agreement_reference IS NOT NULL AND approved_at IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS partner_application_inbox ON partner_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS partner_application_rate ON partner_applications(email,created_at);
CREATE TABLE IF NOT EXISTS partner_attributions (
 user_id TEXT PRIMARY KEY NOT NULL,
 partner_id TEXT NOT NULL REFERENCES partner_applications(id),
 clicked_at INTEGER NOT NULL, attributed_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS partner_payment_adjustments (
 payment_id INTEGER PRIMARY KEY NOT NULL,
 refunded_cents INTEGER NOT NULL CHECK(refunded_cents BETWEEN 0 AND 1990),
 evidence TEXT NOT NULL, recorded_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS partner_settlements (
 id TEXT PRIMARY KEY NOT NULL,
 partner_id TEXT NOT NULL REFERENCES partner_applications(id),
 external_reference TEXT NOT NULL UNIQUE,
 reconciliation_reference TEXT NOT NULL,
 amount_cents INTEGER NOT NULL CHECK(amount_cents>0),
 snapshot_json TEXT NOT NULL CHECK(json_valid(snapshot_json)),
 created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS partner_settlement_partner ON partner_settlements(partner_id,created_at);
CREATE TABLE IF NOT EXISTS partner_audit (
 id TEXT PRIMARY KEY NOT NULL, partner_id TEXT NOT NULL,
 action TEXT NOT NULL, detail TEXT NOT NULL, created_at INTEGER NOT NULL
);
