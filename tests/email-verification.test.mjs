import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("explicit resends have an immediate double-click guard", async () => {
  const source = await readFile("app/ingresar/AuthForm.tsx", "utf8");
  const resend = source.split("const resendVerification = async () => {")[1]?.split("\n  };", 1)[0] ?? "";
  assert.match(resend, /if \(authAttemptRef\.current\) return/);
  assert.match(resend, /authAttemptRef\.current = true/);
  assert.match(resend, /authAttemptRef\.current = false/);
});

test("resend copy tells teachers that only the newest email should be used", async () => {
  const messages = await readFile("app/i18n/messages.ts", "utf8");
  assert.match(messages, /Usá siempre el mensaje más reciente/);
  assert.match(messages, /Always use the most recent message/);
});

test("the app owns a branded verification result route", async () => {
  assert.equal(existsSync("app/auth/action/page.tsx"), true);
  assert.equal(existsSync("app/auth/action/VerificationAction.tsx"), true);
  assert.equal(existsSync("app/auth/action/style.css"), true);
});

test("the public verification page keeps its client bundle publicly loadable", async () => {
  const protection = await readFile("scripts/protect-client-assets.mjs", "utf8");
  assert.match(protection, /app\/auth\/action\/VerificationAction\.tsx/);
});
