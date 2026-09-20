import "server-only";
import { Buffer } from "node:buffer";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { JWT } from "google-auth-library";
import { firebaseConfig } from "../app/firebase-config";

export type VerificationEnvironment = {
  DB: D1Database;
  RESEND_API_KEY?: string;
  FIREBASE_ADMIN_SERVICE_ACCOUNT_B64?: string;
};

export function firebaseAdminAuth(env: VerificationEnvironment) {
  const name = "spanishcue-verification";
  const existing = getApps().find((app) => app.name === name);
  if (existing) return getAuth(existing);
  try {
    const encoded = env.FIREBASE_ADMIN_SERVICE_ACCOUNT_B64;
    if (!encoded || encoded.length > 32000) throw new Error();
    const account = JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
    if (
      account.type !== "service_account" ||
      account.project_id !== firebaseConfig.projectId ||
      typeof account.client_email !== "string" ||
      !account.client_email.endsWith(".iam.gserviceaccount.com") ||
      typeof account.private_key !== "string" ||
      !account.private_key.includes("-----BEGIN PRIVATE KEY-----")
    ) throw new Error();
    // Keep Firebase's service-account validation, and use Google's official
    // OAuth client with Worker-native fetch instead of its Node fetch adapter.
    cert({ projectId: account.project_id, clientEmail: account.client_email, privateKey: account.private_key });
    const oauth = new JWT({
      email: account.client_email,
      key: account.private_key,
      scopes: ["https://www.googleapis.com/auth/identitytoolkit", "https://www.googleapis.com/auth/userinfo.email"],
      transporterOptions: {
        fetchImplementation: (input, init) => fetch(input, { ...init, signal: AbortSignal.timeout(15000) }),
      },
    });
    return getAuth(initializeApp({
      projectId: firebaseConfig.projectId,
      credential: {
        async getAccessToken() {
          const { token } = await oauth.getAccessToken();
          const expiry = oauth.credentials.expiry_date;
          if (!token || !expiry) throw new Error("FIREBASE_ADMIN_TOKEN_UNAVAILABLE");
          return { access_token: token, expires_in: Math.max(1, Math.floor((expiry - Date.now()) / 1000)) };
        },
      },
    }, name));
  } catch {
    // Never attach the underlying parse/credential error or its input.
    throw new Error("FIREBASE_ADMIN_CONFIGURATION_INVALID");
  }
}
