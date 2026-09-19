import { env } from "cloudflare:workers";
import { syncFirebaseAccount } from "../../../../db/accounts";
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
  return Response.json(
    {
      email: user.email,
      owner: account.role === "owner",
      accountId: account.userId,
      accessLevel: account.accessLevel,
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
