import { deliverWelcome, enrollAccount, type Fetcher, type NewsletterEnvironment } from './server';

/** Mesa ejecutiva 2026-11-18: accounts created since 5-nov get the first mail of the profes sequence. */
export const ACCOUNT_BACKFILL_SINCE = Date.UTC(2026, 10, 5) / 1000;
export const ACCOUNT_BACKFILL_BATCH = 6;

/**
 * Free teacher accounts that never entered the list. Excluded: the owner, any account with an access grant
 * or a purchase claim (paying clients), emails already in newsletter_subscribers (subscribed or unsubscribed)
 * and the owner's own addresses.
 */
export async function pendingBackfillAccounts(db: D1Database, ownerEmail: string | undefined, limit = 5000) {
  const owner = (ownerEmail ?? '').trim().toLowerCase();
  const { results } = await db.prepare(`SELECT u.email AS email, u.created_at AS createdAt FROM users u
    WHERE u.created_at >= ? AND u.role <> 'owner' AND u.status = 'active'
      AND NOT EXISTS (SELECT 1 FROM access_grants g WHERE g.user_id = u.id)
      AND NOT EXISTS (SELECT 1 FROM billing_purchase_claims c WHERE c.normalized_email = u.normalized_email)
      AND NOT EXISTS (SELECT 1 FROM newsletter_subscribers s WHERE s.normalized_email = u.normalized_email)
      AND u.normalized_email <> ?
      AND u.normalized_email NOT LIKE '%agnremote%'
      AND u.normalized_email NOT LIKE '%@spanishcue.com'
      AND u.normalized_email NOT LIKE '%@englishcue.app'
    ORDER BY u.created_at, u.id LIMIT ?`).bind(ACCOUNT_BACKFILL_SINCE, owner, limit).all<{ email: string; createdAt: number }>();
  return results;
}

const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/** One small batch per call: Resend allows a few requests per second, so calls are spaced out. */
export async function runAccountBackfill(env: NewsletterEnvironment, fetcher: Fetcher, origin: string, ownerEmail: string | undefined, spacingMs = 600) {
  if (!env.RESEND_API_KEY?.trim()) return { processed: 0, sent: 0, remaining: (await pendingBackfillAccounts(env.DB, ownerEmail)).length, error: 'no_resend_key' };
  const batch = await pendingBackfillAccounts(env.DB, ownerEmail, ACCOUNT_BACKFILL_BATCH);
  const spaced: Fetcher = async (input, init) => { await pause(spacingMs); return fetcher(input, init); };
  let processed = 0, sent = 0;
  for (const account of batch) {
    const subscriber = await enrollAccount(env.DB, { email: account.email, role: 'teacher', accessLevel: 'free' });
    processed += 1;
    if (!subscriber) continue;
    const result = await deliverWelcome(env, spaced, origin, subscriber, 'account');
    if (result.sent) sent += 1;
  }
  const remaining = (await pendingBackfillAccounts(env.DB, ownerEmail)).length;
  return { processed, sent, remaining };
}
