import type { AccountAccess, AccessLevel, TeacherAccount } from "../app/account-types";
import { TEACHER_LIBRARY_PRODUCT } from "../app/account-types";
import { PRO_PRODUCT_CODE } from "../app/billing-config";
import {
  isOwnerUser,
  type FirebaseUser,
  type OwnerIdentity,
} from "../app/firebase-session";

const FIREBASE_PROVIDER = "firebase";

// A grant entitles full access when it is an owner/manual library grant, or a
// billing grant whose backing subscription is a Live provider subscription.
// access_grants has no environment column, so the environment comes from the
// subscription the grant references (provider subscription ID). Sandbox
// payments never unlock PRO.
const ENTITLED_GRANT_SQL = `(
  g.product_code = '${TEACHER_LIBRARY_PRODUCT}'
  OR (
    g.product_code = '${PRO_PRODUCT_CODE}'
    AND g.source = 'billing'
    AND EXISTS (
      SELECT 1 FROM billing_subscriptions s
      WHERE s.user_id = g.user_id
        AND s.product_code = g.product_code
        AND s.provider_subscription_id = g.source_reference
        AND s.environment = 'live'
    )
  )
)`;

type AccountRow = {
  userId: string;
  email: string;
  displayName: string | null;
  role: string;
  status: string;
  accessLevel: string;
  accessSource: string | null;
  accessExpiresAt: number | null;
};

function nowSeconds() {
  return Math.floor(Date.now() / 1000);
}

function normalizedEmail(email: string) {
  return email.trim().toLowerCase();
}

function accountFromRow(row: AccountRow | null): AccountAccess | null {
  if (!row) return null;
  return {
    userId: row.userId,
    email: row.email,
    displayName: row.displayName,
    role: row.role === "owner" ? "owner" : "teacher",
    status: row.status === "disabled" ? "disabled" : "active",
    accessLevel: row.accessLevel === "full" ? "full" : "free",
    accessSource: row.accessSource,
    accessExpiresAt: row.accessExpiresAt,
  };
}

async function readAccessBySubject(
  db: D1Database,
  provider: string,
  subject: string,
): Promise<AccountAccess | null> {
  const now = nowSeconds();
  const row = await db
    .prepare(
      `SELECT
        u.id AS userId,
        u.email AS email,
        u.display_name AS displayName,
        u.role AS role,
        u.status AS status,
        CASE
          WHEN u.status != 'active' THEN 'free'
          WHEN u.role = 'owner' THEN 'full'
          WHEN EXISTS (
            SELECT 1 FROM access_grants g
            WHERE g.user_id = u.id
              AND ${ENTITLED_GRANT_SQL}
              AND g.access_level = 'full'
              AND g.status = 'active'
              AND g.starts_at <= ?
              AND (g.expires_at IS NULL OR g.expires_at > ?)
          ) THEN 'full'
          ELSE 'free'
        END AS accessLevel,
        (
          SELECT g.source FROM access_grants g
          WHERE g.user_id = u.id
            AND ${ENTITLED_GRANT_SQL}
            AND g.access_level = 'full'
            AND g.status = 'active'
            AND g.starts_at <= ?
            AND (g.expires_at IS NULL OR g.expires_at > ?)
          ORDER BY CASE g.source WHEN 'owner' THEN 0 WHEN 'billing' THEN 1 ELSE 2 END, g.id
          LIMIT 1
        ) AS accessSource,
        (
          SELECT g.expires_at FROM access_grants g
          WHERE g.user_id = u.id
            AND ${ENTITLED_GRANT_SQL}
            AND g.access_level = 'full'
            AND g.status = 'active'
            AND g.starts_at <= ?
            AND (g.expires_at IS NULL OR g.expires_at > ?)
          ORDER BY CASE g.source WHEN 'owner' THEN 0 WHEN 'billing' THEN 1 ELSE 2 END, g.id
          LIMIT 1
        ) AS accessExpiresAt
      FROM auth_identities i
      JOIN users u ON u.id = i.user_id
      WHERE i.provider = ? AND i.provider_subject = ?
      LIMIT 1`,
    )
    .bind(
      now,
      now,
      now,
      now,
      now,
      now,
      provider,
      subject,
    )
    .first<AccountRow>();
  return accountFromRow(row);
}

