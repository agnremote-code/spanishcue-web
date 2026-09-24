import { env } from "cloudflare:workers";
import { resolveFirebaseAccount, syncFirebaseAccount } from "../../../../db/accounts";
import { bindPurchaseToUser } from "../../../../db/purchase-binding";
import { authorizePurchaseClaim } from "../../../purchase-claim-cookie";
import { billingConfig } from "../../../billing-config";
import { paddleConfig } from "../../../paddle-config";
import {
  FIREBASE_SESSION_COOKIE,
  ownerIdentityFromEnvironment,
  verifyFirebaseIdToken,
} from "../../../firebase-session";

export const dynamic = "force-dynamic";

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ error: "Origen no válido." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Formato no válido." }, { status: 415 });
  }
  const body = await request.text();
  if (body.length > 6000) {
    return Response.json({ error: "Solicitud demasiado grande." }, { status: 413 });
  }
  let idToken = "";
  try {
    const parsed = JSON.parse(body) as { idToken?: unknown };
    if (typeof parsed.idToken === "string") idToken = parsed.idToken;
  } catch {
    return Response.json({ error: "Formato no válido." }, { status: 400 });
  }
  const user = await verifyFirebaseIdToken(idToken);
  if (!user) {
    return Response.json({ error: "La sesión no es válida." }, { status: 401 });
  }
  if (!user.emailVerified) {
    return Response.json(
      {
        error: "Verifica tu email antes de entrar.",
        code: "EMAIL_NOT_VERIFIED",
      },
      {
        status: 403,
        headers: {
          "cache-control": "private, no-store",
          "set-cookie": `${FIREBASE_SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
        },
      },
    );
  }
  const runtimeEnv = env as typeof env & {
    CHESPANISH_OWNER_UID?: string;
    CHESPANISH_OWNER_EMAIL?: string;
  };
  const ownerIdentity = ownerIdentityFromEnvironment({
    CHESPANISH_OWNER_UID: runtimeEnv.CHESPANISH_OWNER_UID,
    CHESPANISH_OWNER_EMAIL: runtimeEnv.CHESPANISH_OWNER_EMAIL,
  });
  let account;
  try {
    account = await syncFirebaseAccount(env.DB, user, ownerIdentity);
  } catch {
    return Response.json(
      { error: "No pudimos preparar tu cuenta. Intentá nuevamente." },
      { status: 503 },
    );
  }
  // Session establishment is also the recovery path after email verification.
  // A purchase is bound only with its HttpOnly secret, provider-confirmed email,
  // and the Firebase-verified identity. Failed billing never blocks sign-in.
  let postPaymentProvider: "paypal" | "paddle" | null = null;
  for (const provider of ["paypal", "paddle"] as const) {
    try {
      const claim = await authorizePurchaseClaim(env.DB, request.headers.get("cookie"), provider);
      if (!claim || !["paid", "claiming"].includes(claim.status)) continue;
      postPaymentProvider = provider;
      if (claim.normalizedEmail === user.email.trim().toLowerCase()) {
        await bindPurchaseToUser(env.DB, claim.claimId, account.userId, user.email,
          billingConfig(env), paddleConfig(env).priceId);
        account = await resolveFirebaseAccount(env.DB, user) || account;
      }
    } catch { /* /pro/claim shows a retry or matching-email recovery step. */ }
  }
  return Response.json(
    {
      email: user.email,
      owner: account.role === "owner",
      accountId: account.userId,
      accessLevel: account.accessLevel,
      postPaymentProvider,
    },
    {
      headers: {
        "cache-control": "private, no-store",
        "set-cookie": `${FIREBASE_SESSION_COOKIE}=${idToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=3300`,
      },
    },
  );
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ error: "Origen no válido." }, { status: 403 });
  }
  return Response.json(
    { ok: true },
    {
      headers: {
        "cache-control": "private, no-store",
        "set-cookie": `${FIREBASE_SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
      },
    },
  );
}
