export const VERIFICATION_COOLDOWN_SECONDS = 60;
const IN_FLIGHT_SECONDS = 300;

type Reservation =
  | { status: "reserved"; id: string }
  | { status: "duplicate"; sent: boolean }
  | { status: "limited"; retryAfterSeconds: number };

export async function reserveVerificationEmail(
  db: D1Database,
  input: { identity: string; recipient: string; kind: "initial" | "resend"; requestKey: string; now: number },
): Promise<Reservation> {
  const { identity, recipient, kind, now } = input;
  // A caller cannot turn a second signup request into a new initial delivery.
  const requestKey = kind === "initial" ? "initial" : input.requestKey;
  const id = crypto.randomUUID();
  // One atomic SQLite statement serializes reservations across Worker isolates.
  // Attempts count toward limits even when an upstream response is lost.
  const result = await db.prepare(`
    INSERT INTO verification_email_deliveries
      (id, identity, recipient, request_key, kind, status, requested_at)
    SELECT ?, ?, ?, ?, ?, 'sending', ?
    WHERE NOT EXISTS (
      SELECT 1 FROM verification_email_deliveries
      WHERE recipient = ? AND (requested_at > ? OR (status = 'sending' AND requested_at > ?))
    )
    AND (SELECT COUNT(*) FROM verification_email_deliveries WHERE recipient = ? AND requested_at > ?) < 5
    AND (SELECT COUNT(*) FROM verification_email_deliveries WHERE recipient = ? AND requested_at > ?) < 20
    ON CONFLICT(identity, request_key) DO NOTHING
  `).bind(id, identity, recipient, requestKey, kind, now,
    recipient, now - VERIFICATION_COOLDOWN_SECONDS, now - IN_FLIGHT_SECONDS,
    recipient, now - 3600, recipient, now - 86400).run();
  if (result.meta.changes === 1) return { status: "reserved", id };

  const duplicate = await db.prepare(`
    SELECT status FROM verification_email_deliveries WHERE identity = ? AND request_key = ?
  `).bind(identity, requestKey).first<{ status: string }>();
  if (duplicate) return { status: "duplicate", sent: duplicate.status === "sent" };

  const limits = await db.prepare(`
    SELECT MAX(requested_at) AS latest,
      MAX(CASE WHEN status = 'sending' THEN requested_at ELSE NULL END) AS pending,
      SUM(CASE WHEN requested_at > ? THEN 1 ELSE 0 END) AS hourly,
      MIN(CASE WHEN requested_at > ? THEN requested_at ELSE NULL END) AS first_hour,
      COUNT(*) AS daily, MIN(requested_at) AS first_day
    FROM verification_email_deliveries WHERE recipient = ? AND requested_at > ?
  `).bind(now - 3600, now - 3600, recipient, now - 86400).first<{
    latest: number | null; pending: number | null; hourly: number;
    first_hour: number | null; daily: number; first_day: number | null;
  }>();
  const until = Math.max(
    now + 1,
    (limits?.latest ?? 0) + VERIFICATION_COOLDOWN_SECONDS,
    (limits?.pending ?? 0) + IN_FLIGHT_SECONDS,
    (limits?.hourly ?? 0) >= 5 ? (limits?.first_hour ?? now) + 3600 : 0,
    (limits?.daily ?? 0) >= 20 ? (limits?.first_day ?? now) + 86400 : 0,
  );
  return { status: "limited", retryAfterSeconds: until - now };
}

export async function finishVerificationEmail(
  db: D1Database,
  id: string,
  status: "sent" | "failed" | "unknown",
  providerId: string | null = null,
) {
  await db.prepare(`UPDATE verification_email_deliveries SET status = ?, provider_id = ? WHERE id = ?`)
    .bind(status, providerId, id).run();
}