export async function resolveFirebaseAccount(
  db: D1Database,
  user: FirebaseUser,
): Promise<AccountAccess | null> {
  return readAccessBySubject(db, FIREBASE_PROVIDER, user.uid);
}

export async function syncFirebaseAccount(
  db: D1Database,
  user: FirebaseUser,
  ownerIdentity?: OwnerIdentity,
): Promise<AccountAccess> {
  if (!user.emailVerified) throw new Error("EMAIL_NOT_VERIFIED");
  const now = nowSeconds();
  const email = normalizedEmail(user.email);
  const owner = isOwnerUser(user, ownerIdentity);
  const candidateId = crypto.randomUUID();
  const existingIdentity = await db
    .prepare(
      `SELECT user_id AS userId FROM auth_identities
      WHERE provider = ? AND provider_subject = ? LIMIT 1`,
    )
    .bind(FIREBASE_PROVIDER, user.uid)
    .first<{ userId: string }>();

  const account = existingIdentity
    ? await db
        .prepare(
          `UPDATE users SET
            email = ?,
            normalized_email = ?,
            display_name = COALESCE(?, display_name),
            role = CASE WHEN role = 'owner' OR ? = 'owner' THEN 'owner' ELSE role END,
            updated_at = ?,
            last_sign_in_at = ?
          WHERE id = ?
          RETURNING id`,
        )
        .bind(
          user.email,
          email,
          user.displayName,
          owner ? "owner" : "teacher",
          now,
          now,
          existingIdentity.userId,
        )
        .first<{ id: string }>()
    : await db
        .prepare(
          `INSERT INTO users (
            id, email, normalized_email, display_name, role, status,
            created_at, updated_at, last_sign_in_at
          ) VALUES (?, ?, ?, ?, ?, 'active', ?, ?, ?)
          ON CONFLICT(normalized_email) DO UPDATE SET
            email = excluded.email,
            display_name = COALESCE(excluded.display_name, users.display_name),
            role = CASE
              WHEN users.role = 'owner' OR excluded.role = 'owner' THEN 'owner'
              ELSE users.role
            END,
            updated_at = excluded.updated_at,
            last_sign_in_at = excluded.last_sign_in_at
          RETURNING id`,
        )
        .bind(
          candidateId,
          user.email,
          email,
          user.displayName,
          owner ? "owner" : "teacher",
          now,
          now,
          now,
        )
        .first<{ id: string }>();

  if (!account?.id) throw new Error("Account provisioning failed.");

  const statements = [
    db
      .prepare(
        `INSERT INTO auth_identities (
          user_id, provider, provider_subject, provider_email,
          email_verified, created_at, last_seen_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(provider, provider_subject) DO UPDATE SET
          user_id = excluded.user_id,
          provider_email = excluded.provider_email,
          email_verified = excluded.email_verified,
          last_seen_at = excluded.last_seen_at`,
      )
      .bind(
        account.id,
        FIREBASE_PROVIDER,
        user.uid,
        user.email,
        user.emailVerified ? 1 : 0,
        now,
        now,
      ),
  ];

  if (owner) {
    statements.push(
      db
        .prepare(
          `INSERT INTO access_grants (
            user_id, product_code, access_level, source, source_reference,
            plan_code, status, starts_at, expires_at, created_at, updated_at
          ) VALUES (?, ?, 'full', 'owner', NULL, 'owner', 'active', ?, NULL, ?, ?)
          ON CONFLICT(user_id, product_code, source) DO UPDATE SET
            access_level = 'full', status = 'active', expires_at = NULL,
            updated_at = excluded.updated_at`,
        )
        .bind(account.id, TEACHER_LIBRARY_PRODUCT, now, now, now),
    );
  }

  await db.batch(statements);
  const access = await readAccessBySubject(db, FIREBASE_PROVIDER, user.uid);
  if (!access) throw new Error("Account access could not be resolved.");
  return access;
}

