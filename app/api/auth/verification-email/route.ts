import "server-only";
import { env } from "cloudflare:workers";
import { verifyFirebaseIdToken } from "../../../firebase-session";
import { firebaseAdminAuth, type VerificationEnvironment } from "../../../../server/firebase-admin";
import { handleVerificationEmail } from "../../../../server/verification-delivery";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const runtime = env as unknown as VerificationEnvironment;
  return handleVerificationEmail(request, runtime, {
    verifyToken: verifyFirebaseIdToken,
    admin: () => firebaseAdminAuth(runtime),
    fetcher: fetch,
    now: () => Math.floor(Date.now() / 1000),
  });
}
