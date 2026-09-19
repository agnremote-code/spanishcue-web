import { env } from "cloudflare:workers";

type FounderLeadInput = {
  email: string;
  normalizedEmail: string;
  displayName: string | null;
  accountId: string | null;
  sourcePath: string;
  offerPriceCents: number;
  offerRevision: number;
  maxTeachers: number;
};

function binding() {
  if (!env.DB) throw new Error("La lista de fundadores no está disponible.");
  return env.DB;
}

export async function reserveFounderLead(input: FounderLeadInput) {
  const db = binding();
  const existing = await db
    .prepare("SELECT id FROM founder_leads WHERE normalized_email = ? LIMIT 1")
    .bind(input.normalizedEmail)
    .first<{ id: number }>();

  const now = Date.now();
  if (existing) {
    await db
      .prepare("UPDATE founder_leads SET email = ?, display_name = COALESCE(?, display_name), account_id = COALESCE(?, account_id), source_path = ?, updated_at = ? WHERE id = ?")
      .bind(input.email, input.displayName, input.accountId, input.sourcePath, now, existing.id)
      .run();
    return { reserved: true, alreadyReserved: true };
  }

  const created = await db
    .prepare(`INSERT INTO founder_leads (
      email, normalized_email, display_name, account_id, source_path,
      offer_price_cents, offer_revision, status, marketing_consent_at,
      created_at, updated_at
    )
    SELECT ?, ?, ?, ?, ?, ?, ?, 'reserved', ?, ?, ?
    WHERE (SELECT COUNT(*) FROM founder_leads WHERE status = 'reserved') < ?
    RETURNING id`)
    .bind(
      input.email,
      input.normalizedEmail,
      input.displayName,
      input.accountId,
      input.sourcePath,
      input.offerPriceCents,
      input.offerRevision,
      now,
      now,
      now,
      input.maxTeachers,
    )
    .first<{ id: number }>();

  return { reserved: Boolean(created), alreadyReserved: false };
}
