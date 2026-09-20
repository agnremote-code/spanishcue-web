import type { Auth } from "firebase-admin/auth";
import type { FirebaseUser } from "../app/firebase-session";
import { finishVerificationEmail, reserveVerificationEmail, VERIFICATION_COOLDOWN_SECONDS } from "../db/verification-email";
import type { VerificationEnvironment } from "./firebase-admin";
import { brandedVerificationUrl, verificationEmail, VERIFICATION_FROM } from "./verification-template";

type Dependencies = {
  verifyToken: (token: string) => Promise<FirebaseUser | null>;
  admin: () => Pick<Auth, "getUser" | "generateEmailVerificationLink">;
  fetcher: typeof fetch;
  now: () => number;
};

function reply(status: number, body: Record<string, unknown>, retryAfterSeconds?: number) {
  return Response.json(body, {
    status,
    headers: {
      "cache-control": "private, no-store",
      ...(retryAfterSeconds ? { "retry-after": String(retryAfterSeconds) } : {}),
    },
  });
}

async function boundedBody(request: Request): Promise<string | null> {
  if (Number(request.headers.get("content-length")) > 1000) return null;
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      length += chunk.value.length;
      if (length > 1000) {
        void reader.cancel().catch(() => undefined);
        return null;
      }
      chunks.push(chunk.value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return new TextDecoder().decode(bytes);
}

export async function handleVerificationEmail(
  request: Request,
  env: VerificationEnvironment,
  dependencies: Dependencies,
): Promise<Response> {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return reply(403, { code: "INVALID_ORIGIN" });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply(415, { code: "INVALID_FORMAT" });
  }
  const token = request.headers.get("authorization")?.match(/^Bearer (\S+)$/)?.[1] ?? "";
  if (token.length < 40 || token.length > 4096) return reply(401, { code: "INVALID_SESSION" });
  // Reading a bounded body avoids accepting arbitrary email addresses or URLs.
  const text = await boundedBody(request);
  if (text === null) return reply(413, { code: "REQUEST_TOO_LARGE" });
  let body: { intent?: unknown; locale?: unknown; requestId?: unknown };
  try { body = JSON.parse(text); } catch { return reply(400, { code: "INVALID_FORMAT" }); }
  if (!body || (body.intent !== "initial" && body.intent !== "resend") ||
      (body.locale !== "es" && body.locale !== "en") ||
      (body.intent === "resend" && (typeof body.requestId !== "string" || !/^[a-zA-Z0-9_-]{16,80}$/.test(body.requestId)))) {
    return reply(400, { code: "INVALID_REQUEST" });
  }
  const user = await dependencies.verifyToken(token);
  if (!user) return reply(401, { code: "INVALID_SESSION" });
  if (user.emailVerified) return reply(200, { status: "already_verified" });
  if (!env.RESEND_API_KEY || !env.FIREBASE_ADMIN_SERVICE_ACCOUNT_B64) {
    console.warn("verification_delivery", { stage: "configuration", code: "MISSING_SERVER_CONFIGURATION" });
    return reply(503, { code: "EMAIL_DELIVERY_UNAVAILABLE" });
  }

  let reservationId: string | undefined;
  let stage = "firebase_admin";
  let sendAttempted = false;
  try {
    const admin = dependencies.admin();
    const account = await admin.getUser(user.uid);
    if (account.disabled || !account.email || account.email.toLowerCase() !== user.email.toLowerCase()) {
      return reply(401, { code: "INVALID_SESSION" });
    }
    if (account.emailVerified) return reply(200, { status: "already_verified" });
    const now = dependencies.now();
    // Initial delivery is only available immediately after account creation.
    // Returning users must explicitly choose resend; logging in never sends mail.
    if (body.intent === "initial" &&
        (!Number.isFinite(Date.parse(account.metadata.creationTime)) ||
         now * 1000 - Date.parse(account.metadata.creationTime) > 10 * 60 * 1000)) {
      return reply(409, { code: "EXPLICIT_RESEND_REQUIRED" });
    }
    stage = "reservation";
    const hash = async (value: string) => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))), b => b.toString(16).padStart(2, "0")).join("");
    const identity = await hash(`${user.uid}\n${user.email.toLowerCase()}`);
    // Recipient limits survive deleting/recreating a Firebase account. Gmail
    // aliases share the same mailbox and therefore the same sending quota.
    let mailbox = user.email.toLowerCase();
    const [local, domain] = mailbox.split("@");
    if (domain === "gmail.com" || domain === "googlemail.com") {
      mailbox = `${local.split("+")[0].replace(/\./g, "")}@gmail.com`;
    }
    const recipient = await hash(mailbox);
    const reservation = await reserveVerificationEmail(env.DB, {
      identity, recipient, kind: body.intent, requestKey: body.intent === "initial" ? "initial" : String(body.requestId), now,
    });
    if (reservation.status === "limited") {
      return reply(429, { code: "VERIFICATION_RATE_LIMITED", retryAfterSeconds: reservation.retryAfterSeconds }, reservation.retryAfterSeconds);
    }
    if (reservation.status === "duplicate") {
      return reservation.sent
        ? reply(200, { status: "already_sent", retryAfterSeconds: VERIFICATION_COOLDOWN_SECONDS })
        : reply(409, { code: "EXPLICIT_RESEND_REQUIRED", retryAfterSeconds: VERIFICATION_COOLDOWN_SECONDS });
    }
    reservationId = reservation.id;
    stage = "firebase_link";
    const firebaseLink = await admin.generateEmailVerificationLink(account.email, {
      url: `https://spanishcue.com/auth/action?lang=${body.locale}&status=success`,
      handleCodeInApp: false,
    });
    const actionUrl = brandedVerificationUrl(firebaseLink, body.locale);
    const email = verificationEmail(body.locale, actionUrl);
    stage = "resend";
    sendAttempted = true;
    const response = await dependencies.fetcher("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
        "idempotency-key": `verification/${reservation.id}`,
      },
      body: JSON.stringify({
        from: VERIFICATION_FROM,
        to: [account.email],
        subject: email.subject,
        html: email.html,
        text: email.text,
        tags: [{ name: "category", value: "email_verification" }, { name: "locale", value: body.locale }],
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json().catch(() => null) as { id?: unknown; message?: unknown } | null;
    if (!response.ok || typeof result?.id !== "string") {
      const domainUnverified = typeof result?.message === "string" && /domain/i.test(result.message) && /verif/i.test(result.message);
      console.warn("verification_delivery", {
        stage, code: domainUnverified ? "RESEND_DOMAIN_NOT_VERIFIED" : "RESEND_SEND_REJECTED", status: response.status,
      });
      await finishVerificationEmail(env.DB, reservation.id, response.status >= 500 ? "unknown" : "failed");
      return reply(503, { code: "EMAIL_DELIVERY_UNAVAILABLE", retryAfterSeconds: VERIFICATION_COOLDOWN_SECONDS });
    }
    stage = "confirmation";
    await finishVerificationEmail(env.DB, reservation.id, "sent", result.id);
    return reply(200, { status: "sent", retryAfterSeconds: VERIFICATION_COOLDOWN_SECONDS });
  } catch (error) {
    // Log only an allowlisted diagnostic code. Never log the Error object, user,
    // ID token, generated action link, request body or either server secret.
    const candidateCode = typeof error === "object" && error && "code" in error ? error.code : "";
    const allowedCodes = ["app/invalid-credential", "app/network-error", "app/network-timeout", "auth/insufficient-permission", "auth/internal-error", "auth/user-not-found", "ERR_METHOD_NOT_IMPLEMENTED", "ERR_INVALID_ARG_TYPE", "ERR_MODULE_NOT_FOUND"];
    const code = error instanceof Error && error.message === "FIREBASE_ADMIN_CONFIGURATION_INVALID"
      ? "FIREBASE_ADMIN_CONFIGURATION_INVALID"
      : typeof candidateCode === "string" && allowedCodes.includes(candidateCode) ? candidateCode
      : "DELIVERY_FAILED";
    // Firebase wraps OAuth transport and provider failures in the same code.
    // Classify known causes without ever printing the underlying error text.
    const detail = error instanceof Error ? error.message : "";
    const credentialReason = code !== "app/invalid-credential" ? undefined
      : /invalid jwt signature/i.test(detail) ? "OAUTH_INVALID_JWT_SIGNATURE"
      : /invalid_grant/i.test(detail) ? "OAUTH_INVALID_GRANT"
      : /invalid_client|unauthorized_client/i.test(detail) ? "OAUTH_CLIENT_REJECTED"
      : /invalid_scope/i.test(detail) ? "OAUTH_INVALID_SCOPE"
      : /does not provide an export named|Cannot find module/i.test(detail) ? "WORKER_MODULE_MISSING"
      : /fetch failed|failed to fetch|network|ENOTFOUND|ECONN|ETIMEDOUT|socket/i.test(detail) ? "OAUTH_NETWORK_FAILURE"
      : /Cannot read properties|is not a function|not implemented/i.test(detail) ? "WORKER_RUNTIME_INCOMPATIBLE"
      : /403|permission|disabled|deleted/i.test(detail) ? "OAUTH_ACCESS_DENIED"
      : /401|400/i.test(detail) ? "OAUTH_REQUEST_REJECTED"
      : "OAUTH_UNCLASSIFIED";
    console.warn("verification_delivery", { stage, code, ...(credentialReason ? { reason: credentialReason } : {}) });
    if (reservationId) {
      await finishVerificationEmail(env.DB, reservationId, sendAttempted ? "unknown" : "failed").catch(() => undefined);
    }
    return reply(503, { code: "EMAIL_DELIVERY_UNAVAILABLE", retryAfterSeconds: VERIFICATION_COOLDOWN_SECONDS });
  }
}
