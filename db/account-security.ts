// Account-sharing signals for PRO accounts (drizzle/0020_account_security.sql).
// Owner decision 2026-11-02: these only feed a warning list in Admin → Seguridad; nothing here blocks access.

export const DEVICE_COOKIE = "spanishcue_device";
export const DEVICE_COOKIE_MAX_AGE = 400 * 24 * 60 * 60;
export const DEVICE_ALERT_THRESHOLD = 3;
export const DEVICE_WINDOW_DAYS = 30;
export const DAILY_OPENS_ALERT_THRESHOLD = 150;
export const DAILY_WINDOW_DAYS = 7;

const DEVICE_ID = /^[0-9a-f]{64}$/;

export function deviceIdFromCookie(cookieHeader: string | null): string | null {
  for (const part of (cookieHeader ?? "").split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === DEVICE_COOKIE) {
      const value = rest.join("=").trim();
      return DEVICE_ID.test(value) ? value : null;
    }
  }
  return null;
}

export function newDeviceId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function deviceCookieHeader(deviceId: string): string {
  return `${DEVICE_COOKIE}=${deviceId}; Max-Age=${DEVICE_COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

export async function deviceHash(deviceId: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`device:v1:${deviceId}`));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

// Coarse, human-readable label ("Chrome · Windows"); never the raw user agent.
export function deviceLabel(userAgent: string | null): string {
  const ua = userAgent ?? "";
  const browser = /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Firefox\//.test(ua) ? "Firefox"
    : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "Otro navegador";
  const system = /iPhone|iPad/.test(ua) ? "iOS" : /Android/.test(ua) ? "Android" : /Windows/.test(ua) ? "Windows"
    : /Mac OS X|Macintosh/.test(ua) ? "macOS" : /CrOS/.test(ua) ? "ChromeOS" : /Linux/.test(ua) ? "Linux" : "otro sistema";
  return `${browser} · ${system}`;
}

export function usageDay(now: Date): string {
  return now.toISOString().slice(0, 10);
}

export async function recordPremiumOpen(
  db: D1Database,
  accountId: string,
  hash: string,
  label: string,
  now: Date,
): Promise<void> {
  const seconds = Math.floor(now.getTime() / 1000);
  await db.batch([
    db
      .prepare(
        `INSERT INTO account_devices (account_id, device_hash, label, first_seen, last_seen)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(account_id, device_hash) DO UPDATE SET label = excluded.label, last_seen = excluded.last_seen`,
      )
      .bind(accountId, hash, label.slice(0, 60), seconds, seconds),
    db
      .prepare(
        `INSERT INTO account_daily_usage (account_id, day, premium_opens) VALUES (?, ?, 1)
        ON CONFLICT(account_id, day) DO UPDATE SET premium_opens = premium_opens + 1`,
      )
      .bind(accountId, usageDay(now)),
  ]);
}

export type SharingAlert = {
  accountId: string;
  email: string | null;
  devices: number;
  deviceLabels: string[];
  peakOpens: number;
  peakDay: string | null;
};

export async function listSharingAlerts(db: D1Database, now: Date): Promise<SharingAlert[]> {
  const since = Math.floor(now.getTime() / 1000) - DEVICE_WINDOW_DAYS * 24 * 60 * 60;
  const fromDay = usageDay(new Date(now.getTime() - (DAILY_WINDOW_DAYS - 1) * 24 * 60 * 60 * 1000));
  const [devices, usage] = await db.batch<{ account_id: string; devices?: number; labels?: string; peak?: number; day?: string }>([
    db
      .prepare(
        `SELECT account_id, COUNT(*) AS devices, GROUP_CONCAT(label, '|') AS labels
        FROM account_devices WHERE last_seen >= ? GROUP BY account_id HAVING COUNT(*) > ?`,
      )
      .bind(since, DEVICE_ALERT_THRESHOLD),
    db
      .prepare(
        `SELECT account_id, MAX(premium_opens) AS peak, day
        FROM account_daily_usage WHERE day >= ? AND premium_opens > ? GROUP BY account_id`,
      )
      .bind(fromDay, DAILY_OPENS_ALERT_THRESHOLD),
  ]);
  const alerts = new Map<string, SharingAlert>();
  const entry = (accountId: string) => {
    const existing = alerts.get(accountId);
    if (existing) return existing;
    const created: SharingAlert = { accountId, email: null, devices: 0, deviceLabels: [], peakOpens: 0, peakDay: null };
    alerts.set(accountId, created);
    return created;
  };
  for (const row of devices.results ?? []) {
    const alert = entry(row.account_id);
    alert.devices = Number(row.devices ?? 0);
    alert.deviceLabels = (row.labels ?? "").split("|").filter(Boolean);
  }
  for (const row of usage.results ?? []) {
    const alert = entry(row.account_id);
    alert.peakOpens = Number(row.peak ?? 0);
    alert.peakDay = row.day ?? null;
  }
  if (alerts.size) {
    const ids = [...alerts.keys()];
    const emails = await db
      .prepare(`SELECT id, email FROM users WHERE id IN (${ids.map(() => "?").join(",")})`)
      .bind(...ids)
      .all<{ id: string; email: string }>();
    for (const row of emails.results ?? []) {
      const alert = alerts.get(row.id);
      if (alert) alert.email = row.email;
    }
  }
  return [...alerts.values()].sort((a, b) => b.devices - a.devices || b.peakOpens - a.peakOpens);
}
