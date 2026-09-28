import assert from "node:assert/strict";
import test from "node:test";
import { build } from "esbuild";

const result = await build({
  entryPoints: ["app/auth-session-sync.ts"],
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});
const { syncFirebaseSession } = await import(
  "data:text/javascript;base64," +
    Buffer.from(result.outputFiles[0].text).toString("base64")
);

test("a temporary empty Firebase state does not erase the server session", async () => {
  let requests = 0;
  await syncFirebaseSession(null, {
    serverSignedIn: true,
    fetcher: async () => {
      requests += 1;
      return new Response(null, { status: 200 });
    },
    pathname: "/cuenta",
    reload: () => assert.fail("a null auth event must not reload the page"),
    signOut: async () => assert.fail("a null auth event must not sign out again"),
  });
  assert.equal(requests, 0);
});

test("a restored Firebase user re-establishes the server session", async () => {
  let request;
  let reloads = 0;
  await syncFirebaseSession(
    { getIdToken: async () => "firebase-id-token" },
    {
      serverSignedIn: false,
      fetcher: async (url, init) => {
        request = { url, init };
        return new Response(null, { status: 200 });
      },
      pathname: "/cuenta",
      reload: () => { reloads += 1; },
      signOut: async () => assert.fail("a valid session must not sign out"),
    },
  );
  assert.equal(request.url, "/api/auth/session");
  assert.equal(request.init.method, "POST");
  assert.equal(JSON.parse(request.init.body).idToken, "firebase-id-token");
  assert.equal(reloads, 1);
});

test("an explicitly rejected Firebase user is signed out", async () => {
  let signOuts = 0;
  await syncFirebaseSession(
    { getIdToken: async () => "unverified-id-token" },
    {
      serverSignedIn: false,
      fetcher: async () => new Response(null, { status: 403 }),
      pathname: "/cuenta",
      reload: () => assert.fail("a rejected session must not reload"),
      signOut: async () => { signOuts += 1; },
    },
  );
  assert.equal(signOuts, 1);
});