export async function listTeacherAccounts(
  db: D1Database,
  limit = 100,
): Promise<TeacherAccount[]> {
  const safeLimit = Math.max(1, Math.min(200, Math.trunc(limit)));
  const now = nowSeconds();
  const result = await db
    .prepare(
      `SELECT
        u.id AS userId,
        u.email AS email,
        u.display_name AS displayName,
        u.role AS role,
        u.status AS status,
        CASE
          WHEN u.status != 'active' THEN 'free'
          WHEN u.role = 'owner' THEN 'full'
          WHEN EXISTS (
            SELECT 1 FROM access_grants g
            WHERE g.user_id = u.id
              AND ${ENTITLED_GRANT_SQL}
              AND g.access_level = 'full'
              AND g.status = 'active'
              AND g.starts_at <= ?
              AND (g.expires_at IS NULL OR g.expires_at > ?)
          ) THEN 'full'
          ELSE 'free'
        END AS accessLevel,
        (
          SELECT g.source FROM access_grants g
          WHERE g.user_id = u.id
            AND ${ENTITLED_GRANT_SQL}
            AND g.access_level = 'full'
            AND g.status = 'active'
            AND g.starts_at <= ?
            AND (g.expires_at IS NULL OR g.expires_at > ?)
          ORDER BY CASE g.source WHEN 'owner' THEN 0 WHEN 'billing' THEN 1 ELSE 2 END, g.id
          LIMIT 1
        ) AS accessSource,
        (
          SELECT g.expires_at FROM access_grants g
          WHERE g.user_id = u.id
            AND ${ENTITLED_GRANT_SQL}
            AND g.access_level = 'full'
            AND g.status = 'active'
            AND g.starts_at <= ?
            AND (g.expires_at IS NULL OR g.expires_at > ?)
          ORDER BY CASE g.source WHEN 'owner' THEN 0 WHEN 'billing' THEN 1 ELSE 2 END, g.id
          LIMIT 1
        ) AS accessExpiresAt,
        u.created_at AS createdAt,
        u.last_sign_in_at AS lastSignInAt
      FROM users u
      ORDER BY u.last_sign_in_at DESC, u.id
      LIMIT ?`,
    )
    .bind(
      now,
      now,
      now,
      now,
      now,
      now,
      safeLimit,
    )
    .all<AccountRow & { createdAt: number; lastSignInAt: number }>();

  return result.results.map((row) => ({
    ...(accountFromRow(row) as AccountAccess),
    createdAt: row.createdAt,
    lastSignInAt: row.lastSignInAt,
  }));
}

export async function setManualTeacherAccess(
  db: D1Database,
  userId: string,
  level: AccessLevel,
): Promise<AccountAccess | null> {
  const user = await db
    .prepare("SELECT role FROM users WHERE id = ? LIMIT 1")
    .bind(userId)
    .first<{ role: string }>();
  if (!user) return null;
  if (user.role === "owner" && level === "free") {
    throw new Error("OWNER_ACCESS_IS_PERMANENT");
  }

  const now = nowSeconds();
  if (level === "full") {
    await db
      .prepare(
        `INSERT INTO access_grants (
          user_id, product_code, access_level, source, source_reference,
          plan_code, status, starts_at, expires_at, created_at, updated_at
        ) VALUES (?, ?, 'full', 'manual', NULL, 'manual', 'active', ?, NULL, ?, ?)
        ON CONFLICT(user_id, product_code, source) DO UPDATE SET
          access_level = 'full', status = 'active', starts_at = excluded.starts_at,
          expires_at = NULL, updated_at = excluded.updated_at`,
      )
      .bind(userId, TEACHER_LIBRARY_PRODUCT, now, now, now)
      .run();
  } else {
    await db
      .prepare(
        `UPDATE access_grants
        SET status = 'revoked', updated_at = ?
        WHERE user_id = ? AND product_code = ? AND source = 'manual'`,
      )
      .bind(now, userId, TEACHER_LIBRARY_PRODUCT)
      .run();
  }

  const identity = await db
    .prepare(
      `SELECT provider, provider_subject AS subject
      FROM auth_identities WHERE user_id = ? ORDER BY id LIMIT 1`,
    )
    .bind(userId)
    .first<{ provider: string; subject: string }>();
  return identity
    ? readAccessBySubject(db, identity.provider, identity.subject)
    : null;
}
