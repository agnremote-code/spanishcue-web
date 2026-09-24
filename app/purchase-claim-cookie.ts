import { createPurchaseClaim, getPurchaseClaim, hashClaimSecret, newClaimSecret, sameSecretHash, type PurchaseProvider } from "../db/purchase-claims";

const name = (provider: PurchaseProvider) => `__Host-spanishcue-claim-${provider}`;

export function purchaseClaimCookie(provider: PurchaseProvider, claimId: string, secret: string) {
  return `${name(provider)}=${claimId}.${secret}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`;
}

export async function authorizePurchaseClaim(db: D1Database, cookieHeader: string | null, provider: PurchaseProvider) {
  const value = cookieHeader?.split(";").map(cookie => cookie.trim()).find(cookie => cookie.startsWith(`${name(provider)}=`))?.slice(name(provider).length + 1);
  if (!value) return null;
  const match = /^([a-f0-9-]{36})\.([a-f0-9]{64})$/.exec(value);
  if (!match) return null;
  const claim = await getPurchaseClaim(db, match[1]);
  if (!claim || claim.expiresAt <= Math.floor(Date.now() / 1000)) return null;
  return sameSecretHash(claim.claimSecretHash, await hashClaimSecret(match[2])) ? claim : null;
}

export async function getOrCreatePurchaseClaim(db: D1Database, cookieHeader: string | null, provider: PurchaseProvider, input: {
  environment: "live" | "sandbox"; offerCode: string; returnTo: string;
}) {
  const existing = await authorizePurchaseClaim(db, cookieHeader, provider);
  if (existing && existing.environment === input.environment && existing.offerCode === input.offerCode &&
    (existing.provider === null || existing.provider === provider) &&
    ["started", "checkout", "paid", "claiming"].includes(existing.status)) {
    return { claim: existing, setCookie: null };
  }
  const secret = newClaimSecret();
  const created = await createPurchaseClaim(db, { ...input, secret });
  const claim = await getPurchaseClaim(db, created.claimId);
  if (!claim) throw new Error("purchase_claim_missing");
  return { claim, setCookie: purchaseClaimCookie(provider, claim.claimId, secret) };
}
